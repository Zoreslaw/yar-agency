export const types = ['Концерт', 'Тур / поїздка', 'Постійна співпраця', 'Окреме завдання', 'Інше'];
export const typeTitles = {'Постійна співпраця':'Менеджмент артиста', 'Інше':'Ще не визначився / інша ідея'};
export const commonFields = ['name','project','role','email','social'];
export const labels = {
 name:'Як до тебе звертатися?', project:'Артист, гурт або організація', role:'Твоя роль у проєкті', email:'Електронна пошта', social:'Музика та соцмережі',
 city:'Місто та майданчик, якщо вже відомі', dates:'Дата або період', audience:'Скільки людей очікуєш?', previous:'Попередні виступи',
 duration:'Орієнтовна тривалість виступу', format:'Склад і формат виступу', eventRole:'Що це за подія?', route:'Маршрут', crew:'Хто їде з вами?',
 team:'Хто вже працює над проєктом?', goals:'Які плани та цілі на найближчий час?', readiness:'Що вже готово або підтверджено?', idea:'Запит до YAR'
};
export const fieldsByType = {
 'Концерт':['readiness','city','dates','audience','previous','duration','format','eventRole'],
 'Тур / поїздка':['readiness','route','dates','crew'],
 'Постійна співпраця':['goals','team'], 'Окреме завдання':['readiness','dates'], 'Інше':[]
};
