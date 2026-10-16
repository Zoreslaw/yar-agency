import React, {useEffect,useRef} from 'react';
import {useAnimate,useInView} from 'motion/react';

const poses={booking:{x:-16,y:8,rotate:-2},production:{x:12,y:16,rotate:1.5},promo:{x:-10,y:18,rotate:-3}};

// Copy and artwork enter independently so a tall mobile scene does not animate
// its photograph before the visitor can see it. Static content is always complete.
function SceneLayer({enabled,variant,className,children}) {
 const [scope,animate]=useAnimate();
 const inView=useInView(scope,{once:true,amount:.2});
 const played=useRef(false);
 useEffect(()=>{
  if(!enabled || !inView || played.current) return;
  const root=scope.current;
  const pieces=[...root.querySelectorAll('[data-piece]')];
  const strokes=[...root.querySelectorAll('.scene-stroke[pathLength]')];
  const copy=variant==='copy'?[...root.children]:[];
  const pose=poses[variant];
  const sequence=[
   ...pieces.map(el=>[el,{x:[pose.x,0],y:[pose.y,0],rotate:[pose.rotate,0],opacity:[.75,1]},{at:Number(el.dataset.piece)*.14,duration:.65}]),
   ...strokes.map((el,i)=>[el,{strokeDasharray:'1',strokeDashoffset:[1,0]},{at:.15+i*.1,duration:.85}]),
   ...copy.map((el,i)=>[el,{y:[10,0],opacity:[.75,1]},{at:i*.08,duration:.45}])
  ];
  played.current=true;
  const clear=()=>{
   for(const el of [...pieces,...copy,...strokes]) for(const prop of ['transform','opacity','stroke-dasharray','stroke-dashoffset']) el.style.removeProperty(prop);
  };
  const controls=animate(sequence,{defaultTransition:{ease:[.22,.7,.2,1]}});
  controls.then(clear);
  return ()=>{controls.stop();clear();};
 },[enabled,inView,variant,animate,scope]);
 return <div ref={scope} className={className}>{children}</div>;
}

export function ServiceScene({id,enabled,copy,artwork}) {
 return <article className={`service-story story-${id}`} aria-labelledby={`${id}-title`}>
  <div className="story-layout">
   <SceneLayer enabled={enabled} variant="copy" className="story-copy">{copy}</SceneLayer>
   <SceneLayer enabled={enabled} variant={id} className="story-visual">{artwork}</SceneLayer>
  </div>
 </article>;
}
