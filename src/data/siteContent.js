export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Stories', href: '#stories' },
  { label: 'Traditions', href: '#traditions' },
  { label: 'Footprints', href: '#footprints' },
  { label: 'Events', href: '#events' },
  { label: 'Research', href: '#research' },
];

export const heroSlides = [
  {
    image: 'nusantara-australia-hero',
    srcSet: '/images/nusantara-australia-hero-compact.webp 560w, /images/nusantara-australia-hero-small.webp 960w, /images/nusantara-australia-hero.webp 1600w',
    width: 1600,
    height: 900,
    caption: 'Nusantara and Australia',
    alt: 'A painted seascape framed by textiles and coastal vegetation',
  },
  {
    image: 'nusantara-pinisi',
    srcSet: '/images/nusantara-pinisi-small.webp 640w, /images/nusantara-pinisi.webp 1280w',
    width: 1280,
    height: 853,
    caption: 'Pinisi off South Sulawesi',
    alt: 'A wooden schooner with cream sails on indigo water off a forested coast',
  },
  {
    image: 'nusantara-batik',
    srcSet: '/images/nusantara-batik-small.webp 640w, /images/nusantara-batik.webp 1280w',
    width: 1280,
    height: 853,
    caption: 'Making batik in Java',
    alt: 'A batik maker draws wax patterns on cotton with a spouted canting tool',
  },
  {
    image: 'nusantara-bali-terraces',
    srcSet: '/images/nusantara-bali-terraces-small.webp 640w, /images/nusantara-bali-terraces.webp 1280w',
    width: 1280,
    height: 853,
    caption: 'Bali’s rice terraces',
    alt: 'Green terraced rice paddies and an irrigation channel below a volcanic ridge',
  },
];

export const stories = [
  {
    title: 'Mangrove and Food Chain',
    description: 'How mangroves sustain coastal foodways, medicine and craft.',
    href: 'https://ausnusantarahc.org.au/mangrove-and-food-chain/',
    tag: 'Ecology',
    image: '/images/pohon-mangrove.webp',
    width: 900,
    height: 506,
    alt: 'Mangrove trees on the bank of an Indonesian river with boats moored across the water',
    credit: {
      label: 'Photograph by Suryanto81',
      href: 'https://commons.wikimedia.org/wiki/File:Pohon_mangrove.jpg',
    },
  },
  {
    title: 'Batik: Symbolisms and Meanings',
    description: 'How the patterns on batik cloth express identity and mark life’s transitions.',
    href: 'https://ausnusantarahc.org.au/batik-symbolism-and-meanings/',
    tag: 'Art',
    image: '/images/pekalongan-kain-lepas.webp',
    width: 599,
    height: 366,
    alt: 'Ochre Javanese sarong with animals and a geometric border',
    credit: {
      label: 'Pekalongan sarong · The Met',
      href: 'https://www.metmuseum.org/art/collection/search/308005',
    },
  },
  {
    title: 'Who is the Peranakan?',
    description: 'How migration and cultural exchange shape Peranakan foodways, dress and identity.',
    href: 'https://ausnusantarahc.org.au/peranakan/',
    tag: 'Identity',
    image: '/images/peranakan-jacket.webp',
    width: 900,
    height: 544,
    alt: 'Red Peranakan silk jacket with embroidered gold and blue flowers',
    credit: {
      label: 'Peranakan jacket · Photograph by Haa900',
      href: 'https://commons.wikimedia.org/wiki/File:Peranakan_woman%27s_jacket,_1900,_Honolulu_Museum_of_Art.JPG',
    },
  },
];

export const timeline = [
  {
    year: '18th century',
    title: 'Makassan trade with Yolngu communities',
    detail: 'Makassan fishers from what is now Indonesia visited northern Australia to gather trepang from at least the 18th century. Their encounters with Yolngu communities in Arnhem Land included trade and cultural exchange.',
    source: 'https://www.nma.gov.au/exhibitions/yalangbara/yolngu',
    sourceLabel: 'Read at the National Museum of Australia',
  },
  {
    year: 'From 1826',
    title: 'Cocos (Keeling) Islands',
    detail: 'Settlement began in 1826. The Cocos Malay community traces its ancestry to people brought to the islands from parts of Asia and East Africa during the 19th century.',
    source: 'https://www.infrastructure.gov.au/territories-regions/territories/indian-ocean-territories-christmas-island-and-cocos-keeling-islands/cocos-keeling-islands/cocos-keeling-islands-environment-and-heritage',
    sourceLabel: 'Read the islands’ heritage overview',
  },
  {
    year: 'Early 1870s',
    title: 'Pearl divers in Western Australia',
    detail: 'Pearlers recruited indentured divers from islands to Australia’s north. Colonial records often grouped workers of diverse origins under the term “Malay”. Their labour followed years of exploitation of Aboriginal divers.',
    source: 'https://museum.wa.gov.au/whats-on/naked-diving-early-days-pearling-wa',
    sourceLabel: 'Read at the Western Australian Museum',
  },
  {
    year: '1970s',
    title: 'Cocos Malay settlement in Katanning',
    detail: 'Families moved from the Cocos (Keeling) Islands to Katanning in Western Australia, where many worked at the local abattoir and helped shape the town’s community life.',
    source: 'https://www.katanning.wa.gov.au/the-story-of-katanning.aspx',
    sourceLabel: 'Read the Shire of Katanning’s account',
  },
];

export const livingTradition = {
  title: 'Lebaran and the return home',
  description: 'Lebaran is a name for Eid al-Fitr in Indonesia. Across Nusantara communities, people mark the occasion in different ways, including visiting relatives, sharing food and asking forgiveness. Families in Australia carry on and adapt these traditions.',
  source: 'https://itjen.kemendikdasmen.go.id/web/?p=6629',
  practices: [
    { label: 'Forgiveness', text: 'One greeting, mohon maaf lahir dan batin, asks forgiveness for outward and inward wrongs.' },
    { label: 'Homecoming', text: 'Mudik or pulang kampung is the journey back to one’s hometown to see family.' },
    { label: 'Foodways', text: 'Families may share ketupat, opor ayam, rendang or sweets, depending on local traditions.' },
    { label: 'Dress', text: 'Batik, kebaya, sarung and Baju Melayu are among the garments worn for gatherings.' },
  ],
};

export const events = [
  {
    title: 'Batik Workshop: Rites De Passage',
    status: 'Past event',
    date: '27–28 July 2024 · Dandenong, VIC',
    description: 'An introductory batik workshop with Fathiah Raihan, alongside an exhibition about how batik marks stages of life.',
    href: 'https://ausnusantarahc.org.au/batik-workshop-rites-de-passage/',
    linkText: 'View the event archive',
  },
  {
    title: 'Story Circle and Heritage Mapping',
    status: 'Program idea',
    date: 'Proposed program',
    description: 'A community session for recording memories, recipes, objects and places that carry family history.',
    href: '#contact',
    linkText: 'Contact the Centre',
  },
  {
    title: 'Research Salon',
    status: 'Program idea',
    date: 'Proposed program',
    description: 'A public conversation bringing together researchers, artists, educators and community historians.',
    href: '#research',
    linkText: 'Explore the research',
  },
];

export const research = [
  {
    title: 'A new species of Freycinetia from Halmahera, Indonesia',
    field: 'Botany',
    href: 'https://ausnusantarahc.org.au/wp-content/uploads/2023/03/Freycinetia-halmaherensis.pdf',
  },
  {
    title: 'Natural vegetation and ethnobotany of Bali',
    field: 'Ethnobotany',
    href: 'https://ausnusantarahc.org.au/wp-content/uploads/2023/03/Bali-Ethnobotany.pdf',
  },
  {
    title: 'The diversity of plant species used in traditional herbal massage oil in Indonesia',
    field: 'Plant knowledge',
    href: 'https://ausnusantarahc.org.au/wp-content/uploads/2023/03/Diversity-of-Plant-Species-Herbal-Massage.pdf',
  },
];
