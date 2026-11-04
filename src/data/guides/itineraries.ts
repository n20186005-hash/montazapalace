import type { Guide } from './types';

/** Group E — routes and visitor types. Route pages describe flexible principles rather than
 *  a verified map; anything unconfirmed (facilities, times, interior access) is labelled as such. */
export const itineraryGuides: Guide[] = [
  {
    slug: 'one-hour-walk',
    group: 'itineraries',
    image: '/images/montaza-palace-garden.jpg',
    imageAlt: 'Garden path lined with palms and planting at Montaza with the sea beyond',
    en: {
      title: 'Montaza Palace One-Hour Walk — A Short Garden Route',
      h1: 'A one-hour walk at Montaza Palace',
      description: 'How to make a realistic one-hour visit to Montaza Palace: choose a confirmed gate, pick one area of the gardens, walk a short loop and leave with time to reach the exit before closing.',
      lead: 'One hour at Montaza is enough for a single, unhurried loop near the gate you enter through — not for the whole estate. Choose one area, keep the sea or the corniche as your landmark, and head back with enough time to walk out before the grounds close.',
      quick: [
        ['Best for', 'A first, short taste of the gardens'],
        ['How much of the estate', 'One area only'],
        ['Where to start', 'A gate confirmed open'],
        ['Exit margin', 'Leave time before closing'],
        ['Route shape', 'In one gate, round one area, out the same way'],
      ],
      sections: [
        {
          h: 'One hour means one loop, not a tour',
          p: [
            'Montaza is a large coastal royal garden, and the gardens alone are bigger than a one-hour stroll can cover. Trying to see everything on a short visit usually means rushing between distant corners and leaving without enjoying any of them.',
            'Treat the hour as a single loop: in through one gate, around one part of the grounds, and back out the same way. That is a realistic plan; a full circuit of the estate is not.',
            'It also means resisting the urge to follow every side path that looks interesting, because each detour adds distance you will have to walk back within the same hour.',
          ],
        },
        {
          h: 'Choosing where to start',
          p: [
            'Ask at the gate which part of the gardens is closest and where the main paths lead. In many parts of the estate the former royal buildings — Al-Haramlik and Salamlek — can be seen from the garden paths, with the Mediterranean behind them, so a route that keeps the sea on one side usually gives you the best of a short walk. The exact paths must be checked on arrival, because gate openings and closed sections can change.',
            'Whatever you choose, stay on the main paths until you have a feel for the area, and only branch off onto a side path if you can still see your way back to the gate.',
          ],
          list: [
            'Confirm which gate you can return to',
            'Stay on the main paths at first, then branch off',
            'Keep the sea or the corniche as a landmark',
            'Turn back at half your time, not half your route',
          ],
        },
        {
          h: 'A suggested shape for the hour',
          p: [
            'This is a shape rather than a verified route: the point is to give you a simple sequence you can remember, not a precise map. Adjust it to whatever the gate staff tell you is open on the day.',
          ],
          list: [
            'Enter through the gate you have confirmed is open',
            'Ask staff for the nearest area and the direction of the main path',
            'Walk one stretch of the gardens at an easy pace',
            'Turn around at roughly half your time',
            'Return along the same path to your gate',
            'Leave a margin for the walk out before closing',
          ],
        },
        {
          h: 'What you can realistically see',
          p: [
            'In an hour, expect palms, mature garden planting, glimpses of the palace facades and the sea. Anything beyond that — a beach, a long wall of gardens, a second building — is a reason to come back rather than to hurry.',
          ],
        },
        {
          h: 'Where the views open up along the way',
          p: [
            'On a short loop the highlights are often what lies just off the main paths: rows of palms, mature garden planting and, in many parts of the estate, a view across the gardens towards the former royal buildings with the Mediterranean behind them. Where the paths allow, the sea itself gives the walk its backdrop.',
            'We cannot promise that any one viewpoint stays open or unobstructed on the day, so treat each view as a bonus rather than a fixed stop.',
          ],
        },
        {
          h: 'Before you set off',
          list: [
            'Check which gate is open and its closing time',
            'Ask for the last entry time, not just the closing time',
            'Carry water and sun protection in summer',
            'Note where you entered so you can leave by the same gate',
          ],
        },
        {
          h: 'Leaving by the same gate',
          p: [
            'A one-hour visit is safest as an out-and-back rather than a circuit, because you already know the way you came. Returning by the same gate avoids the risk of reaching a side exit that turns out to be locked, or of the gate you planned to use closing earlier than expected. Watch the time from the moment you set off, not only on the way back.',
          ],
        },
        {
          h: 'If the hour runs short or long',
          p: [
            'If you arrive with less than an hour, cut the loop in half and simply walk one stretch and return. If the walk is proving longer than expected, turn back earlier rather than pushing on, because the estate is large and the walk back always costs as much as the walk out. The one fixed number to respect is the last entry and closing time you were given at the gate.',
          ],
        },
      ],
      faq: [
        ['Can I see all of Montaza in one hour?', 'No. The estate is far too large for that. Plan a single loop near one gate and leave the rest for a longer visit.'],
        ['Which gate is best for a short walk?', 'Whichever gate is confirmed open and closest to the part of the gardens you want to see. Ask on arrival, because gates can differ in what they serve.'],
        ['Is one hour enough to enjoy it?', 'Yes, if you accept it as a short taste of one area rather than a full tour. Rushing the whole estate in an hour is not enjoyable.'],
        ['Do I need a ticket for a short walk?', 'Possibly — garden admission may apply. Confirm the charge and what it covers at the gate you use.'],
        ['Is the walk flat, or will I meet steps?', 'We cannot confirm the grading, steps or slopes of any specific path. Garden areas are broad and mostly outdoors, but ask at the gate about the route you intend to take, especially if anyone in your group is unsteady on their feet.'],
        ['What can I do in only half an hour?', 'Treat it as a single short out-and-back: one stretch of the gardens from the gate you entered, then straight back. Do not attempt a loop, and confirm the closing time first.'],
      ],
      related: ['half-day-itinerary', 'location-entrance', 'best-time-to-visit', 'gardens'],
    },
    ar: {
      title: 'مشي ساعة واحدة في قصر المنتزه — مسار قصير في الحدائق',
      h1: 'مشي ساعة واحدة في قصر المنتزه',
      description: 'كيف ترتّب زيارة واقعية لمدة ساعة في قصر المنتزه: اختر بوابة مؤكدة، وحدّد منطقة واحدة من الحدائق، وامشِ دورة قصيرة ثم عد إلى البوابة قبل الإغلاق.',
      lead: 'تكفي ساعة واحدة في المنتزه لدورة واحدة هادئة قرب البوابة التي تدخل منها، لا لكامل الضَيْعة. اختر منطقة واحدة، واجعل البحر أو الكورنيش علامتك، وارجع واترك وقتاً كافياً للمشي حتى الخروج قبل إغلاق الحدائق.',
      quick: [
        ['الأنسب لـ', 'لمحة أولى قصيرة من الحدائق'],
        ['مقدار الضَيْعة', 'منطقة واحدة فقط'],
        ['نقطة البداية', 'بوابة مؤكدة مفتوحة'],
        ['وقت الخروج', 'اترك هامشاً قبل الإغلاق'],
        ['شكل المسار', 'دخول من بوابة واحدة ودورة في منطقة واحدة وخروج من الطريق نفسه'],
      ],
      sections: [
        {
          h: 'ساعة تعني دورة واحدة لا جولة كاملة',
          p: [
            'المنتزه حديقة ملكية ساحلية واسعة، والحدائق وحدها أكبر مما يمكن أن يمشيه الزائر في ساعة. ومحاولة رؤية كل شيء في زيارة قصيرة غالباً ما تعني التلهّف بين أطراف متباعدة والخروج دون الاستمتاع بأي منها.',
            'اعتبر الساعة دورة واحدة: دخول من بوابة واحدة، والتفاف حول جزء واحد من الضَيْعة، والخروج من الطريق نفسه. هذا مخطط واقعي؛ أما دورة كاملة حول الضَيْعة فليست واقعية.',
            'ويعني ذلك أيضاً مقاومة الرغبة في سلوك كل مسار جانبي يبدو مثيراً، لأن كل التفاف يضيف مسافة عليك أن تمشيها عودةً خلال الساعة نفسها.',
          ],
        },
        {
          h: 'من أين تبدأ',
          p: [
            'اسأل عند البوابة أي جزء من الحدائق هو الأقرب وإلى أين تؤدي المسارات الرئيسية. في أجزاء كثيرة من الضَيْعة يمكن رؤية المباني الملكية السابقة — الحرملك والسلاملك — من مسارات الحدائق، والبحر المتوسط خلفها، لذا فإن مساراً يُبقي البحر على جانب واحد يمنحك أفضل ما في مشية قصيرة. ويجب التحقق من المسارات نفسها عند الوصول، لأن فتح البوابات وإغلاق بعض الأجزاء قد يتغير.',
            'وأياً كان اختيارك، فالزم المسارات الرئيسية حتى تتكوّن لديك صورة عن المنطقة، ولا تتفرّع إلى مسار جانبي إلا إذا كنت لا تزال ترى طريق عودتك إلى البوابة.',
          ],
          list: [
            'تأكد من البوابة التي تستطيع العودة إليها',
            'الزم المسارات الرئيسية أولاً ثم تفرّع عنها',
            'اجعل البحر أو الكورنيش علامة لك',
            'ارجع عند منتصف وقتك، لا منتصف مسارك',
          ],
        },
        {
          h: 'شكل مقترح للساعة',
          p: [
            'هذا شكل عام لا مسار مُتحقَّق منه: الغرض منه أن يمنحك تسلسلاً بسيطاً يسهل تذكّره، لا خريطة دقيقة. عدّله حسب ما يخبرك به العاملون عند البوابة عمّا هو مفتوح في يومك.',
          ],
          list: [
            'ادخل من البوابة التي أكّدت أنها مفتوحة',
            'اسأل العاملين عن أقرب منطقة واتجاه المسار الرئيسي',
            'امشِ جزءاً واحداً من الحدائق بوتيرة هادئة',
            'استدر عند نصف وقتك تقريباً',
            'ارجع على الطريق نفسه إلى بوابتك',
            'اترك هامشاً للمشي حتى الخروج قبل الإغلاق',
          ],
        },
        {
          h: 'ما يمكن رؤيته فعلاً',
          p: [
            'في ساعة توقّع النخيل والزراعات الناضجة في الحدائق ولمحات من واجهات القصر والبحر. وأي شيء بعد ذلك — شاطئ أو سور حدائق طويل أو مبنى ثانٍ — سبب للعودة لا للاستعجال.',
          ],
        },
        {
          h: 'أين تنفتح الإطلالات على الطريق',
          p: [
            'في دورة قصيرة تكون أبرز المعالم غالباً ما يقع على جانب المسارات: صفوف النخيل، والزراعات الناضجة، وفي أجزاء كثيرة من الضَيْعة إطلالة عبر الحدائق على المباني الملكية السابقة والبحر المتوسط خلفها. وحيث تسمح المسارات، يمنح البحر نفسه المشية خلفيتها.',
            'ولا نستطيع أن نعد بأن أي إطلالة بعينها تبقى مفتوحة أو غير محجوبة في يومك، فاعتبر كل إطلالة مكسباً لا محطة ثابتة.',
          ],
        },
        {
          h: 'قبل الانطلاق',
          list: [
            'تحقق من البوابة المفتوحة ووقت إغلاقها',
            'اسأل عن آخر موعد للدخول لا وقت الإغلاق فقط',
            'احمل الماء وواقي الشمس في الصيف',
            'لاحظ البوابة التي دخلت منها لتخرج من البوابة نفسها',
          ],
        },
        {
          h: 'الخروج من البوابة نفسها',
          p: [
            'الزيارة في ساعة أسلم أن تكون ذهاباً وإياباً لا دورة كاملة، لأنك تعرف الطريق الذي جئت منه بالفعل. والعودة من البوابة نفسها تتجنب خطر الوصول إلى باب جانبي تبيّن أنه مغلق، أو إغلاق البوابة التي خططت لها أبكر مما توقعت. وراقب الوقت من لحظة الانطلاق لا في طريق العودة فقط.',
          ],
        },
        {
          h: 'إن قصرت الساعة أو طالت',
          p: [
            'إن وصلت وأنت تملك أقل من ساعة، فاقتطع الدورة نصفها وامشِ جزءاً واحداً ثم ارجع. وإن طالت المشية أكثر مما توقعت، فاستدر أبكر بدل المضي، فالضَيْعة واسعة والمشي عودةً يكلّف قدر المشي ذهاباً. والرقم الثابت الوحيد الذي تحترمه هو آخر موعد للدخول ووقت الإغلاق الذي أُخبرت به عند البوابة.',
          ],
        },
      ],
      faq: [
        ['هل يمكن رؤية المنتزه كاملاً في ساعة؟', 'لا. الضَيْعة أكبر بكثير من ذلك. خطّط دورة واحدة قرب بوابة واحدة واترك الباقي لزيارة أطول.'],
        ['أي بوابة أفضل لمشية قصيرة؟', 'البوابة المؤكدة المفتوحة والأقرب إلى الجزء الذي تريد رؤيته. اسأل عند الوصول؛ فالبوابات تختلف في ما تخدمه.'],
        ['هل تكفي ساعة للاستمتاع؟', 'نعم، إن تقبّلتها كلمحة قصيرة من منطقة واحدة لا كجولة كاملة. التلهّف في الضَيْعة كلها خلال ساعة غير ممتع.'],
        ['هل أحتاج تذكرة لمشية قصيرة؟', 'ربما؛ فقد ينطبق دخول الحدائق. أكّد المبلغ وما يشمله عند البوابة التي تدخل منها.'],
        ['هل المشي مستوٍ أم سأجد درجاً؟', 'لا نستطيع تأكيد درجة الاستواء أو الدرج أو المنحدرات في أي مسار بعينه. مناطق الحدائق واسعة وفي الهواء الطلق غالباً، لكن اسأل عند البوابة عن المسار الذي تنوي سلوكه، خاصة إن كان في مجموعتك من لا يثبت على قدميه بسهولة.'],
        ['ما الذي أفعله في نصف ساعة فقط؟', 'اعتبره ذهاباً وإياباً قصيراً واحداً: جزء واحد من الحدائق من البوابة التي دخلت منها ثم العودة مباشرة. لا تحاول دورة كاملة، وأكّد وقت الإغلاق أولاً.'],
      ],
      related: ['half-day-itinerary', 'location-entrance', 'best-time-to-visit', 'gardens'],
    },
  },
  {
    slug: 'half-day-itinerary',
    group: 'itineraries',
    image: '/images/montaza-palace-main.jpg',
    imageAlt: 'Palace facade seen across the gardens at Montaza with palms and open sky',
    en: {
      title: 'Montaza Palace Half-Day Itinerary — How to Plan It',
      h1: 'A half-day itinerary at Montaza Palace',
      description: 'How to plan a half-day at Montaza Palace: pick two or three areas rather than the whole estate, build in rest and travel time, and keep a flexible route you can verify on arrival.',
      lead: 'A half-day is enough to see a few connected parts of Montaza at a comfortable pace — a stretch of the gardens, one or two palace facades and a sea view — without trying to cover the whole estate. Build the plan around two or three areas, rest stops and the journey, and treat the exact route as something to confirm on arrival.',
      quick: [
        ['Time needed', 'Around half a day, with travel'],
        ['Number of areas', 'Two or three, not the whole estate'],
        ['Rest', 'Plan a pause mid-visit'],
        ['Route', 'Flexible, confirm at the gate'],
        ['Best start', 'Morning, to avoid heat and crowds'],
        ['Best shape', 'Two or three linked areas, in one direction'],
      ],
      sections: [
        {
          h: 'What "half a day" should mean here',
          p: [
            'Montaza divides naturally into the gardens, the former royal buildings seen from outside, and the coastline. A half-day plan should combine two or three of these, not rush all of them.',
            'Because the estate is large and its different gates and areas are not always open together, a good half-day is flexible: you decide the order when you see what is open.',
            'A useful rule is to choose what you most want to see and let the rest go; a half-day that tries to behave like a full day becomes a rushed, tiring one.',
          ],
        },
        {
          h: 'A workable shape for the visit',
          list: [
            'Arrive early and start at a gate confirmed open',
            'Walk one main area while the light is cooler',
            'Pause in the middle of the visit rather than at the end',
            'See a palace facade and a sea view if the paths allow',
            'Leave enough time to walk back and to travel onward',
          ],
        },
        {
          h: 'Morning or afternoon?',
          p: [
            'Morning usually works better for a half-day: the light is cooler, the gardens are quieter, and you still have the rest of the day if something overruns. An afternoon visit can be rewarding for late-day light, but it leaves less room to absorb a delay and pushes your return journey into busier traffic. If you choose the afternoon, plan it around a firm finish rather than an open-ended one.',
          ],
        },
        {
          h: 'A step-by-step half-day plan',
          p: [
            'Treat this as a flexible sequence rather than a fixed timetable, and adjust the order to whatever the gate staff tell you is open.',
          ],
          list: [
            'Confirm your transport and the return leg before you start',
            'Enter at a gate that is open and note where it is',
            'Walk your first area in the coolest part of the day',
            'Pause for water and rest in the middle, not only at the end',
            'If the paths allow, take in a palace facade and a sea view',
            'Stop while you still have energy for the walk back and the journey home',
          ],
        },
        {
          h: 'Building in food and rest',
          p: [
            'Anything sold inside the gardens — food, drink, seating, toilets — has not been confirmed as open for this guide, so do not build your half-day around a cafe you cannot rely on. Bring water, and plan food before or after the visit in the surrounding area, checking any nearby place separately.',
            'A short pause with water and shade in the middle keeps the second half of the visit pleasant; leaving the rest until the very end often means walking back already tired.',
          ],
        },
        {
          h: 'Getting there and back',
          p: [
            'The estate sits far out on the eastern side of Alexandria, so travel eats into the half-day. Allow a real margin both ways and confirm your return transport before you are tired.',
            'The journey is part of the half-day, not a footnote to it, so if you use a taxi or a ride-hailing app, agree a meeting point at the gate you entered.',
          ],
        },
        {
          h: 'Adapting when something is closed',
          p: [
            'Half-day plans depend on gates, paths and facilities being open, and those can change without notice. If your first choice is closed, do not spend the time renegotiating the whole plan: switch to whatever is open nearest to you, keep to one or two areas, and accept a shorter list. A relaxed two-area visit beats a rushed tour of a closed estate.',
          ],
        },
        {
          h: 'Before you go',
          list: [
            'Decide your two or three priorities, not a full list',
            'Check the gate and the last entry time',
            'Plan water and rest',
            'Check any nearby food or museum separately',
          ],
        },
      ],
      faq: [
        ['Is half a day enough for Montaza?', 'Yes for a comfortable look at two or three areas. It is not enough for every corner of the estate, and it should not try to be.'],
        ['Should I visit the gardens or the beach?', 'Garden paths give the classic views of the palaces and the sea. Beach facilities are separate and have not been confirmed as open for this guide — check on arrival.'],
        ['Can I combine Montaza with another attraction?', 'It is possible in a full day, but on a half-day the estate and the travel already fill the time. Give Montaza its own slot.'],
        ['Where should I eat?', 'Not confirmed inside the gardens. Plan food in the surrounding area and check any place separately before you go.'],
        ['How long does the journey to Montaza take?', 'Travel from the city centre to the eastern end of Alexandria takes real time in traffic, and we do not quote a verified journey time. Allow a generous margin both ways and confirm your return transport.'],
        ['Can I see inside a palace on a half-day?', 'Palace interiors are not confirmed as open for visitors here, and access may need a separate ticket. Do not build your half-day around one; treat it as a bonus if it happens to be open.'],
      ],
      related: ['one-hour-walk', 'nearby-cafes', 'best-time-to-visit', 'parking'],
    },
    ar: {
      title: 'برنامج نصف يوم في قصر المنتزه — كيف تخطط له',
      h1: 'برنامج نصف يوم في قصر المنتزه',
      description: 'كيف تخطط لنصف يوم في قصر المنتزه: اختر منطقتين أو ثلاثاً لا الضَيْعة كلها، واحسب وقت الراحة والطعام والتنقل، واترك المسار مرناً تؤكده عند الوصول.',
      lead: 'يكفي نصف يوم لرؤية بضعة أجزاء متصلة من المنتزه بوتيرة مريحة — جزء من الحدائق وواجهة قصر أو اثنتين وإطلالة على البحر — دون محاولة تغطية الضَيْعة كلها. ابنِ الخطة حول منطقتين أو ثلاث وفترات راحة ووقت التنقل، واعتبر المسار الدقيق أمراً تؤكده عند الوصول.',
      quick: [
        ['الوقت اللازم', 'نحو نصف يوم مع التنقل'],
        ['عدد المناطق', 'اثنتان أو ثلاث لا الضَيْعة كلها'],
        ['الراحة', 'خصص وقفة وسط الزيارة'],
        ['المسار', 'مرن، أكّده عند البوابة'],
        ['أفضل بداية', 'الصباح لتفادي الحرارة والازدحام'],
        ['أفضل شكل', 'منطقتان أو ثلاث متداخلتان في اتجاه واحد'],
      ],
      sections: [
        {
          h: 'ما ينبغي أن يعني «نصف يوم» هنا',
          p: [
            'ينقسم المنتزه طبيعياً إلى الحدائق، والمباني الملكية السابقة التي تُرى من الخارج، والساحل. ينبغي لخطة نصف اليوم أن تجمع اثنين من هذه أو ثلاثة، لا أن تتلهّف في كلها.',
            'ولأن الضَيْعة واسعة وبواباتها ومناطقها لا تفتح معاً دائماً، فإن نصف اليوم الجيد مرن: تحدّد الترتيب حين ترى ما هو مفتوح.',
            'وثمة قاعدة مفيدة: اختر ما ترغب في رؤيته أكثر من غيره واترك الباقي؛ فنصف يوم يحاول أن يكون يوماً كاملاً يصبح متلهّفاً ومتعباً.',
          ],
        },
        {
          h: 'شكل عملي للزيارة',
          list: [
            'وصل مبكراً وابدأ من بوابة مؤكدة مفتوحة',
            'امشِ منطقة رئيسية واحدة في الضوء الأبرد',
            'توقف في وسط الزيارة لا في آخرها',
            'شاهد واجهة قصر وإطلالة بحر إن سمحت المسارات',
            'اترك وقتاً كافياً للعودة والتنقل بعدها',
          ],
        },
        {
          h: 'الصباح أم بعد الظهر؟',
          p: [
            'الصباح أفضل عادة لنصف يوم: الضوء أبرد والحدائق أهدأ، ويبقى لديك بقية اليوم إن طال شيء. وقد تكون زيارة بعد الظهر مجزية لضوء آخر النهار، لكنها تترك هامشاً أقل لاستيعاب أي تأخير وتدفع رحلة العودة إلى ازدحام أكبر. وإن اخترت بعد الظهر، فخطّط له بنهاية محددة لا مفتوحة.',
          ],
        },
        {
          h: 'خطة نصف يوم خطوة بخطوة',
          p: [
            'اعتبر هذا تسلسلاً مرناً لا جدولاً ثابتاً، وعدّل ترتيبه حسب ما يخبرك به العاملون عند البوابة عمّا هو مفتوح.',
          ],
          list: [
            'أكّد وسيلة تنقلك ورحلة العودة قبل أن تبدأ',
            'ادخل من بوابة مفتوحة ولاحظ موضعها',
            'امشِ منطقتك الأولى في أبرد جزء من اليوم',
            'توقف للماء والراحة في الوسط لا في النهاية فقط',
            'إن سمحت المسارات، التقط واجهة قصر وإطلالة بحر',
            'توقف وما زال لديك طاقة للمشي عودةً ولرحلة العودة للمدينة',
          ],
        },
        {
          h: 'احتساب الطعام والراحة',
          p: [
            'كل ما يُباع داخل الحدائق — طعام وشراب ومقاعد ودورات مياه — لم يُتحقق من أنه مفتوح في هذا الدليل، فلا تبنِ نصف يومك على مقهى لا يمكن الاعتماد عليه. احمل الماء، وخطّط للطعام قبل الزيارة أو بعدها في المنطقة المحيطة، مع التحقق من أي مكان قريب على حدة.',
            'ووقفة قصيرة بالماء والظل في المنتصف تُبقي النصف الثاني من الزيارة ممتعاً؛ أما تأجيل الراحة إلى آخر الزيارة فيعني غالباً العودة وأنت متعب بالفعل.',
          ],
        },
        {
          h: 'الذهاب والعودة',
          p: [
            'تقع الضَيْعة بعيداً على الطرف الشرقي من الإسكندرية، فيأكل التنقل جزءاً من نصف اليوم. اترك هامشاً حقيقياً في الاتجاهين، وأكّد وسيلة عودتك قبل أن تتعب.',
            'والرحلة جزء من نصف اليوم لا حاشية له، فإن استخدمت سيارة أجرة أو تطبيقاً لطلب السيارة، فاتفق على نقطة لقاء عند البوابة التي دخلت منها.',
          ],
        },
        {
          h: 'التكيّف حين يكون شيء مغلقاً',
          p: [
            'تعتمد خطط نصف اليوم على أن تكون البوابات والمسارات والمرافق مفتوحة، وقد يتغير ذلك دون إشعار. وإن كان اختيارك الأول مغلقاً، فلا تصرف الوقت في إعادة التفاوض على الخطة كلها: انتقل إلى ما هو مفتوح أقرب إليك، وابقَ في منطقة أو منطقتين، وتقبّل قائمة أقصر. فزيارة هادئة لمنطقتين أفضل من جولة متلهّفة في ضَيْعة مغلقة.',
          ],
        },
        {
          h: 'قبل الانطلاق',
          list: [
            'حدّد أولويتين أو ثلاثاً لا قائمة كاملة',
            'تحقق من البوابة وآخر موعد للدخول',
            'خطط للماء والراحة',
            'تحقق من أي طعام أو متحف قريب على حدة',
          ],
        },
      ],
      faq: [
        ['هل يكفي نصف يوم للمنتزه؟', 'نعم لرؤية مريحة لمنطقتين أو ثلاث. ولا يكفي لكل ركن في الضَيْعة، ولا ينبغي أن يحاول ذلك.'],
        ['هل أزور الحدائق أم الشاطئ؟', 'مسارات الحدائق تمنح الإطلالات التقليدية على القصور والبحر. أما مرافق الشاطئ فمنفصلة ولم يُتحقق من أنها مفتوحة في هذا الدليل — تحقق عند الوصول.'],
        ['هل يمكن دمج المنتزه مع معلم آخر؟', 'ممكن في يوم كامل، لكن في نصف يوم فإن الضَيْعة والتنقل يملآن الوقت. امنح المنتزه وقته الخاص.'],
        ['أين آكل؟', 'لم يُتحقق داخل الحدائق. خطّط للطعام في المنطقة المحيطة وتحقق من أي مكان على حدة قبل الذهاب.'],
        ['كم تستغرق الرحلة إلى المنتزه؟', 'تستغرق الرحلة من وسط المدينة إلى الطرف الشرقي للإسكندرية وقتاً حقيقياً في الازدحام، ونحن لا نذكر مدة سفر مؤكدة. اترك هامشاً سخياً في الاتجاهين وأكّد وسيلة عودتك.'],
        ['هل أستطيع دخول قصر في نصف يوم؟', 'داخل القصور غير مؤكد أنه مفتوح للزوار هنا، وقد يحتاج الدخول تذكرة منفصلة. لا تبنِ نصف يومك عليه؛ واعتبره مكسباً إن صادف أنه مفتوح.'],
      ],
      related: ['one-hour-walk', 'nearby-cafes', 'best-time-to-visit', 'parking'],
    },
  },
  {
    slug: 'with-kids',
    group: 'itineraries',
    image: '/images/montaza-palace-garden.jpg',
    imageAlt: 'Open lawn and shade trees in the Montaza gardens on a family day',
    en: {
      title: 'Montaza Palace With Kids — A Practical Family Guide',
      h1: 'Visiting Montaza Palace with kids',
      description: 'Visiting Montaza Palace with children: open garden space for running, sea air, heat and sun precautions, pushchair considerations, and how to keep a family visit short and calm.',
      lead: 'Montaza works well for families mainly because of space: large gardens to walk and run in, trees for shade and sea air that keeps the coast breezier than inland Egypt. Keep the visit short, plan for heat and sun, and treat facilities as unconfirmed until you see them.',
      quick: [
        ['Best for', 'Open space and sea air'],
        ['Best time', 'Cooler morning hours'],
        ['What to plan', 'Water, shade, sun cover'],
        ['Facilities', 'Not confirmed — bring basics'],
        ['Length', 'Short trips work better'],
        ['Route shape', 'One short loop you can cut at any point'],
      ],
      sections: [
        {
          h: 'Why families like it',
          p: [
            'The estate is a big, green, open coastal garden rather than a museum corridor, so children can move around. The Mediterranean setting also keeps it breezier and less extreme than inland Egypt, which helps on hot days.',
            'What it is not is an amusement park or a play centre: expect paths, planting, trees and the sea, not rides or confirmed indoor attractions.',
          ],
        },
        {
          h: 'Heat, sun and water',
          list: [
            'Go in the cooler morning if you can',
            'Carry water for everyone',
            'Use hats and sun cover in summer',
            'Use tree shade and pause often',
            'Remember the coast can be windy in winter',
          ],
        },
        {
          h: 'A gentle family route',
          p: [
            'Children generally cope best with a short loop that has obvious landmarks and a clear way back. Rather than trying to cross the estate, build the visit around the gate you enter and one open stretch of garden.',
          ],
          list: [
            'Enter at a gate that is open and easy to return to',
            'Walk one short stretch and let the children lead the pace',
            'Stop in shade for water before anyone complains of thirst',
            'Turn back at the first signs of tiredness, not after them',
            'Leave by the same gate, with time in hand',
          ],
        },
        {
          h: 'Pushchairs and young children',
          p: [
            'Garden areas are broad and largely outdoors, but we cannot promise a specific path is smooth, shaded or step-free on the day. Plan a route you can shorten, and be ready to turn back.',
            'With a pushchair, choose the widest available path and accept that turning round early is part of the plan, not a failure.',
          ],
        },
        {
          h: 'Water, edges and staying safe',
          p: [
            'A coastal garden means water edges, and children move faster than adults expect. Keep young children within reach near the shoreline and any wall or drop, and agree a meeting point in case anyone is separated. In summer, shade and hydration matter as much as distance, and the sea breeze can hide how strong the sun is.',
          ],
        },
        {
          h: 'Keeping children interested',
          p: [
            'There are no confirmed organised activities here, so the interest has to come from the place itself: counting palms, spotting the palace towers along the paths, watching the sea, and the simple freedom of running in a large open garden. A short picnic, if eating outdoors is permitted where you are, often keeps a family visit happy far longer than any guided route.',
          ],
        },
        {
          h: 'Keeping the visit short',
          p: [
            'Children usually do better with a short visit to one area than with a long march across the whole estate. Pick a single loop, let them explore, and leave before tiredness sets in.',
          ],
        },
        {
          h: 'Before you go',
          list: [
            'Confirm which gate is open and family-friendly',
            'Check the last entry time',
            'Pack water, snacks and sun protection',
            'Plan food outside the gardens',
            'Check any nearby beach or attraction separately',
          ],
        },
      ],
      faq: [
        ['Is Montaza good for children?', 'Yes for open garden space, trees and sea air. It is a garden estate rather than a play park, so bring your own entertainment and expectations.'],
        ['Are there toilets or cafes inside?', 'We have not confirmed facilities inside the gardens as open. Bring the basics and check on arrival.'],
        ['Can I take a pushchair?', 'Garden areas are broad and mostly outdoors, but we cannot confirm a specific path is smooth or step-free. Plan a short, flexible route.'],
        ['When is the best time to bring kids?', 'A cooler morning on a weekday is generally calmer and less hot than weekends or midday.'],
        ['Is there a playground or rides?', 'No confirmed playground, rides or indoor children’s attractions are part of this guide. Montaza is a garden estate, so bring your own games and expectations.'],
        ['Can we go to the beach with the children?', 'The estate sits on the coast, but beach and swimming facilities are separate from the gardens and we have not confirmed them as open. Check on arrival before planning a swim.'],
      ],
      related: ['gardens', 'best-time-to-visit', 'nearby-beaches', 'accessibility'],
    },
    ar: {
      title: 'قصر المنتزه مع الأطفال — دليل عملي للعائلات',
      h1: 'زيارة قصر المنتزه مع الأطفال',
      description: 'زيارة قصر المنتزه مع الأطفال: مساحات حديقة مفتوحة للحركة، وهواء البحر، والاحتياط من الحرارة والشمس، وأمور عربة الأطفال، وكيف تبقى زيارة العائلة قصيرة وهادئة.',
      lead: 'يناسب المنتزه العائلات أساساً لاتساعه: حدائق واسعة للمشي واللعب، وأشجار للظل، وهواء بحري يجعل الساحل أكثر نسماً وأقل تطرفاً من داخل مصر. اجعل الزيارة قصيرة، واحسب للحرارة والشمس، واعتبر المرافق غير مؤكدة حتى تراها.',
      quick: [
        ['الأنسب لـ', 'مساحات مفتوحة وهواء البحر'],
        ['أفضل وقت', 'ساعات الصباح الأبرد'],
        ['ما تحتاج التخطيط له', 'الماء والظل وغطاء الشمس'],
        ['المرافق', 'غير مؤكدة — أحضر الأساسيات'],
        ['الطول', 'الزيارات القصيرة أفضل'],
        ['شكل المسار', 'دورة قصيرة واحدة يمكنك قطعها عند أي نقطة'],
      ],
      sections: [
        {
          h: 'لماذا تحبه العائلات',
          p: [
            'الضَيْعة حديقة ساحلية خضراء واسعة مفتوحة لا ممر متحف، فيستطيع الأطفال التحرك فيها. كما أن موقعها على المتوسط يبقيها أكثر نسماً وأقل تطرفاً من داخل مصر، وهذا يساعد في الأيام الحارة.',
            'لكنها ليست مدينة ملاهٍ ولا مركز ألعاب: توقّع مسارات وزراعات وأشجاراً وبحراً، لا ألعاباً ولا أماكن داخلية مؤكدة.',
          ],
        },
        {
          h: 'الحرارة والشمس والماء',
          list: [
            'اذهب في الصباح الأبرد إن أمكن',
            'احمل الماء للجميع',
            'استخدم القبعات وغطاء الشمس صيفاً',
            'استفد من ظل الأشجار وتوقف كثيراً',
            'تذكّر أن الساحل قد يكون عاصفاً شتاءً',
          ],
        },
        {
          h: 'مسار عائلي هادئ',
          p: [
            'يتعامل الأطفال عادة بأفضل حال مع دورة قصيرة لها معالم واضحة وطريق عودة بيّن. وبدل محاولة عبور الضَيْعة، ابنِ الزيارة حول البوابة التي تدخل منها وجزء مفتوح واحد من الحديقة.',
          ],
          list: [
            'ادخل من بوابة مفتوحة يسهل الرجوع إليها',
            'امشِ جزءاً قصيراً واحداً ودع الأطفال يقودون الوتيرة',
            'توقف في الظل للماء قبل أن يشتكي أحد من العطش',
            'ارجع عند أول علامات التعب لا بعدها',
            'اخرج من البوابة نفسها مع توفير وقت في اليد',
          ],
        },
        {
          h: 'عربات الأطفال والصغار',
          p: [
            'مناطق الحدائق واسعة وفي الهواء الطلق غالباً، لكننا لا نضمن أن مساراً بعينه مستوٍ أو مظلل أو خالٍ من الدرج في يوم زيارتك. خطّط لمسار يمكنك تقصيره، وكن مستعداً للرجوع.',
            'وإن كانت معك عربة أطفال، فاختر أوسع مسار متاح وتقبّل أن الاستدارة مبكراً جزء من الخطة لا فشل فيها.',
          ],
        },
        {
          h: 'الماء والحواف والسلامة',
          p: [
            'الحديقة الساحلية تعني حواف ماء، والأطفال يتحركون أسرع مما يتوقع الكبار. أبقِ الصغار في متناول يدك قرب الشاطئ وعند أي جدار أو انخفاض، واتفقوا على نقطة لقاء إن انفصل أحدهم. وفي الصيف يهم الظل وشرب الماء بقدر ما تهم المسافة، وقد يخفي نسيم البحر شدة الشمس.',
          ],
        },
        {
          h: 'إبقاء الأطفال مهتمين',
          p: [
            'لا توجد أنشطة منظّمة مؤكدة هنا، فيجب أن يأتي الاهتمام من المكان نفسه: عدّ النخيل، ورصد أبراج القصر على طول المسارات، ومشاهدة البحر، وحرية الجري البسيطة في حديقة مفتوحة واسعة. ونزهة قصيرة بالطعام، إن كان الأكل في الهواء الطلق مسموحاً حيث أنت، غالباً ما تبقي زيارة العائلة سعيدة مدة أطول من أي مسار موجّه.',
          ],
        },
        {
          h: 'إبقاء الزيارة قصيرة',
          p: [
            'غالباً ما يفضّل الأطفال زيارة قصيرة لمنطقة واحدة على مسيرة طويلة في الضَيْعة كلها. اختر دورة واحدة، ودعهم يستكشفون، واخرج قبل أن يتعبوا.',
          ],
        },
        {
          h: 'قبل الانطلاق',
          list: [
            'تأكد من البوابة المفتوحة ومناسبتها للعائلات',
            'تحقق من آخر موعد للدخول',
            'احزم الماء والوجبات الخفيفة وواقي الشمس',
            'خطط للطعام خارج الحدائق',
            'تحقق من أي شاطئ أو معلم قريب على حدة',
          ],
        },
      ],
      faq: [
        ['هل المنتزه جيد للأطفال؟', 'نعم لمساحات الحدائق المفتوحة والأشجار وهواء البحر. لكنها ضَيْعة حدائق لا مدينة ألعاب، فأحضر تسليتك وتوقعاتك.'],
        ['هل توجد دورات مياه أو مقاهٍ بالداخل؟', 'لم نتحقق من أن المرافق داخل الحدائق مفتوحة. أحضر الأساسيات وتحقق عند الوصول.'],
        ['هل يمكن إدخال عربة أطفال؟', 'مناطق الحدائق واسعة وفي الهواء الطلق غالباً، لكننا لا نستطيع تأكيد أن مساراً بعينه مستوٍ أو خالٍ من الدرج. خطّط لمسار قصير ومرن.'],
        ['ما أفضل وقت لإحضار الأطفال؟', 'صباح أبرد في يوم عمل عادة أكثر هدوءاً وأقل حرارة من عطلة نهاية الأسبوع أو الظهيرة.'],
        ['هل توجد ساحة لعب أو ألعاب؟', 'لا توجد ساحة لعب أو ألعاب أو أماكن ترفيه داخلية مؤكدة ضمن هذا الدليل. المنتزه ضَيْعة حدائق، فأحضر ألعابك وتوقعاتك.'],
        ['هل يمكننا الذهاب إلى الشاطئ مع الأطفال؟', 'تقع الضَيْعة على الساحل، لكن مرافق الشاطئ والسباحة منفصلة عن الحدائق ولم نتحقق من أنها مفتوحة. تحقق عند الوصول قبل التخطيط لسباحة.'],
      ],
      related: ['gardens', 'best-time-to-visit', 'nearby-beaches', 'accessibility'],
    },
  },
  {
    slug: 'for-seniors',
    group: 'itineraries',
    image: '/images/montaza-palace-coast.jpg',
    imageAlt: 'Shaded coastal path at Montaza with calm sea and mature garden planting',
    en: {
      title: 'Montaza Palace for Seniors — Low-Effort Visiting',
      h1: 'Visiting Montaza Palace for seniors',
      description: 'How older visitors can enjoy Montaza Palace with less walking: choose one area near a gate, rest often, use shade and sea air, and avoid routes that depend on long distances or steps.',
      lead: 'Older visitors can enjoy Montaza by keeping to one part of the gardens close to a gate, resting often and treating the visit as a slow, seated experience of palms, palace facades and the sea. There is no confirmed shuttle or step-free guarantee, so plan a short route you can cut at any point.',
      quick: [
        ['Approach', 'One area near the gate'],
        ['Walking', 'Short and repeatable'],
        ['Rest', 'Choose shaded spots'],
        ['Steps and slopes', 'Not confirmed — ask on arrival'],
        ['Best time', 'Cooler, quieter hours'],
        ['Route shape', 'Short out-and-back from one gate'],
      ],
      sections: [
        {
          h: 'Designing a gentle visit',
          p: [
            'The main risk at a large garden estate is walking further than intended. Keep the plan simple: enter at a gate you can easily return to, stay within one area, and sit down before you feel tired rather than after.',
          ],
        },
        {
          h: 'Choosing the time of day',
          p: [
            'Cooler, quieter hours are easier — a weekday morning usually beats midday heat and the busier family times. In winter the coast can be windy, so a light layer helps even on a mild day.',
          ],
        },
        {
          h: 'Checking access before you rely on it',
          list: [
            'Ask at the gate about steps, slopes and seating',
            'Ask whether any path is smooth enough for a wheelchair or walker',
            'Confirm how far you would need to walk to see a palace facade',
            'Identify a rest point you can return to',
          ],
        },
        {
          h: 'A simple step-by-step visit',
          p: [
            'This is a gentle sequence, not a fixed route, so you can stop or repeat any stage as you wish.',
          ],
          list: [
            'Arrive at a cooler, quieter hour and use a gate you can return to',
            'Ask staff about steps, slopes, seating and the nearest palace view',
            'Walk a short stretch of garden at an unhurried pace',
            'Sit before you feel tired, not after',
            'If you feel able, take one more short stretch after the rest',
            'Return by the same gate with time to spare',
          ],
        },
        {
          h: 'Resting, pacing and the way back',
          p: [
            'The hardest part of a large garden for an older visitor is judging the return. A good rule is to turn back at the point where you still feel fresh, because the walk back costs the same as the walk out and offers no shortcuts. Rest before you need to, keep to the main paths where help is easier to find, and leave a clear margin before closing so the exit is unhurried.',
          ],
        },
        {
          h: 'Companions, wheelchairs and assistance',
          p: [
            'If you are visiting with a companion, agree in advance who carries the water and the phone, and where you will meet if you separate. A wheelchair or walking aid can work well on broad, paved garden areas, but we cannot confirm the surface of any specific path, so ask on arrival. If you need assistance, it is best to arrange it at the gate rather than in the middle of the grounds.',
          ],
        },
        {
          h: 'What to bring',
          list: [
            'Water and any medication',
            'A hat and sun protection',
            'A light windproof layer in winter',
            'A phone with the gate location saved',
          ],
        },
        {
          h: 'A realistic plan',
          p: [
            'Two short walks with a long rest between them often gives more pleasure than one continuous circuit. See the palms, the palace facades from the paths, and the sea, then sit and let the visit finish calmly.',
          ],
        },
      ],
      faq: [
        ['Is Montaza suitable for older visitors?', 'Yes, if you keep to one area close to a gate and rest often. The estate is large, so long walks are the main thing to avoid.'],
        ['Is there a shuttle or step-free route?', 'We have not confirmed a shuttle or a fully step-free route. Ask at the gate what is available on the day.'],
        ['Are there benches to rest on?', 'Seating is not confirmed for this guide. Look for shaded spots and ask staff where to rest.'],
        ['What is the best time to visit?', 'A cooler, quieter weekday morning is generally easiest for older visitors.'],
        ['How much walking is involved?', 'Only as much as you choose. The reliable approach is a short out-and-back from one gate, resting often, rather than a circuit of the estate. Ask at the gate how far it is to the nearest palace view.'],
        ['Can someone accompany me with a wheelchair?', 'We have not confirmed a fully step-free or wheelchair-friendly route. Ask at the gate about surfaces, steps and slopes before committing, and plan a short route you can abandon easily.'],
      ],
      related: ['accessibility', 'parking', 'location-entrance', 'best-time-to-visit'],
    },
    ar: {
      title: 'قصر المنتزه لكبار السن — زيارة بمجهود أقل',
      h1: 'زيارة قصر المنتزه لكبار السن',
      description: 'كيف يستمتع كبار السن بقصر المنتزه بمشي أقل: اختر منطقة واحدة قرب بوابة، واسترح كثيراً، واستفد من الظل وهواء البحر، وتجنّب المسارات التي تعتمد على مسافات طويلة أو درج.',
      lead: 'يستطيع كبار السن الاستمتاع بالمنتزه بالبقاء في جزء واحد من الحدائق قريب من بوابة، والاستراحة كثيراً، واعتبار الزيارة تجربة هادئة وجلسات من النخيل وواجهات القصر والبحر. لا توجد حافلة داخلية مؤكدة ولا ضمان لمسار خالٍ من الدرج، فخطّط لمسار قصير يمكنك قطعه عند أي نقطة.',
      quick: [
        ['الأسلوب', 'منطقة واحدة قرب البوابة'],
        ['المشي', 'قصير وقابل للتكرار'],
        ['الراحة', 'اختر أماكن مظللة'],
        ['الدرج والمنحدرات', 'غير مؤكد — اسأل عند الوصول'],
        ['أفضل وقت', 'الساعات الأبرد والأهدأ'],
        ['شكل المسار', 'ذهاب وإياب قصير من بوابة واحدة'],
      ],
      sections: [
        {
          h: 'تصميم زيارة خفيفة',
          p: [
            'الخطر الرئيسي في ضَيْعة حدائق واسعة هو المشي أكثر مما نويت. اجعل الخطة بسيطة: ادخل من بوابة يسهل عليك العودة منها، وابقَ في منطقة واحدة، واجلس قبل أن تتعب لا بعده.',
          ],
        },
        {
          h: 'اختيار وقت اليوم',
          p: [
            'الساعات الأبرد والأهدأ أيسر — صباح يوم عمل عادة أفضل من حرارة الظهيرة وأوقات العائلات المزدحمة. وفي الشتاء قد يكون الساحل عاصفاً، فطبقة خفيفة تفيد حتى في يوم معتدل.',
          ],
        },
        {
          h: 'التحقق من إمكانية الوصول قبل الاعتماد عليها',
          list: [
            'اسأل عند البوابة عن الدرج والمنحدرات والمقاعد',
            'اسأل هل أي مسار مستوٍ بما يكفي لعربة متحركة أو مشاية',
            'تأكد من مسافة المشي لرؤية واجهة قصر',
            'حدّد نقطة استراحة يمكنك العودة إليها',
          ],
        },
        {
          h: 'زيارة بسيطة خطوة بخطوة',
          p: [
            'هذا تسلسل هادئ لا مسار ثابت، فيمكنك التوقف عند أي مرحلة أو تكرارها كما تشاء.',
          ],
          list: [
            'وصل في ساعة أبرد وأهدأ وادخل من بوابة يمكنك العودة منها',
            'اسأل العاملين عن الدرج والمنحدرات والمقاعد وأقرب إطلالة على القصر',
            'امشِ جزءاً قصيراً من الحديقة بوتيرة غير متعجلة',
            'اجلس قبل أن تتعب لا بعده',
            'إن شعرت بالقدرة، فخذ جزءاً قصيراً آخر بعد الاستراحة',
            'ارجع من البوابة نفسها مع توفير وقت في اليد',
          ],
        },
        {
          h: 'الراحة والوتيرة وطريق العودة',
          p: [
            'أصعب ما في الحديقة الواسعة لكبير السن هو تقدير العودة. وقاعدة جيدة أن تستدير عند النقطة التي لا تزال فيها نشيطاً، لأن المشي عودةً يكلّف قدر المشي ذهاباً ولا يمنحك اختصارات. استرح قبل أن تحتاج، والزم المسارات الرئيسية حيث يسهل إيجاد المساعدة، واترك هامشاً واضحاً قبل الإغلاق ليكون الخروج غير متعجّل.',
          ],
        },
        {
          h: 'المرافقون والكراسي المتحركة والمساعدة',
          p: [
            'إن كنت تزور مع مرافق، فاتفقوا مسبقاً على من يحمل الماء والهاتف، وعلى مكان اللقاء إن انفصلتم. وقد يعمل الكرسي المتحرك أو عكاز المساعدة جيداً على مناطق الحدائق الواسعة المعبّدة، لكننا لا نستطيع تأكيد سطح أي مسار بعينه، فاسأل عند الوصول. وإن احتجت مساعدة، فالأفضل ترتيبها عند البوابة لا في وسط الضَيْعة.',
          ],
        },
        {
          h: 'ما تحضره معك',
          list: [
            'الماء وأي أدوية',
            'قبعة وواقي شمس',
            'طبقة خفيفة واقية من الريح شتاءً',
            'هاتف محفوظ فيه موقع البوابة',
          ],
        },
        {
          h: 'خطة واقعية',
          p: [
            'مشيتان قصيرتان مع استراحة طويلة بينهما غالباً أمتع من دورة متصلة واحدة. شاهد النخيل وواجهات القصر من المسارات والبحر، ثم اجلس ودع الزيارة تنتهي بهدوء.',
          ],
        },
      ],
      faq: [
        ['هل المنتزه مناسب لكبار السن؟', 'نعم، إن بقيت في منطقة واحدة قرب بوابة واسترحت كثيراً. الضَيْعة واسعة، والمشي الطويل هو ما يجب تجنبه.'],
        ['هل توجد حافلة داخلية أو مسار خالٍ من الدرج؟', 'لم نتحقق من وجود حافلة أو مسار خالٍ تماماً من الدرج. اسأل عند البوابة عمّا هو متاح في يومك.'],
        ['هل توجد مقاعد للاستراحة؟', 'المقاعد غير مؤكدة في هذا الدليل. ابحث عن أماكن مظللة واسأل العاملين عن مكان للراحة.'],
        ['ما أفضل وقت للزيارة؟', 'صباح يوم عمل أبرد وأهدأ عادة هو الأيسر لكبار السن.'],
        ['كم يلزم من المشي؟', 'فقط قدر ما تختاره. والأسلوب الموثوق هو ذهاب وإياب قصير من بوابة واحدة مع الاستراحة كثيراً، لا دورة حول الضَيْعة. اسأل عند البوابة عن مسافة أقرب إطلالة على القصر.'],
        ['هل يمكن أن يرافقني أحد بكرسي متحرك؟', 'لم نتحقق من وجود مسار خالٍ تماماً من الدرج أو مناسب للكرسي المتحرك. اسأل عند البوابة عن الأسطح والدرج والمنحدرات قبل الالتزام، وخطّط لمسار قصير يمكنك التخلي عنه بسهولة.'],
      ],
      related: ['accessibility', 'parking', 'location-entrance', 'best-time-to-visit'],
    },
  },
  {
    slug: 'photography-guide',
    group: 'itineraries',
    image: '/images/montaza-palace-hero.jpg',
    imageAlt: 'Palace towers and facade framed by trees under soft coastal light at Montaza',
    en: {
      title: 'Montaza Palace Photography Guide — Light, Facades and Etiquette',
      h1: 'Photographing Montaza Palace',
      description: 'A photography guide to Montaza Palace: working with coastal light, framing the palace facades, gardens and towers, sea views, privacy and security rules, and where permission may be needed.',
      lead: 'Montaza rewards patient photographers: soft coastal light, long garden avenues, the towers and facades of the former royal buildings, and the Mediterranean as a backdrop. What it also needs is respect — for people’s privacy, for security areas, and for the fact that some locations may require permission.',
      quick: [
        ['Best light', 'Early and late in the day'],
        ['Strong subjects', 'Facades, towers, gardens, sea'],
        ['Respect', 'Privacy of people in the frame'],
        ['Restrictions', 'Some areas may be off-limits'],
        ['Permission', 'Possible in some locations'],
        ['Detail shots', 'Facade stonework, gates, arches'],
        ['Wide shots', 'A garden avenue with the sea behind'],
        ['What to avoid', 'Restricted or security areas'],
      ],
      sections: [
        {
          h: 'Working with the light',
          p: [
            'Coastal Alexandria gives softer, breezier light than inland Egypt, especially in the early morning and late afternoon when shadows are longer and colours warmer. Midday sun is harsh and flattens facade detail, so treat it as a time for gardens and shade rather than architecture.',
          ],
        },
        {
          h: 'What to shoot',
          list: [
            'The facade and towers of Al-Haramlik, seen from the garden paths',
            'Salamlek and the other former royal buildings from outside',
            'Long garden avenues, palms and mature planting',
            'The sea and coastline beyond the gardens',
            'Reflections, gates and architectural details',
          ],
        },
        {
          h: 'The palace architecture, towers and facade details',
          p: [
            'The former royal buildings are the estate’s strongest architectural subjects, and they read best from the garden side. Al-Haramlik and Salamlek are generally seen from the paths rather than from within, so your photographs will be of exteriors: walls, windows, arches, towers and rooflines set among palms. The towers in particular give vertical elements that balance the flat expanse of sky and sea.',
            'Look for light raking across a facade, repeating patterns in the stonework, and the way planting frames a doorway or an arch. Because these buildings may be used for other purposes and may have security arrangements, always stay on public ground and photograph only what is openly visible.',
          ],
        },
        {
          h: 'Garden paths and the coastal view',
          p: [
            'The gardens themselves are a subject, not just a backdrop: long avenues of palms, mature planting, ornate gates and the play of light and shade along a path all make strong images. Where the paths open towards the coast, the Mediterranean becomes the horizon line, and the contrast between a tended garden and the open sea is a characteristic Montaza picture.',
          ],
        },
        {
          h: 'Framing and composition',
          p: [
            'The gardens give you natural leading lines along the paths and frames of foliage around the buildings. Move the camera rather than the subject: change your position to place a tower against sky or a facade through trees, and keep the horizon level for sea shots.',
          ],
        },
        {
          h: 'Composition between building and garden',
          p: [
            'Montaza’s signature image is the meeting of building and garden, so compose for both. Use a path as a leading line towards a facade, let foliage frame a tower, or place a wall of palms against the sky. Move your feet rather than your zoom: stepping sideways often does more to improve a shot here than any lens. Keep the horizon level on sea views, and leave space in the frame for the garden to breathe.',
          ],
        },
        {
          h: 'Privacy and respect',
          p: [
            'These are public gardens with local families, so photographing people without consent is not acceptable. Ask before including anyone recognisably, and be especially careful with children.',
          ],
        },
        {
          h: 'Security, restrictions and permission',
          p: [
            'A former royal estate can have security-sensitive areas, and some locations may need permission to photograph — this may include professional shoots or certain buildings. Rules can change, so ask staff before assuming a spot is open to cameras, and never photograph restricted or security areas.',
          ],
        },
        {
          h: 'Cameras, kit and practical limits',
          p: [
            'A range of lenses helps, because the estate mixes wide garden views with architectural detail. Coastal conditions bring wind and salt, so keep a cloth for the lens and be ready for the light to change quickly as clouds move. Remember that some areas may be off-limits, that permission may be required for professional or staged work, and that no photograph is worth ignoring a sign or a staff instruction.',
          ],
        },
      ],
      faq: [
        ['Can I take photos at Montaza?', 'General garden photography is commonly done, but rules can change and some areas may be restricted. Ask staff if you are unsure, and always respect privacy and security signs.'],
        ['Is professional photography allowed?', 'This may need permission, especially for commercial or staged shoots. Ask in advance rather than assuming.'],
        ['When is the best light?', 'Early morning and late afternoon usually give softer, warmer light. Midday is harsh for facades.'],
        ['Can I photograph people?', 'Only with their consent. These are public family gardens, and privacy matters.'],
        ['Can I use a drone?', 'Do not assume so. Drones are commonly restricted over sensitive sites, and a former royal estate may have rules. Ask staff in advance, and never fly without clear permission.'],
        ['Where is the best spot to photograph the sea?', 'Any garden path with an open view towards the Mediterranean can give a sea shot, but we cannot confirm a specific viewpoint. Follow the coast and respect any closed or restricted sections.'],
      ],
      related: ['sunset-guide', 'architecture', 'haramlik-palace', 'best-time-to-visit'],
    },
    ar: {
      title: 'دليل تصوير قصر المنتزه — الضوء والواجهات والآداب',
      h1: 'التصوير في قصر المنتزه',
      description: 'دليل لتصوير قصر المنتزه: التعامل مع ضوء الساحل، وتكوين واجهات القصر والحدائق والأبراج، وإطلالات البحر، وخصوصية الناس، والمناطق الأمنية، والأماكن التي قد تحتاج تصريحاً.',
      lead: 'يكافئ المنتزه المصوّر الصبور: ضوء ساحلي ناعم، وممرات حدائق طويلة، وأبراج وواجهات المباني الملكية السابقة، والبحر المتوسط خلفية. لكنه يحتاج أيضاً إلى احترام — لخصوصية الناس، وللمناطق الأمنية، ولاحتمال الحاجة إلى تصريح في بعض الأماكن.',
      quick: [
        ['أفضل ضوء', 'في أول النهار وآخره'],
        ['موضوعات قوية', 'الواجهات والأبراج والحدائق والبحر'],
        ['الاحترام', 'خصوصية من يظهرون في الصورة'],
        ['القيود', 'بعض المناطق قد تكون ممنوعة'],
        ['التصاريح', 'قد تُطلب في بعض الأماكن'],
        ['صور التفاصيل', 'حجر الواجهات والبوابات والأقواس'],
        ['صور واسعة', 'ممر حديقة والبحر خلفه'],
        ['ما يجب تجنبه', 'المناطق الممنوعة أو الأمنية'],
      ],
      sections: [
        {
          h: 'التعامل مع الضوء',
          p: [
            'يمنح ساحل الإسكندرية ضوءاً أنعم وأكثر نسماً من داخل مصر، خاصة في الصباح الباكر وبعد العصر حين تطول الظلال وتميل الألوان إلى الدفء. أما شمس الظهيرة قاسية وتُسطّح تفاصيل الواجهات، فاعتبره وقتاً للحدائق والظل لا للمعمار.',
          ],
        },
        {
          h: 'ماذا تصوّر',
          list: [
            'واجهة وأبراج الحرملك كما تُرى من مسارات الحدائق',
            'السلاملك وبقية المباني الملكية السابقة من الخارج',
            'ممرات الحدائق الطويلة والنخيل والزراعات الناضجة',
            'البحر والساحل خلف الحدائق',
            'الانعكاسات والبوابات والتفاصيل المعمارية',
          ],
        },
        {
          h: 'معمار القصر والأبراج وتفاصيل الواجهات',
          p: [
            'المباني الملكية السابقة أقوى موضوعات الضَيْعة المعمارية، وتظهر بأفضل حال من جهة الحدائق. ويُرى الحرملك والسلاملك عادة من المسارات لا من الداخل، فستكون صورك للخارج: الجدران والنوافذ والأقواس والأبراج وخطوط السقوف بين النخيل. وتمنح الأبراج على وجه الخصوص عناصر رأسية توازن امتداد السماء والبحر المسطّح.',
            'ابحث عن ضوء يمرّ مائلاً على واجهة، وعن أنماط متكررة في الحجر، وعن طريقة تأطير الزراعات لمدخل أو قوس. ولأن هذه المباني قد تُستخدم لأغراض أخرى وقد تكون لها ترتيبات أمنية، فابقَ دائماً على أرضية عامة وصوّر فقط ما هو ظاهر علناً.',
          ],
        },
        {
          h: 'مسارات الحدائق والإطلالة الساحلية',
          p: [
            'الحدائق نفسها موضوع لا خلفية فقط: ممرات النخيل الطويلة، والزراعات الناضجة، والبوابات المزخرفة، ولعب الضوء والظل على المسار، كلها تنتج صوراً قوية. وحيث تنفتح المسارات نحو الساحل يصبح المتوسط خط الأفق، ويصير التباين بين حديقة معتنى بها وبحر مفتوح صورة مميزة للمنتزه.',
          ],
        },
        {
          h: 'التكوين والإطار',
          p: [
            'تمنحك الحدائق خطوط قيادة طبيعية على طول الممرات وإطارات من الأوراق حول المباني. حرّك الكاميرا لا الموضوع: غيّر موضعك لتضع برجاً أمام السماء أو واجهة بين الأشجار، وحافظ على استواء الأفق في صور البحر.',
          ],
        },
        {
          h: 'التكوين بين المبنى والحديقة',
          p: [
            'صورة المنتزه الأصيلة هي التقاء المبنى بالحديقة، فكوّن لهما معاً. استخدم مساراً كخط قيادة نحو واجهة، أو دع الأوراق تؤطر برجاً، أو ضع جداراً من النخيل أمام السماء. حرّك قدميك لا التقريب: الخطوة الجانبية تفيد الصورة هنا أكثر من أي عدسة. حافظ على استواء الأفق في صور البحر، واترك في الإطار مساحة تتنفس فيها الحديقة.',
          ],
        },
        {
          h: 'الخصوصية والاحترام',
          p: [
            'هذه حدائق عامة يرتادها أهل المدينة، فتصوير الناس دون موافقة غير مقبول. استأذن قبل أن يُظهر الإطار أي شخص بشكل واضح، وكن حذراً بشكل خاص مع الأطفال.',
          ],
        },
        {
          h: 'الأمن والقيود والتصاريح',
          p: [
            'قد توجد في ضَيْعة ملكية سابقة مناطق حساسة أمنياً، وقد تحتاج بعض الأماكن تصريحاً للتصوير — بما في ذلك جلسات التصوير الاحترافية أو بعض المباني. والقواعد تتغير، فاسأل العاملين قبل افتراض أن مكاناً متاح للكاميرا، ولا تصوّر أبداً مناطق ممنوعة أو أمنية.',
          ],
        },
        {
          h: 'الكاميرات والعدّة والحدود العملية',
          p: [
            'يساعد تنوع العدسات لأن الضَيْعة تجمع إطلالات حدائق واسعة وتفاصيل معمارية. ويجلب الساحل ريحاً وملحاً، فاحتفظ بقطعة قماش لعدستك وكن مستعداً لتغيّر الضوء سريعاً مع تحرك السحاب. وتذكّر أن بعض المناطق قد تكون ممنوعة، وأن التصوير الاحترافي أو المُعدّ قد يحتاج تصريحاً، وأن لا صورة تستحق تجاهل لافتة أو تعليمات أحد العاملين.',
          ],
        },
      ],
      faq: [
        ['هل يمكنني التصوير في المنتزه؟', 'التصوير العام في الحدائق شائع، لكن القواعد تتغير وقد تكون بعض المناطق مقيّدة. اسأل العاملين إن لم تكن متأكداً، واحترم دائماً إشارات الخصوصية والأمن.'],
        ['هل يُسمح بالتصوير الاحترافي؟', 'قد يحتاج ذلك تصريحاً، خصوصاً للتصوير التجاري أو المُعدّ. اسأل مسبقاً بدل الافتراض.'],
        ['ما أفضل ضوء؟', 'الصباح الباكر وبعد العصر عادة يمنحان ضوءاً أنعم وأدفأ. الظهيرة قاسية على الواجهات.'],
        ['هل أستطيع تصوير الناس؟', 'فقط بموافقتهم. هذه حدائق عامة للعائلات، والخصوصية مهمة.'],
        ['هل أستطيع استخدام طائرة مسيّرة؟', 'لا تفترض ذلك. الطائرات المسيّرة مقيّدة عادة فوق المواقع الحساسة، وقد تكون لضَيْعة ملكية سابقة قواعدها. اسأل العاملين مسبقاً، ولا تطِر أبداً دون تصريح واضح.'],
        ['ما أفضل مكان لتصوير البحر؟', 'أي مسار في الحديقة بإطلالة مفتوحة نحو المتوسط قد يمنح صورة بحرية، لكننا لا نستطيع تأكيد نقطة بعينها. اتبع الساحل واحترم أي أجزاء مغلقة أو مقيّدة.'],
      ],
      related: ['sunset-guide', 'architecture', 'haramlik-palace', 'best-time-to-visit'],
    },
  },
  {
    slug: 'sunset-guide',
    group: 'itineraries',
    image: '/images/montaza-palace-coast.jpg',
    imageAlt: 'Sea and sky on the Mediterranean coast at Montaza in the warm light of late day',
    en: {
      title: 'Montaza Palace Sunset Guide — Timing the Golden Hour',
      h1: 'Sunset at Montaza Palace',
      description: 'Watching sunset at Montaza Palace: why the coastal setting matters, how to find today’s sunset time, when to arrive, where to stand, and how to plan your exit before the grounds close.',
      lead: 'Montaza faces the Mediterranean on Alexandria’s eastern coast, which makes the late-day light a real reason to visit. There is no fixed sunset clock time to quote — it changes through the year — so the practical approach is to look up today’s local sunset time, arrive well before it, and plan your exit while it is still light.',
      quick: [
        ['Setting', 'Coastal garden on the Mediterranean'],
        ['Timing', 'Check today’s local sunset time'],
        ['Arrive', 'Well before sunset'],
        ['Light', 'Warm and soft before the sun drops'],
        ['Exit', 'Plan it before it gets dark'],
        ['Best view', 'Open sky and sea together'],
      ],
      sections: [
        {
          h: 'Why sunset suits Montaza',
          p: [
            'The estate is a coastal garden, so the sun sets over or near the sea depending on the season and your position. Late-day light is warm and softer than midday, flattering the palms, the garden avenues and the facades of the former royal buildings.',
          ],
        },
        {
          h: 'How to find the right time',
          p: [
            'Sunset time shifts through the year, so do not rely on a number in a guide. Check a weather app or a clock-and-sunset tool for Alexandria on the day, then work backwards: aim to arrive with enough time to walk to your spot and settle before the light peaks.',
            'The Google Maps listing suggests the grounds can be open late, but a listed closing time is not a sunset time — confirm last entry on the day.',
          ],
        },
        {
          h: 'Where to stand',
          list: [
            'A garden path with an open view towards the sea',
            'A spot facing the palace facades as the light warms',
            'Anywhere you can see the water and the sky together',
            'A position you can leave quickly as the light fades',
          ],
        },
        {
          h: 'The sea view as the sun drops',
          p: [
            'As the sun lowers, the sea view becomes the main event. Depending on the season and where you stand, the light may fall over the water or across the gardens, turning the palms and the palace facades warm and golden. The sky and the water are often most colourful in the window just before the sun goes down and just after, so hold your position rather than leaving at the first sign of the sun dropping.',
          ],
        },
        {
          h: 'Practical points',
          p: [
            'Coastal evenings can be breezy even when the day was warm, so bring a light layer. After sunset the light drops quickly; plan your walk back and your transport before it gets dark.',
          ],
        },
        {
          h: 'After sunset: leaving safely',
          p: [
            'Once the sun is down, light fades quickly, and a large garden with unlit paths is not the place to be finding your way in the dark. Decide your route back to the gate while there is still colour in the sky, keep to the main paths, and make sure your transport is arranged rather than improvised. We cannot confirm lighting levels or late closing times for you, so do not plan to be inside the grounds after dark without checking first.',
          ],
        },
        {
          h: 'If you cannot stay until sunset',
          p: [
            'If the grounds close before sunset, or you simply cannot stay, the same warm light arrives earlier as golden-hour light, and a late-afternoon visit gives much of the effect without the risk of an exit after dark. Check the closing and last-entry time first, then work backwards from it rather than from the sunset.',
          ],
        },
        {
          h: 'A simple checklist',
          list: [
            'Check today’s local sunset time',
            'Arrive early enough to find a spot',
            'Bring a light layer for the breeze',
            'Confirm the closing and last-entry time',
            'Arrange your exit and transport in advance',
          ],
        },
      ],
      faq: [
        ['What time is sunset at Montaza?', 'There is no single time — it changes through the year. Look up today’s local sunset for Alexandria and plan around it.'],
        ['When should I arrive?', 'Well before sunset, so you can walk to a good spot and settle in rather than rush.'],
        ['Is the estate open at sunset?', 'The Google Maps listing shows late hours, but that is a third-party listing. Confirm the closing and last-entry time on the day.'],
        ['What should I bring?', 'A light windproof layer and a way to check the time and your transport after dark.'],
        ['Can I photograph the sunset?', 'Yes, general garden photography is commonly done at Montaza, but respect privacy, security signs and any restricted areas, and do not use a drone without clear permission.'],
        ['What if it turns cloudy?', 'Cloud can soften or block the light, and it changes by the minute. Check the forecast, arrive early, and treat a clear gap in the cloud as a bonus rather than a guarantee.'],
      ],
      related: ['photography-guide', 'best-time-to-visit', 'nearby-beaches', 'opening-hours'],
    },
    ar: {
      title: 'دليل الغروب في قصر المنتزه — توقيت الساعة الذهبية',
      h1: 'الغروب في قصر المنتزه',
      description: 'مشاهدة الغروب في قصر المنتزه: لماذا يهم الموقع الساحلي، وكيف تجد موعد الغروب اليوم، ومتى تصل، وأين تقف، وكيف تخطط خروجك قبل إغلاق الحدائق.',
      lead: 'يواجه المنتزه البحر المتوسط على ساحل الإسكندرية الشرقي، ما يجعل ضوء آخر النهار سبباً حقيقياً للزيارة. لا يوجد موعد ساعة ثابت للغروب نذكره — فهو يتغير على مدار السنة — لذا فالأسلوب العملي هو أن تبحث عن موعد الغروب المحلي اليوم، وتصل قبله بمدة كافية، وتخطط للخروج قبل أن يُظلم.',
      quick: [
        ['الموقع', 'حديقة ساحلية على المتوسط'],
        ['التوقيت', 'تحقق من موعد الغروب المحلي اليوم'],
        ['الوصول', 'قبل الغروب بمدة كافية'],
        ['الضوء', 'دافئ وناعم قبل هبوط الشمس'],
        ['الخروج', 'خطط له قبل الظلام'],
        ['أفضل إطلالة', 'سماء وبحر مفتوحان معاً'],
      ],
      sections: [
        {
          h: 'لماذا يناسب الغروب المنتزه',
          p: [
            'الضَيْعة حديقة ساحلية، فتغيب الشمس فوق البحر أو قربه حسب الموسم وموضعك. وضوء آخر النهار دافئ وأنعم من الظهيرة، يُجمل النخيل وممرات الحدائق وواجهات المباني الملكية السابقة.',
          ],
        },
        {
          h: 'كيف تجد الوقت الصحيح',
          p: [
            'يتغير موعد الغروب على مدار السنة، فلا تعتمد على رقم في دليل. تحقق من تطبيق طقس أو أداة للساعة والغروب خاصة بالإسكندرية في اليوم نفسه، ثم احسب بالعكس: اهدف إلى الوصول بوقت يسمح لك بالمشي إلى مكانك والاستقرار قبل أن يبلغ الضوء ذروته.',
            'تشير قائمة خرائط Google إلى إمكانية بقاء الحدائق مفتوحة حتى وقت متأخر، لكن وقت الإغلاق المدرج ليس موعد الغروب — أكّد آخر موعد للدخول في اليوم نفسه.',
          ],
        },
        {
          h: 'أين تقف',
          list: [
            'مسار في الحديقة بإطلالة مفتوحة نحو البحر',
            'موضع يواجه واجهات القصر بينما يدفأ الضوء',
            'أي مكان ترى فيه الماء والسماء معاً',
            'موضع يمكنك مغادرته سريعاً حين يخفت الضوء',
          ],
        },
        {
          h: 'إطلالة البحر بينما تهبط الشمس',
          p: [
            'حين تنخفض الشمس تصبح إطلالة البحر هي الحدث الأبرز. وحسب الموسم وموضعك، قد يقع الضوء فوق الماء أو عبر الحدائق، فيحوّل النخيل وواجهات القصر إلى دفء ذهبي. وغالباً ما تكون السماء والماء أكثر تلوّناً في الفترة التي تسبق مغيب الشمس بقليل والتي تليه مباشرة، فابقَ في موضعك بدل المغادرة عند أول هبوط للشمس.',
          ],
        },
        {
          h: 'نقاط عملية',
          p: [
            'قد يكون المساء الساحلي عاصفاً حتى لو كان النهار حاراً، فاحمل طبقة خفيفة. بعد الغروب يخفت الضوء سريعاً؛ خطّط لمشي العودة وتنقلك قبل أن يُظلم.',
          ],
        },
        {
          h: 'بعد الغروب: الخروج بأمان',
          p: [
            'بعد مغيب الشمس يخفت الضوء سريعاً، والحديقة الواسعة بمسارات غير مضاءة ليست مكاناً تبحث فيه عن طريقك في الظلام. حدّد طريق عودتك إلى البوابة وما زال في السماء لون، والزم المسارات الرئيسية، وتأكد من ترتيب تنقلك بدل ارتجاله. ولا نستطيع تأكيد مستويات الإضاءة أو مواعيد الإغلاق المتأخرة، فلا تخطط للبقاء داخل الحدائق بعد الظلام دون التحقق أولاً.',
          ],
        },
        {
          h: 'إن لم تستطع البقاء حتى الغروب',
          p: [
            'إن كانت الحدائق تُغلق قبل الغروب، أو لم تستطع البقاء ببساطة، فإن الضوء الدافئ نفسه يأتي أبكر كضوء الساعة الذهبية، وتمنح زيارة بعد العصر معظم الأثر دون خطر الخروج بعد الظلام. تحقق من وقت الإغلاق وآخر موعد للدخول أولاً، ثم احسب بالعكس منه لا من الغروب.',
          ],
        },
        {
          h: 'قائمة مختصرة',
          list: [
            'تحقق من موعد الغروب المحلي اليوم',
            'وصل مبكراً بما يكفي لإيجاد مكان',
            'احمل طبقة خفيفة للنسيم',
            'أكّد وقت الإغلاق وآخر موعد للدخول',
            'رتّب خروجك وتنقلك مسبقاً',
          ],
        },
      ],
      faq: [
        ['ما موعد الغروب في المنتزه؟', 'لا يوجد موعد واحد — فهو يتغير على مدار السنة. ابحث عن موعد الغروب المحلي للإسكندرية اليوم وخطط حوله.'],
        ['متى ينبغي أن أصل؟', 'قبل الغروب بمدة كافية، حتى تمشي إلى مكان جيد وتستقر بدل أن تتلهّف.'],
        ['هل الضَيْعة مفتوحة عند الغروب؟', 'تعرض قائمة خرائط Google ساعات متأخرة، لكنها قائمة طرف ثالث. أكّد وقت الإغلاق وآخر موعد للدخول في اليوم نفسه.'],
        ['ماذا أحضر؟', 'طبقة خفيفة واقية من الريح ووسيلة للتحقق من الوقت وتنقلك بعد الظلام.'],
        ['هل أستطيع تصوير الغروب؟', 'نعم، التصوير العام في الحدائق شائع في المنتزه، لكن احترم الخصوصية وإشارات الأمن وأي مناطق مقيّدة، ولا تستخدم طائرة مسيّرة دون تصريح واضح.'],
        ['ماذا لو غطّى السحاب؟', 'قد يلطّف السحاب الضوء أو يحجبه، وهو يتغير دقيقة بدقيقة. تحقق من التوقعات، ووصل مبكراً، واعتبر فجوة صافية في السحاب مكسباً لا ضماناً.'],
      ],
      related: ['photography-guide', 'best-time-to-visit', 'nearby-beaches', 'opening-hours'],
    },
  },
  {
    slug: 'rainy-day-guide',
    group: 'itineraries',
    en: {
      title: 'Montaza Palace on a Rainy Day — What To Do Instead',
      h1: 'Montaza Palace on a rainy day',
      description: 'What to do when rain spoils a Montaza visit: Alexandria’s winter rain and wind, why gardens suffer in wet weather, and indoor alternatives elsewhere in the city to check separately.',
      lead: 'Alexandria’s winter can bring rain and strong coastal wind, and a wet day is the worst weather for a garden estate: paths become slippery and there is little confirmed indoor shelter. If rain spoils the plan, save Montaza for a dry day and look at indoor options elsewhere in the city instead.',
      quick: [
        ['Worst season', 'Winter, for rain and wind'],
        ['Why it matters', 'Garden paths and little shelter'],
        ['Best move', 'Reschedule for a dry day'],
        ['Indoors', 'Consider the city centre instead'],
        ['Check', 'Verify any alternative separately'],
        ['Backup', 'An indoor plan for later in the day'],
      ],
      sections: [
        {
          h: 'Alexandria’s winter weather',
          p: [
            'The coast has mild but changeable winters, and rain and wind are more likely between late autumn and early spring. The same sea breeze that makes Montaza pleasant in summer can make a winter visit cold and exposed.',
          ],
        },
        {
          h: 'Why rain hurts a garden visit',
          p: [
            'Montaza is essentially an outdoor garden estate: paths, lawns, trees and the open coast. We have not confirmed indoor shelter inside the gardens, so a downpour can leave you with no dry place to wait, and wet paths can be slippery for anyone unsteady on their feet.',
          ],
        },
        {
          h: 'If rain spoils the visit',
          list: [
            'Stop rather than push on through a downpour',
            'Reschedule for a dry, clearer day',
            'Keep a short garden visit if you are already there',
            'Move the rest of the day indoors',
          ],
        },
        {
          h: 'A short wet-weather plan if you are already there',
          p: [
            'If a shower catches you on site, the goal is simply to get dry and keep the day calm rather than to salvage a full visit.',
          ],
          list: [
            'Stop at the first heavy shower rather than pressing on',
            'Move towards a gate or an obvious shelter, if one exists',
            'Cut the visit to a single short stretch, or leave',
            'Keep the rest of the day for an indoor option',
            'If you stay, keep to the main paved paths rather than wet lawns, which can be slippery',
          ],
        },
        {
          h: 'Dressing for a coastal downpour',
          p: [
            'A wet day on the Alexandria coast is usually cool and windy as well as wet, so a light waterproof layer and something for the wind matter more than an umbrella, which the sea breeze will quickly turn inside out. Footwear with grip helps on wet stone and steps. Keep bags and cameras covered, and remember that the coast can feel noticeably colder than the city once the rain sets in.',
          ],
        },
        {
          h: 'Indoor alternatives elsewhere in the city',
          p: [
            'Alexandria has indoor options in and around the centre, such as museum areas and galleries, that suit a wet day better than a garden. Treat these as separate trips to check for yourself: confirm current opening, tickets and access before you go, because we are not verifying them here.',
          ],
        },
        {
          h: 'Reading the forecast before you set out',
          p: [
            'Coastal weather changes quickly, so check the forecast the day before and again on the morning itself, and keep Montaza as a flexible part of the plan rather than a fixed appointment. If a dry window opens, a short garden visit can still work; if not, move the day indoors and save the estate for better weather.',
          ],
        },
        {
          h: 'Planning around the weather',
          list: [
            'Check the forecast the day before',
            'Keep Montaza flexible, not fixed',
            'Have an indoor plan ready as a backup',
            'If you go anyway, keep it short and dress for wind and rain',
          ],
        },
      ],
      faq: [
        ['Is Montaza worth visiting in the rain?', 'Usually not. It is an outdoor estate with little confirmed shelter and paths that can become slippery. A dry day is far better.'],
        ['When does it rain in Alexandria?', 'Rain and wind are more likely in the cooler months, roughly from late autumn into early spring. Check the forecast before a garden day.'],
        ['What can I do instead on a rainy day?', 'Look at indoor options in the city centre, such as museum areas. Check their opening, tickets and access separately before you go.'],
        ['Should I cancel or reschedule?', 'Rescheduling for a clearer day is usually the better choice if you can move the visit.'],
        ['Is there anywhere to shelter inside the gardens?', 'We have not confirmed indoor shelter within the gardens, so assume you may have none and plan accordingly.'],
        ['Do the palaces open if it rains?', 'Palace interiors are not confirmed as open for visitors here, and a wet day is not the moment to depend on them. Check separately and do not rely on it.'],
      ],
      related: ['nearby-attractions', 'vs-royal-jewelry-museum', 'to-bibliotheca-alexandrina', 'best-time-to-visit'],
    },
    ar: {
      title: 'قصر المنتزه في يوم ممطر — ماذا تفعل بدلاً منه',
      h1: 'قصر المنتزه في يوم ممطر',
      description: 'ماذا تفعل حين يفسد المطر زيارة المنتزه: مطر الإسكندرية وريحها شتاءً، ولماذا تتضرر الحدائق في الطقس المبتل، وبدائل داخلية في المدينة تتحقق منها على حدة.',
      lead: 'قد يجلب شتاء الإسكندرية مطراً وريحاً ساحلية قوية، واليوم المبتل أسوأ طقس لضَيْعة حدائق: تصبح المسارات زلقة ولا يوجد مأوى داخلي مؤكد. إن أفسد المطر الخطة، فأجّل المنتزه ليوم جاف، وانظر في بدائل داخلية في المدينة بدلاً منه.',
      quick: [
        ['أسوأ موسم', 'الشتاء للمطر والريح'],
        ['لماذا يهم', 'مسارات الحدائق وقلة المأوى'],
        ['الأفضل', 'تأجيله ليوم جاف'],
        ['بالداخل', 'فكّر في وسط المدينة بدلاً منه'],
        ['التحقق', 'أكّد أي بديل على حدة'],
        ['البديل', 'خطة داخلية لبقية اليوم'],
      ],
      sections: [
        {
          h: 'طقس الإسكندرية شتاءً',
          p: [
            'للساحل شتاء معتدل لكن متقلب، والمطر والريح أكثر احتمالاً بين أواخر الخريف وأوائل الربيع. ونفس نسيم البحر الذي يجعل المنتزه لطيفاً صيفاً قد يجعل زيارة الشتاء باردة ومكشوفة.',
          ],
        },
        {
          h: 'لماذا يضر المطر بزيارة الحدائق',
          p: [
            'المنتزه أساساً ضَيْعة حدائق في الهواء الطلق: مسارات ومسطحات وأشجار وساحل مفتوح. ولم نتحقق من وجود مأوى داخلي داخل الحدائق، فقد يتركك المطر الغزير بلا مكان جاف تنتظر فيه، وقد تصبح المسارات المبتلة زلقة لمن لا يثبت على قدميه بسهولة.',
          ],
        },
        {
          h: 'إن أفسد المطر الزيارة',
          list: [
            'توقف بدل المضي عبر المطر الغزير',
            'أجّل الزيارة ليوم جاف وأصفى',
            'ابقِ الزيارة قصيرة إن كنت هناك بالفعل',
            'انقل بقية اليوم إلى الداخل',
          ],
        },
        {
          h: 'خطة قصيرة في الطقس المبتل إن كنت هناك بالفعل',
          p: [
            'إن فاجأتك زخة وأنت داخل الموقع، فالهدف ببساطة أن تجف وتبقي اليوم هادئاً لا أن تنقذ زيارة كاملة.',
          ],
          list: [
            'توقف عند أول زخة قوية بدل المضي',
            'اتجه نحو بوابة أو مأوى ظاهر إن وُجد أحدهما',
            'اقتصر الزيارة على جزء قصير واحد، أو اخرج',
            'احفظ بقية اليوم لخيار داخلي',
            'إن بقيت، فالزم المسارات الرئيسية المعبّدة بدل المسطحات المبتلة التي قد تكون زلقة',
          ],
        },
        {
          h: 'اللبس لزخة ساحلية',
          p: [
            'اليوم المبتل على ساحل الإسكندرية غالباً بارد وعاصف فضلاً عن كونه ممطراً، فطبقة خفيفة مقاوِمة للماء وشيء للريح أهم من مظلة سيقلبها نسيم البحر سريعاً. ويساعد الحذاء ذو النعل الماسك على الحجر والدرج المبتلين. غطِّ الحقائب والكاميرات، وتذكّر أن الساحل قد يبدو أبرد بوضوح من المدينة بعد أن يبدأ المطر.',
          ],
        },
        {
          h: 'بدائل داخلية في المدينة',
          p: [
            'تمتلك الإسكندرية خيارات داخلية في وسط المدينة وحوله، مثل مناطق المتاحف والصالات، تناسب اليوم المبتل أكثر من حديقة. اعتبرها زيارات منفصلة تتحقق منها بنفسك: أكّد المواعيد الحالية والتذاكر والوصول قبل الذهاب، فنحن لا نتحقق منها هنا.',
          ],
        },
        {
          h: 'قراءة التوقعات قبل الانطلاق',
          p: [
            'يتغير الطقس الساحلي سريعاً، فتحقق من التوقعات في اليوم السابق ثم صباح اليوم نفسه، وابقِ المنتزه جزءاً مرناً من الخطة لا موعداً ثابتاً. وإن انفتحت نافذة جافة، فقد تنجح زيارة قصيرة للحدائق؛ وإن لم تنفتح، فانقل اليوم إلى الداخل واحفظ الضَيْعة لطقس أفضل.',
          ],
        },
        {
          h: 'التخطيط حول الطقس',
          list: [
            'تحقق من التوقعات في اليوم السابق',
            'اجعل المنتزه مرناً لا ثابتاً',
            'جهّز خطة داخلية كبديل',
            'إن ذهبت رغم ذلك، اجعلها قصيرة والبس للريح والمطر',
          ],
        },
      ],
      faq: [
        ['هل يستحق المنتزه الزيارة تحت المطر؟', 'عادة لا. فهي ضَيْعة في الهواء الطلق بقليل من المأوى المؤكد ومسارات قد تصبح زلقة. اليوم الجاف أفضل بكثير.'],
        ['متى تمطر الإسكندرية؟', 'المطر والريح أكثر احتمالاً في الأشهر الأبرد، تقريباً من أواخر الخريف إلى أوائل الربيع. تحقق من التوقعات قبل يوم الحدائق.'],
        ['ماذا أفعل بدلاً منه في يوم ممطر؟', 'انظر في خيارات داخلية في وسط المدينة مثل مناطق المتاحف. تحقق من مواعيدها وتذاكرها ووصولها على حدة قبل الذهاب.'],
        ['هل أُلغي أم أؤجل؟', 'تأجيل الزيارة ليوم أصفى عادة هو الخيار الأفضل إن أمكنك تحريكها.'],
        ['هل يوجد مكان آوٍ داخل الحدائق؟', 'لم نتحقق من وجود مأوى داخلي داخل الحدائق، فافترض أنه قد لا يتوفر لك شيء ورتّب خطتك على هذا الأساس.'],
        ['هل تُفتح القصور إن أمطرت؟', 'داخل القصور غير مؤكد أنه مفتوح للزوار هنا، واليوم المبتل ليس وقته للاعتماد عليه. تحقق على حدة ولا تراهن عليه.'],
      ],
      related: ['nearby-attractions', 'vs-royal-jewelry-museum', 'to-bibliotheca-alexandrina', 'best-time-to-visit'],
    },
  },
];
