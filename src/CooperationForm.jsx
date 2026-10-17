import {useLanguage} from './i18n.jsx';
import React, {useEffect, useRef, useState} from 'react';
import {InterfaceIcon} from './components/InterfaceIcon.jsx';
import {ActionButton, UtilityButton} from './components/Buttons.jsx';
import {FormProvider, useForm, useFormContext, useWatch, useController} from 'react-hook-form';
import {TextInput, Textarea, Autocomplete} from '@mantine/core';
import {DatePickerInput} from '@mantine/dates';
import {useMediaQuery} from '@mantine/hooks';
import dayjs from 'dayjs';

import {types, typeTitles, commonFields, labels, fieldsByType} from './questionnaire-schema.js';

const placeholders={name:'Ім’я або як тебе називати',project:'Назва проєкту, якщо є',role:'Наприклад, артист, менеджер або організатор',email:'name@example.com',social:'@нік, назва проєкту, посилання або де тебе знайти',city:'Наприклад, Варшава; майданчик ще шукаємо',audience:'Наприклад, до 100 людей або поки не знаю',previous:'Наприклад, це перший концерт; або Львів — близько 80 людей',duration:'Наприклад, 45 хвилин або два сети',format:'Наприклад, електронний сет, акустичний дует або гурт із п’яти музикантів',eventRole:'Наприклад, власний концерт, фестиваль або виступ на розігріві',crew:'Наприклад, четверо музикантів і технік; склад ще уточнюємо',team:'Наприклад, менеджер, PR-фахівець; або поки працюю самостійно',goals:'Що хочеш розвивати або реалізувати?',readiness:'Наприклад, є майданчик і дата; або поки лише задум'};
const prompts={
 'Концерт':{title:'Про твій виступ.',label:'Яка допомога з виступом потрібна?',hint:'Хочеш організувати концерт, знайти можливість виступити чи залучити нас до вже запланованої події?'},
 'Тур / поїздка':{title:'Про твій маршрут.',label:'Що потрібно організувати?',hint:'Наприклад, допомогти зібрати тур або взяти на себе частину вже запланованої поїздки.'},
 'Постійна співпраця':{title:'Твоя музика. Плани. Співпраця.',label:'Що хочеш делегувати менеджменту?',hint:'Розкажи, на якому етапі твій проєкт і якої підтримки очікуєш. Достатньо кількох речень.'},
 'Окреме завдання':{title:'Про твоє завдання.',label:'З чим потрібна допомога?',hint:'Наприклад, промоція, візуальна комунікація або фото / відео. Опиши бажаний результат своїми словами.'},
 'Інше':{title:'Розкажи про ідею.',label:'Що хочеш обговорити?',hint:'Готовий план не потрібен. Розкажи, що задумав або в чому ще не визначився.'}
};
const formatDates=range=>[...new Set((range||[]).filter(Boolean).map(date=>dayjs(date).format('DD.MM.YYYY')))].join(' — ');
function Field({name,label=labels[name],required=false,kind='input',hint,maxLength=300,rules={},...props}) {
 const {t} = useLanguage();
 const {control}=useFormContext();
 const {field,fieldState}=useController({name,control,rules:{maxLength:{value:maxLength,message:t('Максимум {count} символів.',{count:maxLength})},validate:required?value=>Boolean(String(value??'').trim())||t("Заповни це поле."):undefined,...rules}});
 const common={...field,value:field.value??'',label:t(label),required,error:fieldState.error?.message,description:hint?t(hint):undefined,placeholder:t(placeholders[name]||''),className:'kit-field',size:'md',...props};
 if(kind==='textarea')return <Textarea {...common} maxLength={maxLength}/>;
 return <TextInput {...common} maxLength={maxLength}/>;
}
function DateField(){
 const {t} = useLanguage();
 const {control}=useFormContext(),mobile=useMediaQuery('(max-width:900px)');
 const {field,fieldState}=useController({name:'dateRange',control,rules:{validate:value=>!value?.[0]||Boolean(value?.[1])||t("Оберіть кінець періоду або натисніть ту саму дату вдруге. Якщо ще не визначився — очисть поле.")}});
 return <DatePickerInput type="range" allowSingleDateInRange clearable clearButtonProps={{'aria-label':t("Очистити дати")}} label={t(labels.dates)} description={t("Необов’язково. Якщо ще не визначився, залиш поле порожнім.")} placeholder={t("Обрати дату або період")} value={field.value} onChange={field.onChange} onBlur={field.onBlur} ref={field.ref} error={fieldState.error?.message}
 valueFormat="DD.MM.YYYY" dropdownType={mobile?'modal':'popover'} modalProps={{title:t("Обери дати"),centered:true,withCloseButton:true,classNames:{content:'request-calendar',header:'request-calendar-header',title:'request-calendar-title'},closeButtonProps:{'aria-label':t("Закрити календар")}}} popoverProps={{withinPortal:true}}
 previousLabel={t("Попередній місяць")} nextLabel={t("Наступний місяць")} ariaLabels={{monthLevelControl:t("Обрати місяць"),yearLevelControl:t("Обрати рік")}} className="kit-field" size="sm"/>;
}
const citySuggestions=['Варшава','Краків','Познань','Вроцлав','Гданськ','Київ','Львів','Берлін','Прага'];
function RouteField(){
 const {t} = useLanguage();
 const {control}=useFormContext();
 const {field,fieldState}=useController({name:'route',control,rules:{maxLength:{value:1000,message:t("Маршрут має бути коротшим за 1000 символів.")}}});
 const points=String(field.value||'').split('\n');
 const inputs=useRef([]),pendingFocus=useRef(null);
 useEffect(()=>{if(pendingFocus.current!==null){inputs.current[pendingFocus.current]?.focus();pendingFocus.current=null;}},[field.value]);
 const update=next=>field.onChange(next.join('\n'));
 return <fieldset className="request-section route-field"><legend>{t("Маршрут")}</legend><p className="section-note">{t("Міста в порядку поїздки. Обери підказку або впиши своє. Можна заповнити пізніше.")}</p>
 {points.map((point,index)=><div className="route-point" key={index}><Autocomplete ref={element=>{inputs.current[index]=element;if(index===0)field.ref(element);}} label={t('Місто {count}',{count:index+1})} value={point} data={citySuggestions.map(city=>t(city))} maxLength={150} placeholder={t("Почни вводити місто")} onBlur={field.onBlur} onChange={value=>update(points.map((item,i)=>i===index?value:item))} className="kit-field" comboboxProps={{withinPortal:true}}/>
 <UtilityButton className="route-remove" aria-label={t('Прибрати місто {count}',{count:index+1})} onClick={()=>{pendingFocus.current=Math.max(0,index-1);update(points.length===1?['']:points.filter((_,i)=>i!==index));}}>×</UtilityButton></div>)}
 {fieldState.error&&<p role="alert">{fieldState.error.message}</p>}
 <UtilityButton className="route-add" disabled={points.length>=12} onClick={()=>{pendingFocus.current=points.length;update([...points,'']);}}>{t("+ Додати місто")}</UtilityButton>
 </fieldset>;
}
const typeNotes = ['Організувати виступ або допомогти з подією', 'Спланувати маршрут або підтримати поїздку', 'Постійна робота над проєктом артиста', 'Допомога з конкретною задачею', 'Можна звернутися без готового плану'];
function TypePicker(){
 const {t} = useLanguage();
 const {control,clearErrors,getValues,setValue}=useFormContext();const {field}=useController({name:'type',control});
 const drafts=useRef({});
 const change=type=>{
  if(type===field.value)return;
  const keys=[...new Set([...Object.values(fieldsByType).flat().filter(key=>key!=='dates'),'idea','dateRange'])];
  drafts.current[field.value]=Object.fromEntries(keys.map(key=>[key,getValues(key)]));
  for(const key of keys)setValue(key,drafts.current[type]?.[key]??(key==='dateRange'?[null,null]:''));
  field.onChange(type);clearErrors();
 };
 return <fieldset className="format-picker"><legend>{t("З чим звертаєшся?")}</legend><div className="format-options">{types.map((type,index)=><label key={type} className={field.value===type?'selected':''}><input type="radio" name={field.name} value={type} checked={field.value===type} onChange={()=>change(type)}/><span><strong>{t(typeTitles[type]||type)}</strong><small>{t(typeNotes[index])}</small></span><span className="format-check" aria-hidden="true"><InterfaceIcon kind={field.value===type?'check':'circle'}/></span></label>)}</div><p className="format-selected-note">{t(typeNotes[types.indexOf(field.value)])}</p></fieldset>;
}
const steps=['Знайомство','Деталі','Перевірка'];
const titles=['Почнімо зі знайомства.', 'Твій задум. Наші задачі.', 'Усе важливе — тут.'];
export function CooperationForm({initialType}) {
 const {t, language, href:localeHref} = useLanguage();
 const methods = useForm({mode:'onTouched', reValidateMode:'onChange', shouldFocusError:true,
  defaultValues:{type:initialType,...Object.fromEntries(Object.keys(labels).map(key=>[key,''])),dateRange:[null,null]}});
 const {control} = methods;
 const previousLanguage=useRef(language);
 useEffect(()=>{
  if(previousLanguage.current===language)return;
  previousLanguage.current=language;
  const fields=Object.keys(methods.formState.errors);
  if(fields.length)void methods.trigger(fields,{shouldFocus:false});
 },[language,methods]);
 const type = useWatch({control,name:'type'});
 const [saved,setSaved] = useState(false);
 const [sending,setSending]=useState(false),[sendError,setSendError]=useState('');
 const inFlight=useRef(false),requestId=useRef(null),honeypot=useRef(null),errorNotice=useRef(null);
 const [step,setStep] = useState(0);
 const [draftVersion,setDraftVersion]=useState(0);
 const heading=useRef(null), scroll=useRef(null), focusPending=useRef(false);
 const values=useWatch({control});
 const dates=formatDates(values.dateRange);
 const reviewValues={...values,dates};
 const relevant=[...commonFields,...(fieldsByType[type]||[]).filter(key=>key!=='dates'),...(fieldsByType[type]?.includes('dates')?['dateRange']:[]),'idea'];
 const goTo=next=>{focusPending.current=true;setStep(next);};
 useEffect(()=>{if(focusPending.current){scroll.current?.scrollTo(0,0);heading.current?.focus();focusPending.current=false;}},[step,saved]);
 useEffect(()=>{if(sendError){errorNotice.current?.scrollIntoView({block:'nearest'});errorNotice.current?.focus({preventScroll:true});}},[sendError]);
 const advance=async()=>{
  if(inFlight.current||saved)return;
  const fields=step===0?commonFields:relevant;
  if(await methods.trigger(fields,{shouldFocus:true})) {if(step<2)goTo(step+1);else await send(methods.getValues());}
 };

 useEffect(()=>{const subscription=methods.watch(()=>{setSaved(false);setSendError('');requestId.current=null;});return()=>subscription.unsubscribe();},[methods.watch]);
 const send = async values => {
  if(inFlight.current)return;
  inFlight.current=true;setSending(true);setSendError('');
  requestId.current??=crypto.randomUUID();
  const dates=formatDates(values.dateRange);
  const keys=[...commonFields,...(fieldsByType[values.type]||[]),'idea'];
  const answers=Object.fromEntries(keys.map(key=>[key,key==='dates'?dates:values[key]]));
  try {
   const response=await fetch('/api/questionnaire',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({type:values.type,answers,requestId:requestId.current,website:honeypot.current?.value||''}),signal:AbortSignal.timeout(25000)});
   const result=await response.json().catch(()=>null);
   if(!response.ok||!result?.accepted)throw new Error(response.status===429?'rate-limit':'submission');
   focusPending.current=true;setSaved(true);
  } catch(error){setSendError(error.name==='TimeoutError'?"Підтвердження затримується. Відповіді збережено у відкритій анкеті. Повтори спробу — повторний запит не створить дубль листа.":error.message==='rate-limit'?'Забагато спроб. Зачекай хвилину й спробуй ще раз.':error.message==='submission'?'Не вдалося підтвердити відправлення. Відповіді залишились тут — спробуй ще раз або напиши на yars.agency@gmail.com.':"Немає з’єднання. Перевір інтернет і спробуй ще раз. Відповіді залишились в анкеті.");}
  finally {inFlight.current=false;setSending(false);}
 };

 return <FormProvider {...methods}><form className="request-form" noValidate onSubmit={event=>{event.preventDefault();advance();}} onChange={()=>{setSaved(false);setSendError('');requestId.current=null;}}>
  <div className="request-trap" aria-hidden="true"><label>Website<input ref={honeypot} name="website" tabIndex={-1} autoComplete="off"/></label></div>
  <aside className="request-rail"><div><p className="rail-headline">{t("За лаштунками")}<br/><em>{t("твого звуку.")}</em></p></div><ol aria-label={t("Етапи анкети")}>{steps.map((label,index)=><li key={label} aria-current={index===step?'step':undefined}><span aria-hidden="true">{index<step?<InterfaceIcon kind="check"/>:`0${index+1}`}</span>{t(label)}</li>)}</ol></aside>
  <div className="request-workspace"><div className="request-scroll" ref={scroll}>
   <div className="step-intro"><p className="step-kicker">{saved?t("АНКЕТА ГОТОВА"):t('КРОК {step} ІЗ 3 / {title}',{step:step+1,title:t(steps[step]).toLocaleUpperCase(language)})}</p><h2 tabIndex={-1} ref={heading}>{saved?t("Дякуємо за звернення."):step===1?t(prompts[type].title):t(titles[step])}</h2><p>{saved?t("Анкету передано для надсилання команді YAR. Контакт для відповіді — email, який ти вказав у формі."):step===0?t("Як тебе знайти та з чим можемо допомогти?"):step===1?t("Поділись тим, що вже знаєш. Необов’язкові деталі можна залишити на потім."):t("Переглянь відповіді перед надсиланням. До будь-якого кроку можна повернутися.")}</p></div>
   <div hidden={step!==0||saved}><TypePicker key={draftVersion}/>

   <p className="required-guide"><span aria-hidden="true">*</span> {t("Обов’язкові поля")}</p>
   <fieldset className="request-section"><legend>{t("Як з тобою зв’язатися")}</legend>
    <Field name="name" required maxLength={100} autoComplete="name"/>
    <Field name="email" required type="email" autoComplete="email" maxLength={254} rules={{validate:value=>Boolean(value?.trim())&&/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(value.trim())||t("Вкажи email у форматі name@example.com.")}}/>
    <Field name="social" kind="textarea" rows={2} maxLength={1000} hint={t("Посилання, @нік або назва. Якщо не стосується запиту — пропусти.")}/>
    <details className="request-extra"><summary>{t("Додати назву проєкту та свою роль")}</summary><Field name="project" maxLength={150} autoComplete="organization"/><Field name="role"/></details>
   </fieldset>
   <p className="request-privacy-intro">{t("Відповіді потрібні, щоб розглянути твій запит і зв’язатися з тобою.")} <a href={localeHref('/privacy.html')} target="_blank" rel="noreferrer">{t("Політика конфіденційності")}<span className="sr-only"> {t("(нова вкладка)")}</span></a>.</p>
   </div><div hidden={step!==1||saved}>
   <Field name="idea" label={t(prompts[type].label)} hint={t(prompts[type].hint)} placeholder={t("Розкажи своїми словами")} kind="textarea" rows={4} required maxLength={5000}/>
   {type==='Постійна співпраця'&&<fieldset className="request-section"><legend>{t("Про твій проєкт")}</legend><Field name="goals" kind="textarea" rows={3} maxLength={1500}/><Field name="team" kind="textarea" rows={2} maxLength={1000}/></fieldset>}
   {['Концерт','Тур / поїздка','Окреме завдання'].includes(type)&&<Field name="readiness" kind="textarea" rows={2} maxLength={1000}/>}
   {type==='Концерт'&&<fieldset className="request-section"><legend>{t("Деталі, якщо вже відомі")}</legend><Field name="city" maxLength={150}/><DateField/>
    <details className="request-extra"><summary>{t("Додати інформацію про виступ")}</summary><p className="section-note">{t("Можна пропустити, якщо це не стосується твоєї задачі.")}</p>
     <Field name="eventRole"/><Field name="format"/><Field name="duration"/><Field name="audience"/><Field name="previous" kind="textarea" rows={3} maxLength={1000}/>
    </details></fieldset>}
   {type==='Тур / поїздка'&&<><RouteField/><DateField/><Field name="crew" kind="textarea" rows={2} maxLength={500}/></>}
   {type==='Окреме завдання'&&<DateField/>}
   </div>
   {step===2&&!saved&&<div className="request-review">
    <div className="review-format"><div><span>{t("Формат співпраці")}</span><strong>{t(typeTitles[type]||type)}</strong></div><UtilityButton disabled={sending} onClick={()=>goTo(0)}>{t("Змінити формат")}</UtilityButton></div>
    {[{title:t("Контакти"),keys:commonFields,step:0},{title:t("Твій запит"),keys:['idea',...(fieldsByType[type]||[])],step:1}].map(group=><section className="review-group" key={group.title}><div className="review-group-heading"><h3>{group.title}</h3><UtilityButton aria-label={group.step===0?t("Змінити контакти"):t("Змінити деталі")} disabled={sending} onClick={()=>goTo(group.step)}>{t("Змінити")}</UtilityButton></div><dl>{group.keys.filter(key=>String(reviewValues[key]??'').trim()).map(key=><div key={key}><dt>{t(labels[key])}</dt><dd>{String(reviewValues[key]).trim()}</dd></div>)}</dl></section>)}
   </div>}

   {saved&&<div className="request-success" role="status"><span aria-hidden="true"><InterfaceIcon/></span><strong>{t("Залишаймося на зв’язку.")}</strong><p>{t("Якщо хочеш щось додати до відповідей, напиши нам.")}</p><a href="mailto:yars.agency@gmail.com">{t("Написати YAR")} <InterfaceIcon/></a><UtilityButton onClick={()=>{methods.reset({type:initialType,...Object.fromEntries(Object.keys(labels).map(key=>[key,''])),dateRange:[null,null]});setDraftVersion(value=>value+1);setSaved(false);goTo(0);}}>{t("Нове звернення")}</UtilityButton></div>}
   {sendError&&<p ref={errorNotice} tabIndex={-1} className="request-send-error" role="alert">{t(sendError)}</p>}
  </div>
  <div className="request-footer"><div className="request-footer-note">{saved?'':step===0?'':step===1?'':<>{t("Відповіді надійдуть команді YAR для обговорення співпраці.")} <a href={localeHref('/privacy.html')} target="_blank" rel="noreferrer">{t("Політика конфіденційності")}<span className="sr-only"> {t("(нова вкладка)")}</span></a>.</>}</div><div className="request-actions">{!saved&&step>0&&<UtilityButton disabled={sending} className="request-back" onClick={()=>{setSendError('');goTo(step-1);}}>{t("Назад")}</UtilityButton>}{!saved&&<ActionButton type="submit" tone="red" size="small" busy={sending}>{step===2?t("Надіслати анкету"):t("Далі")}</ActionButton>}</div></div>
 </div></form></FormProvider>;
}
