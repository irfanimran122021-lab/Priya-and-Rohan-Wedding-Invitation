'use client';

import {useEffect,useRef,useState,type CSSProperties} from 'react';
import {wedding as w} from '@/lib/wedding';
import {themeVariables} from '@/lib/themes';
import {EnvelopeOpening,type OpeningPhase} from './EnvelopeOpening';
import {Countdown,OurStory,WeddingDetails,WeddingTimeline,DressCode,Gallery,RSVP,ClosingSection} from './Sections';

export function Names(){return <span className="names">{w.names[0]} <i>&</i> {w.names[1]}</span>}

export function Hero(){
 return <section className="hero" id="home">
  <picture className="hero-photo"><source media="(max-width: 700px)" srcSet={`${w.photos.story.replace('.webp','-small.webp')} 800w, ${w.photos.story} 1600w`}/><img src={w.photos.hero} srcSet={`${w.photos.hero.replace('.webp','-small.webp')} 800w, ${w.photos.hero} 1600w`} sizes="100vw" alt="Bride in an embroidered red lehenga and groom in an ivory sherwani" fetchPriority="high"/></picture>
  <div className="hero-shade"/>
  <div className="hero-content">
   <p className="eyebrow">TOGETHER, WITH ALL OUR HEARTS</p>
   <h1 tabIndex={-1} id="main-title"><Names/></h1>
   <p className="hero-date">{w.dateLabel} <span>·</span> {w.location}</p>
   <div className="hero-rule" aria-hidden="true"><span>✧</span></div>
   <p className="hero-note">{w.heroNote}</p>
  </div>
  <a className="scroll-cue" href="#story">OUR FOREVER BEGINS<span>│</span></a>
 </section>
}

export function Invitation(){
 const[phase,setPhase]=useState<OpeningPhase>('sealed');
 const content=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  if(phase==='open')return;
  const previous=document.body.style.overflow;
  document.body.style.overflow='hidden';
  return()=>{document.body.style.overflow=previous};
 },[phase]);
 useEffect(()=>{
  if(phase==='open')document.getElementById('main-title')?.focus({preventScroll:true});
 },[phase]);
 useEffect(()=>{
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
   if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}
  }),{threshold:.08});
  content.current?.querySelectorAll('.section-heading,.story-copy article,.timeline li,.dress>h2,.rsvp-intro,.closing>div:last-child').forEach(el=>{el.classList.add('reveal-on-scroll');observer.observe(el)});
  return()=>observer.disconnect();
 },[]);
 return <div className={`wedding-experience phase-${phase}`} data-theme={w.theme} style={themeVariables(w.theme) as CSSProperties}>
  <div ref={content} className="invitation-content" inert={phase!=='open'} aria-hidden={phase!=='open'}>
   <header className="nav"><a className="monogram" href="#home" aria-label="Back to the beginning">{w.names[0][0]}<span>&</span>{w.names[1][0]}</a><nav aria-label="Invitation"><a href="#story">Our story</a><a href="#details">The day</a><a href="#rsvp">RSVP</a></nav><span className="nav-date">{w.dateShort}</span></header>
   <main><Hero/><Countdown/><OurStory/><WeddingDetails/><WeddingTimeline/><DressCode/><Gallery/><RSVP/><ClosingSection/></main>
  </div>
  {phase!=='open'&&<EnvelopeOpening phase={phase} onPhase={setPhase}/>}
 </div>
}

