import { Camera, Heart, Shield, MapPin } from "lucide-react";

export const content = {
    en: {
        nav: {
            home: "Home",
            tours: "Tours",
            about: "About Us",
            wedding: "Wedding",
            blog: "Blog",
            contact: "Contact",
        },
        hero: {
            headline: "Discover the Hidden Japan with Pride.",
            subhead: "Authentic, Safe, and Unforgettable Journeys curated for the LGBTQ+ Community.",
            cta: "Find Your Tour",
        },
        intro: {
            title: "Meet Your Navigators",
            message: "We invite you to experience Japan not just as a destination, but as a place where you can truly be yourself. Let us guide you through the hidden gems and welcoming communities of our beautiful country.",
            names: "Taka & Ady",
            role: "Co-Founders & Ambassadors",
            instagram: "Follow our Journey",
        },
        features: {
            subtitle: "Why Choose Us",
            title: "Why Choose Japan Pride Journeys?",
            items: [
                {
                    title: "LGBTQ+ Native Guides",
                    description: "Our guides are part of the community or strong allies, ensuring a safe and welcoming environment.",
                    icon: Shield,
                },
                {
                    title: "Professional Photography",
                    description: "Capture your memories with our professional photography service included in select tours.",
                    icon: Camera,
                },
                {
                    title: "One-Stop Wedding",
                    description: "Celebrate your love with a traditional or modern ceremony, fully arranged by us.",
                    icon: Heart,
                },
                {
                    title: "Local Community Access",
                    description: "Exclusive access to local LGBTQ+ bars, events, and communities.",
                    icon: MapPin,
                },
            ],
        },
        tours: {
            subtitle: "Exclusive Experiences",
            title: "Curated Journeys",
            items: [
                {
                    id: "tokyo-deep-dive",
                    title: "Tokyo Deep Dive",
                    description: "Experience the vibrant nightlife of Shinjuku Nichome and the rich culture of Tokyo.",
                    image: "/photo/t-a/IMG_1368.JPG",
                    price: "From $300",
                    duration: "1 Day",
                    fullDescription: "Dive deep into Tokyo's most vibrant LGBTQ+ district, Shinjuku Nichome. Experience authentic Japanese nightlife, visit iconic cultural sites, and connect with the local community. Our native guides will ensure you feel safe and welcomed throughout your journey.",
                    schedule: [
                        { time: "18:00", activity: "Meet at Shinjuku Station" },
                        { time: "18:30", activity: "Cultural site visit" },
                        { time: "20:00", activity: "Dinner at local restaurant" },
                        { time: "21:30", activity: "Shinjuku Nichome bar hopping" },
                        { time: "23:00", activity: "Community meetup" },
                    ],
                    locations: [
                        {
                            name: "Shinjuku Nichome",
                            description: "Tokyo's most vibrant LGBTQ+ district with over 300 bars and clubs",
                            experiences: [
                                "Guided tour of best LGBTQ+ bars and clubs",
                                "LGBTQ+ community meetups",
                                "Welcome drink at selected venues",
                            ],
                        },
                        {
                            name: "Historic Cultural Sites",
                            description: "Iconic Tokyo landmarks and cultural heritage sites",
                            experiences: [
                                "Guided cultural site visits",
                                "Professional photography session (optional)",
                            ],
                        },
                        {
                            name: "Local Restaurants",
                            description: "Authentic Japanese dining experiences",
                            experiences: [
                                "Traditional and modern Japanese cuisine",
                                "Local dining culture immersion",
                            ],
                        },
                    ],
                },
                {
                    id: "kyoto-tradition",
                    title: "Kyoto Tradition & Pride",
                    description: "A romantic journey through Kyoto's temples with a traditional wedding photo session.",
                    image: "/photo/t-a/IMG_6592.JPG",
                    price: "From $500",
                    duration: "2 Days",
                    fullDescription: "Experience the timeless beauty of Kyoto with a focus on tradition and romance. Visit stunning temples, participate in traditional ceremonies, and capture your love story with a professional wedding photo session in authentic Japanese settings.",
                    schedule: [
                        { time: "Day 1 - 09:00", activity: "Temple tour (Fushimi Inari, Kiyomizu-dera)" },
                        { time: "Day 1 - 14:00", activity: "Traditional lunch and tea ceremony" },
                        { time: "Day 1 - 16:00", activity: "Wedding photo session" },
                        { time: "Day 1 - 18:00", activity: "Check-in at ryokan" },
                        { time: "Day 2 - 10:00", activity: "Arashiyama bamboo forest visit" },
                        { time: "Day 2 - 14:00", activity: "Departure" },
                    ],
                    locations: [
                        {
                            name: "Fushimi Inari & Kiyomizu-dera",
                            description: "Kyoto's most iconic temples with stunning architecture and spiritual significance",
                            experiences: [
                                "Private temple tours with LGBTQ+ friendly guides",
                                "Traditional architecture and history exploration",
                                "Spiritual and cultural immersion",
                            ],
                        },
                        {
                            name: "Traditional Ryokan",
                            description: "Authentic Japanese inn experience with traditional hospitality",
                            experiences: [
                                "Stay at a traditional ryokan (1 night)",
                                "Traditional Japanese meals (kaiseki)",
                                "Onsen experience (if available)",
                            ],
                        },
                        {
                            name: "Wedding Photo Session",
                            description: "Professional photography in authentic Japanese settings",
                            experiences: [
                                "Traditional Japanese wedding photo session",
                                "Kimono rental and styling",
                                "Professional photography service",
                            ],
                        },
                        {
                            name: "Arashiyama Bamboo Forest",
                            description: "One of Kyoto's most beautiful natural landmarks",
                            experiences: [
                                "Bamboo forest walk",
                                "Nature photography",
                                "Peaceful meditation experience",
                            ],
                        },
                    ],
                },
                {
                    id: "japan-golden-route",
                    title: "Japan Golden Route",
                    description: "The ultimate tour of Tokyo, Kyoto, and Osaka, focusing on LGBTQ+ friendly spots.",
                    image: "https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=1200",
                    price: "From $2500",
                    duration: "7 Days",
                    fullDescription: "The comprehensive journey through Japan's most iconic cities, carefully curated to highlight LGBTQ+ friendly destinations, cultural experiences, and authentic local connections. This is the ultimate Japan experience for the LGBTQ+ community.",
                    schedule: [
                        { time: "Day 1-2", activity: "Tokyo exploration and Shinjuku Nichome" },
                        { time: "Day 3", activity: "Travel to Kyoto via bullet train" },
                        { time: "Day 4-5", activity: "Kyoto temples and traditional experiences" },
                        { time: "Day 6", activity: "Osaka food and culture tour" },
                        { time: "Day 7", activity: "Departure" },
                    ],
                    locations: [
                        {
                            name: "Tokyo",
                            description: "Japan's vibrant capital city with rich culture and LGBTQ+ community",
                            experiences: [
                                "Shinjuku Nichome bar and club tours",
                                "Historic cultural site visits",
                                "Modern Tokyo exploration",
                                "LGBTQ+ community meetups",
                            ],
                        },
                        {
                            name: "Kyoto",
                            description: "Ancient capital with stunning temples and traditional culture",
                            experiences: [
                                "Temple tours (Fushimi Inari, Kiyomizu-dera, etc.)",
                                "Traditional tea ceremony",
                                "Traditional ryokan stay",
                                "Arashiyama bamboo forest",
                            ],
                        },
                        {
                            name: "Osaka",
                            description: "Japan's food capital with vibrant nightlife and culture",
                            experiences: [
                                "Food tour of local specialties",
                                "Dotonbori district exploration",
                                "Osaka Castle visit",
                                "Local LGBTQ+ friendly venues",
                            ],
                        },
                    ],
                },
                {
                    id: "custom-vip",
                    title: "Custom VIP Journey",
                    description: "A fully customized itinerary tailored to your specific interests and desires.",
                    image: "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1200",
                    price: "Inquire",
                    duration: "Flexible",
                    fullDescription: "Create your perfect Japan experience with our fully customized VIP journey. Whether you're seeking adventure, romance, culture, or relaxation, we'll design an itinerary that perfectly matches your dreams. Every detail is tailored to you.",
                    schedule: [
                        { time: "Flexible", activity: "Tailored to your preferences" },
                    ],
                    locations: [
                        {
                            name: "Custom Destinations",
                            description: "Destinations selected based on your interests and preferences",
                            experiences: [
                                "Fully personalized itinerary",
                                "Private guide throughout",
                                "Exclusive experiences",
                                "24/7 concierge support",
                            ],
                        },
                        {
                            name: "Luxury Accommodations",
                            description: "Premium hotels and traditional ryokans selected for you",
                            experiences: [
                                "Luxury hotel stays",
                                "Traditional ryokan experiences",
                                "Personalized service",
                            ],
                        },
                    ],
                },
            ],
            cta: "View Details & Book",
        },
        wedding: {
            subtitle: "Eternal Moments",
            title: "Celebrate Your Love in Japan",
            description: "Beyond legal boundaries, make your commitment official in your hearts. We offer traditional Japanese wedding ceremonies and photo shoots in partnership with Hiramatsu.",
            cta: "Plan Your Ceremony",
            image: "/photo/wedding/IMG_3069.JPG",
        },
        blog: {
            subtitle: "Journal",
            title: "Stories & Updates",
            items: [
                {
                    id: 1,
                    title: "Top 5 LGBTQ+ Bars in Shinjuku Nichome",
                    date: "2023-10-15",
                    image: "/photo/t-a/IMG_9560.JPG", // Placeholder
                },
                {
                    id: 2,
                    title: "Our Wedding Experience in Kyoto",
                    date: "2023-09-20",
                    image: "/photo/wedding/IMG_3117.JPG",
                },
                {
                    id: 3,
                    title: "Interview with Taka & Ady",
                    date: "2023-08-10",
                    image: "/photo/t-a/IMG_0326.JPG",
                },
            ],
        },
        footer: {
            cta: {
                heading: "Ready to Start Your Journey?",
                subheading: "A safe and unforgettable experience awaits you in Japan.",
                button: "Contact Us",
            },
            contact: {
                title: "Contact",
                email: "info@japanpridejourneys.com",
                instagram: "@japanpridejourneys",
            },
            support: {
                title: "Support",
                faq: "FAQ",
                privacy: "Privacy Policy",
                terms: "Terms of Use",
            },
            credit: "Operated by Japan Pride Journeys Team",
        },
    },
    jp: {
        nav: {
            home: "ホーム",
            tours: "ツアー",
            about: "私たちについて",
            wedding: "ウェディング",
            blog: "ブログ",
            contact: "お問い合わせ",
        },
        hero: {
            headline: "Discover the Hidden Japan with Pride.",
            subhead: "LGBTQ+コミュニティのための、安心で心に残る日本への旅。",
            cta: "ツアーを探す",
        },
        intro: {
            title: "ナビゲーター紹介",
            message: "単なる観光地としてではなく、あなたがあなたらしくいられる場所として、日本を楽しんでほしい。私たちが、日本の隠れた魅力と温かいコミュニティへご案内します。",
            names: "Taka & Ady",
            role: "共同創業者 & アンバサダー",
            instagram: "旅の様子を見る",
        },
        features: {
            subtitle: "選ばれる理由",
            title: "Japan Pride Journeysが選ばれる理由",
            items: [
                {
                    title: "LGBTQ+当事者・アライのガイド",
                    description: "ガイドは全員コミュニティの一員または理解者。安心して旅を楽しめます。",
                    icon: Shield,
                },
                {
                    title: "プロフェッショナル撮影",
                    description: "旅の思い出を美しく残す、プロカメラマンによる撮影サービス。",
                    icon: Camera,
                },
                {
                    title: "ワンストップ・ウェディング",
                    description: "ひらまつとの提携による、本格的な挙式とフォトウェディング。",
                    icon: Heart,
                },
                {
                    title: "ローカルコミュニティへのアクセス",
                    description: "観光客だけでは入りにくい、現地のバーやイベントへご案内します。",
                    icon: MapPin,
                },
            ],
        },
        tours: {
            subtitle: "特別な体験",
            title: "厳選されたツアー",
            items: [
                {
                    id: "tokyo-deep-dive",
                    title: "東京ディープダイブ",
                    description: "新宿二丁目のナイトライフと、東京の文化を深く体験する旅。",
                    image: "/photo/t-a/IMG_1368.JPG",
                    price: "$300〜",
                    duration: "1日",
                    fullDescription: "東京で最も活気あるLGBTQ+エリア、新宿二丁目を深く体験。本格的な日本のナイトライフ、文化的な名所を訪れ、地元コミュニティとつながります。当事者ガイドが安心と歓迎を保証します。",
                    schedule: [
                        { time: "18:00", activity: "新宿駅集合" },
                        { time: "18:30", activity: "文化遺産訪問" },
                        { time: "20:00", activity: "地元レストランで夕食" },
                        { time: "21:30", activity: "新宿二丁目バーホッピング" },
                        { time: "23:00", activity: "コミュニティミートアップ" },
                    ],
                    locations: [
                        {
                            name: "新宿二丁目",
                            description: "300以上のバーとクラブがある東京で最も活気あるLGBTQ+エリア",
                            experiences: [
                                "おすすめLGBTQ+バー・クラブのガイドツアー",
                                "LGBTQ+コミュニティミートアップ",
                                "選択会場でのウェルカムドリンク",
                            ],
                        },
                        {
                            name: "歴史的文化遺産",
                            description: "東京の象徴的なランドマークと文化的遺産",
                            experiences: [
                                "ガイド付き文化遺産訪問",
                                "プロフェッショナル撮影セッション（オプション）",
                            ],
                        },
                        {
                            name: "地元レストラン",
                            description: "本格的な日本の食事体験",
                            experiences: [
                                "伝統的および現代的な日本料理",
                                "地元の食事文化への没入",
                            ],
                        },
                    ],
                },
                {
                    id: "kyoto-tradition",
                    title: "京都の伝統とプライド",
                    description: "京都の寺院を巡り、伝統的な和装でのウェディングフォトを。",
                    image: "/photo/t-a/IMG_6592.JPG",
                    price: "$500〜",
                    duration: "2日間",
                    fullDescription: "伝統とロマンスに焦点を当てた京都の旅。美しい寺院を訪れ、伝統的な儀式に参加し、本格的な日本の設定でプロフェッショナルなウェディングフォトセッションで愛の物語を記録します。",
                    schedule: [
                        { time: "1日目 09:00", activity: "寺院ツアー（伏見稲荷、清水寺）" },
                        { time: "1日目 14:00", activity: "伝統的な昼食と茶道" },
                        { time: "1日目 16:00", activity: "ウェディングフォトセッション" },
                        { time: "1日目 18:00", activity: "旅館チェックイン" },
                        { time: "2日目 10:00", activity: "嵐山竹林散策" },
                        { time: "2日目 14:00", activity: "出発" },
                    ],
                    locations: [
                        {
                            name: "伏見稲荷大社・清水寺",
                            description: "美しい建築と精神的な意義を持つ京都で最も象徴的な寺院",
                            experiences: [
                                "LGBTQ+フレンドリーガイドによるプライベート寺院ツアー",
                                "伝統的な建築と歴史の探索",
                                "精神的・文化的な没入",
                            ],
                        },
                        {
                            name: "伝統的な旅館",
                            description: "伝統的なおもてなしを体験できる本格的な日本の宿",
                            experiences: [
                                "伝統的な旅館での宿泊（1泊）",
                                "伝統的な日本料理（懐石）",
                                "温泉体験（利用可能な場合）",
                            ],
                        },
                        {
                            name: "ウェディングフォトセッション",
                            description: "本格的な日本の設定でのプロフェッショナル撮影",
                            experiences: [
                                "伝統的な日本のウェディングフォトセッション",
                                "着物レンタルとスタイリング",
                                "プロフェッショナル撮影サービス",
                            ],
                        },
                        {
                            name: "嵐山竹林",
                            description: "京都で最も美しい自然のランドマークの一つ",
                            experiences: [
                                "竹林散策",
                                "自然写真撮影",
                                "静かな瞑想体験",
                            ],
                        },
                    ],
                },
                {
                    id: "japan-golden-route",
                    title: "日本ゴールデンルート",
                    description: "東京・京都・大阪を巡る、LGBTQ+フレンドリーなスポット満載の旅。",
                    image: "https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=1200",
                    price: "$2500〜",
                    duration: "7日間",
                    fullDescription: "日本の最も象徴的な都市を巡る包括的な旅。LGBTQ+フレンドリーな目的地、文化的体験、本格的な地元とのつながりを強調するよう慎重に選ばれました。LGBTQ+コミュニティのための究極の日本体験です。",
                    schedule: [
                        { time: "1-2日目", activity: "東京探索と新宿二丁目" },
                        { time: "3日目", activity: "新幹線で京都へ移動" },
                        { time: "4-5日目", activity: "京都の寺院と伝統体験" },
                        { time: "6日目", activity: "大阪の食と文化ツアー" },
                        { time: "7日目", activity: "出発" },
                    ],
                    locations: [
                        {
                            name: "東京",
                            description: "豊かな文化とLGBTQ+コミュニティがある日本の活気ある首都",
                            experiences: [
                                "新宿二丁目のバー・クラブツアー",
                                "歴史的文化遺産訪問",
                                "現代的な東京探索",
                                "LGBTQ+コミュニティミートアップ",
                            ],
                        },
                        {
                            name: "京都",
                            description: "美しい寺院と伝統文化がある古都",
                            experiences: [
                                "寺院ツアー（伏見稲荷、清水寺など）",
                                "伝統的な茶道",
                                "伝統的な旅館での宿泊",
                                "嵐山竹林",
                            ],
                        },
                        {
                            name: "大阪",
                            description: "活気あるナイトライフと文化がある日本の食の都",
                            experiences: [
                                "地元特産品のフードツアー",
                                "道頓堀エリア探索",
                                "大阪城訪問",
                                "地元のLGBTQ+フレンドリーな会場",
                            ],
                        },
                    ],
                },
                {
                    id: "custom-vip",
                    title: "カスタムVIPジャーニー",
                    description: "あなたのご希望に合わせて作る、完全オーダーメイドの旅。",
                    image: "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1200",
                    price: "要相談",
                    duration: "柔軟に対応",
                    fullDescription: "完全にカスタマイズされたVIPジャーニーで、完璧な日本体験を作り上げましょう。冒険、ロマンス、文化、リラクゼーションを求めている場合でも、あなたの夢に完璧に合う旅程をデザインします。すべての詳細があなたに合わせて調整されます。",
                    schedule: [
                        { time: "柔軟", activity: "ご希望に合わせて調整" },
                    ],
                    locations: [
                        {
                            name: "カスタム目的地",
                            description: "あなたの興味と好みに基づいて選択された目的地",
                            experiences: [
                                "完全にパーソナライズされた旅程",
                                "プライベートガイド",
                                "独占的な体験",
                                "24時間コンシェルジュサポート",
                            ],
                        },
                        {
                            name: "高級宿泊施設",
                            description: "あなたのために選ばれたプレミアムホテルと伝統的な旅館",
                            experiences: [
                                "高級ホテルでの宿泊",
                                "伝統的な旅館体験",
                                "パーソナライズされたサービス",
                            ],
                        },
                    ],
                },
            ],
            cta: "詳細を見る・予約",
        },
        wedding: {
            subtitle: "永遠の瞬間",
            title: "日本で愛を誓う",
            description: "法的な枠組みを超えて、二人の絆を形に。ひらまつと提携し、伝統的な挙式やフォトウェディングをプロデュースします。",
            cta: "セレモニーを計画する",
            image: "/photo/wedding/IMG_3069.JPG",
        },
        blog: {
            subtitle: "旅の記録",
            title: "ストーリー & アップデート",
            items: [
                {
                    id: 1,
                    title: "新宿二丁目のおすすめバー5選",
                    date: "2023-10-15",
                    image: "/photo/t-a/IMG_9560.JPG",
                },
                {
                    id: 2,
                    title: "京都でのウェディング体験記",
                    date: "2023-09-20",
                    image: "/photo/wedding/IMG_3117.JPG",
                },
                {
                    id: 3,
                    title: "Taka & Ady インタビュー",
                    date: "2023-08-10",
                    image: "/photo/t-a/IMG_0326.JPG",
                },
            ],
        },
        footer: {
            cta: {
                heading: "あなたの人生を変える旅を始めませんか？",
                subheading: "心と体の調和を求める特別な体験が、あなたを待っています。",
                button: "お問い合わせ",
            },
            contact: {
                title: "お問い合わせ",
                email: "info@japanpridejourneys.com",
                instagram: "@japanpridejourneys",
            },
            support: {
                title: "サポート",
                faq: "よくある質問",
                privacy: "プライバシーポリシー",
                terms: "利用規約",
            },
            credit: "Operated by Japan Pride Journeys Team",
        },
    },
};
