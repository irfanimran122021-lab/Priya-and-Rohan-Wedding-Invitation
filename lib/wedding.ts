export const wedding = {
 slug:'aaliyah-and-daniel',names:['Aaliyah','Daniel'],date:'2026-12-12T15:00:00-04:00',dateLabel:'December 12, 2026',location:'Georgetown, Guyana',deadline:'November 12, 2026',theme:'indian-ivory',dateShort:'12.12.26',dateOpening:'12 · DECEMBER · 2026',dayLabel:'Saturday',intro:'Together with their families',invitation:'Invite you to celebrate their wedding',heroNote:'And we would love you to be a part of our story.',closing:'We can’t wait to celebrate with you.',
 photos:{hero:'/images/indian-hero.webp',story:'/images/indian-portrait.webp',detail:'/images/detail.webp',celebration:'/images/celebration.webp',portrait:'/images/indian-portrait.webp'},
 venues:[{kind:'Ceremony',time:'3:00 PM',name:'St. George’s Cathedral',address:'North Road, Georgetown, Guyana',start:'20261212T190000Z',end:'20261212T200000Z'},{kind:'Reception',time:'6:30 PM',name:'Guyana Marriott Hotel',address:'Block Alpha, Battery Road, Kingston, Georgetown',start:'20261212T223000Z',end:'20261213T030000Z'}],
 timeline:[['3:00 PM','The vows','Our forever begins.'],['4:30 PM','A little togetherness','Photographs with our favourite people.'],['5:30 PM','Raise a glass','Cocktails, conversation & golden light.'],['6:30 PM','At the table','Dinner, heartfelt words & happy tears.'],['8:00 PM','Under the stars','The first dance. And many more.']],
 story:[{label:'How we met',title:'An ordinary day. An extraordinary beginning.',text:'A mutual friend, a little café in Georgetown, and a conversation neither of us wanted to end. What began over coffee became long walks along the seawall, Sunday adventures, and a friendship that felt like home.'},{label:'The proposal',title:'A thousand little yeses. One unforgettable one.',text:'With the Atlantic breeze around us and the last light of the evening on the water, Daniel asked the question. Aaliyah said yes before he could finish. Now, our favourite chapter begins—with you beside us.'}],
 dress:{title:'An evening of elegance',code:'Indian formal / black tie',text:'Lehengas, saris, sherwanis, evening gowns and tailored suits are warmly welcomed. Choose something you feel wonderful in. We kindly reserve bridal red for the bride.',colors:[['Champagne','#b8a286'],['Rose','#b98e88'],['Olive','#777e66'],['Cocoa','#796054']]},
 rsvpEndpoint:''
} as const;
export type RSVPSubmission={name:string;attendance:'accept'|'decline';guests:number;message:string;weddingSlug:string};
export async function submitRSVP(payload:RSVPSubmission):Promise<'sent'|'demo'>{if(!wedding.rsvpEndpoint)return 'demo';const r=await fetch(wedding.rsvpEndpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});if(!r.ok)throw new Error('Your reply could not be sent. Please try again.');return 'sent';}



