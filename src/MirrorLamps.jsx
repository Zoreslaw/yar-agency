import React, {useRef} from 'react';
import {motion, useInView} from 'motion/react';

export function MirrorLamps({side, enabled}) {
 const ref = useRef(null);
 const inView = useInView(ref, {amount:.2});
 const running = enabled && inView;
 return <div ref={ref} className={`mirror-lamps lamps-${side}`} aria-hidden="true">
  {Array.from({length:6}, (_, index) => {
   const firstCircuit = (index % 2 === 0) === (side === 'left');
   const levels = firstCircuit ? [1,1,0,0,1] : [0,0,1,1,0];
   return <i key={index}><motion.span className="bulb-light"
    initial={{opacity:levels[0]}}
    animate={{opacity:running ? levels : levels[0]}}
    transition={running ? {duration:6, times:[0,.43,.5,.93,1], ease:'easeInOut', repeat:Infinity} : {duration:0}}
   /></i>;
  })}
 </div>;
}
