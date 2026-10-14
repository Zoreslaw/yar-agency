import React from 'react';
import {SceneEntrance} from './SceneEntrance';
import {ImprintAction} from './components/Buttons';
import './service-stories.css';

const services = [
 {
  id:'booking', title:<>Майданчик<br/>і поїздка.</>, photo:'people', gallery:2,
  alt:'Люди спілкуються перед входом на концерт',
  text:'Шукаємо клуби й фестивалі в Польщі, домовляємося про виступ і допомагаємо організувати поїздку.',
  tasks:['Узгоджуємо дати, умови й технічні потреби з майданчиком.','Плануємо маршрут, транспорт і ночівлю. Допомагаємо з документами та супроводом у дорозі.']
 },
 {
  id:'production', title:<>Організація<br/>концерту.</>, photo:'stage', gallery:6,
  alt:'Вокаліст виступає перед глядачами в камерному залі',
  text:'Координуємо підготовку й день виступу. Можемо підключитися й тоді, коли майданчик уже знайдено.',
  tasks:['Узгоджуємо з клубом звук, світло, саундчек і гримерку.','Складаємо таймінг, координуємо команду на місці й допомагаємо з перекладом.']
 },
 {
  id:'promo', title:<>Промо, дизайн<br/>і зйомка.</>, photo:'phone', gallery:4,
  alt:'Глядач знімає концерт на телефон',
  text:'Допомагаємо анонсувати виступ, підготувати матеріали й зняти концерт. Ці задачі можна замовити окремо.',
  tasks:['Просуваємо подію з вашими готовими матеріалами: соцмережі, реклама й місцеві медіа.','Готуємо афіші, Stories, Reels і press kit. Адаптуємо тексти українською, польською та англійською.','Організовуємо фото- й відеозйомку концерту та backstage.']
 }
];

export function ServiceStories({enabled,onGallery,onDiscuss}) {
 return <div className="service-stories">
  {services.map(service=><article key={service.id} className={`service-story story-${service.id}`} aria-labelledby={`${service.id}-title`}>
   <SceneEntrance enabled={enabled} className="story-layout">
    <div className="story-copy" data-motion="text">
     <h3 id={`${service.id}-title`}>{service.title}</h3>
     <p className="story-lead">{service.text}</p>
     <ul className="story-tasks">{service.tasks.map(task=><li key={task}>{task}</li>)}</ul>
    </div>
    <div className="story-visual" data-motion="photo" data-delay="0.12">
     <button type="button" className="story-photo" onClick={()=>onGallery(service.gallery)} aria-label={`Відкрити фото: ${service.alt}`}>
      <img src={`/media/${service.photo}.webp`} srcSet={`/media/${service.photo}-800.webp 800w, /media/${service.photo}.webp 1800w`} sizes="(max-width: 700px) 88vw, 48vw" alt={service.alt} loading="lazy" decoding="async" width="1800" height="1200"/>
     </button>
    </div>
   </SceneEntrance>
  </article>)}
  <div className="stories-outro"><p>Окреме завдання чи весь концерт —<br/>обсяг роботи узгодимо разом.</p><ImprintAction onClick={onDiscuss}>Обговорити задачу</ImprintAction></div>
 </div>;
}
