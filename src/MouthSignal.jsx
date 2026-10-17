import {useLanguage} from './i18n.jsx';
import React, {useEffect, useRef} from 'react';

// Local signal interference: keep the actual artwork, disturb the full silhouette without cropping its edges.
export function MouthSignal() {
 const {t} = useLanguage();
 const host = useRef(null), canvas = useRef(null);
 useEffect(() => {
  const el = host.current, output = canvas.current, ctx = output.getContext('2d');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const source = new Image();
  let visible = false, ready = false, disposed = false, timer, frame = 0, last = 0, start = 0, phase = 0;
  const buffer = document.createElement('canvas'), b = buffer.getContext('2d');
  const stop = () => {
   clearTimeout(timer); cancelAnimationFrame(frame); frame = 0;
   el.classList.remove('is-disturbed');
   output.style.transform = '';
  };
  const allowed = () => ready && visible && !motion.matches && !document.hidden && !document.querySelector('dialog[open]');
  const schedule = (delay = 2600 + Math.random() * 2000) => {
   clearTimeout(timer);
   if (visible && !motion.matches && !document.hidden) timer = setTimeout(burst, delay);
  };
  const draw = elapsed => {
   const w = buffer.width, h = buffer.height;
   const px = (output.width - w) / 2, py = (output.height - h) / 2;
   const beat = Math.floor(elapsed / 75);
   // Three irregular punches, with brief damaged holds between them.
   const accents = [1,.85,.4,.15,1,.9,.65,.2,.95,1,.7,.25,.1];
   const strength = accents[Math.min(beat, accents.length - 1)];
   const noise = n => {
    const v = Math.sin(n * 127.1 + beat * 311.7 + phase * 73.4) * 43758.5453;
    return v - Math.floor(v);
   };
   b.clearRect(0, 0, w, h);
   b.drawImage(source, 0, 0, w, h);
   b.globalCompositeOperation = 'source-atop';
   // Xerox-like grit; no bright rectangular scan-bar flashes.
   for (let i = 0; i < 1800; i++) {
    b.fillStyle = noise(i + 1) > .56 ? `rgba(255,251,212,${.38 * strength})` : `rgba(29,34,61,${.65 * strength})`;
    b.fillRect(noise(i + 3) * w, noise(i + 7) * h, 1 + noise(i + 9) * 5, 1 + noise(i + 11) * 3);
   }
   b.globalCompositeOperation = 'source-over';
   ctx.clearRect(0, 0, output.width, output.height);
   // Reassemble the silhouette in mismatched slabs. Tongue and jaw change width
   // independently, so the actual anatomy breaks instead of merely waving.
   const seams = [0, .22, .37, .51, .66, .83, 1];
   for (let i = 0; i < seams.length - 1; i++) {
    const y = Math.round(seams[i] * h), end = Math.round(seams[i + 1] * h);
    const scale = 1 + (noise(i + 50) * .42 - .21) * strength;
    const shift = (noise(i + 70) * 64 - 32) * strength;
    const vertical = (noise(i + 90) * 18 - 9) * strength;
    const width = w * scale;
    for (let row = y; row < end; row += 3) {
     const height = Math.min(3, end - row);
     const tornEdge = (noise(Math.floor(row / 9) + 110) - .5) * 12 * strength;
     ctx.drawImage(buffer, 0, row, w, height,
      px + (w - width) / 2 + shift + tornEdge, py + row + vertical, width, height);
    }
   }
   // Missing ink fragments are cut out of the result, keeping background transparent.
   ctx.globalCompositeOperation = 'destination-out';
   ctx.fillStyle = `rgba(0,0,0,${.75 * strength})`;
   for (let i = 0; i < 35; i++) {
    ctx.fillRect(px + noise(i + 200) * w, py + noise(i + 250) * h,
     3 + noise(i + 300) * 17, 2 + noise(i + 350) * 5);
   }
   ctx.globalCompositeOperation = 'source-over';
   const x = (noise(400) - .5) * 5 * strength;
   const y = (noise(401) - .5) * 3 * strength;
   const skew = (noise(402) - .5) * 9 * strength;
   output.style.transform = `translate(${x}%, ${y}%) skewX(${skew}deg)`;
  };
  const tick = now => {
   if (!allowed() || now - start > 975) {stop(); schedule(); return;}
   if (now - last >= 75) {draw(now - start); last = now;}
   frame = requestAnimationFrame(tick);
  };
  function burst() {
   if (!allowed()) {schedule(); return;}
   // Let the full punch sequence finish even if the pointer crosses it again.
   if (frame) return;
   stop(); phase = Math.random() * Math.PI * 2; draw(0); el.classList.add('is-disturbed');
   start = last = performance.now(); frame = requestAnimationFrame(tick);
  }
  const update = () => {stop(); if (allowed()) schedule(800);};
  source.onload = () => {
   if (disposed) return;
   buffer.width = 420;
   buffer.height = Math.round(420 * source.naturalHeight / source.naturalWidth);
   output.width = Math.round(buffer.width * 1.44);
   output.height = Math.round(buffer.height * 1.44);
   ready = true; update();
  };
  source.src = '/media/mouth-no-logo.webp';
  const observer = new IntersectionObserver(([entry]) => {visible = entry.isIntersecting; update();}, {threshold: .5});
  observer.observe(el);
  motion.addEventListener('change', update);
  document.addEventListener('visibilitychange', update);
  el.addEventListener('pointerenter', burst);
  return () => {
   disposed = true; stop(); observer.disconnect(); source.onload = null;
   motion.removeEventListener('change', update);
   document.removeEventListener('visibilitychange', update);
   el.removeEventListener('pointerenter', burst);
  };
 }, []);
 return <div className="mouth signal-mouth" ref={host}>
  <img src="/media/mouth-no-logo.webp" alt={t("Відкритий рот із висунутим язиком")} loading="lazy"/>
  <canvas ref={canvas} aria-hidden="true"/>
 </div>;
}
