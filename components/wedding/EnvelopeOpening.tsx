'use client';

import {useEffect,useRef,useState} from 'react';
import {wedding as w} from '@/lib/wedding';
export type OpeningPhase='sealed'|'opening'|'revealing'|'open';

/** One continuous 3.8-second sequence. The website stays mounted behind the paper. */
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
  timers.current.push(setTimeout(()=>onPhase('revealing'),minimal?80:2800));
  timers.current.push(setTimeout(()=>onPhase('open'),minimal?350:3800));
 }
 return <section className={`envelope-opening ${phase!=='sealed'?'is-opening':''} ${reduced?'reduced-opening':''}`} aria-label="A wedding invitation for you">
  <div className="envelope-ambience" aria-hidden="true"/>
  <div className="opening-heading"><p className="eyebrow">A LETTER, SEALED WITH LOVE</p><h1>{w.names.join(' & ')}</h1><span className="fine-divider" aria-hidden="true">✧</span></div>
  <div className="envelope-stage">
   <div className="envelope-shadow" aria-hidden="true"/>
   <div className="envelope-back paper" aria-hidden="true"><div className="envelope-lining"/></div>
   <article className="invitation-card paper" aria-label="Invitation card">
    <div className="card-border" aria-hidden="true"/>
    <div className="card-copy">
     <span className="card-ornament" aria-hidden="true">✧</span>
     <p className="card-family">{w.intro}</p>
     <div className="card-names">{w.names[0]}<i>&</i>{w.names[1]}</div>
     <p className="card-request">request the pleasure of your company<br/>at the celebration of their marriage</p>
     <span className="card-rule" aria-hidden="true"/>
     <p className="card-date">{w.dayLabel}<strong>{w.dateLabel}</strong></p>
    </div>
   </article>
   <div className="envelope-front" aria-hidden="true">
    <div className="envelope-side side-left paper"/>
    <div className="envelope-side side-right paper"/>
    <div className="envelope-pocket paper"><div className="pocket-border"/><p>To our dearest family & friends</p></div>
   </div>
   <div className="envelope-flap" aria-hidden="true"><div className="flap-face flap-outside paper"/><div className="flap-face flap-inside paper"/></div>
   <button className="wax-seal" onClick={open} disabled={phase!=='sealed'} aria-label="Open your wedding invitation" aria-describedby="seal-hint">
    <img src="/images/wax-seal.webp" width={256} height={256} alt="Gold wax seal embossed A & D" fetchPriority="high"/>
   </button>
  </div>
  <div className="envelope-footer"><p id="seal-hint">Tap the seal to open</p><p className="eyebrow">{w.dateOpening}</p></div>
  <p className="sr-only" role="status">{phase==='sealed'?'Your invitation is sealed.':'Opening your invitation…'}</p>
 </section>
}
