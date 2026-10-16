import React from 'react';
import assets from './assets.json';

function PhotoPrint({photo, alt, className='', order=0}) {
 return <div className={`scene-piece ${className}`} data-piece={order}>
  <div className="story-photo">
   <img src={assets[photo]} srcSet={`${assets[photo].replace('.webp','-800.webp')} 800w, ${assets[photo]} 1800w`} sizes="(max-width: 700px) 88vw, 44vw" alt={alt} loading="lazy" decoding="async" width="1800" height="1200"/>
  </div>
 </div>;
}

export function ServiceArtwork({service}) {
 if (service.id==='promo') return <div className="story-art art-promo">
  <PhotoPrint photo="crowd" alt="Глядачі біля музикантів на концерті" className="promo-small promo-small--top" order={0}/>
  <PhotoPrint photo="live" alt="Живий виступ, знятий з-поміж глядачів" className="promo-small promo-small--bottom" order={1}/>
  <PhotoPrint {...service} className="promo-main" order={2}/>
 </div>;
 return <div className={`story-art art-${service.id==='booking'?'route':'production'}`}>
  <PhotoPrint {...service} className={service.id==='booking'?'route-print':'production-print'}/>
 </div>;
}
