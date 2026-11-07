// UzExperience MVP - full convenience features (front-end/static MVP)
let TELEGRAM_HANDLE = 'nizomivch';
let WHATSAPP_NUMBER = '998000000000'; // xalqaro format, + belgisisiz (o'zgartiring)
let PHONE_NUMBER = '+998000000000';   // o'zgartiring
const USD_TO_UZS = 12600;
// Bron so'rovlari uchun (backend shart emas): Tally/Google Forms havolasini qo'ying yoki bo'sh qoldiring
let BOOKING_FORM_URL = ''; // masalan: 'https://tally.so/r/XXXXXX' yoki Google Forms havolasi
let TELEGRAM_BOT_URL = ''; // ixtiyoriy: bot/web-app havolasi
let PAYMENT_LINK = ''; // masalan: Stripe Payment Link / Payme/Click havolasi (real slot/to'lov backend bilan to'liq bo'ladi)
let REVIEW_ENDPOINT = ''; // ixtiyoriy: sharhlarni qabul qiluvchi backend endpoint (POST JSON)

const i18n = {
  uz: {
    nav_catalog: 'Katalog', nav_places: 'Mashhur joylar', nav_faq: 'FAQ', nav_how: 'Qanday ishlaydi', nav_contact: 'Aloqa',
    hero_eyebrow: "O‘zbekiston bo‘ylab mahalliy tajribalar",
    hero_title: 'Sayohatingizni unutilmas qiling',
    hero_subtitle: 'Hududlarni tanlang, mashhur joylar va tajribalarni ko‘ring, sevimlilarga saqlang va qulay bron qiling.',
    hero_cta: 'Tajribalarni ko‘rish', hero_secondary: 'Mashhur joylar',
    stat_cities: 'hudud', stat_experiences: 'tajriba', stat_languages: 'til: UZ/RU/EN',
    catalog_title: 'Tajriba katalogi', catalog_subtitle: "Hudud, kategoriya, saralash va qidiruv. Sevimlilar va yaqinda ko‘rilganlar mavjud.",
    filter_search: 'Qidiruv', filter_search_ph: 'Masalan: Registon, Xiva, tog‘...', filter_region: 'Hudud', filter_category: 'Kategoriya', filter_sort: 'Saralash', filter_currency: 'Valyuta', filter_all: 'Barchasi',
    sort_default: 'Standart', sort_price_asc: 'Narx: arzon → qimmat', sort_price_desc: 'Narx: qimmat → arzon', sort_duration: 'Davomiylik', sort_name: 'Nom',
    favorites: 'Sevimlilar', recent: 'Yaqinda ko‘rilganlar', clear: 'Tozalash',
    empty_state: "Mos tajriba topilmadi. Filtrlarni o‘zgartirib ko‘ring.",
    results: (n) => `${n} ta tajriba topildi`,
    places_title: '12 viloyatning mashhur joylari', places_subtitle: "Har bir hududdan mashhur maskanlar — rasm va lokatsiya bilan.",
    spotlight_in: (r) => `${r} bo‘yicha tajribalar`,
    faq_title: 'Tez savollar (FAQ)', faq_subtitle: "Bron, to‘lov va uchrashuv bo‘yicha umumiy ma'lumot.",
    how_title: 'Qanday ishlaydi', how_1: 'Hudud va tajribani tanlang, rasm va tafsilotlarni ko‘ring.', how_2: 'Bron formasini to‘ldiring va Telegram/WhatsApp orqali yuboring.', how_3: "Tasdiqlash va uchrashuv tafsilotlarini oling (MVP: qo‘lda).",
    contact_title: 'Aloqa va bron', contact_text: "Savol yoki bron uchun qulay usulda bog‘laning (MVP).", contact_btn: 'Telegram', whatsapp: 'WhatsApp', phone: 'Telefon',
    footer_note: "O‘zbekiston turizm tajribalari — MVP demo",
    details: "Batafsil", book_tg: "Telegram orqali yuborish", book_wa: "WhatsApp", book_form: "Forma orqali bron", pay: "To'lov havolasi", duration: 'Davomiyligi', meeting: 'Uchrashuv', includes: 'Kiritilgan', price: 'Narx', from: 'dan',
    review_send: "Sharh yuborish", review_name: "Ism", review_text: "Sharh", review_ok: "Rahmat! Sharh qabul qilindi (yoki backend sozlanganda saqlanadi).", review_need_backend: "Real sharhlar uchun backend endpoint kerak (content/site.json → review_endpoint).",
    slots_note: "Real sana/slot bandligi va onlayn to'lov uchun backend/integratsiya kerak. Hozircha so'rov yuboring.",
    guide: 'Gid', guide_langs: 'Tillar', guide_exp: 'Tajriba', guide_spec: 'Mutaxassislik', map: 'Lokatsiyani ochish', close: 'Yopish',
    availability: 'Mavjudlik', reviews: 'Sharhlar', weather: 'Maslahat',
    form_name: 'Ism', form_phone: 'Telefon', form_people: 'Odamlar soni', form_date: 'Sana',
    form_name_ph: 'Ismingiz', form_phone_ph: '+998...', form_people_ph: 'Masalan: 2',
    book_msg: (d) => `Salom! UzExperience orqali bron so‘rovi:\nTajriba: ${d.title}\nHudud: ${d.place}\nSana: ${d.date || '-'}\nOdamlar: ${d.people || '-'}\nIsm: ${d.name || '-'}\nTelefon: ${d.phone || '-'}`
  },
  ru: {
    nav_catalog: 'Каталог', nav_places: 'Известные места', nav_faq: 'FAQ', nav_how: 'Как это работает', nav_contact: 'Контакты',
    hero_eyebrow: 'Местные впечатления по всему Узбекистану',
    hero_title: 'Сделайте поездку незабываемой',
    hero_subtitle: 'Выбирайте регионы, смотрите места и впечатления, сохраняйте в избранное и бронируйте удобно.',
    hero_cta: 'Смотреть впечатления', hero_secondary: 'Известные места',
    stat_cities: 'регионов', stat_experiences: 'впечатлений', stat_languages: 'языка: UZ/RU/EN',
    catalog_title: 'Каталог впечатлений', catalog_subtitle: 'Регион, категория, сортировка и поиск. Есть избранное и недавние.',
    filter_search: 'Поиск', filter_search_ph: 'Например: Регистан, Хива, горы...', filter_region: 'Регион', filter_category: 'Категория', filter_sort: 'Сортировка', filter_currency: 'Валюта', filter_all: 'Все',
    sort_default: 'По умолчанию', sort_price_asc: 'Цена: по возрастанию', sort_price_desc: 'Цена: по убыванию', sort_duration: 'Длительность', sort_name: 'Название',
    favorites: 'Избранное', recent: 'Недавние', clear: 'Сбросить',
    empty_state: 'Подходящих впечатлений не найдено. Попробуйте изменить фильтры.',
    results: (n) => `Найдено впечатлений: ${n}`,
    places_title: 'Известные места 12 областей', places_subtitle: 'Популярные локации по регионам — с фото и картой.',
    spotlight_in: (r) => `Впечатления: ${r}`,
    faq_title: 'Частые вопросы (FAQ)', faq_subtitle: 'Общая информация о брони, оплате и встрече.',
    how_title: 'Как это работает', how_1: 'Выберите регион и впечатление, посмотрите фото и детали.', how_2: 'Заполните форму брони и отправьте в Telegram/WhatsApp.', how_3: 'Получите подтверждение и детали встречи (MVP: вручную).',
    contact_title: 'Контакты и бронь', contact_text: 'Свяжитесь удобным способом для вопросов или брони (MVP).', contact_btn: 'Telegram', whatsapp: 'WhatsApp', phone: 'Телефон',
    footer_note: 'Туристические впечатления Узбекистана — MVP демо',
    details: 'Подробнее', book_tg: 'Отправить в Telegram', book_wa: 'WhatsApp', book_form: 'Бронь через форму', pay: 'Ссылка на оплату', duration: 'Длительность', meeting: 'Место встречи', includes: 'Включено', price: 'Цена', from: 'от',
    review_send: 'Отправить отзыв', review_name: 'Имя', review_text: 'Отзыв', review_ok: 'Спасибо! Отзыв принят (или сохранится при настройке backend).', review_need_backend: 'Для реальных отзывов нужен backend endpoint (content/site.json → review_endpoint).',
    slots_note: 'Реальная доступность слотов и онлайн-оплата требуют backend/интеграции. Пока отправьте запрос.',
    guide: 'Гид', guide_langs: 'Языки', guide_exp: 'Опыт', guide_spec: 'Специализация', map: 'Открыть локацию', close: 'Закрыть',
    availability: 'Доступность', reviews: 'Отзывы', weather: 'Совет',
    form_name: 'Имя', form_phone: 'Телефон', form_people: 'Кол-во человек', form_date: 'Дата',
    form_name_ph: 'Ваше имя', form_phone_ph: '+998...', form_people_ph: 'Например: 2',
    book_msg: (d) => `Здравствуйте! Запрос на бронь через UzExperience:\nВпечатление: ${d.title}\nРегион: ${d.place}\nДата: ${d.date || '-'}\nЧеловек: ${d.people || '-'}\nИмя: ${d.name || '-'}\nТелефон: ${d.phone || '-'}`
  },
  en: {
    nav_catalog: 'Catalog', nav_places: 'Famous places', nav_faq: 'FAQ', nav_how: 'How it works', nav_contact: 'Contact',
    hero_eyebrow: 'Local experiences across Uzbekistan',
    hero_title: 'Make your trip unforgettable',
    hero_subtitle: 'Explore regions, places, and experiences, save favorites, and book easily.',
    hero_cta: 'Browse experiences', hero_secondary: 'Famous places',
    stat_cities: 'regions', stat_experiences: 'experiences', stat_languages: 'languages: UZ/RU/EN',
    catalog_title: 'Experience catalog', catalog_subtitle: 'Filter, sort, and search. Favorites and recently viewed included.',
    filter_search: 'Search', filter_search_ph: 'e.g., Registan, Khiva, mountains...', filter_region: 'Region', filter_category: 'Category', filter_sort: 'Sort', filter_currency: 'Currency', filter_all: 'All',
    sort_default: 'Default', sort_price_asc: 'Price: low to high', sort_price_desc: 'Price: high to low', sort_duration: 'Duration', sort_name: 'Name',
    favorites: 'Favorites', recent: 'Recently viewed', clear: 'Clear',
    empty_state: 'No matching experiences found. Try adjusting filters.',
    results: (n) => `${n} experience(s) found`,
    places_title: 'Famous places of 12 regions', places_subtitle: 'Popular locations across regions — with images and maps.',
    spotlight_in: (r) => `Experiences in ${r}`,
    faq_title: 'Frequently Asked Questions', faq_subtitle: 'General info about booking, payment, and meeting.',
    how_title: 'How it works', how_1: 'Choose a region and experience, view images and details.', how_2: 'Fill the booking form and send via Telegram/WhatsApp.', how_3: 'Receive confirmation and meeting details (MVP: manual).',
    contact_title: 'Contact & booking', contact_text: 'Reach us in a convenient way for questions or booking (MVP).', contact_btn: 'Telegram', whatsapp: 'WhatsApp', phone: 'Phone',
    footer_note: 'Uzbekistan tourism experiences — MVP demo',
    details: 'Details', book_tg: 'Send via Telegram', book_wa: 'WhatsApp', book_form: 'Book via form', pay: 'Payment link', duration: 'Duration', meeting: 'Meeting point', includes: 'Includes', price: 'Price', from: 'from',
    review_send: 'Submit review', review_name: 'Name', review_text: 'Review', review_ok: 'Thanks! Review received (or will be saved when backend is configured).', review_need_backend: 'Real reviews require a backend endpoint (content/site.json → review_endpoint).',
    slots_note: 'Real slot availability and online payment require backend/integration. For now, send a request.',
    guide: 'Guide', guide_langs: 'Languages', guide_exp: 'Experience', guide_spec: 'Specialty', map: 'Open location', close: 'Close',
    availability: 'Availability', reviews: 'Reviews', weather: 'Tip',
    form_name: 'Name', form_phone: 'Phone', form_people: 'People', form_date: 'Date',
    form_name_ph: 'Your name', form_phone_ph: '+998...', form_people_ph: 'e.g. 2',
    book_msg: (d) => `Hi! Booking request via UzExperience:\nExperience: ${d.title}\nRegion: ${d.place}\nDate: ${d.date || '-'}\nPeople: ${d.people || '-'}\nName: ${d.name || '-'}\nPhone: ${d.phone || '-'}`
  }
};

const regionLabels = {
  andijan: { uz: 'Andijon viloyati', ru: 'Андижанская область', en: 'Andijan Region' },
  bukhara: { uz: 'Buxoro viloyati', ru: 'Бухарская область', en: 'Bukhara Region' },
  fergana: { uz: "Farg'ona viloyati", ru: 'Ферганская область', en: 'Fergana Region' },
  jizzakh: { uz: 'Jizzax viloyati', ru: 'Джизакская область', en: 'Jizzakh Region' },
  khorezm: { uz: 'Xorazm viloyati', ru: 'Хорезмская область', en: 'Khorezm Region' },
  namangan: { uz: 'Namangan viloyati', ru: 'Наманганская область', en: 'Namangan Region' },
  navoi: { uz: 'Navoiy viloyati', ru: 'Навоийская область', en: 'Navoi Region' },
  kashkadarya: { uz: 'Qashqadaryo viloyati', ru: 'Кашкадарьинская область', en: 'Kashkadarya Region' },
  samarkand: { uz: 'Samarqand viloyati', ru: 'Самаркандская область', en: 'Samarkand Region' },
  sirdarya: { uz: 'Sirdaryo viloyati', ru: 'Сырдарьинская область', en: 'Syrdarya Region' },
  surkhandarya: { uz: 'Surxondaryo viloyati', ru: 'Сурхандарьинская область', en: 'Surkhandarya Region' },
  tashkent_region: { uz: 'Toshkent viloyati', ru: 'Ташкентская область', en: 'Tashkent Region' },
  tashkent_city: { uz: 'Toshkent shahri', ru: 'г. Ташкент', en: 'Tashkent City' },
  karakalpakstan: { uz: "Qoraqalpog'iston", ru: 'Каракалпакстан', en: 'Karakalpakstan' }
};
const weatherTips = {
  andijan: { uz: "Bahor/kuz sayohat uchun qulay; yozda issiq bo‘lishi mumkin.", ru: 'Весна/осень удобны; летом может быть жарко.', en: 'Spring/autumn are comfortable; summers can be hot.' },
  bukhara: { uz: "Yozda juda issiq — ertalabki/kechki sayr qulayroq.", ru: 'Летом очень жарко — лучше утром/вечером.', en: 'Very hot in summer — mornings/evenings are better.' },
  fergana: { uz: "Vodiy iqlimi: bahorda yumshoq, yozda issiq.", ru: 'Климат долины: мягкая весна, жаркое лето.', en: 'Valley climate: mild spring, hot summer.' },
  jizzakh: { uz: "Tog‘ yo‘nalishlarida ob-havo tez o‘zgaradi.", ru: 'В горах погода меняется быстро.', en: 'Weather changes quickly in mountain areas.' },
  khorezm: { uz: "Yozda issiq va quruq; suv olib yuring.", ru: 'Летом жарко и сухо; берите воду.', en: 'Hot and dry in summer; bring water.' },
  namangan: { uz: "Bahor va kuzda tabiat sayrlari uchun qulay.", ru: 'Весной и осенью удобно для прогулок.', en: 'Great for walks in spring and autumn.' },
  navoi: { uz: "Cho‘l/tog‘ hududlari: quyoshdan himoyalaning.", ru: 'Пустыня/горы: защищайтесь от солнца.', en: 'Desert/mountains: protect yourself from the sun.' },
  kashkadarya: { uz: "Yozda issiq; qulay poyabzal tavsiya etiladi.", ru: 'Летом жарко; удобная обувь рекомендуется.', en: 'Hot summers; comfortable shoes recommended.' },
  samarkand: { uz: "Bahor/kuz eng qulay mavsum.", ru: 'Весна/осень — лучшие сезоны.', en: 'Spring/autumn are the best seasons.' },
  sirdarya: { uz: "Yozda issiq bo‘lishi mumkin, suv oling.", ru: 'Летом может быть жарко, берите воду.', en: 'Can be hot in summer; bring water.' },
  surkhandarya: { uz: "Janubiy issiq iqlim — ertalabki vaqt qulay.", ru: 'Южный жаркий климат — лучше утром.', en: 'Southern hot climate — mornings are better.' },
  tashkent_region: { uz: "Tog‘larda kechqurun salqin bo‘lishi mumkin.", ru: 'В горах вечером может быть прохладно.', en: 'It can get cool in the mountains at night.' },
  tashkent_city: { uz: "Shahar bo‘ylab yurishga qulay poyabzal oling.", ru: 'Возьмите удобную обувь для прогулок.', en: 'Wear comfortable shoes for city walks.' },
  karakalpakstan: { uz: "Masofa uzoq bo‘lishi mumkin; safarni oldindan rejalang.", ru: 'Расстояния могут быть большими; планируйте заранее.', en: 'Distances can be long; plan ahead.' }
};

const categoryLabels = {
  history: { uz: 'Tarix', ru: 'История', en: 'History' },
  food: { uz: 'Taom', ru: 'Еда', en: 'Food' },
  nature: { uz: 'Tabiat', ru: 'Природа', en: 'Nature' },
  craft: { uz: "Hunarmandchilik", ru: 'Ремёсла', en: 'Crafts' }
};
const categoryIcons = { history: 'fa-landmark', food: 'fa-utensils', nature: 'fa-mountain-sun', craft: 'fa-hands' };
const availabilityLabels = {
  daily: { uz: 'Har kuni (so‘rov)', ru: 'Ежедневно (по запросу)', en: 'Daily (on request)' },
  weekends: { uz: 'Dam olish kunlari', ru: 'По выходным', en: 'Weekends' },
  request: { uz: "So‘rov bo‘yicha", ru: 'По запросу', en: 'On request' }
};

const famousPlaces = [
  { region: 'andijan', name: { uz: 'Bobur bog‘i va merosi', ru: 'Парк Бабура', en: 'Babur Park & Heritage' }, desc: { uz: "Andijonning ramziy maskani.", ru: 'Знаковая локация Андижана.', en: 'An iconic location in Andijan.' }, image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=900&q=80&auto=format&fit=crop', mapQuery: 'Babur Memorial Park Andijan' },
  { region: 'bukhara', name: { uz: 'Poi Kalon majmuasi', ru: 'Пои-Калян', en: 'Poi Kalyan Complex' }, desc: { uz: 'Buxoroning tarixiy yuragi.', ru: 'Историческое сердце Бухары.', en: 'The historic heart of Bukhara.' }, image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80&auto=format&fit=crop', mapQuery: 'Poi Kalyan Bukhara' },
  { region: 'fergana', name: { uz: "Marg'ilon ipak markazi", ru: 'Шёлковый центр Маргилана', en: 'Margilan Silk Center' }, desc: { uz: "Atlas va ipakchilik an'analari.", ru: 'Традиции атласа и шёлка.', en: 'Atlas and silk traditions.' }, image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=900&q=80&auto=format&fit=crop', mapQuery: 'Yodgorlik Silk Factory Margilan' },
  { region: 'jizzakh', name: { uz: 'Zomin milliy bog‘i', ru: 'Зааминский парк', en: 'Zaamin National Park' }, desc: { uz: 'Tog‘ havosi va tabiat.', ru: 'Горный воздух и природа.', en: 'Mountain air and nature.' }, image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80&auto=format&fit=crop', mapQuery: 'Zaamin National Park' },
  { region: 'khorezm', name: { uz: "Ichan-Qal'a (Xiva)", ru: 'Ичан-Кала (Хива)', en: 'Itchan Kala (Khiva)' }, desc: { uz: 'Qadimiy qal’a-shahar.', ru: 'Древний город-крепость.', en: 'Ancient walled city.' }, image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80&auto=format&fit=crop', mapQuery: 'Itchan Kala Khiva' },
  { region: 'namangan', name: { uz: 'Axsikent merosi', ru: 'Наследие Ахсикента', en: 'Ahsikent Heritage' }, desc: { uz: 'Tarixiy ildizlar.', ru: 'Исторические корни.', en: 'Historical roots.' }, image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=900&q=80&auto=format&fit=crop', mapQuery: 'Aksikent Namangan' },
  { region: 'navoi', name: { uz: 'Nurota tog‘lari', ru: 'Нуратинские горы', en: 'Nuratau Mountains' }, desc: { uz: 'Tabiat va qishloq turizmi.', ru: 'Природа и сельский туризм.', en: 'Nature and rural tourism.' }, image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=900&q=80&auto=format&fit=crop', mapQuery: 'Nuratau Mountains Uzbekistan' },
  { region: 'kashkadarya', name: { uz: 'Oq-Saroy (Shahrisabz)', ru: 'Ак-Сарай', en: 'Ak-Saray (Shahrisabz)' }, desc: { uz: 'Amir Temur merosi.', ru: 'Наследие Амира Темура.', en: 'Timurid heritage.' }, image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=900&q=80&auto=format&fit=crop', mapQuery: 'Ak Saray Palace Shahrisabz' },
  { region: 'samarkand', name: { uz: 'Registon maydoni', ru: 'Площадь Регистан', en: 'Registan Square' }, desc: { uz: 'Samarqand timsoli.', ru: 'Символ Самарканда.', en: "Samarkand's landmark." }, image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=900&q=80&auto=format&fit=crop', mapQuery: 'Registan Samarkand' },
  { region: 'sirdarya', name: { uz: 'Sirdaryo bo‘yi', ru: 'Побережье Сырдарьи', en: 'Syrdarya Riverside' }, desc: { uz: 'Daryo bo‘yi manzaralari.', ru: 'Виды вдоль реки.', en: 'Riverside scenery.' }, image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900&q=80&auto=format&fit=crop', mapQuery: 'Syrdarya River Uzbekistan' },
  { region: 'surkhandarya', name: { uz: 'Termiz merosi', ru: 'Наследие Термеза', en: 'Termez Heritage' }, desc: { uz: 'Qadimiy tarix izlari.', ru: 'Следы древней истории.', en: 'Ancient history traces.' }, image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80&auto=format&fit=crop', mapQuery: 'Termez Uzbekistan' },
  { region: 'tashkent_region', name: { uz: 'Chorvoq va Chimgan', ru: 'Чарвак и Чимган', en: 'Charvak & Chimgan' }, desc: { uz: 'Tog‘ va suv manzaralari.', ru: 'Горы и озеро.', en: 'Mountains and lake.' }, image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=80&auto=format&fit=crop', mapQuery: 'Charvak Reservoir' }
];

const experiences = [
  { id: 1, region: 'andijan', category: 'food', priceUSD: 18, durationHours: 1.5, duration: { uz: '1.5 soat', ru: '1,5 часа', en: '1.5 hours' }, availability: 'request', rating: 4.8, reviews: [{ n: 'Dilshod', t: { uz: 'Juda mazali va qiziqarli sayohat.', ru: 'Очень вкусно и интересно.', en: 'Very tasty and interesting tour.' } }], meeting: { uz: 'Andijon markazi', ru: 'Центр Андижана', en: 'Andijan center' }, mapQuery: 'Andijan Uzbekistan', images: ['https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80&auto=format&fit=crop','https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&q=80&auto=format&fit=crop'], guide: { name: 'Otabek A.', langs: 'UZ, RU', exp: { uz: '4 yil', ru: '4 года', en: '4 years' }, spec: { uz: 'Mahalliy taomlar', ru: 'Местная кухня', en: 'Local food' }, bio: { uz: 'Andijon taomlari bo‘yicha gid.', ru: 'Гид по кухне Андижана.', en: 'Guide to Andijan cuisine.' } }, title: { uz: 'Andijon mahalliy taomlar tanishuvi', ru: 'Знакомство с кухней Андижана', en: 'Andijan Local Food Intro' }, desc: { uz: "Hududga xos taomlar va tatib ko‘rish nuqtalari bo‘yicha gastrosayohat.", ru: 'Гастротур по региональным блюдам.', en: 'A food walk with regional dishes.' }, includes: { uz: 'Marshrut (taomlar alohida)', ru: 'Маршрут (еда отдельно)', en: 'Route (food separate)' } },
  { id: 2, region: 'andijan', category: 'history', priceUSD: 20, durationHours: 2, duration: { uz: '2 soat', ru: '2 часа', en: '2 hours' }, availability: 'daily', rating: 4.9, reviews: [{ n: 'Azamat', t: { uz: 'Bobur haqida ko‘p narsa bildim.', ru: 'Узнал много о Бабуре.', en: 'Learned a lot about Babur.' } }], meeting: { uz: 'Bobur bog‘i', ru: 'Парк Бабура', en: 'Babur Park' }, mapQuery: 'Babur Memorial Park Andijan', images: ['https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=900&q=80&auto=format&fit=crop','https://images.unsplash.com/photo-1564507592333-c60657eea523?w=900&q=80&auto=format&fit=crop'], guide: { name: 'Mohira A.', langs: 'UZ, RU, EN', exp: { uz: '6 yil', ru: '6 лет', en: '6 years' }, spec: { uz: 'Tarix, meros', ru: 'История, наследие', en: 'History, heritage' }, bio: { uz: 'Andijon tarixi va Bobur merosi bo‘yicha gid.', ru: 'Гид по истории Андижана.', en: 'Guide to Andijan history.' } }, title: { uz: "Andijon tarixi va Bobur izlari", ru: 'История Андижана и следы Бабура', en: 'Andijan History & Babur Trail' }, desc: { uz: "Andijonning muhim maskanlari va tarixiy hikoyalari bilan tanishuv.", ru: 'Знакомство с важными местами Андижана.', en: 'An introduction to key sites of Andijan.' }, includes: { uz: 'Gid va marshrut', ru: 'Гид и маршрут', en: 'Guide and route' } },
  { id: 3, region: 'bukhara', category: 'history', priceUSD: 30, durationHours: 2.5, duration: { uz: '2.5 soat', ru: '2,5 часа', en: '2.5 hours' }, availability: 'daily', rating: 4.9, reviews: [{ n: 'Maria', t: { uz: 'Ajoyib gid va yo‘nalish.', ru: 'Отличный гид и маршрут.', en: 'Excellent guide and route.' } }], meeting: { uz: 'Labi Hovuz', ru: 'Ляби-Хауз', en: 'Lyabi-Hauz' }, mapQuery: 'Lyabi Hauz Bukhara', images: ['https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80&auto=format&fit=crop','https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80&auto=format&fit=crop'], guide: { name: 'Shokhrukh B.', langs: 'UZ, RU, EN', exp: { uz: '7 yil', ru: '7 лет', en: '7 years' }, spec: { uz: 'Eski shahar', ru: 'Старый город', en: 'Old city' }, bio: { uz: 'Buxoro eski shahri bo‘yicha gid.', ru: 'Гид по старой Бухаре.', en: 'Guide to Old Bukhara.' } }, title: { uz: 'Buxoro eski shahar yurishi', ru: 'Прогулка по старой Бухаре', en: 'Old Bukhara Walking Tour' }, desc: { uz: "Ko‘hna ko‘chalar, madrasalar va savdo gumbazlari haqida hikoyalar.", ru: 'Истории о старинных улочках и медресе.', en: 'Stories about ancient streets and madrasas.' }, includes: { uz: 'Gid xizmati', ru: 'Услуги гида', en: 'Guide service' } },
  { id: 4, region: 'samarkand', category: 'history', priceUSD: 35, durationHours: 3, duration: { uz: '3 soat', ru: '3 часа', en: '3 hours' }, availability: 'daily', rating: 5.0, reviews: [{ n: 'John', t: { uz: 'Registon hayratlanarli!', ru: 'Регистан великолепен!', en: 'Registan is stunning!' } }], meeting: { uz: 'Registon maydoni', ru: 'Площадь Регистан', en: 'Registan Square' }, mapQuery: 'Registan Samarkand', images: ['https://images.unsplash.com/photo-1527838832700-5059252407fa?w=900&q=80&auto=format&fit=crop','https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=900&q=80&auto=format&fit=crop'], guide: { name: 'Malika S.', langs: 'UZ, RU, EN', exp: { uz: '8 yil', ru: '8 лет', en: '8 years' }, spec: { uz: 'Meros, arxitektura', ru: 'Наследие, архитектура', en: 'Heritage, architecture' }, bio: { uz: 'Samarqand merosi bo‘yicha gid.', ru: 'Гид по наследию Самарканда.', en: 'Guide to Samarkand heritage.' } }, title: { uz: 'Registon va qadimiy Samarqand', ru: 'Регистан и древний Самарканд', en: 'Registan & Ancient Samarkand' }, desc: { uz: "Registon va tarixiy markaz bo‘ylab sayohat.", ru: 'Прогулка по Регистану и центру.', en: 'A walk through Registan and the historic center.' }, includes: { uz: 'Gid, marshrut', ru: 'Гид, маршрут', en: 'Guide, route' } },
  { id: 5, region: 'khorezm', category: 'history', priceUSD: 32, durationHours: 3, duration: { uz: '3 soat', ru: '3 часа', en: '3 hours' }, availability: 'request', rating: 4.8, reviews: [{ n: 'Elena', t: { uz: 'Xiva juda o‘ziga xos.', ru: 'Хива очень атмосферная.', en: 'Khiva is very atmospheric.' } }], meeting: { uz: "Ichan-Qal'a, Xiva", ru: 'Ичан-Кала, Хива', en: 'Ichan-Kala, Khiva' }, mapQuery: 'Itchan Kala Khiva', images: ['https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80&auto=format&fit=crop','https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&q=80&auto=format&fit=crop'], guide: { name: 'Dilnoza X.', langs: 'UZ, RU, EN', exp: { uz: '5 yil', ru: '5 лет', en: '5 years' }, spec: { uz: 'Xorazm merosi', ru: 'Наследие Хорезма', en: 'Khorezm heritage' }, bio: { uz: 'Xiva merosi bo‘yicha gid.', ru: 'Гид по наследию Хивы.', en: 'Guide to Khiva heritage.' } }, title: { uz: "Xiva Ichan-Qal'a sayri", ru: 'Прогулка по Ичан-Кале', en: 'Khiva Ichan-Kala Tour' }, desc: { uz: "Qal'a ichidagi yodgorliklar va tarixiy hikoyalar.", ru: 'Памятники и истории внутри крепости.', en: 'Monuments and stories inside the walled city.' }, includes: { uz: 'Gid va yo‘nalish', ru: 'Гид и маршрут', en: 'Guide and route' } },
  { id: 6, region: 'fergana', category: 'craft', priceUSD: 22, durationHours: 2, duration: { uz: '2 soat', ru: '2 часа', en: '2 hours' }, availability: 'weekends', rating: 4.7, reviews: [{ n: 'Nigora', t: { uz: "Atlas jarayoni juda qiziq.", ru: 'Процесс создания атласа очень интересен.', en: 'The atlas process is fascinating.' } }], meeting: { uz: "Marg'ilon", ru: 'Маргилан', en: 'Margilan' }, mapQuery: 'Yodgorlik Silk Factory Margilan', images: ['https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=900&q=80&auto=format&fit=crop','https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=900&q=80&auto=format&fit=crop'], guide: { name: 'Nilufar F.', langs: 'UZ, RU', exp: { uz: '5 yil', ru: '5 лет', en: '5 years' }, spec: { uz: 'Ipak, atlas', ru: 'Шёлк, атлас', en: 'Silk, atlas' }, bio: { uz: "Atlas va ipak an'analari bo‘yicha gid.", ru: 'Гид по традициям атласа.', en: 'Guide to atlas traditions.' } }, title: { uz: "Marg'ilon atlas va ipak tajribasi", ru: 'Атлас и шёлк Маргилана', en: 'Margilan Atlas & Silk Experience' }, desc: { uz: "Ipakchilik va atlas to‘qish an'analari bilan tanishuv.", ru: 'Знакомство с традициями шёлка и атласа.', en: 'Intro to silk and atlas weaving traditions.' }, includes: { uz: 'Tanishuv va maslahat', ru: 'Ознакомление', en: 'Intro and tips' } },
  { id: 7, region: 'tashkent_region', category: 'nature', priceUSD: 45, durationHours: 6, duration: { uz: '6 soat', ru: '6 часов', en: '6 hours' }, availability: 'weekends', rating: 4.8, reviews: [{ n: 'Sardor', t: { uz: 'Manzara zo‘r, yo‘l qulay.', ru: 'Отличные виды и маршрут.', en: 'Great views and route.' } }], meeting: { uz: 'Toshkent', ru: 'Ташкент', en: 'Tashkent' }, mapQuery: 'Charvak Reservoir', images: ['https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=80&auto=format&fit=crop','https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80&auto=format&fit=crop'], guide: { name: 'Bekzod T.', langs: 'UZ, RU, EN', exp: { uz: '6 yil', ru: '6 лет', en: '6 years' }, spec: { uz: 'Tog‘, tabiat', ru: 'Горы, природа', en: 'Mountains, nature' }, bio: { uz: 'Tog‘ va tabiat yo‘nalishlari bo‘yicha gid.', ru: 'Гид по горным маршрутам.', en: 'Guide for mountain routes.' } }, title: { uz: "Chorvoq va Chimgan tabiat sayohati", ru: 'Чарвак и Чимган', en: 'Charvak & Chimgan Nature Trip' }, desc: { uz: "Tog‘ va suv manzaralari, foto to‘xtashlar (transport kelishiladi).", ru: 'Горы и озеро (транспорт отдельно).', en: 'Mountains and lake views (transport separate).' }, includes: { uz: "Yo‘l reja va hamrohlik", ru: 'План и сопровождение', en: 'Route plan and guidance' } },
  { id: 8, region: 'jizzakh', category: 'nature', priceUSD: 26, durationHours: 3, duration: { uz: '3 soat', ru: '3 часа', en: '3 hours' }, availability: 'request', rating: 4.7, reviews: [{ n: 'Kamila', t: { uz: 'Tog‘ havosi ajoyib.', ru: 'Чудесный горный воздух.', en: 'Wonderful mountain air.' } }], meeting: { uz: 'Jizzax', ru: 'Джизак', en: 'Jizzakh' }, mapQuery: 'Zaamin National Park', images: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80&auto=format&fit=crop','https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80&auto=format&fit=crop'], guide: { name: 'Kamola J.', langs: 'UZ, RU', exp: { uz: '3 yil', ru: '3 года', en: '3 years' }, spec: { uz: 'Tabiat sayrlari', ru: 'Природные прогулки', en: 'Nature walks' }, bio: { uz: 'Zomin yo‘nalishlari bo‘yicha gid.', ru: 'Гид по Заамину.', en: 'Guide for Zaamin routes.' } }, title: { uz: "Zomin milliy bog‘i sayri", ru: 'Прогулка в Заамине', en: 'Zaamin National Park Walk' }, desc: { uz: "Tog‘ havosi, manzaralar va yengil tabiat yo‘nalishi.", ru: 'Горный воздух и лёгкий маршрут.', en: 'Mountain air and an easy nature route.' }, includes: { uz: 'Maslahat va marshrut', ru: 'Рекомендации и маршрут', en: 'Tips and route' } },
  { id: 9, region: 'namangan', category: 'nature', priceUSD: 24, durationHours: 3, duration: { uz: '3 soat', ru: '3 часа', en: '3 hours' }, availability: 'request', rating: 4.6, reviews: [{ n: 'Ulugbek', t: { uz: 'Tinch va chiroyli joylar.', ru: 'Спокойные и красивые места.', en: 'Calm and beautiful places.' } }], meeting: { uz: 'Namangan', ru: 'Наманган', en: 'Namangan' }, mapQuery: 'Namangan Uzbekistan', images: ['https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=900&q=80&auto=format&fit=crop','https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900&q=80&auto=format&fit=crop'], guide: { name: 'Madina N.', langs: 'UZ, RU', exp: { uz: '4 yil', ru: '4 года', en: '4 years' }, spec: { uz: 'Tabiat, mahalliy joylar', ru: 'Природа, локации', en: 'Nature, local spots' }, bio: { uz: 'Namangan tabiat maskanlari bo‘yicha gid.', ru: 'Гид по местам Намангана.', en: 'Guide to Namangan spots.' } }, title: { uz: 'Namangan atrofida tabiat va tarix', ru: 'Природа и история Намангана', en: 'Nature & History near Namangan' }, desc: { uz: "Manzarali nuqtalar va mahalliy hikoyalar bilan tanishuv.", ru: 'Живописные точки и местные истории.', en: 'Scenic spots and local stories.' }, includes: { uz: 'Yo‘l reja va hamrohlik', ru: 'План и сопровождение', en: 'Route plan and guidance' } },
  { id: 10, region: 'navoi', category: 'nature', priceUSD: 40, durationHours: 5, duration: { uz: '5 soat', ru: '5 часов', en: '5 hours' }, availability: 'request', rating: 4.8, reviews: [{ n: 'Anna', t: { uz: 'Noyob tajriba.', ru: 'Уникальный опыт.', en: 'A unique experience.' } }], meeting: { uz: 'Nurota', ru: 'Нурата', en: 'Nurata' }, mapQuery: 'Nuratau Mountains', images: ['https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80&auto=format&fit=crop','https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=900&q=80&auto=format&fit=crop'], guide: { name: 'Sardor N.', langs: 'UZ, RU, EN', exp: { uz: '7 yil', ru: '7 лет', en: '7 years' }, spec: { uz: 'Qishloq turizmi', ru: 'Сельский туризм', en: 'Rural tourism' }, bio: { uz: 'Nurota va qishloq turizmi bo‘yicha gid.', ru: 'Гид по Нурате.', en: 'Guide for Nurata and rural tourism.' } }, title: { uz: 'Nurota tabiati va qishloq tajribasi', ru: 'Природа Нураты', en: 'Nurata Nature & Village Experience' }, desc: { uz: "Tabiat manzaralari va mahalliy muhit (transport kelishiladi).", ru: 'Природа и местная среда (транспорт отдельно).', en: 'Nature and local environment (transport separate).' }, includes: { uz: 'Reja va hamrohlik', ru: 'План и сопровождение', en: 'Plan and guidance' } },
  { id: 11, region: 'kashkadarya', category: 'history', priceUSD: 30, durationHours: 3, duration: { uz: '3 soat', ru: '3 часа', en: '3 hours' }, availability: 'daily', rating: 4.8, reviews: [{ n: 'Boburjon', t: { uz: 'Shahrisabz tarixi qiziqarli.', ru: 'История Шахрисабза интересна.', en: 'Shahrisabz history is fascinating.' } }], meeting: { uz: 'Shahrisabz markazi', ru: 'Центр Шахрисабза', en: 'Shahrisabz center' }, mapQuery: 'Ak Saray Palace Shahrisabz', images: ['https://images.unsplash.com/photo-1564507592333-c60657eea523?w=900&q=80&auto=format&fit=crop','https://images.unsplash.com/photo-1527838832700-5059252407fa?w=900&q=80&auto=format&fit=crop'], guide: { name: 'Rustam Q.', langs: 'UZ, RU, EN', exp: { uz: '6 yil', ru: '6 лет', en: '6 years' }, spec: { uz: 'Tarixiy meros', ru: 'Историческое наследие', en: 'Historical heritage' }, bio: { uz: 'Shahrisabz merosi bo‘yicha gid.', ru: 'Гид по Шахрисабзу.', en: 'Guide to Shahrisabz heritage.' } }, title: { uz: 'Shahrisabz merosi sayri', ru: 'Наследие Шахрисабза', en: 'Shahrisabz Heritage Walk' }, desc: { uz: "Amir Temur davri merosi va tarixiy maskanlar bo‘ylab ekskursiya.", ru: 'Экскурсия по наследию эпохи Амира Темура.', en: 'A tour of Timurid heritage.' }, includes: { uz: 'Gid va marshrut', ru: 'Гид и маршрут', en: 'Guide and route' } },
  { id: 12, region: 'surkhandarya', category: 'history', priceUSD: 27, durationHours: 2.5, duration: { uz: '2.5 soat', ru: '2,5 часа', en: '2.5 hours' }, availability: 'request', rating: 4.6, reviews: [{ n: 'Timur', t: { uz: 'Qadimiy tarix haqida foydali.', ru: 'Полезно о древней истории.', en: 'Useful insights into ancient history.' } }], meeting: { uz: 'Termiz', ru: 'Термез', en: 'Termez' }, mapQuery: 'Termez Uzbekistan', images: ['https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80&auto=format&fit=crop','https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=900&q=80&auto=format&fit=crop'], guide: { name: 'Gulbahor S.', langs: 'UZ, RU', exp: { uz: '5 yil', ru: '5 лет', en: '5 years' }, spec: { uz: 'Qadimiy tarix', ru: 'Древняя история', en: 'Ancient history' }, bio: { uz: 'Termiz qadimiy tarixi bo‘yicha gid.', ru: 'Гид по истории Термеза.', en: 'Guide to ancient Termez.' } }, title: { uz: 'Termiz qadimiy tarixiga kirish', ru: 'Древняя история Термеза', en: 'Intro to Ancient Termez' }, desc: { uz: "Hududning qadimiy madaniy qatlamlari haqida tanishtiruv.", ru: 'Ознакомление с древними слоями региона.', en: 'An intro to ancient cultural layers.' }, includes: { uz: 'Tanishuv dasturi', ru: 'Ознакомительная программа', en: 'Intro program' } },
  { id: 13, region: 'sirdarya', category: 'food', priceUSD: 16, durationHours: 1.5, duration: { uz: '1.5 soat', ru: '1,5 часа', en: '1.5 hours' }, availability: 'request', rating: 4.5, reviews: [{ n: 'Olim', t: { uz: 'Sodda va yoqimli tajriba.', ru: 'Просто и приятно.', en: 'Simple and pleasant experience.' } }], meeting: { uz: 'Guliston', ru: 'Гулистан', en: 'Gulistan' }, mapQuery: 'Gulistan Uzbekistan', images: ['https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80&auto=format&fit=crop'], guide: { name: 'Umid S.', langs: 'UZ, RU', exp: { uz: '2 yil', ru: '2 года', en: '2 years' }, spec: { uz: 'Mahalliy taomlar', ru: 'Местная кухня', en: 'Local food' }, bio: { uz: 'Sirdaryo taomlari bo‘yicha gid.', ru: 'Гид по кухне Сырдарьи.', en: 'Guide to Syrdarya cuisine.' } }, title: { uz: 'Sirdaryo mahalliy ta\'mlariga sayohat', ru: 'Вкусы Сырдарьи', en: 'Taste of Syrdarya' }, desc: { uz: "Hududiy taomlar va tavsiya etilgan nuqtalar bo‘yicha tanishuv.", ru: 'Знакомство с региональными блюдами.', en: 'Intro to regional dishes.' }, includes: { uz: 'Marshrut (taomlar alohida)', ru: 'Маршрут (еда отдельно)', en: 'Route (food separate)' } },
  { id: 14, region: 'tashkent_city', category: 'food', priceUSD: 25, durationHours: 2, duration: { uz: '2 soat', ru: '2 часа', en: '2 hours' }, availability: 'daily', rating: 4.9, reviews: [{ n: 'Sofia', t: { uz: 'Bozor va taomlar ajoyib.', ru: 'Базар и еда отличные.', en: 'Bazaar and food were great.' } }], meeting: { uz: 'Chorsu bozori', ru: 'Рынок Чорсу', en: 'Chorsu Bazaar' }, mapQuery: 'Chorsu Bazaar Tashkent', images: ['https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&q=80&auto=format&fit=crop','https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80&auto=format&fit=crop'], guide: { name: 'Aziza R.', langs: 'UZ, RU, EN', exp: { uz: '5 yil', ru: '5 лет', en: '5 years' }, spec: { uz: 'Street food, bozor', ru: 'Стритфуд, базар', en: 'Street food, bazaar' }, bio: { uz: "Toshkent taomlari va bozor madaniyati bo‘yicha gid.", ru: 'Гид по еде и базарам Ташкента.', en: 'Guide for Tashkent food and bazaars.' } }, title: { uz: "Toshkent street food ta'mi", ru: 'Уличная еда Ташкента', en: 'Tashkent Street Food Tasting' }, desc: { uz: 'Mahalliy taomlar, bozor muhiti va tatib ko‘rish nuqtalari.', ru: 'Местная еда и атмосфера базара.', en: 'Local bites and bazaar atmosphere.' }, includes: { uz: 'Marshrut va tavsiyalar', ru: 'Маршрут и рекомендации', en: 'Route and tips' } },
  { id: 15, region: 'karakalpakstan', category: 'history', priceUSD: 50, durationHours: 8, duration: { uz: '1 kun (demo)', ru: '1 день (демо)', en: '1 day (demo)' }, availability: 'request', rating: 4.7, reviews: [{ n: 'Nodir', t: { uz: 'Madaniy jihatdan boy.', ru: 'Культурно насыщенно.', en: 'Culturally rich.' } }], meeting: { uz: 'Nukus', ru: 'Нукус', en: 'Nukus' }, mapQuery: 'Savitsky Museum Nukus', images: ['https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=900&q=80&auto=format&fit=crop'], guide: { name: 'Timur N.', langs: 'UZ, RU', exp: { uz: '4 yil', ru: '4 года', en: '4 years' }, spec: { uz: 'Madaniy meros', ru: 'Культурное наследие', en: 'Cultural heritage' }, bio: { uz: "Qoraqalpog'iston madaniy yo‘nalishlari bo‘yicha koordinator.", ru: 'Координатор культурных маршрутов.', en: 'Cultural routes coordinator.' } }, title: { uz: "Nukus madaniy merosi (demo)", ru: 'Культурное наследие Нукуса', en: 'Nukus Cultural Heritage (demo)' }, desc: { uz: "Hudud madaniyati va muhim maskanlar bo‘yicha tanishtiruv (MVP).", ru: 'Ознакомление с культурой региона (MVP).', en: 'Intro to regional culture and key sites (MVP).' }, includes: { uz: 'Maslahat va reja', ru: 'Консультация и план', en: 'Advice and plan' } }
];

const faqs = [
  { q: { uz: 'Qanday bron qilaman?', ru: 'Как забронировать?', en: 'How do I book?' }, a: { uz: 'Tajribani tanlang, bron formasini to‘ldiring va Telegram yoki WhatsApp orqali yuboring (MVP: qo‘lda tasdiqlanadi).', ru: 'Выберите впечатление, заполните форму и отправьте в Telegram или WhatsApp (MVP: подтверждение вручную).', en: 'Choose an experience, fill the form, and send via Telegram or WhatsApp (MVP: manual confirmation).' } },
  { q: { uz: "To‘lov qanday bo‘ladi?", ru: 'Как происходит оплата?', en: 'How is payment handled?' }, a: { uz: "MVP bosqichida to‘lov va shartlar bron tasdiqlanganda alohida kelishiladi. Onlayn to‘lov keyingi bosqichda qo‘shilishi mumkin.", ru: 'На этапе MVP оплата и условия согласуются при подтверждении. Онлайн-оплата может быть добавлена позже.', en: 'In the MVP stage, payment and terms are arranged upon confirmation. Online payment can be added later.' } },
  { q: { uz: 'Bekor qilish mumkinmi?', ru: 'Можно ли отменить?', en: 'Can I cancel?' }, a: { uz: "Bekor qilish shartlari tajriba va gid bilan kelishiladi. Iltimos, imkon qadar oldinroq xabar bering.", ru: 'Условия отмены согласуются с гидом. Пожалуйста, сообщайте заранее.', en: 'Cancellation terms are agreed with the guide. Please notify as early as possible.' } },
  { q: { uz: 'Uchrashuv joyi qayerda?', ru: 'Где место встречи?', en: 'Where is the meeting point?' }, a: { uz: "Har bir tajriba sahifasida uchrashuv joyi va xarita havolasi ko‘rsatiladi.", ru: 'Точка встречи и ссылка на карту указаны на странице впечатления.', en: 'Each experience page shows the meeting point and a map link.' } },
  { q: { uz: 'Qaysi tillarda xizmat bor?', ru: 'На каких языках доступно?', en: 'Which languages are available?' }, a: { uz: "Sayt UZ/RU/EN. Gid tillari har tajribada alohida ko‘rsatiladi.", ru: 'Сайт на UZ/RU/EN. Языки гида указаны в каждом впечатлении.', en: 'The site supports UZ/RU/EN. Guide languages are shown per experience.' } }
];

let currentLang = localStorage.getItem('uzexp_lang') || 'uz';
if (!i18n[currentLang]) currentLang = 'uz';
let currency = localStorage.getItem('uzexp_currency') || 'USD';
if (!['USD','UZS'].includes(currency)) currency = 'USD';
let viewMode = 'all'; // all | favorites | recent

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

function getFavs() { try { return JSON.parse(localStorage.getItem('uzexp_favs') || '[]'); } catch { return []; } }
function setFavs(v) { localStorage.setItem('uzexp_favs', JSON.stringify(v)); }
function getRecent() { try { return JSON.parse(localStorage.getItem('uzexp_recent') || '[]'); } catch { return []; } }
function addRecent(id) { const r = getRecent().filter(x => x !== id); r.unshift(id); localStorage.setItem('uzexp_recent', JSON.stringify(r.slice(0, 8))); }

function t(key) { const v = i18n[currentLang][key]; return typeof v === 'function' ? v : (v ?? key); }
function formatPrice(usd) { if (currency === 'UZS') { const uzs = Math.round(usd * USD_TO_UZS / 1000) * 1000; return `${uzs.toLocaleString('ru-RU')} so'm`; } return `$${usd}`; }
function mapUrlFromQuery(q) { return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`; }
function tgUrl(text) { return `https://t.me/${TELEGRAM_HANDLE}${text ? `?text=${encodeURIComponent(text)}` : ''}`; }
function waUrl(text) { return `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`; }
function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function imgTag(src, alt) { return `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"600\" height=\"360\"><rect width=\"100%\" height=\"100%\" fill=\"#e2e8f0\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"#64748b\" font-family=\"Arial\" font-size=\"18\">UzExperience</text></svg>`)}';">`; }

function updateURL() {
  const p = new URLSearchParams();
  const q = ($('#searchInput')?.value || '').trim(); const region = $('#cityFilter')?.value; const cat = $('#categoryFilter')?.value; const sort = $('#sortSelect')?.value;
  if (q) p.set('q', q); if (region && region !== 'all') p.set('region', region); if (cat && cat !== 'all') p.set('category', cat); if (sort && sort !== 'default') p.set('sort', sort); if (viewMode !== 'all') p.set('view', viewMode);
  const url = `${location.pathname}${p.toString() ? '?' + p.toString() : ''}${location.hash || ''}`;
  history.replaceState(null, '', url);
}
function readURL() {
  const p = new URLSearchParams(location.search);
  const q = p.get('q'); const region = p.get('region'); const cat = p.get('category'); const sort = p.get('sort'); const view = p.get('view');
  if (q && $('#searchInput')) $('#searchInput').value = q;
  if (sort && $('#sortSelect')) $('#sortSelect').value = sort;
  if (view === 'favorites' || view === 'recent') viewMode = view;
  return { region, cat };
}

function applyI18n() {
  document.documentElement.lang = currentLang;
  $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  $$('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));
  populateFilterOptions();
  render();
  renderPlaces();
  renderFaq();
  $('#globalTelegram').href = tgUrl('');
  const wa = $('#globalWhatsapp'); if (wa) wa.href = waUrl('');
  const ph = $('#globalPhone'); if (ph) ph.href = `tel:${PHONE_NUMBER}`;
}
function populateFilterOptions() {
  const regionSel = $('#cityFilter'); const catSel = $('#categoryFilter');
  const prevRegion = regionSel.value || 'all'; const prevCat = catSel.value || 'all';
  regionSel.innerHTML = `<option value="all">${t('filter_all')}</option>` + Object.keys(regionLabels).map(k => `<option value="${k}">${regionLabels[k][currentLang]}</option>`).join('');
  catSel.innerHTML = `<option value="all">${t('filter_all')}</option>` + Object.keys(categoryLabels).map(k => `<option value="${k}">${categoryLabels[k][currentLang]}</option>`).join('');
  if ([...regionSel.options].some(o => o.value === prevRegion)) regionSel.value = prevRegion;
  if ([...catSel.options].some(o => o.value === prevCat)) catSel.value = prevCat;
  $('#currencyToggle').value = currency;
}

function filteredExperiences() {
  const q = ($('#searchInput').value || '').trim().toLowerCase();
  const region = $('#cityFilter').value; const cat = $('#categoryFilter').value; const sort = $('#sortSelect')?.value || 'default';
  const favs = getFavs(); const recent = getRecent();
  let list = experiences.filter(exp => {
    if (viewMode === 'favorites' && !favs.includes(exp.id)) return false;
    if (viewMode === 'recent' && !recent.includes(exp.id)) return false;
    if (region !== 'all' && exp.region !== region) return false;
    if (cat !== 'all' && exp.category !== cat) return false;
    if (q) { const hay = [exp.title.uz,exp.title.ru,exp.title.en,exp.desc.uz,exp.desc.ru,exp.desc.en,regionLabels[exp.region].uz,regionLabels[exp.region].ru,regionLabels[exp.region].en].join(' ').toLowerCase(); if (!hay.includes(q)) return false; }
    return true;
  });
  if (sort === 'price_asc') list.sort((a,b)=>a.priceUSD-b.priceUSD);
  else if (sort === 'price_desc') list.sort((a,b)=>b.priceUSD-a.priceUSD);
  else if (sort === 'duration') list.sort((a,b)=>(a.durationHours||0)-(b.durationHours||0));
  else if (sort === 'name') list.sort((a,b)=>a.title[currentLang].localeCompare(b.title[currentLang]));
  if (viewMode === 'recent') list.sort((a,b)=>recent.indexOf(a.id)-recent.indexOf(b.id));
  return list;
}

function renderChips() {
  const chips = $('#activeChips'); if (!chips) return;
  const q = ($('#searchInput').value || '').trim(); const region = $('#cityFilter').value; const cat = $('#categoryFilter').value;
  const items = [];
  if (q) items.push({k:'q', label: `${t('filter_search')}: ${q}`});
  if (region !== 'all') items.push({k:'region', label: regionLabels[region][currentLang]});
  if (cat !== 'all') items.push({k:'category', label: categoryLabels[cat][currentLang]});
  if (viewMode === 'favorites') items.push({k:'view', label: t('favorites')});
  if (viewMode === 'recent') items.push({k:'view', label: t('recent')});
  chips.innerHTML = items.map(it => `<span class="chip">${escapeHtml(it.label)} <button type="button" data-chip="${it.k}" aria-label="remove">×</button></span>`).join('');
  chips.querySelectorAll('[data-chip]').forEach(b => b.addEventListener('click', () => {
    const k = b.dataset.chip;
    if (k==='q') $('#searchInput').value='';
    if (k==='region') $('#cityFilter').value='all';
    if (k==='category') $('#categoryFilter').value='all';
    if (k==='view') viewMode='all';
    render();
  }));
  $('#toggleFavorites')?.classList.toggle('active', viewMode==='favorites');
  $('#toggleRecent')?.classList.toggle('active', viewMode==='recent');
}

function renderSpotlight(regionKey) {
  const el = $('#regionSpotlight'); if (!el) return;
  if (regionKey === 'all' || !regionLabels[regionKey]) { el.classList.add('hidden'); el.innerHTML=''; return; }
  const place = famousPlaces.find(p => p.region === regionKey); const rname = regionLabels[regionKey][currentLang];
  const bg = place ? place.image : (experiences.find(e => e.region === regionKey)?.images?.[0] || '');
  const desc = place ? place.desc[currentLang] : ''; const tip = weatherTips[regionKey]?.[currentLang] || '';
  el.classList.remove('hidden');
  el.innerHTML = `${bg ? imgTag(bg, rname) : ''}<div class="spot-content" style="${bg?'':'background:linear-gradient(160deg,#0f766e,#134e4a);min-height:140px'}"><h3>${escapeHtml(t('spotlight_in')(rname))}</h3>${desc?`<p>${escapeHtml(desc)}</p>`:''}${tip?`<p><strong>${escapeHtml(t('weather'))}:</strong> ${escapeHtml(tip)}</p>`:''}<div class="spot-meta">${place?`<span class="tag">${escapeHtml(place.name[currentLang])}</span>`:''}<a class="tag" style="text-decoration:none" href="${mapUrlFromQuery(place?place.mapQuery:rname)}" target="_blank" rel="noopener"><i class="fa-solid fa-map-location-dot"></i> ${t('map')}</a></div></div>`;
  if (bg) el.querySelector('img')?.classList.add('spot-bg');
}

function render() {
  const list = filteredExperiences();
  const statCount = $('#statCount'); if (statCount) statCount.textContent = String(experiences.length);
  $('#resultsInfo').textContent = t('results')(list.length);
  renderSpotlight($('#cityFilter').value);
  renderChips();
  updateURL();
  const grid = $('#catalogGrid'); const empty = $('#emptyState'); const favs = getFavs();
  if (!list.length) { grid.innerHTML=''; empty.classList.remove('hidden'); return; }
  empty.classList.add('hidden');
  grid.innerHTML = list.map(exp => {
    const img = exp.images?.[0]; const fav = favs.includes(exp.id);
    return `<article class="card">
      <div class="card-media ${img?'has-image':''}">${img?imgTag(img,exp.title[currentLang]):''}<span class="card-badge">${regionLabels[exp.region][currentLang]}</span><span class="media-fallback"><i class="fa-solid ${categoryIcons[exp.category]||'fa-location-dot'}"></i></span></div>
      <div class="card-body">
        <h3>${escapeHtml(exp.title[currentLang])}</h3>
        <div class="badges"><span class="badge ok">${availabilityLabels[exp.availability]?.[currentLang]||''}</span><span class="badge">${categoryLabels[exp.category][currentLang]}</span></div>
        <div class="rating"><i class="fa-solid fa-star"></i> ${exp.rating} · ${t('reviews')}</div>
        <div class="meta"><span><i class="fa-solid fa-clock"></i> ${escapeHtml(exp.duration[currentLang])}</span><span><i class="fa-solid fa-user"></i> ${escapeHtml(exp.guide.name)}</span></div>
        <div class="price">${t('from')} ${formatPrice(exp.priceUSD)}</div>
        <div class="card-actions"><button class="btn ghost" data-detail="${exp.id}">${t('details')}</button><button class="icon-btn ${fav?'active':''}" data-fav="${exp.id}" aria-label="favorite"><i class="${fav?'fa-solid':'fa-regular'} fa-heart"></i></button></div>
      </div></article>`;
  }).join('');
  grid.querySelectorAll('[data-detail]').forEach(btn => btn.addEventListener('click', () => openDetail(Number(btn.dataset.detail))));
  grid.querySelectorAll('[data-fav]').forEach(btn => btn.addEventListener('click', () => { toggleFav(Number(btn.dataset.fav)); }));
}

function toggleFav(id) {
  const favs = getFavs(); const i = favs.indexOf(id); if (i>=0) favs.splice(i,1); else favs.push(id); setFavs(favs); render();
}

function renderPlaces() {
  const grid = $('#placesGrid'); if (!grid) return;
  grid.innerHTML = famousPlaces.map(p => `<article class="place-card">${imgTag(p.image,p.name[currentLang])}<div class="place-body"><div class="region">${regionLabels[p.region][currentLang]}</div><h4>${escapeHtml(p.name[currentLang])}</h4><p>${escapeHtml(p.desc[currentLang])}</p><a class="map-link" href="${mapUrlFromQuery(p.mapQuery)}" target="_blank" rel="noopener"><i class="fa-solid fa-map-location-dot"></i> ${t('map')}</a></div></article>`).join('');
}
function renderFaq() {
  const list = $('#faqList'); if (!list) return;
  list.innerHTML = faqs.map((f,i)=>`<div class="faq-item ${i===0?'open':''}"><button class="faq-q" type="button"><span>${escapeHtml(f.q[currentLang])}</span><i class="fa-solid fa-chevron-down"></i></button><p class="faq-a">${escapeHtml(f.a[currentLang])}</p></div>`).join('');
  list.querySelectorAll('.faq-q').forEach(btn => btn.addEventListener('click', ()=> btn.parentElement.classList.toggle('open')));
}

function openDetail(id) {
  const exp = experiences.find(e => e.id === id); if (!exp) return;
  addRecent(id);
  const modal = $('#detailModal'); const imgs = exp.images && exp.images.length ? exp.images : [];
  let gIdx = 0;
  const gallery = imgs.length ? `<div class="gallery" id="gallery">${imgTag(imgs[0],exp.title[currentLang])}<div class="hero-overlay"><span><i class="fa-solid fa-location-dot"></i> ${regionLabels[exp.region][currentLang]}</span></div>${imgs.length>1?`<div class="gallery-nav"><button type="button" data-g="-1"><i class="fa-solid fa-chevron-left"></i></button><button type="button" data-g="1"><i class="fa-solid fa-chevron-right"></i></button></div><div class="gallery-dots">${imgs.map((_,i)=>`<span class="${i===0?'active':''}"></span>`).join('')}</div>`:''}</div>` : '';
  const reviews = (exp.reviews||[]).map(r=>`<div class="review"><strong>${escapeHtml(r.n)} · <span class="rating"><i class="fa-solid fa-star"></i> ${exp.rating}</span></strong><p>${escapeHtml(r.t[currentLang])}</p></div>`).join('');
  const tip = weatherTips[exp.region]?.[currentLang] || '';
  $('#modalContent').innerHTML = `
    ${gallery}
    <div class="detail-head">
      <h3 id="modalTitle">${escapeHtml(exp.title[currentLang])}</h3>
      <div class="meta"><span><i class="fa-solid fa-location-dot"></i> ${regionLabels[exp.region][currentLang]}</span><span><i class="fa-solid fa-tag"></i> ${categoryLabels[exp.category][currentLang]}</span></div>
    </div>
    <div class="detail-tags"><span class="tag">${t('from')} ${formatPrice(exp.priceUSD)}</span><span class="tag">${availabilityLabels[exp.availability]?.[currentLang]||''}</span></div>
    <p class="detail-desc">${escapeHtml(exp.desc[currentLang])}</p>
    <div class="detail-grid">
      <div class="detail-item"><strong>${t('duration')}:</strong> ${escapeHtml(exp.duration[currentLang])}</div>
      <div class="detail-item"><strong>${t('price')}:</strong> ${t('from')} ${formatPrice(exp.priceUSD)}</div>
      <div class="detail-item"><strong>${t('meeting')}:</strong> ${escapeHtml(exp.meeting[currentLang])}</div>
      <div class="detail-item"><strong>${t('includes')}:</strong> ${escapeHtml(exp.includes[currentLang])}</div>
    </div>
    <div class="detail-box"><h4><i class="fa-solid fa-user"></i> ${t('guide')}: ${escapeHtml(exp.guide.name)}</h4><p><strong>${t('guide_langs')}:</strong> ${escapeHtml(exp.guide.langs)} · <strong>${t('guide_exp')}:</strong> ${escapeHtml(exp.guide.exp[currentLang])}</p><p><strong>${t('guide_spec')}:</strong> ${escapeHtml(exp.guide.spec[currentLang])}</p><p>${escapeHtml(exp.guide.bio[currentLang])}</p></div>
    ${tip?`<div class="detail-box"><h4><i class="fa-solid fa-cloud-sun"></i> ${t('weather')}</h4><p>${escapeHtml(tip)}</p></div>`:''}
    <div class="detail-box"><h4><i class="fa-solid fa-star"></i> ${t('reviews')} (${exp.rating})</h4><div class="reviews">${reviews||''}</div>
      <form class="review-form" id="reviewForm">
        <label class="full">${t('review_name')}<input id="rv_name" maxlength="80" /></label>
        <label class="full">${t('review_text')}<input id="rv_text" maxlength="300" /></label>
        <div class="review-actions full"><button class="btn ghost" type="submit"><i class="fa-solid fa-paper-plane"></i> ${t('review_send')}</button><span id="reviewMsg" class="review-msg"></span></div>
      </form>
    </div>
    <div class="detail-box"><a class="map-link" href="${mapUrlFromQuery(exp.mapQuery)}" target="_blank" rel="noopener"><i class="fa-solid fa-map-location-dot"></i> ${t('map')}</a></div>
    <p class="slots-note"><i class="fa-solid fa-circle-info"></i> ${escapeHtml(t('slots_note'))}</p>
    <form class="detail-form" id="bookForm">
      <label>${t('form_name')}<input id="bf_name" placeholder="${escapeHtml(t('form_name_ph'))}"></label>
      <label>${t('form_phone')}<input id="bf_phone" placeholder="${escapeHtml(t('form_phone_ph'))}"></label>
      <label>${t('form_people')}<input id="bf_people" type="number" min="1" placeholder="${escapeHtml(t('form_people_ph'))}"></label>
      <label>${t('form_date')}<input id="bf_date" type="date"></label>
    </form>
    <div class="detail-actions">
      <a class="btn primary" id="bookBtn" href="#" target="_blank" rel="noopener"><i class="fa-brands fa-telegram"></i> ${t('book_tg')}</a>
      <a class="btn ghost" id="bookWa" href="#" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> ${t('book_wa')}</a>
      ${BOOKING_FORM_URL ? `<a class="btn ghost" id="bookFormLink" href="#" target="_blank" rel="noopener"><i class="fa-solid fa-file-lines"></i> ${t('book_form')}</a>` : ''}
      ${PAYMENT_LINK ? `<a class="btn ghost" id="payLink" href="${escapeHtml(PAYMENT_LINK)}" target="_blank" rel="noopener"><i class="fa-solid fa-credit-card"></i> ${t('pay')}</a>` : ''}
      <button class="btn ghost" data-close="true" type="button">${t('close')}</button>
    </div>`;
  modal.classList.remove('hidden'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';

  function updateBookLinks(){
    const d = { title: exp.title[currentLang], place: regionLabels[exp.region][currentLang], date: $('#bf_date')?.value||'', name: $('#bf_name')?.value||'', phone: $('#bf_phone')?.value||'', people: $('#bf_people')?.value||'' };
    const msg = t('book_msg')(d);
    $('#bookBtn').href = (TELEGRAM_BOT_URL || tgUrl(msg));
    if (!TELEGRAM_BOT_URL) $('#bookBtn').href = tgUrl(msg);
    $('#bookWa').href = waUrl(msg);
    const fl = $('#bookFormLink');
    if (fl && BOOKING_FORM_URL) {
      const u = new URL(BOOKING_FORM_URL, location.href);
      u.searchParams.set('experience', d.title);
      u.searchParams.set('region', d.place);
      if (d.date) u.searchParams.set('date', d.date);
      if (d.name) u.searchParams.set('name', d.name);
      if (d.phone) u.searchParams.set('phone', d.phone);
      if (d.people) u.searchParams.set('people', d.people);
      fl.href = u.toString();
    }
  }
  updateBookLinks();
  modal.querySelectorAll('#bookForm input').forEach(i=>i.addEventListener('input', updateBookLinks));
  modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
  // review submission (real reviews require backend endpoint)
  const rf = modal.querySelector('#reviewForm');
  rf?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const msgEl = modal.querySelector('#reviewMsg');
    const payload = { experience_id: exp.id, name: (modal.querySelector('#rv_name')?.value||'').trim(), text: (modal.querySelector('#rv_text')?.value||'').trim(), at: new Date().toISOString() };
    if (!payload.name || !payload.text) { if (msgEl) msgEl.textContent = ''; return; }
    if (!REVIEW_ENDPOINT) { if (msgEl) msgEl.textContent = t('review_need_backend'); return; }
    try {
      const res = await fetch(REVIEW_ENDPOINT, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload) });
      if (msgEl) msgEl.textContent = res.ok ? t('review_ok') : t('review_need_backend');
      if (res.ok) rf.reset();
    } catch { if (msgEl) msgEl.textContent = t('review_need_backend'); }
  });
  // gallery
  if (imgs.length>1) {
    const g = modal.querySelector('#gallery');
    const dots = g.querySelectorAll('.gallery-dots span');
    const showG = (n)=>{ gIdx=(n+imgs.length)%imgs.length; const im=g.querySelector('img'); im.src=imgs[gIdx]; im.alt=exp.title[currentLang]; dots.forEach((d,i)=>d.classList.toggle('active',i===gIdx)); };
    g.querySelectorAll('[data-g]').forEach(b=>b.addEventListener('click',()=>showG(gIdx+Number(b.dataset.g))));
  }
}

function closeModal(){ const modal=$('#detailModal'); modal.classList.add('hidden'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; if(viewMode==='recent') render(); }

async function loadSiteConfig(){
  try {
    const res = await fetch('content/site.json', {cache:'no-store'});
    if (!res.ok) return;
    const c = await res.json();
    if (c.telegram_handle) TELEGRAM_HANDLE = c.telegram_handle;
    if (c.whatsapp_number) WHATSAPP_NUMBER = c.whatsapp_number;
    if (c.phone_number) PHONE_NUMBER = c.phone_number;
    if (typeof c.booking_form_url === 'string') BOOKING_FORM_URL = c.booking_form_url;
    if (typeof c.telegram_bot_url === 'string') TELEGRAM_BOT_URL = c.telegram_bot_url;
    if (typeof c.payment_link === 'string') PAYMENT_LINK = c.payment_link;
    if (typeof c.review_endpoint === 'string') REVIEW_ENDPOINT = c.review_endpoint;
  } catch {}
}
async function init() {
  await loadSiteConfig();
  $('#menuToggle')?.addEventListener('click', () => $('#nav').classList.toggle('open'));
  $$('#nav a').forEach(a => a.addEventListener('click', () => $('#nav').classList.remove('open')));
  $$('.lang-btn').forEach(btn => btn.addEventListener('click', () => { currentLang = btn.dataset.lang; localStorage.setItem('uzexp_lang', currentLang); applyI18n(); }));
  const initState = readURL();
  populateFilterOptions();
  if (initState.region && [...$('#cityFilter').options].some(o=>o.value===initState.region)) $('#cityFilter').value = initState.region;
  if (initState.cat && [...$('#categoryFilter').options].some(o=>o.value===initState.cat)) $('#categoryFilter').value = initState.cat;
  ['searchInput','cityFilter','categoryFilter','sortSelect'].forEach(id => { const el=document.getElementById(id); if(!el) return; el.addEventListener('input', render); el.addEventListener('change', render); });
  $('#currencyToggle')?.addEventListener('change', (e) => { currency = e.target.value; localStorage.setItem('uzexp_currency', currency); render(); });
  $('#clearFilters')?.addEventListener('click', ()=>{ $('#searchInput').value=''; $('#cityFilter').value='all'; $('#categoryFilter').value='all'; if($('#sortSelect')) $('#sortSelect').value='default'; viewMode='all'; render(); });
  $('#toggleFavorites')?.addEventListener('click', ()=>{ viewMode = viewMode==='favorites'?'all':'favorites'; render(); });
  $('#toggleRecent')?.addEventListener('click', ()=>{ viewMode = viewMode==='recent'?'all':'recent'; render(); });
  $('#modalClose')?.addEventListener('click', closeModal);
  $('#detailModal')?.addEventListener('click', (e) => { if (e.target.dataset.close) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
  // back to top
  const btt = $('#backToTop');
  window.addEventListener('scroll', ()=>{ if(!btt) return; btt.classList.toggle('hidden', window.scrollY < 500); });
  btt?.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
  applyI18n();
}
document.addEventListener('DOMContentLoaded', init);
