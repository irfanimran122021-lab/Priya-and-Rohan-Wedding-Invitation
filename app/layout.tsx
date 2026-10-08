import type {Metadata} from 'next';
import {wedding as w} from '@/lib/wedding';
import './globals.css';
import './envelope.css';
import './luxury.css';
const title=`${w.names.join(' & ')} | ${w.dateLabel}`;
const description=`${w.dateLabel} · ${w.location}. We would love you to be part of our story.`;
export const metadata:Metadata={metadataBase:new URL('https://aaliyah-daniel-wedding.irzaud123abc.chatgpt.site'),title,description,icons:{icon:'/favicon.svg'},openGraph:{type:'website',title,description,images:[{url:w.photos.hero}],url:`/wedding/${w.slug}`},twitter:{card:'summary_large_image',title,description,images:[w.photos.hero]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}



import './calendar.css';
