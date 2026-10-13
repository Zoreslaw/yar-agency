import React, {useEffect, useId, useState} from 'react';
import {FormProvider, useForm, useFormContext, useWatch, useController} from 'react-hook-form';
import {TextInput, Textarea, Select, MultiSelect, NumberInput, SegmentedControl, Button} from '@mantine/core';
import {DatePickerInput} from '@mantine/dates';
import {useMediaQuery} from '@mantine/hooks';
import dayjs from 'dayjs';

const types = ['Концерт', 'Тур / поїздка', 'Постійна співпраця', 'Інше'];
const labels = {
 name:'Ім’я / псевдонім / назва гурту', email:'Електронна пошта', social:'Соціальні мережі',
 city:'Місто / майданчик', dates:'Дати', audience:'Очікувана кількість глядачів', previous:'Попередні продажі квитків',
 listeners:'Цільова аудиторія', duration:'Тривалість виступу', format:'Формат виступу', eventRole:'Роль у події',
 merch:'Мерч', route:'Маршрут туру', crew:'Склад поїздки', scope:'Напрям співпраці', idea:'Ситуація / потрібна допомога'
};
const fieldsByType = {
 'Концерт':['city','dates','audience','previous','listeners','duration','format','eventRole','merch'],
 'Тур / поїздка':['route','dates','crew'], 'Постійна співпраця':['scope'], 'Інше':[]
};

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
    valueFormat="DD.MM.YYYY" dropdownType={mobile?'modal':'popover'} modalProps={{title:'Оберіть дати',centered:true,closeButtonProps:{'aria-label':'Закрити календар'}}} popoverProps={{withinPortal:true}}
    previousLabel="Попередній місяць" nextLabel="Наступний місяць" ariaLabels={{monthLevelControl:'Обрати місяць',yearLevelControl:'Обрати рік'}} className="kit-field" size="md"/>}
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

function TypePicker(){
 const {control,clearErrors}=useFormContext();const {field}=useController({name:'type',control});
 return <SegmentedControl value={field.value} onChange={value=>{field.onChange(value);clearErrors();}} data={types} fullWidth className="kit-type-control"/>;
}
export function CooperationForm({initialType, active, actionIcon}) {
 const methods = useForm({mode:'onTouched', reValidateMode:'onChange', shouldFocusError:true,
  defaultValues:{type:initialType,...Object.fromEntries(Object.keys(labels).map(key=>[key,''])),dateMode:'exact',dateRange:[null,null],datePeriod:'',scope:[]}});
 const {handleSubmit, control, setValue, clearErrors, formState:{errors,submitCount}} = methods;
 const type = useWatch({control,name:'type'});
 const [saved,setSaved] = useState(false);
 useEffect(()=>{const subscription=methods.watch(()=>setSaved(false));return()=>subscription.unsubscribe();},[methods.watch]);
 useEffect(()=>{
  if (!active) return;
  setValue('type', initialType);clearErrors();setSaved(false);
 },[active,initialType,setValue,clearErrors]);
 const save = values => {
  values={...values,dates:values.dateMode==='approximate'?values.datePeriod:values.dateRange?.filter(Boolean).map(date=>dayjs(date).format('DD.MM.YYYY')).join(' — ')};
  const textValue=value=>Array.isArray(value)?value.join(', '):String(value??'').trim();
  const keys = ['name','email','social',...(fieldsByType[values.type]||[]),'idea'];
  const answers = keys.filter(key=>textValue(values[key])).map(key=>`${labels[key]}: ${textValue(values[key])}`).join('\n\n');
  const text = `YAR / Анкета для співпраці\n\nФормат: ${values.type}\n\n${answers}\n\nЗбережено на пристрої. Надішли анкету на yars.agency@gmail.com.\n`;
  const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));
  const link=document.createElement('a');link.href=url;link.download='yar-anketa.txt';link.click();
  setTimeout(()=>URL.revokeObjectURL(url),1000);setSaved(true);
 };
 return <FormProvider {...methods}><form className="request-form" noValidate onSubmit={handleSubmit(save)} onChange={()=>setSaved(false)}>
  <div className="request-scroll">
   <div className="kit-type"><label>Формат співпраці</label><TypePicker/></div>
   <p className="required-guide"><span aria-hidden="true">*</span> Обов’язкові поля</p>
   <fieldset className="request-section"><legend>Про вас</legend>
    <Field name="name" required maxLength={100} autoComplete="organization"/>
    <Field name="email" required type="email" autoComplete="email" maxLength={254} rules={{validate:value=>Boolean(value?.trim())&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())||'Вкажи email у форматі name@example.com.'}}/>
    <Field name="social" kind="textarea" rows={2} maxLength={1000} hint="Посилання на музику або соцмережі — по одному в рядку." rules={{validate:socialLinks}}/>
   </fieldset>
   {type==='Концерт'&&<fieldset className="request-section"><legend>Про концерт</legend><p className="section-note">Заповни деталі, які вже відомі. Решту обговоримо.</p>
    <Field name="city" maxLength={150}/><DateField/>
    <div className="form-row"><Field name="audience" placeholder="100 або 100–200" rules={{validate:audienceEstimate}}/><Field name="previous" kind="number" min={0} rules={{validate:wholeNumber}}/></div>
    <Field name="listeners"/>
    <div className="form-row"><Field name="duration" kind="number" min={1} suffix=" хв"/><Field name="format" kind="select" options={['Акустичний концерт','Full band']}/></div>
    <Field name="eventRole" kind="select" options={['Сольний концерт','Multi-artist concert (line-up)','Headliner','Support / opening act']}/>
    <Field name="merch" placeholder="Не плануємо / футболки, платівки…"/>
   </fieldset>}
   {type==='Тур / поїздка'&&<fieldset className="request-section"><legend>Про поїздку</legend><p className="section-note">Маршрут і дати можуть бути попередніми.</p>
    <Field name="route" kind="textarea" rows={3} maxLength={1000}/>
    <DateField/><Field name="crew" label="Скільки людей їде?" kind="number" min={1} rules={{validate:value=>!String(value??'').trim()||Number(value)>0||'Вкажи кількість людей, від 1.'}}/>
   </fieldset>}
   {type==='Постійна співпраця'&&<fieldset className="request-section"><legend>Про співпрацю</legend><Field name="scope" label="У яких напрямах потрібна підтримка?" kind="multi" options={['Booking','Логістика','Продакшн концерту','Промоція','Візуальна комунікація','Фото / відео']}/></fieldset>}
   <Field name="idea" label={type==='Постійна співпраця'?'Розкажи про гурт, ситуацію та плани':'Яка допомога потрібна від YAR?'} kind="textarea" rows={type==='Постійна співпраця'?6:4} required maxLength={5000}/>
   {type==='Постійна співпраця'&&<p className="section-note">Умови й задачі обговоримо на дзвінку або зустрічі.</p>}
   {submitCount>0&&Object.keys(errors).length>0&&<p className="request-error-summary" role="alert">Перевір позначені поля. Анкета ще не збережена.</p>}
  </div>
  <div className="request-footer"><p role="status" className={saved?"is-saved":""}>{saved?'Файл збережено. Анкета ще не надіслана YAR.':<>Збережи файл і надішли його на <a href="mailto:yars.agency@gmail.com">yars.agency@gmail.com</a>.</>}</p><Button type="submit" className="ticket" rightSection={actionIcon}>Зберегти анкету</Button></div>
 </form></FormProvider>;
}
