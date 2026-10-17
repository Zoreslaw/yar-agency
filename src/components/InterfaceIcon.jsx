import React from 'react';

// Interface symbols are paths, never font glyphs or platform emoji.
export function InterfaceIcon({kind='arrow', className='', ...props}) {
 return <svg {...props} className={`interface-icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
  {kind==='circle'?<circle cx="12" cy="12" r="7"/>:<path d={kind==='check'?'m5 12 4 4L19 6':'M5 19 19 5M5 5h14v14'}/>}
 </svg>;
}
