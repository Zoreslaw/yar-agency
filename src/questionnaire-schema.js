export const types = ['Концерт', 'Тур / поїздка', 'Постійна співпраця', 'Інше'];
export const labels = {
 name:'Ім’я / псевдонім / назва гурту', email:'Електронна пошта', social:'Соціальні мережі',
 city:'Місто / майданчик', dates:'Дати', audience:'Очікувана кількість глядачів', previous:'Попередні продажі квитків',
 listeners:'Цільова аудиторія', duration:'Тривалість виступу', format:'Формат виступу', eventRole:'Роль у події',
 merch:'Мерч', route:'Маршрут туру', crew:'Склад поїздки', scope:'Напрям співпраці', idea:'Ситуація / потрібна допомога'
};
export const fieldsByType = {
 'Концерт':['city','dates','audience','previous','listeners','duration','format','eventRole','merch'],
 'Тур / поїздка':['route','dates','crew'], 'Постійна співпраця':['scope'], 'Інше':[]
};

