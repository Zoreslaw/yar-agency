import React, {useEffect, useId, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import '@fontsource-variable/manrope';
import '@fontsource-variable/league-spartan';
import assets from './assets.json';
import './style.css';

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
  <a className="skip" href="#moments">До змісту</a>
  <header className="header">
   <a href="#top" className="brand" aria-label="YAR — на початок"><Logo/></a>
   <nav aria-label="Головна навігація" className={menu?'navigation open':'navigation'}>
    <a href="#moments" onClick={()=>setMenu(false)}>Фото</a><a href="#contact" onClick={()=>setMenu(false)}>Співпраця</a>
   </nav>
   <button className="menu-toggle" aria-expanded={menu} aria-label={menu?'Закрити меню':'Відкрити меню'} onClick={()=>setMenu(!menu)}>{menu?'Закрити':'Меню'}</button>
  </header>
  <main>
   <section className="hero" id="top" aria-labelledby="hero-title">
    <div className="hero-identity" id="agency">
     <h1 id="hero-title"><span className="sr-only">YAR — музична агенція</span><Logo className="hero-logo"/></h1>
     <div className="hero-copy"><p>Музична агенція.</p><a href="#contact">Артистам та організаторам</a></div>
    </div>
    <div className="hero-film">
     <video ref={video} className="hero-video" src="/media/backstage.mp4" poster="/media/backstage.jpg" muted loop playsInline preload="metadata" onPlay={()=>setPaused(false)} onPause={()=>setPaused(true)} aria-hidden="true"/>
     <button className="video-toggle" onClick={toggleVideo} aria-label={paused?'Відтворити фонове відео':'Призупинити фонове відео'}>{paused?'Відтворити':'Пауза'}</button>
    </div>
   </section>
   <section className="photo-story" id="moments">
    <div className="story-heading"><h2>Із залу.</h2><button className="text-link" onClick={()=>setGallery(0)}>Всі фотографії ({photos.length})</button></div>
    <button className="lead-photo" onClick={()=>setGallery(0)} aria-label="Відкрити фото виступу"><Photo item={photos[0]}/></button>
    <div className="photo-counter"><span>Виступ</span><span>1 / {photos.length}</span></div>
    <div className="photo-pair">
     <button className="people-photo" onClick={()=>setGallery(2)} aria-label="Відкрити фото перед подією"><Photo item={photos[2]}/><span>Перед подією</span></button>
     <div className="merch-note"><button onClick={()=>setGallery(5)} aria-label="Відкрити фото мерчу YAR"><Photo item={photos[5]}/></button><p>YAR поза сценою.</p></div>
    </div>
    <div className="contact-sheet" aria-label="Всі фотографії">{photos.map((p,index)=><button key={p.key} onClick={()=>setGallery(index)} aria-label={`Відкрити фото: ${p.title}`}><Photo item={p}/></button>)}</div>
   </section>
   <section className="contact" id="contact">
    <div className="contact-main"><h2>Співпраця</h2><div className="contact-choices">
     <button onClick={()=>openBrief('Я артист')}><span>Я артист</span><span className="choice-note">Музика, виступи, плани.</span><span className="choice-sign" aria-hidden="true">+</span></button>
     <button onClick={()=>openBrief('Організовую подію')}><span>Я організатор</span><span className="choice-note">Формат, місце, дата.</span><span className="choice-sign" aria-hidden="true">+</span></button>
     <button onClick={()=>openBrief('Хочу партнерство')}><span>Інша пропозиція</span><span className="choice-note">Розкажи, що задумав.</span><span className="choice-sign" aria-hidden="true">+</span></button>
    </div></div>
    <div className="contact-brand"><img className="mouth" src="/media/mouth-source.png" alt="Символ YAR — відкритий рот з логотипом на язиці" loading="lazy"/><span className="brand-question">How are you anyway?</span></div>
   </section>
  </main>
  <footer><Logo/><span className="prototype-label">Прототип. Тексти на погодження.</span><a href="#top">Нагору</a></footer>
  <dialog className="gallery-dialog" aria-label="Фотогалерея YAR" ref={galleryDialog} onClose={()=>setGallery(null)} onClick={e=>{if(e.target===e.currentTarget)e.currentTarget.close();}} onKeyDown={e=>{if(e.key==='ArrowRight')setGallery((gallery+1)%photos.length);if(e.key==='ArrowLeft')setGallery((gallery+photos.length-1)%photos.length);}}>
   {gallery!==null&&<><div className="gallery-toolbar"><span>{gallery+1} / {photos.length}</span><button onClick={()=>galleryDialog.current.close()} aria-label="Закрити фото">Закрити ×</button></div><Photo item={photos[gallery]}/><div className="gallery-bottom"><button aria-label="Попереднє фото" onClick={()=>setGallery((gallery+photos.length-1)%photos.length)}>←</button><p>{photos[gallery].title}</p><button aria-label="Наступне фото" onClick={()=>setGallery((gallery+1)%photos.length)}>→</button></div></>}
  </dialog>
  <dialog className="brief-dialog" aria-label="Бриф для розмови" ref={briefDialog} onClose={()=>setBrief(null)} onClick={e=>{if(e.target===e.currentTarget)e.currentTarget.close();}}>
   <div className="brief-top"><Logo/><button onClick={()=>briefDialog.current.close()} aria-label="Закрити бриф">Закрити ×</button></div>
   <h2>Бриф для YAR</h2><p className="form-intro">Додай контакт і коротко опиши пропозицію.</p>
   <form onSubmit={downloadBrief}><label>Про що поговоримо?<select value={role} onChange={e=>setRole(e.target.value)}><option>Я артист</option><option>Організовую подію</option><option>Хочу партнерство</option><option>Маю ідею</option></select></label><div className="form-row"><label>Як тебе звати?<input name="name" required autoComplete="name" maxLength="100"/></label><label>Електронна пошта<input name="email" type="email" required autoComplete="email"/></label></div><label>Твоя ідея<textarea name="idea" rows="4" required maxLength="3000" placeholder="Музика, подія, місце або задум…"/></label><p className="demo-note">Це прототип: бриф завантажиться файлом на твій пристрій. Дані нікуди не надсилаються.</p><button type="submit" className="ticket">Зберегти бриф <Arrow/></button><p className="saved" role="status">{saved?'Бриф підготовлено. Завантаження розпочалося.':''}</p></form>
  </dialog>
 </>;
}
createRoot(document.getElementById('root')).render(<App/>);
