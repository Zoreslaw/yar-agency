import React, {useEffect, useId, useRef, useState, lazy, Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import '@fontsource-variable/manrope';
import '@fontsource-variable/league-spartan';
import assets from './assets.json';
import './display-font.css';
import './style.css';
import {MouthSignal} from './MouthSignal.jsx';
import {SceneEntrance} from './SceneEntrance.jsx';
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
function ContactIcon({kind}){return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{kind==='instagram'?<><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></>:kind==='brief'?<><path d="M7 3h8l4 4v14H5V3h2Z"/><path d="M14 3v5h5M9 12h6M9 16h6"/></>:<><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 6 9 7 9-7"/></>}</svg>}
function Logo({className=''}){const id=useId();return <svg className={`logo ${className}`} viewBox="150 76 555 277" role="img" aria-label="YAR Agency"><defs><mask id={id} maskUnits="userSpaceOnUse" x="0" y="0" width="845" height="493" style={{maskType:'alpha'}}><image href={assets.logo} width="845" height="493"/></mask></defs><rect width="845" height="493" fill="currentColor" mask={`url(#${id})`}/></svg>}
function Photo({item,...props}){return <img src={assets[item.key]} srcSet={`${assets[item.key].replace(".webp","-800.webp")} 800w, ${assets[item.key]} 1800w`} sizes="(max-width: 650px) 90vw, 75vw" alt={item.alt} loading="lazy" decoding="async" width={item.key==='people'?4642:6000} height={item.key==='people'?3075:4000} {...props}/>}

function App(){
 const stageMotion=useBackstageMotion();
 const [menu,setMenu]=useState(false),[gallery,setGallery]=useState(null),[brief,setBrief]=useState(null);
 const briefTrigger=useRef(null);
 const video=useRef(null),galleryDialog=useRef(null),visible=useRef(true);
 const directions=[
  {title:'Booking',heading:'Знайти місце для концерту.',text:'Шукаємо клуби й фестивалі, говоримо з майданчиками. Разом узгоджуємо дати, умови й технічні деталі — і розбираємось із документами.'},
  {title:'Логістика',heading:'Організувати поїздку.',text:'Продумуємо маршрут, транспорт і ночівлю. Збираємо побутові та технічні потреби, координуємо поїздку й супроводжуємо в дорозі.'},
  {title:'Продакшн концерту',heading:'Підготувати концерт.',text:'Саундчек, звук, світло, гримерка. Узгоджуємо таймінг і роботу команди, тримаємо зв’язок із клубом. Допомагаємо з перекладом.'},
  {title:'Промоція',heading:'Розповісти про виступ.',text:'Беремо ваші готові матеріали й допомагаємо розповісти про подію: соцмережі, реклама, афіші та місцеві медіа.'},
  {title:'Візуальна комунікація',heading:'Оформити матеріали.',text:'Готуємо афіші, Stories, Reels і press kit. Адаптуємо тексти українською, польською та англійською.'},
  {title:'Фото / відео',heading:'Зняти концерт і backstage.',text:'Знімаємо концерт і те, що відбувається за сценою. Фотографії, відео й короткі Reels / TikTok — формат обговоримо разом.'}
 ];
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
   <button className="menu-toggle" aria-expanded={menu} aria-label={menu?'Закрити меню':'Відкрити меню'} onClick={()=>setMenu(!menu)}>{menu?'Закрити':'Меню'}</button>
  </header>
  <main ref={stageMotion.ref} className={`backstage-page${stageMotion.enabled?' motion-enabled':''}${stageMotion.active?' motion-active':''}`}>
   <section className="hero" id="top" aria-labelledby="hero-title">
    <video ref={video} className="hero-video" src="/media/backstage.mp4" poster="/media/backstage.jpg" muted loop playsInline preload="metadata" aria-hidden="true"/>
    <div className="hero-shade" aria-hidden="true"/>
    <div className="hero-content">
     <h1 id="hero-title">Ближче<br/>до музики.</h1>
     <div className="hero-bottom"><a className="hero-action" href="#contact">Обговорити свою подію <Arrow diagonal/></a></div>
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
     <div className="service-cues">{directions.map(direction=><article className="service-cue" data-reveal key={direction.title}>
      <div className="cue-inner"><div><h3>{direction.heading}</h3></div><p>{direction.text}</p></div>
     </article>)}</div>
     <div className="agency-ticker" data-loop role="region" aria-label="Booking, концерти, супровід артистів"><div className="ticker-track" aria-hidden="true">{[0,1].map(i=><span className="ticker-copy" key={i}>BOOKING <span>/</span> КОНЦЕРТИ <span>/</span> СУПРОВІД АРТИСТІВ <span>/</span> YAR <span>/</span></span>)}</div></div>
     <div className="collaboration" id="collaboration" data-reveal><div className="collaboration-intro"><h3>На один концерт.<br/>Або надовго.</h3></div><div className="collaboration-formats">
      <span className="format-tape" aria-hidden="true"><svg className="tape-vertical" viewBox="0 0 24 240" preserveAspectRatio="none"><path fill="currentColor" d="M3 3 7 5 10 1 14 4 18 2 21 6 20 38 22 70 20 106 21 144 19 179 21 210 20 237 16 234 13 239 9 235 5 238 2 233 3 201 2 170 4 138 2 103 3 71 2 39Z"/><path stroke="#1D223D" opacity=".16" strokeWidth=".7" d="m7 15-1 51m4 17 1 68m5-127-1 87m-9 56 1 54m8-90 1 83M4 48l15-2M3 118l17 2M4 192l15-1"/></svg><svg className="tape-horizontal" viewBox="0 0 240 24" preserveAspectRatio="none"><g transform="translate(240 0) rotate(90)"><path fill="currentColor" d="M3 3 7 5 10 1 14 4 18 2 21 6 20 38 22 70 20 106 21 144 19 179 21 210 20 237 16 234 13 239 9 235 5 238 2 233 3 201 2 170 4 138 2 103 3 71 2 39Z"/><path stroke="#1D223D" opacity=".16" strokeWidth=".7" d="m7 15-1 51m4 17 1 68m5-127-1 87m-9 56 1 54m8-90 1 83M4 48l15-2M3 118l17 2M4 192l15-1"/></g></svg></span>
      <div className="format-column"><button onClick={event=>{briefTrigger.current=event.currentTarget;event.currentTarget.focus();openBrief('Концерт');}}><span>Окрема задача<br/>або подія</span><p>Booking, поїздка чи організація концерту. Підключаємось там, де потрібна допомога.</p><Arrow diagonal/></button></div>
      <div className="format-column"><button onClick={event=>{briefTrigger.current=event.currentTarget;event.currentTarget.focus();openBrief('Постійна співпраця');}}><span>Постійна робота<br/>з артистом</span><p>Для гуртів, яким потрібна організаційна команда на постійній основі.</p><Arrow diagonal/></button>
      </div>
     </div>
     <SceneEntrance className="collaboration-flow" enabled={stageMotion.active}>

     <aside className="collaboration-example" id="moments" aria-labelledby="artist-name">
      <button className="example-photo" data-motion="photo" data-delay="0.2" onClick={()=>setGallery(0)} aria-label="Відкрити фотографії співпраці з wuha"><Photo item={photos[0]} sizes="(max-width: 650px) 88vw, 42vw"/></button>
      <div className="example-copy" data-motion="text" data-delay="0.15"><h4 id="artist-name">Ви граєте.<br/>Ми організовуємо.</h4><p>Так працюємо з <strong>wuha</strong>: гурт приходить з ідеєю виступу, а ми домовляємося з майданчиком, готуємо концерт і координуємо його на місці.</p><p>Гурту залишається приїхати й зіграти.</p><button className="text-link" onClick={()=>setGallery(0)}>Фото концертів wuha <Arrow diagonal/></button></div>
     </aside>
     </SceneEntrance>
     </div>
    </section>
    <section className="team stage-section" id="team" aria-labelledby="team-title">
     <SceneEntrance className="team-composition" enabled={stageMotion.active}>
      <figure className="mirror-portrait" data-motion="photo">
       <div className="dressing-mirror">
        <img src="/media/team-reference.webp" srcSet="/media/team-reference-800.webp 800w, /media/team-reference.webp 1600w" sizes="(max-width: 650px) 88vw, 46vw" alt="Фото-референс: дві моделі, не Софія та Віка" loading="lazy"/>
        <MirrorLamps side="left" enabled={stageMotion.active}/>
        <MirrorLamps side="right" enabled={stageMotion.active}/>
       </div>
       <figcaption>Фото-референс · <a href="https://www.pexels.com/photo/photo-of-women-sitting-back-to-back-at-each-other-6939112/" target="_blank" rel="noreferrer">Polina Tankilevitch / Pexels</a></figcaption>
      </figure>
      <div className="mirror-content"><div data-motion="text" data-delay="0.1"><h2 id="team-title">Наша <br/>команда.</h2></div>
       <div className="team-copy" data-motion="text" data-delay="0.2"><p>Ми працюємо з артистами й організовуємо музичні події в Польщі. З нами ви обговорюєте задачі, домовленості та організацію виступу.</p><p>Напишіть про свій гурт і плани. Визначимо, яку частину роботи можемо взяти на себе.</p><a className="text-link team-link" href="#contact">Зв’язатися з командою <Arrow diagonal/></a></div>
      </div>
     </SceneEntrance>
    </section>
   <section className="contact stage-section" id="contact" aria-labelledby="contact-title">
    <div className="contact-main"><h2 id="contact-title">Що ти<br/>задумав?</h2>
     <a className="contact-email contact-channel" href="mailto:yars.agency@gmail.com"><span className="channel-icon"><ContactIcon kind="email"/></span><span>yars.agency@gmail.com</span><Arrow diagonal/></a>
     <div className="contact-actions"><a className="contact-channel instagram-channel" href="https://www.instagram.com/yar_agcy/" target="_blank" rel="noreferrer"><span className="channel-icon"><ContactIcon kind="instagram"/></span><span>Instagram <span className="channel-handle">@yar_agcy</span></span><Arrow diagonal/></a><button className="ticket brief-action" onClick={event=>{briefTrigger.current=event.currentTarget;event.currentTarget.focus();openBrief();}}><ContactIcon kind="brief"/><span>Заповнити анкету</span><Arrow diagonal/></button></div>

    </div>
    <div className="contact-brand"><MouthSignal/><span className="brand-question">How are you anyway?</span></div>
   </section>
   </div>
  </main>
  <footer className="site-footer">
   <div className="footer-top">
    <a className="footer-brand" href="#top" aria-label="YAR — повернутися на початок"><Logo/></a>
    <nav className="footer-navigation" aria-label="Навігація внизу сторінки"><a href="#services">Що робимо</a><a href="#collaboration">Співпраця</a><a href="#team">Хто ми</a></nav>
    <div className="footer-socials"><a href="mailto:yars.agency@gmail.com" aria-label="Написати YAR електронною поштою"><ContactIcon kind="email"/><span>Написати нам</span><Arrow diagonal/></a><a href="https://www.instagram.com/yar_agcy/" target="_blank" rel="noreferrer" aria-label="YAR в Instagram (нова вкладка)"><ContactIcon kind="instagram"/><span>@yar_agcy</span><Arrow diagonal/></a></div>
   </div>

  </footer>
  <dialog className="gallery-dialog" aria-label="Фотогалерея YAR" ref={galleryDialog} onClose={()=>setGallery(null)} onClick={e=>{if(e.target===e.currentTarget)e.currentTarget.close();}} onKeyDown={e=>{if(e.key==='ArrowRight')setGallery(value=>(value+1)%photos.length);if(e.key==='ArrowLeft')setGallery(value=>(value+photos.length-1)%photos.length);}}>
   {gallery!==null&&<><div className="gallery-toolbar"><span>{gallery+1} / {photos.length}</span><button onClick={()=>galleryDialog.current.close()} aria-label="Закрити фото">Закрити ×</button></div><Photo item={photos[gallery]}/><div className="gallery-bottom"><button aria-label="Попереднє фото" onClick={()=>setGallery(value=>(value+photos.length-1)%photos.length)}>←</button><p>{photos[gallery].title}</p><button aria-label="Наступне фото" onClick={()=>setGallery(value=>(value+1)%photos.length)}>→</button></div></>}
  </dialog>
  <Suspense fallback={<div className="request-loading" role="status">Відкриваємо анкету…</div>}>{questionnaireReady&&<CooperationModal opened={brief!==null} onClose={()=>setBrief(null)} onExit={()=>briefTrigger.current?.focus({preventScroll:true})} initialType={brief||'Концерт'} logo={<Logo/>} actionIcon={<Arrow/>}/>}</Suspense>
 </>;
}
createRoot(document.getElementById('root')).render(<App/>);
