'use client';
import {useState,type CSSProperties} from 'react';
import {CalendarDays,Download,ExternalLink} from 'lucide-react';
import {Dialog,DialogTrigger,DialogContent,DialogTitle,DialogDescription} from '@/components/ui/dialog';
import {wedding as w} from '@/lib/wedding';
import {themeVariables} from '@/lib/themes';
import {weddingCalendar} from '@/lib/wedding-calendar';
import {calendarLinks} from '@/lib/calendar';
export function SaveTheDate(){
 const [url,setUrl]=useState('');const [apple,setApple]=useState(false);
 const links=calendarLinks(weddingCalendar(url));
 const providers=[{name:'Google Calendar',href:links.google,hint:'Review and save in Google',external:true},{name:'Apple Calendar',href:'/api/calendar',hint:'Open or import the calendar file',external:false}];
 if(apple)providers.reverse();
 return <Dialog onOpenChange={open=>{if(open){setUrl(`${window.location.origin}/wedding/${w.slug}`);setApple(/Mac|iPhone|iPad|iPod/.test(navigator.platform)||/iPhone|iPad/.test(navigator.userAgent));}}}>
 <DialogTrigger asChild><button className="text-button">Save the Date</button></DialogTrigger>
 <DialogContent className="calendar-dialog" style={themeVariables(w.theme) as CSSProperties}>
 <CalendarDays className="calendar-emblem" aria-hidden="true"/>
 <DialogTitle className="calendar-title">Save Our Special Day</DialogTitle>
 <DialogDescription className="calendar-description">Add our wedding celebration to your calendar so you don&apos;t miss a moment.</DialogDescription>
 <p className="calendar-summary">{w.dateLabel} · {w.venues[0].time}<br/>{w.venues[0].name} · Georgetown, Guyana</p>
 <div className="calendar-options">{[...providers,{name:'Outlook Calendar',href:links.outlook,hint:'Review and save in Outlook',external:true},{name:'Download Calendar File (.ics)',href:'/api/calendar?download=1',hint:'For other calendar apps',external:false}].map(option=><a key={option.name} href={option.href} target={option.external?'_blank':undefined} rel={option.external?'noopener noreferrer':undefined}><span aria-hidden="true">{option.name.startsWith('Download')?<Download size={20}/>:<CalendarDays size={20}/>}</span><span>{option.name}<small>{option.hint}</small></span>{option.external&&<ExternalLink size={15} aria-hidden="true"/>}</a>)}</div>
 <p className="calendar-help">End time is not yet confirmed. Your calendar may suggest a duration; please review before saving.</p>
 <p className="calendar-help">Apple Calendar: if the file downloads, open it with Calendar on Mac. On iPhone or iPad, open the file from Mail to preview and add it. Other apps can import the .ics file.</p>
 </DialogContent></Dialog>;
}
