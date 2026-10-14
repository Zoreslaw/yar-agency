import React, {useEffect, useRef, useState} from 'react';
import {FormProvider, useForm, useFormContext, useWatch, useController} from 'react-hook-form';
import {TextInput, Textarea, Select, MultiSelect, NumberInput, SegmentedControl, Button} from '@mantine/core';
import {DatePickerInput} from '@mantine/dates';
import {useMediaQuery} from '@mantine/hooks';
import dayjs from 'dayjs';

import {types, labels, fieldsByType} from './questionnaire-schema.js';

const placeholders={name:'Ім’я, псевдонім або назва гурту',email:'name@example.com',social:'https://instagram.com/назва\nhttps://open.spotify.com/artist/…',city:'Наприклад, Познань / назва клубу',audience:'100 або 100–200',previous:'Наприклад, 80',listeners:'Хто слухає вашу музику?',duration:'45',merch:'Футболки, платівки або не плануємо',route:'Познань → Варшава → Краків',crew:'Наприклад, 5',scope:'Оберіть напрями',idea:'Що вже підготовлено і яка допомога потрібна?'};
function Field({name,label=labels[name],required=false,kind='input',options,hint,maxLength=300,rules={},...props}) {
 const {control}=useFormContext();
 const {field,fieldState}=useController({name,control,rules:{maxLength:{value:maxLength,message:`Максимум ${maxLength} символів.`},validate:required?value=>Boolean(String(value??'').trim())||'Заповни це поле.':undefined,...rules}});
 const common={...field,value:field.value??'',label,required,error:fieldState.error?.message,description:hint,placeholder:placeholders[name],className:'kit-field',size:'md',...props};
 if(kind==='select')return <Select {...common} value={field.value||null} data={options} clearable placeholder="Оберіть, якщо вже знаєте" nothingFoundMessage="Немає варіантів"/>;
 if(kind==='multi')return <MultiSelect {...common} value={Array.isArray(field.value)?field.value:[]} data={options} clearable/>;
 if(kind==='number')return <NumberInput {...common} value={field.value??''} inputMode="numeric" allowDecimal={false} allowNegative={false} clampBehavior="none"/>;
 if(kind==='textarea')return <Textarea {...common} maxLength={maxLength}/>;
 return <TextInput {...common} maxLength={maxLength}/>;
}
function DateField(){
 const {control,getValues}=useFormContext(),mobile=useMediaQuery('(max-width:650px)');
 const mode=useWatch({control,name:'dateMode'});
 const {field,fieldState}=useController({name:'dateRange',control,rules:{validate:value=>getValues('dateMode')==='approximate'||!value?.[0]||Boolean(value?.[1])||'Оберіть кінець періоду. Для одного дня натисніть дату ще раз.'}});
 const {field:modeField}=useController({name:'dateMode',control});
 return <div className="kit-date-field"><SegmentedControl aria-label="Точність дат" value={mode} onChange={modeField.onChange} data={[{value:'exact',label:'Точні дати'},{value:'approximate',label:'Приблизний період'}]} fullWidth/>
  {mode==='approximate'?<Field name="datePeriod" label="Орієнтовний період" placeholder="Наприклад, кінець серпня" maxLength={150}/>:
   <DatePickerInput type="range" allowSingleDateInRange clearable label="Дати" placeholder="Оберіть дату або період" value={field.value} onChange={field.onChange} onBlur={field.onBlur} ref={field.ref} error={fieldState.error?.message}
    valueFormat="DD.MM.YYYY" dropdownType={mobile?'modal':'popover'} modalProps={{title:'Оберіть дати',centered:true,withCloseButton:true,classNames:{content:'request-calendar',header:'request-calendar-header',title:'request-calendar-title'},closeButtonProps:{'aria-label':'Закрити календар'}}} popoverProps={{withinPortal:true}}
    previousLabel="Попередній місяць" nextLabel="Наступний місяць" ariaLabels={{monthLevelControl:'Обрати місяць',yearLevelControl:'Обрати рік'}} className="kit-field" size={mobile?'sm':'md'}/>}
 </div>;
}

function socialLinks(value) {
 if (!value?.trim()) return true;
 return value.trim().split(/[\s,]+/).every(link=>{
  try {const url=new URL(link.startsWith('www.')?`https://${link}`:link);return ['https:','http:'].includes(url.protocol)&&url.hostname.includes('.');}
  catch {return false;}
 }) || 'Вкажи повні посилання, наприклад https://instagram.com/назва.';
}
const audienceEstimate = value => {
 if (!value?.trim()) return true;
 const match=value.trim().match(/^(?:~\s*)?(\d+)(?:\s*[-–]\s*(\d+))?$/);
 return Boolean(match&&(!match[2]||Number(match[2])>=Number(match[1]))) || 'Вкажи число або діапазон, наприклад 100–200.';
};
const wholeNumber = value => !String(value??'').trim() || (/^\d+$/.test(String(value).trim())) || 'Вкажи ціле число, наприклад 100.';

const typeNotes = ['Один виступ, від ідеї до сцени', 'Кілька міст або одна поїздка', 'Організаційна підтримка артиста', 'Ідея, яку хочеться обговорити'];
function TypePicker(){
 const {control,clearErrors}=useFormContext();const {field}=useController({name:'type',control});
 return <fieldset className="format-picker"><legend>Що плануєш?</legend><div className="format-options">{types.map((type,index)=><label key={type} className={field.value===type?'selected':''}><input type="radio" name={field.name} value={type} checked={field.value===type} onChange={()=>{field.onChange(type);clearErrors();}}/><span><strong>{type}</strong><small>{typeNotes[index]}</small></span><span className="format-check" aria-hidden="true">{field.value===type?'↗':'○'}</span></label>)}</div></fieldset>;
}
const steps=['Знайомство','Деталі','Перевірка'];
const titles=['Почнімо зі знайомства.', 'Твій задум. Наші задачі.', 'Усе важливе — тут.'];
export function CooperationForm({initialType, active, actionIcon}) {
 const methods = useForm({mode:'onTouched', reValidateMode:'onChange', shouldFocusError:true,
  defaultValues:{type:initialType,...Object.fromEntries(Object.keys(labels).map(key=>[key,''])),dateMode:'exact',dateRange:[null,null],datePeriod:'',scope:[]}});
 const {control, setValue, clearErrors} = methods;
 const type = useWatch({control,name:'type'});
 const [saved,setSaved] = useState(false);
 const [sending,setSending]=useState(false),[sendError,setSendError]=useState('');
 const inFlight=useRef(false),requestId=useRef(null),honeypot=useRef(null),errorNotice=useRef(null);
 const [step,setStep] = useState(0);
 const heading=useRef(null), scroll=useRef(null), focusPending=useRef(false);
 const values=useWatch({control});
 const dates=values.dateMode==='approximate'?values.datePeriod:values.dateRange?.filter(Boolean).map(date=>dayjs(date).format('DD.MM.YYYY')).join(' — ');
 const reviewValues={...values,dates};
 const relevant=['name','email','social',...(fieldsByType[type]||[]).filter(key=>key!=='dates'),...(['Концерт','Тур / поїздка'].includes(type)?[values.dateMode==='exact'?'dateRange':'datePeriod']:[]),'idea'];
 const goTo=next=>{focusPending.current=true;setStep(next);};
 useEffect(()=>{if(focusPending.current){scroll.current?.scrollTo(0,0);heading.current?.focus();focusPending.current=false;}},[step,saved]);
 useEffect(()=>{if(sendError){errorNotice.current?.scrollIntoView({block:'nearest'});errorNotice.current?.focus({preventScroll:true});}},[sendError]);
 const advance=async()=>{
  if(inFlight.current||saved)return;
  const fields=step===0?['name','email','social']:relevant;
  if(await methods.trigger(fields,{shouldFocus:true})) {if(step<2)goTo(step+1);else await send(methods.getValues());}
 };

 useEffect(()=>{const subscription=methods.watch(()=>setSaved(false));return()=>subscription.unsubscribe();},[methods.watch]);
 useEffect(()=>{
  if (!active) return;
  setValue('type', initialType);clearErrors();setSaved(false);setStep(0);scroll.current?.scrollTo(0,0);
 },[active,initialType,setValue,clearErrors]);
 const send = async values => {
  if(inFlight.current)return;
  inFlight.current=true;setSending(true);setSendError('');
  requestId.current??=crypto.randomUUID();
  const dates=values.dateMode==='approximate'?values.datePeriod:values.dateRange?.filter(Boolean).map(date=>dayjs(date).format('DD.MM.YYYY')).join(' — ');
  const keys=['name','email','social',...(fieldsByType[values.type]||[]),'idea'];
  const answers=Object.fromEntries(keys.map(key=>[key,key==='dates'?dates:values[key]]));
  try {
   const response=await fetch('/api/questionnaire',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({type:values.type,answers,requestId:requestId.current,website:honeypot.current?.value||''}),signal:AbortSignal.timeout(25000)});
   const result=await response.json().catch(()=>null);
   if(!response.ok||!result?.accepted)throw new Error(response.status===429?'Забагато спроб. Зачекай хвилину й спробуй ще раз.':'Не вдалося підтвердити відправлення. Відповіді залишились тут — спробуй ще раз або напиши на yars.agency@gmail.com.');
   focusPending.current=true;setSaved(true);
  } catch(error){setSendError(error.name==='TimeoutError'?'Підтвердження затримується. Відповіді збережено у відкритій анкеті. Повтори спробу — повторний запит не створить дубль листа.':error.message?.startsWith('Не вдалося')||error.message?.startsWith('Забагато')?error.message:'Немає з’єднання. Перевір інтернет і спробуй ще раз. Відповіді залишились в анкеті.');}
  finally {inFlight.current=false;setSending(false);}
 };

 return <FormProvider {...methods}><form className="request-form" noValidate onSubmit={event=>{event.preventDefault();advance();}} onChange={()=>{setSaved(false);setSendError('');requestId.current=null;}}>
  <div className="request-trap" aria-hidden="true"><label>Website<input ref={honeypot} name="website" tabIndex={-1} autoComplete="off"/></label></div>
  <aside className="request-rail"><div><p className="rail-headline">За лаштунками<br/><em>твого звуку.</em></p></div><ol aria-label="Етапи анкети">{steps.map((label,index)=><li key={label} aria-current={index===step?'step':undefined}><span aria-hidden="true">{index<step?'✓':`0${index+1}`}</span>{label}</li>)}</ol></aside>
  <div className="request-workspace"><div className="request-scroll" ref={scroll}>
   <div className="step-intro"><p className="step-kicker">{saved?'АНКЕТА ГОТОВА':`КРОК ${step+1} ІЗ 3 / ${steps[step].toUpperCase()}`}</p><h2 tabIndex={-1} ref={heading}>{saved?'Дякуємо за звернення.':titles[step]}</h2><p>{saved?'Анкету надіслано команді YAR. Для відповіді використаємо email, який ти вказав у формі.':step===0?'Як тебе знайти та з чим можемо допомогти?':step===1?'Поділись тим, що вже знаєш. Необов’язкові деталі можна залишити на потім.':'Переглянь відповіді перед надсиланням. До будь-якого кроку можна повернутися.'}</p></div>
   <div hidden={step!==0||saved}><TypePicker/>
   <p className="required-guide"><span aria-hidden="true">*</span> Обов’язкові поля</p>
   <fieldset className="request-section"><legend>Про вас</legend>
    <Field name="name" required maxLength={100} autoComplete="organization"/>
    <Field name="email" required type="email" autoComplete="email" maxLength={254} rules={{validate:value=>Boolean(value?.trim())&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())||'Вкажи email у форматі name@example.com.'}}/>
    <Field name="social" kind="textarea" rows={2} maxLength={1000} hint="Посилання на музику або соцмережі — по одному в рядку." rules={{validate:socialLinks}}/>
   </fieldset>
   </div><div hidden={step!==1||saved}>
   <Field name="idea" label={type==='Постійна співпраця'?'Розкажи про гурт, ситуацію та плани':'Яка допомога потрібна від YAR?'} kind="textarea" rows={type==='Постійна співпраця'?6:4} required maxLength={5000}/>
   {type==='Концерт'&&<fieldset className="request-section"><legend>Про концерт</legend><p className="section-note">Заповни деталі, які вже відомі. Решту обговоримо.</p>
    <Field name="city" maxLength={150}/><DateField/>
    <div className="form-row"><Field name="audience" placeholder="100 або 100–200" rules={{validate:audienceEstimate}}/><Field name="previous" kind="number" min={0} rules={{validate:wholeNumber}}/></div>
    <Field name="listeners"/>
    <div className="form-row"><Field name="duration" kind="number" min={1} suffix=" хв" rules={{validate:value=>!String(value??'').trim()||Number(value)>0||'Вкажи тривалість, від 1 хвилини.'}}/><Field name="format" kind="select" options={['Акустичний концерт','Full band']}/></div>
    <Field name="eventRole" kind="select" options={['Сольний концерт','Multi-artist concert (line-up)','Headliner','Support / opening act']}/>
    <Field name="merch" placeholder="Не плануємо / футболки, платівки…"/>
   </fieldset>}
   {type==='Тур / поїздка'&&<fieldset className="request-section"><legend>Про поїздку</legend><p className="section-note">Маршрут і дати можуть бути попередніми.</p>
    <Field name="route" kind="textarea" rows={3} maxLength={1000}/>
    <DateField/><Field name="crew" label="Скільки людей їде?" kind="number" min={1} rules={{validate:value=>!String(value??'').trim()||Number(value)>0||'Вкажи кількість людей, від 1.'}}/>
   </fieldset>}
   {type==='Постійна співпраця'&&<fieldset className="request-section"><legend>Про співпрацю</legend><Field name="scope" label="У яких напрямах потрібна підтримка?" kind="multi" options={['Booking','Логістика','Продакшн концерту','Промоція','Візуальна комунікація','Фото / відео']}/></fieldset>}

   {type==='Постійна співпраця'&&<p className="section-note">Умови й задачі обговоримо на дзвінку або зустрічі.</p>}
   </div>
   {step===2&&!saved&&<div className="request-review"><div className="review-format"><span>Формат співпраці</span><strong>{type}</strong></div><dl>{['name','email','social',...(fieldsByType[type]||[]),'idea'].filter(key=>String(reviewValues[key]??'').trim()).map(key=><div key={key}><dt>{labels[key]}</dt><dd>{Array.isArray(reviewValues[key])?reviewValues[key].join(', '):String(reviewValues[key]).trim()}</dd></div>)}</dl></div>}
   {saved&&<div className="request-success" role="status"><span aria-hidden="true">↗</span><strong>Залишаймося на зв’язку.</strong><p>Якщо хочеш щось додати до відповідей, напиши нам.</p><a href="mailto:yars.agency@gmail.com">Написати YAR ↗</a></div>}
   {sendError&&<p ref={errorNotice} tabIndex={-1} className="request-send-error" role="alert">{sendError}</p>}
  </div>
  <div className="request-footer"><div className="request-footer-note">{saved?'':step===0?'':step===1?'* Обов’язкове поле. Решта — за бажанням.':'Натискаючи «Надіслати», ти передаєш відповіді команді YAR для обговорення співпраці.'}</div><div className="request-actions">{!saved&&step>0&&<Button type="button" variant="subtle" disabled={sending} className="request-back" onClick={()=>{setSendError('');goTo(step-1);}}>Назад</Button>}{!saved&&<Button type="submit" className="ticket" loading={sending} rightSection={actionIcon}>{step===2?'Надіслати анкету':'Далі'}</Button>}</div></div>
 </div></form></FormProvider>;
}
