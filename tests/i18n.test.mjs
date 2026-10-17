import test from 'node:test';
import assert from 'node:assert/strict';
import messages from '../src/locales/messages.json' with {type:'json'};
import {resolveLanguage, supportedLanguage, translate, localizedHref} from '../src/i18n-core.js';

test('browser preference order and regional tags resolve to a supported language',()=>{
 assert.equal(supportedLanguage('pl-PL'),'pl');
 assert.equal(supportedLanguage('en-GB'),'en');
 assert.equal(supportedLanguage('uk-UA'),'uk');
 assert.equal(resolveLanguage({preferred:['de-DE','pl-PL','en']}),'pl');
 assert.equal(resolveLanguage({preferred:['en-US','uk-UA']}),'en');
 assert.equal(resolveLanguage({preferred:['uk-UA','pl']}),'uk');
});
test('manual selection wins, unknown languages and invalid saved selections fall back safely',()=>{
 assert.equal(resolveLanguage({saved:'uk',preferred:['pl-PL']}),'uk');
 assert.equal(resolveLanguage({saved:'unexpected',preferred:['pl-PL']}),'pl');
 assert.equal(resolveLanguage({preferred:['de-DE','fr-FR']}),'en');
 assert.equal(resolveLanguage(), 'en');
});
test('all catalogue entries have both translations and placeholders match',()=>{
 const placeholders=value=>[...value.matchAll(/\{(\w+)\}/g)].map(match=>match[1]).sort();
 for(const [source,entry] of Object.entries(messages)) {
  for(const language of ['en','pl']) {
   assert.ok(entry[language]?.trim(),`${language}: ${source}`);
   assert.deepEqual(placeholders(entry[language]),placeholders(source),source);
  }
 }
 assert.equal(translate('pl','Місто {count}',{count:2}),'Miasto 2');
 assert.equal(localizedHref('/privacy.html','pl'),'/privacy.html?lang=pl');
});
test('headings have no terminal full stops in any language',()=>{
 for(const source of ['до музики.','роботу за сценою.','Наша команда.','Про твій виступ.','Про твій маршрут.','Твоя музика. Плани. Співпраця.','Про твоє завдання.','Розкажи про ідею.','Почнімо зі знайомства.','Твій задум. Наші задачі.','Усе важливе — тут.','Дякуємо за звернення.']) {
  for(const language of ['uk','pl','en'])assert.ok(!translate(language,source).endsWith('.'),`${language}: ${source}`);
 }
});
