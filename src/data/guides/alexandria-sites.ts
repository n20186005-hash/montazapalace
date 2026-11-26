import type { Guide } from './types';

export const alexandriaSites: Guide[] = [
  {
    slug: 'qaitbay-citadel', group: 'nearby',
    destination: { map: 'https://www.google.com/maps/search/?api=1&query=Qaitbay+Citadel+Alexandria', source: 'https://egymonuments.gov.eg/ar/monuments/qaitbay-fort/', addressSource: 'https://egymonuments.gov.eg/en/news/opening-of-the-qaitbay-citadel-visitor-center-in-alexandria/', checked: '2026-11-26' },
    en: {
      title: 'Qaitbay Citadel, Alexandria: Visiting from Montaza', h1: 'Qaitbay Citadel',
      description: 'Plan a separate trip from Montaza to Qaitbay Citadel in Anfoushi: the fort, official hours, entrance and visitor centre.',
      lead: 'Qaitbay Citadel stands at the eastern tip of the former Pharos island in Anfoushi, across Alexandria from Montaza. The fifteenth-century coastal fort is a separate ticketed visit, not a walk within the Montaza estate.',
      quick: [['Location', 'Anfoushi, Alexandria'], ['Ministry listing', '09:00–18:00 daily']],
      sections: [
        { h: 'What to see', p: ['The Ministry of Tourism and Antiquities describes a limestone fort built by Sultan Qaitbay on the site of the ancient lighthouse. Its entrance leads to a courtyard and a three-storey main tower. A visitor centre in the tower presents Alexandria’s defensive history with Arabic and English panels. Ask staff which spaces are open on your visit.'] },
        { h: 'Hours and admission', p: ['The ministry lists 09:00–18:00 daily and separate Egyptian and foreign visitor tariffs. Check the official page or ticket desk for the current charge, last entry and any temporary restrictions before travelling; Montaza admission does not cover the citadel.'] },
        { h: 'From Montaza to the entrance', p: ['Use the citadel’s map search when arranging a taxi or ride-hail trip from the Montaza gate open that day. Confirm the visitor entrance and permitted drop-off with the driver or site staff. Cross-city traffic makes a fixed journey time unreliable; plan the return separately.', 'The fort is exposed to coastal weather. Bring water and sun protection, wear comfortable shoes and ask staff about steps and the accessible route before relying on it. Do not assume parking or toilets are available.'] },
      ],
      faq: [['Is Qaitbay inside Montaza?', 'No. It is a separate fort in Anfoushi, across the city from the Montaza estate.'], ['When is it open?', 'The ministry lists 09:00–18:00 every day; confirm the current schedule and last entry before setting out.'], ['Is the ancient lighthouse still standing?', 'The ministry says the fort was built on the lighthouse site; the present building is the later fort.'], ['Is there a visitor centre?', 'The ministry reports a centre in the main tower with bilingual panels. Ask about access on the day.']],
      related: ['kom-el-dikka', 'graeco-roman-museum', 'nearby-attractions'],
    },
    ar: {
      title: 'قلعة قايتباي بالإسكندرية: زيارة من المنتزه', h1: 'قلعة قايتباي',
      description: 'خطط لمشوار مستقل من المنتزه إلى قلعة قايتباي بالأنفوشي: القلعة والمواعيد الرسمية والمدخل ومركز الزوار.',
      lead: 'تقع قلعة قايتباي عند الطرف الشرقي لجزيرة فاروس القديمة في الأنفوشي، بعيداً عن المنتزه عبر مدينة الإسكندرية. القلعة الساحلية من القرن الخامس عشر زيارة مستقلة بتذكرة خاصة، وليست نزهة داخل حدائق المنتزه.',
      quick: [['الموقع', 'الأنفوشي، الإسكندرية'], ['مواعيد الوزارة', '09:00–18:00 يومياً']],
      sections: [
        { h: 'ماذا تشاهد؟', p: ['تصف وزارة السياحة والآثار قلعة من الحجر الجيري بناها السلطان قايتباي على موقع فنار الإسكندرية القديم. يؤدي مدخلها إلى فناء وبرج رئيسي من ثلاثة طوابق. وتذكر الوزارة مركز زوار داخل البرج يعرض تاريخ الدفاع عن المدينة بلوحات عربية وإنجليزية. اسأل العاملين عن المساحات المفتوحة يوم زيارتك.'] },
        { h: 'المواعيد والتذاكر', p: ['تعرض الوزارة العمل يومياً من 09:00 إلى 18:00 وتعريفات مختلفة للمصريين والأجانب. راجع صفحتها أو شباك التذاكر للسعر الحالي وآخر دخول وأي قيود مؤقتة قبل التحرك؛ تذكرة المنتزه لا تشمل القلعة.'] },
        { h: 'من المنتزه إلى المدخل', p: ['استخدم رابط بحث القلعة عند ترتيب تاكسي أو سيارة عبر تطبيق من بوابة المنتزه المفتوحة يوم الزيارة. أكد مدخل الزوار ونقطة النزول المسموحة مع السائق أو العاملين. يصعب ضمان مدة الرحلة عبر المدينة بسبب المرور؛ رتب العودة بصورة مستقلة.', 'الموقع مكشوف للطقس الساحلي. احمل ماءً ووسيلة للوقاية من الشمس وانتعل حذاءً مريحاً، واسأل العاملين عن الدرج والمسار المناسب لاحتياجاتك. لا تفترض توفر موقف أو دورات مياه.'] },
      ],
      faq: [['هل القلعة داخل المنتزه؟', 'لا، هي قلعة مستقلة في الأنفوشي على الجانب الآخر من المدينة.'], ['متى تفتح؟', 'تعرض الوزارة 09:00–18:00 يومياً؛ أكد المواعيد وآخر دخول قبل الذهاب.'], ['هل الفنار القديم قائم؟', 'تذكر الوزارة أن القلعة بنيت على موقع الفنار؛ المبنى الموجود اليوم هو القلعة اللاحقة.'], ['هل يوجد مركز زوار؟', 'تذكر الوزارة مركزاً في البرج الرئيسي بلوحات باللغتين. اسأل عن إتاحته يوم الزيارة.']],
      related: ['kom-el-dikka', 'graeco-roman-museum', 'nearby-attractions'],
    },
  },
  {
    slug: 'kom-el-dikka', group: 'nearby',
    destination: { map: 'https://www.google.com/maps/search/?api=1&query=Kom+el+Dikka+Roman+Theatre+Alexandria', source: 'https://egymonuments.gov.eg/ar/archaeological-sites/kom-el-dikka/', addressSource: 'https://egymonuments.gov.eg/en/archaeological-sites/kom-el-dikka/', checked: '2026-11-26' },
    en: {
      title: 'Kom el-Dikka and the Roman Theatre: Visit from Montaza', h1: 'Kom el-Dikka archaeological site',
      description: 'Visit Kom el-Dikka in central Alexandria: the Roman theatre, archaeological remains, official hours and travel from Montaza.',
      lead: 'Kom el-Dikka is an archaeological site in central Alexandria, centred on the Roman theatre. It is a separate outdoor visit from Montaza, with remains of an urban quarter as well as the theatre itself.',
      quick: [['Location', 'Central Alexandria'], ['Ministry listing', '09:00–17:00 daily']],
      sections: [
        { h: 'Beyond the theatre', p: ['The Ministry of Tourism and Antiquities describes remains from Roman and Byzantine Alexandria, including the tiered theatre, baths, lecture halls and mosaics at the Villa of the Birds. Ask which areas are accessible that day rather than assuming every structure is open.'] },
        { h: 'Entry and timing', p: ['The ministry lists 09:00–17:00 each day and separate ticket categories. Check its page or the ticket desk for the current price and last entry. The site has its own ticket and is not included with Montaza.'] },
        { h: 'Arriving from Montaza', p: ['Search specifically for Kom el-Dikka Roman Theatre in Alexandria and arrange a taxi or ride-hail journey from the open Montaza gate. Confirm the public entrance and drop-off with your driver or the site; the map marker alone does not establish the gate. Allow for traffic and arrange the return separately.', 'This is an outdoor archaeological site. Carry water and sun protection, wear comfortable footwear and check surfaces, steps and accessible routes with staff. Do not rely on unverified parking or toilets.'] },
      ],
      faq: [['Is the Roman theatre inside Montaza?', 'No. Kom el-Dikka is a separate archaeological site in central Alexandria.'], ['Does the site contain more than the theatre?', 'Yes. The ministry describes baths, lecture halls and mosaics as well; ask which areas are open.'], ['What hours are listed?', 'The ministry lists 09:00–17:00 daily. Confirm last entry and any changes before travel.'], ['Can I use a Montaza ticket?', 'No. Plan for separate admission and confirm its current cost at the site.']],
      related: ['qaitbay-citadel', 'graeco-roman-museum', 'alexandria-national-museum'],
    },
    ar: {
      title: 'كوم الدكة والمسرح الروماني: زيارة من المنتزه', h1: 'منطقة كوم الدكة الأثرية',
      description: 'زيارة كوم الدكة بوسط الإسكندرية: المسرح الروماني وبقايا الموقع والمواعيد الرسمية والوصول من المنتزه.',
      lead: 'كوم الدكة موقع أثري في وسط الإسكندرية يتوسطه المسرح الروماني. وهو زيارة خارجية مستقلة عن المنتزه، تضم بقايا حي قديم إلى جانب المسرح.',
      quick: [['الموقع', 'وسط الإسكندرية'], ['مواعيد الوزارة', '09:00–17:00 يومياً']],
      sections: [
        { h: 'ما وراء المسرح', p: ['تصف وزارة السياحة والآثار بقايا من الإسكندرية الرومانية والبيزنطية، منها المسرح المدرج والحمامات وقاعات المحاضرات وفسيفساء فيلا الطيور. اسأل عن المناطق المتاحة يوم الزيارة، ولا تفترض فتح كل المباني.'] },
        { h: 'الدخول والوقت', p: ['تعرض الوزارة العمل من 09:00 إلى 17:00 يومياً وفئات مختلفة للتذاكر. راجع صفحتها أو شباك الدخول للسعر الحالي وآخر دخول. للموقع تذكرة مستقلة لا تشملها تذكرة المنتزه.'] },
        { h: 'الوصول من المنتزه', p: ['ابحث تحديداً عن المسرح الروماني بكوم الدكة في الإسكندرية، ورتب تاكسي أو سيارة عبر تطبيق من بوابة المنتزه المفتوحة. أكد مدخل الجمهور ونقطة النزول مع السائق أو الموقع؛ علامة الخريطة وحدها لا تثبت مكان البوابة. اترك وقتاً للمرور ورتب العودة بشكل مستقل.', 'الموقع الأثري في الهواء الطلق. احمل الماء ووسيلة للوقاية من الشمس وانتعل حذاءً مريحاً، واسأل العاملين عن الأرضيات والدرج والمسار المناسب. لا تعتمد على موقف أو دورات مياه لم تتأكد من إتاحتها.'] },
      ],
      faq: [['هل المسرح داخل المنتزه؟', 'لا، كوم الدكة موقع أثري مستقل في وسط الإسكندرية.'], ['هل يضم الموقع أكثر من المسرح؟', 'نعم، تذكر الوزارة الحمامات وقاعات المحاضرات والفسيفساء أيضاً؛ اسأل عن المناطق المفتوحة.'], ['ما المواعيد المدرجة؟', 'تعرض الوزارة 09:00–17:00 يومياً. أكد آخر دخول وأي تغيير قبل السفر.'], ['هل تكفي تذكرة المنتزه؟', 'لا، خطط لتذكرة مستقلة وتحقق من سعرها الحالي عند الموقع.']],
      related: ['qaitbay-citadel', 'graeco-roman-museum', 'alexandria-national-museum'],
    },
  },
  {
    slug: 'graeco-roman-museum', group: 'nearby',
    destination: { map: 'https://www.google.com/maps/search/?api=1&query=Graeco+Roman+Museum+Alexandria', source: 'https://egymonuments.gov.eg/ar/museums/graeco-roman-museum/', addressSource: 'https://egymonuments.gov.eg/media/8971/grecoroman_ar.pdf', checked: '2026-11-26' },
    en: {
      title: 'Graeco-Roman Museum, Alexandria: Guide from Montaza', h1: 'Graeco-Roman Museum',
      description: 'Plan a separate Graeco-Roman Museum visit from Montaza: the collection, official schedules, accessible facilities and travel.',
      lead: 'Alexandria’s Graeco-Roman Museum presents the archaeology and civilization of Egypt’s Greek and Roman periods. Its indoor galleries are a separate destination from Montaza’s gardens, requiring a cross-city journey and admission.',
      quick: [['Place', 'Graeco-Roman Museum, Alexandria'], ['Sunday–Thursday', '09:00–17:00'], ['Friday–Saturday', '09:00–20:00'], ['Ramadan', '09:00–16:00']],
      sections: [
        { h: 'The museum and collection', p: ['The Ministry of Tourism and Antiquities traces the museum’s foundation to 1892 and its purpose-built neoclassical building to 1895. Its galleries focus on Egypt during the Greek and Roman eras. The ministry’s illustrated brochure provides a gallery overview.'] },
        { h: 'Hours need a final check', p: ['The ministry’s Arabic visitor guidance lists Sunday–Thursday 09:00–17:00, with last tickets at 16:30, and Friday–Saturday 09:00–20:00, with last tickets at 19:00. It lists 09:00–16:00 during Ramadan, last ticket 15:00. Its English wording conflicts over the evening days, so confirm the schedule directly before travelling. Check the current ticket price separately.'] },
        { h: 'From Montaza and access', p: ['Use the museum-specific map search for a taxi or ride-hail trip from the Montaza gate open that day. Confirm the visitor entrance and drop-off with the driver or museum, allow for traffic and plan the return; the map search is not a verified gate.', 'The ministry lists a ramped entrance, accessible toilet, lift, toilets and café. Confirm that the facilities and route you need are available on your visit.'] },
      ],
      faq: [['Is it the same as Alexandria National Museum?', 'No. They are separate museums with different collections and admissions.'], ['Which days have evening hours?', 'The Arabic ministry guidance lists Friday and Saturday, but the English text conflicts; confirm directly before going.'], ['What are Ramadan hours?', 'The ministry lists 09:00–16:00 with last ticket at 15:00; confirm changes for your date.'], ['Is there an accessible entrance?', 'The ministry lists a ramped entrance and lift; contact the museum to confirm the route and current availability.']],
      related: ['alexandria-national-museum', 'kom-el-dikka', 'qaitbay-citadel'],
    },
    ar: {
      title: 'المتحف اليوناني الروماني بالإسكندرية: دليل من المنتزه', h1: 'المتحف اليوناني الروماني',
      description: 'خطط لزيارة مستقلة إلى المتحف اليوناني الروماني من المنتزه: المجموعات والمواعيد الرسمية والخدمات والوصول.',
      lead: 'يعرض المتحف اليوناني الروماني بالإسكندرية آثار مصر وحضارتها في العصرين اليوناني والروماني. قاعاته الداخلية وجهة مستقلة عن حدائق المنتزه، تحتاج إلى مشوار عبر المدينة وتذكرة خاصة.',
      quick: [['المكان', 'المتحف اليوناني الروماني، الإسكندرية'], ['الأحد–الخميس', '09:00–17:00'], ['الجمعة–السبت', '09:00–20:00'], ['رمضان', '09:00–16:00']],
      sections: [
        { h: 'المتحف والمجموعات', p: ['ترجع وزارة السياحة والآثار تأسيس المتحف إلى عام 1892 وافتتاح مبناه المخصص ذي الطراز الكلاسيكي الجديد إلى 1895. يركز العرض على مصر في العصرين اليوناني والروماني، وتقدم مطوية الوزارة المصورة لمحة عن القاعات.'] },
        { h: 'أكد المواعيد قبل التحرك', p: ['تذكر إرشادات الوزارة العربية الأحد إلى الخميس من 09:00 إلى 17:00 وآخر تذكرة 16:30، والجمعة والسبت من 09:00 إلى 20:00 وآخر تذكرة 19:00. وفي رمضان تذكر 09:00–16:00 وآخر تذكرة 15:00. تختلف صياغة الصفحة الإنجليزية بشأن أيام المساء؛ أكد المواعيد مباشرة قبل السفر وتحقق من سعر التذكرة الحالي.'] },
        { h: 'الوصول من المنتزه والخدمات', p: ['استخدم بحث الخريطة الخاص بالمتحف لترتيب تاكسي أو سيارة عبر تطبيق من بوابة المنتزه المفتوحة يوم الزيارة. أكد مدخل الزوار ونقطة النزول مع السائق أو المتحف، واترك وقتاً للمرور والعودة؛ بحث الخريطة لا يثبت مكان البوابة.', 'تدرج الوزارة مدخلاً ممهداً وحماماً مهيأً ومصعداً ودورات مياه وكافتيريا. أكد توفر المرافق والمسار الذي تحتاجه قبل الزيارة.'] },
      ],
      faq: [['هل هو متحف الإسكندرية القومي؟', 'لا، هما متحفان مستقلان بمجموعات وتذاكر مختلفة.'], ['ما أيام الزيارة المسائية؟', 'تذكر الإرشادات العربية الجمعة والسبت، لكن النص الإنجليزي مختلف؛ أكد المواعيد مباشرة قبل الذهاب.'], ['ما مواعيد رمضان؟', 'تعرض الوزارة 09:00–16:00 وآخر تذكرة 15:00؛ تأكد من أي تغيير في يومك.'], ['هل يوجد مدخل مهيأ؟', 'تدرج الوزارة مدخلاً ممهداً ومصعداً؛ تواصل مع المتحف لتأكيد المسار والإتاحة الحالية.']],
      related: ['alexandria-national-museum', 'kom-el-dikka', 'qaitbay-citadel'],
    },
  },
];
