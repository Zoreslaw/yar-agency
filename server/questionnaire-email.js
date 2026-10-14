import {labels, fieldsByType, types} from '../src/questionnaire-schema.js';

const limits={name:100,email:254,social:1000,city:150,dates:150,audience:300,previous:15,listeners:300,duration:15,format:100,eventRole:100,merch:300,route:1000,crew:15,scope:300,idea:5000};
const emailPattern=/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
const scopes=['Booking','Логістика','Продакшн концерту','Промоція','Візуальна комунікація','Фото / відео'];
export function validateQuestionnaire(body){
 if(!body||typeof body!=='object'||!types.includes(body.type)||!body.answers||typeof body.answers!=='object'||Array.isArray(body.answers))throw new Error('invalid');
 if(typeof body.requestId!=='string'||!/^[a-f0-9-]{36}$/i.test(body.requestId))throw new Error('invalid');
 const keys=['name','email','social',...fieldsByType[body.type],'idea'];
 const answers={};
 for(const key of keys){
  let value=body.answers[key]??'';
  if(key==='scope'&&Array.isArray(value)){
   if(value.length>6||!value.every(item=>scopes.includes(item)))throw new Error('invalid');
   value=value.join(', ');
  }
  if(typeof value==='number'&&Number.isSafeInteger(value))value=String(value);
  if(typeof value!=='string'||value.length>limits[key]||/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(value))throw new Error('invalid');
  answers[key]=value.trim();
 }
 if(!answers.name||/[\r\n]/.test(answers.name)||!emailPattern.test(answers.email)||!answers.idea)throw new Error('invalid');
 if(answers.social&&!answers.social.split(/[\s,]+/).every(link=>{try{const url=new URL(link.startsWith('www.')?`https://${link}`:link);return ['https:','http:'].includes(url.protocol)&&url.hostname.includes('.')&&!url.username&&!url.password;}catch{return false;}}))throw new Error('invalid');
 for(const key of ['previous','duration','crew'])if(answers[key]&&(!/^\d+$/.test(answers[key])||!Number.isSafeInteger(Number(answers[key]))||Number(answers[key])<(key==='previous'?0:1)))throw new Error('invalid');
 if(answers.audience){const m=answers.audience.match(/^(?:~\s*)?(\d+)(?:\s*[-–]\s*(\d+))?$/);if(!m||(m[2]&&Number(m[2])<Number(m[1])))throw new Error('invalid');}
 if(answers.format&&!['Акустичний концерт','Full band'].includes(answers.format))throw new Error('invalid');
 if(answers.eventRole&&!['Сольний концерт','Multi-artist concert (line-up)','Headliner','Support / opening act'].includes(answers.eventRole))throw new Error('invalid');
 return {type:body.type,answers};
}
const escape=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
export function questionnaireEmail({type,answers}){
 const rows=Object.entries(answers).filter(([,value])=>value);
 const text=`YAR / Нова анкета\nФормат: ${type}\n\n${rows.map(([key,value])=>`${labels[key]}:\n${value}`).join('\n\n')}`;
 // Table layout and inline styles keep this readable in Gmail and Outlook.
 const html=`<!doctype html><html lang="uk"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head><body style="margin:0;background:#1D223D;color:#1D223D;font-family:Arial,Helvetica,sans-serif"><table role="presentation" width="100%" cellspacing="0" cellpadding="0"><tr><td align="center" style="padding:24px 12px"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background:#FFFBD4"><tr><td style="padding:24px 28px;background:#991A1E"><img src="https://yar-agcy.space/media/IMG_0384.PNG" width="150" alt="YAR Agency" style="display:block;height:auto;max-width:100%;border:0"><p style="color:#FFCC00;font-size:12px;letter-spacing:2px;margin:18px 0 0">НОВА АНКЕТА / ${escape(type.toUpperCase())}</p></td></tr><tr><td style="padding:28px"><h1 style="font-size:28px;line-height:1.2;font-weight:600;margin:0 0 12px;overflow-wrap:anywhere">${escape(answers.name)}</h1><p style="font-size:14px;line-height:1.6;margin:0 0 28px"><a style="color:#991A1E" href="mailto:${escape(answers.email)}">${escape(answers.email)}</a></p><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="table-layout:fixed">${rows.map(([key,value])=>`<tr><td style="border-top:1px solid #d8d5b8;padding:16px 0"><p style="font-size:11px;color:#626273;margin:0 0 8px">${escape(labels[key])}</p><p style="font-size:15px;line-height:1.65;margin:0;overflow-wrap:anywhere;word-break:break-word">${key==='social'?value.split(/[\s,]+/).map(link=>`<a style="color:#991A1E" href="${escape(link.startsWith('www.')?'https://'+link:link)}">${escape(link)}</a>`).join('<br>'):escape(value).replace(/\n/g,'<br>')}</p></td></tr>`).join('')}</table><p style="font-size:12px;line-height:1.7;margin:28px 0 0">Натисни «Відповісти» у поштовому застосунку, щоб написати автору анкети.</p></td></tr><tr><td style="height:8px;background:#FFCC00"></td></tr></table></td></tr></table></body></html>`;
 return {subject:`YAR · Нова анкета · ${type} · ${answers.name}`,html,text,reply_to:answers.email};
}
