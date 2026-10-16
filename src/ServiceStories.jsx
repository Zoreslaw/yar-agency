import React from 'react';
import {ServiceScene} from './ServiceScene';
import {ServiceArtwork} from './ServiceArtwork';
import {ActionButton} from './components/Buttons';
import './service-stories.css';

const services = [
 {
  id:'booking', nav:'Майданчик і поїздка', title:<>Майданчик<br/>і поїздка.</>, photo:'people', gallery:2,
  alt:'Люди спілкуються перед входом на концерт',
  text:'Шукаємо клуби й фестивалі в Польщі, домовляємося про виступ і допомагаємо організувати поїздку.',
  tasks:['Узгоджуємо дати, умови й технічні потреби з майданчиком.','Плануємо маршрут, транспорт і ночівлю. Допомагаємо з документами та супроводом у дорозі.']
 },
 {
  id:'production', nav:'Організація концерту', title:<>Організація<br/>концерту.</>, photo:'stage', gallery:6,
  alt:'Вокаліст виступає перед глядачами в камерному залі',
  text:'Координуємо підготовку й день виступу. Можемо підключитися й тоді, коли майданчик уже знайдено.',
  tasks:['Узгоджуємо з клубом звук, світло, саундчек і гримерку.','Складаємо таймінг, координуємо команду на місці й допомагаємо з перекладом.']
 },
 {
  id:'promo', nav:'Промо й зйомка', title:<>Промо, дизайн<br/>і зйомка.</>, photo:'phone', gallery:4,
  alt:'Глядач знімає концерт на телефон',
  text:'Допомагаємо анонсувати виступ, підготувати матеріали й зняти концерт. Ці задачі можна замовити окремо.',
  tasks:['Просуваємо подію з вашими готовими матеріалами: соцмережі, реклама й місцеві медіа.','Готуємо афіші, Stories, Reels і press kit. Адаптуємо тексти українською, польською та англійською.','Організовуємо фото- й відеозйомку концерту та backstage.']
 }
];

export function ServiceStories({enabled,onGallery,onDiscuss}) {
 return <div className="service-stories">
  <nav className="stories-navigation" aria-label="Напрями допомоги">{services.map(service=><a key={service.id} href={`#${service.id}-title`}>{service.nav}<span aria-hidden="true">↘</span></a>)}</nav>
  {services.map(service=><ServiceScene key={service.id} id={service.id} enabled={enabled}
   copy={<>
    <h3 id={`${service.id}-title`}>{service.title}</h3>
    <p className="story-lead">{service.text}</p>
    <ul className="story-tasks">{service.tasks.map(task=><li key={task}>{task}</li>)}</ul>
   </>}
   artwork={<ServiceArtwork service={service} onGallery={onGallery}/>}
  />)}
  <div className="stories-outro"><p>Окреме завдання чи весь концерт —<br/>обсяг роботи узгодимо разом.</p><ActionButton tone="red" onClick={onDiscuss}>Обговорити задачу</ActionButton></div>
 </div>;
}
