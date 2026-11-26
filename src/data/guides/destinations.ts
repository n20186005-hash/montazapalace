import type { Guide } from './types';

export const destinationGuides: Guide[] = [
  {
    slug: 'royal-jewelry-museum', group: 'nearby',
    destination: { map: 'https://www.google.com/maps/search/?api=1&query=Royal+Jewelry+Museum+Alexandria', source: 'https://egymonuments.gov.eg/museums/royal-jewelry-museum/', addressSource: 'https://egymonuments.gov.eg/media/8990/royal-jewelry_ar.pdf', checked: '2026-11-26' },
    en: {
      title: 'Royal Jewelry Museum in Alexandria: Visit from Montaza', h1: 'Royal Jewelry Museum',
      description: 'Plan a separate visit to the Royal Jewelry Museum in Zizinya: collections, opening hours, entry rules and the journey from Montaza.',
      lead: 'In Zizinya, the Royal Jewelry Museum occupies the former palace of Princess Fatma al-Zahra. Its royal collections and decorated rooms make an indoor contrast to Montaza’s gardens. Treat it as a separate journey across Alexandria.',
      quick: [['Address', '27 Ahmed Yehia Street, Zizinya'], ['Official hours', '09:00–17:00'], ['Last ticket', '16:00'], ['Ramadan hours', '09:00–15:00'], ['Ramadan last ticket', '14:00']],
      sections: [
        { h: 'What you will see', p: ['The Ministry of Tourism and Antiquities describes two palace wings connected by a corridor, with paintings, gilded ceilings and mosaics. Exhibits include royal jewellery, a gold chessboard and other possessions of the Muhammad Ali dynasty.'] },
        { h: 'Entry and planning', p: ['The ministry lists daily opening from 09:00 to 17:00 and a 16:00 ticket-window closure. Its Ramadan schedule is shorter. Check the official page for current prices and any changes before setting out; admission here is separate from Montaza.', 'Avoid bringing large bags. Food and drink are not allowed in galleries except small water bottles. Follow staff instructions and keep children with an adult.'] },
        { h: 'Getting there from Montaza', p: ['Use the museum-specific map search and ask a taxi or ride-hail driver for the Royal Jewelry Museum in Zizinya. Confirm the visitor entrance and drop-off point with the museum or driver. Traffic and the open Montaza gate affect the journey; allow time for the return and do not assume a fixed public-transport service.', 'The ministry lists parking and a café among its services. Confirm availability on the day before relying on either.'] },
        { h: 'Photography', p: ['The museum asks visitors not to photograph other visitors or staff, use flash or use a tripod without the relevant commercial permission. Ask staff if your equipment or intended use needs approval.'] },
      ],
      faq: [['Is this inside Montaza?', 'No. It is a separate museum in Zizinya, so it requires its own journey and admission.'], ['When is the last ticket?', 'The ministry lists 16:00 normally and 14:00 during Ramadan; confirm any changes before travelling.'], ['Can I bring food into the galleries?', 'The ministry prohibits food and drinks in the galleries, except small water bottles.'], ['Can I use flash?', 'No. The ministry asks visitors not to use flash photography.']],
      related: ['vs-royal-jewelry-museum', 'nearby-attractions', 'alexandria-national-museum'],
    },
    ar: {
      title: 'متحف المجوهرات الملكية بالإسكندرية: زيارة من المنتزه', h1: 'متحف المجوهرات الملكية',
      description: 'خطط لزيارة مستقلة إلى متحف المجوهرات الملكية في زيزينيا: المقتنيات والمواعيد وقواعد الدخول والوصول من المنتزه.',
      lead: 'يقع متحف المجوهرات الملكية في زيزينيا داخل قصر الأميرة فاطمة الزهراء السابق. تمنحك المقتنيات الملكية والقاعات المزخرفة تجربة داخلية مختلفة عن حدائق المنتزه. خصص له مشواراً مستقلاً داخل الإسكندرية.',
      quick: [['العنوان', '٢٧ شارع أحمد يحيى، زيزينيا'], ['المواعيد الرسمية', '09:00–17:00'], ['آخر تذكرة', '16:00'], ['مواعيد رمضان', '09:00–15:00'], ['آخر تذكرة في رمضان', '14:00']],
      sections: [
        { h: 'ماذا تشاهد؟', p: ['تصف وزارة السياحة والآثار جناحين يربط بينهما ممر، وتزيّن القصر لوحات وأسقف مذهبة وفسيفساء. تشمل المعروضات مجوهرات ملكية ولوحة شطرنج ذهبية ومقتنيات من أسرة محمد علي.'] },
        { h: 'الدخول وترتيب الزيارة', p: ['تعرض الوزارة العمل يومياً من 09:00 إلى 17:00 وإغلاق شباك التذاكر في 16:00، مع مواعيد أقصر في رمضان. راجع صفحتها للتعريفة الحالية وأي تغيير قبل التحرك؛ تذكرة المتحف مستقلة عن المنتزه.', 'تجنب الحقائب الكبيرة. لا يُسمح بالطعام والشراب في قاعات العرض باستثناء زجاجات المياه الصغيرة. اتبع تعليمات العاملين ورافق الأطفال.'] },
        { h: 'الوصول من المنتزه', p: ['استخدم بحث الخريطة الخاص بالمتحف واطلب من سائق التاكسي أو تطبيق النقل متحف المجوهرات الملكية في زيزينيا. أكد مدخل الزوار ونقطة النزول مع المتحف أو السائق. تؤثر حركة المرور وبوابة المنتزه المفتوحة في الرحلة؛ اترك وقتاً للعودة ولا تفترض تشغيل خط نقل عام معين.', 'تدرج الوزارة موقف سيارات ومقهى ضمن الخدمات؛ تأكد من إتاحتهما يوم الزيارة قبل الاعتماد عليهما.'] },
        { h: 'التصوير', p: ['يطلب المتحف عدم تصوير الزوار أو العاملين، وعدم استخدام الفلاش أو الحامل دون التصريح المناسب للتصوير التجاري. اسأل العاملين إذا كان استخدامك أو معداتك يحتاج إلى إذن.'] },
      ],
      faq: [['هل يقع داخل المنتزه؟', 'لا، هو متحف مستقل في زيزينيا ويحتاج إلى مشوار وتذكرة منفصلين.'], ['متى آخر تذكرة؟', 'تذكر الوزارة الساعة 16:00 عادةً و14:00 في رمضان؛ تأكد من أي تغيير قبل السفر.'], ['هل أدخل بالطعام إلى القاعات؟', 'تمنع الوزارة الطعام والشراب داخل القاعات، باستثناء زجاجات المياه الصغيرة.'], ['هل يسمح بالفلاش؟', 'لا، تطلب الوزارة عدم استخدام الفلاش في التصوير.']],
      related: ['vs-royal-jewelry-museum', 'nearby-attractions', 'alexandria-national-museum'],
    },
  },
  {
    slug: 'alexandria-national-museum', group: 'nearby',
    destination: { map: 'https://www.google.com/maps/search/?api=1&query=Alexandria+National+Museum', source: 'https://egymonuments.gov.eg/ar/museums/alexandria-national-museum/', addressSource: 'https://sis.gov.eg/en/egypt/tourism/cultural-tourism/museums/alexandria-national-museum-1/', checked: '2026-11-26' },
    en: {
      title: 'Alexandria National Museum: Visitor Guide from Montaza', h1: 'Alexandria National Museum',
      description: 'Visit Alexandria National Museum separately from Montaza: collections, official hours, entry rules and practical arrival advice.',
      lead: 'Alexandria National Museum is an independent museum in the city, housed in a former palace. Its collections span Egyptian history and include finds from underwater excavations in Abu Qir Bay. Plan a separate trip from Montaza.',
      quick: [['Location', 'El Horreya Road, Alexandria'], ['Official hours', '09:00–17:00'], ['Last ticket', '16:00'], ['Ramadan hours', '09:00–15:00'], ['Ramadan last ticket', '14:00']],
      sections: [
        { h: 'Inside the museum', p: ['According to the Ministry of Tourism and Antiquities, the former palace of Asaad Bassili Pasha opened as a museum in 2003. Displays cover periods from prehistory to modern times, with coins, Islamic-era arms and objects recovered from Abu Qir Bay.'] },
        { h: 'Hours and admission', p: ['The ministry lists 09:00–17:00 daily, with the ticket window closing at 16:00. During Ramadan it lists 09:00–15:00 and last tickets at 14:00. Check its official page for current prices and changes; this museum has its own admission.', 'Large bags, umbrellas and sharp objects are not allowed in galleries. The museum asks visitors to deposit restricted items and to accompany children.'] },
        { h: 'Arriving from Montaza', p: ['Search for Alexandria National Museum using the dedicated map link, then arrange a taxi or ride-hail journey from the Montaza gate open that day. Confirm the public entrance and drop-off point with the museum or driver, and allow for city traffic and a return trip. Check any public-transport route with its operator before relying on it.', 'The ministry lists toilets, a lift and parking among its facilities; confirm their availability and the accessible route for your visit.'] },
        { h: 'In the galleries', p: ['Mobile-phone photography is listed as free, without flash. Commercial photography needs prior permission. Food and drinks are prohibited in galleries except small water bottles; do not touch the exhibits.'] },
      ],
      faq: [['Is it part of Montaza?', 'No. The museum is a separate destination with its own admission.'], ['When should I arrive?', 'Allow time before the listed 16:00 last ticket; in Ramadan the ministry lists 14:00. Confirm the schedule for your date.'], ['Are toilets available?', 'The ministry lists toilets among its services. Confirm access on the day.'], ['Can I photograph exhibits?', 'The ministry permits mobile-phone photography without flash; commercial use requires prior permission.']],
      related: ['royal-jewelry-museum', 'nearby-attractions', 'how-to-get-there'],
    },
    ar: {
      title: 'متحف الإسكندرية القومي: دليل الزيارة من المنتزه', h1: 'متحف الإسكندرية القومي',
      description: 'زيارة مستقلة إلى متحف الإسكندرية القومي من المنتزه: المجموعات والمواعيد الرسمية وقواعد الدخول ونصائح الوصول.',
      lead: 'متحف الإسكندرية القومي متحف مستقل في المدينة داخل قصر سابق. تمتد مجموعاته عبر التاريخ المصري، وتضم اكتشافات من حفائر خليج أبي قير الغارقة. خطط له كمشوار منفصل عن المنتزه.',
      quick: [['الموقع', 'طريق الحرية، الإسكندرية'], ['المواعيد الرسمية', '09:00–17:00'], ['آخر تذكرة', '16:00'], ['مواعيد رمضان', '09:00–15:00'], ['آخر تذكرة في رمضان', '14:00']],
      sections: [
        { h: 'داخل المتحف', p: ['توضح وزارة السياحة والآثار أن قصر أسعد باسيلي باشا السابق افتتح متحفاً عام 2003. يغطي العرض فترات من ما قبل التاريخ إلى العصر الحديث، ويضم عملات وأسلحة من العصر الإسلامي وآثاراً غارقة من خليج أبي قير.'] },
        { h: 'المواعيد والدخول', p: ['تعرض الوزارة العمل يومياً من 09:00 إلى 17:00 وإغلاق شباك التذاكر في 16:00. وفي رمضان تعرض 09:00–15:00 وآخر تذكرة في 14:00. راجع صفحتها للأسعار الحالية وأي تغييرات؛ للمتحف تذكرة مستقلة.', 'لا يُسمح بالحقائب الكبيرة والمظلات والأشياء الحادة داخل القاعات. يطلب المتحف إيداع الأشياء المحظورة ومرافقة الأطفال.'] },
        { h: 'الوصول من المنتزه', p: ['ابحث عن متحف الإسكندرية القومي من رابط الخريطة الخاص به، ثم رتب تاكسي أو سيارة عبر تطبيق من بوابة المنتزه المفتوحة يوم الزيارة. أكد مدخل الزوار ونقطة النزول مع المتحف أو السائق، واترك وقتاً لزحام المدينة والعودة. تحقق من أي خط نقل عام لدى مشغله قبل الاعتماد عليه.', 'تدرج الوزارة دورات مياه ومصعداً وموقف سيارات ضمن الخدمات؛ أكد إتاحتها والمسار المناسب لاحتياجاتك قبل الزيارة.'] },
        { h: 'في قاعات العرض', p: ['تذكر الوزارة أن التصوير بالهاتف مجاني دون فلاش، وأن التصوير التجاري يحتاج إلى إذن مسبق. يمنع الطعام والشراب في القاعات باستثناء زجاجات المياه الصغيرة، ويجب عدم لمس المعروضات.'] },
      ],
      faq: [['هل المتحف جزء من المنتزه؟', 'لا، هو وجهة مستقلة بتذكرة خاصة.'], ['متى أصل؟', 'اترك وقتاً قبل آخر تذكرة المدرجة في 16:00؛ وفي رمضان تذكر الوزارة 14:00. أكد مواعيد يومك.'], ['هل توجد دورات مياه؟', 'تدرجها الوزارة ضمن الخدمات؛ تأكد من إتاحتها يوم الزيارة.'], ['هل يمكن تصوير المعروضات؟', 'تسمح الوزارة بتصوير الهاتف دون فلاش؛ أما الاستخدام التجاري فيحتاج إلى إذن مسبق.']],
      related: ['royal-jewelry-museum', 'nearby-attractions', 'how-to-get-there'],
    },
  },
];
