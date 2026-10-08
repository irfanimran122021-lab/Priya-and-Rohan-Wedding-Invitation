import {calendarICS} from '@/lib/calendar';
import {weddingCalendar} from '@/lib/wedding-calendar';
import {wedding} from '@/lib/wedding';
export function GET(request:Request){
 const url=new URL(request.url);
 const event=weddingCalendar(`${url.origin}/wedding/${wedding.slug}`);
 return new Response(calendarICS(event),{headers:{'Content-Type':'text/calendar; charset=utf-8','Content-Disposition':`${url.searchParams.get('download')==='1'?'attachment':'inline'}; filename="${wedding.slug}.ics"`,'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
}
