// ===== TRANSLATIONS =====
const translations = {
  en: {
    // --- NAV ---
    'nav.home':             'Home',
    'nav.about':            'About',
    'nav.courses':          'Courses',
    'nav.services':         'Services',
    'nav.gallery':          'Gallery',
    'nav.contact':          'Contact',

    // --- HERO ---
    'hero.badge1':          '🎌 Nepal\'s Premier Japanese Consultancy',
    'hero.badge2':          '🌸 Immerse in Japanese Culture',
    'hero.badge3':          '📚 Expert Japanese Instruction',
    'hero.title':           'Your Gateway to<br>Japan Starts Here',
    'hero.subtitle':        'Comprehensive Japanese language education and consultation services for students and professionals. Start your journey today.',
    'hero.getStarted':      'Free Consultation',
    'hero.learnMore':       'Explore Courses',
    'hero.s2.title':        'Experience Japan\'s<br>Rich Culture',
    'hero.s2.desc':         'Immerse yourself in Japan\'s rich traditions and modern lifestyle through our comprehensive programs.',
    'hero.s2.btn1':         'About Us',
    'hero.s2.btn2':         'Our Services',
    'hero.s3.title':        'Learn Japanese with<br>Expert Teachers',
    'hero.s3.desc':         'Join our experienced instructors for personalized Japanese language instruction from JLPT N5 to N1.',
    'hero.s3.btn1':         'View Courses',
    'hero.s3.btn2':         'Contact Us',
    'hero.stat1':           'Students Placed',
    'hero.stat2':           'Visa Success',
    'hero.stat3':           'Years Experience',

    // --- STATS BAR ---
    'stats.students':       'Students Placed in Japan',
    'stats.visa':           'Visa Success Rate',
    'stats.years':          'Years of Experience',
    'stats.schools':        'Partner Schools in Japan',

    // --- ABOUT ---
    'about.tag':            'About Us',
    'about.title':          'Nepal\'s Trusted Bridge to Japan',
    'about.lead':           'Sunmoon Nepal Educational Foundation Pvt. Ltd. is a premier consultancy dedicated to helping Nepali students and professionals build a future in Japan through quality Japanese language education and expert visa guidance.',
    'about.f1':             'Government-registered consultancy with a proven track record',
    'about.f2':             'Qualified teachers with JLPT N1-certified proficiency',
    'about.f3':             'End-to-end support from enrollment to pre-departure',
    'about.f4':             'Strong network of universities and language schools in Japan',
    'about.badge':          'Years Bridging<br>Nepal &amp; Japan',
    'about.cta1':           'Get Free Consultation',
    'about.cta2':           'View Courses',

    // --- WHY CHOOSE US ---
    'why.tag':              'Why Choose Us',
    'why.title':            'What Makes Us Different',
    'why.subtitle':         'We go beyond language classes to ensure your complete success in Japan',
    'why.c1.title':         'Experienced Teachers',
    'why.c1.desc':          'Our instructors hold JLPT N1 certifications and have years of classroom teaching experience.',
    'why.c2.title':         '95% Visa Success Rate',
    'why.c2.desc':          'Our meticulous document preparation process consistently achieves the highest approval rates.',
    'why.c3.title':         'Flexible Schedules',
    'why.c3.desc':          'Morning, evening, and weekend batches available to fit around your existing commitments.',
    'why.c4.title':         'Affordable Fees',
    'why.c4.desc':          'Competitive pricing with installment payment plans to make quality education accessible to all.',
    'why.c5.title':         'Full Document Support',
    'why.c5.desc':          'Complete assistance with COE, visa applications, bank documents, and all required paperwork.',
    'why.c6.title':         'Pre-Departure Guidance',
    'why.c6.desc':          'Cultural orientation, accommodation tips, and on-arrival support in Japan included.',

    // --- COURSES ---
    'courses.tag':          'Our Programs',
    'courses.title':        'Japanese Language Courses',
    'courses.subtitle':     'From absolute beginner to advanced — find the right JLPT level for your goals',
    'courses.enroll':       'Enroll Now',
    'courses.popular':      'Most Popular',
    'courses.n5.name':      'Beginner',
    'courses.n5.dur':       '3 Months',
    'courses.n5.f1':        'Hiragana &amp; Katakana',
    'courses.n5.f2':        '800 Core Vocabulary Words',
    'courses.n5.f3':        'Basic Grammar Patterns',
    'courses.n5.f4':        'Everyday Conversations',
    'courses.n5.f5':        'JLPT N5 Exam Preparation',
    'courses.n4.name':      'Elementary',
    'courses.n4.dur':       '4 Months',
    'courses.n4.f1':        '300 Kanji Characters',
    'courses.n4.f2':        '1,500 Vocabulary Words',
    'courses.n4.f3':        'Intermediate Grammar',
    'courses.n4.f4':        'Reading Comprehension',
    'courses.n4.f5':        'JLPT N4 Exam Preparation',
    'courses.n3.name':      'Intermediate',
    'courses.n3.dur':       '6 Months',
    'courses.n3.f1':        '650 Kanji Characters',
    'courses.n3.f2':        '3,750 Vocabulary Words',
    'courses.n3.f3':        'Advanced Grammar',
    'courses.n3.f4':        'Listening &amp; Speaking',
    'courses.n3.f5':        'JLPT N3 Exam Preparation',
    'courses.n2.name':      'Upper Intermediate',
    'courses.n2.dur':       '8 Months',
    'courses.n2.f1':        '1,000 Kanji Characters',
    'courses.n2.f2':        '6,000 Vocabulary Words',
    'courses.n2.f3':        'Business Japanese',
    'courses.n2.f4':        'News &amp; Media Reading',
    'courses.n2.f5':        'JLPT N2 Exam Preparation',
    'courses.n1.name':      'Advanced',
    'courses.n1.dur':       '12 Months',
    'courses.n1.f1':        '2,000+ Kanji Characters',
    'courses.n1.f2':        '10,000+ Vocabulary Words',
    'courses.n1.f3':        'Professional Japanese',
    'courses.n1.f4':        'Academic Writing',
    'courses.n1.f5':        'JLPT N1 Exam Preparation',

    // --- HOW IT WORKS ---
    'process.tag':          'Simple Process',
    'process.title':        'Your Journey to Japan in 4 Steps',
    'process.subtitle':     'We guide you every step of the way — from first enquiry to landing in Japan',
    'process.s1.title':     'Free Consultation',
    'process.s1.desc':      'Visit our office or contact us online. We assess your goals and recommend the right path.',
    'process.s2.title':     'Course Enrollment',
    'process.s2.desc':      'Enroll in the appropriate JLPT level course and begin your Japanese language journey.',
    'process.s3.title':     'Document Processing',
    'process.s3.desc':      'We handle all visa documents, Certificate of Eligibility, and application submission.',
    'process.s4.title':     'Fly to Japan ✈',
    'process.s4.desc':      'After visa approval, attend pre-departure briefing and start your new life in Japan.',

    // --- SERVICES ---
    'services.tag':                  'What We Offer',
    'services.title':                'Our Services',
    'services.subtitle':             'Comprehensive solutions for your Japanese language and career goals',
    'services.study.title':          'Study in Japan',
    'services.study.description':    'Comprehensive support for students seeking to study at Japanese universities and language schools.',
    'services.work.title':           'Work Visa Support',
    'services.work.description':     'Expert assistance in securing work visas and finding employment opportunities in Japan.',
    'services.online.title':         'Online Classes',
    'services.online.description':   'Interactive online Japanese language classes with experienced native speakers from the comfort of home.',
    'services.physical.title':       'Physical Classes',
    'services.physical.description': 'Traditional classroom-based Japanese language instruction in a conducive learning environment.',

    // --- TESTIMONIALS ---
    'testimonials.tag':      'Student Stories',
    'testimonials.title':    'What Our Students Say',
    'testimonials.subtitle': 'Real experiences from students who achieved their Japan dream with us',
    'testimonials.t1':       '"Sunmoon Nepal guided me through everything — from N5 to N2 and finally securing my student visa for Tokyo. Their teachers are amazing and the support never stopped even after I arrived in Japan."',
    'testimonials.t1.dest':  'Studying at Tokyo Language School',
    'testimonials.t2':       '"I had tried other consultancies before but the visa process kept failing. Sunmoon\'s team handled everything professionally and my visa was approved on the very first attempt!"',
    'testimonials.t2.dest':  'Working in Osaka, Japan',
    'testimonials.t3':       '"The flexible evening classes helped me study Japanese while working. Within 8 months I passed JLPT N3 and received my COE for Japan. I cannot thank Sunmoon enough!"',
    'testimonials.t3.dest':  'IT Engineer in Nagoya, Japan',

    // --- GALLERY ---
    'gallery.tag':           'Learn Online',
    'gallery.title':         'Video Gallery',
    'gallery.subtitle':      'Free Japanese lessons to get a head start on your language journey',
    'gallery.viewMore':      'View More Videos',

    // --- FAQ ---
    'faq.tag':      'FAQ',
    'faq.title':    'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know about learning Japanese and studying in Japan',
    'faq.q1':       'What are the JLPT levels and which should I start with?',
    'faq.a1':       'JLPT has 5 levels: N5 (beginner) to N1 (advanced). If you have no Japanese experience, start at N5. We provide a free placement test at our office to determine the right level for you.',
    'faq.q2':       'How long does it take to get a Japan student visa?',
    'faq.a2':       'The Certificate of Eligibility (COE) from Japan typically takes 2–3 months after application submission. After receiving the COE, the visa sticker from the Japanese Embassy in Nepal is usually issued within 3–5 business days.',
    'faq.q3':       'What documents are needed for a Japan student visa?',
    'faq.a3':       'Key documents include: valid passport, academic transcripts, Japanese language certificate (JLPT), financial documents (bank statements), passport-size photos, application form, and school acceptance letter. Our team assists you in preparing all of these.',
    'faq.q4':       'Can I work part-time while studying in Japan?',
    'faq.a4':       'Yes! Students on a Japanese student visa are permitted to work up to 28 hours per week during term time and up to 40 hours per week during holidays. We provide guidance on part-time job opportunities in Japan to help cover living expenses.',
    'faq.q5':       'Do you offer online classes for students outside Kathmandu?',
    'faq.a5':       'Absolutely. We offer fully interactive online classes via Zoom for students across Nepal and internationally. Our online curriculum is identical to our physical classes, complete with assignments, tests, and live teacher support.',
    'faq.q6':       'What is the class schedule and batch size?',
    'faq.a6':       'We run morning (7–9 AM), daytime (10 AM–12 PM), and evening (5–7 PM) batches, plus weekend sessions. Batch sizes are kept small (max 15 students) to ensure personalized attention for every student.',

    // --- CONTACT ---
    'contact.tag':              'Get In Touch',
    'contact.title':            'Contact Us',
    'contact.subtitle':         'Get in touch with us for any inquiries or support',
    'contact.hours':            'Office Hours',
    'contact.links':            'Quick Links',
    'contact.form.title':       'Send us a Message',
    'contact.form.name':        'Name',
    'contact.form.email':       'Email',
    'contact.form.phone':       'Phone',
    'contact.form.message':     'Message',
    'contact.form.send':        'Send Message',
    'contact.form.sending':     'Sending...',
    'contact.form.success':     "Message sent! We'll get back to you soon.",
    'contact.form.error':       'Failed to send. Please try again later.',
    'contact.hours.weekday':    'Monday – Friday: 9:00 AM – 6:00 PM',
    'contact.hours.saturday':   'Saturday: 10:00 AM – 3:00 PM',
    'contact.hours.sunday':     'Sunday: Closed',

    // --- FOOTER ---
    'footer.desc':  'Nepal\'s trusted bridge to Japan — providing quality Japanese language education and visa consultancy since 2014.',
  },

  ja: {
    // --- NAV ---
    'nav.home':             'ホーム',
    'nav.about':            '私たちについて',
    'nav.courses':          'コース',
    'nav.services':         'サービス',
    'nav.gallery':          'ギャラリー',
    'nav.contact':          'お問い合わせ',

    // --- HERO ---
    'hero.badge1':          '🎌 ネパール最高峰の日本語コンサルタント',
    'hero.badge2':          '🌸 日本文化に触れよう',
    'hero.badge3':          '📚 専門家による日本語指導',
    'hero.title':           '日本への扉を<br>ここから開く',
    'hero.subtitle':        '学生や専門家のための包括的な日本語教育とコンサルティングサービス。今すぐ旅を始めましょう。',
    'hero.getStarted':      '無料相談',
    'hero.learnMore':       'コースを見る',
    'hero.s2.title':        '日本の豊かな<br>文化を体験しよう',
    'hero.s2.desc':         '包括的なプログラムを通じて、日本の豊かな伝統と現代の生活スタイルに触れましょう。',
    'hero.s2.btn1':         '私たちについて',
    'hero.s2.btn2':         'サービス内容',
    'hero.s3.title':        '専門講師と<br>日本語を学ぼう',
    'hero.s3.desc':         'JLPT N5からN1まで、経験豊富な講師による個別指導で日本語を学びましょう。',
    'hero.s3.btn1':         'コースを見る',
    'hero.s3.btn2':         'お問い合わせ',
    'hero.stat1':           '留学生数',
    'hero.stat2':           'ビザ成功率',
    'hero.stat3':           '経験年数',

    // --- STATS BAR ---
    'stats.students':       '日本への留学生数',
    'stats.visa':           'ビザ申請成功率',
    'stats.years':          '経験年数',
    'stats.schools':        '日本の提携校数',

    // --- ABOUT ---
    'about.tag':            '私たちについて',
    'about.title':          'ネパールと日本をつなぐ信頼の架け橋',
    'about.lead':           'サンムーンネパール教育財団（Pvt. Ltd.）は、質の高い日本語教育と専門的なビザ指導を通じて、ネパールの学生・社会人が日本で未来を築くことを支援する一流コンサルタントです。',
    'about.f1':             '実績のある政府登録コンサルタント',
    'about.f2':             'JLPT N1取得済みの資格ある講師陣',
    'about.f3':             '入学手続きから出発前まで完全サポート',
    'about.f4':             '日本の大学・語学学校との強力なネットワーク',
    'about.badge':          'ネパールと日本を<br>つなぐ年数',
    'about.cta1':           '無料相談を申し込む',
    'about.cta2':           'コースを見る',

    // --- WHY CHOOSE US ---
    'why.tag':              '選ばれる理由',
    'why.title':            '私たちが選ばれる理由',
    'why.subtitle':         '語学授業を超えた、日本での成功を徹底サポートします',
    'why.c1.title':         '経験豊富な講師陣',
    'why.c1.desc':          '講師全員がJLPT N1取得済みで、豊富な教室指導経験を持ちます。',
    'why.c2.title':         'ビザ成功率95%',
    'why.c2.desc':          '細心の書類作成プロセスにより、常に最高水準のビザ承認率を実現しています。',
    'why.c3.title':         '柔軟なスケジュール',
    'why.c3.desc':          '午前・夜間・週末クラスを設置し、お客様のスケジュールに合わせて受講できます。',
    'why.c4.title':         'リーズナブルな授業料',
    'why.c4.desc':          '分割払いプランで、リーズナブルに質の高い教育を受けることができます。',
    'why.c5.title':         '書類作成の完全サポート',
    'why.c5.desc':          '在留資格認定証明書・ビザ申請・銀行書類など必要な書類を完全サポートします。',
    'why.c6.title':         '出発前ガイダンス',
    'why.c6.desc':          '文化オリエンテーション、住居情報、来日後のサポートも含まれます。',

    // --- COURSES ---
    'courses.tag':          'コース案内',
    'courses.title':        '日本語コース',
    'courses.subtitle':     '初心者から上級者まで — あなたの目標に合ったJLPTレベルを見つけましょう',
    'courses.enroll':       '今すぐ申し込む',
    'courses.popular':      '人気No.1',
    'courses.n5.name':      '初級',
    'courses.n5.dur':       '3ヶ月',
    'courses.n5.f1':        'ひらがな・カタカナ',
    'courses.n5.f2':        '基本語彙800語',
    'courses.n5.f3':        '基本文法パターン',
    'courses.n5.f4':        '日常会話',
    'courses.n5.f5':        'JLPT N5試験対策',
    'courses.n4.name':      '初中級',
    'courses.n4.dur':       '4ヶ月',
    'courses.n4.f1':        '漢字300文字',
    'courses.n4.f2':        '語彙1,500語',
    'courses.n4.f3':        '中級文法',
    'courses.n4.f4':        '読解力',
    'courses.n4.f5':        'JLPT N4試験対策',
    'courses.n3.name':      '中級',
    'courses.n3.dur':       '6ヶ月',
    'courses.n3.f1':        '漢字650文字',
    'courses.n3.f2':        '語彙3,750語',
    'courses.n3.f3':        '上級文法',
    'courses.n3.f4':        '聴解・会話',
    'courses.n3.f5':        'JLPT N3試験対策',
    'courses.n2.name':      '中上級',
    'courses.n2.dur':       '8ヶ月',
    'courses.n2.f1':        '漢字1,000文字',
    'courses.n2.f2':        '語彙6,000語',
    'courses.n2.f3':        'ビジネス日本語',
    'courses.n2.f4':        'ニュース・メディア読解',
    'courses.n2.f5':        'JLPT N2試験対策',
    'courses.n1.name':      '上級',
    'courses.n1.dur':       '12ヶ月',
    'courses.n1.f1':        '漢字2,000文字以上',
    'courses.n1.f2':        '語彙10,000語以上',
    'courses.n1.f3':        'ビジネス・専門日本語',
    'courses.n1.f4':        '学術的な文章作成',
    'courses.n1.f5':        'JLPT N1試験対策',

    // --- HOW IT WORKS ---
    'process.tag':          'シンプルな流れ',
    'process.title':        '4つのステップで日本へ',
    'process.subtitle':     '最初のお問い合わせから来日まで、すべてのステップでサポートします',
    'process.s1.title':     '無料相談',
    'process.s1.desc':      'ご来所またはオンラインでお問い合わせください。目標を把握し、最適なコースをご提案します。',
    'process.s2.title':     'コース申し込み',
    'process.s2.desc':      '適切なJLPTレベルのコースに申し込み、日本語学習を開始します。',
    'process.s3.title':     '書類手続き',
    'process.s3.desc':      'ビザ書類・在留資格認定証明書・申請書類の手続きをすべて代行します。',
    'process.s4.title':     '日本へ出発 ✈',
    'process.s4.desc':      'ビザ取得後、出発前オリエンテーションを受け、日本での新生活を始めましょう。',

    // --- SERVICES ---
    'services.tag':                  '提供サービス',
    'services.title':                'サービス内容',
    'services.subtitle':             '日本語学習とキャリア目標のための総合的なソリューション',
    'services.study.title':          '日本留学',
    'services.study.description':    '日本の大学や語学学校への留学を目指す学生への総合的なサポート。',
    'services.work.title':           '就労ビザサポート',
    'services.work.description':     '就労ビザの取得と日本での就職機会の獲得をサポート。',
    'services.online.title':         'オンライン授業',
    'services.online.description':   '経験豊富なネイティブ講師によるインタラクティブなオンライン日本語レッスン。',
    'services.physical.title':       '対面授業',
    'services.physical.description': '充実した学習環境での従来型の教室ベース日本語指導。',

    // --- TESTIMONIALS ---
    'testimonials.tag':      '留学生の声',
    'testimonials.title':    '学生の皆さんからの声',
    'testimonials.subtitle': '私たちと共に日本の夢を実現した学生の実体験',
    'testimonials.t1':       '「N5からN2まで、そして東京の学生ビザ取得まで、サンムーンネパールがすべてサポートしてくれました。先生方は素晴らしく、来日後もサポートが続きました。」',
    'testimonials.t1.dest':  '東京の語学学校で勉強中',
    'testimonials.t2':       '「以前他のコンサルタントを利用しましたがビザが通りませんでした。サンムーンのチームはすべてをプロフェッショナルに処理し、初回で承認されました！」',
    'testimonials.t2.dest':  '大阪で就労中',
    'testimonials.t3':       '「夜間の柔軟なクラスのおかげで、働きながら日本語を勉強できました。8ヶ月でJLPT N3に合格し、在留資格認定証明書を取得しました。本当に感謝しています！」',
    'testimonials.t3.dest':  '名古屋のITエンジニア',

    // --- GALLERY ---
    'gallery.tag':           'オンラインで学ぶ',
    'gallery.title':         '動画ギャラリー',
    'gallery.subtitle':      '日本語学習の第一歩に役立つ無料レッスン',
    'gallery.viewMore':      'もっと見る',

    // --- FAQ ---
    'faq.tag':      'よくある質問',
    'faq.title':    'よくある質問',
    'faq.subtitle': '日本語学習と日本留学に関するすべての疑問にお答えします',
    'faq.q1':       'JLPTのレベルは何種類あり、どのレベルから始めればいいですか？',
    'faq.a1':       'JLPTはN5（初級）からN1（上級）まで5段階あります。日本語未経験の方はN5から始めることをお勧めします。無料の実力テストも行っていますので、お気軽にご来所ください。',
    'faq.q2':       '日本の学生ビザを取得するにはどのくらいかかりますか？',
    'faq.a2':       '在留資格認定証明書（COE）の発行には、申請後通常2〜3ヶ月かかります。COE受領後、ネパールの日本大使館での査証発給は通常3〜5営業日で完了します。',
    'faq.q3':       '日本の学生ビザに必要な書類は何ですか？',
    'faq.a3':       '主な必要書類：有効なパスポート、学業成績証明書、日本語能力証明書（JLPT）、財政証明書（銀行残高証明）、証明写真、申請書、学校の受入許可書。当チームがすべての準備をサポートします。',
    'faq.q4':       '日本で勉強しながらアルバイトはできますか？',
    'faq.a4':       'はい！日本の学生ビザで在学中は週28時間、長期休暇中は週40時間までアルバイトが可能です。生活費の一助となるアルバイトの探し方についてもご案内しています。',
    'faq.q5':       'カトマンズ以外の学生向けにオンラインクラスはありますか？',
    'faq.a5':       'もちろんです。ネパール全土および海外の学生を対象に、Zoomを利用した完全インタラクティブなオンラインクラスを提供しています。カリキュラムは対面クラスと同一で、課題・テスト・講師サポートもご利用いただけます。',
    'faq.q6':       'クラスのスケジュールとクラスの人数は？',
    'faq.a6':       '午前（7〜9時）、昼間（10〜12時）、夜間（17〜19時）、週末クラスを設けています。一人ひとりに目が行き届くよう、クラス定員は最大15名に設定しています。',

    // --- CONTACT ---
    'contact.tag':              'お問い合わせ',
    'contact.title':            'お問い合わせ',
    'contact.subtitle':         'ご質問やサポートについて、お気軽にお問い合わせください',
    'contact.hours':            '営業時間',
    'contact.links':            'クイックリンク',
    'contact.form.title':       'メッセージを送る',
    'contact.form.name':        'お名前',
    'contact.form.email':       'メールアドレス',
    'contact.form.phone':       '電話番号',
    'contact.form.message':     'メッセージ',
    'contact.form.send':        '送信',
    'contact.form.sending':     '送信中...',
    'contact.form.success':     'メッセージが送信されました。近日中にご連絡いたします。',
    'contact.form.error':       'メッセージの送信に失敗しました。後でもう一度お試しください。',
    'contact.hours.weekday':    '月曜 – 金曜: 9:00 – 18:00',
    'contact.hours.saturday':   '土曜: 10:00 – 15:00',
    'contact.hours.sunday':     '日曜: 休業',

    // --- FOOTER ---
    'footer.desc':  '2014年以来、ネパールから日本への信頼の架け橋として、質の高い日本語教育とビザコンサルティングを提供しています。',
  }
};

// ===== LANGUAGE =====
let currentLang = localStorage.getItem('lang') || 'en';

function t(key) { return translations[currentLang][key] || key; }

function applyTranslations() {
  document.querySelectorAll('[data-key]').forEach(el => {
    const text = t(el.getAttribute('data-key'));
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = text;
    } else {
      el.innerHTML = text;
    }
  });
  const label = currentLang === 'en' ? '日本語' : 'English';
  document.querySelectorAll('#langToggle, #langToggleMobile').forEach(b => b.textContent = label);
  document.documentElement.lang = currentLang === 'en' ? 'en' : 'ja';
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ja' : 'en';
  localStorage.setItem('lang', currentLang);
  applyTranslations();
}

// ===== MOBILE MENU =====
let menuOpen = false;
function toggleMenu() {
  menuOpen = !menuOpen;
  document.getElementById('mobileMenu').classList.toggle('open', menuOpen);
  document.getElementById('menuIcon').innerHTML = menuOpen ? '&#10005;' : '&#9776;';
}
function closeMenu() {
  menuOpen = false;
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('menuIcon').innerHTML = '&#9776;';
}

// ===== SWIPER =====
function initSwiper() {
  new Swiper('.hero-swiper', {
    effect: 'fade',
    loop: true,
    autoplay: { delay: 5500, disableOnInteraction: false },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    pagination: { el: '.swiper-pagination', clickable: true },
    on: {
      slideChangeTransitionStart() {
        document.querySelectorAll('.slide-text').forEach(el => {
          el.style.opacity = '0';
          el.style.transform = 'translateY(20px)';
        });
      },
      slideChangeTransitionEnd() {
        const active = document.querySelector('.swiper-slide-active .slide-text');
        if (active) {
          active.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
          active.style.opacity = '1';
          active.style.transform = 'translateY(0)';
        }
      }
    }
  });
}

// ===== SCROLL REVEAL =====
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const siblings = entry.target.parentElement.querySelectorAll('.reveal');
        let delay = 0;
        siblings.forEach((sib, idx) => { if (sib === entry.target) delay = idx * 80; });
        setTimeout(() => entry.target.classList.add('visible'), delay);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ===== COUNTER ANIMATION =====
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const step = 16;
  const increment = target / (duration / step);
  let current = 0;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) { el.textContent = target + suffix; clearInterval(timer); }
    else { el.textContent = Math.floor(current) + suffix; }
  }, step);
}

function initCounters() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { animateCounter(entry.target); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-number[data-target]').forEach(el => obs.observe(el));
}

// ===== ACTIVE NAV LINK =====
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => obs.observe(s));
}

// ===== FAQ ACCORDION =====
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');
  document.querySelectorAll('.faq-q.open').forEach(b => {
    b.classList.remove('open');
    b.nextElementSibling.classList.remove('open');
  });
  if (!isOpen) { btn.classList.add('open'); answer.classList.add('open'); }
}

// ===== CONTACT FORM =====
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn  = document.getElementById('submitBtn');
    const submitText = document.getElementById('submitText');
    const statusEl   = document.getElementById('formStatus');
    submitBtn.disabled = true;
    submitText.textContent = t('contact.form.sending');
    statusEl.textContent = '';
    statusEl.className = 'form-status';
    try {
      const res  = await fetch('php/send_mail.php', { method: 'POST', body: new FormData(form) });
      const json = await res.json();
      if (json.success) {
        statusEl.textContent = t('contact.form.success');
        statusEl.className   = 'form-status success';
        form.reset();
      } else {
        // 422 = validation error: show the server's specific reason
        const err = new Error(json.message || 'Server error');
        err.userMessage = res.status === 422 ? json.message : null;
        throw err;
      }
    } catch (err) {
      statusEl.textContent = err.userMessage || t('contact.form.error');
      statusEl.className   = 'form-status error';
    } finally {
      submitBtn.disabled = false;
      submitText.textContent = t('contact.form.send');
      setTimeout(() => { statusEl.textContent = ''; statusEl.className = 'form-status'; }, 6000);
    }
  });
}

// ===== NAVBAR SCROLL =====
function initNavbarScroll() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 20
      ? '0 4px 20px rgba(0,0,0,0.12)'
      : '0 1px 4px rgba(0,0,0,0.08)';
  }, { passive: true });
}

// ===== FOOTER YEAR =====
function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  initSwiper();
  initReveal();
  initCounters();
  initActiveNav();
  initContactForm();
  initNavbarScroll();
  setYear();
});
