import React from 'react';
import {SceneEntrance} from './SceneEntrance.jsx';
import {ActionButton} from './components/Buttons.jsx';
import './team-section.css';

export function TeamSection({motion}) {
 return <section className="team stage-section team-editorial" id="team" aria-labelledby="team-title">
  <SceneEntrance className="team-editorial-inner" enabled={motion}>
   <div className="team-images" data-motion="photo">
    <img className="team-panorama" src="/media/team-photostrip.webp" srcSet="/media/team-photostrip-800.webp 800w, /media/team-photostrip.webp 2400w" sizes="100vw" width="4732" height="1527" alt="Чотири спільні кадри з фотобудки"/>
    <div className="team-frames" aria-hidden="true">{[1,2,3,4].map(n=><img key={n} src={`/media/team-frame-${n}.webp`} alt=""/>)}</div>
   </div>
   <div className="team-editorial-copy" data-motion="text" data-delay="0.1">
    <div className="team-introduction"><h2 id="team-title">Наша команда.</h2><ActionButton tone="red" href="#contact">Зв’язатися з командою</ActionButton></div>
    <div className="team-editorial-details">
     <div className="team-description"><p>Ми працюємо з артистами й організовуємо музичні події в Польщі. З нами ви обговорюєте задачі, домовленості та організацію виступу.</p></div>
     <div className="team-origin"><h3>Знайоме «а допоможеш?»</h3><p>Спершу ми просто допомагали знайомим гуртам із концертами. Потім до майданчиків і листів додалися дорога, таймінги й ще десяток дрібниць, без яких виступ не складається. У якийсь момент зрозуміли: ми вже не «допомагаємо час від часу», а робимо це постійно. Так і з’явилася YAR.</p></div>
    </div>
   </div>
  </SceneEntrance>
 </section>;
}
