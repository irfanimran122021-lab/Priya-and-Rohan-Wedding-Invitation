import {wedding as w} from './wedding';
import type {CalendarEvent} from './calendar';
export function weddingCalendar(url:string):CalendarEvent {
 const venue=w.venues[0];
 return {slug:w.slug,title:`Wedding Celebration of ${w.names.join(' & ')}`,start:w.date,end:w.calendar.end,timezone:w.calendar.timezone,location:`${venue.name}, ${venue.address}`,url,description:`Join ${w.names.join(' & ')} for a beautiful celebration of love and togetherness.\n${w.dateLabel} at ${venue.time} (Georgetown, Guyana). End time to be confirmed.\nInvitation: ${url}`};
}
