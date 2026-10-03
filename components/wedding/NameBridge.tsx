'use client';
import {useLayoutEffect,useRef} from 'react';
import {wedding as w} from '@/lib/wedding';

/** The three words travel between measured paper and hero positions without a cut. */
export function NameBridge(){
 const root=useRef<HTMLDivElement>(null);
 useLayoutEffect(()=>{
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const animations:Animation[]=[];
  [w.names[0],'&',w.names[1]].forEach((_,index)=>{
   const from=document.querySelector<HTMLElement>(`[data-card-word="${index}"]`);
   const to=document.querySelector<HTMLElement>(`[data-hero-word="${index}"]`);
   const word=root.current?.children[index] as HTMLElement|undefined;
   if(!from||!to||!word)return;
   const a=from.getBoundingClientRect(),b=to.getBoundingClientRect(),style=getComputedStyle(to);
   Object.assign(word.style,{width:`${b.width}px`,height:`${b.height}px`,fontSize:style.fontSize,fontFamily:style.fontFamily,fontStyle:style.fontStyle,lineHeight:style.lineHeight,letterSpacing:style.letterSpacing});
   animations.push(word.animate([
    {transform:`translate3d(${a.x}px,${a.y}px,0) scale(${a.width/b.width},${a.height/b.height})`,color:'#743e3a'},
    {transform:`translate3d(${b.x}px,${b.y}px,0) scale(1,1)`,color:'#fff9ef'}
   ],{duration:1200,easing:'cubic-bezier(.32,0,.16,1)',fill:'both'}));
  });
  return()=>animations.forEach(animation=>animation.cancel());
 },[]);
 return <div className="name-bridge" ref={root} aria-hidden="true"><span>{w.names[0]}</span><i>&</i><span>{w.names[1]}</span></div>
}
