import React, {useEffect, useId, useRef, useState} from 'react';
import {useLanguage, LanguageSwitcher} from './i18n.jsx';
import {InterfaceIcon} from './components/InterfaceIcon.jsx';

export function SiteHeader({logo}) {
 const {t}=useLanguage();
 const [open,setOpen]=useState(false);
 const [compact,setCompact]=useState(()=>matchMedia('(max-width: 900px)').matches);
 const [scrolled,setScrolled]=useState(()=>window.scrollY>24);
 const root=useRef(null),trigger=useRef(null);
 const navigationId=useId();
 useEffect(()=>{
  const media=matchMedia('(max-width: 900px)');
  const resize=()=>{
   if(media.matches&&root.current.querySelector('.navigation')?.contains(document.activeElement))trigger.current?.focus();
   if(!media.matches&&document.activeElement===trigger.current)root.current.querySelector('.brand')?.focus();
   setCompact(media.matches);setOpen(false);
  };
  const scroll=()=>setScrolled(window.scrollY>24);
  media.addEventListener('change',resize);
  window.addEventListener('scroll',scroll,{passive:true});
  return()=>{media.removeEventListener('change',resize);window.removeEventListener('scroll',scroll);};
 },[]);
 useEffect(()=>{
  if(!open) return;
  root.current.querySelector('.navigation a')?.focus({preventScroll:true});
  const outside=event=>{if(!root.current.contains(event.target)) setOpen(false);};
  const escape=event=>{if(event.key==='Escape'){setOpen(false);trigger.current?.focus();}};
  document.addEventListener('pointerdown',outside);
  document.addEventListener('keydown',escape);
  return()=>{document.removeEventListener('pointerdown',outside);document.removeEventListener('keydown',escape);};
 },[open]);
 return <header ref={root} className={`header site-header${scrolled?' is-scrolled':''}${open?' menu-open':''}`} onBlur={event=>{if(event.relatedTarget&&!event.currentTarget.contains(event.relatedTarget))setOpen(false);}}>
  <a href="#top" className="brand" aria-label={t('YAR — на початок')} onClick={()=>setOpen(false)}>{logo}</a>
  <nav id={navigationId} aria-label={t('Головна навігація')} aria-hidden={compact&&!open?true:undefined} inert={compact&&!open} className={`navigation${open?' open':''}`}>
   <div className="navigation-links">
    {[['#services','Що робимо'],['#collaboration','Співпраця'],['#team','Хто ми'],['#contact','Поговорімо']].map(([href,label])=><a key={href} href={href} onClick={()=>setOpen(false)}>{t(label)}{href==='#contact'&&<InterfaceIcon/>}</a>)}
   </div>
  </nav>
  <div className="header-controls">
   <LanguageSwitcher onOpen={()=>setOpen(false)} closeWhen={open}/>
   <button ref={trigger} type="button" className="menu-toggle" aria-controls={navigationId} aria-expanded={open} aria-label={t(open?'Закрити меню':'Відкрити меню')} onClick={()=>setOpen(value=>!value)}>
    <span className="menu-icon" aria-hidden="true"><span/><span/><span/></span>
   </button>
  </div>
 </header>;
}
