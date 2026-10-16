import React from 'react';
import assets from './assets.json';

// The photograph remains the gallery trigger; artwork is decorative and never covers copy.
function PhotoPrint({photo, gallery, alt, onGallery, className='', order=0}) {
 return <div className={`scene-piece ${className}`} data-piece={order}>
  <button className="story-photo" type="button" onClick={()=>onGallery(gallery)} aria-label={`Відкрити фото: ${alt}`}>
   <img src={assets[photo]} srcSet={`${assets[photo].replace('.webp','-800.webp')} 800w, ${assets[photo]} 1800w`} sizes="(max-width: 700px) 88vw, 44vw" alt={alt} loading="lazy" decoding="async" width="1800" height="1200"/>
  </button>
 </div>;
}

function RouteArtwork({service,onGallery}) {
 return <div className="story-art art-route">
  <svg className="route-drawing" viewBox="0 0 600 500" fill="none" aria-hidden="true">
   <path className="scene-stroke route-trail" pathLength="1" d="M25 100V390Q25 440 75 440H510Q565 440 565 385"/>
   <circle cx="25" cy="100" r="7"/>
   <path className="route-end" d="m553 400 12-16 12 16"/>
  </svg>
  <div className="route-backing" aria-hidden="true"/>
  <PhotoPrint {...service} onGallery={onGallery} className="route-print"/>

 </div>;
}

function ProductionArtwork({service,onGallery}) {
 return <div className="story-art art-production">
  <div className="production-mount" aria-hidden="true"/>
  <PhotoPrint {...service} onGallery={onGallery} className="production-print"/>

 </div>;
}

function PromoArtwork({service,onGallery}) {
 return <div className="story-art art-promo">
  <div className="promo-backing" aria-hidden="true"><span/><span/><span/><span/><span/><span/></div>
  <PhotoPrint photo="crowd" gallery={3} alt="Глядачі біля музикантів на концерті" onGallery={onGallery} className="promo-small promo-small--top" order={0}/>
  <PhotoPrint photo="live" gallery={1} alt="Живий виступ, знятий з-поміж глядачів" onGallery={onGallery} className="promo-small promo-small--bottom" order={1}/>
  <PhotoPrint {...service} onGallery={onGallery} className="promo-main" order={2}/>
  <span className="scene-tape promo-tape" aria-hidden="true"/>

 </div>;
}

const artwork = {booking:RouteArtwork,production:ProductionArtwork,promo:PromoArtwork};
export function ServiceArtwork({service,onGallery}) {
 const Artwork = artwork[service.id];
 return <Artwork service={service} onGallery={onGallery}/>;
}
