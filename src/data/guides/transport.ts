import type { Guide } from './types';

/** Group C — getting there (transport). Facts are limited to the location and the general
 *  landmarks in play; nothing unverified about schedules, fares, times or distances is stated. */
export const transportGuides: Guide[] = [
  {
    slug: 'from-city-centre',
    group: 'transport',
    image: '/images/montaza-palace-coast.jpg',
    imageAlt: 'Coastal view towards Montaza with the sea and palm-lined shore in eastern Alexandria',
    en: {
      title: 'Montaza Palace from Alexandria City Centre — How to Get There',
      h1: 'Getting to Montaza Palace from Alexandria city centre',
      description: 'How to travel from downtown Alexandria and the historic corniche to Montaza Palace in the east of the city: which mode to choose, where to be dropped off, and how to plan the return.',
      lead: 'Montaza Palace sits in eastern Alexandria, on the Mediterranean coast beyond Sidi Bishr towards Maamoura. From the city centre and the historic corniche it is a cross-city trip, so a taxi or a ride-hailing car is usually the simplest choice — and you should plan the return before you set out.',
      quick: [
        ['Start', 'Downtown and the historic corniche'],
        ['End', 'El-Gaish Rd, Montaza, eastern Alexandria'],
        ['Best mode', 'Taxi or ride-hailing across the city'],
        ['Drop-off', 'Main entrance on El-Gaish Rd'],
        ['Return', 'Arrange it before you leave'],
        ['Time', 'Varies — check live traffic on the day'],
        ['Cost', 'Not verified (checked 4 November 2026)'],
        ['Change', 'None by taxi or ride-hailing'],
        ['Map', 'Use the location link in the sources panel'],
      ],
      sections: [
        {
          h: 'Why the centre and Montaza are far apart',
          p: [
            'Alexandria stretches for many kilometres along the coast. The sights most people call the city centre — the downtown corniche, the Bibliotheca Alexandrina and the Citadel of Qaitbay — are at the western end of that stretch, around the old harbour.',
            'The Montaza estate is at the opposite, eastern end, past Sidi Bishr and towards Maamoura, with the districts of Al Mandarah and Maamoura as its neighbours. Treat the journey as a proper cross-city trip, not a short walk along the waterfront.',
            'In plain terms, the trip runs from the central and western corniche — the area around the old harbour and downtown — to the Montaza estate in the east, on El-Gaish Road in Al Mandarah Bahri. Those two points sit at opposite ends of a long, built-up coastal city, and everything on this page is about closing that gap as comfortably as possible.',
          ],
        },
        {
          h: 'Choosing how to travel',
          p: [
            'Ride-hailing apps are widely used in Alexandria and are the easiest way to make a one-way trip to a specific gate, because you can set the exact destination in the app. Ordinary taxis work too, but agree the destination and the drop-off point with the driver before you set off.',
            'Local buses and minibuses run along the corniche, but we cannot confirm which service stops nearest to a Montaza entrance, so if you use them, confirm the route with the driver or conductor on the day.',
            'Ranked simply: a ride-hailing car or taxi is the recommended mode, because it is door to door and lets you drop exactly at a gate; a private car is just as good if you have one and are prepared for parking; buses and minibuses are the cheapest option but the least predictable, and the whole distance is not a realistic walk.',
          ],
        },
        {
          h: 'The road along the coast',
          p: [
            'The main coastal road, El-Gaish Road, runs east from the centre through Sidi Bishr and on towards Montaza. Traffic on this road is heavy, and the late afternoon and Fridays are the worst times. Allow more time than a map suggests, and expect the last part of the trip to be slow.',
            'As you head east you pass through a run of seaside districts, among them Sidi Bishr, whose name travellers often use as the marker for the stretch just before Montaza. Seeing Sidi Bishr means you are getting close, but the estate still lies further on, so do not ask to get out the moment you see the name.',
          ],
        },
        {
          h: 'Where to be dropped off',
          p: [
            'Ask to be taken to the Montaza main entrance on El-Gaish Road in Al Mandarah Bahri. The estate has more than one gate, so confirm with your driver which one they are using, and check the place listing on the map before you travel.',
            'The exact spot where a car can stop may vary from day to day with traffic, roadworks or which gates are in use, so treat the gate name as guidance rather than a guarantee, and confirm the exact drop-off with your driver on the day.',
          ],
          list: [
            'Set the destination as the Montaza Palace place listing, not just “Montaza”',
            'Confirm which gate the driver is heading for',
            'Ask to be dropped where you can see an entrance and staff',
          ],
        },
        {
          h: 'Planning the return journey',
          p: [
            'The estate is far from the centre, and leaving is not always as quick as arriving. Decide in advance how you will get back: book a ride-hailing car while you are still inside the grounds, agree a meeting point with a taxi driver, or ask at the gate where vehicles usually wait.',
            'If you are visiting in the evening, check the last transport options on the day, because we cannot state a timetable and services change.',
            'If you are unsure how you will get back, the simplest safety net is to keep a ride-hailing app open and to note, on arrival, where cars are waiting and which gate you entered by. That note is worth more than any plan made from home.',
          ],
        },
        {
          h: 'How long the trip can take, and what changes it',
          p: [
            'We do not publish a fixed journey time for the run from the centre to Montaza, because the honest answer depends on the day. A live map at the moment you travel will always beat any number written in advance, and we would rather tell you that than invent a figure.',
            'What stretches the trip is mostly the traffic on the coastal route. Late afternoon and early evening are heavy, Fridays are the busiest family day of the week, and school holidays and public holidays add to the load. Rain or a road incident can slow the whole corniche at once.',
            'What shortens it is travelling early on a weekday morning, when the corniche is quieter, and setting off before the peak rather than in the middle of it. Build in a margin if you are meeting someone or catching a connection, and check the live traffic in your map or ride-hailing app before you leave.',
          ],
          list: [
            'Check the live traffic in a map app on the day — this is the only reliable guide',
            'Expect the late afternoon and Friday to be the slowest',
            'Allow extra margin if you have a fixed appointment at the other end',
          ],
        },
        {
          h: 'What the trip costs, and the date we checked',
          p: [
            'We cannot publish a fare for this trip, and we do not pretend otherwise. Prices change, surge pricing applies at busy times, and a metered taxi and an app estimate are different things. For that reason we mark this trip’s cost as Not verified.',
            'The date this page was last checked is 4 November 2026. On that date we were not able to confirm a current, standard fare for the centre-to-Montaza run, so any number we printed here would be a guess.',
            'To get a real figure, open a ride-hailing app and enter the Montaza Palace place listing as the destination; the app will show a fare estimate before you confirm. For a metered taxi, agree the price with the driver before you set off, and confirm whether it covers luggage and the exact gate.',
          ],
          list: [
            'Cost — Not verified (page checked 4 November 2026)',
            'App fare estimate — check it in the app before you confirm',
            'Metered taxi — agree the price before you set off',
            'Confirm whether the fare includes luggage and the exact gate',
          ],
        },
        {
          h: 'Whether you need to change vehicles',
          p: [
            'For a taxi or ride-hailing car, no change is needed: it is a single door-to-door journey from wherever you start in the centre to the gate you choose at Montaza. That is one of the reasons this is the recommended mode.',
            'Public transport is different. If you use buses or minibuses, you may well need to change vehicles, because we cannot confirm a single service that runs from the centre all the way to a Montaza entrance. Confirm with the driver or conductor whether you stay on the same vehicle or change, and where.',
          ],
          list: [
            'Taxi or ride-hailing — one vehicle, no change',
            'Bus or minibus — a change may be needed; confirm with the driver',
          ],
        },
        {
          h: 'Travelling with luggage, children or a wheelchair',
          p: [
            'If you have luggage, a taxi or ride-hailing car is the practical choice, because you stay with your bags the whole way and are set down at the gate. On buses and minibuses, luggage is harder to manage and you may be standing for part of the trip.',
            'For children, there is no child-seat guarantee on any mode here, so plan around that: hold small children, or bring a restraint you trust if you have room. The estate itself is large, so a stroller is useful once you are inside, but check with your driver whether it fits easily in the boot.',
            'For wheelchair users or anyone with limited mobility, a car is easier than public transport, because you avoid kerbs, steps and changes of vehicle. Ask the driver in advance whether the car can take a folded wheelchair, and ask at the Montaza gate which entrance has the flattest approach to the paths. We have not verified a continuous step-free route inside the grounds, so confirm on the day.',
          ],
        },
        {
          h: 'Navigating to Montaza with the map link',
          p: [
            'Every page on this site carries a link to the Montaza Palace place listing on Google Maps, in the sources panel beside this article (the location link). Use it rather than copying an address by hand: it opens the exact place pin, and you can send it straight to your driver.',
            'Once the pin is in the app, check the drop-off point on the map before you travel, and match the gate name to the one the driver names. If in doubt, ask the driver to stop where you can see an entrance and staff, and keep that pin for the return leg.',
          ],
        },
      ],
      faq: [
        ['How far is Montaza Palace from downtown Alexandria?', 'It is a cross-city trip to the eastern end of Alexandria, beyond Sidi Bishr. We do not publish a distance or a fixed journey time; check a live map for traffic on the day.'],
        ['What is the easiest way there from the centre?', 'A taxi or a ride-hailing car, because you can set the exact destination. Set it to the Montaza Palace place listing rather than the general area.'],
        ['Do buses from the centre go to Montaza?', 'Bus and minibus routes run along the corniche, but we cannot confirm which one stops nearest a Montaza entrance. Confirm with the driver or conductor on the day.'],
        ['How do I get back to the centre?', 'Plan it before you leave. Book a ride-hailing car from inside the grounds, or agree a meeting point with a taxi driver near the entrance.'],
        ['How long does it take from the centre to Montaza?', 'We do not publish a fixed time. It depends on coastal traffic, which is heaviest in the late afternoon and on Fridays. Check a live map on the day.'],
        ['How much does a taxi to Montaza cost?', 'Not verified. We could not confirm a current standard fare when this page was checked on 4 November 2026. Get an app estimate or agree the price with the driver first.'],
        ['Do I need to change vehicles?', 'By taxi or ride-hailing, no — it is one door-to-door trip. On buses or minibuses a change may be needed; confirm with the driver or conductor.'],
      ],
      related: ['taxi-ride-hailing', 'public-transport', 'location-entrance', 'from-train-station', 'how-to-get-there'],
    },
    ar: {
      title: 'قصر المنتزه من وسط الإسكندرية — كيف تصل إليه',
      h1: 'الوصول إلى قصر المنتزه من وسط الإسكندرية',
      description: 'كيف تنتقل من وسط الإسكندرية والكورنيش التاريخي إلى قصر المنتزه في شرق المدينة: أي وسيلة تختار، وأين تُنزل، وكيف تخطط للعودة.',
      lead: 'يقع قصر المنتزه في شرق الإسكندرية على ساحل البحر المتوسط، بعد سيدي بشر باتجاه المعمورة. ومن وسط المدينة والكورنيش التاريخي تُعدّ الرحلة انتقالاً عبر المدينة، لذلك يكون التاكسي أو تطبيق النقل عادةً أسهل خيار، ويُستحسن تخطيط العودة قبل الانطلاق.',
      quick: [
        ['نقطة البداية', 'وسط المدينة والكورنيش التاريخي'],
        ['نقطة الوصول', 'طريق الجيش، المنتزه، شرق الإسكندرية'],
        ['أفضل وسيلة', 'تاكسي أو تطبيق نقل عبر المدينة'],
        ['مكان الإنزال', 'البوابة الرئيسية على طريق الجيش'],
        ['العودة', 'رتبها قبل المغادرة'],
        ['الزمن', 'يتغير — راجع الزحام الحيّ يوم الزيارة'],
        ['التكلفة', 'لم يُتحقق منها (مراجعة 4 نوفمبر 2026)'],
        ['التغيير', 'لا يوجد بالتاكسي أو تطبيق النقل'],
        ['الخريطة', 'استخدم رابط الموقع في لوحة المصادر'],
      ],
      sections: [
        {
          h: 'لماذا يبعد الوسط عن المنتزه',
          p: [
            'تمتد الإسكندرية كيلومترات طويلة على الساحل. وأشهر ما يسميه الناس وسط المدينة — كورنيش وسط البلد والمكتبة الجديدة وقلعة قايتباي — يقع عند الطرف الغربي منه حول الميناء القديم.',
            'أما حدائق المنتزه فتقع عند الطرف الشرقي المقابل، بعد سيدي بشر وباتجاه المعمورة، ويجاورها حيّا المنارة والمعمورة. اعتبر الرحلة انتقالاً كاملاً عبر المدينة، لا مشياً قصيراً على الواجهة.',
            'وبعبارة مباشرة، تمتد الرحلة من كورنيش الوسط والغرب — المنطقة حول الميناء القديم ووسط البلد — إلى حدائق المنتزه شرقاً على طريق الجيش في المنارة البحرية. والنقطتان في طرفين متقابلين من مدينة ساحلية طويلة ومأهولة، وكل ما في هذه الصفحة يدور حول قطع هذه المسافة بأريحية قدر الإمكان.',
          ],
        },
        {
          h: 'اختيار وسيلة الانتقال',
          p: [
            'تطبيقات النقل شائعة الاستخدام في الإسكندرية، وهي أسهل طريقة للقيام برحلة في اتجاه واحد إلى بوابة محددة، إذ يمكنك ضبط الوجهة بدقة في التطبيق. والتاكسي العادي مناسب أيضاً، لكن اتفق مع السائق على الوجهة ومكان الإنزال قبل الانطلاق.',
            'تعمل الأتوبيسات والميكروباصات المحلية على طول الكورنيش، لكننا لا نستطيع تأكيد أي خدمة تتوقف قرب بوابة المنتزه، فإن استخدمتها فأكّد الخط مع السائق أو المحصّل يوم الزيارة.',
            'وبترتيب مبسّط: سيارة تطبيق النقل أو التاكسي هي الوسيلة الموصى بها، لأنها من الباب إلى الباب وتُزلك عند بوابة بعينها؛ والسيارة الخاصة جيدة بالقدر نفسه إن كانت متوفرة وكنت مستعداً للوقوف؛ والأتوبيسات والميكروباصات أرخص الخيارات لكنها الأقل قابلية للتوقع، والمسافة كاملة ليست مشياً واقعياً.',
          ],
        },
        {
          h: 'الطريق الساحلي',
          p: [
            'يمتد الطريق الساحلي الرئيسي، طريق الجيش، شرقاً من الوسط عبر سيدي بشر باتجاه المنتزه. والزحام على هذا الطريق شديد، وأسوأ أوقاته آخر النهار ويوم الجمعة. اترك وقتاً أطول مما توحي به الخريطة، وتوقّع أن يكون الجزء الأخير بطيئاً.',
            'وعندما تتجه شرقاً تمرّ بسلسلة أحياء ساحلية، ومنها سيدي بشر التي كثيراً ما يستخدم المسافرون اسمها علامةً على الجزء الذي يسبق المنتزه مباشرة. ورؤية سيدي بشر تعني أنك تقترب، لكن الحدائق ما زالت أبعد، فلا تطلب النزول بمجرد أن ترى الاسم.',
          ],
        },
        {
          h: 'أين تُنزل',
          p: [
            'اطلب أن توصلك إلى البوابة الرئيسية للمنتزه على طريق الجيش في المنارة البحرية. وللمنتزه أكثر من بوابة، لذا تأكد مع السائق من أيها يقصد، وتحقّق من قائمة المكان على الخريطة قبل السفر.',
            'وقد يتغير المكان الدقيق الذي يمكن للسيارة التوقف فيه من يوم لآخر بحسب الزحام أو أعمال الطريق أو البوابات المستخدمة، فاعتبر اسم البوابة إرشاداً لا ضماناً، وأكّد نقطة الإنزال الدقيقة مع سائقك يوم الزيارة.',
          ],
          list: [
            'اضبط الوجهة على قائمة مكان قصر المنتزه، لا «المنتزه» فقط',
            'تأكد أي بوابة يقصدها السائق',
            'اطلب النزول في مكان ترى فيه بوابة وعاملين',
          ],
        },
        {
          h: 'تخطيط رحلة العودة',
          p: [
            'المنتزه بعيد عن الوسط، ولا تكون المغادرة دائماً بالسرعة نفسها التي وصلت بها. قرّر مسبقاً كيف ستعود: احجز سيارة عبر التطبيق وأنت داخل الحدائق، أو اتفق على نقطة لقاء مع سائق تاكسي، أو اسأل عند البوابة عن مكان انتظار السيارات عادةً.',
            'وإن كانت زيارتك مساءً فتحقق من آخر خيارات النقل في اليوم نفسه، لأننا لا نستطيع ذكر جدول زمني، ولأن الخدمات تتغير.',
            'وإن لم تكن متأكداً من طريقة عودتك، فأبسط شبكة أمان هي إبقاء تطبيق نقل مفتوحاً وتدوين، عند الوصول، أين تنتظر السيارات وأي بوابة دخلت منها. وهذه الملاحظة أنفع من أي خطة تُوضع من المنزل.',
          ],
        },
        {
          h: 'كم تستغرق الرحلة، وما الذي يغيّر مدتها',
          p: [
            'لا ننشر زمناً ثابتاً للرحلة من الوسط إلى المنتزه، لأن الإجابة الصادقة تتوقف على اليوم. والخريطة الحيّة في لحظة سفرك أفضل دائماً من أي رقم يُكتب مسبقاً، ونفضّل أن نقول لك ذلك بدل اختلاق رقم.',
            'وما يطيل الرحلة هو في الأغلب الزحام على الطريق الساحلي. فآخر النهار ومطلعه مزدحمان، والجمعة أكثر أيام الأسبوع ازدحاماً بالعائلات، وتضيف العطلات المدرسية والرسمية إلى الضغط. ويمكن للمطر أو حادث على الطريق أن يبطئ الكورنيش كله دفعة واحدة.',
            'وما يقصّرها هو السفر في صباح يوم من أيام الأسبوع حين يهدأ الكورنيش، والانطلاق قبل الذروة لا في وسطها. واحسب هامشاً إن كان لك موعد أو مواصلة، وراقب الزحام الحيّ في تطبيقك قبل الانطلاق.',
          ],
          list: [
            'راجع الزحام الحيّ في تطبيق خرائط يوم الزيارة — فهو الدليل الوحيد الموثوق',
            'توقّع أن يكون آخر النهار ويوم الجمعة الأبطأ',
            'اترك هامشاً إضافياً إن كان لك موعد ثابت في الطرف الآخر',
          ],
        },
        {
          h: 'تكلفة الرحلة، وتاريخ مراجعتها',
          p: [
            'لا نستطيع نشر أجرة لهذه الرحلة، ولا ندّعي غير ذلك. فالأسعار تتغير، ويُطبَّق التسعير المتغيّر في أوقات الزحام، والتاكسي بالعدّاد يختلف عن تقدير التطبيق. ولذلك نسجّل تكلفة هذه الرحلة بأنها لم يُتحقق منها.',
            'وتاريخ آخر مراجعة لهذه الصفحة هو 4 نوفمبر 2026. وفي ذلك التاريخ لم نتمكن من تأكيد أجرة حالية معتادة لخط الوسط إلى المنتزه، فأي رقم نطبعه هنا سيكون تخميناً.',
            'وللحصول على رقم حقيقي، افتح تطبيق نقل وأدخل قائمة مكان قصر المنتزه كوجهة؛ وسيعرض التطبيق تقدير الأجرة قبل أن تؤكد. وللتاكسي بالعدّاد، اتفق على السعر مع السائق قبل الانطلاق، وأكّد هل يشمله الأمتعة والبوابة الدقيقة.',
          ],
          list: [
            'التكلفة — لم يُتحقق منها (روجعت الصفحة في 4 نوفمبر 2026)',
            'تقدير التطبيق — تحقق في التطبيق قبل التأكيد',
            'التاكسي بالعدّاد — اتفق على السعر قبل الانطلاق',
            'أكّد هل تشمل الأجرة الأمتعة والبوابة الدقيقة',
          ],
        },
        {
          h: 'هل تحتاج إلى تغيير المركبة',
          p: [
            'في التاكسي أو سيارة تطبيق النقل لا حاجة إلى تغيير: فهي رحلة واحدة من الباب إلى الباب من أي نقطة تبدأ منها في الوسط إلى البوابة التي تختارها في المنتزه. وهذا أحد أسباب كونها الوسيلة الموصى بها.',
            'أما النقل العام فيختلف. فإن استخدمت الأتوبيسات أو الميكروباصات فقد تحتاج إلى تغيير المركبة، لأننا لا نستطيع تأكيد خدمة واحدة تسير من الوسط إلى بوابة المنتزه مباشرة. تأكد مع السائق أو المحصّل هل تبقى في المركبة نفسها أم تغيّرها، وأين.',
          ],
          list: [
            'تاكسي أو تطبيق نقل — مركبة واحدة بلا تغيير',
            'أتوبيس أو ميكروباص — قد يلزم تغيير؛ أكّده مع السائق',
          ],
        },
        {
          h: 'السفر مع الأمتعة أو الأطفال أو كرسي متحرك',
          p: [
            'إن كانت معك أمتعة فالتاكسي أو سيارة تطبيق النقل هي الخيار العملي، لأنك تبقى مع حقائبك طوال الطريق وتُنزل عند البوابة. وفي الأتوبيسات والميكروباصات تكون الأمتعة أصعب تعاملاً وقد تقف جزءاً من الرحلة.',
            'وللأطفال، لا يوجد ضمان لمقعد طفل على أي وسيلة هنا، فخطّط على هذا الأساس: احتضن الأطفال الصغار، أو أحضر مثبّتاً تثق به إن كان لديك متسع. والحدائق واسعة، فستفيد عربة الأطفال بعد الدخول، لكن تحقق مع السائق هل تتسع لها صندوق السيارة بسهولة.',
            'ولمستخدمي الكراسي المتحركة أو ذوي الحركة المحدودة، السيارة أسهل من النقل العام لأنك تتجنب الأرصفة والدرجات وتغيير المركبات. اسأل السائق مسبقاً هل تستوعب السيارة كرسياً متحركاً مطوياً، واسأل عند بوابة المنتزه أي مدخل له أهدأ اقتراب إلى الممرات. ولم نتحقق من مسار متصل خالٍ من العوائق داخل الحدائق، فأكّد يوم الزيارة.',
          ],
        },
        {
          h: 'الاهتداء إلى المنتزه عبر رابط الخريطة',
          p: [
            'تحمل كل صفحة في هذا الموقع رابطاً إلى قائمة مكان قصر المنتزه على خرائط Google، في لوحة المصادر بجوار هذا المقال (رابط الموقع). استخدمه بدل نسخ العنوان يدوياً: فهو يفتح دبوس المكان الدقيق، ويمكنك إرساله إلى سائقك مباشرة.',
            'وبعد إدخال الدبوس في التطبيق، تحقق من نقطة الإنزال على الخريطة قبل السفر، وطابق اسم البوابة مع الذي يذكره السائق. وإن شككت فاطلب من السائق التوقف حيث ترى بوابة وعاملين، واحتفظ بالدبوس لرحلة العودة.',
          ],
        },
      ],
      faq: [
        ['كم يبعد قصر المنتزه عن وسط الإسكندرية؟', 'إنه انتقال عبر المدينة إلى الطرف الشرقي بعد سيدي بشر. لا ننشر مسافة أو زمن رحلة ثابتاً؛ تحقق من خريطة حيّة للزحام يوم الزيارة.'],
        ['ما أسهل طريقة للوصول من الوسط؟', 'تاكسي أو سيارة تطبيق نقل، لأنك تضبط الوجهة بدقة. اضبطها على قائمة مكان قصر المنتزه لا على المنطقة العامة.'],
        ['هل تذهب أتوبيسات من الوسط إلى المنتزه؟', 'تعمل خطوط الأتوبيس والميكروباص على الكورنيش، لكننا لا نستطيع تأكيد أيها يتوقف قرب بوابة المنتزه. أكّد مع السائق أو المحصّل يوم الزيارة.'],
        ['كيف أعود إلى الوسط؟', 'خطط لذلك قبل المغادرة. احجز سيارة تطبيق من داخل الحدائق، أو اتفق على نقطة لقاء مع سائق تاكسي قرب البوابة.'],
        ['كم تستغرق الرحلة من الوسط إلى المنتزه؟', 'لا ننشر زمناً ثابتاً. يتوقف على الزحام الساحلي، وهو الأشد آخر النهار ويوم الجمعة. راجع خريطة حيّة يوم الزيارة.'],
        ['كم تكلفة التاكسي إلى المنتزه؟', 'لم يُتحقق منها. لم نتمكن من تأكيد أجرة حالية معتادة عند مراجعة الصفحة في 4 نوفمبر 2026. احصل على تقدير من التطبيق أو اتفق على السعر مع السائق أولاً.'],
        ['هل أحتاج إلى تغيير المركبة؟', 'بالتاكسي أو تطبيق النقل لا — فهي رحلة واحدة من الباب إلى الباب. وفي الأتوبيسات أو الميكروباصات قد يلزم تغيير؛ أكّده مع السائق أو المحصّل.'],
      ],
      related: ['taxi-ride-hailing', 'public-transport', 'location-entrance', 'from-train-station', 'how-to-get-there'],
    },
  },
  {
    slug: 'from-train-station',
    group: 'transport',
    image: '/images/montaza-palace-hero.jpg',
    imageAlt: 'Montaza Palace and gardens seen from the coastal road on the approach through eastern Alexandria',
    en: {
      title: 'Montaza Palace from Alexandria Railway Station — Which Station, Then How',
      h1: 'Getting to Montaza Palace from the railway station',
      description: 'How to reach Montaza Palace after arriving by train in Alexandria: the two stations travellers usually use, how to confirm which one you arrive at, and where to be dropped off.',
      lead: 'If you arrive in Alexandria by train, the first thing to confirm is which station you are at, because the city has more than one and they are in different places. From either one, a taxi or ride-hailing car is the usual way to reach Montaza in the east, and you should settle the return before you leave the estate.',
      quick: [
        ['Arrival stations', 'Misr or Sidi Gaber, usually'],
        ['First step', 'Confirm which station you are at'],
        ['End point', 'Montaza main entrance, El-Gaish Rd'],
        ['Best mode', 'Taxi or ride-hailing onward'],
        ['Return', 'Plan it before entering'],
        ['Time to Montaza', 'Varies; Sidi Gaber is the east station'],
        ['Cost to Montaza', 'Not verified (4 November 2026)'],
        ['Change', 'None by taxi or ride-hailing'],
        ['Map', 'Use the location link in the sources panel'],
      ],
      sections: [
        {
          h: 'Two stations, two different places',
          p: [
            'Travellers arriving by rail in Alexandria most often name one of two stations: Misr, the central station, or Sidi Gaber, further east. They are not the same building and they are not beside each other.',
            'Because the names are used loosely, a ticket that says “Alexandria” can leave you at a different station from the one you pictured. Do not assume you will arrive at a particular one.',
            'For orientation only, Sidi Gaber lies further east than Misr, so of the two it is the nearer to Montaza — but neither is beside the estate, and you should still plan a cross-city road leg from either. We have not verified a journey time or a distance between the stations and Montaza, so confirm on the day.',
          ],
        },
        {
          h: 'Confirm where you actually arrive',
          list: [
            'Check the station name on your ticket and on the departure board',
            'Look for the station name on platforms and signs as you exit',
            'Ask station staff to confirm the name of the station you are standing in',
            'Note the exit you use, so you can find it again for the return leg',
          ],
        },
        {
          h: 'From the station to Montaza',
          p: [
            'Whichever station you arrive at, Montaza is further east along the coast, so you will still have a cross-city leg ahead of you. A taxi or a ride-hailing car is the simplest way to finish the trip, with the destination set to the Montaza Palace place listing.',
            'If you prefer local transport, buses and minibuses run in this part of the city, but we cannot confirm which service reaches a Montaza entrance, so confirm the route with the driver or conductor on the day.',
          ],
        },
        {
          h: 'Where to be dropped off',
          p: [
            'Ask to be taken to the main entrance on El-Gaish Road in Al Mandarah Bahri. Confirm with the driver which gate they use, and check the map listing before you travel so you recognise the entrance when you arrive.',
          ],
        },
        {
          h: 'Planning the return to the station',
          p: [
            'Decide early whether you will return to Misr or to Sidi Gaber, and make sure the driver knows which one you mean — the names sound similar enough to be confused when you are tired.',
            'Book your ride-hailing car from inside the grounds, or agree a meeting point near the gate. If you are catching an onward train, give yourself a generous margin, because coastal traffic can make the cross-city trip unpredictable.',
          ],
        },
        {
          h: 'How long the onward trip can take',
          p: [
            'We do not publish a journey time from the station to Montaza, because it depends on where in Alexandria you start and on the day’s traffic. From Sidi Gaber the road leg is shorter in principle, since it is already to the east; from Misr you begin further west and cross more of the city.',
            'The biggest variable is the coastal traffic on the eastern stretch, which is heaviest in the late afternoon and on Fridays. If you are connecting to an onward train, leave a wide margin rather than a tight one, and re-check the live traffic before you settle into a car.',
          ],
          list: [
            'Check live traffic on the day; there is no reliable fixed figure',
            'Expect the late afternoon and Friday to be slowest',
            'Leave extra margin if you must catch an onward train',
          ],
        },
        {
          h: 'What the onward trip costs, and the date we checked',
          p: [
            'We mark the cost of this leg as Not verified. When this page was checked on 4 November 2026 we could not confirm a current standard fare from either station to Montaza, and we would rather say so than invent one.',
            'For a ride-hailing car, enter the Montaza Palace place listing as your destination and read the estimate the app shows. For a metered taxi, agree the price before you set off, and make sure the driver knows which station you are leaving from and which gate you want, so the fare is for the right trip.',
          ],
          list: [
            'Cost — Not verified (page checked 4 November 2026)',
            'App estimate — check it before confirming',
            'Metered taxi — agree the price and the gate first',
          ],
        },
        {
          h: 'Whether you need to change vehicles',
          p: [
            'A taxi or ride-hailing car from the station to Montaza is a single trip with no change. That is the simplest way to finish, especially with luggage.',
            'If you use local transport from the station, you may need to change vehicles, because we cannot confirm a service that runs from either station straight to a Montaza entrance. Confirm with the driver or conductor whether you stay on the same vehicle or change, and where.',
          ],
          list: [
            'Taxi or ride-hailing — one vehicle, no change',
            'Local bus or minibus — a change may be needed; confirm on the day',
          ],
        },
        {
          h: 'Luggage, children and step-free access at the station',
          p: [
            'Travelling with bags from a station is easiest in a car, where your luggage stays with you and you are set down at the gate. On buses and minibuses you may have to manage luggage on a crowded vehicle, and there may be steps.',
            'For children, there is no guaranteed child seat in any mode here, so plan accordingly. If you have a stroller, it packs more easily into a car than onto public transport.',
            'For wheelchair users, ask the driver in advance for a vehicle that can take a folded wheelchair, and ask station staff about the step-free or accessible exit, as layouts differ between Misr and Sidi Gaber. We have not verified the accessibility of either station in detail, so confirm on the day.',
          ],
        },
        {
          h: 'Navigating from the station with the map link',
          p: [
            'The sources panel beside this article carries a link to the Montaza Palace place listing on Google Maps — the location link. Open it before you leave the station and send it to your driver, rather than describing the destination in words.',
            'If you would rather also pin your station, search for it by name in the same app so you can see the route from your station to the estate, and check the drop-off point on the map before you travel.',
          ],
        },
      ],
      faq: [
        ['Which station do I arrive at in Alexandria?', 'Travellers most often use Misr or Sidi Gaber, two different stations in different parts of the city. Confirm the name on your ticket and on the signs when you arrive.'],
        ['How do I get from the station to Montaza?', 'Take a taxi or a ride-hailing car and set the destination to the Montaza Palace place listing. It is a further cross-city leg east.'],
        ['Are the two stations close to each other?', 'No. Misr and Sidi Gaber are separate stations in different places, so do not assume you can walk between them.'],
        ['How do I get back to the station?', 'Decide whether you need Misr or Sidi Gaber, tell the driver clearly which one, and book your ride from inside the grounds.'],
        ['Which station is closer to Montaza, Misr or Sidi Gaber?', 'Sidi Gaber is further east, so it is the nearer of the two to Montaza, but neither is beside the estate. We have not verified a distance or time; confirm on the day.'],
        ['How long is the trip from the station to Montaza?', 'We do not publish a fixed time. It depends on your starting station and on coastal traffic, heaviest late afternoon and on Fridays. Check a live map.'],
        ['How much is a taxi from the station to Montaza?', 'Not verified. We could not confirm a current fare when this page was checked on 4 November 2026. Get an app estimate or agree the price first.'],
      ],
      related: ['from-city-centre', 'taxi-ride-hailing', 'public-transport', 'from-airport', 'how-to-get-there'],
    },
    ar: {
      title: 'قصر المنتزه من محطة سكة حديد الإسكندرية — أي محطة ثم كيف',
      h1: 'الوصول إلى قصر المنتزه من محطة القطار',
      description: 'كيف تصل إلى قصر المنتزه بعد الوصول بالقطار إلى الإسكندرية: المحطتان اللتان يستخدمهما المسافرون عادة، وكيف تؤكد أين تنزل، وأين تُنزل قرب المنتزه.',
      lead: 'إن وصلت الإسكندرية بالقطار، فأول ما يجب تأكيده هو المحطة التي أنت فيها، لأن للمدينة أكثر من محطة وهي في أماكن مختلفة. ومن أي منهما يكون التاكسي أو تطبيق النقل الطريقة المعتادة للوصول إلى المنتزه في الشرق، ويُستحسن تحديد العودة قبل مغادرة الحدائق.',
      quick: [
        ['محطات الوصول', 'مصر أو سيدي جابر عادةً'],
        ['الخطوة الأولى', 'تأكد من المحطة التي أنت فيها'],
        ['نقطة الوصول', 'البوابة الرئيسية للمنتزه، طريق الجيش'],
        ['أفضل وسيلة', 'تاكسي أو تطبيق نقل بعدها'],
        ['العودة', 'خطط لها قبل الدخول'],
        ['الزمن إلى المنتزه', 'يتغير؛ سيدي جابر هي المحطة الشرقية'],
        ['التكلفة إلى المنتزه', 'لم يُتحقق منها (4 نوفمبر 2026)'],
        ['التغيير', 'لا يوجد بالتاكسي أو تطبيق النقل'],
        ['الخريطة', 'استخدم رابط الموقع في لوحة المصادر'],
      ],
      sections: [
        {
          h: 'محطتان في مكانين مختلفين',
          p: [
            'المسافرون بالقطار إلى الإسكندرية يذكرون عادةً إحدى محطتين: محطة مصر، وهي المحطة الرئيسية، أو سيدي جابر شرقاً. وهما ليستا المبنى نفسه ولا متجاورتين.',
            'ولأن الأسماء تُستخدم بتراخٍ، فقد تُوصلك تذكرة مكتوب عليها «الإسكندرية» إلى محطة تختلف عن التي توقّعتها. لا تفترض الوصول إلى محطة بعينها.',
            'وللتوضيح فقط، تقع سيدي جابر شرق محطة مصر، فهي الأقرب نسبياً إلى المنتزه من بين الاثنتين — لكن أيّاً منهما ليست بجوار الحدائق، وسيبقى أمامك انتقال بريّ عبر المدينة من كلتيهما. ولم نتحقق من زمن رحلة أو مسافة بين المحطتين والمنتزه، فأكّد يوم الزيارة.',
          ],
        },
        {
          h: 'تأكد من المحطة التي وصلت إليها فعلاً',
          list: [
            'راجع اسم المحطة على تذكرتك وعلى لوحة المغادرة',
            'اقرأ اسم المحطة على الأرصفة واللافتات عند الخروج',
            'اسأل عامل المحطة ليؤكد اسم المحطة التي تقف فيها',
            'لاحظ البوابة التي خرجت منها لتجدها في رحلة العودة',
          ],
        },
        {
          h: 'من المحطة إلى المنتزه',
          p: [
            'أياً كانت المحطة التي تنزل فيها، فإن المنتزه يقع شرقاً على الساحل، فيبقى أمامك انتقال عبر المدينة. والتاكسي أو سيارة تطبيق النقل هي أبسط وسيلة لإتمام الرحلة، مع ضبط الوجهة على قائمة مكان قصر المنتزه.',
            'وإن فضّلت النقل المحلي، فتعمل الأتوبيسات والميكروباصات في هذا الجزء من المدينة، لكننا لا نستطيع تأكيد أي خدمة تصل إلى بوابة المنتزه، فأكّد الخط مع السائق أو المحصّل يوم الزيارة.',
          ],
        },
        {
          h: 'أين تُنزل',
          p: [
            'اطلب أن توصلك إلى البوابة الرئيسية على طريق الجيش في المنارة البحرية. تأكد مع السائق أي بوابة يستخدم، وراجع قائمة المكان على الخريطة قبل السفر لتتعرّف على البوابة عند وصولك.',
          ],
        },
        {
          h: 'تخطيط العودة إلى المحطة',
          p: [
            'قرّر مبكراً هل ستعود إلى مصر أم إلى سيدي جابر، واجعل السائق يعرف أيّهما تقصد — فالاسمان متقاربان بما يكفي للالتباس حين تكون متعباً.',
            'احجز سيارة التطبيق من داخل الحدائق، أو اتفق على نقطة لقاء قرب البوابة. وإن كان أمامك قطار لاحق فامنح نفسك هامشاً واسعاً، لأن زحام الساحل يجعل الانتقال عبر المدينة غير قابل للتوقع.',
          ],
        },
        {
          h: 'كم تستغرق الرحلة التالية',
          p: [
            'لا ننشر زمن رحلة من المحطة إلى المنتزه، لأنه يتوقف على نقطة البداية في الإسكندرية وعلى زحام اليوم. ومن سيدي جابر يكون الانتقال البري أقصر مبدئياً لأنها في الشرق أصلاً؛ ومن محطة مصر تبدأ من الغرب أكثر وتعبر جزءاً أكبر من المدينة.',
            'وأكبر متغير هو الزحام الساحلي على الجزء الشرقي، وهو الأشد آخر النهار ويوم الجمعة. وإن كنت مواصلاً إلى قطار لاحق فاترك هامشاً واسعاً لا ضيقاً، وأعد مراجعة الزحام الحيّ قبل أن تستقر في السيارة.',
          ],
          list: [
            'راجع الزحام الحيّ يوم الزيارة؛ لا يوجد رقم ثابت موثوق',
            'توقّع أن يكون آخر النهار ويوم الجمعة الأبطأ',
            'اترك هامشاً إضافياً إن كان عليك اللحاق بقطار لاحق',
          ],
        },
        {
          h: 'تكلفة الرحلة التالية، وتاريخ مراجعتها',
          p: [
            'نسجّل تكلفة هذه المرحلة بأنها لم يُتحقق منها. وعند مراجعة هذه الصفحة في 4 نوفمبر 2026 لم نتمكن من تأكيد أجرة حالية معتادة من أي من المحطتين إلى المنتزه، ونفضّل قول ذلك بدل اختلاق رقم.',
            'ولسيارة تطبيق النقل، أدخل قائمة مكان قصر المنتزه كوجهة واقرأ التقدير الذي يعرضه التطبيق. وللتاكسي بالعدّاد، اتفق على السعر قبل الانطلاق، واجعل السائق يعرف من أي محطة تنطلق وأي بوابة تريد، ليكون السعر عن الرحلة الصحيحة.',
          ],
          list: [
            'التكلفة — لم يُتحقق منها (روجعت الصفحة في 4 نوفمبر 2026)',
            'تقدير التطبيق — راجعه قبل التأكيد',
            'التاكسي بالعدّاد — اتفق على السعر والبوابة أولاً',
          ],
        },
        {
          h: 'هل تحتاج إلى تغيير المركبة',
          p: [
            'التاكسي أو سيارة تطبيق النقل من المحطة إلى المنتزه رحلة واحدة بلا تغيير. وهي أبسط طريقة لإنهاء الرحلة، خصوصاً مع الأمتعة.',
            'وإن استخدمت النقل المحلي من المحطة فقد تحتاج إلى تغيير المركبة، لأننا لا نستطيع تأكيد خدمة تسير من أي من المحطتين مباشرة إلى بوابة المنتزه. تأكد مع السائق أو المحصّل هل تبقى في المركبة نفسها أم تغيّرها، وأين.',
          ],
          list: [
            'تاكسي أو تطبيق نقل — مركبة واحدة بلا تغيير',
            'أتوبيس أو ميكروباص محلي — قد يلزم تغيير؛ أكّده يوم الزيارة',
          ],
        },
        {
          h: 'الأمتعة والأطفال والوصول بلا درجات في المحطة',
          p: [
            'السفر بالحقائب من المحطة أسهل في سيارة، حيث تبقى أمتعتك معك وتُنزل عند البوابة. وفي الأتوبيسات والميكروباصات قد تضطر إلى تدبير أمتعتك في مركبة مزدحمة، وقد توجد درجات.',
            'وللأطفال، لا يوجد مقعد طفل مضمون على أي وسيلة هنا، فخطّط على هذا الأساس. وإن كانت معك عربة أطفال فهي تُطوى أسهل في السيارة من النقل العام.',
            'ولمستخدمي الكراسي المتحركة، اطلب من السائق مسبقاً مركبة تستوعب كرسياً مطوياً، واسأل عاملي المحطة عن المخرج المهيّأ أو الخالي من الدرجات، فالتصاميم تختلف بين محطة مصر وسيدي جابر. ولم نتحقق من إتاحة أي من المحطتين بالتفصيل، فأكّد يوم الزيارة.',
          ],
        },
        {
          h: 'الاهتداء من المحطة عبر رابط الخريطة',
          p: [
            'تضم لوحة المصادر بجوار هذا المقال رابطاً إلى قائمة مكان قصر المنتزه على خرائط Google — رابط الموقع. افتحه قبل مغادرة المحطة وأرسله إلى سائقك، بدل وصف الوجهة بالكلمات.',
            'وإن أردت تثبيت محطتك أيضاً، ابحث عنها بالاسم في التطبيق نفسه لترى المسار من محطتك إلى الحدائق، وتحقّق من نقطة الإنزال على الخريطة قبل السفر.',
          ],
        },
      ],
      faq: [
        ['في أي محطة أنزل في الإسكندرية؟', 'يستخدم المسافرون عادة محطة مصر أو سيدي جابر، وهما محطتان مختلفتان في مكانين مختلفين. تأكد من الاسم على تذكرتك وعلى اللافتات عند الوصول.'],
        ['كيف أنتقل من المحطة إلى المنتزه؟', 'خذ تاكسي أو سيارة تطبيق واضبط الوجهة على قائمة مكان قصر المنتزه. يبقى انتقال آخر عبر المدينة شرقاً.'],
        ['هل المحطتان قريبتان من بعضهما؟', 'لا. محطة مصر وسيدي جابر محطتان منفصلتان في مكانين مختلفين، فلا تفترض إمكانية المشي بينهما.'],
        ['كيف أعود إلى المحطة؟', 'قرّر هل تحتاج مصر أم سيدي جابر، وأخبر السائق بوضوح، واحجز سيارتك من داخل الحدائق.'],
        ['أي محطة أقرب إلى المنتزه، مصر أم سيدي جابر؟', 'سيدي جابر شرق، فهي الأقرب نسبياً من بين الاثنتين إلى المنتزه، لكن أيّاً منهما ليست بجوار الحدائق. ولم نتحقق من مسافة أو زمن؛ أكّد يوم الزيارة.'],
        ['كم تستغرق الرحلة من المحطة إلى المنتزه؟', 'لا ننشر زمناً ثابتاً. يتوقف على محطة انطلاقك وعلى الزحام الساحلي الأشد آخر النهار والجمعة. راجع خريطة حيّة.'],
        ['كم تكلفة التاكسي من المحطة إلى المنتزه؟', 'لم يُتحقق منها. لم نتمكن من تأكيد أجرة حالية عند مراجعة الصفحة في 4 نوفمبر 2026. احصل على تقدير من التطبيق أو اتفق على السعر أولاً.'],
      ],
      related: ['from-city-centre', 'taxi-ride-hailing', 'public-transport', 'from-airport', 'how-to-get-there'],
    },
  },
  {
    slug: 'from-airport',
    group: 'transport',
    image: '/images/montaza-palace-main.jpg',
    imageAlt: 'Montaza Palace facade behind palms, the eastern Alexandrian destination for airport transfers',
    en: {
      title: 'Montaza Palace from Alexandria Airport (Borg El Arab) — Transfer Guide',
      h1: 'Getting to Montaza Palace from Alexandria airport',
      description: 'How to travel from Borg El Arab, Alexandria’s main airport, to Montaza Palace in the east of the city: the west-to-east crossing, transfer options, drop-off, and the return.',
      lead: 'Alexandria’s main airport is Borg El Arab, on the western side of the city. Montaza Palace is at the eastern end, so an airport arrival means crossing the whole city. Arrange a transfer in advance and confirm the drop-off entrance before you travel.',
      quick: [
        ['Airport', 'Borg El Arab, Alexandria’s main airport'],
        ['Location', 'West of the city; Montaza is east'],
        ['Best mode', 'Pre-arranged transfer or taxi'],
        ['End point', 'Montaza main entrance, El-Gaish Rd'],
        ['Return', 'Arrange with the driver or in advance'],
        ['Transfer time', 'Varies; the crossing is long'],
        ['Transfer cost', 'Not verified (4 November 2026)'],
        ['Change', 'None by private transfer or taxi'],
        ['Map', 'Use the location link in the sources panel'],
      ],
      sections: [
        {
          h: 'Which airport serves Alexandria',
          p: [
            'The main airport for Alexandria is Borg El Arab, in the desert to the west of the city. Some travellers also use Cairo’s airports and continue by road or rail, which is a separate journey with its own planning.',
            'For this page, we assume you land at Borg El Arab and want to reach Montaza.',
          ],
        },
        {
          h: 'The airport is in the west, Montaza in the east',
          p: [
            'The airport and the Montaza estate are at opposite ends of Alexandria, so the transfer crosses the city, generally passing through the built-up areas along the way. Traffic can be heavy, especially in the late afternoon and on Fridays, so allow generous time and do not expect a short hop.',
            'Because the two ends are so far apart, this is one of the longer transfers you can make within Alexandria, and it is worth treating it as such when you plan your arrival time.',
          ],
        },
        {
          h: 'Transfer options',
          list: [
            'A pre-booked private transfer, arranged with your hotel or a licensed operator',
            'A taxi taken at the airport',
            'A ride-hailing car, if a driver is available to collect you there',
            'Public transport into the city and then onward to Montaza — slower and harder with luggage',
          ],
        },
        {
          h: 'What we cannot tell you',
          p: [
            'We do not publish transfer prices or fixed journey times, because they change and we have not verified them. Agree the fare before you travel, or use an app that shows the price, and confirm whether it covers luggage and the exact destination.',
            'Ask to be taken to the Montaza main entrance on El-Gaish Road in Al Mandarah Bahri, and confirm the drop-off point with the driver.',
          ],
        },
        {
          h: 'Planning the return to the airport',
          p: [
            'Because the airport is far to the west, the return is the part most worth arranging in advance. If you have a flight to catch, book a car for a fixed time, share your flight details with the driver, and leave more buffer than you would for a short city trip.',
            'If you arrived by taxi, ask the driver whether they can collect you at an agreed time on your return, and note where they suggest waiting.',
          ],
        },
        {
          h: 'How long the transfer can take',
          p: [
            'We do not publish a fixed time for the airport-to-Montaza transfer. It crosses the whole city, and the figure swings widely with the hour and the day, so a live map at the moment you set off is more useful than any number written in advance.',
            'Traffic is heaviest in the late afternoon and early evening and on Fridays, and public holidays and school breaks can add to it. Rain and road incidents slow the main routes further. If you have a fixed check-in or a meeting at the other end, allow a generous margin rather than a tight one.',
          ],
          list: [
            'Check live traffic on the day — the transfer crosses the whole city',
            'Expect the late afternoon and Friday to be slowest',
            'Allow a generous margin if you have a fixed time to meet',
          ],
        },
        {
          h: 'What the transfer costs, and the date we checked',
          p: [
            'We mark the cost of this transfer as Not verified. When this page was checked on 4 November 2026 we could not confirm a current standard fare from Borg El Arab to Montaza, and airport fares are especially prone to variation, so we will not print a figure we cannot stand behind.',
            'For a ride-hailing car, set the Montaza Palace place listing as the destination and read the app estimate. For a taxi taken at the airport, agree the total price before you set off, and confirm clearly whether it covers luggage, tolls or parking, and the exact gate.',
          ],
          list: [
            'Cost — Not verified (page checked 4 November 2026)',
            'App estimate — check it before you confirm',
            'Airport taxi — agree the total, including luggage and the gate, first',
          ],
        },
        {
          h: 'Whether you need to change vehicles',
          p: [
            'A pre-booked transfer, an airport taxi or a ride-hailing car all take you from the airport to Montaza in a single vehicle, with no change. That is the whole point of choosing them: one driver, one trip, and your luggage stays with you.',
            'Public transport is the opposite. Reaching Montaza by bus or minibus from the airport almost certainly means changing vehicles at least once, on a journey that is already long and awkward with bags. If you take that route, ask at each stage whether you change and where.',
          ],
          list: [
            'Private transfer, taxi or ride-hailing — one vehicle, no change',
            'Public transport — expect at least one change; confirm at each stage',
          ],
        },
        {
          h: 'Luggage, children and wheelchair access',
          p: [
            'An airport arrival usually means luggage, and a car — a booked transfer or a taxi — is by far the easiest way to carry it across the city. Ask for a vehicle with enough boot space when you book, and confirm that the price covers all your bags.',
            'For children, no mode here guarantees a child seat, so bring a restraint if you rely on one, or plan to hold small children. A stroller fits more easily in a car than on public transport.',
            'For wheelchair users, ask the transfer provider or driver in advance for a vehicle that can take a wheelchair, and ask whether it can be carried folded or used in place. We have not verified the accessibility of any specific transfer fleet, so confirm before you book.',
          ],
        },
        {
          h: 'Navigating from the airport with the map link',
          p: [
            'The sources panel beside this article carries the site’s link to the Montaza Palace place listing on Google Maps — the location link. Open it and share it with your driver or transfer company, so the destination is the exact place pin rather than a written description.',
            'Check the drop-off point on the map before you travel, and agree which gate the car will use. That one link removes most of the guesswork from a long cross-city transfer.',
          ],
        },
      ],
      faq: [
        ['Which airport is closest to Montaza Palace?', 'Alexandria’s main airport is Borg El Arab, at the western end of the city; Montaza is at the eastern end, so the transfer crosses the city.'],
        ['How much is a taxi from the airport to Montaza?', 'We do not publish fares because we cannot verify them. Agree the price before you set off, or use an app that shows it.'],
        ['How long does the airport transfer take?', 'We do not state a fixed time. Allow generous margin, especially in the late afternoon or on Fridays, and check live traffic on the day.'],
        ['How should I plan the return to the airport?', 'Arrange it in advance. Book a car for a fixed time, share your flight details, and leave extra buffer because the crossing is long.'],
        ['Do I need to change vehicles from the airport?', 'With a private transfer, a taxi or a ride-hailing car, no — it is one vehicle. Public transport would mean at least one change on a long, bag-heavy journey.'],
        ['How much is the airport transfer to Montaza?', 'Not verified. We could not confirm a current fare when this page was checked on 4 November 2026. Read the app estimate or agree the total with the driver first.'],
        ['Is the airport transfer suitable with luggage or a wheelchair?', 'A car — a transfer, taxi or ride-hailing vehicle — is the easiest option for both, as your bags stay with you. Ask in advance for a vehicle that takes a folded wheelchair.'],
      ],
      related: ['from-city-centre', 'taxi-ride-hailing', 'from-train-station', 'public-transport', 'from-cairo'],
    },
    ar: {
      title: 'قصر المنتزه من مطار الإسكندرية (برج العرب) — دليل الانتقال',
      h1: 'الوصول إلى قصر المنتزه من مطار الإسكندرية',
      description: 'كيف تنتقل من مطار برج العرب، مطار الإسكندرية الرئيسي، إلى قصر المنتزه في شرق المدينة: عبور الغرب إلى الشرق، وخيارات النقل، والإنزال، والعودة.',
      lead: 'مطار الإسكندرية الرئيسي هو برج العرب، في غرب المدينة. ويقع قصر المنتزه في الطرف الشرقي، فالوصول إلى المطار يعني عبور المدينة بأكملها. رتّب الانتقال مسبقاً وأكّد بوابة الإنزال قبل السفر.',
      quick: [
        ['المطار', 'برج العرب، مطار الإسكندرية الرئيسي'],
        ['الموقع', 'غرب المدينة؛ والمنتزه في الشرق'],
        ['أفضل وسيلة', 'انتقال مرتّب مسبقاً أو تاكسي'],
        ['نقطة الوصول', 'البوابة الرئيسية للمنتزه، طريق الجيش'],
        ['العودة', 'رتبها مع السائق أو مسبقاً'],
        ['زمن الانتقال', 'يتغير؛ العبور طويل'],
        ['تكلفة الانتقال', 'لم يُتحقق منها (4 نوفمبر 2026)'],
        ['التغيير', 'لا يوجد بالانتقال الخاص أو التاكسي'],
        ['الخريطة', 'استخدم رابط الموقع في لوحة المصادر'],
      ],
      sections: [
        {
          h: 'أي مطار يخدم الإسكندرية',
          p: [
            'المطار الرئيسي للإسكندرية هو برج العرب، في الصحراء غرب المدينة. ويستخدم بعض المسافرين مطارات القاهرة ثم يكملون براً أو بالسكك، وهي رحلة منفصلة لها تخطيطها.',
            'في هذه الصفحة نفترض أنك تهبط في برج العرب وتريد الوصول إلى المنتزه.',
          ],
        },
        {
          h: 'المطار في الغرب والمنتزه في الشرق',
          p: [
            'المطار وحدائق المنتزه في طرفين متقابلين من الإسكندرية، فالانتقال يعبر المدينة ويمرّ عادةً بالمناطق المأهولة على الطريق. وقد يشتد الزحام، خصوصاً في آخر النهار ويوم الجمعة، فاترك وقتاً واسعاً ولا تتوقع انتقالاً قصيراً.',
            'ولأن الطرفين بعيدان إلى هذا الحد، فهذا من أطول الانتقالات داخل الإسكندرية، ويستحق أن تعامله كذلك عند تخطيط وقت وصولك.',
          ],
        },
        {
          h: 'خيارات الانتقال',
          list: [
            'انتقال خاص محجوز مسبقاً عبر فندقك أو مشغل مرخص',
            'تاكسي يُؤخذ من المطار',
            'سيارة تطبيق نقل، إن توفر سائق للاستقبال هناك',
            'النقل العام إلى المدينة ثم المنتزه — أبطأ وأصعب مع الأمتعة',
          ],
        },
        {
          h: 'ما لا نستطيع ذكره',
          p: [
            'لا ننشر أسعار انتقال أو أزمنة رحلة ثابتة، لأنها متغيرة ولم نتحقق منها. اتفق على الأجرة قبل الانطلاق، أو استخدم تطبيقاً يعرض السعر، وتأكد هل يشمل السعر الأمتعة والوجهة بدقة.',
            'اطلب أن توصلك إلى البوابة الرئيسية للمنتزه على طريق الجيش في المنارة البحرية، وأكّد نقطة الإنزال مع السائق.',
          ],
        },
        {
          h: 'تخطيط العودة إلى المطار',
          p: [
            'لأن المطار بعيد غرباً، فإن العودة هي الجزء الأجدر بترتيبه مسبقاً. إن كان أمامك رحلة جوية فاحجز سيارة لوقت محدد، وشارك بيانات رحلتك مع السائق، واترك هامشاً أطول مما تتركه لرحلة قصيرة داخل المدينة.',
            'وإن وصلت بتاكسي فاسأل السائق هل يمكنه القدوم في وقت متفق عليه عند عودتك، ودوّن المكان الذي يقترح الانتظار فيه.',
          ],
        },
        {
          h: 'كم يستغرق الانتقال',
          p: [
            'لا ننشر زمناً ثابتاً لانتقال المطار إلى المنتزه. فهو يعبر المدينة بأكملها، والرقم يتقلب تقلباً واسعاً بحسب الساعة واليوم، فخريطة حيّة في لحظة انطلاقك أنفع من أي رقم مكتوب مسبقاً.',
            'والزحام أشد في آخر النهار وأوائله ويوم الجمعة، وتضيف العطلات الرسمية والمدرسية إليه. كما يبطئ المطر والحوادث الطرقَ الرئيسية أكثر. وإن كان لك تسجيل وصول أو موعد ثابت في الطرف الآخر فاترك هامشاً واسعاً لا ضيقاً.',
          ],
          list: [
            'راجع الزحام الحيّ يوم الوصول — فالانتقال يعبر المدينة بأكملها',
            'توقّع أن يكون آخر النهار ويوم الجمعة الأبطأ',
            'اترك هامشاً واسعاً إن كان لك وقت محدد',
          ],
        },
        {
          h: 'تكلفة الانتقال، وتاريخ مراجعتها',
          p: [
            'نسجّل تكلفة هذا الانتقال بأنها لم يُتحقق منها. وعند مراجعة هذه الصفحة في 4 نوفمبر 2026 لم نتمكن من تأكيد أجرة حالية معتادة من برج العرب إلى المنتزه، وأجرة المطار عرضة للتغير خصوصاً، فلن نطبع رقماً لا نستطيع الالتزام به.',
            'ولسيارة تطبيق النقل، اضبط قائمة مكان قصر المنتزه كوجهة واقرأ تقدير التطبيق. وللتاكسي من المطار، اتفق على السعر الإجمالي قبل الانطلاق، وأكّد بوضوح هل يشمله الأمتعة والرسوم والوقوف والبوابة الدقيقة.',
          ],
          list: [
            'التكلفة — لم يُتحقق منها (روجعت الصفحة في 4 نوفمبر 2026)',
            'تقدير التطبيق — راجعه قبل التأكيد',
            'تاكسي المطار — اتفق على الإجمالي، مع الأمتعة والبوابة، أولاً',
          ],
        },
        {
          h: 'هل تحتاج إلى تغيير المركبة',
          p: [
            'الانتقال المحجوز مسبقاً أو تاكسي المطار أو سيارة تطبيق النقل توصلك من المطار إلى المنتزه في مركبة واحدة بلا تغيير. وهذا جوهر اختيارها: سائق واحد ورحلة واحدة وتبقى أمتعتك معك.',
            'أما النقل العام فعلى العكس. فالوصول إلى المنتزه بالأتوبيس أو الميكروباص من المطار يعني غالباً تغيير المركبة مرة على الأقل، في رحلة طويلة ومتعبة بالحقائب أصلاً. وإن سلكت هذا الطريق فاسأل في كل مرحلة هل تغيّر وأين.',
          ],
          list: [
            'انتقال خاص أو تاكسي أو تطبيق نقل — مركبة واحدة بلا تغيير',
            'النقل العام — توقّع تغييراً واحداً على الأقل؛ أكّده في كل مرحلة',
          ],
        },
        {
          h: 'الأمتعة والأطفال والكراسي المتحركة',
          p: [
            'الوصول إلى المطار يعني عادةً أمتعة، والسيارة — انتقال محجوز أو تاكسي — هي بفارق كبير أسهل طريقة لنقلها عبر المدينة. اطلب عند الحجز مركبة بصندوق يتسع، وأكّد أن السعر يشمل كل حقائبك.',
            'وللأطفال، لا تضمن أي وسيلة هنا مقعد طفل، فأحضر مثبّتاً إن كنت تعتمد على واحد، أو خطّط لاحتضان الصغار. وعربة الأطفال تتسع في السيارة أسهل من النقل العام.',
            'ولمستخدمي الكراسي المتحركة، اطلب من مشغل الانتقال أو السائق مسبقاً مركبة تستوعب كرسياً متحركاً، واسأل هل يُنقل مطوياً أم يُستخدم في مكانه. ولم نتحقق من إتاحة أي أسطول نقل بعينه، فأكّد قبل الحجز.',
          ],
        },
        {
          h: 'الاهتداء من المطار عبر رابط الخريطة',
          p: [
            'تضم لوحة المصادر بجوار هذا المقال رابط الموقع إلى قائمة مكان قصر المنتزه على خرائط Google — رابط الموقع. افتحه وشاركه مع سائقك أو شركة الانتقال، لتكون الوجهة دبوس المكان الدقيق لا وصفاً مكتوباً.',
            'تحقق من نقطة الإنزال على الخريطة قبل السفر، واتفق على البوابة التي ستستخدمها السيارة. وهذا الرابط وحده يزيل معظم التخمين من انتقال طويل عبر المدينة.',
          ],
        },
      ],
      faq: [
        ['أي مطار أقرب إلى قصر المنتزه؟', 'مطار الإسكندرية الرئيسي هو برج العرب في الطرف الغربي، والمنتزه في الطرف الشرقي، فالانتقال يعبر المدينة.'],
        ['كم تكلفة التاكسي من المطار إلى المنتزه؟', 'لا ننشر الأجرة لأننا لا نستطيع التحقق منها. اتفق على السعر قبل الانطلاق، أو استخدم تطبيقاً يعرضه.'],
        ['كم يستغرق الانتقال من المطار؟', 'لا نذكر زمناً ثابتاً. اترك هامشاً واسعاً، خصوصاً في آخر النهار أو يوم الجمعة، وتحقق من الزحام الحيّ يوم الزيارة.'],
        ['كيف أخطط للعودة إلى المطار؟', 'رتّبها مسبقاً. احجز سيارة لوقت محدد، وشارك بيانات رحلتك، واترك هامشاً إضافياً لأن العبور طويل.'],
        ['هل أحتاج إلى تغيير المركبة من المطار؟', 'مع انتقال خاص أو تاكسي أو سيارة تطبيق لا — فهي مركبة واحدة. أما النقل العام فيعني تغييراً واحداً على الأقل في رحلة طويلة مثقلة بالحقائب.'],
        ['كم تكلفة الانتقال من المطار إلى المنتزه؟', 'لم يُتحقق منها. لم نتمكن من تأكيد أجرة حالية عند مراجعة الصفحة في 4 نوفمبر 2026. اقرأ تقدير التطبيق أو اتفق على الإجمالي مع السائق أولاً.'],
        ['هل يناسب الانتقال من المطار الأمتعة أو الكرسي المتحرك؟', 'السيارة — انتقال أو تاكسي أو سيارة تطبيق — أسهل خيار لهما، لأن حقائبك تبقى معك. اطلب مسبقاً مركبة تستوعب كرسياً متحركاً مطوياً.'],
      ],
      related: ['from-city-centre', 'taxi-ride-hailing', 'from-train-station', 'public-transport', 'from-cairo'],
    },
  },
  {
    slug: 'from-cairo',
    group: 'transport',
    image: '/images/montaza-palace-coast.jpg',
    imageAlt: 'The Mediterranean coastline near Montaza, the eastern end of a Cairo-to-Alexandria day trip',
    en: {
      title: 'Montaza Palace from Cairo — Day-Trip Transport Explained',
      h1: 'Getting to Montaza Palace from Cairo',
      description: 'How to plan a trip from Cairo to Montaza Palace in Alexandria: the rail and road options, the onward leg to the eastern corniche, and how to plan the return on the same day.',
      lead: 'A Cairo day trip to Montaza Palace has two parts: getting from Cairo to Alexandria, then crossing Alexandria to the eastern corniche. Rail or road both work for the first leg; the second needs a taxi or ride-hailing car to the Montaza main entrance. Plan the return before you start.',
      quick: [
        ['Leg one', 'Cairo to Alexandria, by rail or road'],
        ['Leg two', 'Across Alexandria to Montaza, by taxi'],
        ['End point', 'Montaza main entrance, El-Gaish Rd'],
        ['Schedules', 'Confirm on the day, not in advance here'],
        ['Return', 'Same day is possible but long'],
        ['Whole trip', 'Always at least two legs'],
        ['Trip time', 'Varies; the Alexandria leg is least predictable'],
        ['Cost', 'Not verified (4 November 2026)'],
        ['Change', 'Required — a separate vehicle in Alexandria'],
        ['Map', 'Use the location link in the sources panel'],
      ],
      sections: [
        {
          h: 'Two legs, not one',
          p: [
            'Montaza is not reached directly from Cairo; Alexandria comes first. Think of the trip as two legs: Cairo to Alexandria, and then Alexandria to Montaza in the east. Each leg has its own timing, and the second is usually the less predictable.',
          ],
        },
        {
          h: 'Cairo to Alexandria by rail',
          p: [
            'Rail is the usual choice for a day trip, with trains running between Cairo and Alexandria. We do not publish schedules or fares because they change and we have not verified current ones.',
            'Book in advance where you can, arrive at the station early, and confirm the departure and return times at the station or with the operator. Note which Alexandria station your train uses, as there is more than one.',
          ],
        },
        {
          h: 'Cairo to Alexandria by road',
          p: [
            'The road option, by car, coach or ride-hailing, gives you more control over your own timing but is exposed to traffic. Allow generously for the drive and for delays on the approaches to Alexandria.',
          ],
        },
        {
          h: 'From Alexandria to Montaza',
          p: [
            'Once in Alexandria you still have the cross-city leg to the eastern corniche. Take a taxi or a ride-hailing car and set the destination to the Montaza Palace place listing in Al Mandarah Bahri on El-Gaish Road. Confirm the drop-off gate with the driver.',
          ],
        },
        {
          h: 'Planning the same-day return',
          list: [
            'Decide your target return time before you leave Cairo',
            'Confirm the last realistic train or road option of the day at the station',
            'Leave the estate with a wide margin before your connection',
            'Have a backup plan if you miss the intended train',
            'If the day feels tight, consider staying overnight in Alexandria instead',
          ],
        },
        {
          h: 'How long the whole trip takes, and what changes it',
          p: [
            'We do not publish a total time for a Cairo to Montaza trip, because it is really two journeys stacked together and each behaves differently. The Cairo–Alexandria leg has its own timetable and its own delays; the cross-city leg in Alexandria is at the mercy of coastal traffic.',
            'What usually decides the day is the second leg. Even if your train arrives on time, the road run to the eastern corniche can stretch in the late afternoon or on a Friday, and the return carries the same risk in reverse. For a day trip, this is why we recommend starting early and building slack into both ends.',
          ],
          list: [
            'Two legs, each with its own timing — do not treat them as one figure',
            'The Alexandria cross-city leg is the less predictable of the two',
            'Start early and leave slack at both ends if you are doing a day trip',
          ],
        },
        {
          h: 'What the trip costs, and the date we checked',
          p: [
            'We mark the cost of this trip as Not verified. When this page was checked on 4 November 2026 we could not confirm a current rail fare between Cairo and Alexandria, nor a standard road-trip cost, so we publish no figure.',
            'For the rail leg, check the fare when you book, at the station or through the operator. For the road leg, either read the app estimate for the Alexandria cross-city trip or agree the price with a driver. Keeping the two costs separate makes it easier to see where your budget is going.',
          ],
          list: [
            'Cost — Not verified (page checked 4 November 2026)',
            'Rail fare — confirm when booking or at the station',
            'Alexandria cross-city leg — app estimate or agreed price',
          ],
        },
        {
          h: 'Whether you need to change vehicles',
          p: [
            'Yes — a Cairo to Montaza trip always involves a change, because no single service runs the whole way. You travel Cairo to Alexandria first, then take a separate vehicle from wherever you arrive in Alexandria to the Montaza gate.',
            'That change is one of the things to plan for. Decide before you arrive which Alexandria station or drop-off point you will use, and have your onward ride in mind so you are not improvising with luggage in a strange city.',
          ],
          list: [
            'Cairo → Alexandria — first vehicle',
            'Alexandria → Montaza — a second, separate vehicle; always a change',
            'Decide your Alexandria drop-off before you travel',
          ],
        },
        {
          h: 'Luggage, children and wheelchair considerations',
          p: [
            'A day trip from Cairo with luggage is a heavy day, so if you can travel light, do. On the rail leg your bags stay with you; on the cross-city leg a car is far easier than public transport.',
            'For children, a long day with two legs and a busy estate is tiring; build in breaks and expect the return to be late if you start late. No mode guarantees a child seat, so bring a restraint if you rely on one.',
            'For wheelchair users, the change of vehicles is the main hurdle. Ask about accessible boarding on the rail leg and, in Alexandria, request a car that can take a wheelchair. We have not verified step-free access on the specific services, so confirm in advance.',
          ],
        },
        {
          h: 'Navigating with the map link',
          p: [
            'The sources panel beside this article carries the site’s link to the Montaza Palace place listing on Google Maps — the location link. For a two-leg trip it is especially useful: you can open it in Alexandria and hand the exact destination to your driver immediately.',
            'If you also want to see the whole route, search the Cairo station and the Montaza listing in the same app so the full journey is visible, and check the drop-off point on the map before you set out.',
          ],
        },
      ],
      faq: [
        ['Can I visit Montaza Palace as a day trip from Cairo?', 'Yes, but it is a long day: a Cairo–Alexandria leg and then a cross-city leg to the east. Confirm your return transport before you travel.'],
        ['Should I take the train or drive from Cairo?', 'Train is the usual choice for a day trip; the road gives more flexibility but is exposed to traffic. We do not publish times or fares.'],
        ['Does a train from Cairo go to Montaza?', 'No. Trains run between Cairo and Alexandria; Montaza is then a separate cross-city leg by road within Alexandria.'],
        ['How do I plan the return to Cairo?', 'Set a target return time, confirm the last realistic train or road option at the station, leave the estate early, and keep a backup plan.'],
        ['How long is the whole Cairo to Montaza trip?', 'We do not publish a total time. It is two legs — Cairo to Alexandria, then across Alexandria — and the second is the less predictable. Start early and leave slack.'],
        ['How much does the trip from Cairo cost?', 'Not verified. We could not confirm a current rail fare or road-trip cost when this page was checked on 4 November 2026. Confirm the rail fare when booking and get an app estimate for the city leg.'],
        ['Do I need to change vehicles coming from Cairo?', 'Yes, always. No single service runs the whole way, so you travel Cairo to Alexandria first and then take a separate vehicle to the Montaza gate.'],
      ],
      related: ['from-train-station', 'from-city-centre', 'taxi-ride-hailing', 'from-airport'],
    },
    ar: {
      title: 'قصر المنتزه من القاهرة — شرح نقل الرحلة اليومية',
      h1: 'الوصول إلى قصر المنتزه من القاهرة',
      description: 'كيف تخطط رحلة من القاهرة إلى قصر المنتزه في الإسكندرية: خيارا القطار والطريق، والمرحلة التالية إلى الكورنيش الشرقي، وكيف تخطط للعودة في اليوم نفسه.',
      lead: 'لرحلة يوم واحد من القاهرة إلى قصر المنتزه مرحلتان: الانتقال من القاهرة إلى الإسكندرية، ثم عبور الإسكندرية إلى الكورنيش الشرقي. القطار أو الطريق يصحّان للمرحلة الأولى؛ أما الثانية فتحتاج تاكسي أو سيارة تطبيق إلى البوابة الرئيسية للمنتزه. خطط للعودة قبل البدء.',
      quick: [
        ['المرحلة الأولى', 'القاهرة إلى الإسكندرية بالقطار أو الطريق'],
        ['المرحلة الثانية', 'عبر الإسكندرية إلى المنتزه بتاكسي'],
        ['نقطة الوصول', 'البوابة الرئيسية للمنتزه، طريق الجيش'],
        ['المواعيد', 'تأكد يوم الزيارة، لا هنا'],
        ['العودة', 'ممكنة في اليوم نفسه لكنها طويلة'],
        ['الرحلة كاملة', 'مرحلتان على الأقل دائماً'],
        ['زمن الرحلة', 'يتغير؛ مرحلة الإسكندرية أقل توقعاً'],
        ['التكلفة', 'لم يُتحقق منها (4 نوفمبر 2026)'],
        ['التغيير', 'مطلوب — مركبة منفصلة في الإسكندرية'],
        ['الخريطة', 'استخدم رابط الموقع في لوحة المصادر'],
      ],
      sections: [
        {
          h: 'مرحلتان لا واحدة',
          p: [
            'لا يُوصل إلى المنتزه مباشرة من القاهرة؛ فالإسكندرية أولاً. اعتبر الرحلة مرحلتين: القاهرة إلى الإسكندرية، ثم الإسكندرية إلى المنتزه شرقاً. ولكل مرحلة توقيتها، والثانية عادةً أقل قابلية للتوقع.',
          ],
        },
        {
          h: 'من القاهرة إلى الإسكندرية بالقطار',
          p: [
            'القطار هو الخيار المعتاد لرحلة يوم واحد، بقطارات بين القاهرة والإسكندرية. ولا ننشر جداول أو أجرة لأنها متغيرة ولم نتحقق من الحالية.',
            'احجز مسبقاً حيث يمكنك، ووصل المحطة مبكراً، وأكّد مواعيد الذهاب والعودة في المحطة أو مع المشغل. ودوّن محطة الإسكندرية التي يستخدمها قطارك، فهناك أكثر من واحدة.',
          ],
        },
        {
          h: 'من القاهرة إلى الإسكندرية بالطريق',
          p: [
            'خيار الطريق، بسيارة أو أتوبيس أو تطبيق نقل، يمنحك تحكماً أكبر في توقيتك لكنه معرّض للزحام. اترك وقتاً واسعاً للقيادة ولتأخيرات مداخل الإسكندرية.',
          ],
        },
        {
          h: 'من الإسكندرية إلى المنتزه',
          p: [
            'بعد وصولك الإسكندرية يبقى أمامك الانتقال عبر المدينة إلى الكورنيش الشرقي. خذ تاكسي أو سيارة تطبيق واضبط الوجهة على قائمة مكان قصر المنتزه في المنارة البحرية على طريق الجيش. وأكّد بوابة الإنزال مع السائق.',
          ],
        },
        {
          h: 'تخطيط العودة في اليوم نفسه',
          list: [
            'حدّد وقت العودة المستهدف قبل مغادرة القاهرة',
            'أكّد آخر خيار قطار أو طريق واقعي في اليوم عند المحطة',
            'غادر الحدائق بهامش واسع قبل موعد المواصلة',
            'احتفظ بخطة بديلة إن فاتك القطار المقصود',
            'إن بدا اليوم ضيقاً ففكّر في المبيت بالإسكندرية بدلاً من ذلك',
          ],
        },
        {
          h: 'كم تستغرق الرحلة كاملة، وما الذي يغيّر ذلك',
          p: [
            'لا ننشر زمناً إجمالياً لرحلة من القاهرة إلى المنتزه، لأنها في الحقيقة رحلتان مركّبتان ولكل منهما سلوكها. فرحلة القاهرة–الإسكندرية لها جدولها وتأخيراتها، ورحلة العبور داخل الإسكندرية تحت رحمة الزحام الساحلي.',
            'وما يحدّد اليوم عادةً هو المرحلة الثانية. فحتى إن وصل قطارك في موعده، قد يمتد الانتقال البري إلى الكورنيش الشرقي آخر النهار أو يوم الجمعة، وللعودة المخاطرة نفسها معكوسة. ولذلك نوصي في رحلة اليوم الواحد بالبدء مبكراً وبإدخال فسحة في الطرفين.',
          ],
          list: [
            'مرحلتان لكل منهما توقيتها — لا تعاملهما كرقم واحد',
            'مرحلة العبور داخل الإسكندرية أقل المرحلتين قابلية للتوقع',
            'ابدأ مبكراً واترك فسحة في الطرفين إن كانت رحلة يوم واحد',
          ],
        },
        {
          h: 'تكلفة الرحلة، وتاريخ مراجعتها',
          p: [
            'نسجّل تكلفة هذه الرحلة بأنها لم يُتحقق منها. وعند مراجعة هذه الصفحة في 4 نوفمبر 2026 لم نتمكن من تأكيد أجرة قطار حالية بين القاهرة والإسكندرية، ولا تكلفة معتادة لرحلة الطريق، فلا ننشر أي رقم.',
            'ولمرحلة القطار، تحقق من الأجرة عند الحجز أو في المحطة أو مع المشغل. ولمرحلة الطريق، إما اقرأ تقدير التطبيق لرحلة العبور داخل الإسكندرية أو اتفق على السعر مع سائق. وفصل التكلفتين يسهّل رؤية وجهة ميزانيتك.',
          ],
          list: [
            'التكلفة — لم يُتحقق منها (روجعت الصفحة في 4 نوفمبر 2026)',
            'أجرة القطار — أكّدها عند الحجز أو في المحطة',
            'مرحلة العبور داخل الإسكندرية — تقدير التطبيق أو سعر متفق عليه',
          ],
        },
        {
          h: 'هل تحتاج إلى تغيير المركبة',
          p: [
            'نعم — رحلة القاهرة إلى المنتزه تتضمن دائماً تغييراً، إذ لا توجد خدمة واحدة تسير الطريق كله. تسافر من القاهرة إلى الإسكندرية أولاً، ثم تأخذ مركبة منفصلة من نقطة وصولك في الإسكندرية إلى بوابة المنتزه.',
            'وهذا التغيير من الأمور التي يجب التخطيط لها. قرّر قبل الوصول أي محطة أو نقطة إنزال في الإسكندرية ستستخدم، وأبقِ وسيلة انتقالك التالية في ذهنك كي لا ترتجل مع الأمتعة في مدينة غريبة.',
          ],
          list: [
            'القاهرة ← الإسكندرية — المركبة الأولى',
            'الإسكندرية ← المنتزه — مركبة ثانية منفصلة؛ تغيير دائماً',
            'قرّر نقطة إنزالك في الإسكندرية قبل السفر',
          ],
        },
        {
          h: 'الأمتعة والأطفال والكراسي المتحركة',
          p: [
            'رحلة يوم من القاهرة مع أمتعة يوم ثقيل، فإن أمكنك السفر بخفة فافعل. وفي مرحلة القطار تبقى حقائبك معك، وفي مرحلة العبور تكون السيارة أسهل بكثير من النقل العام.',
            'وللأطفال، يوم طويل بمرحلتين وحدائق مزدحمة متعب؛ أدخل فترات راحة وتوقّع عودة متأخرة إن بدأت متأخراً. ولا تضمن أي وسيلة مقعد طفل، فأحضر مثبّتاً إن كنت تعتمد على واحد.',
            'ولمستخدمي الكراسي المتحركة، تغيير المركبات هو العقبة الأساسية. اسأل عن الصعود المهيّأ في مرحلة القطار، وفي الإسكندرية اطلب سيارة تستوعب كرسياً متحركاً. ولم نتحقق من الوصول بلا درجات في الخدمات المحددة، فأكّد مسبقاً.',
          ],
        },
        {
          h: 'الاهتداء عبر رابط الخريطة',
          p: [
            'تضم لوحة المصادر بجوار هذا المقال رابط الموقع إلى قائمة مكان قصر المنتزه على خرائط Google — رابط الموقع. ولرحلة من مرحلتين يكون مفيداً خصوصاً: يمكنك فتحه في الإسكندرية وتسليم الوجهة الدقيقة لسائقك فوراً.',
            'وإن أردت رؤية المسار كاملاً، ابحث عن محطة القاهرة وقائمة المنتزه في التطبيق نفسه ليظهر المسار بالكامل، وتحقّق من نقطة الإنزال على الخريطة قبل الانطلاق.',
          ],
        },
      ],
      faq: [
        ['هل يمكن زيارة قصر المنتزه في رحلة يوم من القاهرة؟', 'نعم، لكنه يوم طويل: مرحلة القاهرة–الإسكندرية ثم انتقال عبر المدينة شرقاً. أكّد وسيلة عودتك قبل السفر.'],
        ['هل آخذ القطار أم أقود من القاهرة؟', 'القطار الخيار المعتاد لرحلة يوم؛ والطريق يمنح مرونة أكبر لكنه معرّض للزحام. لا ننشر مواعيد أو أجرة.'],
        ['هل يذهب قطار من القاهرة إلى المنتزه؟', 'لا. تعمل القطارات بين القاهرة والإسكندرية؛ ثم يكون المنتزه مرحلة منفصلة عبر المدينة براً داخل الإسكندرية.'],
        ['كيف أخطط للعودة إلى القاهرة؟', 'حدّد وقت عودة مستهدفاً، وأكّد آخر خيار قطار أو طريق عند المحطة، وغادر الحدائق مبكراً، واحتفظ بخطة بديلة.'],
        ['كم تستغرق الرحلة كاملة من القاهرة إلى المنتزه؟', 'لا ننشر زمناً إجمالياً. إنها مرحلتان — القاهرة إلى الإسكندرية ثم العبور داخل الإسكندرية — والثانية أقل توقعاً. ابدأ مبكراً واترك فسحة.'],
        ['كم تكلفة الرحلة من القاهرة؟', 'لم يُتحقق منها. لم نتمكن من تأكيد أجرة قطار أو تكلفة طريق حالية عند مراجعة الصفحة في 4 نوفمبر 2026. أكّد أجرة القطار عند الحجز واحصل على تقدير تطبيق لمرحلة المدينة.'],
        ['هل أحتاج إلى تغيير المركبة قادماً من القاهرة؟', 'نعم دائماً. لا توجد خدمة واحدة تسير الطريق كله، فتسافر من القاهرة إلى الإسكندرية أولاً ثم تأخذ مركبة منفصلة إلى بوابة المنتزه.'],
      ],
      related: ['from-train-station', 'from-city-centre', 'taxi-ride-hailing', 'from-airport'],
    },
  },
  {
    slug: 'taxi-ride-hailing',
    group: 'transport',
    image: '/images/montaza-palace-hero.jpg',
    imageAlt: 'Montaza Palace approached by road, the usual drop-off route for taxi and ride-hailing arrivals',
    en: {
      title: 'Montaza Palace by Taxi or Ride-Hailing — Drop-off and Return',
      h1: 'Getting to Montaza Palace by taxi or ride-hailing',
      description: 'Using a taxi or a ride-hailing app to reach Montaza Palace in Alexandria: setting the right destination, where to be dropped off and picked up, traffic, and planning the return.',
      lead: 'A taxi or a ride-hailing car is the most straightforward way to reach Montaza Palace, because you can set the exact destination. Ask for the main entrance on El-Gaish Road in Al Mandarah Bahri, confirm the gate with the driver, and sort out the return before you go inside.',
      quick: [
        ['Best mode', 'Taxi or ride-hailing car'],
        ['Destination', 'Montaza Palace place listing, El-Gaish Rd'],
        ['Drop-off', 'Main entrance, confirm the gate'],
        ['Traffic', 'Heavy late afternoon and Fridays'],
        ['Return', 'Book from inside the grounds'],
        ['Ride time', 'Varies; use the app estimate'],
        ['Ride cost', 'Not verified (4 November 2026)'],
        ['Change', 'None — one door-to-door trip'],
        ['Map', 'Use the location link in the sources panel'],
      ],
      sections: [
        {
          h: 'Why this is the simplest option',
          p: [
            'Ride-hailing apps are widely used in Alexandria, and a taxi or app car takes you door to door to a specific gate. That matters at Montaza, because the estate is large and has more than one entrance.',
            'Set the destination to the Montaza Palace place listing rather than the general area, so the driver is guided to the right place.',
          ],
        },
        {
          h: 'Setting the destination correctly',
          list: [
            'Use the place listing, not just the word “Montaza”',
            'Check the drop-off point on the map before you confirm',
            'Tell the driver El-Gaish Road, Al Mandarah Bahri',
            'Agree in advance which gate you want',
          ],
        },
        {
          h: 'Where to be dropped off and picked up',
          p: [
            'Ask for the main entrance on El-Gaish Road. Different gates serve different parts of the estate, so confirm which one the driver uses and remember it for your return.',
            'For the return, agree a meeting point near the gate where cars can stop, and note a landmark to help the driver find you.',
          ],
        },
        {
          h: 'Traffic and timing',
          p: [
            'Alexandria’s coastal traffic is heavy, especially in the late afternoon and on Fridays. If you are meeting someone or catching onward transport, leave extra time and check the live traffic in the app before you set off.',
          ],
        },
        {
          h: 'Planning the return trip',
          p: [
            'Leaving can be slower than arriving. Book your ride-hailing car while you are still inside the grounds so it is waiting as you reach the gate, or ask a taxi to come back at a fixed time.',
            'We do not publish fares, because prices change and we have not verified them. Check the price in the app, or agree the fare with the driver before you set off.',
          ],
        },
        {
          h: 'How long the ride takes, and what changes it',
          p: [
            'We do not give a fixed ride time to Montaza, because it depends on where you start and on the traffic that day. The app estimate you see before you book is the best available guide, and it updates with live conditions.',
            'The coastal road is the bottleneck. It runs slowest in the late afternoon and early evening and on Fridays, and school and public holidays can make it worse. Rain and road incidents slow it further. If you are on a schedule, check the estimate again just before you request the car.',
          ],
          list: [
            'Use the app’s own time estimate — it reflects live traffic',
            'Expect the late afternoon and Friday to be slowest',
            'Re-check the estimate right before you book',
          ],
        },
        {
          h: 'What a ride costs, and how to check',
          p: [
            'We mark the cost of a ride to Montaza as Not verified. When this page was checked on 4 November 2026 we could not confirm a current standard fare, and app prices vary with distance, demand and time of day, so any figure here would mislead you.',
            'The reliable way to know is inside the app: enter the Montaza Palace place listing as the destination and read the estimate before you confirm. For a metered taxi, agree the total with the driver before you set off, and ask whether it covers luggage and the exact gate.',
          ],
          list: [
            'Cost — Not verified (page checked 4 November 2026)',
            'App estimate — read it in the app before confirming',
            'Metered taxi — agree the total and the gate before you set off',
            'Ask whether the price includes luggage',
          ],
        },
        {
          h: 'Whether you need to change vehicles',
          p: [
            'No. A taxi or ride-hailing car is a single door-to-door trip: you get in where you are and get out at the Montaza gate, with no change along the way. That is exactly why this is the recommended mode for reaching the estate.',
            'The only thing to confirm is the gate. Different gates serve different parts of the grounds, so settle which one you want with the driver before you set off, rather than deciding while the car is moving.',
          ],
          list: [
            'Taxi or ride-hailing — one vehicle, no change',
            'Confirm the gate in advance, not en route',
          ],
        },
        {
          h: 'Luggage, children and wheelchair needs in a taxi',
          p: [
            'A car is the easiest mode with luggage, because your bags stay with you and you are set down at the gate. When you request the ride, choose a vehicle category with enough boot space and mention your bags if the app lets you.',
            'For children, there is no guaranteed child seat in Egypt’s taxis or ride-hailing cars. If you depend on a restraint, bring your own; otherwise plan to hold small children and keep the doors locked while moving.',
            'For wheelchair users, request a car that can take a wheelchair and say in advance whether it needs to be folded or used in place. Ask the driver to stop where the approach to the gate is flattest. We have not verified step-free access at every Montaza entrance, so confirm on arrival.',
          ],
        },
        {
          h: 'Navigating with the map link',
          p: [
            'The sources panel beside this article carries the site’s link to the Montaza Palace place listing on Google Maps — the location link. Open it in the app before you book, so the pin — not a spoken description — is what the driver follows.',
            'Check the drop-off point on the map before you confirm, and save the pin so you can request the return ride to the same place. Using one exact pin for both directions avoids the common mistake of being dropped at one gate and picked up at another.',
          ],
        },
      ],
      faq: [
        ['How do I get a taxi at Montaza Palace?', 'Book a ride-hailing car from inside the grounds, or ask a taxi to return at a fixed time. Agree a meeting point near the gate you used.'],
        ['What should I enter as the destination?', 'The Montaza Palace place listing on the map, so the driver is guided to the correct entrance. Mention El-Gaish Road, Al Mandarah Bahri.'],
        ['How much is a taxi to Montaza?', 'We do not publish fares because we cannot verify them. Check the price in the app or agree it with the driver first.'],
        ['Is ride-hailing reliable in Alexandria?', 'Ride-hailing apps are widely used, but coastal traffic can be heavy, especially late afternoon and on Fridays, so allow extra time.'],
        ['How long is a taxi ride to Montaza?', 'We do not publish a fixed time. Use the app’s own estimate, which reflects live traffic, and expect the late afternoon and Friday to be slowest.'],
        ['How do I know the fare before I travel?', 'Read the estimate in the ride-hailing app before you confirm, or agree the total with a taxi driver before you set off. We mark the cost Not verified (page checked 4 November 2026).'],
        ['Do I need to change cars to reach Montaza?', 'No. A taxi or ride-hailing car is a single door-to-door trip. The only thing to settle is which gate you want.'],
      ],
      related: ['from-city-centre', 'public-transport', 'from-airport', 'parking', 'location-entrance'],
    },
    ar: {
      title: 'قصر المنتزه بالتاكسي أو تطبيق النقل — الإنزال والعودة',
      h1: 'الوصول إلى قصر المنتزه بالتاكسي أو تطبيق النقل',
      description: 'استخدام التاكسي أو تطبيق النقل للوصول إلى قصر المنتزه بالإسكندرية: ضبط الوجهة الصحيحة، وأين تُنزل وتُقلّ، والزحام، وتخطيط العودة.',
      lead: 'التاكسي أو سيارة تطبيق النقل هي أبسط طريقة للوصول إلى قصر المنتزه، لأنك تضبط الوجهة بدقة. اطلب البوابة الرئيسية على طريق الجيش في المنارة البحرية، وأكّد البوابة مع السائق، ورتّب العودة قبل الدخول.',
      quick: [
        ['أفضل وسيلة', 'تاكسي أو سيارة تطبيق نقل'],
        ['الوجهة', 'قائمة مكان قصر المنتزه، طريق الجيش'],
        ['الإنزال', 'البوابة الرئيسية، أكّد البوابة'],
        ['الزحام', 'شديد آخر النهار والجمعة'],
        ['العودة', 'احجز من داخل الحدائق'],
        ['زمن الرحلة', 'يتغير؛ استخدم تقدير التطبيق'],
        ['تكلفة الرحلة', 'لم يُتحقق منها (4 نوفمبر 2026)'],
        ['التغيير', 'لا يوجد — رحلة واحدة من الباب إلى الباب'],
        ['الخريطة', 'استخدم رابط الموقع في لوحة المصادر'],
      ],
      sections: [
        {
          h: 'لماذا هذه أبسط وسيلة',
          p: [
            'تطبيقات النقل شائعة في الإسكندرية، والتاكسي أو سيارة التطبيق توصلك من الباب إلى بوابة محددة. وهذا مهم في المنتزه لأن الحدائق واسعة ولها أكثر من مدخل.',
            'اضبط الوجهة على قائمة مكان قصر المنتزه لا على المنطقة العامة، حتى يُوجَّه السائق إلى المكان الصحيح.',
          ],
        },
        {
          h: 'ضبط الوجهة بشكل صحيح',
          list: [
            'استخدم قائمة المكان، لا كلمة «المنتزه» وحدها',
            'تحقق من نقطة الإنزال على الخريطة قبل التأكيد',
            'أخبر السائق: طريق الجيش، المنارة البحرية',
            'اتفق مسبقاً على البوابة التي تريدها',
          ],
        },
        {
          h: 'أين تُنزل وتُقلّ',
          p: [
            'اطلب البوابة الرئيسية على طريق الجيش. وتخدم بوابات مختلفة أجزاءً مختلفة من الحدائق، فأكّد أي بوابة يستخدمها السائق وتذكّرها لعودتك.',
            'وللعودة، اتفق على نقطة لقاء قرب البوابة يمكن للسيارات الوقوف فيها، ودوّن علامة تسهّل على السائق إيجادك.',
          ],
        },
        {
          h: 'الزحام والتوقيت',
          p: [
            'الزحام الساحلي في الإسكندرية شديد، خصوصاً آخر النهار ويوم الجمعة. وإن كان لك موعد أو وسيلة مواصلة فاترك وقتاً إضافياً وراقب الزحام الحيّ في التطبيق قبل الانطلاق.',
          ],
        },
        {
          h: 'تخطيط رحلة العودة',
          p: [
            'قد تكون المغادرة أبطأ من الوصول. احجز سيارة التطبيق وأنت داخل الحدائق حتى تكون في انتظارك عند وصولك البوابة، أو اطلب من تاكسي العودة في وقت محدد.',
            'لا ننشر الأجرة لأن الأسعار متغيرة ولم نتحقق منها. تحقق من السعر في التطبيق، أو اتفق على الأجرة مع السائق قبل الانطلاق.',
          ],
        },
        {
          h: 'كم تستغرق الرحلة، وما الذي يغيّر ذلك',
          p: [
            'لا نذكر زمناً ثابتاً للرحلة إلى المنتزه، لأنه يتوقف على نقطة انطلاقك وعلى زحام اليوم. وتقدير التطبيق الذي تراه قبل الحجز هو أفضل دليل متاح، وهو يتحدّث مع الأحوال الحيّة.',
            'والطريق الساحلي هو عنق الزجاجة. فهو الأبطأ في آخر النهار وأوائله ويوم الجمعة، وتزيده العطلات المدرسية والرسمية سوءاً، ويبطئه المطر والحوادث أكثر. وإن كان لك موعد، أعد رؤية التقدير مباشرة قبل طلب السيارة.',
          ],
          list: [
            'استخدم تقدير الوقت في التطبيق نفسه — فهو يعكس الزحام الحيّ',
            'توقّع أن يكون آخر النهار ويوم الجمعة الأبطأ',
            'أعد مراجعة التقدير مباشرة قبل الحجز',
          ],
        },
        {
          h: 'تكلفة الرحلة، وكيف تتحقق منها',
          p: [
            'نسجّل تكلفة الرحلة إلى المنتزه بأنها لم يُتحقق منها. وعند مراجعة هذه الصفحة في 4 نوفمبر 2026 لم نتمكن من تأكيد أجرة حالية معتادة، وأسعار التطبيقات تتغير بالمسافة والطلب والوقت، فأي رقم هنا سيضللك.',
            'والسبيل الموثوق هو داخل التطبيق: أدخل قائمة مكان قصر المنتزه كوجهة واقرأ التقدير قبل التأكيد. وللتاكسي بالعدّاد، اتفق على الإجمالي مع السائق قبل الانطلاق، واسأل هل يشمله الأمتعة والبوابة الدقيقة.',
          ],
          list: [
            'التكلفة — لم يُتحقق منها (روجعت الصفحة في 4 نوفمبر 2026)',
            'تقدير التطبيق — اقرأه في التطبيق قبل التأكيد',
            'التاكسي بالعدّاد — اتفق على الإجمالي والبوابة قبل الانطلاق',
            'اسأل هل يشمل السعر الأمتعة',
          ],
        },
        {
          h: 'هل تحتاج إلى تغيير المركبة',
          p: [
            'لا. التاكسي أو سيارة تطبيق النقل رحلة واحدة من الباب إلى الباب: تركب حيث أنت وتنزل عند بوابة المنتزه بلا تغيير في الطريق. وهذا بالضبط سبب كونها الوسيلة الموصى بها للوصول إلى الحدائق.',
            'والشيء الوحيد الذي يجب تأكيده هو البوابة. فالبوابات المختلفة تخدم أجزاءً مختلفة من الحدائق، فاتفق على البوابة التي تريدها مع السائق قبل الانطلاق، لا أثناء سير السيارة.',
          ],
          list: [
            'تاكسي أو تطبيق نقل — مركبة واحدة بلا تغيير',
            'أكّد البوابة مسبقاً لا في الطريق',
          ],
        },
        {
          h: 'الأمتعة والأطفال والكراسي المتحركة في التاكسي',
          p: [
            'السيارة أسهل وسيلة مع الأمتعة، لأن حقائبك تبقى معك وتُنزل عند البوابة. وعند طلب الرحلة اختر فئة مركبة يتسع صندوقها، واذكر حقائبك إن أتاح التطبيق ذلك.',
            'وللأطفال، لا يوجد مقعد طفل مضمون في تاكسيات مصر أو سيارات تطبيقات النقل. وإن كنت تعتمد على مثبّت فأحضر مثبّتك، وإلا فخطّط لاحتضان الصغار وإبقاء الأبواب مقفلة أثناء السير.',
            'ولمستخدمي الكراسي المتحركة، اطلب سيارة تستوعب كرسياً متحركاً وبيّن مسبقاً هل يُطوى أم يُستخدم في مكانه. واطلب من السائق التوقف حيث يكون الاقتراب إلى البوابة أسهل. ولم نتحقق من الوصول بلا درجات عند كل بوابة في المنتزه، فأكّد عند الوصول.',
          ],
        },
        {
          h: 'الاهتداء عبر رابط الخريطة',
          p: [
            'تضم لوحة المصادر بجوار هذا المقال رابط الموقع إلى قائمة مكان قصر المنتزه على خرائط Google — رابط الموقع. افتحه في التطبيق قبل الحجز، ليكون الدبوس — لا الوصف الشفهي — هو ما يتبعه السائق.',
            'تحقق من نقطة الإنزال على الخريطة قبل التأكيد، واحفظ الدبوس لتطلب رحلة العودة إلى المكان نفسه. واستخدام دبوس واحد دقيق في الاتجاهين يقيّ من الخطأ الشائع: الإنزال عند بوابة والالتقاط عند أخرى.',
          ],
        },
      ],
      faq: [
        ['كيف أجد تاكسي عند قصر المنتزه؟', 'احجز سيارة تطبيق من داخل الحدائق، أو اطلب من تاكسي العودة في وقت محدد. اتفق على نقطة لقاء قرب البوابة التي استخدمتها.'],
        ['ماذا أُدخل كوجهة؟', 'قائمة مكان قصر المنتزه على الخريطة، حتى يُوجَّه السائق إلى المدخل الصحيح. واذكر طريق الجيش، المنارة البحرية.'],
        ['كم تكلفة التاكسي إلى المنتزه؟', 'لا ننشر الأجرة لأننا لا نستطيع التحقق منها. تحقق من السعر في التطبيق أو اتفق عليه مع السائق أولاً.'],
        ['هل تطبيقات النقل موثوقة في الإسكندرية؟', 'تطبيقات النقل شائعة الاستخدام، لكن الزحام الساحلي قد يشتد، خصوصاً آخر النهار ويوم الجمعة، فاترك وقتاً إضافياً.'],
        ['كم تستغرق رحلة التاكسي إلى المنتزه؟', 'لا ننشر زمناً ثابتاً. استخدم تقدير التطبيق نفسه، فهو يعكس الزحام الحيّ، وتوقّع أن يكون آخر النهار ويوم الجمعة الأبطأ.'],
        ['كيف أعرف الأجرة قبل السفر؟', 'اقرأ التقدير في تطبيق النقل قبل التأكيد، أو اتفق على الإجمالي مع سائق التاكسي قبل الانطلاق. ونسجّل التكلفة بأنها لم يُتحقق منها (روجعت الصفحة في 4 نوفمبر 2026).'],
        ['هل أحتاج إلى تغيير السيارة للوصول إلى المنتزه؟', 'لا. التاكسي أو سيارة تطبيق النقل رحلة واحدة من الباب إلى الباب. والشيء الوحيد الذي يجب حسمه هو البوابة التي تريدها.'],
      ],
      related: ['from-city-centre', 'public-transport', 'from-airport', 'parking', 'location-entrance'],
    },
  },
  {
    slug: 'public-transport',
    group: 'transport',
    image: '/images/montaza-palace-garden.jpg',
    imageAlt: 'Trees and planting in the Montaza gardens, reached along the coastal route by local transport',
    en: {
      title: 'Montaza Palace by Public Transport — What to Confirm on the Day',
      h1: 'Getting to Montaza Palace by public transport',
      description: 'Using local buses and minibuses to reach Montaza Palace in Alexandria: what we cannot confirm, how to check with the driver, where to board, and how to plan the return.',
      lead: 'Alexandria has local buses and minibuses that run along the coast, but we cannot confirm which service stops nearest a Montaza entrance, or its route number or timetable. If you use public transport, confirm the route with the driver or conductor on the day and keep a taxi as backup.',
      quick: [
        ['Local transport', 'Buses and minibuses along the coast'],
        ['Confirmed stop at Montaza', 'Not verified'],
        ['What to do', 'Confirm the route with the driver'],
        ['Where to board', 'Along the corniche'],
        ['Return', 'Check the last service on the day'],
        ['Journey time', 'No reliable fixed time'],
        ['Cost', 'Not verified (4 November 2026)'],
        ['Change', 'May be needed — confirm on the day'],
        ['Map', 'Use the location link in the sources panel'],
      ],
      sections: [
        {
          h: 'What we can and cannot confirm',
          p: [
            'Alexandria is served by local buses and minibuses, many of them running along or near the coastal road. What we cannot confirm is which of them stops closest to a Montaza entrance, what it is numbered, how often it runs, or what it costs.',
            'Any guide that gives you a route number for this is guessing. Ask at the point of travel instead.',
          ],
        },
        {
          h: 'Confirming a route on the day',
          list: [
            'Ask the driver or conductor whether the vehicle passes the Montaza area',
            'Confirm exactly where you should get off',
            'Ask whether it stops close to an entrance or near the road',
            'Ask how frequently it runs and when the last one goes back',
          ],
        },
        {
          h: 'Where to board',
          p: [
            'The coastal road and the corniche are where most of this transport runs, so board at a stop along the coast in the direction of the eastern districts. Sidi Bishr is the area just before Montaza, so a vehicle heading that way is heading broadly right.',
          ],
        },
        {
          h: 'Getting to the entrance from the stop',
          p: [
            'The estate is large, and a bus stop on the main road is not the same as the gate. Once you are dropped, you may still have a walk to the entrance on El-Gaish Road. Ask the driver to point you towards the nearest one, or check the map listing.',
          ],
        },
        {
          h: 'Planning the return',
          p: [
            'Return is the part to plan most carefully on public transport, because services thin out in the evening and we cannot state a timetable. Ask the driver or conductor when the last service passes, note where to catch it, and keep a taxi or ride-hailing app as a backup.',
            'If you are visiting late in the day, assume the last convenient service may go before you are ready.',
          ],
        },
        {
          h: 'How long the journey can take, and what changes it',
          p: [
            'We do not publish a journey time by public transport to Montaza. Beyond the usual traffic, buses and minibuses stop often, wait at stops, and may not run to a fixed schedule you can rely on, so a time we printed would be guesswork.',
            'The coastal road still sets the pace, and it is slowest in the late afternoon and on Fridays. If you are meeting someone or catching onward transport, allow well over the app’s driving estimate, because the bus will take longer than a car on the same road.',
          ],
          list: [
            'No reliable fixed time — buses stop often and may not keep a schedule',
            'Expect a longer trip than the app’s car estimate on the same road',
            'Late afternoon and Friday are the slowest',
          ],
        },
        {
          h: 'What it costs, and the date we checked',
          p: [
            'We mark the cost of public transport to Montaza as Not verified. When this page was checked on 4 November 2026 we could not confirm a current fare for the relevant bus or minibus service, and fares can differ between services, so we will not state a number.',
            'The way to check is at the point of travel: ask the driver or conductor what the fare is, whether you pay on boarding, and whether it is a flat fare for the distance. Carry small change, which makes paying simpler.',
          ],
          list: [
            'Cost — Not verified (page checked 4 November 2026)',
            'Ask the driver or conductor the fare on the day',
            'Ask whether you pay on boarding',
            'Carry small change',
          ],
        },
        {
          h: 'Whether you need to change vehicles',
          p: [
            'Quite possibly yes. We cannot confirm a single bus or minibus service that runs from the central corniche all the way to a Montaza entrance, so a change may be needed somewhere along the eastern stretch.',
            'Confirm this with the driver or conductor at the point of travel rather than assuming: ask whether the vehicle reaches the Montaza area and, if not, where you change and which vehicle to take next. Treat the answer you get on the day as the reliable one.',
          ],
          list: [
            'A change may be needed — confirm with the driver or conductor',
            'Ask where to change and which vehicle to take next',
            'Treat the day’s answer, not a printed guide, as reliable',
          ],
        },
        {
          h: 'Luggage, children and wheelchair needs on public transport',
          p: [
            'Buses and minibuses are the least comfortable option with luggage. Space is limited, you may stand, and a change of vehicles adds to the strain, so if you are carrying much, a taxi is worth the extra for this trip.',
            'For children, hold small ones firmly and expect crowded vehicles at peak times; there is no child-seat provision on public transport here.',
            'For wheelchair users, we cannot confirm low-floor, accessible buses on this route or step-free boarding, so public transport may not be usable without assistance. Ask the operator on the day, and treat a taxi or ride-hailing car as the safer choice if step-free access matters to you.',
          ],
        },
        {
          h: 'Navigating with the map link',
          p: [
            'The sources panel beside this article carries the site’s link to the Montaza Palace place listing on Google Maps — the location link. Open it so you can see the estate pin, and if you can, show it to the driver or conductor to confirm you are heading to the right area.',
            'Once you are near, use the same pin to gauge how far the gate still is from your stop on the main road, and check the map again for the return stop before you enter the grounds.',
          ],
        },
      ],
      faq: [
        ['Which bus goes to Montaza Palace?', 'We cannot confirm a route number. Ask the driver or conductor on the day whether the vehicle passes the Montaza area and where to get off.'],
        ['Where do I get off for Montaza?', 'Ask the driver to confirm the stop nearest an entrance, and remember the estate is large, so you may still walk a short distance to the gate.'],
        ['Is public transport reliable to Montaza?', 'Buses and minibuses run along the coast, but we cannot confirm timetables. Confirm on the day and keep a taxi as backup.'],
        ['How do I get back in the evening?', 'Ask when the last service passes and where to catch it, and keep a ride-hailing app ready in case it goes before you are ready.'],
        ['How much is the bus to Montaza?', 'Not verified. We could not confirm a current fare when this page was checked on 4 November 2026. Ask the driver or conductor the fare on the day and whether you pay on boarding.'],
        ['How long does public transport take to Montaza?', 'We do not publish a time. Buses stop often and may not keep a reliable schedule, and the coastal road is slowest late afternoon and on Fridays. Allow longer than a car.'],
        ['Do I need to change buses to reach Montaza?', 'It may be necessary. We cannot confirm a single service running from the central corniche to a Montaza entrance, so confirm with the driver or conductor where to change on the day.'],
      ],
      related: ['taxi-ride-hailing', 'from-city-centre', 'from-train-station', 'location-entrance', 'how-to-get-there'],
    },
    ar: {
      title: 'قصر المنتزه بالنقل العام — ما يجب تأكيده يوم الزيارة',
      h1: 'الوصول إلى قصر المنتزه بالنقل العام',
      description: 'استخدام الأتوبيسات والميكروباصات المحلية للوصول إلى قصر المنتزه بالإسكندرية: ما لا نستطيع تأكيده، وكيف تتحقق مع السائق، ومن أين تركب، وكيف تخطط للعودة.',
      lead: 'تمتلك الإسكندرية أتوبيسات وميكروباصات محلية تسير على الساحل، لكننا لا نستطيع تأكيد أي خدمة تتوقف أقرب إلى بوابة المنتزه، ولا رقم خطها ولا جدولها. وإن استخدمت النقل العام فأكّد الخط مع السائق أو المحصّل يوم الزيارة واحتفظ بتاكسي كخطة بديلة.',
      quick: [
        ['النقل المحلي', 'أتوبيسات وميكروباصات على الساحل'],
        ['موقف مؤكد عند المنتزه', 'لم يُتحقق'],
        ['ما تفعله', 'أكّد الخط مع السائق'],
        ['من أين تركب', 'على الكورنيش'],
        ['العودة', 'تحقق من آخر خدمة يوم الزيارة'],
        ['زمن الرحلة', 'لا يوجد زمن ثابت موثوق'],
        ['التكلفة', 'لم يُتحقق منها (4 نوفمبر 2026)'],
        ['التغيير', 'قد يلزم — أكّده يوم الزيارة'],
        ['الخريطة', 'استخدم رابط الموقع في لوحة المصادر'],
      ],
      sections: [
        {
          h: 'ما نستطيع تأكيده وما لا نستطيع',
          p: [
            'تُخدم الإسكندرية بأتوبيسات وميكروباصات محلية، كثير منها يسير على الطريق الساحلي أو قربه. أما ما لا نستطيع تأكيده فهو أيها يتوقف أقرب إلى بوابة المنتزه، ورقم خطه، ومعدّل تكراره، وتكلفته.',
            'أي دليل يعطيك رقم خط لهذا الأمر فهو يخمّن. اسأل في مكان الرحلة بدلاً من ذلك.',
          ],
        },
        {
          h: 'تأكيد الخط يوم الزيارة',
          list: [
            'اسأل السائق أو المحصّل هل تمرّ المركبة بمنطقة المنتزه',
            'أكّد بدقة أين يجب أن تنزل',
            'اسأل هل تتوقف قرب بوابة أم قرب الطريق',
            'اسأل عن معدّل تكرارها ومتى تنطلق الأخيرة عائدة',
          ],
        },
        {
          h: 'من أين تركب',
          p: [
            'الطريق الساحلي والكورنيش حيث يسير معظم هذا النقل، فاركب من موقف على الساحل باتجاه الأحياء الشرقية. وسيدي بشر هي المنطقة التي تسبق المنتزه مباشرة، فالمركبة المتجهة إليها تسير في الاتجاه الصحيح إجمالاً.',
          ],
        },
        {
          h: 'من الموقف إلى البوابة',
          p: [
            'الحدائق واسعة، وموقف الأتوبيس على الطريق الرئيسي ليس هو البوابة. وبعد إنزالك قد يبقى أمامك مشي إلى المدخل على طريق الجيش. اطلب من السائق أن يدلّك على أقرب بوابة، أو راجع قائمة المكان على الخريطة.',
          ],
        },
        {
          h: 'تخطيط العودة',
          p: [
            'العودة هي الجزء الأجدر بالعناية في النقل العام، لأن الخدمات تقلّ مساءً ولا نستطيع ذكر جدول. اسأل السائق أو المحصّل متى تمرّ آخر خدمة، ودوّن من أين تركبها، واحتفظ بتاكسي أو تطبيق نقل كخطة بديلة.',
            'وإن كانت زيارتك متأخرة في اليوم فافترض أن آخر خدمة مريحة قد تنطلق قبل أن تكون جاهزاً.',
          ],
        },
        {
          h: 'كم تستغرق الرحلة، وما الذي يغيّر ذلك',
          p: [
            'لا ننشر زمناً لرحلة النقل العام إلى المنتزه. فإلى جانب الزحام المعتاد، تتوقف الأتوبيسات والميكروباصات كثيراً وتنتظر في المواقف، وقد لا تسير على جدول ثابت تعتمد عليه، فأي زمن نطبعه سيكون تخميناً.',
            'ويبقى الطريق الساحلي هو الذي يحدد الإيقاع، وهو الأبطأ آخر النهار ويوم الجمعة. وإن كان لك موعد أو مواصلة فاترك وقتاً أطول بكثير من تقدير القيادة في التطبيق، لأن الأتوبيس سيستغرق أطول من السيارة على الطريق نفسه.',
          ],
          list: [
            'لا يوجد زمن ثابت موثوق — الأتوبيسات تتوقف كثيراً وقد لا تلتزم بجدول',
            'توقّع رحلة أطول من تقدير السيارة في التطبيق على الطريق نفسه',
            'آخر النهار ويوم الجمعة الأبطأ',
          ],
        },
        {
          h: 'التكلفة، وتاريخ مراجعتها',
          p: [
            'نسجّل تكلفة النقل العام إلى المنتزه بأنها لم يُتحقق منها. وعند مراجعة هذه الصفحة في 4 نوفمبر 2026 لم نتمكن من تأكيد أجرة حالية لخدمة الأتوبيس أو الميكروباص المعنية، وقد تختلف الأجرة بين الخدمات، فلا نذكر رقماً.',
            'وطريقة التحقق عند مكان الرحلة: اسأل السائق أو المحصّل عن الأجرة، وهل تدفع عند الصعود، وهل هي أجرة موحّدة للمسافة. واحمل فكة صغيرة لتسهيل الدفع.',
          ],
          list: [
            'التكلفة — لم يُتحقق منها (روجعت الصفحة في 4 نوفمبر 2026)',
            'اسأل السائق أو المحصّل عن الأجرة يوم الزيارة',
            'اسأل هل تدفع عند الصعود',
            'احمل فكة صغيرة',
          ],
        },
        {
          h: 'هل تحتاج إلى تغيير المركبة',
          p: [
            'قد تحتاج على الأرجح. لا نستطيع تأكيد خدمة أتوبيس أو ميكروباص واحدة تسير من كورنيش الوسط إلى بوابة المنتزه مباشرة، فقد يلزم تغيير في نقطة ما على الجزء الشرقي.',
            'أكّد ذلك مع السائق أو المحصّل عند مكان الرحلة بدل الافتراض: اسأل هل تصل المركبة إلى منطقة المنتزه، وإن لا، فأين تغيّر وأي مركبة تأخذ بعدها. واعتبر إجابة اليوم نفسه هي الموثوقة.',
          ],
          list: [
            'قد يلزم تغيير — أكّده مع السائق أو المحصّل',
            'اسأل أين تغيّر وأي مركبة تأخذ بعدها',
            'اعتبر إجابة اليوم، لا دليلاً مطبوعاً، هي الموثوقة',
          ],
        },
        {
          h: 'الأمتعة والأطفال والكراسي المتحركة في النقل العام',
          p: [
            'الأتوبيسات والميكروباصات أقل الخيارات راحة مع الأمتعة. فالمساحة محدودة، وقد تقف، ويضيف تغيير المركبات إلى العناء، فإن كنت تحمل الكثير فالتاكسي يستحق الكلفة الإضافية في هذه الرحلة.',
            'وللأطفال، احتضن الصغار بحزم وتوقّع مركبات مزدحمة في أوقات الذروة؛ ولا يوجد توفير لمقاعد الأطفال في النقل العام هنا.',
            'ولمستخدمي الكراسي المتحركة، لا نستطيع تأكيد أتوبيسات منخفضة الأرضية مهيّأة على هذا الخط ولا صعود بلا درجات، فقد لا يكون النقل العام صالحاً دون مساعدة. اسأل المشغل يوم الزيارة، واعتبر التاكسي أو سيارة تطبيق النقل الخيار الأأمن إن كان وصولك بلا درجات مهمّاً لك.',
          ],
        },
        {
          h: 'الاهتداء عبر رابط الخريطة',
          p: [
            'تضم لوحة المصادر بجوار هذا المقال رابط الموقع إلى قائمة مكان قصر المنتزه على خرائط Google — رابط الموقع. افتحه لترى دبوس الحدائق، وإن أمكن فأظهره للسائق أو المحصّل لتأكيد أنك متجه إلى المنطقة الصحيحة.',
            'وعند الاقتراب، استخدم الدبوس نفسه لتقدير بُعد البوابة عن موقفك على الطريق الرئيسي، وراجع الخريطة مرة أخرى لموقف العودة قبل دخول الحدائق.',
          ],
        },
      ],
      faq: [
        ['أي أتوبيس يذهب إلى قصر المنتزه؟', 'لا نستطيع تأكيد رقم خط. اسأل السائق أو المحصّل يوم الزيارة هل تمرّ المركبة بمنطقة المنتزه وأين تنزل.'],
        ['أين أنزل إلى المنتزه؟', 'اطلب من السائق تأكيد أقرب موقف إلى بوابة، وتذكّر أن الحدائق واسعة فقد تمشي مسافة قصيرة إلى البوابة.'],
        ['هل النقل العام موثوق إلى المنتزه؟', 'تعمل الأتوبيسات والميكروباصات على الساحل، لكننا لا نستطيع تأكيد الجداول. أكّد يوم الزيارة واحتفظ بتاكسي كخطة بديلة.'],
        ['كيف أعود مساءً؟', 'اسأل متى تمرّ آخر خدمة ومن أين تركبها، واحتفظ بتطبيق نقل جاهزاً في حال انطلقت قبل أن تكون جاهزاً.'],
        ['كم أجرة الأتوبيس إلى المنتزه؟', 'لم يُتحقق منها. لم نتمكن من تأكيد أجرة حالية عند مراجعة الصفحة في 4 نوفمبر 2026. اسأل السائق أو المحصّل عن الأجرة يوم الزيارة وهل تدفع عند الصعود.'],
        ['كم يستغرق النقل العام إلى المنتزه؟', 'لا ننشر زمناً. الأتوبيسات تتوقف كثيراً وقد لا تلتزم بجدول موثوق، والطريق الساحلي الأبطأ آخر النهار ويوم الجمعة. اترك وقتاً أطول من السيارة.'],
        ['هل أحتاج إلى تغيير الأتوبيس للوصول إلى المنتزه؟', 'قد يلزم ذلك. لا نستطيع تأكيد خدمة واحدة تسير من كورنيش الوسط إلى بوابة المنتزه، فأكّد مع السائق أو المحصّل أين تغيّر يوم الزيارة.'],
      ],
      related: ['taxi-ride-hailing', 'from-city-centre', 'from-train-station', 'location-entrance', 'how-to-get-there'],
    },
  },
];
