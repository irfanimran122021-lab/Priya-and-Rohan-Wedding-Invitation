const names = ['Priya', 'Rohan'] as const;
export const wedding = {
 slug:'priya-and-rohan', names, monogram:names.map(name=>name[0]).join(' & '),
 date:'2026-12-12T00:00:00-04:00', dateLabel:'December 12, 2026', location:'Parc Rayne, Guyana',
 deadline:'November 12, 2026', theme:'bridal-burgundy', dateShort:'12.12.26', dateOpening:'12 · DECEMBER · 2026',dayLabel:'Saturday',
 intro:'Together with their families',invitation:'Request the pleasure of your company',heroNote:'A celebration of love. A lifetime of togetherness.',closing:'We can’t wait to celebrate with you.',
 photos:{hero:'/images/indian-hero.webp',story:'/images/indian-portrait.webp',detail:'/images/detail.webp',celebration:'/images/celebration.webp',portrait:'/images/indian-portrait.webp'},
 seal:'/images/wax-seal-pr.webp',
 venues:[{kind:'Wedding celebration',time:null,name:'Parc Rayne',address:"Rahaman’s Park, Houston, East Bank Demerara, Guyana",addressLines:['Rahaman’s Park','Houston, East Bank Demerara','Guyana'],start:'20261212',end:'20261213',allDay:true}],
 ceremony:{venue:null,time:null,note:'Ceremony details and celebration timings will be shared soon.'},
 timelineNote:'An outline of the celebration. Final order and timings to follow.',
 timeline:[['01','The vows','The beginning of our forever.'],['02','A little togetherness','Photographs with our favourite people.'],['03','Raise a glass','Conversation, laughter & warm wishes.'],['04','At the table','Dinner, heartfelt words & happy tears.'],['05','One last dance','A night to remember, together.']],
 story:[{label:'How we met',title:'An ordinary day. An extraordinary beginning.',text:'A mutual friend, a little café in Georgetown, and a conversation neither of us wanted to end. What began over coffee became long walks along the seawall, Sunday adventures, and a friendship that felt like home.'},{label:'The proposal',title:'A thousand little yeses. One unforgettable one.',text:`With the Atlantic breeze around us and the last light of the evening on the water, ${names[1]} asked the question. ${names[0]} said yes before he could finish. Now, our favourite chapter begins—with you beside us.`}],
 dress:{title:'An evening of elegance',code:'Indian formal / black tie',text:'Lehengas, saris, sherwanis, evening gowns and tailored suits are warmly welcomed. Choose something you feel wonderful in. We kindly reserve bridal red for the bride.',colors:[['Champagne','#b8a286'],['Blush','#bc9290'],['Antique gold','#a38b59'],['Espresso','#574137']]},
 rsvpEndpoint:''
} as const;
export type RSVPSubmission={name:string;attendance:'accept'|'decline';guests:number;message:string;weddingSlug:string};
export async function submitRSVP(payload:RSVPSubmission):Promise<'sent'|'demo'>{if(!wedding.rsvpEndpoint)return 'demo';const r=await fetch(wedding.rsvpEndpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});if(!r.ok)throw new Error('Your reply could not be sent. Please try again.');return 'sent';}
