import React, {useEffect, useId, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import '@fontsource-variable/manrope';
import '@fontsource-variable/league-spartan';
import assets from './assets.json';
import './style.css';

const photos = [
 {key:'vocal',title:'На відстані витягнутої руки',alt:'Музикант із мікрофоном перед глядачами в камерному залі'},
 {key:'live',title:'Всередині звуку',alt:'Живий виступ, знятий з-поміж глядачів'},
 {key:'people',title:'До першого акорду',alt:'Люди спілкуються перед входом на подію'},
 {key:'crowd',title:'По один бік сцени',alt:'Глядачі біля музикантів на концерті'},
 {key:'phone',title:'Хочеться зберегти',alt:'Глядач знімає концерт на телефон'},
 {key:'merch',title:'Свій знак',alt:'Футболка з логотипом і символом YAR'},
 {key:'stage',title:'Тут і зараз',alt:'Вокаліст виступає перед глядачами'}
];
function Arrow({diagonal=false,...props}) {return <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}><path d={diagonal?'M7 25 25 7M7 7h18v18':'M4 16h23M17 6l10 10-10 10'} stroke="currentColor" strokeWidth="1.8"/></svg>}
function Logo({className=''}){const id=useId();return <svg className={`logo ${className}`} viewBox="150 76 555 277" role="img" aria-label="YAR Agency"><defs><mask id={id} maskUnits="userSpaceOnUse" x="0" y="0" width="845" height="493" style={{maskType:'alpha'}}><image href={assets.logo} width="845" height="493"/></mask></defs><rect width="845" height="493" fill="currentColor" mask={`url(#${id})`}/></svg>}
function Photo({item,...props}){return <img src={assets[item.key]} srcSet={`${assets[item.key].replace(".webp","-800.webp")} 800w, ${assets[item.key]} 1800w`} sizes="(max-width: 650px) 90vw, 75vw" alt={item.alt} loading="lazy" decoding="async" width={item.key==='people'?4642:6000} height={item.key==='people'?3075:4000} {...props}/>}

function App(){
 const [menu,setMenu]=useState(false),[paused,setPaused]=useState(false),[gallery,setGallery]=useState(null),[brief,setBrief]=useState(null),[saved,setSaved]=useState(false);
 const video=useRef(null),galleryDialog=useRef(null),briefDialog=useRef(null),userPaused=useRef(false),visible=useRef(true);
 const [role,setRole]=useState('Я артист');
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
 const openBrief=(value='Я артист')=>{setMenu(false);setBrief(value);};
 const downloadBrief=e=>{
  e.preventDefault();const f=new FormData(e.currentTarget);
  const text=`YAR / Бриф для розмови\n\nНапрям: ${role}\nІм’я: ${f.get('name')}\nКонтакт: ${f.get('email')}\n\nІдея:\n${f.get('idea')}\n\nЧернетка з дизайн-прототипу. Нікуди не надіслана.\n`;
  const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='yar-brief.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);setSaved(true);
 };
 return <>
  <a className="skip" href="#about">До змісту</a>
  <header className="header">
   <a href="#top" className="brand" aria-label="YAR — на початок"><Logo/></a>
   <span className="header-caption">Музика. Люди. Події.</span>
   <nav aria-label="Головна навігація" className={menu?'navigation open':'navigation'}>
    <a href="#about" onClick={()=>setMenu(false)}>Про YAR</a><a href="#moments" onClick={()=>setMenu(false)}>Атмосфера</a><a href="#together" onClick={()=>setMenu(false)}>Співпраця</a>
   </nav>
   <button className="header-contact" onClick={()=>openBrief()}>Поговорімо <Arrow diagonal/></button>
   <button className="menu-toggle" aria-expanded={menu} aria-label={menu?'Закрити меню':'Відкрити меню'} onClick={()=>setMenu(!menu)}>{menu?'Закрити':'Меню'}</button>
  </header>
  <main>
   <section className="hero" id="top" aria-labelledby="hero-title">
    <video ref={video} className="hero-video" src="/media/backstage.mp4" poster="/media/backstage.jpg" muted loop playsInline preload="metadata" onPlay={()=>setPaused(false)} onPause={()=>setPaused(true)} aria-hidden="true"/>
    <div className="hero-shade"/>
    <div className="hero-content">
     <div className="hero-topline"><span>Незалежна музична агенція</span><span className="sound-mark" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/></span></div>
     <h1 id="hero-title">Ближче<br/>до музики.</h1>
     <div className="hero-bottom"><a className="hero-explore" href="#moments"><span className="down-arrow">↓</span><span>Відчути атмосферу</span></a><div className="hero-intro"><p>Там, де зустрічаються артисти,<br className="desktop-break"/> люди та ідеї. І починається живе.</p><button className="ticket" onClick={()=>openBrief('Маю ідею')}>Обговорити ідею <Arrow diagonal/></button></div></div>
    </div>
    <button className="video-toggle" onClick={toggleVideo} aria-label={paused?'Відтворити фонове відео':'Призупинити фонове відео'}>{paused?'▷':'Ⅱ'}<span>{paused?'Відтворити':'Пауза'}</span></button>
    <span className="hero-side">YAR / LIVE MUSIC CULTURE</span>
   </section>
   <section className="about section-pad" id="about">
    <div className="section-kicker"><span>Про YAR</span><span>По один бік сцени</span></div>
    <div className="about-heading"><h2>Сцена починається<br/>з людей.</h2><p>З тих, хто грає. З тих, хто приходить слухати. З тих, хто допомагає цьому статися.</p></div>
    <div className="about-spread">
     <button className="spread-photo" onClick={()=>setGallery(3)} aria-label="Відкрити фото глядачів"><Photo item={photos[3]}/><span className="photo-open"><Arrow diagonal/></span></button>
     <div className="about-note"><span className="small-cross" aria-hidden="true">✳</span><p>Нам близька музика,<br/>яку проживають<br/>разом.</p><span className="note-caption">Від першого знайомства<br/>до останнього акорду.</span></div>
     <figure className="merch"><Photo item={photos[5]}/><figcaption>Музика має свій голос.</figcaption></figure>
    </div>
   </section>
   <section className="moments section-pad" id="moments">
    <div className="moments-heading"><h2>Це відчувається.</h2><p>Погляд із залу.<br/>Без відстані між нами.</p></div>
    <div className="photo-grid">{photos.slice(0,3).map((p,index)=><button className={`photo-card photo-card-${index}`} key={p.key} onClick={()=>setGallery(index)}><div className="photo-frame"><Photo item={p}/><span className="photo-open"><Arrow diagonal/></span></div><span className="photo-caption">{p.title}<span>↗</span></span></button>)}</div>
    <button className="all-photos" onClick={()=>setGallery(0)}>Дивитися всі фото <span>({photos.length})</span> <Arrow/></button>
   </section>
   <section className="together section-pad" id="together">
    <div className="together-intro"><span>Співпраця</span><h2>З чого<br/>почнемо?</h2><p>Розкажи, що хочеш зробити.<br/>Знайдемо спільну мову.</p></div>
    <div className="collaboration-list">{[
      ['Я артист','Хочу розповісти про свій проєкт','Твоя музика, посилання на виступи та плани — хороший початок розмови.'],
      ['Організовую подію','Шукаю музику для своєї події','Де, коли й для кого планується подія? Розкажи про формат і звук, який уявляєш.'],
      ['Хочу партнерство','Маю ідею для співпраці','Колаборація, простір, бренд чи зовсім новий формат — почнімо з твоєї ідеї.']
     ].map(([name,heading,description],i)=><details key={name} open={i===0?true:undefined}><summary><span>{name}</span><span className="plus" aria-hidden="true"/></summary><div className="collaboration-content"><h3>{heading}</h3><p>{description}</p><button onClick={()=>openBrief(name)}>Розповісти про себе <Arrow diagonal/></button></div></details>)}</div>
   </section>
   <section className="contact section-pad" id="contact">
    <div className="contact-body"><span>Твій наступний крок</span><h2>Є що<br/>сказати?</h2><button className="ticket cream-ticket" onClick={()=>openBrief('Маю ідею')}>Почнімо розмову <Arrow diagonal/></button></div>
    <img className="mouth" src="/media/mouth-source.png" alt="Символ YAR — відкритий рот з логотипом на язиці" loading="lazy"/>
    <div className="contact-bottom"><p>Для музики. Для людей.<br/>Для того, що буде далі.</p><span>HOW ARE YOU ANYWAY?</span></div>
   </section>
  </main>
  <footer><Logo/><p>Незалежна музична агенція</p><span className="prototype-label">Дизайн-концепт / тексти на погодження</span><a href="#top">Нагору ↑</a></footer>
  <dialog className="gallery-dialog" aria-label="Фотогалерея YAR" ref={galleryDialog} onClose={()=>setGallery(null)} onClick={e=>{if(e.target===e.currentTarget)e.currentTarget.close();}} onKeyDown={e=>{if(e.key==='ArrowRight')setGallery((gallery+1)%photos.length);if(e.key==='ArrowLeft')setGallery((gallery+photos.length-1)%photos.length);}}>
   {gallery!==null&&<><div className="gallery-toolbar"><span>{gallery+1} / {photos.length}</span><button onClick={()=>galleryDialog.current.close()} aria-label="Закрити фото">Закрити ×</button></div><Photo item={photos[gallery]}/><div className="gallery-bottom"><button aria-label="Попереднє фото" onClick={()=>setGallery((gallery+photos.length-1)%photos.length)}>←</button><p>{photos[gallery].title}</p><button aria-label="Наступне фото" onClick={()=>setGallery((gallery+1)%photos.length)}>→</button></div></>}
  </dialog>
  <dialog className="brief-dialog" aria-label="Бриф для розмови" ref={briefDialog} onClose={()=>setBrief(null)} onClick={e=>{if(e.target===e.currentTarget)e.currentTarget.close();}}>
   <div className="brief-top"><Logo/><button onClick={()=>briefDialog.current.close()} aria-label="Закрити бриф">Закрити ×</button></div>
   <h2>Розкажи свою ідею.</h2><p className="form-intro">Кілька слів, з яких почнеться розмова.</p>
   <form onSubmit={downloadBrief}><label>Про що поговоримо?<select value={role} onChange={e=>setRole(e.target.value)}><option>Я артист</option><option>Організовую подію</option><option>Хочу партнерство</option><option>Маю ідею</option></select></label><div className="form-row"><label>Як тебе звати?<input name="name" required autoComplete="name" maxLength="100"/></label><label>Електронна пошта<input name="email" type="email" required autoComplete="email"/></label></div><label>Твоя ідея<textarea name="idea" rows="4" required maxLength="3000" placeholder="Музика, подія, місце або задум…"/></label><p className="demo-note">Це прототип: бриф завантажиться файлом на твій пристрій. Дані нікуди не надсилаються.</p><button type="submit" className="ticket">Зберегти бриф <Arrow/></button><p className="saved" role="status">{saved?'Бриф підготовлено. Завантаження розпочалося.':''}</p></form>
  </dialog>
 </>;
}
createRoot(document.getElementById('root')).render(<App/>);
