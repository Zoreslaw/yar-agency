import {initialLanguage, languages, languageNames, translate, saveLanguage, localizedHref} from './i18n-core.js';
import './language.css';
import messages from './locales/messages.json' with {type:'json'};
const sourceKeys=new Map(Object.entries(messages).map(([source,entry])=>[entry.pl,source]));
const original=source=>sourceKeys.get(source)??source;

// The policy stays readable without JavaScript. Capture source text once so that
// repeated language changes never translate already translated content.
const texts=[];
const walker=document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
 acceptNode:node=>node.parentElement.closest('script,style') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
});
while(walker.nextNode()) {
 const node=walker.currentNode,source=node.textContent.trim();
 if(source) texts.push({node, source, prefix:node.textContent.match(/^\s*/)[0], suffix:node.textContent.match(/\s*$/)[0]});
}
const attributes=[];
for (const node of document.querySelectorAll('[aria-label],meta[name="description"],meta[property="og:description"],meta[property="og:title"]')) {
 const attribute=node.tagName==='META'?'content':'aria-label';
 attributes.push({node, attribute, source:node.getAttribute(attribute)});
}
const sourceTitle=document.title;
const picker=document.querySelector('#policy-language');
for(const code of languages) {
 const option=document.createElement('option');
 option.value=code;option.lang=code;option.textContent=code.toUpperCase();option.title=languageNames[code];picker.append(option);
}
function render(language) {
 const t=source=>translate(language,original(source));
 document.documentElement.lang=language;
 document.title=t(sourceTitle);
 for(const {node,source,prefix,suffix} of texts) node.textContent=prefix+t(source)+suffix;
 for(const {node,attribute,source} of attributes) node.setAttribute(attribute,t(source));
 picker.value=language;picker.setAttribute('aria-label',t('Мова сайту'));
 for(const link of document.querySelectorAll('a[href="/"],a[data-contact]')) link.href=localizedHref('/',language)+(link.hasAttribute('data-contact')?'#contact':'');
 for(const link of document.querySelectorAll('a[href*="policies.google.com"]')) {
  const url=new URL(link.href);url.searchParams.set('hl',language);link.href=url;
 }
}
picker.addEventListener('change',()=>{
 saveLanguage(picker.value);
 const url=new URL(location.href);url.searchParams.set('lang',picker.value);history.replaceState(null,'',url);
 render(picker.value);
});
render(initialLanguage());
