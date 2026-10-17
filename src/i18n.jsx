import React, {createContext, useContext, useEffect, useMemo, useState, useId, useRef} from 'react';
import {initialLanguage, languages, languageNames, translate, saveLanguage, localizedHref} from './i18n-core.js';
import './language.css';

const LanguageContext = createContext(null);
export function LanguageProvider({children}) {
 const [language, setLanguage] = useState(initialLanguage);
 const value = useMemo(() => ({language, t:(source, variables)=>translate(language, source, variables),
  href:path=>localizedHref(path, language),
  setLanguage:next=>{
   if (!languages.includes(next)) return;
   saveLanguage(next);
   // Keep explicit share links consistent with later manual choices.
   const url = new URL(window.location.href);
   if (url.searchParams.has('lang')) {url.searchParams.set('lang', next);history.replaceState(null, '', url);}
   setLanguage(next);
  }}), [language]);
 useEffect(() => {
  document.documentElement.lang = language;
  document.title = 'YAR Agency';
  for(const node of document.querySelectorAll('meta[name="description"],meta[property="og:description"],meta[name="twitter:description"]')) node.setAttribute('content',value.t('YAR Agency — організація музичних подій у Польщі та співпраця з артистами.'));
  document.querySelector('meta[property="og:locale"]')?.setAttribute('content',{uk:'uk_UA',pl:'pl_PL',en:'en_US'}[language]);
 }, [value]);
 return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
export const useLanguage = () => useContext(LanguageContext);
export function LanguageSwitcher({onOpen, closeWhen=false}) {
 const {language, setLanguage, t}=useLanguage();
 const [open,setOpen]=useState(false);
 const root=useRef(null),trigger=useRef(null);
 const id=useId();
 useEffect(()=>{if(closeWhen)setOpen(false);},[closeWhen]);
 useEffect(()=>{
  if(!open)return;
  const outside=event=>{if(!root.current.contains(event.target))setOpen(false);};
  const escape=event=>{if(event.key==='Escape'){event.stopPropagation();setOpen(false);trigger.current?.focus();}};
  document.addEventListener('pointerdown',outside);
  document.addEventListener('keydown',escape);
  return()=>{document.removeEventListener('pointerdown',outside);document.removeEventListener('keydown',escape);};
 },[open]);
 return <div ref={root} className={`language-picker${open?' is-open':''}`} onBlur={event=>{if(event.relatedTarget&&!event.currentTarget.contains(event.relatedTarget))setOpen(false);}}>
  <button ref={trigger} className="language-trigger" type="button" aria-label={`${t('Мова сайту')}: ${languageNames[language]}`} aria-expanded={open} aria-controls={id} onClick={()=>{if(!open)onOpen?.();setOpen(value=>!value);}}>
   <svg className="language-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/></svg>
   <span>{language.toUpperCase()}</span><svg className="language-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m4 6 4 4 4-4"/></svg>
  </button>
  <div id={id} className="language-options" inert={!open} aria-hidden={!open}>
   {languages.map(code=><button type="button" key={code} lang={code} aria-pressed={language===code} onClick={()=>{setLanguage(code);setOpen(false);trigger.current?.focus();}}><span>{languageNames[code]}</span><span aria-hidden="true">{language===code?'✓':code.toUpperCase()}</span></button>)}
  </div>
 </div>;
}
