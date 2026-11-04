import type { Guide } from './types';

/** Group A — visitor information (P0). Facts are limited to what this guide can verify;
 *  anything unconfirmed is labelled as such rather than filled with a plausible number. */
export const visitGuides: Guide[] = [
  {
    slug: 'tickets',
    group: 'visit',
    image: '/images/montaza-palace-main.jpg',
    imageAlt: 'Palace facade behind palms with a fountain in the foreground at Montaza',
    en: {
      title: 'Montaza Palace Tickets & Entrance Fees — What Is Charged',
      h1: 'Montaza Palace tickets and entrance fees',
      description: 'How admission works at Montaza Palace and Gardens: garden entry, palace interiors, beaches and parking, what has not been verified, and how to confirm the current price before you travel.',
      lead: 'There is no single official price that covers everything called “Montaza Palace”. Garden entry, any palace interior, beach facilities and parking can be separate matters. Confirm the charge and what it covers at the ticket desk you actually use, on the day of your visit.',
      quick: [
        ['Official tariff for this guide', 'Not verified'],
        ['Where you pay', 'At the entrance you use'],
        ['What a ticket covers', 'Ask before paying'],
        ['This website', 'Does not sell tickets'],
        ['Garden entry fee', 'Not verified'],
        ['Palace interior', 'Separate ticket — confirm'],
        ['Beach and facilities', 'May be charged separately'],
        ['Last checked', '4 November 2026'],
      ],
      sections: [
        {
          h: 'Why we do not print a fixed price',
          p: [
            'Admission charges at Egyptian gardens and heritage sites are set locally and can change with the season, the category of visitor and government decisions. We have not been able to verify a current official tariff for Montaza, so we do not repeat figures taken from map panels, hotel offers or old travel blogs.',
            'A confidently wrong number is worse than no number. It sends people to the gate with the wrong budget, and it is the fastest way for a travel guide to lose trust.',
          ],
        },
        {
          h: 'The four things that can be charged separately',
          list: [
            'Admission to the public gardens of the Montaza estate',
            'Access to a palace building such as Al-Haramlik or Salamlek, if it is open at all',
            'Beach or swimming facilities, which are not automatically part of garden admission',
            'Parking or vehicle entry, where it applies',
          ],
          p: ['Ask which of these your payment covers. A garden ticket should not be assumed to include a building or a beach.'],
        },
        {
          h: 'Residents and foreign visitors',
          p: [
            'Many Egyptian sites use a two-tier system: a lower fee for Egyptian and resident nationals, a higher fee for foreign visitors, often with separate student and child rates. We have not confirmed how, or whether, this is applied at Montaza today, or what the age categories are.',
            'Instead of guessing, ask for the category that applies to you and, if you are eligible for a discount, bring identification that proves it.',
          ],
        },
        {
          h: 'What to check at the gate',
          list: [
            'The price per adult, per child and per student',
            'Whether payment is cash only or cards are accepted',
            'What the ticket includes and where it is valid',
            'Whether you may leave and re-enter on the same ticket',
            'Whether a palace building or the beach needs its own ticket',
          ],
        },
        {
          h: 'Confirming the price before you travel',
          p: [
            'Use the Google Maps place listing to find a contact for the estate and ask directly, or ask your hotel or a licensed guide on the day. Prices are a moving target, so treat any figure you read online — including anything on this page — as needing confirmation at the gate.',
            'If you would rather check against an official source than a third-party page, the State Information Service (sis.gov.eg) and the Ministry of Tourism and Antiquities (egymonuments.gov.eg) both publish information about Egyptian heritage sites, though neither is guaranteed to carry a live Montaza tariff. We last checked this page on 4 November 2026.',
          ],
        },
        {
          h: 'The garden entry fee',
          p: [
            'Entering the public gardens is normally the one charge that applies to almost everyone, and it is the fee we would most expect to exist — but we have still not verified a current figure, nor whether the garden is free at particular times or on particular days.',
            'Treat the garden fee as its own question and settle it first, before you ask about anything else. If you are quoted one price at the gate and a different one online, the gate is the authority on the day.',
          ],
        },
        {
          h: 'Concessions for adults, children and students',
          p: [
            'Egyptian sites often run three or more price bands: an adult rate, a child rate and a student rate, with proof of age or student status required for the lower bands. We have not confirmed which bands exist at Montaza today, or what ages they cover.',
            'If you believe you qualify for a concession, carry the document that proves it and ask for the concession explicitly; the assumption of “one price for everyone” is as unreliable as a fixed number.',
          ],
        },
        {
          h: 'Palace interiors and beaches as separate charges',
          p: [
            'Garden entry, access to a palace building such as Al-Haramlik or Salamlek, and use of beach or swimming facilities are different admission objects. A garden ticket should not be read as covering an interior or a beach, and we cannot confirm whether any separate charge currently applies.',
            'If a building or a beach facility is open during your visit, ask at the entrance to that specific area whether it needs its own ticket, rather than assuming the gate ticket was all-inclusive.',
          ],
        },
        {
          h: 'How this page was checked, and when',
          p: [
            'This guide deliberately records no price. The reason is that we could not verify one through a reliable channel, and inventing a figure would be worse than leaving the answer open.',
            'Our stated position was last checked on 4 November 2026. To verify for yourself, try the estate’s Google Maps place listing, the State Information Service (sis.gov.eg), the Ministry of Tourism and Antiquities (egymonuments.gov.eg), or simply ask the gate staff on the day of your visit — the last of these will always be the most current.',
          ],
        },
      ],
      faq: [
        ['How much does it cost to enter Montaza Palace?', 'We have not verified a current official price. Confirm the charge and what it covers at the entrance you use, and do not rely on hotel rates or old blog figures.'],
        ['Are foreign visitors charged more than Egyptians?', 'Many Egyptian sites use different rates for residents and foreign visitors. We have not confirmed how this is applied at Montaza, so ask for your category at the ticket desk.'],
        ['Is the palace interior included in the garden ticket?', 'No. Garden admission and access to a palace building are different things. Ask whether any building is open and whether it needs a separate ticket.'],
        ['Can I buy tickets online?', 'We are not aware of an official online ticket shop for Montaza. Buy on arrival unless the site itself or a licensed operator tells you otherwise.'],
        ['Do children or students pay less?', 'Many Egyptian sites offer child and student rates, but we have not confirmed the bands or ages at Montaza. Carry proof of age or student status and ask for the concession.'],
        ['Is the beach charged separately from the gardens?', 'Beach and swimming facilities are a separate admission object from the gardens, and we cannot confirm a current charge. Ask at the beach or facility entrance itself.'],
      ],
      related: ['opening-hours', 'palace-interior-access', 'gardens', 'location-entrance'],
    },
    ar: {
      title: 'تذاكر قصر المنتزه وأسعار الدخول — ما الذي يُدفع فعلاً',
      h1: 'تذاكر قصر المنتزه وأسعار الدخول',
      description: 'كيف يعمل الدخول في قصر وحدائق المنتزه بالإسكندرية: تذكرة الحدائق، دخول القصور، الشواطئ والمواقف، وما لم نتحقق منه، وكيفية تأكيد السعر الحالي قبل السفر.',
      lead: 'لا يوجد سعر رسمي واحد يغطي كل ما يُطلق عليه «قصر المنتزه». دخول الحدائق، وأي دخول لمبنى القصر، ومرافق الشاطئ، والمواقف قد تكون أموراً منفصلة. أكّد المبلغ وما يشمله عند شباك التذاكر الذي تستخدمه في يوم الزيارة.',
      quick: [
        ['تعريفة رسمية في هذا الدليل', 'لم تُتحقق'],
        ['مكان الدفع', 'عند البوابة التي تدخل منها'],
        ['ما تشمله التذكرة', 'اسأل قبل الدفع'],
        ['هذا الموقع', 'لا يبيع تذاكر'],
        ['رسوم دخول الحدائق', 'لم تُتحقق'],
        ['داخل القصر', 'تذكرة منفصلة — أكّد'],
        ['الشاطئ والمرافق', 'قد تُحتسب على حدة'],
        ['آخر مراجعة', '4 نوفمبر 2026'],
      ],
      sections: [
        {
          h: 'لماذا لا نكتب سعراً ثابتاً',
          p: [
            'تُحدَّد رسوم الدخول في الحدائق والمواقع الأثرية المصرية محلياً، وقد تتغير بحسب الموسم وفئة الزائر والقرارات الإدارية. لم نتمكن من التحقق من تعريفة رسمية حالية للمنتزه، لذلك لا نعيد أرقاماً مأخوذة من لوحات الخرائط أو عروض الفنادق أو مقالات قديمة.',
            'الرقم الخاطئ بثقة أسوأ من عدم ذكر رقم: يذهب الزائر بميزانية غير صحيحة، ويفقد الدليل مصداقيته.',
          ],
        },
        {
          h: 'أربعة أمور قد تُحتسب كل منها على حدة',
          list: [
            'دخول حدائق المنتزه العامة',
            'دخول مبنى قصر مثل الحرملك أو السلاملك، إن كان مفتوحاً أصلاً',
            'مرافق الشاطئ أو السباحة، وهي ليست جزءاً تلقائياً من تذكرة الحدائق',
            'المواقف أو دخول المركبات، حيث ينطبق ذلك',
          ],
          p: ['اسأل أي من هذه يشمله دفعه. لا تفترض أن تذكرة الحدائق تشمل مبنى أو شاطئاً.'],
        },
        {
          h: 'المقيمون والزوار الأجانب',
          p: [
            'تعتمد مواقع مصرية كثيرة نظام فئتين: رسم أقل للمصريين والمقيمين، ورسم أعلى للزوار الأجانب، مع فئات للطلاب والأطفال في كثير من الأحيان. لم نتحقق من كيفية تطبيق ذلك في المنتزه حالياً أو من الفئات العمرية.',
            'بدلاً من التخمين، اسأل عن الفئة التي تنطبق عليك، وإن كنت مؤهلاً لخصم فأحضر ما يثبت ذلك.',
          ],
        },
        {
          h: 'ما يجب التحقق منه عند البوابة',
          list: [
            'السعر للفرد وللطفل وللطالب',
            'هل الدفع نقداً فقط أم تُقبل البطاقات',
            'ما تشمله التذكرة وأين تكون صالحة',
            'هل يمكن الخروج والدخول مرة أخرى بالتذكرة نفسها',
            'هل يحتاج مبنى القصر أو الشاطئ تذكرة منفصلة',
          ],
        },
        {
          h: 'تأكيد السعر قبل السفر',
          p: [
            'استخدم قائمة المكان على خرائط Google للوصول إلى وسيلة تواصل مع المنتزه والسؤال مباشرة، أو اسأل فندقك أو مرشداً مرخصاً في يوم الزيارة. الأسعار متغيرة، فاعتبر أي رقم تقرأه على الإنترنت — بما في ذلك في هذه الصفحة — بحاجة إلى تأكيد عند البوابة.',
            'وإن آثرت التحقق من مصدر رسمي بدل صفحة طرف ثالث، فإن الهيئة العامة للاستعلامات (sis.gov.eg) ووزارة السياحة والآثار (egymonuments.gov.eg) تنشران معلومات عن المواقع الأثرية المصرية، وإن لم يضمن أيٌّ منهما وجود تعريفة حديثة للمنتزه. آخر مراجعة لهذه الصفحة في 4 نوفمبر 2026.',
          ],
        },
        {
          h: 'رسوم دخول الحدائق',
          p: [
            'دخول الحدائق العامة هو عادة الرسم الوحيد الذي ينطبق على الجميع تقريباً، وهو الرسم الذي نتوقع وجوده أكثر من غيره — لكننا لم نتحقق بعد من رقمه الحالي، ولا مما إذا كانت الحدائق مجانية في أوقات أو أيام بعينها.',
            'اعتبر رسوم الحدائق سؤالاً قائماً بذاته وحدّده أولاً قبل أي شيء آخر. وإن قيل لك سعر عند البوابة وسعر مختلف على الإنترنت، فالبوابة هي المرجع في اليوم.',
          ],
        },
        {
          h: 'تخفيضات البالغين والأطفال والطلاب',
          p: [
            'تعتمد المواقع المصرية غالباً ثلاث فئات أو أكثر: سعر للبالغ وسعر للطفل وسعر للطالب، مع طلب ما يثبت العمر أو صفة الطالب للفئات الأدنى. لم نتحقق من الفئات الموجودة في المنتزه حالياً ولا من الأعمار التي تغطيها.',
            'وإن كنت ترى أنك تستحق تخفيضاً، فأحضر المستند الذي يثبته واسأل عن التخفيض صراحةً؛ فافتراض «سعر واحد للجميع» لا يقل خطأً عن رقم ثابت.',
          ],
        },
        {
          h: 'داخل القصر والشواطئ كرسوم منفصلة',
          p: [
            'دخول الحدائق، ودخول مبنى قصر مثل الحرملك أو السلاملك، والاستفادة من مرافق الشاطئ أو السباحة، كلها أشياء دخول مختلفة. لا تُقرأ تذكرة الحدائق كتذكرة تشمل الداخل أو الشاطئ، ولا نستطيع تأكيد وجود رسوم منفصلة حالياً.',
            'وإن كان مبنى أو مرفق شاطئ مفتوحاً أثناء زيارتك، فاسأل عند مدخل ذلك الجزء بالتحديد هل يحتاج تذكرة خاصة، بدل افتراض أن تذكرة البوابة شاملة.',
          ],
        },
        {
          h: 'كيف راجعنا هذه الصفحة ومتى',
          p: [
            'لا يسجّل هذا الدليل أي سعر عن قصد؛ والسبب أننا لم نتحقق من سعر عبر قناة موثوقة، واختلاق رقم أسوأ من ترك الجواب مفتوحاً.',
            'آخر مراجعة لموقفنا هذا في 4 نوفمبر 2026. وللتحقق بنفسك جرّب قائمة المكان على خرائط Google، أو الهيئة العامة للاستعلامات (sis.gov.eg)، أو وزارة السياحة والآثار (egymonuments.gov.eg)، أو اسأل العاملين عند البوابة في يوم زيارتك — وهذا الأخير هو الأدق دائماً.',
          ],
        },
      ],
      faq: [
        ['كم تبلغ تكلفة الدخول إلى قصر المنتزه؟', 'لم نتحقق من سعر رسمي حالي. أكّد المبلغ وما يشمله عند البوابة التي تستخدمها، ولا تعتمد على أسعار الفنادق أو أرقام قديمة.'],
        ['هل يُدفع من الزائر الأجنبي أكثر من المصري؟', 'تعتمد مواقع مصرية كثيرة أسعاراً مختلفة للمقيمين والزوار الأجانب. لم نتحقق من تطبيق ذلك في المنتزه، فاسأل عن فئتك عند شباك التذاكر.'],
        ['هل دخول القصر مشمول في تذكرة الحدائق؟', 'لا. دخول الحدائق ودخول مبنى القصر أمران مختلفان. اسأل هل أي مبنى مفتوح وهل يحتاج تذكرة منفصلة.'],
        ['هل يمكن شراء التذاكر عبر الإنترنت؟', 'لا نعرف متجراً رسمياً للتذاكر الإلكترونية في المنتزه. اشترِ عند الوصول ما لم يخبرك الموقع نفسه أو مشغل مرخص بغير ذلك.'],
        ['هل يدفع الأطفال أو الطلاب أقل؟', 'تقدّم مواقع مصرية كثيرة أسعاراً للأطفال والطلاب، لكننا لم نتحقق من الفئات أو الأعمار في المنتزه. أحضر ما يثبت العمر أو صفة الطالب واسأل عن التخفيض.'],
        ['هل يُحتسب الشاطئ على حدة عن الحدائق؟', 'مرافق الشاطئ والسباحة أمر دخول منفصل عن الحدائق، ولا نستطيع تأكيد رسم حالٍ. اسأل عند مدخل الشاطئ أو المرفق نفسه.'],
      ],
      related: ['opening-hours', 'palace-interior-access', 'gardens', 'location-entrance'],
    },
  },
  {
    slug: 'opening-hours',
    group: 'visit',
    image: '/images/montaza-palace-garden.jpg',
    imageAlt: 'Succulent plants and trees in Montaza gardens with the sea behind',
    en: {
      title: 'Montaza Palace Opening Hours — What the Listing Shows',
      h1: 'Montaza Palace opening hours',
      description: 'The hours shown for Montaza Palace on Google Maps, why a garden timetable is not a palace-interior timetable, and how to confirm the last entry time before you travel.',
      lead: 'The Google Maps listing consulted for this guide shows 08:00–00:00 from Sunday to Thursday and on Saturday, with Friday listed as 24 hours. That is a third-party listing, not a confirmed official timetable, and it does not tell you which palace buildings are open.',
      quick: [
        ['Listing hours', '08:00–00:00, six days'],
        ['Friday', 'Listed as 24 hours'],
        ['Status', 'Third-party listing, not official'],
        ['Last entry', 'Confirm on the day'],
        ['Gardens', 'Not verified'],
        ['Palace interiors', 'Not verified'],
        ['Last checked', '4 November 2026'],
      ],
      sections: [
        {
          h: 'What the listing actually says',
          p: [
            'The place page for Montaza Palace on Google Maps has shown the same pattern for months: open from 08:00 to midnight for six days of the week, and open around the clock on Friday. These figures come from a third-party listing, not from an official notice published by the estate.',
            'They are useful as a starting point. They are not a guarantee, and they say nothing about which buildings or gates are open at those times.',
          ],
        },
        {
          h: 'A garden timetable is not a palace timetable',
          p: [
            'The gardens, Al-Haramlik, Salamlek and the coastal facilities are different spaces with different rules. A long garden day does not mean a palace interior keeps the same hours — or that it is open to the public at all.',
            'If your visit depends on seeing inside a specific building, treat the hours question as two questions: when the grounds open, and whether that building is receiving visitors.',
          ],
        },
        {
          h: 'Friday and public holidays',
          p: [
            'Fridays are the busiest family day in Alexandria, and public holidays and school breaks can be even busier. The listing shows Friday as 24 hours, but crowds, parking and last-entry rules are separate issues from the headline opening time.',
            'If you want a calm visit, choose a weekday morning. If you can only come at a peak time, arrive early and expect queues at the main entrances.',
          ],
        },
        {
          h: 'Before you travel',
          list: [
            'Ask for the last entry time, not just the closing time',
            'Ask which gates close first in the evening',
            'Ask whether the palace buildings keep different hours',
            'Check again on the day; seasonal changes are common',
          ],
        },
        {
          h: 'Where each area stands',
          list: [
            'Gardens — Not verified; the Google Maps listing suggests a long day, but this is a third-party entry',
            'Al-Haramlik interior — Not verified; we cannot confirm public interior access at all',
            'Al-Salamlek interior — Not verified; the same caution applies as for Al-Haramlik',
            'Beaches and coastal facilities — Not verified; these may follow their own seasonal hours',
            'Vehicle gates and parking — Not verified; gate closing times may differ from the gardens',
          ],
          p: ['This list is the honest answer to “what are the opening hours?” at Montaza: the estate is not one timetable but several, and none of them is currently confirmed. Ask about each area you intend to use separately.'],
        },
        {
          h: 'The gardens',
          p: [
            'Everything the listing tells us concerns the gardens as a whole: broadly a long day, six days a week, with Friday shown as running around the clock. That makes the gardens the most likely area to be open when you arrive, and it is where most visitors spend their time.',
            'Even so, treat the garden timetable as unconfirmed. A published third-party entry is not a notice from the estate, and garden hours can shift with the season and with maintenance work.',
          ],
        },
        {
          h: 'The palace buildings',
          p: [
            'The hours of Al-Haramlik and Al-Salamlek are a separate and currently unanswerable question, because we have not confirmed that either building is open to the general public inside. There is no reliable interior timetable to publish.',
            'If you are travelling specifically to see a palace interior, make contact before you set out and ask whether the building is receiving visitors, rather than assuming it keeps the garden hours.',
          ],
        },
        {
          h: 'The beaches and coastal facilities',
          p: [
            'Beach and swimming facilities, where they operate, often run to their own seasonal pattern and can be closed outside the summer while the gardens stay open year round. We have not verified the current arrangement at Montaza.',
            'If a beach visit matters to you, ask separately about that facility’s hours, entry and season; do not read them from the garden timetable.',
          ],
        },
        {
          h: 'How this page was checked, and when',
          p: [
            'Our position was last checked on 4 November 2026. The only source behind the 08:00–00:00 pattern is the estate’s Google Maps place listing, which is third-party data rather than an official notice.',
            'To confirm for yourself, try the State Information Service (sis.gov.eg) or the Ministry of Tourism and Antiquities (egymonuments.gov.eg), or ask the gate staff on the day, which will always be the most current.',
          ],
        },
      ],
      faq: [
        ['What time does Montaza Palace open?', 'The Google Maps listing consulted for this guide shows opening at 08:00. Confirm with the site on the day, especially around holidays.'],
        ['Is it open on Friday?', 'The listing shows Friday as open for 24 hours. This is a third-party entry; expect it to be the busiest day and confirm the last entry time.'],
        ['Does the palace interior keep the same hours?', 'We have not confirmed public interior access to the palace buildings at all. Garden hours should not be read as an interior timetable.'],
        ['What is the last entry time?', 'The listing does not state it. Ask at the gate when you arrive, and keep enough time to walk back out.'],
        ['Are the beaches open at the same times as the gardens?', 'We have not confirmed this. Beach and swimming facilities can follow their own seasonal pattern, so ask about the specific facility separately.'],
        ['How often do the hours change?', 'We cannot say. Third-party listings are not updated by the estate, and seasonal or maintenance changes are not always announced in advance. Re-check on the day.'],
      ],
      related: ['tickets', 'palace-interior-access', 'best-time-to-visit', 'visitor-rules'],
    },
    ar: {
      title: 'مواعيد فتح قصر المنتزه — ما تعرضه القائمة',
      h1: 'مواعيد فتح قصر المنتزه',
      description: 'الساعات المعروضة لقصر المنتزه على خرائط Google، ولماذا لا تعني مواعيد الحدائق مواعيد دخول القصر، وكيف تؤكد آخر موعد للدخول قبل السفر.',
      lead: 'تعرض قائمة خرائط Google التي راجعناها لهذا الدليل ساعات 08:00–00:00 من الأحد إلى الخميس ويوم السبت، ويوم الجمعة مسجلاً 24 ساعة. هذه قائمة طرف ثالث وليست جدولاً رسمياً مؤكداً، ولا تخبرك أي مباني القصر مفتوحة.',
      quick: [
        ['ساعات القائمة', '08:00–00:00 ستة أيام'],
        ['الجمعة', 'مسجلة 24 ساعة'],
        ['الحالة', 'قائمة طرف ثالث، ليست رسمية'],
        ['آخر موعد للدخول', 'تأكد في يوم الزيارة'],
        ['الحدائق', 'لم يُتحقق'],
        ['داخل القصر', 'لم يُتحقق'],
        ['آخر مراجعة', '4 نوفمبر 2026'],
      ],
      sections: [
        {
          h: 'ما تقوله القائمة فعلاً',
          p: [
            'تُظهر صفحة مكان قصر المنتزه على خرائط Google النمط نفسه منذ أشهر: مفتوح من 08:00 حتى منتصف الليل ستة أيام في الأسبوع، ومفتوح على مدار الساعة يوم الجمعة. هذه الأرقام من قائمة طرف ثالث، لا من إعلان رسمي ينشره المنتزه.',
            'تفيد كنقطة بداية، لكنها ليست ضماناً، ولا تقول شيئاً عن المباني أو البوابات المفتوحة في تلك الأوقات.',
          ],
        },
        {
          h: 'مواعيد الحدائق ليست مواعيد القصر',
          p: [
            'الحدائق وقصر الحرملك والسلاملك والمنشآت الساحلية أماكن مختلفة بقواعد مختلفة. طول يوم الحدائق لا يعني أن داخل القصر يعمل بالمواعيد نفسها، أو أنه مفتوح للجمهور أصلاً.',
            'إذا كانت زيارتك تعتمد على رؤية داخل مبنى محدد، فاعتبر سؤال المواعيد سؤالين: متى تفتح الحدائق، وهل يستقبل ذلك المبنى الزوار.',
          ],
        },
        {
          h: 'الجمعة والأعياد الرسمية',
          p: [
            'الجمعة أكثر أيام الأسرة ازدحاماً في الإسكندرية، وقد تكون الأعياد والعطلات المدرسية أكثر ازدحاماً. تعرض القائمة الجمعة 24 ساعة، لكن الازدحام والمواقف وقواعد آخر دخول قضايا منفصلة عن وقت الفتح المعلن.',
            'إن أردت زيارة هادئة فاختر صباح يوم عمل. وإن لم يكن أمامك إلا وقت الذروة فوصل مبكراً وتوقّع طوابير عند البوابات الرئيسية.',
          ],
        },
        {
          h: 'قبل السفر',
          list: [
            'اسأل عن آخر موعد للدخول، لا عن وقت الإغلاق فقط',
            'اسأل أي البوابات تُغلق أولاً في المساء',
            'اسأل هل لمباني القصر مواعيد مختلفة',
            'أعد التحقق في يوم الزيارة؛ التغييرات الموسمية شائعة',
          ],
        },
        {
          h: 'وضع كل منطقة',
          list: [
            'الحدائق — لم يُتحقق؛ قائمة خرائط Google تشير إلى يوم طويل، لكنها إدخال طرف ثالث',
            'داخل الحرملك — لم يُتحقق؛ لا نستطيع تأكيد فتحه للجمهور أصلاً',
            'داخل السلاملك — لم يُتحقق؛ التحذير نفسه كالحرملك',
            'الشواطئ والمنشآت الساحلية — لم يُتحقق؛ قد تتبع مواعيد موسمية خاصة',
            'بوابات المركبات والمواقف — لم يُتحقق؛ قد تختلف مواعيد إغلاق البوابات عن الحدائق',
          ],
          p: ['هذه القائمة هي الجواب الصادق على سؤال «ما مواعيد الفتح؟» في المنتزه: فالضَيْعة ليست جدولاً واحداً بل جداول عدة، ولا شيء منها مؤكد حالياً. اسأل عن كل منطقة تنوي استخدامها على حدة.'],
        },
        {
          h: 'الحدائق',
          p: [
            'كل ما تخبرنا به القائمة يخص الحدائق ككل: يوم طويل عموماً، ستة أيام في الأسبوع، والجمعة معروضة على مدار الساعة. وهذا يجعل الحدائق أكثر المناطق احتمالاً أن تكون مفتوحة عند وصولك، وفيها يقضي معظم الزوار وقتهم.',
            'ومع ذلك اعتبر جدول الحدائق غير مؤكد. فالإدخال المنشور من طرف ثالث ليس إعلاناً من الضَيْعة، وقد تتغير مواعيد الحدائق مع الموسم وأعمال الصيانة.',
          ],
        },
        {
          h: 'مباني القصر',
          p: [
            'مواعيد الحرملك والسلاملك سؤال منفصل لا جواب له حالياً، لأننا لم نتحقق من فتح أي من المبنيين من الداخل للجمهور. فلا يوجد جدول داخلي موثوق لننشره.',
            'وإن كنت تسافر خصيصاً لرؤية داخل قصر، فتواصل قبل الانطلاق واسأل هل يستقبل المبنى الزوار، بدل افتراض أنه يتبع مواعيد الحدائق.',
          ],
        },
        {
          h: 'الشواطئ والمنشآت الساحلية',
          p: [
            'مرافق الشاطئ والسباحة، حيث تعمل، كثيراً ما تتبع نمطاً موسمياً خاصاً وقد تكون مغلقة خارج الصيف بينما تبقى الحدائق مفتوحة طوال العام. لم نتحقق من الترتيب الحالي في المنتزه.',
            'وإن كانت زيارة الشاطئ تهمّك، فاسأل على حدة عن مواعيد ذلك المرفق ودخوله وموسمه؛ ولا تقرأها من جدول الحدائق.',
          ],
        },
        {
          h: 'كيف راجعنا هذه الصفحة ومتى',
          p: [
            'آخر مراجعة لموقفنا في 4 نوفمبر 2026. والمصدر الوحيد خلف نمط 08:00–00:00 هو قائمة المكان على خرائط Google، وهي بيانات طرف ثالث لا إعلان رسمي.',
            'وللتحقق بنفسك جرّب الهيئة العامة للاستعلامات (sis.gov.eg) أو وزارة السياحة والآثار (egymonuments.gov.eg)، أو اسأل العاملين عند البوابة في اليوم، وهو الأدق دائماً.',
          ],
        },
      ],
      faq: [
        ['متى يُفتح قصر المنتزه؟', 'تعرض قائمة خرائط Google التي راجعناها موعد فتح عند 08:00. تأكد من المنتزه في يوم الزيارة، خصوصاً في الأعياد.'],
        ['هل هو مفتوح يوم الجمعة؟', 'تعرض القائمة الجمعة مفتوحة 24 ساعة. هذا إدخال طرف ثالث؛ توقّع أن يكون أكثر الأيام ازدحاماً وتأكد من آخر موعد للدخول.'],
        ['هل يتبع داخل القصر المواعيد نفسها؟', 'لم نتحقق من إتاحة دخول الجمهور إلى مباني القصر أصلاً. لا تُقرأ مواعيد الحدائق كجدول للداخل.'],
        ['ما آخر موعد للدخول؟', 'لا تذكر القائمة ذلك. اسأل عند البوابة عند وصولك، واترك وقتاً كافياً للمشي للخروج.'],
        ['هل الشواطئ مفتوحة في المواعيد نفسها كالحدائق؟', 'لم نتحقق من ذلك. فمرافق الشاطئ والسباحة قد تتبع نمطاً موسمياً خاصاً، فاسأل عن المرفق المحدد على حدة.'],
        ['كم مرة تتغير المواعيد؟', 'لا نستطيع الجزم. فقوائم الطرف الثالث لا يحدّثها المنتزه، والتغييرات الموسمية أو أعمال الصيانة لا تُعلن مسبقاً دائماً. أعد التحقق في اليوم.'],
      ],
      related: ['tickets', 'palace-interior-access', 'best-time-to-visit', 'visitor-rules'],
    },
  },
  {
    slug: 'palace-interior-access',
    group: 'visit',
    image: '/images/montaza-palace-coast.jpg',
    imageAlt: 'Al-Haramlik facade and towers behind trees at Montaza',
    en: {
      title: 'Can You Go Inside Montaza Palace? Interior Access Explained',
      h1: 'Can you go inside Montaza Palace?',
      description: 'Whether visitors can enter inside Al-Haramlik or Salamlek at Montaza, why a garden visit and a palace visit are different, and what to ask at the gate.',
      lead: 'You can visit the Montaza estate and its gardens. We have not confirmed that the palace buildings — Al-Haramlik and Salamlek — are open to the general public inside. Do not assume a garden ticket includes a palace interior.',
      quick: [
        ['Gardens', 'Generally open to visitors'],
        ['Palace interiors', 'Not confirmed as publicly open'],
        ['Separate ticket', 'Possible, ask at the gate'],
        ['Tours or events', 'Ask whether any are running'],
        ['What you can walk', 'The gardens and grounds'],
        ['What to confirm', 'Any interior opening'],
        ['Last checked', '4 November 2026'],
      ],
      sections: [
        {
          h: 'The short answer',
          p: [
            'Montaza is best understood as a royal estate: a large garden and coastal area containing former palace buildings. Walking the gardens is one thing; entering the rooms of Al-Haramlik or Salamlek is another.',
            'In practice, the most common visitor experience is a walk through the grounds with the palaces seen from outside. If your trip depends on an interior visit, treat it as something to confirm rather than expect.',
          ],
        },
        {
          h: 'Why the buildings are sometimes closed',
          p: [
            'Historically, parts of the Montaza buildings have been used for state and official purposes rather than as museums. A building that is closed for an event, a season or a restoration period is not unusual.',
            'That is why we do not describe a fixed "palace interior tour". Opening arrangements can change without a public announcement that reaches visitors in advance.',
          ],
        },
        {
          h: 'What to ask at the gate',
          list: [
            'Is any palace building open to visitors today?',
            'Does it need a separate ticket from the gardens?',
            'Are there fixed entry times or a guided group?',
            'Is photography allowed inside?',
            'Is there a dress code or a bag restriction?',
          ],
        },
        {
          h: 'Getting the most from an exterior visit',
          p: [
            'Even without entering, the architecture is the point: the towers, balconies and arches of Al-Haramlik, the palms, and the sea beyond the gardens. Plan a route that gives you the facades from the garden paths, and give yourself time to sit and look rather than rush between buildings.',
          ],
        },
        {
          h: 'Which parts of the estate you can actually visit',
          p: [
            'Directly: the part of Montaza you can most reliably visit is the garden estate — the grounds, the avenues, the coastal setting and the exterior of the former palace buildings. That is what “visiting Montaza Palace” means for the great majority of people.',
            'What we cannot confirm is public access inside the palace buildings themselves. The estate therefore divides into three kinds of object: the gardens and grounds, which visitors walk; the palace interiors, which need confirming first; and the beach or coastal facilities, which are a separate question again.',
          ],
          list: [
            'Gardens and grounds — the part visitors normally walk',
            'Palace exteriors — visible from the garden paths',
            'Al-Haramlik interior — not confirmed as publicly open',
            'Al-Salamlek interior — not confirmed as publicly open',
            'Beach and coastal facilities — separate, ask locally',
          ],
        },
        {
          h: 'Al-Haramlik, the main palace',
          p: [
            'Al-Haramlik is the larger, later palace building, associated with King Farouk’s era and usually recognised by its towers as the landmark of Montaza. Historically, parts of it have served official and state purposes rather than continuous museum use.',
            'We have not confirmed that its interior is open to the general public at the time of writing, so treat any inside visit as something to ask about or arrange rather than to plan on.',
          ],
        },
        {
          h: 'Al-Salamlek, the older building',
          p: [
            'The Salamlek is the earlier of the two palace buildings, dating from the late nineteenth century under Khedive Abbas Hilmi II, and it is quite different in character from Al-Haramlik. Its history and its current use are separate questions from those of the main palace.',
            'As with Al-Haramlik, we have not verified that the Salamlek interior receives general visitors. Do not assume that both buildings share an entrance, a ticket or a timetable.',
          ],
        },
        {
          h: 'Gardens, the sea and the coastal walk',
          p: [
            'The gardens and the coastline are not a lesser substitute for a palace visit — they are the main experience. The estate is a large shaded garden on the Mediterranean, and walking it, with the palace facades seen across the trees, is what most visitors come for.',
            'If an interior is closed on the day you visit, an exterior route still gives you the architecture, the planting and the sea. Plan that route from a confirmed gate, and allow it two to three hours if you like to stop and look.',
          ],
        },
        {
          h: 'How this page was checked, and when',
          p: [
            'Our position was last checked on 4 November 2026. We describe the gardens as visitable and the interiors as unconfirmed because that is what our sources support; we have found no reliable confirmation of routine public entry to the palace buildings.',
            'To check further, try the estate’s Google Maps place listing, the State Information Service (sis.gov.eg) or the Ministry of Tourism and Antiquities (egymonuments.gov.eg), or ask the gate staff on the day. Interior openings can be seasonal or event-driven.',
          ],
        },
      ],
      faq: [
        ['Is Montaza Palace open to visitors?', 'The estate and its gardens are open to visitors. We have not confirmed public access to the interiors of the palace buildings; ask on the day of your visit.'],
        ['Can I enter Al-Haramlik or Salamlek?', 'We do not confirm current general-public interior access to either building. A historic description or a photograph does not establish that entry is possible.'],
        ['Do I need a separate ticket for the palace?', 'If a building is open, it may need its own ticket or arrangement. Ask at the gate rather than assuming the garden ticket covers it.'],
        ['Is it worth visiting if the palaces are closed?', 'Yes. The gardens, the coastal setting and the palace facades are the main experience for most visitors, and they are visible without entering the buildings.'],
        ['Can I walk around the outside of the palaces?', 'Yes — the gardens and the palace exteriors are the normal visitor experience, and they are what most people see. The interiors are the part we cannot confirm.'],
        ['Does the garden ticket ever include a building?', 'We cannot confirm this. Treat the garden ticket and any palace access as separate matters, and ask at the gate whether a building is open.'],
      ],
      related: ['tickets', 'haramlik-palace', 'salamlek-palace', 'gardens'],
    },
    ar: {
      title: 'هل قصر المنتزه مفتوح للزيارة؟ دخول القصر من الداخل',
      h1: 'هل يمكن الدخول إلى قصر المنتزه من الداخل؟',
      description: 'هل يستطيع الزوار دخول قصر الحرملك أو السلاملك في المنتزه، ولماذا تختلف زيارة الحدائق عن زيارة القصر، وما يجب سؤاله عند البوابة.',
      lead: 'يمكنك زيارة منتزه المنتزه وحدائقه. لم نتحقق من أن مباني القصر — الحرملك والسلاملك — مفتوحة للجمهور من الداخل. لا تفترض أن تذكرة الحدائق تشمل داخل القصر.',
      quick: [
        ['الحدائق', 'مفتوحة للزوار عادة'],
        ['داخل القصر', 'لم يُتحقق من فتحه للجمهور'],
        ['تذكرة منفصلة', 'ممكنة، اسأل عند البوابة'],
        ['جولات أو فعاليات', 'اسأل هل تُقام حالياً'],
        ['ما يمكنك التنزه فيه', 'الحدائق والساحات'],
        ['ما يجب تأكيده', 'أي فتح داخلي'],
        ['آخر مراجعة', '4 نوفمبر 2026'],
      ],
      sections: [
        {
          h: 'الجواب المختصر',
          p: [
            'يُفهم المنتزه كضَيْعة ملكية سابقة: حديقة واسعة ومنطقة ساحلية تضم مباني قصور سابقة. المشي في الحدائق أمر، ودخول غرف الحرملك أو السلاملك أمر آخر.',
            'عملياً، التجربة الأكثر شيوعاً للزائر هي التنزه في الحدائق ورؤية القصور من الخارج. وإن كانت رحلتك تعتمد على زيارة داخلية فاعتبر ذلك أمراً يجب تأكيده لا افتراضه.',
          ],
        },
        {
          h: 'لماذا تُغلق المباني أحياناً',
          p: [
            'تاريخياً، استُخدمت أجزاء من مباني المنتزه لأغراض رسمية وحكومية لا كمتحف. لذلك ليس غريباً أن يكون مبنى مغلقاً لحدث أو موسم أو ترميم.',
            'لهذا لا نصف «جولة ثابتة داخل القصر». قد تتغير ترتيبات الفتح دون إعلان عام يصل إلى الزائر مسبقاً.',
          ],
        },
        {
          h: 'ما تسأل عنه عند البوابة',
          list: [
            'هل أي مبنى من القصر مفتوح للزوار اليوم؟',
            'هل يحتاج تذكرة منفصلة عن الحدائق؟',
            'هل هناك مواعيد دخول ثابتة أو مجموعة بمرشد؟',
            'هل التصوير مسموح في الداخل؟',
            'هل هناك قواعد للزيّ أو حمل الحقائب؟',
          ],
        },
        {
          h: 'كيف تستفيد من زيارة خارجية',
          p: [
            'حتى دون دخول، المعمار هو المقصد: أبراج الحرملك وشرفاته وأقواسه، والنخيل، والبحر خلف الحدائق. خطّط مساراً يمنحك الواجهات من ممرات الحديقة، واترك وقتاً للجلوس والتأمل بدل الإسراع بين المباني.',
          ],
        },
        {
          h: 'أي أجزاء الضَيْعة يمكنك زيارتها فعلاً',
          p: [
            'بصراحة: الجزء الأكثر موثوقية في زيارته من المنتزه هو ضَيْعة الحدائق — الساحات والجادات والموقع الساحلي وواجهات مباني القصور السابقة. وهذا ما يعنيه «زيارة قصر المنتزه» للغالبية العظمى من الناس.',
            'وما لا نستطيع تأكيده هو دخول الجمهور إلى داخل مباني القصر نفسها. لذلك تنقسم الضَيْعة إلى ثلاثة أنواع: الحدائق والساحات التي يمشي فيها الزوار، وداخل القصور الذي يحتاج تأكيداً أولاً، والشاطئ والمنشآت الساحلية وهو سؤال منفصل آخر.',
          ],
          list: [
            'الحدائق والساحات — ما يمشي فيه الزوار عادة',
            'واجهات القصور — تُرى من ممرات الحديقة',
            'داخل الحرملك — لم يُتحقق من فتحه للجمهور',
            'داخل السلاملك — لم يُتحقق من فتحه للجمهور',
            'الشاطئ والمنشآت الساحلية — منفصلة، اسأل محلياً',
          ],
        },
        {
          h: 'الحرملك، القصر الرئيسي',
          p: [
            'الحرملك هو مبنى القصر الأكبر والأحدث، ويرتبط بعصر الملك فاروق، ويُعرف عادة بأبراجه كعلامة للمنتزه. وتاريخياً خدمت أجزاء منه أغراضاً رسمية وحكومية لا استخداماً متحفياً متواصلاً.',
            'لم نتحقق من فتح داخله للجمهور العام وقت كتابة هذا النص، فاعتبر أي زيارة داخلية أمراً تسأل عنه أو ترتّبه لا أمراً تخطط عليه.',
          ],
        },
        {
          h: 'السلاملك، المبنى الأقدم',
          p: [
            'السلاملك هو الأقدم بين مبنيي القصر، ويعود إلى أواخر القرن التاسع عشر في عهد الخديوي عباس حلمي الثاني، وهو مختلف الطابع كثيراً عن الحرملك. وتاريخه واستخدامه الحالي سؤالان منفصلان عن القصر الرئيسي.',
            'وكما في الحرملك، لم نتحقق من استقبال داخل السلاملك للزوار العامين. لا تفترض أن المبنيين يتقاسمان بوابة أو تذكرة أو جدولاً.',
          ],
        },
        {
          h: 'الحدائق والبحر والنزهة الساحلية',
          p: [
            'الحدائق والساحل ليسا بديلاً أدنى عن زيارة القصر — بل هما التجربة الأساسية. فالضَيْعة حديقة مظللة واسعة على المتوسط، والتنزه فيها وواجهات القصور تُرى بين الأشجار هو ما يقصده معظم الزوار.',
            'وإن كان الداخل مغلقاً في يوم زيارتك، فالمسار الخارجي يمنحك المعمار والتشجير والبحر. خطّط لذلك المسار من بوابة مؤكدة، وامنحه ساعتين إلى ثلاث إن أحببت التوقف والتأمل.',
          ],
        },
        {
          h: 'كيف راجعنا هذه الصفحة ومتى',
          p: [
            'آخر مراجعة لموقفنا في 4 نوفمبر 2026. نصف الحدائق بأنها قابلة للزيارة والداخل بأنه غير مؤكد لأن ذلك ما تدعمه مصادرنا؛ ولم نجد تأكيداً موثوقاً لدخول الجمهور المعتاد إلى مباني القصر.',
            'ولمزيد من التحقق جرّب قائمة المكان على خرائط Google، أو الهيئة العامة للاستعلامات (sis.gov.eg) أو وزارة السياحة والآثار (egymonuments.gov.eg)، أو اسأل العاملين عند البوابة في اليوم. فالفتوحات الداخلية قد تكون موسمية أو مرتبطة بفعاليات.',
          ],
        },
      ],
      faq: [
        ['هل قصر المنتزه مفتوح للزيارة؟', 'الضَيْعة وحدائقها مفتوحة للزوار. لم نتحقق من دخول الجمهور إلى داخل مباني القصر؛ اسأل في يوم زيارتك.'],
        ['هل يمكن دخول الحرملك أو السلاملك؟', 'لا نؤكد فتح أي من المبنيين من الداخل للجمهور حالياً. الوصف التاريخي أو الصورة لا يثبتان إمكانية الدخول.'],
        ['هل أحتاج تذكرة منفصلة للقصر؟', 'إن كان المبنى مفتوحاً فقد يحتاج تذكرة أو ترتيباً خاصاً. اسأل عند البوابة بدل افتراض أن تذكرة الحدائق تكفي.'],
        ['هل يستحق الزيارة إن كانت القصور مغلقة؟', 'نعم. الحدائق والموقع الساحلي وواجهات القصور هي التجربة الأساسية لمعظم الزوار، وكلها ظاهرة دون دخول المباني.'],
        ['هل يمكنني التنزه حول القصور من الخارج؟', 'نعم — الحدائق وواجهات القصور هي تجربة الزائر المعتادة، وهي ما يراه معظم الناس. أما الداخل فهو الجزء الذي لا نستطيع تأكيده.'],
        ['هل تشمل تذكرة الحدائق مبنى في أي حال؟', 'لا نستطيع تأكيد ذلك. اعتبر تذكرة الحدائق وأي دخول للقصر أمرين منفصلين، واسأل عند البوابة هل المبنى مفتوح.'],
      ],
      related: ['tickets', 'haramlik-palace', 'salamlek-palace', 'gardens'],
    },
  },
  {
    slug: 'location-entrance',
    group: 'visit',
    image: '/images/montaza-palace-coast.jpg',
    imageAlt: 'Al-Haramlik facade and towers behind trees at Montaza',
    en: {
      title: 'Montaza Palace Location & Entrances — Address and Map',
      h1: 'Montaza Palace location and entrances',
      description: 'The address, coordinates and map link for Montaza Palace in eastern Alexandria, and why the map marker is not necessarily the gate you should drive to.',
      lead: 'Montaza Palace is in eastern Alexandria on El-Gaish Road, in the Al Mandarah Bahri area of Montaza 2. The map marker is at 72Q8+99 with coordinates 31.2885, 30.0160 — but a place marker is not the same as a vehicle entrance, so confirm the gate you need.',
      quick: [
        ['Address', 'El-Gaish Rd, Al Mandarah Bahri, Montaza 2, Alexandria'],
        ['Plus code', '72Q8+99 Montaza 2'],
        ['Coordinates', '31.2885, 30.0160'],
        ['Area', 'Eastern Alexandria, on the coast'],
        ['Gates', 'May differ by mode of travel'],
        ['Drop-off', 'Confirm a point with the driver'],
        ['Last checked', '4 November 2026'],
      ],
      sections: [
        {
          h: 'Where Montaza is',
          p: [
            'The estate sits on the eastern edge of Alexandria along the Mediterranean, in the Montaza district. It is a long way from the historic centre around the Bibliotheca Alexandrina and the Citadel of Qaitbay, so plan it as a separate trip rather than a stop on a downtown walk.',
          ],
        },
        {
          h: 'The address and map link',
          p: [
            'The listed address is El-Gaish Rd, Al Mandarah Bahri, Montaza 2, Alexandria Governorate 5527001, Egypt. The Google Maps place listing carries the plus code 72Q8+99 and coordinates around 31.2885, 30.0160.',
            'Use the map link to navigate, then confirm with the site or your driver which gate is receiving visitors. The estate is large enough that the wrong gate can mean a long walk or a drive around the perimeter.',
          ],
        },
        {
          h: 'A marker is not a gate',
          p: [
            'Map pins are placed for identification, not for vehicle access. Visitor entrances, parking entrances and drop-off points can be in different places, and some gates may be closed to the public.',
            'Before you set off, ask which entrance is open, whether cars can enter, and where taxis or ride-hailing cars may drop passengers. This single question prevents most wasted arrivals.',
          ],
        },
        {
          h: 'Finding it by landmark',
          list: [
            'Follow the corniche (El-Gaish Road) north-east from Sidi Bishr',
            'The estate is a large walled and fenced garden area behind the road',
            'The distinctive towers of Al-Haramlik are visible above the trees',
            'Neighbouring areas include Al Mandarah and Maamoura to the east',
          ],
        },
        {
          h: 'The gate a car uses may not be the gate you walk through',
          p: [
            'A place marker on a map identifies a location; it does not identify an entrance, and it certainly does not tell you which entrance suits your mode of travel. At a walled estate like Montaza, the gate a car is waved towards, the gate pedestrians walk through, and the point where a taxi may stop can all be different.',
            'That is the single most useful thing to understand about Montaza’s entrances: do not assume the pin, the listed address and your actual arrival point are the same spot. Ask which entrance is open to you before you set off.',
          ],
        },
        {
          h: 'Vehicle entrances, pedestrian gates and drop-off',
          p: [
            'Different users can be directed to different gates. A car may be sent to a vehicle gate with parking; a coach group may use a separate bay; pedestrians may enter on foot through a gate that cars cannot use.',
            'If you are arriving by taxi or ride-hailing car, agree in advance where the car will stop and whether that point is inside or outside the estate. If you are driving, ask which gate vehicles should use and whether it is open at the hours you plan to arrive.',
          ],
          list: [
            'Pedestrian gate — where walkers enter',
            'Vehicle gate — where cars are directed, if they may enter at all',
            'Drop-off point — where taxis and ride-hailing cars stop',
            'Coach area — where groups may be set down, if arranged',
          ],
        },
        {
          h: 'How to describe the place to a driver',
          p: [
            'Egyptian drivers usually know “Montaza” as a district and an estate, but not necessarily a specific gate. Naming the estate and the general area is normally enough to get you close; the exact gate is the part to settle with the driver.',
            'Useful reference points are the corniche (El-Gaish Road), the neighbouring districts of Al Mandarah and Maamoura, and the estate’s towers visible above the trees. Sharing the map location helps the driver reach the estate, but ask them to take you to a gate that is actually admitting visitors.',
          ],
        },
        {
          h: 'How this page was checked, and when',
          p: [
            'Our position was last checked on 4 November 2026. The address, the plus code 72Q8+99 and the coordinates come from the estate’s Google Maps place listing, which is third-party data and describes a location rather than a visitor entrance.',
            'To confirm a working entrance, ask the estate through its Google Maps listing, consult the State Information Service (sis.gov.eg) or the Ministry of Tourism and Antiquities (egymonuments.gov.eg), or ask the gate staff on the day. The gate staff will know which entrance is open to your mode of travel.',
          ],
        },
      ],
      faq: [
        ['What is the address of Montaza Palace?', 'El-Gaish Rd, Al Mandarah Bahri, Montaza 2, Alexandria Governorate 5527001, Egypt. The map marker uses the plus code 72Q8+99.'],
        ['Is the map pin the entrance?', 'Not necessarily. The pin identifies the estate; entrances, parking and drop-off points may be elsewhere. Confirm the open gate before you travel.'],
        ['Which part of Alexandria is it in?', 'Eastern Alexandria, in the Montaza district on the coast, beyond Sidi Bishr and towards Maamoura.'],
        ['How far is it from the city centre?', 'It is on the far eastern side of the city, well away from the downtown corniche. Allow a substantial drive or taxi ride and check the route at the time you travel.'],
        ['Can a taxi drop me at the main gate?', 'Usually a taxi or ride-hailing car can drop you near the estate, but which gate is admitting visitors — and where cars may stop — should be confirmed. Agree the point with the driver in advance.'],
        ['Will the map route take me to a usable entrance?', 'Not necessarily. Map routing navigates to the estate, not to a specific open gate. Confirm which entrance is in use for your mode of travel before you rely on the route.'],
      ],
      related: ['how-to-get-there', 'parking', 'from-city-centre', 'public-transport'],
    },
    ar: {
      title: 'موقع قصر المنتزه والبوابات — العنوان والخريطة',
      h1: 'موقع قصر المنتزه والبوابات',
      description: 'عنوان قصر المنتزه وإحداثياته ورابط الخريطة في شرق الإسكندرية، ولماذا لا تكون علامة الخريطة بالضرورة هي البوابة التي تقصدها بالسيارة.',
      lead: 'يقع قصر المنتزه في شرق الإسكندرية على طريق الجيش، في منطقة المندرة بحري بالمنتزه 2. علامة الخريطة عند 72Q8+99 بإحداثيات 31.2885 و30.0160، لكن علامة المكان ليست البوابة، فتأكد من البوابة التي تحتاجها.',
      quick: [
        ['العنوان', 'طريق الجيش، المندرة بحري، المنتزه 2، الإسكندرية'],
        ['رمز الموقع', '72Q8+99 المنتزه 2'],
        ['الإحداثيات', '31.2885، 30.0160'],
        ['المنطقة', 'شرق الإسكندرية على الساحل'],
        ['البوابات', 'قد تختلف بحسب وسيلة الوصول'],
        ['نقطة الإنزال', 'اتفق عليها مع السائق'],
        ['آخر مراجعة', '4 نوفمبر 2026'],
      ],
      sections: [
        {
          h: 'أين يقع المنتزه',
          p: [
            'تقع الضَيْعة على الطرف الشرقي من الإسكندرية على البحر المتوسط، في حي المنتزه. وهي بعيدة عن المركز التاريخي حول مكتبة الإسكندرية وقلعة قايتباي، فخطّط لها كرحلة منفصلة لا كمحطة في جولة وسط المدينة.',
          ],
        },
        {
          h: 'العنوان ورابط الخريطة',
          p: [
            'العنوان المدرج هو طريق الجيش، المندرة بحري، المنتزه 2، محافظة الإسكندرية 5527001، مصر. وتحمل قائمة المكان على خرائط Google رمز 72Q8+99 وإحداثيات قريبة من 31.2885 و30.0160.',
            'استخدم رابط الخريطة في التنقل، ثم أكّد مع المنتزه أو السائق أي بوابة تستقبل الزوار. الضَيْعة واسعة لدرجة أن البوابة الخاطئة قد تعني مشياً طويلاً أو دورة حول المحيط.',
          ],
        },
        {
          h: 'العلامة ليست بوابة',
          p: [
            'توضع علامات الخرائط للتعريف لا لدخول السيارات. وقد تكون بوابات الزوار وبوابات المواقف ونقاط الإنزال في أماكن مختلفة، وبعض البوابات قد تكون مغلقة أمام الجمهور.',
            'قبل الانطلاق اسأل أي بوابة مفتوحة، وهل يمكن للسيارات الدخول، وأين يمكن لسيارات الأجرة أو التطبيقات إنزال الركاب. هذا السؤال وحده يمنع معظم الوصولات الضائعة.',
          ],
        },
        {
          h: 'التعرف عليه بمعالم الطريق',
          list: [
            'اتبع الكورنيش (طريق الجيش) شمال شرق من سيدي بشر',
            'الضَيْعة منطقة حدائق مسوّرة واسعة خلف الطريق',
            'تظهر أبراج الحرملك المميزة فوق الأشجار',
            'من المناطق المجاورة المندرة ومعمورة شرقاً',
          ],
        },
        {
          h: 'قد لا تكون بوابة السيارات هي بوابة المشي',
          p: [
            'علامة المكان على الخريطة تحدّد موقعاً، لا مدخلاً، وهي بالتأكيد لا تخبرك أي مدخل يناسب وسيلة وصولك. في ضَيْعة مسوّرة كالمنتزه، قد تختلف بوابة تُوجَّه إليها السيارة، وبوابة يدخل منها الماشون، ونقطة قد تتوقف عندها سيارة الأجرة.',
            'وهذا أهم ما ينبغي فهمه عن بوابات المنتزه: لا تفترض أن العلامة والعنوان المدرج ونقطة وصولك الفعلية هي المكان نفسه. اسأل أي بوابة مفتوحة لك قبل الانطلاق.',
          ],
        },
        {
          h: 'مداخل المركبات وبوابات المشاة والإنزال',
          p: [
            'قد يُوجَّه مستخدمون مختلفون إلى بوابات مختلفة. فقد تُوجَّه السيارة إلى بوابة مركبات بها مواقف، وقد تستخدم مجموعة بحافلة منطقة منفصلة، ويدخل الماشون على الأقدام من بوابة لا تستطيع السيارات استخدامها.',
            'وإن كنت قادماً بسيارة أجرة أو تطبيق نقل، فاتفق مسبقاً على أين ستتوقف السيارة وهل هذه النقطة داخل الضَيْعة أم خارجها. وإن كنت تقود، فاسأل أي بوابة تستخدمها المركبات وهل هي مفتوحة في المواعيد التي تنوي الوصول فيها.',
          ],
          list: [
            'بوابة المشاة — حيث يدخل الماشون',
            'بوابة المركبات — حيث تُوجَّه السيارات، إن كان يُسمح لها بالدخول',
            'نقطة الإنزال — حيث تتوقف سيارات الأجرة والتطبيقات',
            'منطقة الحافلات — حيث تُنزَل المجموعات، إن رُتِّبت',
          ],
        },
        {
          h: 'كيف تصف المكان لسائق',
          p: [
            'يعرف السائقون المصريون «المنتزه» عادة كحي وكضَيْعة، لكن ليس بالضرورة كبوابة محددة. وذكر الضَيْعة والمنطقة العامة يكفي عادة للوصول قريباً؛ أما البوابة بالتحديد فهي ما يجب الاتفاق عليه مع السائق.',
            'من نقاط الاستدلال المفيدة الكورنيش (طريق الجيش)، والأحياء المجاورة المندرة ومعمورة، وأبراج الضَيْعة الظاهرة فوق الأشجار. ومشاركة موقع الخريطة تساعد السائق على الوصول إلى الضَيْعة، لكن اطلب منه أن يوصلك إلى بوابة تستقبل الزوار فعلاً.',
          ],
        },
        {
          h: 'كيف راجعنا هذه الصفحة ومتى',
          p: [
            'آخر مراجعة لموقفنا في 4 نوفمبر 2026. والعنوان ورمز الموقع 72Q8+99 والإحداثيات مأخوذة من قائمة المكان على خرائط Google، وهي بيانات طرف ثالث تصف موقعاً لا مدخل زوار.',
            'ولتأكيد بوابة عاملة، اسأل الضَيْعة عبر قائمتها على خرائط Google، أو راجع الهيئة العامة للاستعلامات (sis.gov.eg) أو وزارة السياحة والآثار (egymonuments.gov.eg)، أو اسأل العاملين عند البوابة في اليوم. فالعاملون يعرفون أي بوابة مفتوحة لوسيلة وصولك.',
          ],
        },
      ],
      faq: [
        ['ما عنوان قصر المنتزه؟', 'طريق الجيش، المندرة بحري، المنتزه 2، محافظة الإسكندرية 5527001، مصر. وتستخدم علامة الخريطة رمز 72Q8+99.'],
        ['هل علامة الخريطة هي البوابة؟', 'ليس بالضرورة. العلامة تعرّف بالضَيْعة، وقد تكون البوابات والمواقف ونقاط الإنزال في مكان آخر. أكّد البوابة المفتوحة قبل التحرك.'],
        ['في أي جزء من الإسكندرية يقع؟', 'في شرق الإسكندرية، حي المنتزه على الساحل، بعد سيدي بشر باتجاه معمورة.'],
        ['كم يبعد عن وسط المدينة؟', 'يقع في أقصى شرق المدينة، بعيداً عن كورنيش وسط البلد. احسب رحلة سيارة أو أجرة طويلة نسبياً وتحقق من الطريق وقت السفر.'],
        ['هل يمكن لسيارة أجرة أن تنزلني عند البوابة الرئيسية؟', 'يمكن لسيارة أجرة أو تطبيق عادةً أن ينزلك قرب الضَيْعة، لكن تجب معرفة أي بوابة تستقبل الزوار وأين يمكن للسيارات التوقف. اتفق على النقطة مع السائق مسبقاً.'],
        ['هل يقودني مسار الخريطة إلى مدخل قابل للاستخدام؟', 'ليس بالضرورة. فالتوجيه بالخريطة يقود إلى الضَيْعة لا إلى بوابة مفتوحة بعينها. تأكد أي مدخل مُتاح لوسيلة وصولك قبل الاعتماد على المسار.'],
      ],
      related: ['how-to-get-there', 'parking', 'from-city-centre', 'public-transport'],
    },
  },
  {
    slug: 'how-to-get-there',
    group: 'visit',
    en: {
      title: 'How to Get to Montaza Palace — Transport Options Compared',
      h1: 'How to get to Montaza Palace',
      description: 'Ways to reach Montaza Palace in eastern Alexandria: car, taxi, ride-hailing and public transport, what we can and cannot confirm, and how to plan the return trip.',
      lead: 'The practical choice is a car, a taxi or a ride-hailing app: Montaza is on the far eastern edge of Alexandria and the last stretch is easier by road. Public transport can work but needs checking on the day, and you must plan the return journey as carefully as the outward one.',
      quick: [
        ['Easiest option', 'Car, taxi or ride-hailing'],
        ['Public transport', 'Possible; confirm route and stop'],
        ['Journey time', 'Depends on traffic; no fixed estimate'],
        ['Return trip', 'Plan it as carefully as the arrival'],
        ['Share with driver', 'The map location, not a street name'],
        ['Traffic', 'Heaviest late afternoon and Friday'],
        ['Last checked', '4 November 2026'],
      ],
      sections: [
        {
          h: 'Choosing a mode',
          p: [
            'The estate is at the eastern end of the city, so anything that starts downtown involves a long ride along the corniche. For most visitors a car, a taxi or a ride-hailing app is the least stressful option, because you can be dropped near the entrance you have confirmed.',
            'Alexandria traffic is heavy, especially in the late afternoon and on Fridays. Build in slack rather than planning to the minute.',
          ],
        },
        {
          h: 'By car, taxi or ride-hailing',
          p: [
            'Share the map location with your driver rather than a street name, then agree the gate or drop-off point. Ask whether the car can enter the grounds or must stop outside, and whether there is a charge for vehicle entry.',
            'Ride-hailing apps are widely used in Alexandria. At busy times, expect a wait for a car and possibly a higher fare.',
          ],
        },
        {
          h: 'By public transport',
          p: [
            'Buses and shared transport connect the eastern districts of Alexandria, and there is a long-standing rail link along the coast towards the eastern suburbs. We have not confirmed which services currently stop closest to the Montaza entrances or their timetables.',
            'If you plan to use public transport, check the current route and the nearest stop with the operator on your travel date, and identify the return service before you set out.',
          ],
        },
        {
          h: 'Planning the return',
          list: [
            'Note the last reasonable departure time for your chosen transport',
            'Save the map location of the entrance where you were dropped off',
            'If using ride-hailing, check that pick-up is possible near that gate',
            'Keep a fallback plan if a service is full or stops early',
          ],
        },
        {
          h: 'Sharing the location with a driver',
          p: [
            'The single most useful habit for reaching Montaza is to share the map location rather than a street name. Street names along the corniche are long and easy to mis-hear, while a map pin takes the driver to the estate directly.',
            'Then agree the specifics: which gate, and whether the car may enter. A driver who knows only “Montaza” may stop at the first gate they reach, which may not be the one admitting visitors that day.',
          ],
        },
        {
          h: 'Traffic and timing',
          p: [
            'Alexandria’s corniche traffic is heavy, particularly in the late afternoon, on Thursday evenings ahead of the weekend, and on Fridays. The eastern approach towards Montaza shares those conditions, so the drive can take considerably longer than a map estimate suggests.',
            'We deliberately give no fixed journey time, because it varies too much with the hour and the day. Check a live route on the day and add a margin rather than cutting it fine — especially if you have a timed booking elsewhere.',
          ],
        },
        {
          h: 'Arriving as a group or with a guide',
          p: [
            'Coach groups and guided tours usually arrange their entrance and their vehicle area in advance through the operator, which removes most of the uncertainty an independent visitor faces. If you are booking a tour, ask the operator which gate and which drop-off point they use.',
            'If you are travelling independently but want the reassurance of a guide, a licensed guide can also confirm current access rules on the day — though we cannot recommend a specific operator or quote a price.',
          ],
        },
        {
          h: 'How this page was checked, and when',
          p: [
            'Our position was last checked on 4 November 2026. The guidance about travel modes and about planning the return is general and does not depend on unverified figures; we have not published journey times or service details precisely because we could not confirm them.',
            'To check current transport, use a live map route, ask the estate through its Google Maps listing, or consult the State Information Service (sis.gov.eg) or the Ministry of Tourism and Antiquities (egymonuments.gov.eg). For public transport specifically, the operator on the day is the only reliable source.',
          ],
        },
      ],
      faq: [
        ['What is the easiest way to reach Montaza Palace?', 'A car, taxi or ride-hailing app, dropped at the entrance you have confirmed. It is a long trip from downtown by any means.'],
        ['Can I get there by public transport?', 'Public transport reaches the eastern districts, but we have not confirmed current routes or the nearest stop. Check with the operator on the day.'],
        ['How long does it take from the city centre?', 'It depends heavily on traffic. We do not give a fixed figure; allow generous time and check a live route on the day.'],
        ['How do I get back afterwards?', 'Plan the return before you arrive: note departure times, save the entrance location, and check whether ride-hailing can pick up nearby.'],
        ['Can I walk to Montaza from downtown?', 'It is a very long way from the centre along the corniche, so walking the whole distance is not practical for most visitors. Use a vehicle for the main leg and walk inside the estate.'],
        ['Is there a tram or train to Montaza?', 'There is a long-standing coastal rail line towards Alexandria’s eastern suburbs, but we have not confirmed which services currently stop closest to the Montaza entrances. Check with the operator on the day.'],
      ],
      related: ['location-entrance', 'parking', 'taxi-ride-hailing', 'public-transport'],
    },
    ar: {
      title: 'كيفية الوصول إلى قصر المنتزه — مقارنة وسائل النقل',
      h1: 'كيفية الوصول إلى قصر المنتزه',
      description: 'طرق الوصول إلى قصر المنتزه في شرق الإسكندرية: السيارة والأجرة وتطبيقات النقل والنقل العام، وما يمكن تأكيده وما لا يمكن، وكيف تخطط لرحلة العودة.',
      lead: 'الخيار العملي هو السيارة أو الأجرة أو تطبيق نقل: يقع المنتزه في أقصى شرق الإسكندرية والجزء الأخير أسهل بالطريق. يمكن استخدام النقل العام لكن يجب التحقق منه في اليوم، وعليك تخطيط العودة بعناية مثل الذهاب.',
      quick: [
        ['الأسهل', 'سيارة أو أجرة أو تطبيق نقل'],
        ['النقل العام', 'ممكن؛ أكّد المسار والمحطة'],
        ['زمن الرحلة', 'يعتمد على المرور؛ لا تقدير ثابت'],
        ['رحلة العودة', 'خطّط لها كما تخطط للذهاب'],
        ['المشاركة مع السائق', 'موقع الخريطة لا اسم الشارع'],
        ['المرور', 'كثيف عصراً ويوم الجمعة'],
        ['آخر مراجعة', '4 نوفمبر 2026'],
      ],
      sections: [
        {
          h: 'اختار الوسيلة',
          p: [
            'تقع الضَيْعة في الطرف الشرقي من المدينة، لذا فأي انطلاق من وسط البلد يعني رحلة طويلة على الكورنيش. لمعظم الزوار تُعد السيارة أو الأجرة أو تطبيق النقل أقل الخيارات إرهاقاً، لأنها تنزلك قرب البوابة التي تحققت منها.',
            'المرور في الإسكندرية كثيف، خصوصاً عصراً ويوم الجمعة. اترك هامشاً زمنياً بدل التخطيط بالدقيقة.',
          ],
        },
        {
          h: 'بالسيارة أو الأجرة أو تطبيق النقل',
          p: [
            'شارك موقع الخريطة مع السائق لا اسم الشارع، ثم اتفق على البوابة أو نقطة الإنزال. اسأل هل يمكن للسيارة الدخول إلى الحدائق أم تتوقف خارجها، وهل هناك رسم لدخول المركبات.',
            'تُستخدم تطبيقات النقل بكثرة في الإسكندرية. في أوقات الذروة توقّع انتظاراً للسيارة وربما أجرة أعلى.',
          ],
        },
        {
          h: 'بالنقل العام',
          p: [
            'تربط الحافلات والنقل المشترك الأحياء الشرقية من الإسكندرية، ويوجد خط سككي قديم على الساحل باتجاه الضواحي الشرقية. لم نتحقق من الخدمات التي تتوقف حالياً قرب بوابات المنتزه ولا من جداولها.',
            'إن كنت تخطط للنقل العام، تحقق من المسار الحالي وأقرب محطة لدى المشغل في يوم رحلتك، وحدّد خدمة العودة قبل الانطلاق.',
          ],
        },
        {
          h: 'التخطيط للعودة',
          list: [
            'دوّن آخر موعد معقول لمغادرة وسيلتك المختارة',
            'احفظ موقع البوابة التي نزلت عندها',
            'إن استخدمت تطبيقات النقل، تحقق من إمكانية الالتقاط قرب تلك البوابة',
            'احتفظ بخطة بديلة إن امتلأت الخدمة أو توقفت مبكراً',
          ],
        },
        {
          h: 'مشاركة الموقع مع السائق',
          p: [
            'أنفع عادة للوصول إلى المنتزه هي مشاركة موقع الخريطة بدل اسم الشارع. فأسماء الشوارع على الكورنيش طويلة ويسهل سماعها خطأً، بينما تنقل علامة الخريطة السائق إلى الضَيْعة مباشرة.',
            'ثم اتفق على التفاصيل: أي بوابة، وهل يمكن للسيارة الدخول. فالسائق الذي يعرف «المنتزه» فقط قد يتوقف عند أول بوابة يصلها، وقد لا تكون هي التي تستقبل الزوار في ذلك اليوم.',
          ],
        },
        {
          h: 'المرور والتوقيت',
          p: [
            'المرور على كورنيش الإسكندرية كثيف، خصوصاً في العصر، وفي أمسيات الخميس قبيل نهاية الأسبوع، ويوم الجمعة. والمدخل الشرقي باتجاه المنتزه يشترك في هذه الأوضاع، لذا قد تستغرق القيادة وقتاً أطول كثيراً مما تظهره الخريطة.',
            'نحن لا نعطي زمن رحلة ثابتاً عن قصد، لأنه يتفاوت كثيراً بحسب الساعة واليوم. تحقق من مسار مباشر في اليوم، وأضف هامشاً بدل الحساب الدقيق — خصوصاً إن كان لديك موعد محدد في مكان آخر.',
          ],
        },
        {
          h: 'الوصول كمموعة أو مع مرشد',
          p: [
            'ترتّب مجموعات الحافلات والجولات المرشدة عادة دخولها ومنطقة مركباتها مسبقاً عبر المشغل، مما يزيل معظم عدم اليقين الذي يواجهه الزائر المستقل. وإن كنت تحجز جولة فاسأل المشغل أي بوابة وأي نقطة إنزال يستخدم.',
            'وإن سافرت مستقلاً لكنك تريد طمأنينة مرشد، فيمكن لمرشد مرخص أيضاً تأكيد قواعد الدخول الحالية في اليوم — وإن كنا لا نستطيع التوصية بمشغل بعينه أو ذكر سعر.',
          ],
        },
        {
          h: 'كيف راجعنا هذه الصفحة ومتى',
          p: [
            'آخر مراجعة لموقفنا في 4 نوفمبر 2026. والإرشادات عن وسائل الوصول وعن تخطيط العودة عامة ولا تعتمد على أرقام غير مؤكدة؛ ولم ننشر أزمنة رحلة أو تفاصيل خدمات تحديداً لأننا لم نتمكن من تأكيدها.',
            'وللتحقق من النقل الحالي، استخدم مسار خريطة مباشراً، أو اسأل الضَيْعة عبر قائمتها على خرائط Google، أو راجع الهيئة العامة للاستعلامات (sis.gov.eg) أو وزارة السياحة والآثار (egymonuments.gov.eg). أما النقل العام خاصةً فالمشغل في اليوم هو المصدر الموثوق الوحيد.',
          ],
        },
      ],
      faq: [
        ['ما أسهل طريقة للوصول إلى قصر المنتزه؟', 'السيارة أو الأجرة أو تطبيق نقل، مع الإنزال عند بوابة تحققت منها. الرحلة طويلة من وسط البلد بأي وسيلة.'],
        ['هل يمكن الوصول بالنقل العام؟', 'يصل النقل العام إلى الأحياء الشرقية، لكننا لم نتحقق من المسارات الحالية أو أقرب محطة. تحقق مع المشغل في اليوم.'],
        ['كم يستغرق من وسط المدينة؟', 'يعتمد كثيراً على المرور. لا نعطي رقماً ثابتاً؛ اترك وقتاً واسعاً وتحقق من الطريق المباشر في اليوم.'],
        ['كيف أعود بعد الزيارة؟', 'خطّط للعودة قبل الوصول: دوّن مواعيد المغادرة، واحفظ موقع البوابة، وتحقق من إمكانية الالتقاط قربها.'],
        ['هل يمكنني السير إلى المنتزه من وسط البلد؟', 'المسافة طويلة جداً من المركز على الكورنيش، فالسير لكل الطريق غير عملي لمعظم الزوار. استخدم مركبة للجزء الرئيسي وامشِ داخل الضَيْعة.'],
        ['هل توجد ترام أو قطار إلى المنتزه؟', 'يوجد خط سككي ساحلي قديم باتجاه الضواحي الشرقية للإسكندرية، لكننا لم نتحقق من الخدمات التي تتوقف حالياً قرب بوابات المنتزه. تحقق مع المشغل في اليوم.'],
      ],
      related: ['location-entrance', 'parking', 'taxi-ride-hailing', 'public-transport'],
    },
  },
  {
    slug: 'parking',
    group: 'visit',
    en: {
      title: 'Montaza Palace Parking — What to Check Before You Drive',
      h1: 'Montaza Palace parking',
      description: 'What to consider about parking at Montaza Palace in Alexandria: whether cars may enter, separate vehicle charges, busy times and drop-off points.',
      lead: 'We have not verified the current parking arrangements at Montaza — whether cars may enter the grounds, where visitors park, or whether there is a vehicle charge. Confirm this with the site before driving, and expect parking to be hardest on Fridays and holidays.',
      quick: [
        ['Parking inside the grounds', 'Not verified'],
        ['Vehicle charge', 'Confirm at the gate'],
        ['Busiest days', 'Fridays and holidays'],
        ['Best alternative', 'Taxi or ride-hailing drop-off'],
        ['Drop-off', 'The simplest alternative'],
        ['Returning', 'Note your gate and your car'],
        ['Last checked', '4 November 2026'],
      ],
      sections: [
        {
          h: 'The honest position',
          p: [
            'Montaza is a large estate with perimeter roads and more than one entrance, and parking arrangements can change with events, security measures and the season. We cannot confirm from our sources where visitors park today or what it costs.',
            'Rather than describe a car park that may no longer be used, this page sets out what to find out before you drive.',
          ],
        },
        {
          h: 'Questions to settle before driving',
          list: [
            'May private cars enter the grounds, or must they stay outside?',
            'Which gate should vehicles use?',
            'Is there a parking charge for cars, minibuses or coaches?',
            'Is parking time-limited or closed before the gardens close?',
            'Is there a separate coach bay for tour groups?',
          ],
        },
        {
          h: 'Timing and traffic',
          p: [
            'Evenings, Fridays and public holidays bring the heaviest demand along the corniche, and the approach roads to eastern Alexandria clog up accordingly. If you are driving, arriving earlier in the day usually means less circling for a space.',
            'The return drive after sunset can be slower than the outward one, so allow for that when you decide when to leave.',
          ],
        },
        {
          h: 'If parking looks difficult',
          p: [
            'Using a taxi or ride-hailing car and being dropped at a confirmed gate avoids the parking question altogether, and is often the simplest option for a short visit. If you travel with a coach group, ask the operator whether a dedicated vehicle area has been arranged.',
          ],
        },
        {
          h: 'Vehicle entry versus roadside parking',
          p: [
            'If cars may enter the estate, parking might be inside the grounds; if they may not, drivers look for space on the approach roads and along the corniche. We have not confirmed which of these applies at Montaza, so this distinction is the first thing to resolve.',
            'Ask the gate whether vehicles are admitted and, if not, whether there is an organised parking area nearby or only roadside space. Do not assume a car park exists simply because the estate is large.',
          ],
        },
        {
          h: 'Drop-off instead of parking',
          p: [
            'For many visitors the simplest solution is not to park at all: arrive by taxi or ride-hailing car, be dropped at a confirmed gate, and arrange the return separately. That avoids both the parking search and the vehicle-charge question.',
            'If you are being dropped off, agree the exact point with the driver, since a drop-off outside one gate can mean a long walk to where you actually want to start.',
          ],
        },
        {
          h: 'Returning to your car',
          p: [
            'If you do drive, note where you parked in relation to the gate you entered, because a large estate can have several similar-looking entrances and it is easy to walk out of the wrong one. Save the map location of the car before you leave it.',
            'If the gardens close before the light goes, plan to return to the car in daylight, and ask staff whether the parking area closes earlier than the gardens themselves.',
          ],
        },
        {
          h: 'How this page was checked, and when',
          p: [
            'Our position was last checked on 4 November 2026. We publish no parking locations, capacities or charges because we could not verify any of them.',
            'To check, ask the estate through its Google Maps listing, consult the State Information Service (sis.gov.eg) or the Ministry of Tourism and Antiquities (egymonuments.gov.eg), or ask the gate staff on the day, who can tell you whether vehicles are being admitted.',
          ],
        },
      ],
      faq: [
        ['Is there parking at Montaza Palace?', 'We have not verified the current arrangements, including whether cars may enter the grounds. Confirm with the site before you drive.'],
        ['Do I have to pay for parking?', 'We cannot confirm a current vehicle charge. Ask at the gate you use.'],
        ['When is parking busiest?', 'Evenings, Fridays and public holidays are the busiest times along this stretch of the corniche.'],
        ['Is there a coach or bus bay?', 'We have not confirmed a dedicated coach area. Tour operators should arrange this in advance with the site.'],
        ['Can I park inside the estate?', 'We have not confirmed whether private cars may enter the grounds or must stay outside. Ask at the gate on the day before you commit to driving.'],
        ['Is there an organised car park nearby?', 'We cannot confirm an official car park, its location or its capacity. Do not assume one exists; ask, or use a drop-off instead.'],
      ],
      related: ['location-entrance', 'how-to-get-there', 'taxi-ride-hailing', 'best-time-to-visit'],
    },
    ar: {
      title: 'مواقف قصر المنتزه — ما يجب التحقق منه قبل القيادة',
      h1: 'مواقف قصر المنتزه',
      description: 'ما يجب مراعاته بشأن المواقف في قصر المنتزه بالإسكندرية: هل تدخل السيارات، رسوم المركبات، أوقات الذروة ونقاط الإنزال.',
      lead: 'لم نتحقق من ترتيبات المواقف الحالية في المنتزه — هل تدخل السيارات إلى الحدائق، وأين يوقف الزوار، وهل هناك رسم للمركبات. أكّد ذلك مع المنتزه قبل القيادة، وتوقّع أن تكون المواقف أصعب يوم الجمعة والأعياد.',
      quick: [
        ['مواقف داخل الحدائق', 'لم يُتحقق'],
        ['رسم المركبات', 'أكّد عند البوابة'],
        ['أكثر الأيام ازدحاماً', 'الجمعة والأعياد'],
        ['البديل الأفضل', 'الإنزال بسيارة أجرة أو تطبيق'],
        ['الإنزال', 'أبسط بديل'],
        ['العودة للمركبة', 'دوّن بوابتك وسيارتك'],
        ['آخر مراجعة', '4 نوفمبر 2026'],
      ],
      sections: [
        {
          h: 'الموقف الصادق',
          p: [
            'المنتزه ضَيْعة واسعة بطُرق محيطة وأكثر من بوابة، ويمكن أن تتغير ترتيبات المواقف مع الفعاليات والإجراءات الأمنية والموسم. لا نستطيع تأكيد أين يوقف الزوار اليوم أو التكلفة.',
            'بدل وصف موقف قد لا يُستخدم، توضح هذه الصفحة ما يجب معرفته قبل القيادة.',
          ],
        },
        {
          h: 'أسئلة تُحسم قبل القيادة',
          list: [
            'هل تدخل السيارات الخاصة إلى الحدائق أم تبقى خارجها؟',
            'أي بوابة تستخدمها المركبات؟',
            'هل هناك رسم لمواقف السيارات أو الحافلات الصغيرة أو الكبيرة؟',
            'هل الوقوف محدد بمدة أو يُغلق قبل إغلاق الحدائق؟',
            'هل توجد منطقة منفصلة لحافلات المجموعات؟',
          ],
        },
        {
          h: 'التوقيت والمرور',
          p: [
            'تجلب الأمسيات وأيام الجمعة والأعياد أعلى طلب على هذا الجزء من الكورنيش، وتزدحم طرق الوصول إلى شرق الإسكندرية تبعاً لذلك. إن كنت تقود، فالوصول في وقت أبكر يعني عادة دورات أقل بحثاً عن مكان.',
            'قد تكون رحلة العودة بعد الغروب أبطأ من الذهاب، فاحسب ذلك عند تحديد وقت المغادرة.',
          ],
        },
        {
          h: 'إن بدت المواقف صعبة',
          p: [
            'استخدام سيارة أجرة أو تطبيق نقل والإنزال عند بوابة مؤكدة يتجاوز مسألة المواقف، وهو غالباً أبسط خيار لزيارة قصيرة. وإن سافرت مع مجموعة بحافلة، اسأل المشغل إن رُتِّبت منطقة مخصصة للمركبات.',
          ],
        },
        {
          h: 'دخول المركبات مقابل الوقوف على الطريق',
          p: [
            'إن كان يُسمح للسيارات بدخول الضَيْعة فقد تكون المواقف داخلها؛ وإن لم يُسمح، فسيبحث السائقون عن مساحة على طرق الوصول وعلى الكورنيش. لم نتحقق من أي الحالتين تنطبق في المنتزه، فهذا التمييز أول ما يجب حسمه.',
            'اسأل عند البوابة هل يُسمح للمركبات، وإن لم يُسمح فهل توجد منطقة وقوف منظّمة قريبة أم مساحة على جانب الطريق فقط. لا تفترض وجود موقف لمجرد أن الضَيْعة واسعة.',
          ],
        },
        {
          h: 'الإنزال بدل الوقوف',
          p: [
            'لمعظم الزوار أبسط حل هو ألا يوقفوا سيارتهم أصلاً: الوصول بسيارة أجرة أو تطبيق نقل، والإنزال عند بوابة مؤكدة، وترتيب العودة على حدة. وهذا يتجاوز البحث عن موقف وسؤال رسم المركبة معاً.',
            'وإن كنت ستنزل من سيارة، فاتفق على النقطة بالتحديد مع السائق، لأن الإنزال خارج بوابة قد يعني مشياً طويلاً إلى حيث تريد أن تبدأ فعلاً.',
          ],
        },
        {
          h: 'العودة إلى سيارتك',
          p: [
            'إن قدت بنفسك، فدوّن أين أوقفت سيارتك بالنسبة للبوابة التي دخلت منها، لأن ضَيْعة واسعة قد تكون لها عدة بوابات متشابهة ويسهل الخروج من البوابة الخطأ. احفظ موقع السيارة على الخريطة قبل مغادرتها.',
            'وإن أُغلقت الحدائق قبل حلول الظلام، فخطّط للعودة إلى السيارة في ضوء النهار، واسأل العاملين هل تُغلق منطقة الوقوف أبكر من الحدائق نفسها.',
          ],
        },
        {
          h: 'كيف راجعنا هذه الصفحة ومتى',
          p: [
            'آخر مراجعة لموقفنا في 4 نوفمبر 2026. ولا ننشر مواقع مواقف ولا سعات ولا رسوماً لأننا لم نتحقق من أي منها.',
            'وللتحقق اسأل الضَيْعة عبر قائمتها على خرائط Google، أو راجع الهيئة العامة للاستعلامات (sis.gov.eg) أو وزارة السياحة والآثار (egymonuments.gov.eg)، أو اسأل العاملين عند البوابة في اليوم، وهم من يخبرك هل تُستقبل المركبات.',
          ],
        },
      ],
      faq: [
        ['هل توجد مواقف في قصر المنتزه؟', 'لم نتحقق من الترتيبات الحالية، بما فيها إمكانية دخول السيارات. أكّد مع المنتزه قبل القيادة.'],
        ['هل يجب الدفع مقابل المواقف؟', 'لا نستطيع تأكيد رسم حالي للمركبات. اسأل عند البوابة التي تستخدمها.'],
        ['متى تكون المواقف أكثر ازدحاماً؟', 'الأمسيات وأيام الجمعة والأعياد هي الأكثر ازدحاماً على هذا الجزء من الكورنيش.'],
        ['هل توجد منطقة للحافلات؟', 'لم نتحقق من منطقة مخصصة للحافلات. على مشغلي الجولات ترتيب ذلك مسبقاً مع المنتزه.'],
        ['هل يمكنني الوقوف داخل الضَيْعة؟', 'لم نتحقق هل يسمح للسيارات الخاصة بدخول الحدائق أم تبقى خارجها. اسأل عند البوابة في اليوم قبل أن تقرر القيادة.'],
        ['هل يوجد موقف منظّم قريب؟', 'لا نستطيع تأكيد وجود موقف رسمي ولا موقعه ولا سعته. لا تفترض وجوده؛ اسأل، أو استخدم الإنزال بدلاً منه.'],
      ],
      related: ['location-entrance', 'how-to-get-there', 'taxi-ride-hailing', 'best-time-to-visit'],
    },
  },
  {
    slug: 'gardens',
    group: 'visit',
    image: '/images/montaza-palace-garden.jpg',
    imageAlt: 'Succulent plants and trees in Montaza gardens with the sea behind',
    en: {
      title: 'Montaza Gardens Visitor Guide — Walking the Royal Estate',
      h1: 'Montaza Palace gardens visitor guide',
      description: 'A guide to the Montaza Gardens in Alexandria: what the garden and coastal estate is like, how to plan a walk, what to bring, and what is not confirmed.',
      lead: 'The gardens are the main reason most visitors come: a large, shaded coastal estate on the Mediterranean with royal-era planting, paths and sea views. Plan a walk, not a checklist — the estate is far too big to cover in a quick stop.',
      quick: [
        ['Type', 'Coastal royal garden estate'],
        ['Best for', 'Walking, shade, sea views'],
        ['Distances', 'Large; wear comfortable shoes'],
        ['Facilities', 'Confirm what is open on the day'],
        ['Parts of the estate', 'Garden, palaces, coastline'],
        ['Water', 'Bring your own'],
        ['Last checked', '4 November 2026'],
      ],
      sections: [
        {
          h: 'What the gardens are',
          p: [
            'The Montaza estate is a former royal garden laid out along the Mediterranean coast in eastern Alexandria. It combines broad tree-lined avenues, open lawns, palms and flowering shrubs, with the former palace buildings standing among the greenery.',
            'It is a place for heat-avoiding walks, sea air and views. The planting and the scale are the attraction; there is not a single must-see object you have to reach.',
          ],
        },
        {
          h: 'Planning a walk',
          p: [
            'Enter from a confirmed gate, pick one area rather than trying to cross the whole estate, and choose a return point before you get tired. Paths, shade and sea breezes make the coastal side more comfortable in the heat.',
            'Give yourself more time than you think you need. The estate is much larger than it looks on a map, and walking in the middle of the day is hot.',
          ],
        },
        {
          h: 'What to bring',
          list: [
            'Water; do not rely on kiosks being open',
            'Sunscreen and a hat, even on hazy days',
            'Comfortable, closed shoes for walking',
            'Cash in case of entrance or facility charges',
            'A charged phone with the map link saved offline',
          ],
        },
        {
          h: 'What is not confirmed',
          p: [
            'We cannot confirm which cafes, kiosks, toilets or play areas are currently operating inside the gardens, nor their prices. Treat any such facility as something to check when you arrive rather than something to plan around.',
          ],
        },
        {
          h: 'The different parts of the estate',
          p: [
            'It helps to think of Montaza as three things rather than one. There is the garden proper — the lawns, avenues and planting that visitors walk. There is the palace group, principally Al-Haramlik and Salamlek, whose buildings stand within the garden. And there is the coastline and any beach or coastal facilities, which are a separate matter again.',
            'The garden is the part you can rely on walking; the buildings and the beach are the parts whose access and charges need confirming.',
          ],
        },
        {
          h: 'The coastal side and the inland avenues',
          p: [
            'The estate runs along the Mediterranean, so its character changes with direction. The seaside side tends to be breezier and more open to the sky; the inland avenues are more deeply shaded by trees and feel calmer in the heat of the day.',
            'Plan your route to take one character on the way out and the other on the way back, rather than crossing the whole estate in a single line. That gives you shade and sea air in turn, and keeps the walk shorter.',
          ],
        },
        {
          h: 'Facilities and what to expect',
          p: [
            'Do not build your day around a specific cafe, kiosk, toilet or play area: we have not confirmed which facilities are open, their hours or their prices. Carry what you need — especially water — and treat any facility you find as a bonus rather than a plan.',
            'If a particular facility is essential to your visit, ask about it before you come, or at the gate when you arrive.',
          ],
        },
        {
          h: 'How this page was checked, and when',
          p: [
            'Our position was last checked on 4 November 2026. The description of the gardens is based on the estate’s character as a coastal royal garden; we have not stated plant species, facility names or opening details because we could not verify them.',
            'To check facilities or access, ask the estate through its Google Maps listing, consult the State Information Service (sis.gov.eg) or the Ministry of Tourism and Antiquities (egymonuments.gov.eg), or ask the staff on the day.',
          ],
        },
      ],
      faq: [
        ['Are the gardens worth visiting on their own?', 'Yes. The gardens and coastline are the principal experience for most visitors, whether or not a palace building is open.'],
        ['How long should I spend in the gardens?', 'That depends on how far you walk and how much you rest. Most people allow at least an hour or two; the estate is large.'],
        ['Is there shade?', 'There are tree-lined avenues and planting, but large parts are open to the sun. Plan around the middle of the day in hot weather.'],
        ['Are there cafes and toilets in the gardens?', 'We have not confirmed which facilities are currently open. Check on arrival.'],
        ['How big are the gardens?', 'They cover a large coastal estate, much bigger than the map suggests. We do not quote a precise area; plan a section of it rather than trying to cover everything.'],
        ['Is it a good place for a picnic?', 'Picnics on the lawns are a normal family activity where they are not prohibited, but we have not confirmed the current rules. Bring water and take your litter away.'],
      ],
      related: ['one-hour-walk', 'photography-guide', 'with-kids', 'nearby-beaches'],
    },
    ar: {
      title: 'دليل حدائق المنتزه — التنزه في الضَيْعة الملكية',
      h1: 'دليل حدائق قصر المنتزه',
      description: 'دليل حدائق المنتزه بالإسكندرية: كيف تبدو الحديقة والضَيْعة الساحلية، وكيف تخطط للنزهة، وما تحمله معك، وما لم يُتحقق منه.',
      lead: 'الحدائق هي السبب الرئيسي لزيارة معظم الناس: ضَيْعة ساحلية واسعة ومظللة على المتوسط بنباتات ملكية وممرات وإطلالات بحرية. خطّط لنزهة لا لقائمة مهام — فالضَيْعة أكبر بكثير من زيارة سريعة.',
      quick: [
        ['النوع', 'حديقة ملكية ساحلية واسعة'],
        ['الأفضل لـ', 'المشي والظل وإطلالات البحر'],
        ['المسافات', 'واسعة؛ ارتدِ حذاءً مريحاً'],
        ['المرافق', 'أكّد المفتوح منها في اليوم'],
        ['أجزاء الضَيْعة', 'الحديقة والقصور والساحل'],
        ['الماء', 'أحضره معك'],
        ['آخر مراجعة', '4 نوفمبر 2026'],
      ],
      sections: [
        {
          h: 'ما هي الحدائق',
          p: [
            'ضَيْعة المنتزه حديقة ملكية سابقة ممتدة على ساحل المتوسط في شرق الإسكندرية. تجمع بين طرق واسعة مصفوفة بالأشجار ومروج مفتوحة ونخيل وشجيرات مزهرة، مع مباني القصور السابقة بين الخضرة.',
            'مكان للمشي المتجنب للحرارة وهواء البحر والإطلالات. التشجير والاتساع هما الجاذب؛ لا يوجد عنصر واحد يجب الوصول إليه.',
          ],
        },
        {
          h: 'تخطيط النزهة',
          p: [
            'ادخل من بوابة مؤكدة، واختر منطقة واحدة بدل محاولة عبور الضَيْعة كلها، وحدّد نقطة عودة قبل التعب. الممرات والظل ونسيم البحر تجعل الجانب الساحلي أكثر راحة في الحرارة.',
            'امنح نفسك وقتاً أكثر مما تظن. الضَيْعة أكبر بكثير مما تبدو على الخريطة، والمشي في منتصف النهار حار.',
          ],
        },
        {
          h: 'ما تحمله معك',
          list: [
            'ماء؛ لا تعتمد على فتح الأكشاك',
            'واقي شمس وقبعة، حتى في الأيام الغائمة',
            'حذاء مريح مغلق للمشي',
            'نقود احتياطاً لرسوم الدخول أو المرافق',
            'هاتف مشحون مع رابط الخريطة محفوظاً دون اتصال',
          ],
        },
        {
          h: 'ما لم يُتحقق منه',
          p: [
            'لا نستطيع تأكيد أي المقاهي أو الأكشاك أو دورات المياه أو مناطق اللعب تعمل حالياً داخل الحدائق، ولا أسعارها. اعتبر أي مرفق كذلك أمراً تتحقق منه عند الوصول لا تخطط عليه.',
          ],
        },
        {
          h: 'أجزاء الضَيْعة المختلفة',
          p: [
            'يفيد أن تتصور المنتزه ثلاثة أشياء لا شيئاً واحداً. هناك الحديقة نفسها — المروج والجادات والتشجير التي يمشي فيها الزوار. وهناك مجموعة القصر، وأبرزها الحرملك والسلاملك، التي تقف مبانيها داخل الحديقة. وهناك الساحل وأي منشآت شاطئية أو ساحلية، وهو أمر منفصل آخر.',
            'الحديقة هي الجزء الذي يمكنك الاعتماد على التنزه فيه؛ أما المباني والشاطئ فهي الأجزاء التي تحتاج إتاحتها ورسومها إلى تأكيد.',
          ],
        },
        {
          h: 'الجانب الساحلي والجادات الداخلية',
          p: [
            'تمتد الضَيْعة على البحر المتوسط، فيتغير طابعها بحسب الاتجاه. الجانب البحري أنسم وأكثر انفتاحاً على السماء؛ والجادات الداخلية أكثر ظلاً بالأشجار وتبدو أهدأ في حرارة النهار.',
            'خطّط مسارك ليأخذك بأحد الطابعين في الذهاب والآخر في العودة، بدل عبور الضَيْعة كلها في خط واحد. فذاك يمنحك الظل وهواء البحر بالتناوب، ويبقي المشي أقصر.',
          ],
        },
        {
          h: 'المرافق وما تتوقعه',
          p: [
            'لا تبنِ يومك على مقهى أو كشك أو دورة مياه أو منطقة لعب بعينها: فلم نتحقق من أي المرافق مفتوحة ولا مواعيدها ولا أسعارها. احمل ما تحتاجه — خصوصاً الماء — واعتبر أي مرفق تجده مكسباً لا خطة.',
            'وإن كان مرفق معيّن ضرورياً لزيارتك، فاسأل عنه قبل القدوم، أو عند البوابة حين تصل.',
          ],
        },
        {
          h: 'كيف راجعنا هذه الصفحة ومتى',
          p: [
            'آخر مراجعة لموقفنا في 4 نوفمبر 2026. ووصف الحدائق مبني على طابع الضَيْعة كحديقة ملكية ساحلية؛ ولم نذكر أنواع النباتات ولا أسماء المرافق ولا تفاصيل الفتح لأننا لم نتمكن من تأكيدها.',
            'وللتحقق من المرافق أو الإتاحة، اسأل الضَيْعة عبر قائمتها على خرائط Google، أو راجع الهيئة العامة للاستعلامات (sis.gov.eg) أو وزارة السياحة والآثار (egymonuments.gov.eg)، أو اسأل العاملين في اليوم.',
          ],
        },
      ],
      faq: [
        ['هل تستحق الحدائق الزيارة بمفردها؟', 'نعم. الحدائق والساحل هما التجربة الأساسية لمعظم الزوار، سواء كان مبنى القصر مفتوحاً أم لا.'],
        ['كم أقضي في الحدائق؟', 'يعتمد على مدى مشيك ومدى راحتك. يعطي معظم الناس ساعة إلى ساعتين على الأقل؛ فالضَيْعة واسعة.'],
        ['هل هناك ظل؟', 'توجد طرق مصفوفة بالأشجار وتشجير، لكن أجزاء كبيرة مفتوحة للشمس. خطّط مع تجنب منتصف النهار في الحرارة.'],
        ['هل توجد مقاهٍ ودورات مياه داخل الحدائق؟', 'لم نتحقق من المرافق المفتوحة حالياً. تحقق عند الوصول.'],
        ['ما حجم الحدائق؟', 'تشغل ضَيْعة ساحلية واسعة، أكبر بكثير مما توحي الخريطة. لا نذكر مساحة دقيقة؛ خطّط لجزء منها بدل محاولة تغطيتها كلها.'],
        ['هل هي مكان مناسب للنزهة؟', 'النزهات على المروج نشاط عائلي معتاد حيث لا تكون ممنوعة، لكننا لم نتحقق من القواعد الحالية. أحضر الماء وخذ نفاياتك.'],
      ],
      related: ['one-hour-walk', 'photography-guide', 'with-kids', 'nearby-beaches'],
    },
  },
  {
    slug: 'best-time-to-visit',
    group: 'visit',
    en: {
      title: 'Best Time to Visit Montaza Palace — Season, Hour and Crowds',
      h1: 'Best time to visit Montaza Palace',
      description: 'When to visit Montaza Palace in Alexandria: which months are comfortable, when the gardens are busiest, and how to plan around heat and crowds.',
      lead: 'For comfort, choose a weekday morning and avoid the middle of a summer day. Alexandria is mild most of the year, but the estate is largely open to the sun, and Fridays and holidays fill the gardens and the roads around them.',
      quick: [
        ['Best comfort', 'Weekday morning, shoulder season'],
        ['Busiest', 'Friday afternoons and holidays'],
        ['Hottest', 'Mid-summer afternoons'],
        ['Coolest', 'Winter months; bring a layer'],
        ['Quietest day', 'Midweek, early'],
        ['Calendar note', 'Ramadan and Eid dates shift each year'],
        ['Last checked', '4 November 2026'],
      ],
      sections: [
        {
          h: 'Season',
          p: [
            'Alexandria’s coastal position keeps it cooler and breezier than inland Egypt, which is why it has long been a summer retreat. Spring and autumn give the most comfortable walking, with warm days and softer light.',
            'Midsummer is hot and humid and the gardens fill up, especially with families in the evenings. Winter is mild and often empty, but the coast can be windy and cooler than people expect; bring a layer.',
          ],
        },
        {
          h: 'Time of day',
          p: [
            'Early morning gives the calmest, coolest conditions and the best light for the gardens and the sea. Late afternoon to sunset is also attractive, with softer light and cooler air, but it is also the most crowded part of the day.',
            'The middle of a summer day is the least comfortable time for walking, with little shelter on the open stretches.',
          ],
        },
        {
          h: 'Crowds and holidays',
          p: [
            'Fridays and public holidays are the busiest. Ramadan evenings and Eid holidays are particularly lively, and school breaks bring families throughout the day. If you want quiet paths for photography or a relaxed walk, these are the times to avoid.',
            'The roads and parking around the estate are affected too, so a crowded garden day also means a slower arrival and departure.',
          ],
        },
        {
          h: 'Putting it together',
          list: [
            'Calmest: weekday, early morning, spring or autumn',
            'Best light: early morning or late afternoon',
            'Most lively: Friday afternoon, Eid and holidays',
            'Least comfortable: midsummer midday',
          ],
        },
        {
          h: 'Weather through the year',
          p: [
            'Alexandria’s climate is Mediterranean: hot, humid summers and mild, sometimes wet winters, moderated by the sea. Spring and autumn are the sweet spots for walking, with warm days and softer light.',
            'We give no month-by-month temperature figures, because averages hide the day you will actually get. Check a forecast for Alexandria in the days before you travel, and plan the hour of your visit around it.',
          ],
        },
        {
          h: 'The religious and public calendar',
          p: [
            'Fridays, public holidays, Ramadan evenings and the Eid holidays change both the crowds and the mood of the gardens. Ramadan in particular shifts daily rhythms, with more activity later in the day, while Eid brings families out in numbers.',
            'The Islamic calendar moves relative to the Gregorian year, so the exact dates of Ramadan and the Eids change each year. Look up the dates for your own travel year rather than relying on a fixed date.',
          ],
        },
        {
          h: 'Choosing a day to avoid road pressure',
          p: [
            'Crowds in the gardens and congestion on the corniche tend to go together, so the quietest garden day is usually also the easiest day for arriving and leaving. A midweek morning avoids both.',
            'If your only free day is a Friday or a holiday, plan to arrive early and to leave before the evening peak, rather than in the middle of it.',
          ],
        },
        {
          h: 'How this page was checked, and when',
          p: [
            'Our position was last checked on 4 November 2026. The seasonal guidance here is general and deliberately avoids fixed temperature or crowd figures that we cannot guarantee.',
            'To check conditions, use a weather forecast for Alexandria close to your travel date, ask the estate through its Google Maps listing about holiday arrangements, or consult the State Information Service (sis.gov.eg) or the Ministry of Tourism and Antiquities (egymonuments.gov.eg).',
          ],
        },
      ],
      faq: [
        ['What is the best month to visit Montaza Palace?', 'Spring and autumn are usually the most comfortable for walking, with warm days and lighter crowds than midsummer.'],
        ['What is the best time of day?', 'Early morning is coolest and calmest; late afternoon has good light but more visitors. Avoid midsummer midday for walking.'],
        ['When is it most crowded?', 'Fridays, public holidays, Eid and school breaks, especially in the evenings and in summer.'],
        ['Is winter a good time to visit?', 'Yes — it is mild and often quiet, though the coast can be windy and cooler, so bring a layer.'],
        ['Should I avoid Fridays?', 'Fridays are the busiest family day. If you want quiet paths, choose a weekday; if Friday is your only option, arrive early and expect crowds.'],
        ['Does Ramadan affect a visit?', 'Ramadan changes the daily rhythm, with more activity later in the day, and the gardens can be lively in the evenings. We cannot confirm the specific Ramadan arrangements at Montaza.'],
      ],
      related: ['opening-hours', 'gardens', 'sunset-guide', 'visitor-rules'],
    },
    ar: {
      title: 'أفضل وقت لزيارة قصر المنتزه — الموسم والساعة والازدحام',
      h1: 'أفضل وقت لزيارة قصر المنتزه',
      description: 'متى تزور قصر المنتزه في الإسكندرية: أي الشهور ألطف، ومتى تزدحم الحدائق، وكيف تخطط حول الحرارة والازدحام.',
      lead: 'من أجل الراحة، اختر صباح يوم عمل وتجنب منتصف نهار الصيف. الإسكندرية معتدلة معظم السنة، لكن الضَيْعة مفتوحة للشمس في معظمها، وأيام الجمعة والأعياد تملأ الحدائق والطرق حولها.',
      quick: [
        ['الراحة القصوى', 'صباح يوم عمل في موسم وسيط'],
        ['الأكثر ازدحاماً', 'عصر الجمعة والأعياد'],
        ['الأشد حرارة', 'عصر منتصف الصيف'],
        ['الأبرد', 'شهور الشتاء؛ أحضر طبقة دافئة'],
        ['أهدأ يوم', 'منتصف الأسبوع مبكراً'],
        ['ملاحظة التقويم', 'تواريخ رمضان والعيدين تتغير كل عام'],
        ['آخر مراجعة', '4 نوفمبر 2026'],
      ],
      sections: [
        {
          h: 'الموسم',
          p: [
            'موقع الإسكندرية الساحلي يجعلها أبرد وأنسم من داخل مصر، ولهذا كانت مصيفاً صيفياً منذ زمن. الربيع والخريف يمنحان أمتع مشي، بأيام دافئة وإضاءة ألطف.',
            'منتصف الصيف حار ورطب وتمتلئ الحدائق، خصوصاً بالعائلات مساءً. الشتاء معتدل وغالباً خالٍ، لكن الساحل قد يكون عاصفاً وأبرد مما يتوقع الناس؛ أحضر طبقة دافئة.',
          ],
        },
        {
          h: 'وقت اليوم',
          p: [
            'الصباح الباكر يمنح أهدأ وأبرد ظروف وأفضل إضاءة للحدائق والبحر. كما أن العصر حتى الغروب جاذب، بإضاءة ألطف وهواء أبرد، لكنه أيضاً أكثر أوقات اليوم ازدحاماً.',
            'منتصف نهار الصيف أقل الأوقات راحة للمشي، إذ لا يجد المشي ظلاً في المساحات المفتوحة.',
          ],
        },
        {
          h: 'الازدحام والأعياد',
          p: [
            'أيام الجمعة والأعياد الرسمية هي الأكثر ازدحاماً. وأمسيات رمضان وعيد الفطر أكثر حيوية، والعطلات المدرسية تجلب العائلات طوال اليوم. إن أردت ممرات هادئة للتصوير أو نزهة هادئة فتجنب هذه الأوقات.',
            'تتأثر الطرق والمواقف حول الضَيْعة كذلك، فيوم الحدائق المزدحم يعني وصولاً ومغادرة أبطأ.',
          ],
        },
        {
          h: 'الخلاصة',
          list: [
            'الأهدأ: يوم عمل، صباحاً، ربيعاً أو خريفاً',
            'أفضل إضاءة: الصباح الباكر أو العصر المتأخر',
            'الأكثر حيوية: عصر الجمعة والعيد والأعياد',
            'الأقل راحة: منتصف نهار الصيف',
          ],
        },
        {
          h: 'الطقس على مدار العام',
          p: [
            'مناخ الإسكندرية متوسطي: صيف حار رطب وشتاء معتدل قد يكون مطيراً، مع تلطيف من البحر. الربيع والخريف أفضل أوقات المشي، بأيام دافئة وإضاءة ألطف.',
            'لا نعطي أرقام حرارة شهراً بشهر، لأن المتوسطات تخفي اليوم الذي ستحصل عليه فعلاً. تحقق من توقعات الطقس للإسكندرية في الأيام السابقة للسفر، وخطّط ساعة زيارتك على أساسها.',
          ],
        },
        {
          h: 'التقويم الديني والعام',
          p: [
            'أيام الجمعة والأعياد الرسمية وأمسيات رمضان وأعياد الفطر والأضحى تغيّر ازدحام الحدائق وروحها معاً. ورمضان خاصةً يغيّر الإيقاع اليومي، فيزيد النشاط متأخراً، بينما يُخرج العيد العائلات بأعداد كبيرة.',
            'يتحرك التقويم الهجري بالنسبة للسنة الميلادية، فتتغير تواريخ رمضان والعيدين كل عام. ابحث عن تواريخ سنة سفرك لا عن تاريخ ثابت.',
          ],
        },
        {
          h: 'اختيار يوم لتجنب ضغط الطرق',
          p: [
            'الازدحام في الحدائق واختناق الكورنيش يرتبطان عادةً، فأهدأ يوم في الحدائق هو غالباً أسهل يوم للوصول والمغادرة. وصباح منتصف الأسبوع يتجنب الاثنين.',
            'وإن كان يومك المتاح الوحيد جمعة أو عيداً، فخطّط للوصول مبكراً وللمغادرة قبل ذروة المساء، لا في وسطها.',
          ],
        },
        {
          h: 'كيف راجعنا هذه الصفحة ومتى',
          p: [
            'آخر مراجعة لموقفنا في 4 نوفمبر 2026. والإرشاد الموسمي هنا عام ويتجنب عن قصد أرقام حرارة أو ازدحام ثابتة لا نستطيع ضمانها.',
            'وللتحقق من الأحوال، استخدم توقعات الطقس للإسكندرية قرب تاريخ سفرك، واسأل الضَيْعة عبر قائمتها على خرائط Google عن ترتيبات الأعياد، أو راجع الهيئة العامة للاستعلامات (sis.gov.eg) أو وزارة السياحة والآثار (egymonuments.gov.eg).',
          ],
        },
      ],
      faq: [
        ['ما أفضل شهر لزيارة قصر المنتزه؟', 'الربيع والخريف عادة الأكثر راحة للمشي، بأيام دافئة وزحام أخف من منتصف الصيف.'],
        ['ما أفضل وقت في اليوم؟', 'الصباح الباكر أبرد وأهدأ؛ والعصر المتأخر إضاءته جيدة لكن زواره أكثر. تجنب منتصف نهار الصيف للمشي.'],
        ['متى يكون أكثر ازدحاماً؟', 'أيام الجمعة والأعياد الرسمية وعيد الفطر والعطلات المدرسية، خصوصاً مساءً وفي الصيف.'],
        ['هل الشتاء وقت جيد للزيارة؟', 'نعم — معتدل وغالباً هادئ، لكن الساحل قد يكون عاصفاً وأبرد، فأحضر طبقة دافئة.'],
        ['هل أتجنب أيام الجمعة؟', 'الجمعة أكثر أيام العائلات ازدحاماً. إن أردت ممرات هادئة فاختر يوم عمل؛ وإن كان الجمعة خيارك الوحيد فوصل مبكراً وتوقّع الزحام.'],
        ['هل يؤثر رمضان على الزيارة؟', 'يغيّر رمضان الإيقاع اليومي، فيزيد النشاط متأخراً، وقد تكون الحدائق حيوية في المساء. ولا نستطيع تأكيد ترتيبات رمضان المحددة في المنتزه.'],
      ],
      related: ['opening-hours', 'gardens', 'sunset-guide', 'visitor-rules'],
    },
  },
  {
    slug: 'visitor-rules',
    group: 'visit',
    image: '/images/montaza-palace-coast.jpg',
    imageAlt: 'Al-Haramlik facade and towers behind trees at Montaza',
    en: {
      title: 'Montaza Palace Visitor Rules — Photography, Dress and Behaviour',
      h1: 'Montaza Palace visitor rules',
      description: 'Practical guidance on behaviour at Montaza Palace in Alexandria: photography, dress, litter, water safety and respecting a working royal estate.',
      lead: 'Montaza is a public garden on a former royal estate, and a small number of sensible rules apply: dress modestly, take your litter, do not swim where it is not permitted, and ask before photographing people or restricted areas.',
      quick: [
        ['Dress', 'Modest, comfortable'],
        ['Litter', 'Take it with you'],
        ['Swimming', 'Only where permitted'],
        ['Photography', 'Check restricted areas'],
        ['Security', 'Checks possible; carry ID'],
        ['Children', 'Supervise near water and roads'],
        ['Last checked', '4 November 2026'],
      ],
      sections: [
        {
          h: 'Dress and behaviour',
          p: [
            'Alexandria is a conservative city and Montaza is a family destination. Comfortable, modest clothing works best: covered shoulders and knees are a safe baseline, and are also practical for sun and mosquitoes.',
            'Public displays of affection, loud music from speakers, and picnicking in planted beds can attract objections. Picnics on lawns, where allowed, are a normal family activity.',
          ],
        },
        {
          h: 'Photography',
          p: [
            'Photographing the gardens, the sea and the palace facades from public paths is normally fine and is one of the reasons people come. Two cautions apply: avoid photographing people, especially women and children, without permission, and do not photograph security or restricted buildings.',
            'If any palace interior is open during your visit, ask whether photography is allowed inside before you take out a camera; rules vary between sites and change with exhibitions.',
          ],
        },
        {
          h: 'Water and beaches',
          p: [
            'The sea is the backdrop, not automatically a swimming beach. Do not assume that any stretch of coast is safe or permitted for swimming, and follow any signs or instructions from staff. Rocky Mediterranean shoreline can have strong currents.',
          ],
        },
        {
          h: 'Respecting a working site',
          list: [
            'Do not climb on planted beds, monuments or the palace structure',
            'Keep noise down in quiet areas',
            'Follow staff instructions, especially around closed areas',
            'Keep valuables close in crowds',
            'Leave nothing behind but footprints',
          ],
        },
        {
          h: 'Security and bag checks',
          p: [
            'Large public sites in Egypt commonly have some form of security presence, and entry checks for bags are not unusual, especially on busy days and around holidays. We cannot confirm the current security procedure at Montaza.',
            'Cooperate with any check, keep your ID with you, and avoid photographing security staff or installations. If you are asked not to bring something in, treat it as a rule of the site rather than a negotiation.',
          ],
        },
        {
          h: 'Children, families and personal safety',
          p: [
            'Montaza is a family destination, and children are everywhere on Fridays and holidays. Keep an eye on young children near the water and near the estate’s roads, and agree a meeting point in case you are separated in a crowd.',
            'Keep valuables close and avoid displaying large amounts of cash. These are ordinary precautions for any busy public place rather than a comment on Montaza specifically.',
          ],
        },
        {
          h: 'Litter, planting and the coast',
          p: [
            'Take your litter with you — bins may or may not be present and emptied, and we cannot rely on either. Keep off planted beds and do not pick flowers or plants.',
            'On the coast, do not disturb wildlife or climb on rocks or structures, and remember that the sea here is not a supervised swimming area unless a facility clearly says otherwise.',
          ],
        },
        {
          h: 'How this page was checked, and when',
          p: [
            'Our position was last checked on 4 November 2026. The rules here are general good practice for an Egyptian public garden, and we have not invented site-specific prohibitions or permissions that we cannot verify.',
            'To check a specific rule — photography, picnics, swimming or dress — ask the estate through its Google Maps listing, consult the State Information Service (sis.gov.eg) or the Ministry of Tourism and Antiquities (egymonuments.gov.eg), or ask the staff at the gate.',
          ],
        },
      ],
      faq: [
        ['Can I take photographs at Montaza Palace?', 'Photographing the gardens and palace facades from public paths is normally fine. Ask before photographing people, and do not photograph restricted or security areas.'],
        ['What should I wear?', 'Comfortable, modest clothing with covered shoulders and knees is the safest and most practical choice.'],
        ['Can I swim at Montaza?', 'Do not assume so. Swimming is only acceptable where it is explicitly permitted, and the Mediterranean shoreline here can be rough.'],
        ['Can I have a picnic?', 'Picnicking on lawns is a normal family activity where it is not prohibited. Keep food off planted beds and take your litter away.'],
        ['Are there security checks at the entrance?', 'Large Egyptian sites often have a security presence and may check bags, but we cannot confirm the current procedure at Montaza. Cooperate with any check and carry your ID.'],
        ['Is Montaza safe for children?', 'It is a popular family destination. Supervise children near the water and the roads, and agree a meeting point in case you are separated in a crowd.'],
      ],
      related: ['gardens', 'photography-guide', 'nearby-beaches', 'tickets'],
    },
    ar: {
      title: 'قواعد زيارة قصر المنتزه — التصوير والزيّ والسلوك',
      h1: 'قواعد زيارة قصر المنتزه',
      description: 'إرشادات عملية للسلوك في قصر المنتزه بالإسكندرية: التصوير، الزيّ، النفايات، السلامة المائية، واحترام ضَيْعة ملكية سابقة.',
      lead: 'المنتزه حديقة عامة في ضَيْعة ملكية سابقة، وتنطبق قواعد قليلة معقولة: البس باحتشام، وخذ نفاياتك معك، ولا تسبح حيث لا يُسمح، واسأل قبل تصوير الناس أو المناطق المقيّدة.',
      quick: [
        ['الزيّ', 'محتشم ومريح'],
        ['النفايات', 'خذها معك'],
        ['السباحة', 'فقط حيث يُسمح'],
        ['التصوير', 'تحقق من المناطق المقيّدة'],
        ['الأمن', 'تفتيش محتمل؛ احمل هويتك'],
        ['الأطفال', 'راقبهم قرب الماء والطرق'],
        ['آخر مراجعة', '4 نوفمبر 2026'],
      ],
      sections: [
        {
          h: 'الزيّ والسلوك',
          p: [
            'الإسكندرية مدينة محافظة والمنتزه مقصد عائلي. أفضل ما يناسبك ملابس مريحة ومحتشمة: تغطية الكتفين والركبتين خط آمن، وهي عملية أيضاً للشمس والبعوض.',
            'قد تُقابل بعض الملاحظات بشأن الإظهار العلني للعاطفة، أو الموسيقى العالية من مكبرات الصوت، أو الجلوس في المساحات المزروعة. أما النزهات على المروج، حيث يُسمح، فهي نشاط عائلي معتاد.',
          ],
        },
        {
          h: 'التصوير',
          p: [
            'تصوير الحدائق والبحر وواجهات القصور من الممرات العامة أمر عادي عادة، وهو أحد أسباب الزيارة. وهناك تحذيران: تجنب تصوير الناس، خصوصاً النساء والأطفال، دون إذن، ولا تصوّر مواقع الأمن أو المباني المقيّدة.',
            'إن كان أي جزء داخلي من القصر مفتوحاً أثناء زيارتك، اسأل هل التصوير مسموح في الداخل قبل إخراج الكاميرا؛ فالقواعد تختلف بين المواقع وتتغير مع المعارض.',
          ],
        },
        {
          h: 'الماء والشواطئ',
          p: [
            'البحر هو الخلفية، وليس تلقائياً شاطئ سباحة. لا تفترض أن أي جزء من الساحل آمن أو مسموح للسباحة، واتبع أي لوحات أو تعليمات من العاملين. فالساحل الصخري للمتوسط قد تكون تياراته قوية.',
          ],
        },
        {
          h: 'احترام موقع قائم',
          list: [
            'لا تصعد على المساحات المزروعة أو النُصُب أو مبنى القصر',
            'اخفض الصوت في المناطق الهادئة',
            'اتبع تعليمات العاملين، خصوصاً حول المناطق المغلقة',
            'احفظ مقتنياتك قريبة في الزحام',
            'لا تترك شيئاً خلفك سوى آثار خطاك',
          ],
        },
        {
          h: 'الأمن وتفتيش الحقائب',
          p: [
            'المواقع العامة الكبيرة في مصر غالباً ما يكون بها حضور أمني، وليس غريباً تفتيش الحقائب عند الدخول، خصوصاً في الأيام المزدحمة وحول الأعياد. ولا نستطيع تأكيد إجراءات الأمن الحالية في المنتزه.',
            'تعاون مع أي تفتيش، واحمل هويتك معك، وتجنب تصوير أفراد الأمن أو المنشآت الأمنية. وإن طُلب منك عدم إدخال شيء فاعتبر ذلك قاعدة للموقع لا مجالاً للتفاوض.',
          ],
        },
        {
          h: 'الأطفال والعائلات والسلامة الشخصية',
          p: [
            'المنتزه مقصد عائلي، والأطفال في كل مكان يوم الجمعة والأعياد. راقب الصغار قرب الماء وقرب طرق الضَيْعة، واتفق على نقطة لقاء في حال التفرق في الزحام.',
            'احفظ مقتنياتك قريبة وتجنب إظهار مبالغ كبيرة من النقود. وهذه احتياطات عادية لأي مكان عام مزدحم لا تعليق خاص على المنتزه.',
          ],
        },
        {
          h: 'النفايات والتشجير والساحل',
          p: [
            'خذ نفاياتك معك — فقد توجد سلال أو لا توجد وقد تُفرَّغ أو لا تُفرَّغ، ولا نستطيع الاعتماد على أي منهما. ابقَ خارج المساحات المزروعة ولا تقطف الأزهار أو النباتات.',
            'وعلى الساحل، لا تزعج الكائنات ولا تصعد على الصخور أو المنشآت، وتذكّر أن البحر هنا ليس منطقة سباحة خاضعة للإشراف ما لم يذكر مرفق ذلك بوضوح.',
          ],
        },
        {
          h: 'كيف راجعنا هذه الصفحة ومتى',
          p: [
            'آخر مراجعة لموقفنا في 4 نوفمبر 2026. والقواعد هنا ممارسات عامة جيدة لحديقة عامة مصرية، ولم نخترع منوعات أو أذونات خاصة بالموقع لا نستطيع التحقق منها.',
            'وللتحقق من قاعدة بعينها — التصوير أو النزهات أو السباحة أو الزيّ — اسأل الضَيْعة عبر قائمتها على خرائط Google، أو راجع الهيئة العامة للاستعلامات (sis.gov.eg) أو وزارة السياحة والآثار (egymonuments.gov.eg)، أو اسأل العاملين عند البوابة.',
          ],
        },
      ],
      faq: [
        ['هل يمكنني التصوير في قصر المنتزه؟', 'تصوير الحدائق وواجهات القصور من الممرات العامة عادي عادة. اسأل قبل تصوير الناس، ولا تصوّر المناطق المقيّدة أو الأمنية.'],
        ['ماذا ألبس؟', 'ملابس مريحة ومحتشمة بتغطية الكتفين والركبتين هي الخيار الأكثر أماناً وعملية.'],
        ['هل يمكنني السباحة في المنتزه؟', 'لا تفترض ذلك. السباحة مقبولة فقط حيث يُسمح بها صراحة، وساحل المتوسط هنا قد يكون هائجاً.'],
        ['هل يمكنني عمل نزهة؟', 'النزهات على المروج نشاط عائلي معتاد حيث لا تكون ممنوعة. أبعد الطعام عن المساحات المزروعة وخذ نفاياتك.'],
        ['هل توجد نقاط تفتيش أمني عند المدخل؟', 'غالباً ما يكون في المواقع المصرية الكبيرة حضور أمني وقد تُفتَّش الحقائب، لكننا لا نستطيع تأكيد الإجراء الحالي في المنتزه. تعاون مع أي تفتيش واحمل هويتك.'],
        ['هل المنتزه آمن للأطفال؟', 'هو مقصد عائلي محبوب. راقب الأطفال قرب الماء والطرق، واتفق على نقطة لقاء في حال التفرق في الزحام.'],
      ],
      related: ['gardens', 'photography-guide', 'nearby-beaches', 'tickets'],
    },
  },
  {
    slug: 'accessibility',
    group: 'visit',
    en: {
      title: 'Montaza Palace Accessibility — Wheelchairs, Seniors and Strollers',
      h1: 'Montaza Palace accessibility guide',
      description: 'Planning an accessible visit to Montaza Palace in Alexandria: what to ask about step-free routes, distances, rest stops and facilities for wheelchair users, seniors and families with strollers.',
      lead: 'We have not verified a continuous step-free route across the Montaza estate. The gardens are large and partly on uneven, sandy or paved ground, so ask about surfaces, distances, rest points and toilet access before you go — and plan a shorter route with a clear return.',
      quick: [
        ['Step-free route', 'Not verified; ask first'],
        ['Distances', 'Large; plan a short loop'],
        ['Rest points', 'Confirm seats and shade'],
        ['Best arrival', 'Vehicle to a confirmed gate'],
        ['Entrance approach', 'Ask which is flattest'],
        ['Toilets', 'Ask; do not assume'],
        ['Last checked', '4 November 2026'],
      ],
      sections: [
        {
          h: 'What we can and cannot confirm',
          p: [
            'A garden estate of this size is likely to combine paved avenues with uneven or soft ground, kerbs and changes in level. We have not been able to confirm a continuous accessible route, the gradient of paths, or the current state of accessible toilets and parking.',
            'That does not mean an accessible visit is impossible — it means it needs planning and a phone call or a question at the gate rather than an assumption.',
          ],
        },
        {
          h: 'What to ask before visiting',
          list: [
            'Is there an entrance with a step-free approach?',
            'Are the main paths paved, and are there kerbs or steps?',
            'Where are the accessible toilets, and are they open?',
            'Is there a drop-off point close to an accessible entrance?',
            'Are there benches or shaded rest points along the way?',
            'Can a wheelchair or stroller be borrowed or hired on site?',
          ],
        },
        {
          h: 'Planning a comfortable visit',
          p: [
            'Choose the shortest interesting loop rather than crossing the whole estate, and pick a rest point to aim for. In warm weather, plan for shade and start early. Bring water and any medication you may need; do not rely on facilities being open.',
            'If you are visiting with someone who tires easily, arriving by car or taxi to a confirmed gate removes the longest walk and the most uncertainty.',
          ],
        },
        {
          h: 'For seniors and families with strollers',
          p: [
            'The main avenues are generally the easiest walking, and the coastal side tends to be breezier. Strollers cope with paved avenues but struggle on soft ground, gravel or sand. If a member of your group uses a wheelchair, treat the facility questions above as essential rather than optional.',
          ],
        },
        {
          h: 'Arriving and the first metres',
          p: [
            'The hardest part of an accessible visit can be the very beginning: the approach, the gate and the first stretch inside. If a vehicle can drop you close to a step-free entrance, the day becomes much easier; if not, the walking starts earlier than you might expect.',
            'Ask specifically which entrance has the flattest approach and whether a car can stop near it. That single question shapes everything that follows.',
          ],
        },
        {
          h: 'Surfaces, kerbs and gradients',
          p: [
            'We cannot confirm whether Montaza’s main paths are continuously paved, whether they carry kerbs or steps, or how steep the gradients are. A garden estate often mixes smooth avenues with uneven, sandy or gravel surfaces, and it is exactly that mix that a wheelchair or a wheeled walker struggles with.',
            'If you use a wheelchair or a rollator, ask about the specific route you plan to take rather than about the estate as a whole, since conditions can change from one path to the next.',
          ],
        },
        {
          h: 'Rest points, shade and toilets',
          p: [
            'Plan around rest: pick a bench, a shaded spot or a cafe as a target and build a short loop between them. In warm weather, shade matters as much as distance, and we cannot confirm how many benches are available or what condition they are in.',
            'Accessible toilets are a specific question we cannot answer from our sources. Ask where they are and whether they are open before you rely on them, and carry what you need as a backup.',
          ],
        },
        {
          h: 'How this page was checked, and when',
          p: [
            'Our position was last checked on 4 November 2026. We have published no measurements, gradients or facility lists because we could not verify them, and a guess here could strand someone in the middle of a visit.',
            'To check, ask the estate through its Google Maps listing, consult the State Information Service (sis.gov.eg) or the Ministry of Tourism and Antiquities (egymonuments.gov.eg), or ask the staff at the gate. For accessibility questions specifically, a phone call before travelling is worth more than any published figure.',
          ],
        },
      ],
      faq: [
        ['Is Montaza Palace wheelchair accessible?', 'We have not verified a continuous step-free route or the current state of accessible facilities. Ask the site about entrances, surfaces and toilets before you go.'],
        ['Are the paths suitable for strollers?', 'Paved avenues are generally fine; soft, sandy or gravel areas are not. Check the route you plan to use.'],
        ['Is it suitable for elderly visitors?', 'It can be, with a short route, rest stops and shade. Arriving by vehicle to a confirmed gate reduces the walking.'],
        ['Are there benches and shade?', 'There is planting and shade in places, but we cannot confirm the number or condition of benches. Ask on arrival.'],
        ['Is there a step-free entrance?', 'We have not verified a step-free entrance or route. Ask the site which entrance has the flattest approach before you travel.'],
        ['Can I borrow a wheelchair on site?', 'We cannot confirm that any mobility equipment is available to borrow or hire at Montaza. Ask in advance rather than assuming.'],
      ],
      related: ['gardens', 'for-seniors', 'with-kids', 'location-entrance'],
    },
    ar: {
      title: 'إتاحة قصر المنتزه — الكراسي المتحركة وكبار السن وعربات الأطفال',
      h1: 'دليل إتاحة قصر المنتزه',
      description: 'التخطيط لزيارة ميسّرة إلى قصر المنتزه بالإسكندرية: ما تسأل عنه بشأن المسارات الخالية من الدرجات والمسافات ونقاط الراحة والمرافق لمستخدمي الكراسي المتحركة وكبار السن وعربات الأطفال.',
      lead: 'لم نتحقق من مسار متصل خالٍ من العوائق في ضَيْعة المنتزه. الحدائق واسعة وعلى أرض متفاوتة قد تكون رملية أو مبلطة، لذا اسأل عن الأرضيات والمسافات ونقاط الراحة ودورات المياه قبل الذهاب، وخطّط لمسار أقصر بعودة واضحة.',
      quick: [
        ['مسار بلا درجات', 'لم يُتحقق؛ اسأل أولاً'],
        ['المسافات', 'واسعة؛ خطّط لحلقة قصيرة'],
        ['نقاط الراحة', 'أكّد المقاعد والظل'],
        ['أفضل وصول', 'مركبة إلى بوابة مؤكدة'],
        ['مدخل الوصول', 'اسأل أيها الأسهل انبساطاً'],
        ['دورات المياه', 'اسأل؛ لا تفترض'],
        ['آخر مراجعة', '4 نوفمبر 2026'],
      ],
      sections: [
        {
          h: 'ما نستطيع تأكيده وما لا نستطيع',
          p: [
            'من المرجح أن تجمع حديقة بهذا الاتساع بين طرق مبلطة وأرض متفاوتة أو رخوة وأرصفة وتغيرات في المستوى. لم نتمكن من تأكيد مسار ميسّر متصل، ولا انحدار الممرات، ولا حالة دورات المياه والمواقف الميسّرة حالياً.',
            'هذا لا يعني استحالة زيارة ميسّرة، بل يعني أنها تحتاج تخطيطاً وسؤالاً عند البوابة أو عبر الهاتف لا افتراضاً.',
          ],
        },
        {
          h: 'ما تسأل عنه قبل الزيارة',
          list: [
            'هل توجد بوابة بمدخل خالٍ من الدرجات؟',
            'هل الممرات الرئيسية مبلطة، وهل توجد أرصفة أو درجات؟',
            'أين دورات المياه الميسّرة، وهل هي مفتوحة؟',
            'هل توجد نقطة إنزال قريبة من مدخل ميسّر؟',
            'هل توجد مقاعد أو نقاط راحة مظللة على الطريق؟',
            'هل يمكن استعارة كرسي متحرك أو عربة أطفال في الموقع؟',
          ],
        },
        {
          h: 'تخطيط زيارة مريحة',
          p: [
            'اختر أقصر حلقة ممتعة بدل عبور الضَيْعة كلها، وحدّد نقطة راحة تستهدفها. في الطقس الحار خطّط للظل وابدأ مبكراً. أحضر الماء وأي دواء تحتاجه؛ ولا تعتمد على فتح المرافق.',
            'إن كنت تزور مع شخص يتعب سريعاً، فالوصول بالسيارة أو الأجرة إلى بوابة مؤكدة يلغي أطول مشي وأكبر قدر من عدم اليقين.',
          ],
        },
        {
          h: 'لكبار السن والعائلات بعربات الأطفال',
          p: [
            'الجادات الرئيسية هي الأسهل للمشي عادة، والجانب الساحلي أكثر نسماً. تتعامل عربات الأطفال مع الجادات المبلطة لكنها تتعثر على الأرض الرخوة أو الحصى أو الرمل. وإن كان أحد أفراد مجموعتك يستخدم كرسياً متحركاً فاعتبر أسئلة المرافق أعلاه ضرورية لا اختيارية.',
          ],
        },
        {
          h: 'الوصول والأمتار الأولى',
          p: [
            'قد يكون أصعب جزء في زيارة ميسّرة هو البداية: الطريق إلى المدخل، والبوابة، وأول مسافة في الداخل. فإن أمكن لمركبة أن تنزلك قرب مدخل خالٍ من الدرجات صار اليوم أسهل بكثير؛ وإن لم يمكن، بدأ المشي أبكر مما تتوقع.',
            'اسأل تحديداً أي مدخل طريقه أكثر انبساطاً وهل يمكن للسيارة التوقف قربه. هذا السؤال وحده يحدد ما يليه.',
          ],
        },
        {
          h: 'الأرضيات والأرصفة والانحدارات',
          p: [
            'لا نستطيع تأكيد ما إذا كانت ممرات المنتزه الرئيسية مبلطة بصورة متصلة، ولا ما إذا كانت بها أرصفة أو درجات، ولا شدة انحدارها. فالضَيْعة الحديقة كثيراً ما تمزج جادات ناعمة بأرض متفاوتة أو رملية أو حصوية، وهذا المزيج بالتحديد هو ما يتعثر فيه الكرسي المتحرك أو المشاية.',
            'وإن كنت تستخدم كرسياً متحركاً أو مشاية، فاسأل عن المسار الذي تنوي اتخاذه بالتحديد لا عن الضَيْعة ككل، لأن الأحوال تتغير من ممر إلى آخر.',
          ],
        },
        {
          h: 'نقاط الراحة والظل ودورات المياه',
          p: [
            'خطّط حول الراحة: اختر مقعداً أو بقعة مظللة أو مقهى هدفاً وابنِ حلقة قصيرة بينها. وفي الطقس الحار يهمّ الظل بقدر المسافة، ولا نستطيع تأكيد عدد المقاعد المتاحة ولا حالتها.',
            'ودورات المياه الميسّرة سؤال محدد لا نستطيع الإجابة عليه من مصادرنا. اسأل أين توجد وهل هي مفتوحة قبل الاعتماد عليها، واحمل ما تحتاجه احتياطاً.',
          ],
        },
        {
          h: 'كيف راجعنا هذه الصفحة ومتى',
          p: [
            'آخر مراجعة لموقفنا في 4 نوفمبر 2026. ولم ننشر أي قياسات ولا انحدارات ولا قوائم مرافق لأننا لم نتمكن من تأكيدها، والتخمين هنا قد يترك شخصاً في منتصف زيارته بلا مخرج.',
            'وللتحقق، اسأل الضَيْعة عبر قائمتها على خرائط Google، أو راجع الهيئة العامة للاستعلامات (sis.gov.eg) أو وزارة السياحة والآثار (egymonuments.gov.eg)، أو اسأل العاملين عند البوابة. ولأسئلة الإتاحة خاصةً، مكالمة هاتفية قبل السفر أنفع من أي رقم منشور.',
          ],
        },
      ],
      faq: [
        ['هل قصر المنتزه مناسب للكراسي المتحركة؟', 'لم نتحقق من مسار متصل خالٍ من العوائق أو حالة المرافق الميسّرة حالياً. اسأل المنتزه عن المداخل والأرضيات ودورات المياه قبل الذهاب.'],
        ['هل الممرات مناسبة لعربات الأطفال؟', 'الجادات المبلطة مناسبة عادة؛ والمناطق الرخوة أو الرملية أو الحصوية ليست كذلك. تحقق من المسار الذي تخطط له.'],
        ['هل المناسب لكبار السن؟', 'يمكن أن يكون، بمسار قصير ونقاط راحة وظل. والوصول بمركبة إلى بوابة مؤكدة يقلل المشي.'],
        ['هل توجد مقاعد وظل؟', 'يوجد تشجير وظل في أماكن، لكننا لا نستطيع تأكيد عدد المقاعد أو حالتها. اسأل عند الوصول.'],
        ['هل توجد بوابة خالية من الدرجات؟', 'لم نتحقق من وجود مدخل أو مسار خالٍ من الدرجات. اسأل المنتزه أي مدخل طريقه أكثر انبساطاً قبل السفر.'],
        ['هل يمكنني استعارة كرسي متحرك في الموقع؟', 'لا نستطيع تأكيد توفر أي معدات حركة للاستعارة أو الإيجار في المنتزه. اسأل مسبقاً بدل الافتراض.'],
      ],
      related: ['gardens', 'for-seniors', 'with-kids', 'location-entrance'],
    },
  },
];
