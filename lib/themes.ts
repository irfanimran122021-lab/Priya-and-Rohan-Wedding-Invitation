export type WeddingTheme={paper:string;ink:string;gold:string;line:string;muted:string;panel:string;dark:string;onDark:string};
export const themes:Record<string,WeddingTheme>={
 'ivory-champagne':{paper:'#f7f4ee',ink:'#373b31',gold:'#92764b',line:'#cfc5b4',muted:'#6c6a60',panel:'#eae4d9',dark:'#343b31',onDark:'#f7f4ee'},
};
export function themeVariables(key:string){const theme=themes[key]??themes['ivory-champagne'];return Object.fromEntries(Object.entries(theme).map(([name,value])=>[`--${name}`,value]));}
