import {useEffect, useRef, useState} from 'react';

// Retain the old preference: visitors who disabled the stage experiment keep that choice.
export function useBackstageMotion() {
 const ref = useRef(null);
 const [enabled] = useState(() => {
  try {return localStorage.getItem('yar-stage-light') !== 'off';} catch {return true;}
 });
 const [reduced, setReduced] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches);
 const [pageVisible, setPageVisible] = useState(!document.hidden);
 useEffect(() => {
  const media = matchMedia('(prefers-reduced-motion: reduce)');
  const update = () => setReduced(media.matches);
  const visibility = () => setPageVisible(!document.hidden);
  media.addEventListener('change', update);
  document.addEventListener('visibilitychange', visibility);
  return () => {
   media.removeEventListener('change', update);
   document.removeEventListener('visibilitychange', visibility);
  };
 }, []);
 useEffect(() => {
  if (!enabled || reduced || !pageVisible) return;
  const observer = new IntersectionObserver(entries => {
   for (const entry of entries) if (entry.isIntersecting) {
    entry.target.classList.add('is-revealed');
    observer.unobserve(entry.target);
   }
  }, {threshold: .12});
  ref.current.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element));
  return () => observer.disconnect();
 }, [enabled, reduced, pageVisible]);
 useEffect(() => {
  const observer = new IntersectionObserver(entries => {
   for (const entry of entries) entry.target.classList.toggle('is-loop-visible', entry.isIntersecting);
  }, {threshold:0});
  ref.current.querySelectorAll('[data-loop]').forEach(element => observer.observe(element));
  return () => observer.disconnect();
 }, []);
 return {ref, enabled: enabled && !reduced, active: enabled && !reduced && pageVisible, reduced};
}
