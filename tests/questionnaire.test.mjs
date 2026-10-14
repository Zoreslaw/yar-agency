import {test} from 'node:test';
import assert from 'node:assert/strict';
import handler from '../api/questionnaire.js';
import {validateQuestionnaire,questionnaireEmail} from '../server/questionnaire-email.js';
const valid=()=>({requestId:'12345678-1234-4234-8234-123456789abc',type:'Концерт',answers:{name:'Тестова анкета <img src=x>',email:'test@example.com',idea:'Рядок один\nРядок два',city:'Київ',previous:0,audience:'100–200',dates:'20.10.2026',scope:['Booking'],crew:'invalid'}});
function response(){return {headers:{},setHeader(key,value){this.headers[key]=value;},status(code){this.code=code;return this;},json(body){this.body=body;return this;}};}
const request=(body,extra={})=>({method:'POST',headers:{origin:'https://yar-agcy.space','content-type':'application/json','x-forwarded-for':'test-'+Math.random()},body,...extra});
test('relevant fields, zero values, escaped HTML, reply-to and multiline text',()=>{
 const data=validateQuestionnaire(valid());assert.equal(data.answers.previous,'0');assert.equal(data.answers.crew,undefined);assert.equal(data.answers.scope,undefined);
 const mail=questionnaireEmail(data);assert.equal(mail.reply_to,'test@example.com');assert.match(mail.html,/&lt;img src=x&gt;/);assert.doesNotMatch(mail.html,/<img src=x>/);assert.match(mail.html,/Рядок один<br>Рядок два/);assert.match(mail.text,/Попередні продажі квитків:\n0/);
});
test('all request formats preserve only the applicable answers',()=>{
 for(const type of ['Концерт','Тур / поїздка','Постійна співпраця','Інше']){
  const body=valid();body.type=type;body.answers.crew=5;
  const data=validateQuestionnaire(body);assert.equal(data.answers.crew,type==='Тур / поїздка'?'5':undefined);assert.equal(data.answers.scope,type==='Постійна співпраця'?'Booking':undefined);
 }
});
test('rejects malformed required data, unsafe links, invalid counts and oversized descriptions',()=>{
 for(const edit of [body=>body.answers.email='bad',body=>body.answers.name='x\r\nBcc: x@y.com',body=>body.answers.idea=' ',body=>body.answers.idea='x'.repeat(5001),body=>body.answers.social='javascript:alert(1)',body=>body.answers.previous=-1,body=>body.answers.audience='200–100',body=>body.type='fake']){
  const body=valid();edit(body);assert.throws(()=>validateQuestionnaire(body));
 }
});
test('API rejects foreign origins, non-JSON, bots and missing configuration',async()=>{
 for(const [req,status] of [[request(valid(),{method:'GET'}),405],[request(valid(),{headers:{origin:'https://attacker.example','content-type':'application/json'}}),403],[request(valid(),{headers:{origin:'https://yar-agcy.space','content-type':'text/plain'}}),415],[request({...valid(),website:'spam'}),400],[request(valid()),503]]){
  const res=response();await handler(req,res);assert.equal(res.code,status);
 }
});
test('API fixes recipients server-side, reuses idempotency and does not report provider errors as success',async()=>{
 const previous={...process.env};const originalFetch=globalThis.fetch;
 try{
  process.env.RESEND_API_KEY='test-only';process.env.EMAIL_FROM='YAR <forms@yar-agcy.space>';process.env.EMAIL_TO='one@example.com,two@example.com';
  const calls=[];globalThis.fetch=async(url,options)=>{calls.push({url,...options});return {ok:true,json:async()=>({id:'test-mail'})};};
  const body={...valid(),to:'attacker@example.com'};
  for(let i=0;i<2;i++){const res=response();await handler(request(body),res);assert.equal(res.code,200);assert.deepEqual(res.body,{accepted:true});}
  assert.deepEqual(JSON.parse(calls[0].body).to,['one@example.com','two@example.com']);assert.equal(calls[0].headers['Idempotency-Key'],calls[1].headers['Idempotency-Key']);
  globalThis.fetch=async()=>({ok:false,json:async()=>({message:'private provider detail'})});const failed=response();await handler(request(body),failed);assert.equal(failed.code,502);assert.doesNotMatch(JSON.stringify(failed.body),/private/);
  globalThis.fetch=async()=>{throw new Error('timeout');};const timeout=response();await handler(request(body),timeout);assert.equal(timeout.code,502);
 }finally{globalThis.fetch=originalFetch;for(const key of ['RESEND_API_KEY','EMAIL_FROM','EMAIL_TO']){if(previous[key]===undefined)delete process.env[key];else process.env[key]=previous[key];}}
});
test('repeated requests from one IP are throttled',async()=>{
 let res;for(let i=0;i<6;i++){res=response();const req=request(valid());req.headers['x-forwarded-for']='rate-test';await handler(req,res);}assert.equal(res.code,429);assert.equal(res.headers['Retry-After'],'60');
});
