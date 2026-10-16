import React, {useEffect, useId, useRef, useState, lazy, Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import '@fontsource-variable/manrope';
import '@fontsource-variable/league-spartan';
import assets from './assets.json';
import './display-font.css';
import './style.css';
import './footer.css';
import './collaboration-examples.css';
import {ActionButton, UtilityButton, IconButton} from './components/Buttons.jsx';
import {MouthSignal} from './MouthSignal.jsx';
import {SceneEntrance} from './SceneEntrance.jsx';
import {ServiceStories} from './ServiceStories.jsx';
import {MirrorLamps} from './MirrorLamps.jsx';
const CooperationModal=lazy(()=>import('./CooperationModal.jsx'));
import {useBackstageMotion} from './StageLighting.jsx';

const photos = [
 {key:'vocal',title:'Виступ',alt:'Музикант із мікрофоном перед глядачами в камерному залі'},
 {key:'live',title:'У залі',alt:'Живий виступ, знятий з-поміж глядачів'},
 {key:'people',title:'Перед подією',alt:'Люди спілкуються перед входом на подію'},
 {key:'crowd',title:'Глядачі',alt:'Глядачі біля музикантів на концерті'},
 {key:'phone',title:'З залу',alt:'Глядач знімає концерт на телефон'},
 {key:'merch',title:'Мерч YAR',alt:'Футболка з логотипом і символом YAR'},
 {key:'stage',title:'На сцені',alt:'Вокаліст виступає перед глядачами'}
];
function Arrow({diagonal=false,...props}) {return <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}><path d={diagonal?'M7 25 25 7M7 7h18v18':'M4 16h23M17 6l10 10-10 10'} stroke="currentColor" strokeWidth="1.8"/></svg>}
const socialLinks = [
 {kind:'instagram',name:'Instagram',handle:'@yar_agcy',href:'https://www.instagram.com/yar_agcy/'},
 {kind:'facebook',name:'Facebook',href:'https://www.facebook.com/share/1V3EckXBp4/'},
 {kind:'tiktok',name:'TikTok',handle:'@yar.agency',href:'https://www.tiktok.com/@yar.agency'}
];
function ContactIcon({kind}){return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{kind==='instagram'?<><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></>:kind==='facebook'?<path d="M15 21v-8h3l.5-4H15V6.5c0-1 .3-1.5 1.5-1.5H19V1.5c-.7-.1-1.8-.2-3-.2-3 0-5 1.8-5 5V9H8v4h3v8"/>:kind==='tiktok'?<path d="M14 3v12.5a4.5 4.5 0 1 1-4-4.47M14 3c0 3.8 2.5 6 6 6V6c-1.8 0-3-1.2-3-3Z"/>:kind==='phone'?<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z"/>:<><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 6 9 7 9-7"/></>}</svg>}
function Logo({className=''}){const id=useId();return <svg className={`logo ${className}`} viewBox="150 76 555 277" role="img" aria-label="YAR Agency"><defs><mask id={id} maskUnits="userSpaceOnUse" x="0" y="0" width="845" height="493" style={{maskType:'alpha'}}><image href={assets.logo} width="845" height="493"/></mask></defs><rect width="845" height="493" fill="currentColor" mask={`url(#${id})`}/></svg>}
function Photo({item,...props}){return <img src={assets[item.key]} srcSet={`${assets[item.key].replace(".webp","-800.webp")} 800w, ${assets[item.key]} 1800w`} sizes="(max-width: 650px) 90vw, 75vw" alt={item.alt} loading="lazy" decoding="async" width={item.key==='people'?4642:6000} height={item.key==='people'?3075:4000} {...props}/>}

function App(){
 const stageMotion=useBackstageMotion();
 const [menu,setMenu]=useState(false),[gallery,setGallery]=useState(null),[brief,setBrief]=useState(null);
 const briefTrigger=useRef(null);
 const video=useRef(null),galleryDialog=useRef(null),visible=useRef(true);
 const [questionnaireReady,setQuestionnaireReady]=useState(false);
 const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{const update=()=>setScrolled(window.scrollY>24);update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update);},[]);
 useEffect(()=>{
  const el=video.current,media=matchMedia('(prefers-reduced-motion: reduce)');
  const update=()=>{if(media.matches || document.hidden || !visible.current) el.pause(); else el.play().catch(()=>{});};
  const observer=new IntersectionObserver(([entry])=>{visible.current=entry.isIntersecting;update();},{threshold:.15});observer.observe(el);
  document.addEventListener('visibilitychange',update);media.addEventListener('change',update);update();
  return()=>{observer.disconnect();document.removeEventListener('visibilitychange',update);media.removeEventListener('change',update);};
 },[]);
 useEffect(()=>{if(gallery!==null)galleryDialog.current.showModal();},[gallery]);

 const openBrief=(value='Концерт')=>{setMenu(false);setQuestionnaireReady(true);setBrief(value);};
 return <>
  <a className="skip" href="#services">До змісту</a>
  <header className={`header${scrolled?" is-scrolled":""}${menu?" menu-open":""}`}>
   <a href="#top" className="brand" aria-label="YAR — на початок" onClick={()=>setMenu(false)}><Logo/></a>
   <nav aria-label="Головна навігація" className={menu?'navigation open':'navigation'}>
    <a href="#services" onClick={()=>setMenu(false)}>Що робимо</a><a href="#team" onClick={()=>setMenu(false)}>Хто ми</a><a href="#collaboration" onClick={()=>setMenu(false)}>Співпраця</a><a href="#contact" onClick={()=>setMenu(false)}>Поговорімо ↗</a>
   </nav>
   <UtilityButton className="menu-toggle" aria-expanded={menu} aria-label={menu?'Закрити меню':'Відкрити меню'} onClick={()=>setMenu(!menu)}>{menu?'Закрити':'Меню'}</UtilityButton>
  </header>
  <main ref={stageMotion.ref} className={`backstage-page${stageMotion.enabled?' motion-enabled':''}${stageMotion.active?' motion-active':''}`}>
   <section className="hero" id="top" aria-labelledby="hero-title">
    <video ref={video} className="hero-video" src="/media/backstage.mp4" poster="/media/backstage.jpg" muted loop playsInline preload="metadata" aria-hidden="true"/>
    <div className="hero-shade" aria-hidden="true"/>
    <div className="hero-content">
     <h1 id="hero-title">Ближче<br/>до музики.</h1>
     <div className="hero-bottom"><ActionButton variant="poster" tone="yellow" hoverTone="yellow" className="page-hero-action" href="#contact">Обговорити свою подію</ActionButton></div>
    </div>
   </section>
   <div className="stage-world">
    <section className="services stage-section" id="services" aria-labelledby="services-title">
     <SceneEntrance className="stage-passage" enabled={stageMotion.active}>
      <div className="passage-frame">
       <svg className="backstage-route" viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true"><path data-motion="line" data-delay="0.2" pathLength="1" d="M50 410 H450 Q490 410 490 370 V160 Q490 125 530 125 H830 M814 111 L830 125 L814 139"/></svg>
       <div className="services-heading"><h2 id="services-title"><span className="title-line" data-motion="text">Беремо на себе</span><span className="title-line" data-motion="text" data-delay="0.12">роботу за сценою.</span></h2><p data-motion="text" data-delay="0.15">Майданчик, дорога, команда, день концерту. Допомагаємо з організацією виступів у Польщі — від окремої задачі до постійної роботи з гуртом.</p></div>
       <div className="backstage-prints" aria-label="Фотографії зі співпраці з wuha">
        <button className="pinned-print print-people" data-motion="photo" data-delay="0.2" onClick={()=>setGallery(2)} aria-label="Відкрити фото перед подією"><Photo item={photos[2]} sizes="(max-width: 650px) 65vw, 32vw"/></button>
        <button className="pinned-print print-live" data-motion="photo" data-delay="0.35" onClick={()=>setGallery(0)} aria-label="Відкрити фото виступу"><Photo item={photos[0]} sizes="(max-width: 650px) 45vw, 23vw"/></button>
       </div>
      </div>
     </SceneEntrance>
     <ServiceStories enabled={stageMotion.active} onGallery={setGallery} onDiscuss={event=>{briefTrigger.current=event.currentTarget;event.currentTarget.focus();openBrief('Інше');}}/>
     <div className="agency-ticker" data-loop role="region" aria-label="Booking, концерти, супровід артистів"><div className="ticker-track" aria-hidden="true">{[0,1].map(i=><span className="ticker-copy" key={i}>BOOKING <span>/</span> КОНЦЕРТИ <span>/</span> СУПРОВІД АРТИСТІВ <span>/</span> YAR <span>/</span></span>)}</div></div>
     <div className="collaboration" id="collaboration" data-reveal><div className="collaboration-intro"><h3>На один концерт.<br/>Або надовго.</h3></div><div className="collaboration-formats">
      <span className="format-tape" aria-hidden="true"><svg className="tape-vertical" viewBox="0 0 24 240" preserveAspectRatio="none"><path fill="currentColor" d="M3 3 7 5 10 1 14 4 18 2 21 6 20 38 22 70 20 106 21 144 19 179 21 210 20 237 16 234 13 239 9 235 5 238 2 233 3 201 2 170 4 138 2 103 3 71 2 39Z"/><path stroke="#1D223D" opacity=".16" strokeWidth=".7" d="m7 15-1 51m4 17 1 68m5-127-1 87m-9 56 1 54m8-90 1 83M4 48l15-2M3 118l17 2M4 192l15-1"/></svg><svg className="tape-horizontal" viewBox="0 0 240 24" preserveAspectRatio="none"><g transform="translate(240 0) rotate(90)"><path fill="currentColor" d="M3 3 7 5 10 1 14 4 18 2 21 6 20 38 22 70 20 106 21 144 19 179 21 210 20 237 16 234 13 239 9 235 5 238 2 233 3 201 2 170 4 138 2 103 3 71 2 39Z"/><path stroke="#1D223D" opacity=".16" strokeWidth=".7" d="m7 15-1 51m4 17 1 68m5-127-1 87m-9 56 1 54m8-90 1 83M4 48l15-2M3 118l17 2M4 192l15-1"/></g></svg></span>
      <div className="format-column"><ActionButton className="format-action" onClick={event=>{briefTrigger.current=event.currentTarget;event.currentTarget.focus();openBrief('Концерт');}}>Окрема задача<br/>або подія</ActionButton><p className="format-description">Для конкретного виступу, поїздки чи задачі, яку хочете передати команді.</p>
     <SceneEntrance className="format-example" enabled={stageMotion.active}>
     <aside className="collaboration-example project-example" aria-labelledby="d016-title">
      <button className="example-photo" data-motion="photo" data-delay="0.15" onClick={()=>setGallery(2)} aria-label="Відкрити фото перед подією"><Photo item={photos[2]} sizes="(max-width: 650px) 88vw, 42vw"/></button>
      <div className="example-copy" data-motion="text"><h4 id="d016-title">Ви граєте.<br/>Ми організовуємо.</h4><p>Можемо підключитися до окремої задачі або вести всю підготовку. Обсяг роботи й вартість узгодимо під вашу подію.</p><p>З <strong>D016</strong> беремо на себе домовленості з майданчиком, підготовку концерту й координацію на місці.</p></div>
     </aside>
     </SceneEntrance>
      </div>
      <div className="format-column"><ActionButton className="format-action" onClick={event=>{briefTrigger.current=event.currentTarget;event.currentTarget.focus();openBrief('Постійна співпраця');}}>Постійна робота<br/>з артистом</ActionButton><p className="format-description">Для гуртів, яким потрібна регулярна допомога з організацією та просуванням.</p>
     <SceneEntrance className="format-example" enabled={stageMotion.active}>
     <aside className="collaboration-example" id="moments" aria-labelledby="artist-name">
      <button className="example-photo" data-motion="photo" data-delay="0.2" onClick={()=>setGallery(0)} aria-label="Відкрити фотографії співпраці з wuha"><Photo item={photos[0]} sizes="(max-width: 650px) 88vw, 42vw"/></button>
      <div className="example-copy" data-motion="text" data-delay="0.15"><h4 id="artist-name">Команда для<br/>вашого гурту.</h4><p>Стаємо менеджерами вашого гурту: беремо на себе узгоджені задачі й разом плануємо наступні кроки.</p><p>Так працюємо з <strong>wuha</strong>: ведемо сторінку й контент, подаємо заявки на фестивалі. Разом із гуртом також провели зустріч із лейблом.</p></div>
     </aside>
     </SceneEntrance>
      </div>
     </div>
     </div>
    </section>
    <section className="team stage-section" id="team" aria-labelledby="team-title">
     <SceneEntrance className="team-composition" enabled={stageMotion.active}>
      <figure className="mirror-portrait" data-motion="photo">
       <div className="dressing-mirror">
        <img src="/media/sofia-vika.webp" srcSet="/media/sofia-vika-800.webp 800w, /media/sofia-vika.webp 1800w" sizes="(max-width: 650px) 88vw, 46vw" alt="Софія та Віка під парасолькою" loading="lazy"/>
        <MirrorLamps side="left" enabled={stageMotion.active}/>
        <MirrorLamps side="right" enabled={stageMotion.active}/>
       </div>
      </figure>
      <div className="mirror-content"><div data-motion="text" data-delay="0.1"><h2 id="team-title">Наша <br/>команда.</h2></div>
       <div className="team-copy" data-motion="text" data-delay="0.2"><p>Ми працюємо з артистами й організовуємо музичні події в Польщі. З нами ви обговорюєте задачі, домовленості та організацію виступу.</p><p>Напишіть про свій гурт і плани. Визначимо, яку частину роботи можемо взяти на себе.</p><ActionButton tone="red" className="team-contact-action" href="#contact">Зв’язатися з командою</ActionButton></div>
      </div>
     </SceneEntrance>
    </section>
   <section className="contact stage-section" id="contact" aria-labelledby="contact-title">
    <div className="contact-main"><h2 id="contact-title">Що ти<br/>задумав?</h2>
     <p className="contact-invitation">Розкажи про свою ідею — обговоримо, як можемо долучитися.</p>
     <ActionButton size="large" className="contact-questionnaire-action" onClick={event=>{briefTrigger.current=event.currentTarget;event.currentTarget.focus();openBrief();}}>Заповнити анкету</ActionButton>
     <div className="contact-alternatives"><p>Або зв’яжися напряму</p><a href="mailto:yars.agency@gmail.com"><span className="channel-icon"><ContactIcon kind="email"/></span><span>yars.agency@gmail.com</span><Arrow diagonal/></a><a href="tel:+48723655123"><span className="channel-icon"><ContactIcon kind="phone"/></span><span>+48 723 655 123</span><Arrow diagonal/></a>{socialLinks.map(social=><a key={social.kind} className="contact-social-link" href={social.href} target="_blank" rel="noreferrer"><span className="channel-icon"><ContactIcon kind={social.kind}/></span><span>{social.name}{social.handle&&` · ${social.handle}`}<span className="sr-only"> (нова вкладка)</span></span><Arrow diagonal/></a>)}</div>
    </div>
    <div className="contact-brand"><MouthSignal/><span className="brand-question">How are you anyway?</span></div>
   </section>
   </div>
  </main>
  <footer className="site-footer">
   <div className="footer-top">
    <div className="footer-identity"><a className="footer-brand" href="#top" aria-label="YAR — повернутися на початок"><Logo/></a></div>
    <nav className="footer-navigation" aria-label="Навігація внизу сторінки"><p className="footer-label">Агенція</p><a href="#services">Що робимо</a><a href="#collaboration">Співпраця</a><a href="#team">Хто ми</a></nav>
    <div className="footer-contacts"><p className="footer-label">На зв’язку</p><a href="mailto:yars.agency@gmail.com" aria-label="Написати YAR електронною поштою"><ContactIcon kind="email"/><span>Написати нам</span><Arrow diagonal/></a><a href="tel:+48723655123"><ContactIcon kind="phone"/><span>+48 723 655 123</span><Arrow diagonal/></a>{socialLinks.map(social=><a key={social.kind} href={social.href} target="_blank" rel="noreferrer" aria-label={`YAR у ${social.name} (нова вкладка)`}><ContactIcon kind={social.kind}/><span>{social.handle||social.name}</span><Arrow diagonal/></a>)}</div>
   </div>
   <div className="footer-meta"><a href="/privacy.html" target="_blank" rel="noreferrer">Політика конфіденційності <span className="footer-draft">· проєкт</span><span className="sr-only"> (нова вкладка)</span></a></div>
  </footer>
  <dialog className="gallery-dialog" aria-label="Фотогалерея YAR" ref={galleryDialog} onClose={()=>setGallery(null)} onClick={e=>{if(e.target===e.currentTarget)e.currentTarget.close();}} onKeyDown={e=>{if(e.key==='ArrowRight')setGallery(value=>(value+1)%photos.length);if(e.key==='ArrowLeft')setGallery(value=>(value+photos.length-1)%photos.length);}}>
   {gallery!==null&&<><div className="gallery-toolbar"><span>{gallery+1} / {photos.length}</span><IconButton icon="close" label="Закрити фото" onClick={()=>galleryDialog.current.close()}/></div><Photo item={photos[gallery]}/><div className="gallery-bottom"><IconButton icon="previous" label="Попереднє фото" onClick={()=>setGallery(value=>(value+photos.length-1)%photos.length)}/><p>{photos[gallery].title}</p><IconButton icon="next" label="Наступне фото" onClick={()=>setGallery(value=>(value+1)%photos.length)}/></div></>}
  </dialog>
  <Suspense fallback={<div className="request-loading" role="status">Відкриваємо анкету…</div>}>{questionnaireReady&&<CooperationModal opened={brief!==null} onClose={()=>setBrief(null)} onExit={()=>briefTrigger.current?.focus({preventScroll:true})} initialType={brief||'Концерт'} logo={<Logo/>}/>}</Suspense>
 </>;
}
createRoot(document.getElementById('root')).render(<App/>);
