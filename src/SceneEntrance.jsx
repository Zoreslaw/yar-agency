import React, {useEffect, useRef} from 'react';
import {useAnimate, useInView} from 'motion/react';

// One scoped timeline for the contents; the section surface never animates.
export function SceneEntrance({enabled, className, children}) {
 const [scope, animate] = useAnimate();
 const inView = useInView(scope, {once:true, amount:.12});
 const played = useRef(false);
 useEffect(() => {
  if (!enabled || !inView || played.current) return;
  const elements = [...scope.current.querySelectorAll('[data-motion]')];
  const sequence = elements.map(element => {
   const kind = element.dataset.motion;
   const at = Number(element.dataset.delay || 0);
   if (kind === 'line') return [element, {strokeDasharray:'1', strokeDashoffset:[1,0]}, {at, duration:.95}];
   if (kind === 'lamps') return [element, {opacity:[.35,1]}, {at, duration:.8}];
   return [element, {opacity:[.3,1], translate:['0px 18px','0px 0px']}, {at, duration:.65}];
  });
  played.current = true;
  const controls = animate(sequence, {defaultTransition:{ease:[.22,.7,.2,1]}});
  return () => {
   controls.stop();
   // Disabling motion or hiding the page must never leave partially hidden text.
   for (const element of elements) for (const property of ['opacity','translate','stroke-dasharray','stroke-dashoffset']) element.style.removeProperty(property);
  };
 }, [enabled, inView, animate, scope]);
 return <div ref={scope} className={className}>{children}</div>;
}
