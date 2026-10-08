export type CalendarEvent = {slug:string; title:string; start:string; end:string|null; timezone:string; location:string; description:string; url:string};
const stamp=(value:string)=>new Date(value).toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');
const escapeText=(value:string)=>value.replace(/\\/g,'\\\\').replace(/\r\n|\r|\n/g,'\\n').replace(/,/g,'\\,').replace(/;/g,'\\;');
function fold(line:string){let result='',bytes=0;for(const char of line){const size=new TextEncoder().encode(char).length;if(bytes+size>75){result+='\r\n ';bytes=1;}result+=char;bytes+=size;}return result;}
export function calendarICS(event:CalendarEvent,now=new Date()){
 return ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Wedding Invitation//Calendar//EN','CALSCALE:GREGORIAN','BEGIN:VEVENT',`UID:${event.slug}@wedding-invitation`,`DTSTAMP:${stamp(now.toISOString())}`,`DTSTART:${stamp(event.start)}`,...(event.end?[`DTEND:${stamp(event.end)}`]:[]),`SUMMARY:${escapeText(event.title)}`,`LOCATION:${escapeText(event.location)}`,`DESCRIPTION:${escapeText(event.description)}`,`URL:${event.url}`,'STATUS:CONFIRMED','END:VEVENT','END:VCALENDAR'].map(fold).join('\r\n')+'\r\n';
}
export function calendarLinks(event:CalendarEvent){
 // Google requires both dates. Equal timestamps represent no supplied duration.
 const google=new URLSearchParams({action:'TEMPLATE',text:event.title,dates:`${stamp(event.start)}/${stamp(event.end??event.start)}`,ctz:event.timezone,location:event.location,details:event.description});
 const outlook=new URLSearchParams({path:'/calendar/action/compose',rru:'addevent',subject:event.title,startdt:new Date(event.start).toISOString(),location:event.location,body:event.description,allday:'false'});
 if(event.end)outlook.set('enddt',new Date(event.end).toISOString());
 return {google:`https://calendar.google.com/calendar/render?${google}`,outlook:`https://outlook.live.com/calendar/0/deeplink/compose?${outlook}`};
}
