import {useEffect} from 'react';

// Resolve against the current layout, after local fonts and the mobile menu settle.
export function useSectionAnchors() {
 useEffect(() => {
  let revision = 0;
  let frame;
  const align = async (hash, behavior, focus = false) => {
   const current = ++revision;
   await document.fonts.ready;
   if (current !== revision) return;
   frame = requestAnimationFrame(() => {
    if (current !== revision) return;
    const target = document.getElementById(hash.slice(1));
    if (!target) return;
    const header = document.querySelector('.header');
    const offset = hash === '#top' ? 0 : header.getBoundingClientRect().height;
    const top = Math.max(0, window.scrollY + target.getBoundingClientRect().top - offset);
    window.scrollTo({top, behavior});
    if (focus) {
     if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
     target.focus({preventScroll:true});
    }
   });
  };
  const onClick = event => {
   if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
   const link = event.target.closest('a[href]');
   if (!link || link.target || link.hasAttribute('download')) return;
   const url = new URL(link.href);
   if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search || !url.hash || !document.getElementById(url.hash.slice(1))) return;
   event.preventDefault();
   if (location.hash !== url.hash) history.pushState(null, '', url.hash);
   align(url.hash, matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', true);
  };
  const onHashChange = () => { if (location.hash) align(location.hash, 'instant'); };
  document.addEventListener('click', onClick);
  window.addEventListener('hashchange', onHashChange);
  onHashChange();
  return () => {
   revision++;
   cancelAnimationFrame(frame);
   document.removeEventListener('click', onClick);
   window.removeEventListener('hashchange', onHashChange);
  };
 }, []);
}
