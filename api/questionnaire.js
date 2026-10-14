import {createHash} from 'node:crypto';
import {validateQuestionnaire,questionnaireEmail} from '../server/questionnaire-email.js';

// Best-effort per-instance throttling; use a Vercel Firewall rule for global limits.
const attempts=new Map();
function limited(ip){
 const now=Date.now();
 for(const [key,entry] of attempts)if(now-entry.start>60000)attempts.delete(key);
 const entry=attempts.get(ip)||{start:now,count:0};
 entry.count++;attempts.set(ip,entry);
 return entry.count>5||attempts.size>10000;
}
export default async function handler(req,res){
 res.setHeader('Cache-Control','no-store');
 if(req.method!=='POST'){res.setHeader('Allow','POST');return res.status(405).json({error:'method'});}
 const origins=new Set(['https://yar-agcy.space','https://www.yar-agcy.space','https://yar-agency.vercel.app']);
 if(process.env.VERCEL_URL)origins.add(`https://${process.env.VERCEL_URL}`);
 if(process.env.VERCEL_BRANCH_URL)origins.add(`https://${process.env.VERCEL_BRANCH_URL}`);
 if(!origins.has(req.headers.origin))return res.status(403).json({error:'origin'});
 if(!/^application\/json(?:;|$)/i.test(req.headers['content-type']||''))return res.status(415).json({error:'content_type'});
 if(Number(req.headers['content-length'])>20000)return res.status(413).json({error:'size'});
 const ip=String(req.headers['x-forwarded-for']||req.socket?.remoteAddress||'unknown').split(',')[0].trim();
 if(limited(ip)){res.setHeader('Retry-After','60');return res.status(429).json({error:'rate_limit'});}
 let body,data;
 try{
  body=typeof req.body==='string'?JSON.parse(req.body):req.body;
  if(Buffer.byteLength(JSON.stringify(body)||'')>20000)return res.status(413).json({error:'size'});
  if(body?.website)return res.status(400).json({error:'invalid'});
  data=validateQuestionnaire(body);
 }catch{return res.status(400).json({error:'invalid'});}
 const recipients=[...new Set((process.env.EMAIL_TO||'').split(',').map(value=>value.trim()).filter(Boolean))];
 if(!process.env.RESEND_API_KEY||!process.env.EMAIL_FROM||recipients.length!==2||!recipients.every(value=>/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(value)))return res.status(503).json({error:'unavailable'});
 const message=questionnaireEmail(data);
 const idempotency=createHash('sha256').update(JSON.stringify({requestId:body.requestId,...data})).digest('hex');
 try{
  const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`,'Content-Type':'application/json','Idempotency-Key':`questionnaire-${idempotency}`},body:JSON.stringify({from:process.env.EMAIL_FROM,to:recipients,...message}),signal:AbortSignal.timeout(15000)});
  const result=await response.json();
  if(!response.ok||!result.id)return res.status(502).json({error:'delivery'});
  return res.status(200).json({accepted:true});
 }catch{return res.status(502).json({error:'delivery'});}
}
