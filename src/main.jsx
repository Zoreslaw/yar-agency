import React, {useEffect, useId, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import '@fontsource-variable/manrope';
import '@fontsource-variable/league-spartan';
import assets from './assets.json';
import './display-font.css';
import './style.css';
import {MouthSignal} from './MouthSignal.jsx';
import {SceneEntrance} from './SceneEntrance.jsx';
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
function PlaybackIcon({paused=false}){return <svg viewBox="0 0 24 24" aria-hidden="true">{paused?<path d="M8 5 19 12 8 19Z" fill="currentColor"/>:<path d="M8 5v14M16 5v14" stroke="currentColor" strokeWidth="2"/>}</svg>}
function Logo({className=''}){const id=useId();return <svg className={`logo ${className}`} viewBox="150 76 555 277" role="img" aria-label="YAR Agency"><defs><mask id={id} maskUnits="userSpaceOnUse" x="0" y="0" width="845" height="493" style={{maskType:'alpha'}}><image href={assets.logo} width="845" height="493"/></mask></defs><rect width="845" height="493" fill="currentColor" mask={`url(#${id})`}/></svg>}
function Photo({item,...props}){return <img src={assets[item.key]} srcSet={`${assets[item.key].replace(".webp","-800.webp")} 800w, ${assets[item.key]} 1800w`} sizes="(max-width: 650px) 90vw, 75vw" alt={item.alt} loading="lazy" decoding="async" width={item.key==='people'?4642:6000} height={item.key==='people'?3075:4000} {...props}/>}

function App(){
 const stageMotion=useBackstageMotion();
 const [tickerPaused,setTickerPaused]=useState(false);
 const [menu,setMenu]=useState(false),[paused,setPaused]=useState(false),[gallery,setGallery]=useState(null),[brief,setBrief]=useState(null),[saved,setSaved]=useState(false);
 const video=useRef(null),galleryDialog=useRef(null),briefDialog=useRef(null),userPaused=useRef(false),visible=useRef(true);
 const [role,setRole]=useState('Окрема задача / концерт / поїздка');
 const directions=[
  {title:'Booking',heading:'Знайти місце для концерту.',text:'Шукаємо клуби й фестивалі, говоримо з майданчиками. Разом узгоджуємо дати, умови й технічні деталі — і розбираємось із документами.'},
  {title:'Логістика',heading:'Організувати поїздку.',text:'Продумуємо маршрут, транспорт і ночівлю. Збираємо побутові та технічні потреби, координуємо поїздку й супроводжуємо в дорозі.'},
  {title:'Продакшн концерту',heading:'Підготувати концерт.',text:'Саундчек, звук, світло, гримерка. Узгоджуємо таймінг і роботу команди, тримаємо зв’язок із клубом. Допомагаємо з перекладом.'},
  {title:'Промоція',heading:'Розповісти про виступ.',text:'Беремо ваші готові матеріали й допомагаємо розповісти про подію: соцмережі, реклама, афіші та місцеві медіа.'},
  {title:'Візуальна комунікація',heading:'Оформити матеріали.',text:'Готуємо афіші, Stories, Reels і press kit. Адаптуємо тексти українською, польською та англійською.'},
  {title:'Фото / відео',heading:'Зняти концерт і backstage.',text:'Знімаємо концерт і те, що відбувається за сценою. Фотографії, відео й короткі Reels / TikTok — формат обговоримо разом.'}
 ];
 const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{const update=()=>setScrolled(window.scrollY>24);update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update);},[]);
 useEffect(()=>{
  const el=video.current,media=matchMedia('(prefers-reduced-motion: reduce)');
  const update=()=>{if(media.matches || userPaused.current || document.hidden || !visible.current) el.pause(); else el.play().catch(()=>setPaused(true));};
  const observer=new IntersectionObserver(([entry])=>{visible.current=entry.isIntersecting;update();},{threshold:.15});observer.observe(el);
  document.addEventListener('visibilitychange',update);media.addEventListener('change',update);update();
  return()=>{observer.disconnect();document.removeEventListener('visibilitychange',update);media.removeEventListener('change',update);};
 },[]);
 useEffect(()=>{if(gallery!==null)galleryDialog.current.showModal();},[gallery]);
 useEffect(()=>{if(brief!==null){setRole(brief);setSaved(false);briefDialog.current.showModal();}},[brief]);
 const toggleVideo=()=>{const el=video.current;userPaused.current=!el.paused;if(el.paused)el.play().catch(()=>setPaused(true));else el.pause();};
 const openBrief=(value='Окрема задача / концерт / поїздка')=>{setMenu(false);setBrief(value);};
 const downloadBrief=e=>{
  e.preventDefault();const f=new FormData(e.currentTarget);
  const text=`YAR / Бриф для розмови\n\nНапрям: ${role}\nІм’я: ${f.get('name')}\nКонтакт: ${f.get('email')}\n\nІдея:\n${f.get('idea')}\n\nЧернетка з дизайн-прототипу. Нікуди не надіслана.\n`;
  const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='yar-brief.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);setSaved(true);
 };
 return <>
  <a className="skip" href="#services">До змісту</a>
  <header className={`header${scrolled?" is-scrolled":""}${menu?" menu-open":""}`}>
   <a href="#top" className="brand" aria-label="YAR — на початок" onClick={()=>setMenu(false)}><Logo/></a>
   <nav aria-label="Головна навігація" className={menu?'navigation open':'navigation'}>
    <a href="#services" onClick={()=>setMenu(false)}>Що робимо</a><a href="#team" onClick={()=>setMenu(false)}>Хто ми</a><a href="#collaboration" onClick={()=>setMenu(false)}>Співпраця</a><a href="#contact" onClick={()=>setMenu(false)}>Поговорімо ↗</a>
   </nav>
   <button className="menu-toggle" aria-expanded={menu} aria-label={menu?'Закрити меню':'Відкрити меню'} onClick={()=>setMenu(!menu)}>{menu?'Закрити':'Меню'}</button>
  </header>
  <main ref={stageMotion.ref} className={`backstage-page${stageMotion.enabled?' motion-enabled':''}`}>
   <section className="hero" id="top" aria-labelledby="hero-title">
    <video ref={video} className="hero-video" src="/media/backstage.mp4" poster="/media/backstage.jpg" muted loop playsInline preload="metadata" onPlay={()=>setPaused(false)} onPause={()=>setPaused(true)} aria-hidden="true"/>
    <div className="hero-shade" aria-hidden="true"/>
    <div className="hero-content">
     <span className="hero-eyebrow">YAR / Музична агенція в Польщі</span><h1 id="hero-title">Ближче<br/>до музики.</h1>
     <div className="hero-bottom"><p>Твоя музика. Спільна справа.<br/>Для артистів, гуртів та їхніх менеджерів.</p><a className="hero-action" href="#contact">Обговорити свою подію <Arrow diagonal/></a></div>
    </div>
    <button className="video-toggle" onClick={toggleVideo} aria-label={paused?'Відтворити фонове відео':'Призупинити фонове відео'}><PlaybackIcon paused={paused}/></button>
   </section>
   <div className="stage-world">
    <section className="services stage-section" id="services" aria-labelledby="services-title">
     <SceneEntrance className="stage-passage" enabled={stageMotion.enabled}>
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
      <div className="cue-inner"><div><span className="cue-label">{direction.title}</span><h3>{direction.heading}</h3></div><p>{direction.text}</p></div>
     </article>)}</div>
     <div className={`agency-ticker${tickerPaused?' is-paused':''}`} role="region" aria-label="Booking, концерти, супровід артистів"><div className="ticker-track" aria-hidden="true">{[0,1].map(i=><span className="ticker-copy" key={i}>BOOKING <span>✳</span> КОНЦЕРТИ <span>✳</span> СУПРОВІД АРТИСТІВ <span>✳</span> YAR <span>✳</span></span>)}</div>{stageMotion.enabled&&<button className="ticker-toggle" aria-label={tickerPaused?'Відновити рух рядка':'Призупинити рух рядка'} aria-pressed={tickerPaused} onClick={()=>setTickerPaused(value=>!value)}><PlaybackIcon paused={tickerPaused}/></button>}</div>
     <div className="collaboration" id="collaboration" data-reveal><span className="eyebrow">Як можемо працювати</span><div className="collaboration-intro"><h3>На один концерт.<br/>Або надовго.</h3><p>Не обов’язково передавати нам усе. Визначаємо задачі, відповідальність і вартість до початку роботи.</p></div><div className="collaboration-formats">
      <div className="format-column"><button onClick={()=>openBrief('Окрема задача / концерт / поїздка')}><span>Окрема задача<br/>або подія</span><p>Booking, поїздка чи організація концерту. Підключаємось там, де потрібна допомога.</p><Arrow diagonal/></button></div>
      <div className="format-column"><button onClick={()=>openBrief('Постійна робота з артистом')}><span>Постійна робота<br/>з артистом</span><p>Для гуртів, яким потрібна організаційна команда на постійній основі.</p><Arrow diagonal/></button>
       <aside className="collaboration-example" id="moments" aria-labelledby="artist-name">
        <button className="example-photo" onClick={()=>setGallery(0)} aria-label="Відкрити фотографії співпраці з wuha"><Photo item={photos[0]} sizes="(max-width: 650px) 34vw, 180px"/></button>
        <div><span className="artist-relationship">З YAR на постійній основі</span><h4 id="artist-name">wuha</h4><button className="text-link" onClick={()=>setGallery(0)}>Фото зі співпраці <Arrow diagonal/></button></div>
       </aside>
      </div>
     </div></div>
    </section>
    <section className="team stage-section" id="team" aria-labelledby="team-title">
     <SceneEntrance className="dressing-mirror" enabled={stageMotion.enabled}>
      <div className="mirror-lamps lamps-left" data-motion="lamps" aria-hidden="true">{Array.from({length:6},(_,i)=><i key={i}/>)}</div>
      <div className="mirror-lamps lamps-right" data-motion="lamps" aria-hidden="true">{Array.from({length:6},(_,i)=><i key={i}/>)}</div>
      <div className="mirror-content"><div data-motion="text" data-delay="0.1"><span className="eyebrow">Команда YAR</span><h2 id="team-title">Софія<br/>та Віка.</h2></div>
       <div className="team-copy" data-motion="text" data-delay="0.2"><p>Ми працюємо з артистами й організовуємо музичні події в Польщі. З нами ви обговорюєте задачі, домовленості та організацію виступу.</p><p>Напишіть про свій гурт і плани. Визначимо, яку частину роботи можемо взяти на себе.</p><a className="text-link team-link" href="#contact">Зв’язатися з командою <Arrow diagonal/></a></div>
      </div>
     </SceneEntrance>
    </section>
   <section className="contact stage-section" id="contact" aria-labelledby="contact-title">
    <div className="contact-main"><span className="eyebrow">Почнемо з розмови</span><h2 id="contact-title">Що ти<br/>задумав?</h2><p className="contact-intro">Концерт, поїздка чи новий етап для гурту.<br/>Розкажи — знайдемо, з чого почати.</p>
     <a className="contact-email contact-channel" href="mailto:yars.agency@gmail.com"><span className="channel-icon"><ContactIcon kind="email"/></span><span>yars.agency@gmail.com</span><Arrow diagonal/></a>
     <div className="contact-actions"><a className="contact-channel instagram-channel" href="https://www.instagram.com/yar_agcy/" target="_blank" rel="noreferrer"><span className="channel-icon"><ContactIcon kind="instagram"/></span><span>Instagram <span className="channel-handle">@yar_agcy</span></span><Arrow diagonal/></a><button className="ticket brief-action" onClick={()=>openBrief()}><ContactIcon kind="brief"/><span>Підготувати бриф</span><Arrow diagonal/></button></div>
     <p className="brief-explainer">Хочеш зібрати думки? Підготуй бриф, завантаж його й надішли нам поштою.</p>
    </div>
    <div className="contact-brand"><MouthSignal/><span className="brand-question">How are you anyway?</span></div>
   </section>
   </div>
  </main>
  <footer className="site-footer">
   <div className="footer-top">
    <a className="footer-brand" href="#top" aria-label="YAR — повернутися на початок"><Logo/><span>Музична агенція<br/>в Польщі</span></a>
    <nav className="footer-navigation" aria-label="Навігація внизу сторінки"><a href="#services">Що робимо</a><a href="#collaboration">Співпраця</a><a href="#team">Хто ми</a></nav>
    <div className="footer-socials"><a href="mailto:yars.agency@gmail.com" aria-label="Написати YAR електронною поштою"><ContactIcon kind="email"/><span>Написати нам</span><Arrow diagonal/></a><a href="https://www.instagram.com/yar_agcy/" target="_blank" rel="noreferrer" aria-label="YAR в Instagram (нова вкладка)"><ContactIcon kind="instagram"/><span>@yar_agcy</span><Arrow diagonal/></a></div>
   </div>
   <div className="footer-bottom"><span className="prototype-label">Прототип. Тексти на погодження.</span>{!stageMotion.reduced&&<button className="motion-control" aria-label={stageMotion.enabled?'Призупинити анімацію сторінки':'Увімкнути анімацію сторінки'} aria-pressed={!stageMotion.enabled} onClick={stageMotion.toggle}><PlaybackIcon paused={!stageMotion.enabled}/></button>}<a className="back-to-top" href="#top"><span>Нагору</span><span className="top-arrow"><Arrow/></span></a></div>
  </footer>
  <dialog className="gallery-dialog" aria-label="Фотогалерея YAR" ref={galleryDialog} onClose={()=>setGallery(null)} onClick={e=>{if(e.target===e.currentTarget)e.currentTarget.close();}} onKeyDown={e=>{if(e.key==='ArrowRight')setGallery(value=>(value+1)%photos.length);if(e.key==='ArrowLeft')setGallery(value=>(value+photos.length-1)%photos.length);}}>
   {gallery!==null&&<><div className="gallery-toolbar"><span>{gallery+1} / {photos.length}</span><button onClick={()=>galleryDialog.current.close()} aria-label="Закрити фото">Закрити ×</button></div><Photo item={photos[gallery]}/><div className="gallery-bottom"><button aria-label="Попереднє фото" onClick={()=>setGallery(value=>(value+photos.length-1)%photos.length)}>←</button><p>{photos[gallery].title}</p><button aria-label="Наступне фото" onClick={()=>setGallery(value=>(value+1)%photos.length)}>→</button></div></>}
  </dialog>
  <dialog className="brief-dialog" aria-label="Бриф для розмови" ref={briefDialog} onClose={()=>setBrief(null)} onClick={e=>{if(e.target===e.currentTarget)e.currentTarget.close();}}>
   <div className="brief-top"><Logo/><button onClick={()=>briefDialog.current.close()} aria-label="Закрити бриф">Закрити ×</button></div>
   <h2>Бриф для YAR</h2><p className="form-intro">Додай контакт і коротко опиши пропозицію.</p>
   <form onSubmit={downloadBrief}><label>Про що поговоримо?<select value={role} onChange={e=>setRole(e.target.value)}><option>Окрема задача / концерт / поїздка</option><option>Постійна робота з артистом</option><option>Маю іншу ідею</option></select></label><div className="form-row"><label>Як тебе звати?<input name="name" required autoComplete="name" maxLength="100"/></label><label>Електронна пошта<input name="email" type="email" required autoComplete="email"/></label></div><label>Твоя ідея<textarea name="idea" rows="4" required maxLength="3000" placeholder="Розкажи про гурт, подію, місто, дати та допомогу, яка потрібна…"/></label><p className="demo-note">Це прототип: бриф завантажиться файлом на твій пристрій. Дані нікуди не надсилаються.</p><button type="submit" className="ticket">Зберегти бриф <Arrow/></button><p className="saved" role="status">{saved?'Бриф підготовлено. Завантаження розпочалося.':''}</p></form>
  </dialog>
 </>;
}
createRoot(document.getElementById('root')).render(<App/>);
