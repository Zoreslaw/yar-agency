import React from 'react';
import './buttons.css';

const classes = (...values) => values.filter(Boolean).join(' ');

// Action variants share navigation, pending and disabled behavior. Utility controls stay separate.
export function ActionButton({href, variant='imprint', tone='cream', hoverTone=tone === 'red' ? 'ink' : 'yellow', size='regular', busy=false, disabled=false, className, children, type='button', ...props}) {
 const Element = href ? 'a' : 'button';
 return <Element {...props} {...(href ? {href} : {type, disabled:disabled || busy})}
  aria-busy={busy || undefined} className={classes('yar-action', `yar-action--${variant}`, `yar-action--${tone}`, `yar-action--hover-${hoverTone}`, `yar-action--${size}`, className)}>
  {busy && <span className="yar-action__spinner" aria-hidden="true"/>}
  <span className="yar-action__label">{children}</span>
 </Element>;
}

export function UtilityButton({className, children, type='button', ...props}) {
 return <button {...props} type={type} className={classes('yar-control', className)}>{children}</button>;
}

function ControlIcon({kind}) {
 const paths = {close:'M6 6l12 12M18 6 6 18',previous:'m14 6-6 6 6 6',next:'m10 6 6 6-6 6'};
 return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={paths[kind]}/></svg>;
}

export function IconButton({icon, label, className, ...props}) {
 return <UtilityButton {...props} aria-label={label} className={classes('yar-control--icon',className)}><ControlIcon kind={icon}/></UtilityButton>;
}
