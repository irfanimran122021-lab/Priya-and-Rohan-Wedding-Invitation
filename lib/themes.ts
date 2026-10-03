export type WeddingTheme={paper:string;ink:string;gold:string;line:string;muted:string;panel:string;dark:string;onDark:string;accent:string};
export const themes:Record<string,WeddingTheme>={
 'bridal-burgundy':{paper:'#f8f1e5',ink:'#3d2b25',gold:'#9b8051',line:'#d6c5a5',muted:'#75665b',panel:'#efe4d1',dark:'#36171d',onDark:'#fcf1df',accent:'#702c3c'},
 'indian-ivory':{paper:'#f8f3ea',ink:'#453a33',gold:'#967644',line:'#d4c4aa',muted:'#756b60',panel:'#eee4d4',dark:'#502a2e',onDark:'#fbf3e5',accent:'#753c40'},
 'ivory-champagne':{paper:'#f7f4ee',ink:'#373b31',gold:'#92764b',line:'#cfc5b4',muted:'#6c6a60',panel:'#eae4d9',dark:'#343b31',onDark:'#f7f4ee',accent:'#633b3d'},
};
export function themeVariables(key:string){const theme=themes[key]??themes['ivory-champagne'];return Object.fromEntries(Object.entries(theme).map(([name,value])=>[`--${name}`,value]));}


