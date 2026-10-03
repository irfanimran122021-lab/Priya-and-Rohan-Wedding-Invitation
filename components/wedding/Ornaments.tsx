import type {CSSProperties} from 'react';

/** Original vector artwork: paisleys, paired leaves and a nine-petal floral rosette. */
export function MehendiCorner({className=''}:{className?:string}){
 const leaves=[['M32 18Q48 2 62 10Q54 26 32 18',0],['M61 22Q77 6 88 14Q77 31 61 22',1],['M93 27Q110 15 123 26Q108 38 93 27',2],['M20 37Q4 50 11 67Q28 56 20 37',3],['M26 67Q10 84 21 96Q36 81 26 67',4],['M31 103Q17 119 28 133Q43 119 31 103',5]] as const;
 return <svg viewBox="0 0 180 180" className={`mehendi-corner ${className}`} fill="none" aria-hidden="true" focusable="false">
  <g className="mehendi-vines" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
   <path pathLength="100" d="M8 168V16Q8 8 16 8H168"/>
   <path pathLength="100" d="M16 154C43 128 12 97 24 72S47 43 70 46S104 72 128 40S151 20 167 25"/>
   <path pathLength="100" d="M17 17C48 14 47 37 72 31S122 14 143 36"/>
   <path pathLength="100" d="M16 20C11 51 37 51 33 76S16 115 40 140"/>
   <path pathLength="100" d="M44 46C72 20 103 43 93 68C84 92 55 90 58 69C60 59 75 55 79 65C83 76 67 79 69 68"/>
   <path pathLength="100" d="M45 47C60 42 68 42 78 46C92 55 90 70 79 76"/>
   <path pathLength="100" d="M97 64C128 56 141 70 129 84C116 97 103 86 111 77C116 71 125 77 120 82"/>
   <path pathLength="100" d="M59 97C52 128 67 142 83 127C95 115 83 104 76 111C71 116 75 126 82 119"/>
   <path pathLength="100" d="M36 143Q55 159 42 170Q30 165 36 153Q44 148 44 158"/>
   <path pathLength="100" d="M145 34Q164 48 170 38Q161 25 151 32Q144 40 153 43"/>
   {leaves.map(([d,i])=><path className="mehendi-leaf" style={{'--leaf-delay':`${i*75}ms`} as CSSProperties} pathLength="100" d={d} key={d}/>)}
   <g transform="translate(38 38)" className="mehendi-flower">
    {Array.from({length:9},(_,i)=><path key={i} pathLength="100" transform={`rotate(${i*40})`} d="M0 -5C-12 -13 -9 -26 0 -29C9 -26 12 -13 0 -5Z"/>)}
    <circle r="5"/><circle r="2"/>
   </g>
   <path pathLength="100" d="M76 97l6 -5l6 5l-6 5Z M95 78l5 -6l5 6l-5 6Z"/>
  </g>
  <g className="mehendi-dots" fill="currentColor">{[[14,14],[51,102],[102,51],[48,118],[118,48],[58,139],[139,58],[158,17],[17,158],[96,93],[91,99],[86,105]].map(([cx,cy],i)=><circle cx={cx} cy={cy} r={i===0?2.2:1.3} key={i}/>)}</g>
 </svg>
}
export function MehendiCorners({className=''}:{className?:string}){return <div className={`mehendi-corners ${className}`} aria-hidden="true">{['tl','tr','bl','br'].map(c=><MehendiCorner key={c} className={`corner-${c}`}/>)}</div>}
export function GoldDivider({className=''}:{className?:string}){return <svg className={`gold-divider ${className}`} viewBox="0 0 260 36" fill="none" aria-hidden="true"><g stroke="currentColor" strokeWidth=".8" strokeLinecap="round"><path pathLength="100" d="M4 18H94Q111 18 119 10M256 18H166Q149 18 141 10M107 23Q121 26 130 12Q139 26 153 23"/><path pathLength="100" d="M130 5C115 11 121 20 130 24C139 20 145 11 130 5Z M130 5V30"/><path pathLength="100" d="M117 17Q109 7 103 11Q104 22 117 17M143 17Q151 7 157 11Q156 22 143 17"/></g></svg>}

export function Petals({className=''}:{className?:string}){return <div className={`petal-flight ${className}`} aria-hidden="true">{Array.from({length:6},(_,i)=><svg key={i} viewBox="0 0 32 44" style={{'--petal-index':i,'--petal-x':`${[8,24,42,62,78,91][i]}%`,'--petal-turn':`${[35,-50,90,-35,70,-80][i]}deg`} as CSSProperties}><path d="M6 39C-5 19 4 3 28 3C35 24 20 39 6 39Z" fill={i%2?'#b58278':'#793a48'}/><path d="M7 37Q15 17 27 5" stroke="#d0a49b" strokeWidth=".7" opacity=".5"/></svg>)}</div>}
