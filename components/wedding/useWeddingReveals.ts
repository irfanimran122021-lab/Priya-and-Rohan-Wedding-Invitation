'use client';
import {useEffect,type RefObject} from 'react';
export function useWeddingReveals(root:RefObject<HTMLDivElement|null>,active:boolean){
 useEffect(()=>{
  const element=root.current;if(!element)return;
  const targets=element.querySelectorAll<HTMLElement>('.section-heading,.story-copy article,.story-image,.dress>h2,.rsvp-intro,.rsvp form,.gallery-photo,.closing');
  const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
  if(motion.matches){targets.forEach(t=>t.classList.add('is-visible'));element.querySelectorAll('.timeline li').forEach(t=>t.classList.add('is-visible'));element.querySelector<HTMLElement>('.timeline')?.style.setProperty('--timeline-progress','1');return;}
  targets.forEach(t=>t.classList.add('reveal-on-scroll'));
  if(!active)return;
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12});
  targets.forEach(t=>observer.observe(t));
  const timeline=element.querySelector<HTMLElement>('.timeline');let frame=0;
  function paint(){frame=0;if(!timeline)return;const rect=timeline.getBoundingClientRect();const reach=innerHeight*.76-rect.top;const progress=Math.min(1,Math.max(0,reach/rect.height));timeline.style.setProperty('--timeline-progress',String(progress));timeline.querySelectorAll<HTMLElement>('li').forEach(li=>{if(reach>=li.offsetTop+12)li.classList.add('is-visible')});}
  function schedule(){if(!frame)frame=requestAnimationFrame(paint)}
  paint();window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);
  return()=>{observer.disconnect();cancelAnimationFrame(frame);window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule)};
 },[root,active]);
}
