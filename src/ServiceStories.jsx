import React, {useState} from 'react';
import {ActionButton} from './components/Buttons';
import './service-stories.css';

const services = [
 {
  id:'booking', title:'Майданчик і поїздка',
  text:'Шукаємо клуби й фестивалі в Польщі, домовляємося про виступ і допомагаємо організувати поїздку.',
  tasks:['Узгоджуємо дати, умови й технічні потреби з майданчиком.','Плануємо маршрут, транспорт і ночівлю. Допомагаємо з документами та супроводом у дорозі.']
 },
 {
  id:'production', title:'Організація концерту',
  text:'Координуємо підготовку й день виступу. Можемо підключитися й тоді, коли майданчик уже знайдено.',
  tasks:['Узгоджуємо з клубом звук, світло, саундчек і гримерку.','Складаємо таймінг, координуємо команду на місці й допомагаємо з перекладом.']
 },
 {
  id:'promo', title:'Промо, дизайн і зйомка',
  text:'Допомагаємо анонсувати виступ, підготувати матеріали й зняти концерт. Ці задачі можна замовити окремо.',
  tasks:['Просуваємо подію з вашими готовими матеріалами: соцмережі, реклама й місцеві медіа.','Готуємо афіші, Stories, Reels і press kit. Адаптуємо тексти українською, польською та англійською.','Організовуємо фото- й відеозйомку концерту та backstage.']
 }
];

function ServiceDisclosure({service}) {
 const [open,setOpen]=useState(false);
 const triggerId=`${service.id}-toggle`;
 const panelId=`${service.id}-details`;
 return <article className={`service-disclosure${open?' is-open':''}`} aria-labelledby={`${service.id}-title`}>
  <h3 id={`${service.id}-title`}>
   <button className="service-disclosure-trigger" id={triggerId} type="button" aria-expanded={open} aria-controls={panelId} onClick={()=>setOpen(value=>!value)}>
    <span className="service-disclosure-title">{service.title}</span>
    <span className="service-disclosure-affordance" aria-hidden="true">
     <span className="service-disclosure-label">{open?'Згорнути':'Детальніше'}</span>
     <span className="service-disclosure-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M4 12h16"/><path className="service-disclosure-plus" d="M12 4v16"/></svg></span>
    </span>
   </button>
  </h3>
  <div className="service-disclosure-panel" id={panelId} role="region" aria-labelledby={triggerId} aria-hidden={!open} inert={!open}>
   <div className="service-disclosure-clip">
    <div className="service-disclosure-content">
     <p className="story-lead">{service.text}</p>
     <ul className="story-tasks">{service.tasks.map(task=><li key={task}>{task}</li>)}</ul>
    </div>
   </div>
  </div>
 </article>;
}

export function ServiceStories({enabled,onDiscuss}) {
 return <div className={`service-stories${enabled?'':' service-stories--static'}`}>
  <div className="service-disclosures">{services.map(service=><ServiceDisclosure key={service.id} service={service}/>)}</div>
  <div className="stories-outro"><ActionButton tone="red" onClick={onDiscuss}>Обговорити задачу</ActionButton></div>
 </div>;
}
