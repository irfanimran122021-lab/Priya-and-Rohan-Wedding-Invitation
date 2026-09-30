export type WeddingTheme={paper:string;ink:string;gold:string;line:string;muted:string;panel:string;dark:string;onDark:string;accent:string};
export const themes:Record<string,WeddingTheme>={
 'indian-ivory':{paper:'#f8f3ea',ink:'#453a33',gold:'#967644',line:'#d4c4aa',muted:'#756b60',panel:'#eee4d4',dark:'#502a2e',onDark:'#fbf3e5',accent:'#753c40'},
 'ivory-champagne':{paper:'#f7f4ee',ink:'#373b31',gold:'#92764b',line:'#cfc5b4',muted:'#6c6a60',panel:'#eae4d9',dark:'#343b31',onDark:'#f7f4ee',accent:'#633b3d'},
};
export function themeVariables(key:string){const theme=themes[key]??themes['ivory-champagne'];return Object.fromEntries(Object.entries(theme).map(([name,value])=>[`--${name}`,value]));}

