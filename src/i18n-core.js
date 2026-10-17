import messages from './locales/messages.json' with {type:'json'};

export const languages = ['uk', 'pl', 'en'];
export const languageNames = {uk:'Українська', pl:'Polski', en:'English'};
export const languageStorageKey = 'yar-language';
export const supportedLanguage = value => typeof value === 'string' && languages.includes(value.toLowerCase().split(/[-_]/)[0]) ? value.toLowerCase().split(/[-_]/)[0] : null;

export function resolveLanguage({saved, preferred=[]}={}) {
 // Only an explicit supported selection may override browser preferences.
 if (languages.includes(saved)) return saved;
 for (const value of preferred) {
  const language = supportedLanguage(value);
  if (language) return language;
 }
 return 'en';
}
export function initialLanguage() {
 const requested = new URLSearchParams(window.location.search).get('lang');
 if (languages.includes(requested)) return requested;
 let saved;
 try {saved = localStorage.getItem(languageStorageKey);} catch { /* Storage may be disabled. */ }
 return resolveLanguage({saved, preferred:navigator.languages?.length ? navigator.languages : [navigator.language]});
}
export function translate(language, source, variables={}) {
 const entry = messages[source];
 const value = entry?.[language] ?? (language === 'uk' ? source : entry?.en ?? source);
 return value.replace(/\{(\w+)\}/g, (match, key) => variables[key] ?? match);
}
export const localizedHref = (path, language) => `${path}?lang=${language}`;
export function saveLanguage(language) {
 try {localStorage.setItem(languageStorageKey, language);} catch { /* Selection still works for this visit. */ }
}
