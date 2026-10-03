'use client';

import {useEffect,useRef,useState} from 'react';
import {wedding as w} from '@/lib/wedding';
import {MehendiCorners,GoldDivider} from './Ornaments';
export type OpeningPhase='sealed'|'opening'|'revealing'|'open';

/** One continuous 4.2-second sequence. The website stays mounted behind the paper. */
export function EnvelopeOpening({phase,onPhase}:{phase:OpeningPhase;onPhase:(phase:OpeningPhase)=>void}){
 const timers=useRef<ReturnType<typeof setTimeout>[]>([]);
 const started=useRef(false);
 const[reduced,setReduced]=useState(false);
 useEffect(()=>()=>timers.current.forEach(clearTimeout),[]);
 function open(){
  if(started.current)return;
  started.current=true;
  const minimal=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  setReduced(minimal);
  window.scrollTo({top:0,behavior:'instant'});
  onPhase('opening');
  timers.current.push(setTimeout(()=>onPhase('revealing'),minimal?80:3000));
  timers.current.push(setTimeout(()=>onPhase('open'),minimal?350:4200));
 }
 return <section className={`envelope-opening ${phase!=='sealed'?'is-opening':''} ${reduced?'reduced-opening':''}`} aria-label="A wedding invitation for you">
  <div className="envelope-ambience" aria-hidden="true"/>
  <div className="opening-heading"><p className="eyebrow">A LETTER, SEALED WITH LOVE</p><h1>{w.names.join(' & ')}</h1><GoldDivider className="opening-divider"/></div>
  <div className="envelope-stage">
   <div className="envelope-shadow" aria-hidden="true"/>
   <div className="envelope-back paper" aria-hidden="true"><div className="envelope-lining"/></div>
   <article className="invitation-card paper" aria-label="Invitation card">
    <div className="card-border" aria-hidden="true"/><MehendiCorners/>
    <div className="card-copy">
     <GoldDivider className="card-ornament"/>
     <p className="card-family">{w.intro}</p>
     <div className="card-names"><span data-card-word="0">{w.names[0]}</span><i data-card-word="1">&</i><span data-card-word="2">{w.names[1]}</span></div>
     <p className="card-request">request the pleasure of your company<br/>at the celebration of their marriage</p>
     <span className="card-rule" aria-hidden="true"/>
     <p className="card-date">{w.dayLabel}<strong>{w.dateLabel}</strong></p>
    </div>
   </article>
   <div className="envelope-front" aria-hidden="true">
    <div className="envelope-side side-left paper"/>
    <div className="envelope-side side-right paper"/>
    <div className="envelope-pocket paper"><div className="pocket-border"/><MehendiCorners className="envelope-ornament"/><p>To our dearest family & friends</p></div>
   </div>
   <div className="envelope-flap" aria-hidden="true"><div className="flap-face flap-outside paper"><MehendiCorners className="flap-ornament"/></div><div className="flap-face flap-inside paper"/></div>
   <button className="wax-seal" onClick={open} disabled={phase!=='sealed'} aria-label="Open your wedding invitation" aria-describedby="seal-hint">
    <img src={w.seal} width={256} height={256} alt={`Antique gold wax seal embossed ${w.monogram}`} fetchPriority="high"/>
   </button>
  </div>
  <div className="envelope-footer"><p id="seal-hint">Tap to Open</p><p className="eyebrow">{w.dateOpening}</p></div>
  <p className="sr-only" role="status">{phase==='sealed'?'Your invitation is sealed.':'Opening your invitation…'}</p>
 </section>
}

