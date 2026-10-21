export const IMG = (id: string, ext = 'jpg') =>
  ext ? `https://www.casadelipe.com/images/${id}.${ext}` : `https://www.casadelipe.com/images/${id}`

export const site = {
  name: 'Casa De Lipe',
  tagline: 'Pool Villa · Resort Residence · Koh Lipe',
  phone: '(+66) 63-649-5942',
  phoneHref: 'tel:+66636495942',
  email: 'casadelipe@gmail.com',
  emailHref: 'mailto:casadelipe@gmail.com',
  address: '88 M.8 Koh Lipe, T. Koh Sarai, Mueang Satun, Satun, 91000 Thailand',
  maps: 'https://maps.google.com/?q=Casa+De+Lipe+Koh+Lipe',
  social: {
    facebook: 'https://www.facebook.com/casadelipe/',
    instagram: 'https://www.instagram.com/casadelipe/',
    line: 'https://line.me/R/ti/p/@123lfhjq',
  },
  logo: IMG('2348', 'png'),
  hero: IMG('2350'),
  story: IMG('2597x800x600'),
  staff: IMG('2472'),
}

export type Villa = {
  slug: string
  name: string
  size: string
  type: string
  guests: string
  bed: string
  image: string
  gallery: string[]
  summary: string
  description: string
  amenities: string[]
  features: string[]
}

export const villas: Villa[] = [
  {
    slug: 'oceanfront-pool-villa',
    name: 'Oceanfront Pool Villa',
    size: '42 sqm',
    type: 'Pool Villa',
    guests: '2 Persons',
    bed: 'King Bed',
    image: IMG('2356x380x400', ''),
    gallery: [IMG('2356x380x400', ''), IMG('2475'), IMG('2476'), IMG('2477')],
    summary:
      'Situated on the private corner of Casa De Lipe, these villas promise the most secluded corner of the property.',
    description:
      'Watch a mesmerising sunset from the private balcony as you immerse yourself in the villa’s plunge pool. Spend a romantic evening in the private indoor dining area where our butler and chef tailor a memorable experience, with Adang Island unfolding across the horizon.',
    amenities: ['42 SQ.M.', '2 Persons', 'Private Pool', 'Balcony', 'Sea View', 'King Bed'],
    features: [
      'Smart TV',
      'Mini Bar',
      'Hair Dryer',
      'WiFi Internet Access',
      'Individually Controlled A/C',
    ],
  },
  {
    slug: 'deluxe-ocean-pool-villa',
    name: 'Deluxe Ocean Pool Villa',
    size: '44 sqm',
    type: 'Pool Villa',
    guests: '2 Persons',
    bed: 'King Bed',
    image: IMG('2375x380x400', ''),
    gallery: [IMG('2375x380x400', ''), IMG('2478'), IMG('2479'), IMG('2480')],
    summary:
      'Located near the resort swimming pool, where everyone can unwind in peaceful time.',
    description:
      'These villas offer a fantastic view across Adang Island. Enjoy the vista from your private balcony as you soak in the pool. Well-appointed sliding doors let you enjoy the view from your bed. These spacious rooms are perfect for two adults.',
    amenities: ['44 sq.m.', '2 Persons', 'Private Pool', 'Balcony', 'Sea View', 'King Bed'],
    features: [
      'Smart TV',
      'Mini Bar',
      'Hair Dryer',
      'WiFi Internet Access',
      'Individually Controlled A/C',
    ],
  },
  {
    slug: 'superior-ocean-pool-villa',
    name: 'Superior Ocean Pool Villa',
    size: '42 sqm',
    type: 'Pool Villa',
    guests: '2 Persons',
    bed: 'King or Twin',
    image: IMG('2388x380x400', ''),
    gallery: [IMG('2388x380x400', ''), IMG('2481'), IMG('2482'), IMG('2483')],
    summary:
      'Vistas of a private pool from a spacious balcony, framed by tropical lush and the ocean from the hill.',
    description:
      'Superior Ocean Pool Villas offer vistas of the private pool from a spacious private balcony surrounded with tropical lush, as well as the view of the ocean from the top of the hill. A calm, elevated retreat after a day on the Andaman.',
    amenities: [
      '42 sq.m.',
      '2 Persons',
      'Private Pool',
      'Balcony',
      'Sea View',
      'One King Bed or Twin Beds',
    ],
    features: [
      'Smart TV',
      'Mini Bar',
      'Hair Dryer',
      'WiFi Internet Access',
      'Individually Controlled A/C',
    ],
  },
  {
    slug: 'deluxe-family-ocean-pool-villa',
    name: 'Deluxe Family Ocean Pool Villa',
    size: '50 sqm',
    type: 'Family Villa',
    guests: '4 Persons',
    bed: 'Two King Beds',
    image: IMG('2405x380x400', ''),
    gallery: [IMG('2405x380x400', ''), IMG('2484'), IMG('2485'), IMG('2486')],
    summary:
      'Unhindered views of verdant landscape and shoreline from a private terrace and pool.',
    description:
      'Admire an unhindered view from the verdant landscape and shoreline, where the scene is one of absolute tranquillity, from your private terrace where you submerse into your private pool. Spacious enough for families who want privacy without leaving the water.',
    amenities: [
      '50 sq.m.',
      '4 Persons',
      'Private Pool',
      'Balcony',
      'Sea View',
      'Two King Beds',
    ],
    features: [
      'Smart TV',
      'Mini Bar',
      'Hair Dryer',
      'WiFi Internet Access',
      'Individually Controlled A/C',
    ],
  },
  {
    slug: 'superior-family-ocean-pool-villa',
    name: 'Superior Family Ocean Pool Villa',
    size: '50 sqm',
    type: 'Family Villa',
    guests: '4 Persons',
    bed: 'Two King Beds',
    image: IMG('2414x380x400', ''),
    gallery: [IMG('2414x380x400', ''), IMG('2487'), IMG('2488'), IMG('2489')],
    summary:
      'A tranquil family villa with a private terrace pool looking out to landscape and sea.',
    description:
      'Admire an unhindered view from the verdant landscape and shoreline, where the scene is one of absolute tranquillity, from your private terrace where you submerse into your private pool. Designed for families who travel together and linger longer.',
    amenities: [
      '50 sq.m.',
      '4 Persons',
      'Private Pool',
      'Balcony',
      'Sea View',
      'Two King Beds',
    ],
    features: [
      'Smart TV',
      'Mini Bar',
      'Hair Dryer',
      'WiFi Internet Access',
      'Individually Controlled A/C',
    ],
  },
]

export type Experience = {
  slug: string
  name: string
  category: 'dining' | 'wellness' | 'sea'
  kicker: string
  image: string
  summary: string
  description: string
  details?: string[]
  hours?: { label: string; time: string }[]
}

export const experiences: Experience[] = [
  {
    slug: 'the-deck',
    name: 'The Deck',
    category: 'dining',
    kicker: 'All-Day Dining Restaurant',
    image: IMG('2619x380x400', ''),
    summary:
      'All-day dining beside the resort pool, with Thai, seafood, and international favourites looking out to Adang Island.',
    description:
      'The Deck is Casa De Lipe’s all-day dining restaurant, set beside the swimming pool where guests unwind between the sea and the hill. Breakfast, lunch, and dinner are served in a relaxed tropical setting. Oceanfront Pool Villa guests may also reserve the Oceanfront Deck — a 180-degree panoramic scene overlooking Adang Island, the perfect setting for a private romantic dinner.',
    hours: [
      { label: 'Breakfast', time: '7.00 AM – 10.30 AM' },
      { label: 'Lunch', time: '11.00 AM – 2.00 PM' },
      { label: 'Dinner', time: '5.00 PM – 8.00 PM' },
    ],
    details: [
      'All-day dining by the pool',
      'Oceanfront Deck reserved for Oceanfront Pool Villa guests',
      'Romantic dinner by the beach, balcony, or deck on request',
    ],
  },
  {
    slug: 'the-red-bar',
    name: 'The Red Bar',
    category: 'dining',
    kicker: 'Sunset Drinks',
    image: IMG('2576x380x400', ''),
    summary:
      'Beachfront alfresco bar for fresh juices, classic cocktails, and snacks as the sun drops into the Andaman.',
    description:
      'Sip fresh juices and classic cocktails at this beachfront bliss of an alfresco venue. Curb the afternoon hunger with delicious snacks served right to your lounger. Relax with the sunset as a beaming backdrop, and bask in romance with a cocktail in hand while the sun dips beneath the ocean.',
    hours: [
      { label: 'Lunch', time: '11.00 AM – 2.00 PM' },
      { label: 'Dinner', time: '5.00 PM – 8.00 PM' },
    ],
  },
  {
    slug: 'kayaking',
    name: 'Kayaking',
    category: 'sea',
    kicker: '60 mins',
    image: IMG('2425x1190x600', ''),
    summary:
      'Make your own adventure. Explore the rich marine nature of Koh Lipe with our clear kayak.',
    description:
      'Make your own adventures. Explore the rich marine nature of Koh Lipe with our clear kayak. It is an amazing experience to see the corals and fishes under the ocean from the kayak, gliding above one of the most beautiful coastlines in Thailand.',
    details: ['Duration: 60 minutes', 'Clear kayak over coral gardens', 'Best enjoyed in calm morning water'],
  },
  {
    slug: 'massage',
    name: 'Massage',
    category: 'wellness',
    kicker: 'Spa Treatment',
    image: IMG('2426x1190x600', ''),
    summary:
      'Indulge in a rejuvenating spa treatment at your balcony or at our spa.',
    description:
      'Indulge in rejuvenating spa treatments at your balcony or at our spa. Traditional Thai techniques and gentle oil work restore the body after a day at sea, with treatments arranged privately for two or for a quiet hour alone.',
    details: [
      'Foot Massage · 60 mins',
      'Traditional Thai Massage · 60 mins',
      'Traditional Thai Massage Oil · 60 mins',
      'Tension Reliever · 60 mins',
    ],
  },
  {
    slug: 'island-tour-join',
    name: 'Island Tour Join Trip',
    category: 'sea',
    kicker: '5–6 hours',
    image: IMG('2423x1190x600', ''),
    summary:
      'A shared island day from our private beach, with snorkelling, a guide, and lunch on the water.',
    description:
      'Explore the islands around Koh Lipe on a shared trip departing from Casa De Lipe’s private beach. Duration is approximately 5–6 hours, depending on the tides and weather conditions.',
    details: [
      '9.30 AM depart from Casa De Lipe Private Beach',
      '3.00 PM arrive back at Casa De Lipe',
      'Includes transportation, guide, water, snorkelling equipment, life jacket, and lunch box',
      'Reservation required at least 1 day in advance',
      'Trip depends on weather conditions',
    ],
  },
  {
    slug: 'island-tour-private',
    name: 'Island Tour Private Trip',
    category: 'sea',
    kicker: '5–6 hours · Private',
    image: IMG('2419x1190x600', ''),
    summary:
      'A private island day for your party alone, departing from Casa De Lipe’s beach.',
    description:
      'The same island circuit, reserved entirely for your group. Duration is approximately 5–6 hours, depending on the tides and weather conditions — an unhurried way to see Tarutao’s waters without a shared boat.',
    details: [
      '9.30 AM depart from Casa De Lipe Private Beach',
      '3.00 PM arrive back at Casa De Lipe',
      'Includes transportation, guide, water, snorkelling equipment, life jacket, and lunch box',
      'Reservation required at least 1 day in advance',
      'Trip depends on weather conditions',
    ],
  },
  {
    slug: 'sunset-catamaran',
    name: 'Sunset Catamaran Join Trip',
    category: 'sea',
    kicker: '2 hours',
    image: IMG('2648x1190x600', ''),
    summary:
      'An exciting and relaxing evening at sea on a luxury catamaran as the Andaman turns gold.',
    description:
      'Enjoy an exciting and relaxing day out at sea on a luxury catamaran. Discover the beautiful sunset in the middle of the Andaman ocean. Duration is approximately 2 hours, depending on the tides and weather conditions.',
    details: [
      'Includes snack and transfer from the resort',
      'Reservation required at least 1 day in advance',
      'Trip depends on weather conditions',
    ],
  },
]

export type Wedding = {
  slug: string
  name: string
  image: string
  capacity: string
  summary: string
  description: string
  highlights: string[]
  ceremony: string[]
}

export const weddings: Wedding[] = [
  {
    slug: 'romantic-western-wedding',
    name: 'Romantic Western Wedding Package',
    image: IMG('2469'),
    capacity: 'Maximum of 30 guests (inclusive of service charge and applicable tax)',
    summary:
      'Say “I do” on the white sand of Koh Lipe, with a beachfront canopy, floral aisle, and a celebrant by the Andaman.',
    description:
      'Celebrate your love amidst the stunning beauty of Koh Lipe. A wedding is a sacred union where two hearts become one — a momentous occasion filled with love, traditions, and cherished memories. This package blends the serenity of Koh Lipe’s beaches with the magic of your love story.',
    highlights: [
      'Romantic bedroom setup on your wedding night',
      'Personal wedding planner',
      'Wedding celebrant for vows and rings',
      'Unity Sand Ceremony',
      'Resort wedding certificate (non-legal keepsake)',
      'Beachfront wedding ceremony',
    ],
    ceremony: [
      'Wedding canopy with floral decorations',
      'Ceremonial table with flower centrepiece',
      'Flower petals along the aisle',
      '4 flower stands, bridal bouquet, groom’s boutonniere, and 4 guest boutonnieres',
      'Bridal toast with a bottle of sparkling wine',
    ],
  },
  {
    slug: 'thai-serenity-wedding',
    name: 'Thai Serenity Wedding Experience',
    image: IMG('2470'),
    capacity: 'Maximum of 30 guests (inclusive of service charge and applicable tax)',
    summary:
      'A traditional Thai ceremony on Koh Lipe — monk blessing, Khan Mak procession, and Rod-Nam-Sang water blessing.',
    description:
      'Discover the essence of Thai wedding traditions in Koh Lipe. A traditional Thai wedding comprises two distinct but equally important parts: the legal and ceremonial aspects. While legal formalities are handled separately, the heart of the ceremony lies in the sacred union witnessed by loved ones.',
    highlights: [
      'Seating for up to 30 guests',
      'Dedicated wedding planner',
      'Romantic floral decorations in your room on the wedding night',
      'Resort exclusive wedding certificate (non-legal)',
    ],
    ceremony: [
      'Monk Blessing Ceremony',
      'Khan Mak (engagement tray) procession',
      'Rod-Nam-Sang water blessing with a conch shell',
      'Buddhist altar with amenities',
      'Elegant fabric and floral designs at the ceremony station',
      'Water blessing altar adorned with flowers',
      'Wedding garlands for the bride and groom',
      'Corsages for the groom and special guests',
    ],
  },
]

export const faqs = [
  {
    q: 'Where is Casa De Lipe?',
    a: 'Casa De Lipe sits on the sunset (west) side of Koh Lipe, Satun — often called the Maldives of Thailand — inside Tarutao National Park, Thailand’s first national marine park. The address is 88 M.8 Koh Lipe, T. Koh Sarai, Mueang Satun, Satun 91000.',
  },
  {
    q: 'How do I get to the resort?',
    a: 'Fly into Hat Yai International Airport or Trang Airport, then take the resort limousine to Pakbara Pier and the ferry to Koh Lipe. Surrounding islands such as Tarutao and Kai can be seen on the way. Our team can arrange the full transfer.',
  },
  {
    q: 'How many villas are there?',
    a: 'The property offers an exclusive 10-villa experience only — oceanfront, deluxe, superior, and family ocean pool villas, each with a private pool, balcony, and sea view.',
  },
  {
    q: 'Is there a private beach?',
    a: 'Yes. Casa De Lipe has its own private beach on the sunset side of the island. Guests can walk from villa to sand without leaving the property.',
  },
  {
    q: 'What time is breakfast, lunch, and dinner?',
    a: 'The Deck serves breakfast 7.00–10.30 AM, lunch 11.00 AM–2.00 PM, and dinner 5.00–8.00 PM. The Red Bar serves lunch and dinner in the same afternoon and evening windows.',
  },
  {
    q: 'Can you arrange island tours and kayaking?',
    a: 'Yes. Clear-kayak sessions, shared or private island tours, sunset catamaran trips, and in-villa or spa massage can be booked through the resort. Tours require reservation at least one day in advance and depend on weather and tides.',
  },
  {
    q: 'Do you host weddings?',
    a: 'Yes. We host western beachfront ceremonies and traditional Thai serenity weddings for up to 30 guests, with a planner, floral décor, and a commemorative resort certificate.',
  },
  {
    q: 'Are the villas for sale?',
    a: 'Selected residences on the sunset side of Lipe Island may be available. Please contact the team for current villa-for-sale details.',
  },
]

export type GalleryItem = { src: string; alt: string; category: string }

export const gallery: GalleryItem[] = [
  ...['2457', '2458', '2459', '2460', '2461', '2462', '2463', '2464', '2465', '2466', '2467', '2468'].map(
    (id) => ({ src: IMG(id), alt: 'The Resort', category: 'The Resort' }),
  ),
  ...['2469', '2470', '2471', '2472', '2473', '2474', '2475', '2476', '2477', '2478', '2479', '2480'].map(
    (id) => ({ src: IMG(id), alt: 'Accommodation', category: 'Accommodation' }),
  ),
  ...['2481', '2482', '2483', '2484', '2485', '2486', '2487', '2488', '2489', '2490', '2491', '2492'].map(
    (id) => ({ src: IMG(id), alt: 'Villas', category: 'Accommodation' }),
  ),
  ...['2494', '2500', '2501', '2502', '2503', '2506', '2507', '2508', '2510', '2513', '2514', '2619x380x400'].map(
    (id, i) => ({
      src: id.includes('x') ? IMG(id, '') : IMG(id),
      alt: 'Dining',
      category: i > 9 ? 'Dining' : 'Dining',
    }),
  ),
  ...['2425x1190x600', '2426x1190x600', '2423x1190x600', '2419x1190x600', '2648x1190x600', '2576x380x400'].map(
    (id) => ({ src: IMG(id, ''), alt: 'Experiences', category: 'Guest Experiences' }),
  ),
]

export const testimonials = [
  {
    quote:
      'A literal sanctuary at the edge of the Andaman. The moment you step into Casa De Lipe, the island slows down and the sunset takes over.',
    name: 'Jameson R.',
    source: 'Booking.com',
  },
  {
    quote:
      'Best sunset on Koh Lipe. We walked to the private beach every evening, then slept to the sound of the sea with Adang Island on the horizon.',
    name: 'Elena V.',
    source: 'Agoda',
  },
  {
    quote:
      'Ten villas, private pools, and service that appears exactly when you need it. We will be back next season.',
    name: 'Sarah M.',
    source: 'Direct Guest',
  },
]

export const distances = [
  { label: 'Private Beach', value: 'On the property', note: 'Sunset shore' },
  { label: 'Walking Street', value: '10 mins walk', note: 'Island centre' },
  { label: 'Sunrise Beach', value: '20 mins walk', note: 'East coast' },
  { label: 'Pakbara Pier', value: 'Ferry transfer', note: 'From Satun' },
]
