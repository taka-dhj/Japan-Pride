import { Camera, Heart, Shield, MapPin } from "lucide-react";

export const content = {
    en: {
        nav: {
            home: "Home",
            about: "About Us",
            tours: "Tours",
            guides: "Guides",
            photo: "Photo",
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
            pillarsLabel: "Our 4 Pillars",
            items: [
                {
                    category: "Guide",
                    title: "LGBTQ+ Native Guides",
                    description: "Our guides are part of the community or strong allies, ensuring a safe and welcoming environment.",
                    icon: Shield,
                },
                {
                    category: "Photography",
                    title: "Professional Photography",
                    description: "Capture your memories with our professional photography service included in select tours.",
                    icon: Camera,
                },
                {
                    category: "Wedding",
                    title: "One-Stop Wedding",
                    description: "Celebrate your love with a traditional or modern ceremony, fully arranged by us.",
                    icon: Heart,
                },
                {
                    category: "Tour",
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
                {
                    id: "kyoto-cultural-immersion",
                    title: "Kyoto Cultural Immersion",
                    description: "A deep dive into Kyoto's traditional culture, from ancient temples to modern LGBTQ+ friendly experiences.",
                    image: "/photo/wedding/IMG_3117.JPG",
                    duration: "4 Days",
                    fullDescription: "Immerse yourself in the heart of traditional Japan with this comprehensive Kyoto tour. Explore hidden temples, participate in authentic cultural experiences, and discover LGBTQ+ friendly venues in this ancient capital. Perfect for those seeking a deeper understanding of Japanese culture while feeling safe and welcomed.",
                    schedule: [
                        { time: "Day 1 - 09:00", activity: "Arrival and traditional ryokan check-in" },
                        { time: "Day 1 - 14:00", activity: "Fushimi Inari Shrine exploration" },
                        { time: "Day 1 - 18:00", activity: "Traditional kaiseki dinner" },
                        { time: "Day 2 - 09:00", activity: "Kiyomizu-dera and Gion district tour" },
                        { time: "Day 2 - 14:00", activity: "Tea ceremony and kimono experience" },
                        { time: "Day 2 - 19:00", activity: "LGBTQ+ friendly local bar visit" },
                        { time: "Day 3 - 09:00", activity: "Arashiyama bamboo forest and monkey park" },
                        { time: "Day 3 - 14:00", activity: "Traditional craft workshop" },
                        { time: "Day 4 - 10:00", activity: "Departure" },
                    ],
                    locations: [
                        {
                            name: "Historic Temples & Shrines",
                            description: "Kyoto's most sacred and beautiful religious sites",
                            experiences: [
                                "Private tours of Fushimi Inari, Kiyomizu-dera, and more",
                                "Spiritual and cultural insights from LGBTQ+ friendly guides",
                                "Photography sessions at iconic locations",
                            ],
                        },
                        {
                            name: "Traditional Experiences",
                            description: "Authentic Japanese cultural activities",
                            experiences: [
                                "Tea ceremony with LGBTQ+ friendly instructors",
                                "Kimono rental and styling",
                                "Traditional craft workshops (pottery, calligraphy)",
                            ],
                        },
                        {
                            name: "Gion & Local Culture",
                            description: "Kyoto's famous geisha district and local LGBTQ+ community",
                            experiences: [
                                "Gion district walking tour",
                                "LGBTQ+ friendly local venues",
                                "Traditional and modern dining experiences",
                            ],
                        },
                    ],
                },
                {
                    id: "tokyo-modern-traditional",
                    title: "Tokyo Modern & Traditional",
                    description: "Experience the perfect blend of Tokyo's cutting-edge modernity and deep-rooted traditions.",
                    image: "/photo/t-a/IMG_9560.JPG",
                    duration: "5 Days",
                    fullDescription: "Discover Tokyo's dual nature: ultra-modern districts alongside centuries-old traditions. From the neon-lit streets of Shibuya to serene temples, from LGBTQ+ friendly neighborhoods to traditional markets, this tour offers a complete Tokyo experience designed for the LGBTQ+ community.",
                    schedule: [
                        { time: "Day 1 - 10:00", activity: "Arrival and Shibuya exploration" },
                        { time: "Day 1 - 18:00", activity: "Shinjuku Nichome nightlife tour" },
                        { time: "Day 2 - 09:00", activity: "Asakusa and Senso-ji Temple" },
                        { time: "Day 2 - 14:00", activity: "Traditional lunch and shopping" },
                        { time: "Day 2 - 19:00", activity: "LGBTQ+ community event" },
                        { time: "Day 3 - 10:00", activity: "Harajuku and Omotesando" },
                        { time: "Day 3 - 15:00", activity: "Meiji Shrine visit" },
                        { time: "Day 4 - 09:00", activity: "Tsukiji Outer Market food tour" },
                        { time: "Day 4 - 14:00", activity: "Ginza luxury district" },
                        { time: "Day 5 - 10:00", activity: "Departure" },
                    ],
                    locations: [
                        {
                            name: "Modern Tokyo",
                            description: "Tokyo's cutting-edge districts and LGBTQ+ friendly areas",
                            experiences: [
                                "Shinjuku Nichome bar and club tours",
                                "Shibuya and Harajuku exploration",
                                "LGBTQ+ community meetups and events",
                            ],
                        },
                        {
                            name: "Traditional Tokyo",
                            description: "Historic temples, shrines, and traditional neighborhoods",
                            experiences: [
                                "Asakusa and Senso-ji Temple tours",
                                "Meiji Shrine visits",
                                "Traditional markets and shopping",
                            ],
                        },
                        {
                            name: "Culinary Experiences",
                            description: "From street food to fine dining",
                            experiences: [
                                "Tsukiji Outer Market food tour",
                                "Traditional and modern Japanese cuisine",
                                "LGBTQ+ friendly restaurant recommendations",
                            ],
                        },
                    ],
                },
                {
                    id: "japan-grand-tour",
                    title: "Japan Grand Tour",
                    description: "A comprehensive journey across Japan, from Hokkaido to Okinawa, exploring LGBTQ+ friendly destinations nationwide.",
                    image: "/photo/t-a/IMG_6210.JPG",
                    duration: "14 Days",
                    fullDescription: "Experience the full diversity of Japan in this extensive tour covering major regions from north to south. Visit LGBTQ+ friendly destinations, experience regional cultures, and connect with local communities across the country. This is the ultimate Japan experience for those who want to see it all.",
                    schedule: [
                        { time: "Day 1-3", activity: "Tokyo exploration and LGBTQ+ community" },
                        { time: "Day 4", activity: "Travel to Hakone and Mount Fuji area" },
                        { time: "Day 5-7", activity: "Kyoto temples and traditional culture" },
                        { time: "Day 8", activity: "Nara day trip" },
                        { time: "Day 9-10", activity: "Osaka food and culture" },
                        { time: "Day 11", activity: "Hiroshima and Miyajima" },
                        { time: "Day 12", activity: "Travel to Fukuoka" },
                        { time: "Day 13", activity: "Okinawa or return to Tokyo" },
                        { time: "Day 14", activity: "Departure" },
                    ],
                    locations: [
                        {
                            name: "Tokyo & Surrounding Areas",
                            description: "Japan's capital and nearby destinations",
                            experiences: [
                                "Shinjuku Nichome LGBTQ+ district",
                                "Hakone hot springs and Mount Fuji views",
                                "Modern and traditional Tokyo experiences",
                            ],
                        },
                        {
                            name: "Kansai Region",
                            description: "Kyoto, Osaka, and Nara cultural hub",
                            experiences: [
                                "Kyoto temple tours and traditional experiences",
                                "Osaka food culture and nightlife",
                                "Nara's ancient temples and deer park",
                            ],
                        },
                        {
                            name: "Western Japan",
                            description: "Hiroshima, Miyajima, and Fukuoka",
                            experiences: [
                                "Hiroshima Peace Memorial Park",
                                "Miyajima's floating torii gate",
                                "Fukuoka's LGBTQ+ friendly venues",
                            ],
                        },
                    ],
                },
                {
                    id: "pride-festivals-events",
                    title: "Pride Festivals & Events Tour",
                    description: "Join Japan's vibrant LGBTQ+ community at Pride festivals, events, and celebrations across the country.",
                    image: "/photo/t-a/IMG_3705.JPG",
                    duration: "Flexible",
                    fullDescription: "Experience Japan's LGBTQ+ community at its most vibrant! This tour is designed around major Pride festivals and LGBTQ+ events throughout Japan. Connect with the local community, celebrate diversity, and experience the warmth and acceptance of Japan's LGBTQ+ scene.",
                    schedule: [
                        { time: "Flexible", activity: "Itinerary customized based on event dates" },
                        { time: "Typical", activity: "Tokyo Rainbow Pride (April-May)" },
                        { time: "Typical", activity: "Kansai Rainbow Parade (October)" },
                        { time: "Typical", activity: "Various local LGBTQ+ events year-round" },
                    ],
                    locations: [
                        {
                            name: "Tokyo Pride Events",
                            description: "Japan's largest LGBTQ+ celebrations in the capital",
                            experiences: [
                                "Tokyo Rainbow Pride parade and festival",
                                "Shinjuku Nichome Pride events",
                                "LGBTQ+ community gatherings and parties",
                            ],
                        },
                        {
                            name: "Regional Pride Events",
                            description: "Pride celebrations across Japan",
                            experiences: [
                                "Kansai Rainbow Parade in Osaka/Kyoto",
                                "Local Pride events in various cities",
                                "LGBTQ+ film festivals and cultural events",
                            ],
                        },
                        {
                            name: "Community Connections",
                            description: "Authentic connections with Japan's LGBTQ+ community",
                            experiences: [
                                "Meet local LGBTQ+ community members",
                                "Visit LGBTQ+ friendly venues and spaces",
                                "Participate in community activities",
                            ],
                        },
                    ],
                },
                {
                    id: "okinawa-paradise",
                    title: "Okinawa Paradise Tour",
                    description: "Discover the tropical paradise of Okinawa with LGBTQ+ friendly experiences, beautiful beaches, and unique Ryukyuan culture.",
                    image: "/photo/t-a/IMG_1814.JPG",
                    duration: "5 Days",
                    fullDescription: "Escape to Japan's tropical paradise! Okinawa offers stunning beaches, unique Ryukyuan culture, and a relaxed, welcoming atmosphere. This tour combines natural beauty, cultural experiences, and LGBTQ+ friendly activities in Japan's southernmost prefecture.",
                    schedule: [
                        { time: "Day 1 - 12:00", activity: "Arrival in Naha and hotel check-in" },
                        { time: "Day 1 - 18:00", activity: "Kokusai Street and local dining" },
                        { time: "Day 2 - 09:00", activity: "Shuri Castle and Ryukyuan culture tour" },
                        { time: "Day 2 - 14:00", activity: "Beach time and water activities" },
                        { time: "Day 3 - 10:00", activity: "Day trip to nearby islands" },
                        { time: "Day 3 - 18:00", activity: "LGBTQ+ friendly local venues" },
                        { time: "Day 4 - 09:00", activity: "Okinawa Churaumi Aquarium" },
                        { time: "Day 4 - 15:00", activity: "Traditional Ryukyuan cuisine experience" },
                        { time: "Day 5 - 10:00", activity: "Departure" },
                    ],
                    locations: [
                        {
                            name: "Naha & Cultural Sites",
                            description: "Okinawa's capital and historic Ryukyuan sites",
                            experiences: [
                                "Shuri Castle and Ryukyuan history",
                                "Traditional Ryukyuan cultural experiences",
                                "Kokusai Street shopping and dining",
                            ],
                        },
                        {
                            name: "Beautiful Beaches",
                            description: "Okinawa's stunning tropical beaches",
                            experiences: [
                                "Beach activities and water sports",
                                "Snorkeling and diving (optional)",
                                "Relaxation and sunset viewing",
                            ],
                        },
                        {
                            name: "Island Experiences",
                            description: "Nearby islands and unique Okinawan culture",
                            experiences: [
                                "Day trips to nearby islands",
                                "Okinawa Churaumi Aquarium",
                                "Traditional Ryukyuan cuisine",
                            ],
                        },
                    ],
                },
                {
                    id: "hokkaido-nature-culture",
                    title: "Hokkaido Nature & Culture Tour",
                    description: "Explore Hokkaido's stunning nature, unique culture, and LGBTQ+ friendly destinations in Japan's northernmost island.",
                    image: "/photo/t-a/IMG_1895.JPG",
                    duration: "6 Days",
                    fullDescription: "Discover Hokkaido's natural beauty, from hot springs to national parks, combined with unique local culture and LGBTQ+ friendly experiences. Perfect for nature lovers and those seeking a different side of Japan.",
                    schedule: [
                        { time: "Day 1 - 12:00", activity: "Arrival in Sapporo" },
                        { time: "Day 1 - 18:00", activity: "Sapporo city tour and dining" },
                        { time: "Day 2 - 09:00", activity: "Otaru day trip" },
                        { time: "Day 2 - 18:00", activity: "LGBTQ+ friendly local venues" },
                        { time: "Day 3 - 08:00", activity: "Travel to Noboribetsu" },
                        { time: "Day 3 - 14:00", activity: "Hot springs and nature exploration" },
                        { time: "Day 4 - 09:00", activity: "Shikotsu-Toya National Park" },
                        { time: "Day 5 - 10:00", activity: "Furano and Biei (seasonal)" },
                        { time: "Day 6 - 10:00", activity: "Departure from Sapporo" },
                    ],
                    locations: [
                        {
                            name: "Sapporo & Otaru",
                            description: "Hokkaido's main cities with unique culture",
                            experiences: [
                                "Sapporo city exploration",
                                "Otaru canal and historic district",
                                "Hokkaido's unique food culture",
                            ],
                        },
                        {
                            name: "Hot Springs & Nature",
                            description: "Hokkaido's famous hot springs and natural beauty",
                            experiences: [
                                "Noboribetsu hot springs",
                                "Shikotsu-Toya National Park",
                                "Nature photography and hiking",
                            ],
                        },
                        {
                            name: "Seasonal Experiences",
                            description: "Hokkaido's unique seasonal attractions",
                            experiences: [
                                "Furano lavender fields (summer)",
                                "Ski resorts (winter)",
                                "Local festivals and events",
                            ],
                        },
                    ],
                },
            ],
            cta: "View Details & Book",
        },
        team: {
            guides: {
                subtitle: "Our Guides",
                title: "Meet Your Guides",
                members: [
                    {
                        name: "Ady",
                        role: "Lead Guide",
                        image: "/photo/t-a/IMG_0326.JPG",
                        bio: "Born and raised in the Philippines, Ady has called Japan home for over 10 years. His warm personality and deep knowledge of Japanese culture make every tour memorable.",
                        tags: ["Friendly", "Cultural Expert", "Multilingual"],
                    },
                    {
                        name: "Taka",
                        role: "Co-Founder & Guide",
                        image: "/photo/t-a/IMG_1365.JPG",
                        bio: "A Tokyo native with a passion for connecting people. Taka's insider knowledge of Japan's LGBTQ+ scene ensures authentic and safe experiences.",
                        tags: ["Local Expert", "Community Connector", "Adventurous"],
                    },
                    {
                        name: "Sho",
                        role: "Osaka Guide",
                        image: "/photo/t-a/IMG_6210.JPG",
                        bio: "Sho brings the vibrant energy of Osaka to every tour. His humor and hospitality reflect the welcoming spirit of Japan's kitchen.",
                        tags: ["Energetic", "Foodie", "Fun-loving"],
                    },
                ],
            },
            photographers: {
                subtitle: "Our Photographers",
                title: "Capture Your Memories",
                members: [
                    {
                        name: "Steve",
                        role: "Lead Photographer",
                        image: "https://images.pexels.com/photos/4987584/pexels-photo-4987584.jpeg?auto=compress&cs=tinysrgb&w=800",
                        bio: "With over 15 years of experience, Steve specializes in candid moments that tell your unique story. His eye for detail captures the essence of your journey.",
                        tags: ["Portrait Specialist", "Storyteller", "Patient"],
                    },
                    {
                        name: "Hiromi",
                        role: "Wedding Photographer",
                        image: "https://images.pexels.com/photos/34992257/pexels-photo-34992257.jpeg?auto=compress&cs=tinysrgb&w=800",
                        bio: "Hiromi's artistic vision transforms wedding moments into timeless art. She brings a gentle, intuitive approach to every ceremony.",
                        tags: ["Artistic", "Romantic", "Detail-oriented"],
                    },
                    {
                        name: "Takeshi",
                        role: "Travel Photographer",
                        image: "https://images.pexels.com/photos/3062547/pexels-photo-3062547.jpeg?auto=compress&cs=tinysrgb&w=800",
                        bio: "Takeshi's dynamic style captures the excitement of travel. From street scenes to landscapes, he finds beauty in every corner of Japan.",
                        tags: ["Dynamic", "Creative", "Adventurous"],
                    },
                ],
            },
        },
        wedding: {
            subtitle: "Eternal Moments",
            title: "Celebrate Your Love in Japan",
            description: "Beyond legal boundaries, make your commitment official in your hearts. We offer traditional Japanese wedding ceremonies and photo shoots in partnership with Hiramatsu.",
            cta: "Plan Your Ceremony",
            image: "/photo/wedding/IMG_3164.JPG",
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
            about: "私たちについて",
            tours: "ツアー",
            guides: "ガイド",
            photo: "フォト",
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
            pillarsLabel: "4つの柱",
            items: [
                {
                    category: "ガイド",
                    title: "LGBTQ+当事者・アライのガイド",
                    description: "ガイドは全員コミュニティの一員または理解者。安心して旅を楽しめます。",
                    icon: Shield,
                },
                {
                    category: "撮影",
                    title: "プロフェッショナル撮影",
                    description: "旅の思い出を美しく残す、プロカメラマンによる撮影サービス。",
                    icon: Camera,
                },
                {
                    category: "ウェディング",
                    title: "ワンストップ・ウェディング",
                    description: "ひらまつとの提携による、本格的な挙式とフォトウェディング。",
                    icon: Heart,
                },
                {
                    category: "ツアー",
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
                {
                    id: "kyoto-cultural-immersion",
                    title: "京都文化没入ツアー",
                    description: "古い寺院から現代のLGBTQ+フレンドリーな体験まで、京都の伝統文化を深く体験する旅。",
                    image: "/photo/wedding/IMG_3117.JPG",
                    duration: "4日間",
                    fullDescription: "この包括的な京都ツアーで、伝統的な日本の中心に没入してください。隠れた寺院を探索し、本格的な文化的体験に参加し、この古都でLGBTQ+フレンドリーな会場を発見します。安全で歓迎されていると感じながら、日本文化へのより深い理解を求める方に最適です。",
                    schedule: [
                        { time: "1日目 09:00", activity: "到着と伝統的な旅館チェックイン" },
                        { time: "1日目 14:00", activity: "伏見稲荷大社探索" },
                        { time: "1日目 18:00", activity: "伝統的な懐石料理" },
                        { time: "2日目 09:00", activity: "清水寺と祇園エリアツアー" },
                        { time: "2日目 14:00", activity: "茶道と着物体験" },
                        { time: "2日目 19:00", activity: "LGBTQ+フレンドリーな地元バー訪問" },
                        { time: "3日目 09:00", activity: "嵐山竹林とモンキーパーク" },
                        { time: "3日目 14:00", activity: "伝統工芸ワークショップ" },
                        { time: "4日目 10:00", activity: "出発" },
                    ],
                    locations: [
                        {
                            name: "歴史的な寺院と神社",
                            description: "京都で最も神聖で美しい宗教施設",
                            experiences: [
                                "伏見稲荷、清水寺などのプライベートツアー",
                                "LGBTQ+フレンドリーガイドからの精神的・文化的洞察",
                                "象徴的な場所での写真撮影セッション",
                            ],
                        },
                        {
                            name: "伝統的な体験",
                            description: "本格的な日本の文化的活動",
                            experiences: [
                                "LGBTQ+フレンドリーな講師による茶道",
                                "着物レンタルとスタイリング",
                                "伝統工芸ワークショップ（陶芸、書道）",
                            ],
                        },
                        {
                            name: "祇園と地元文化",
                            description: "京都の有名な花街と地元のLGBTQ+コミュニティ",
                            experiences: [
                                "祇園エリア散策ツアー",
                                "LGBTQ+フレンドリーな地元会場",
                                "伝統的および現代的な食事体験",
                            ],
                        },
                    ],
                },
                {
                    id: "tokyo-modern-traditional",
                    title: "東京モダン＆トラディショナル",
                    description: "最先端のモダンさと深い伝統が融合する東京の完璧なバランスを体験。",
                    image: "/photo/t-a/IMG_9560.JPG",
                    duration: "5日間",
                    fullDescription: "東京の二面性を発見：超モダンな地区と数世紀にわたる伝統。ネオンに照らされた渋谷の街から静かな寺院まで、LGBTQ+フレンドリーな地区から伝統的な市場まで、このツアーはLGBTQ+コミュニティのために設計された完全な東京体験を提供します。",
                    schedule: [
                        { time: "1日目 10:00", activity: "到着と渋谷探索" },
                        { time: "1日目 18:00", activity: "新宿二丁目ナイトライフツアー" },
                        { time: "2日目 09:00", activity: "浅草と浅草寺" },
                        { time: "2日目 14:00", activity: "伝統的な昼食とショッピング" },
                        { time: "2日目 19:00", activity: "LGBTQ+コミュニティイベント" },
                        { time: "3日目 10:00", activity: "原宿と表参道" },
                        { time: "3日目 15:00", activity: "明治神宮訪問" },
                        { time: "4日目 09:00", activity: "築地場外市場フードツアー" },
                        { time: "4日目 14:00", activity: "銀座高級地区" },
                        { time: "5日目 10:00", activity: "出発" },
                    ],
                    locations: [
                        {
                            name: "モダン東京",
                            description: "東京の最先端地区とLGBTQ+フレンドリーなエリア",
                            experiences: [
                                "新宿二丁目バー・クラブツアー",
                                "渋谷と原宿探索",
                                "LGBTQ+コミュニティミートアップとイベント",
                            ],
                        },
                        {
                            name: "伝統的な東京",
                            description: "歴史的な寺院、神社、伝統的な地区",
                            experiences: [
                                "浅草と浅草寺ツアー",
                                "明治神宮訪問",
                                "伝統的な市場とショッピング",
                            ],
                        },
                        {
                            name: "グルメ体験",
                            description: "ストリートフードから高級料理まで",
                            experiences: [
                                "築地場外市場フードツアー",
                                "伝統的および現代的な日本料理",
                                "LGBTQ+フレンドリーなレストラン推奨",
                            ],
                        },
                    ],
                },
                {
                    id: "japan-grand-tour",
                    title: "日本グランドツアー",
                    description: "北海道から沖縄まで、全国のLGBTQ+フレンドリーな目的地を探索する包括的な旅。",
                    image: "/photo/t-a/IMG_6210.JPG",
                    duration: "14日間",
                    fullDescription: "この広範囲なツアーで、北から南まで日本の多様性を体験してください。LGBTQ+フレンドリーな目的地を訪れ、地域文化を体験し、全国の地元コミュニティとつながります。すべてを見たい方のための究極の日本体験です。",
                    schedule: [
                        { time: "1-3日目", activity: "東京探索とLGBTQ+コミュニティ" },
                        { time: "4日目", activity: "箱根と富士山エリアへの移動" },
                        { time: "5-7日目", activity: "京都の寺院と伝統文化" },
                        { time: "8日目", activity: "奈良日帰り旅行" },
                        { time: "9-10日目", activity: "大阪の食と文化" },
                        { time: "11日目", activity: "広島と宮島" },
                        { time: "12日目", activity: "福岡への移動" },
                        { time: "13日目", activity: "沖縄または東京への帰還" },
                        { time: "14日目", activity: "出発" },
                    ],
                    locations: [
                        {
                            name: "東京と周辺地域",
                            description: "日本の首都と近隣の目的地",
                            experiences: [
                                "新宿二丁目LGBTQ+地区",
                                "箱根温泉と富士山の景色",
                                "モダンおよび伝統的な東京体験",
                            ],
                        },
                        {
                            name: "関西地域",
                            description: "京都、大阪、奈良の文化ハブ",
                            experiences: [
                                "京都寺院ツアーと伝統体験",
                                "大阪の食文化とナイトライフ",
                                "奈良の古代寺院と鹿公園",
                            ],
                        },
                        {
                            name: "西日本",
                            description: "広島、宮島、福岡",
                            experiences: [
                                "広島平和記念公園",
                                "宮島の浮かぶ鳥居",
                                "福岡のLGBTQ+フレンドリーな会場",
                            ],
                        },
                    ],
                },
                {
                    id: "pride-festivals-events",
                    title: "プライドフェスティバル＆イベントツアー",
                    description: "全国のプライドフェスティバル、イベント、お祝いに参加して、日本で活気あるLGBTQ+コミュニティに参加。",
                    image: "/photo/t-a/IMG_3705.JPG",
                    duration: "柔軟に対応",
                    fullDescription: "日本で最も活気あるLGBTQ+コミュニティを体験してください！このツアーは、日本全国の主要なプライドフェスティバルとLGBTQ+イベントを中心に設計されています。地元コミュニティとつながり、多様性を祝い、日本のLGBTQ+シーンの温かさと受容を体験してください。",
                    schedule: [
                        { time: "柔軟", activity: "イベント日程に基づいてカスタマイズされた旅程" },
                        { time: "典型的", activity: "東京レインボープライド（4-5月）" },
                        { time: "典型的", activity: "関西レインボーパレード（10月）" },
                        { time: "典型的", activity: "年間を通じた様々な地元LGBTQ+イベント" },
                    ],
                    locations: [
                        {
                            name: "東京プライドイベント",
                            description: "首都での日本最大のLGBTQ+お祝い",
                            experiences: [
                                "東京レインボープライドパレードとフェスティバル",
                                "新宿二丁目プライドイベント",
                                "LGBTQ+コミュニティ集会とパーティー",
                            ],
                        },
                        {
                            name: "地域プライドイベント",
                            description: "日本全国のプライドお祝い",
                            experiences: [
                                "大阪/京都の関西レインボーパレード",
                                "様々な都市での地元プライドイベント",
                                "LGBTQ+映画祭と文化イベント",
                            ],
                        },
                        {
                            name: "コミュニティとのつながり",
                            description: "日本のLGBTQ+コミュニティとの本格的なつながり",
                            experiences: [
                                "地元LGBTQ+コミュニティメンバーとの出会い",
                                "LGBTQ+フレンドリーな会場とスペースの訪問",
                                "コミュニティ活動への参加",
                            ],
                        },
                    ],
                },
                {
                    id: "okinawa-paradise",
                    title: "沖縄パラダイスツアー",
                    description: "LGBTQ+フレンドリーな体験、美しいビーチ、ユニークな琉球文化で沖縄の熱帯の楽園を発見。",
                    image: "/photo/t-a/IMG_1814.JPG",
                    duration: "5日間",
                    fullDescription: "日本の熱帯の楽園へ！沖縄は美しいビーチ、ユニークな琉球文化、リラックスした歓迎の雰囲気を提供します。このツアーは、日本最南端の県で自然の美しさ、文化的体験、LGBTQ+フレンドリーな活動を組み合わせます。",
                    schedule: [
                        { time: "1日目 12:00", activity: "那覇到着とホテルチェックイン" },
                        { time: "1日目 18:00", activity: "国際通りと地元の食事" },
                        { time: "2日目 09:00", activity: "首里城と琉球文化ツアー" },
                        { time: "2日目 14:00", activity: "ビーチタイムとウォーターアクティビティ" },
                        { time: "3日目 10:00", activity: "近隣の島への日帰り旅行" },
                        { time: "3日目 18:00", activity: "LGBTQ+フレンドリーな地元会場" },
                        { time: "4日目 09:00", activity: "沖縄美ら海水族館" },
                        { time: "4日目 15:00", activity: "伝統的な琉球料理体験" },
                        { time: "5日目 10:00", activity: "出発" },
                    ],
                    locations: [
                        {
                            name: "那覇と文化遺産",
                            description: "沖縄の首都と歴史的な琉球遺跡",
                            experiences: [
                                "首里城と琉球の歴史",
                                "伝統的な琉球文化体験",
                                "国際通りショッピングと食事",
                            ],
                        },
                        {
                            name: "美しいビーチ",
                            description: "沖縄の素晴らしい熱帯のビーチ",
                            experiences: [
                                "ビーチアクティビティとウォータースポーツ",
                                "シュノーケリングとダイビング（オプション）",
                                "リラクゼーションと夕日の鑑賞",
                            ],
                        },
                        {
                            name: "島の体験",
                            description: "近隣の島とユニークな沖縄文化",
                            experiences: [
                                "近隣の島への日帰り旅行",
                                "沖縄美ら海水族館",
                                "伝統的な琉球料理",
                            ],
                        },
                    ],
                },
                {
                    id: "hokkaido-nature-culture",
                    title: "北海道自然＆文化ツアー",
                    description: "日本最北の島、北海道の素晴らしい自然、ユニークな文化、LGBTQ+フレンドリーな目的地を探索。",
                    image: "/photo/t-a/IMG_1895.JPG",
                    duration: "6日間",
                    fullDescription: "温泉から国立公園まで、北海道の自然の美しさを発見し、ユニークな地元文化とLGBTQ+フレンドリーな体験を組み合わせます。自然愛好家や日本の異なる側面を求める方に最適です。",
                    schedule: [
                        { time: "1日目 12:00", activity: "札幌到着" },
                        { time: "1日目 18:00", activity: "札幌市内ツアーと食事" },
                        { time: "2日目 09:00", activity: "小樽日帰り旅行" },
                        { time: "2日目 18:00", activity: "LGBTQ+フレンドリーな地元会場" },
                        { time: "3日目 08:00", activity: "登別への移動" },
                        { time: "3日目 14:00", activity: "温泉と自然探索" },
                        { time: "4日目 09:00", activity: "支笏洞爺国立公園" },
                        { time: "5日目 10:00", activity: "富良野と美瑛（季節による）" },
                        { time: "6日目 10:00", activity: "札幌から出発" },
                    ],
                    locations: [
                        {
                            name: "札幌と小樽",
                            description: "ユニークな文化を持つ北海道の主要都市",
                            experiences: [
                                "札幌市内探索",
                                "小樽運河と歴史地区",
                                "北海道のユニークな食文化",
                            ],
                        },
                        {
                            name: "温泉と自然",
                            description: "北海道の有名な温泉と自然の美しさ",
                            experiences: [
                                "登別温泉",
                                "支笏洞爺国立公園",
                                "自然写真とハイキング",
                            ],
                        },
                        {
                            name: "季節の体験",
                            description: "北海道のユニークな季節の魅力",
                            experiences: [
                                "富良野ラベンダー畑（夏）",
                                "スキーリゾート（冬）",
                                "地元の祭りとイベント",
                            ],
                        },
                    ],
                },
            ],
            cta: "詳細を見る・予約",
        },
        team: {
            guides: {
                subtitle: "ガイド紹介",
                title: "あなたの旅をサポートするガイド",
                members: [
                    {
                        name: "Ady",
                        role: "リードガイド",
                        image: "/photo/t-a/IMG_0326.JPG",
                        bio: "フィリピン出身、日本在住10年以上。温かい人柄と日本文化への深い理解で、忘れられない旅をお届けします。",
                        tags: ["フレンドリー", "文化エキスパート", "多言語対応"],
                    },
                    {
                        name: "Taka",
                        role: "共同創業者 & ガイド",
                        image: "/photo/t-a/IMG_1365.JPG",
                        bio: "東京生まれ。人と人を繋ぐことに情熱を注ぐ。日本のLGBTQ+シーンに精通し、本物で安全な体験を提供します。",
                        tags: ["ローカルエキスパート", "コミュニティ通", "冒険好き"],
                    },
                    {
                        name: "Sho",
                        role: "大阪ガイド",
                        image: "/photo/t-a/IMG_6210.JPG",
                        bio: "大阪の活気をツアーにお届け。ユーモアとおもてなしの心で、日本の台所の温かさを体現します。",
                        tags: ["エネルギッシュ", "グルメ通", "陽気"],
                    },
                ],
            },
            photographers: {
                subtitle: "フォトグラファー紹介",
                title: "思い出を写真に残す",
                members: [
                    {
                        name: "Steve",
                        role: "リードフォトグラファー",
                        image: "https://images.pexels.com/photos/4987584/pexels-photo-4987584.jpeg?auto=compress&cs=tinysrgb&w=800",
                        bio: "15年以上の経験を持ち、あなただけのストーリーを語る自然な瞬間を専門としています。細部へのこだわりで旅の本質を捉えます。",
                        tags: ["ポートレート専門", "ストーリーテラー", "忍耐強い"],
                    },
                    {
                        name: "Hiromi",
                        role: "ウェディングフォトグラファー",
                        image: "https://images.pexels.com/photos/34992257/pexels-photo-34992257.jpeg?auto=compress&cs=tinysrgb&w=800",
                        bio: "芸術的なビジョンでウェディングの瞬間を永遠のアートに。優しく直感的なアプローチで全てのセレモニーに臨みます。",
                        tags: ["アーティスティック", "ロマンチック", "細部にこだわる"],
                    },
                    {
                        name: "Takeshi",
                        role: "トラベルフォトグラファー",
                        image: "https://images.pexels.com/photos/3062547/pexels-photo-3062547.jpeg?auto=compress&cs=tinysrgb&w=800",
                        bio: "ダイナミックなスタイルで旅の興奮を捉えます。ストリートシーンから風景まで、日本のあらゆる場所に美を見出します。",
                        tags: ["ダイナミック", "クリエイティブ", "冒険好き"],
                    },
                ],
            },
        },
        wedding: {
            subtitle: "永遠の瞬間",
            title: "日本で愛を誓う",
            description: "法的な枠組みを超えて、二人の絆を形に。ひらまつと提携し、伝統的な挙式やフォトウェディングをプロデュースします。",
            cta: "セレモニーを計画する",
            image: "/photo/wedding/IMG_3164.JPG",
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
