// Default itinerary data — Japan trip 29 Aug – 08 Sep 2026 (group of 5)
// Budget-conscious: everything reachable on foot / metro / train.

let _id = 0;
const uid = () => 'x' + (++_id).toString(36) + Date.now().toString(36).slice(-3);

// helper to build items / suggestions with ids
const it = (text, time, cost) => ({ id: uid(), text, time: time || '', cost: cost || '' });
const sg = (name, desc, cost, transit) => ({ id: uid(), name, desc, cost, transit });

const STAY_SHINJUKU = {
  name: 'Shinjuku Stay',
  address: '3-chome-14-2 Kamiochiai, Shinjuku City, Tokyo 161-0034',
  code: 'HM2SBCKWZB',
  checkin: 'Aug 29',
  checkout: 'Sep 01',
};
const STAY_KYOTO = {
  name: 'Kyoto Stay',
  address: 'Higashikujo Minamiishidacho, Minami Ward 59-23, Kyoto 601-8033',
  code: 'HMQSY5PW9A',
  checkin: 'Sep 01',
  checkout: 'Sep 05',
};
const STAY_TAITO = {
  name: 'Asakusa / Ueno Stay',
  address: '2-chome-18-7 Kojima, Taito City, Tokyo 111-0056',
  code: 'HMCS93FNHB',
  checkin: 'Sep 05',
  checkout: 'Sep 08',
};

export const DEFAULT_DAYS = [
  {
    id: 'd1', date: 'Aug 29', dow: 'Sat', city: 'Tokyo', area: 'Shinjuku',
    title: 'Arrival — Settle into Shinjuku',
    stay: { ...STAY_SHINJUKU },
    items: [
      it('Land, ride Narita/Haneda express + metro to Shinjuku', 'PM', ''),
      it('Check in, drop bags, konbini dinner run', '17:00', '¥1,000'),
    ],
    suggestions: [
      sg('Tokyo Metropolitan Gov. Observatory', 'Free 202m city view — Fuji on clear evenings.', 'Free', 'Walk'),
      sg('Omoide Yokocho & Golden Gai', 'Lantern-lit alleys, cheap yakitori & tiny bars.', '¥1,500', 'Walk'),
      sg('Shinjuku Gyoen', 'Calm landscaped garden to reset after the flight.', '¥500', 'Walk'),
    ],
  },
  {
    id: 'd2', date: 'Aug 30', dow: 'Sun', city: 'Tokyo', area: 'Harajuku · Shibuya',
    title: 'Harajuku, Meiji Shrine & Shibuya',
    stay: null,
    items: [],
    suggestions: [
      sg('Meiji Jingu', 'Forest shrine — one of Tokyo\u2019s most serene spots.', 'Free', 'Metro'),
      sg('Takeshita Street', 'Harajuku pop culture, crepes & cheap fashion.', 'Free', 'Walk'),
      sg('Shibuya Crossing + Hachiko', 'The famous scramble; free Shibuya Sky view from streets.', 'Free', 'Metro'),
    ],
  },
  {
    id: 'd3', date: 'Aug 31', dow: 'Mon', city: 'Tokyo', area: 'Asakusa · Ueno',
    title: 'Old Tokyo — Asakusa & Ueno',
    stay: null,
    items: [],
    suggestions: [
      sg('Senso-ji & Nakamise', 'Tokyo\u2019s oldest temple + snack-lined approach.', 'Free', 'Metro'),
      sg('Ueno Park', 'Museums, ponds, shrines — great free wander.', 'Free', 'Walk'),
      sg('Ameyoko Market', 'Buzzy street market, cheap eats & souvenirs.', '¥1,500', 'Walk'),
    ],
  },
  {
    id: 'd4', date: 'Sep 01', dow: 'Tue', city: 'Kyoto', area: 'Travel day',
    title: 'Shinkansen to Kyoto',
    stay: { ...STAY_KYOTO },
    items: [
      it('Check out Shinjuku · train to Tokyo/Shinagawa Stn', 'AM', ''),
      it('Shinkansen Tokyo → Kyoto (~2h20)', '11:00', '¥13,320'),
      it('Check in, explore neighbourhood', '15:00', ''),
    ],
    suggestions: [
      sg('Fushimi Inari Taisha', 'Thousands of vermilion torii — magical near dusk, free.', 'Free', 'JR Train'),
      sg('Kyoto Station Sky Garden', 'Free rooftop views over the city.', 'Free', 'Walk'),
    ],
  },
  {
    id: 'd5', date: 'Sep 02', dow: 'Wed', city: 'Kyoto', area: 'Higashiyama',
    title: 'Higashiyama — Kiyomizu & Gion',
    stay: null,
    items: [],
    suggestions: [
      sg('Kiyomizu-dera', 'Hillside temple with wooden stage & city views.', '¥500', 'Bus/Walk'),
      sg('Sannenzaka & Ninenzaka', 'Preserved sloping lanes — teahouses & crafts.', 'Free', 'Walk'),
      sg('Gion at dusk', 'Old geisha quarter, Yasaka Shrine (free) nearby.', 'Free', 'Walk'),
    ],
  },
  {
    id: 'd6', date: 'Sep 03', dow: 'Thu', city: 'Nara', area: 'Day trip',
    title: 'Day Trip to Nara',
    stay: null,
    items: [],
    suggestions: [
      sg('Nara Park deer', 'Free-roaming bowing deer everywhere.', 'Free', 'JR/Kintetsu'),
      sg('Todai-ji Great Buddha', 'Vast wooden hall, giant bronze Buddha.', '¥800', 'Walk'),
      sg('Kasuga Taisha', 'Lantern-lined forest shrine.', 'Free', 'Walk'),
    ],
  },
  {
    id: 'd7', date: 'Sep 04', dow: 'Fri', city: 'Kyoto', area: 'Arashiyama',
    title: 'Arashiyama & Golden Pavilion',
    stay: null,
    items: [],
    suggestions: [
      sg('Arashiyama Bamboo Grove', 'Towering green corridor — go early, free.', 'Free', 'JR Train'),
      sg('Tenryu-ji Garden', 'Zen garden with mountain backdrop.', '¥500', 'Walk'),
      sg('Kinkaku-ji (Golden Pavilion)', 'Gold-leaf temple mirrored in its pond.', '¥500', 'Bus'),
    ],
  },
  {
    id: 'd8', date: 'Sep 05', dow: 'Sat', city: 'Tokyo', area: 'Travel day',
    title: 'Back to Tokyo — Asakusa base',
    stay: { ...STAY_TAITO },
    items: [
      it('Check out Kyoto · Shinkansen → Tokyo', 'AM', '¥13,320'),
      it('Check in near Ueno, settle', '15:00', ''),
    ],
    suggestions: [
      sg('Kappabashi Kitchen Street', 'Knives, ceramics & food-replica shops.', 'Free', 'Walk'),
      sg('Sumida Riverwalk & Skytree base', 'Evening riverside stroll, Skytree lit up.', 'Free', 'Walk'),
    ],
  },
  {
    id: 'd9', date: 'Sep 06', dow: 'Sun', city: 'Tokyo', area: 'Akihabara · Ginza',
    title: 'Akihabara & Imperial East Gardens',
    stay: null,
    items: [],
    suggestions: [
      sg('Akihabara', 'Electric Town — retro games, anime, arcades.', 'Free', 'Metro'),
      sg('Imperial Palace East Gardens', 'Former castle grounds — free & green.', 'Free', 'Walk'),
      sg('Ginza stroll', 'Elegant streets; car-free on Sunday afternoons.', 'Free', 'Walk'),
    ],
  },
  {
    id: 'd10', date: 'Sep 07', dow: 'Mon', city: 'Tokyo', area: 'Choose your day',
    title: 'Odaiba, Yanaka or teamLab',
    stay: null,
    items: [],
    suggestions: [
      sg('Yanaka Old Town', 'Low-key temples, cats & retro shopping street — free.', 'Free', 'Metro'),
      sg('Odaiba seaside', 'Bayfront, Rainbow Bridge & free Gundam statue.', 'Free', 'Yurikamome'),
      sg('teamLab Planets (optional)', 'Immersive digital art — book ahead if splurging.', '¥3,800', 'Metro'),
    ],
  },
  {
    id: 'd11', date: 'Sep 08', dow: 'Tue', city: 'Tokyo', area: 'Departure',
    title: 'Departure',
    stay: null,
    items: [
      it('Check out · last-minute Ueno / station shopping', 'AM', ''),
      it('Airport transfer', 'PM', '¥1,300'),
    ],
    suggestions: [],
  },
];
