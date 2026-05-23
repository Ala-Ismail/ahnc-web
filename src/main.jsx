import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  BookOpenText,
  ChevronRight,
  Compass,
  Facebook,
  HandHeart,
  Mail,
  Menu,
  Microscope,
  Play,
  ScrollText,
  X,
} from 'lucide-react';
import './styles.css';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Stories', href: '#stories' },
  { label: 'Footprints', href: '#footprints' },
  { label: 'Research', href: '#research' },
  { label: 'Events', href: '#events' },
];

const stats = [
  { value: '1500s', label: 'Bhumi Puger memory' },
  { value: '1720', label: 'Makassan contact' },
  { value: '1871', label: 'Malay pearl divers recorded' },
];

const stories = [
  {
    title: 'Mangrove and Food Chain',
    description:
      'How mangroves connect food, medicine, craft, coastal knowledge, and everyday Nusantara culture.',
    href: 'https://ausnusantarahc.org.au/mangrove-and-food-chain/',
    tag: 'Ecology',
  },
  {
    title: 'Batik: Symbolisms and Meanings',
    description:
      'A look at batik as textile, visual language, identity marker, and ceremonial storytelling.',
    href: 'https://ausnusantarahc.org.au/batik-symbolism-and-meanings/',
    tag: 'Art',
  },
  {
    title: 'Who is the Peranakan?',
    description:
      'A story of cultural fusion, migration, language, foodways, and memory across generations.',
    href: 'https://ausnusantarahc.org.au/peranakan/',
    tag: 'Identity',
  },
];

const timeline = [
  {
    year: 'circa 1500s',
    title: 'Bhumi Puger',
    text: 'Australia was known to the Majapahit world as Bhumi Puger, the big land.',
  },
  {
    year: '1609',
    title: 'Cocos (Keeling) Islands',
    text: 'A remote Australian territory with deep Malay and Nusantara connections.',
  },
  {
    year: '1720',
    title: 'Makassan Contact',
    text: 'Trepang gatherers traded and exchanged knowledge with Yolngu communities.',
  },
  {
    year: '1871',
    title: 'Pearl Divers',
    text: 'Malay and Bajau divers contributed to the growth of Western Australia pearling.',
  },
  {
    year: '1970s',
    title: 'Malays in Katanning',
    text: 'A regional story of work, halal meat, language, settlement, and multicultural life.',
  },
];

const research = [
  'A new species of Freycinetia Gaudich. from Halmahera, the Moluccas, Indonesia',
  'Natural vegetation and ethnobotany of Bali',
  'The diversity of plant species used in traditional herbal massage oil in Indonesia',
];

const partners = [
  'Cultural researchers',
  'Community historians',
  'Artists and educators',
  'Museums and heritage groups',
];

function Header() {
  const [open, setOpen] = React.useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="ANHC home">
        <span className="brand-mark">AN</span>
        <span>
          Australia Nusantara
          <strong>Heritage Centre</strong>
        </span>
      </a>

      <button
        className="nav-toggle"
        type="button"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={open ? 'site-nav open' : 'site-nav'} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a className="nav-donate" href="#donate" onClick={closeMenu}>
          <HandHeart size={17} />
          Donate
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Cultural memory, research, and community</p>
        <h1>Nusantara heritage in Australia, told with depth and care.</h1>
        <p className="hero-lede">
          ANHC celebrates the stories, knowledge systems, ecological memory, art forms, and
          historical connections that link Nusantara communities with Australia.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#stories">
            Explore stories
            <ChevronRight size={18} />
          </a>
          <a className="button ghost" href="#footprints">
            Trace footprints
            <Compass size={18} />
          </a>
        </div>
      </div>

      <div className="stat-strip" aria-label="Historical markers">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, text, align = 'left' }) {
  return (
    <div className={`section-intro ${align === 'center' ? 'center' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="content-grid">
        <SectionIntro
          eyebrow="About ANHC"
          title="A living centre for tangible and intangible heritage."
          text="ANHC recognises and celebrates the multicultural heritage of Nusantara people who have made Australia home, from artefacts and architecture to artistic expression, customs, language, and natural ecosystems."
        />

        <div className="about-card">
          <ScrollText size={26} />
          <h3>What the centre advances</h3>
          <p>
            Cultural instruction, participation in art and craft, language connection in Bahasa
            Melayu and Bahasa Indonesia, and the observance of Nusantara customs, festivals, and
            ceremonies.
          </p>
        </div>
      </div>

      <div className="values-grid">
        {partners.map((item) => (
          <div className="value-pill" key={item}>
            <span />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function Events() {
  return (
    <section className="section event-section" id="events">
      <div className="feature-event">
        <div>
          <p className="eyebrow">Featured event</p>
          <h2>Batik Workshop: Rites De Passage</h2>
          <p>
            A guided cultural workshop exploring batik as an expression of thought, symbolism, and
            the human life cycle, with food, exhibition viewing, and community learning.
          </p>
        </div>
        <a
          className="button light"
          href="https://ausnusantarahc.org.au/batik-workshop-rites-de-passage/"
        >
          View event
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}

function Stories() {
  return (
    <section className="section" id="stories">
      <SectionIntro
        eyebrow="Stories of Nusantara"
        title="Essays that make heritage visible."
        text="Stories on ecology, ritual, craft, migration, identity, and the cultural practices that continue to travel with communities."
        align="center"
      />

      <div className="story-grid">
        {stories.map((story) => (
          <article className="story-card" key={story.title}>
            <span className="story-tag">{story.tag}</span>
            <h3>{story.title}</h3>
            <p>{story.description}</p>
            <a href={story.href}>
              Read story
              <ArrowUpRight size={17} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footprints() {
  return (
    <section className="section footprints-section" id="footprints">
      <div className="content-grid reverse">
        <SectionIntro
          eyebrow="Nusantara Footprints"
          title="Connecting the past to the present."
          text="A timeline of routes, labour, trade, memory, and settlement that has helped form Australia’s diverse narrative."
        />

        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline-item" key={`${item.year}-${item.title}`}>
              <time>{item.year}</time>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section className="section research-section" id="research">
      <div className="research-shell">
        <div>
          <p className="eyebrow">Research papers</p>
          <h2>Scholarship that deepens awareness of Nusantara heritage.</h2>
          <p>
            Curated academic work helps document, interpret, and preserve knowledge across ecology,
            ethnobotany, natural history, and cultural practice.
          </p>
          <a className="button primary" href="https://ausnusantarahc.org.au/research-papers/">
            Browse research
            <BookOpenText size={18} />
          </a>
        </div>

        <div className="paper-list">
          {research.map((paper) => (
            <article key={paper}>
              <Microscope size={18} />
              <span>{paper}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Donate() {
  return (
    <section className="section donate-section" id="donate">
      <div className="donate-card">
        <div>
          <p className="eyebrow">Support us</p>
          <h2>Keep Nusantara heritage visible for future generations.</h2>
          <p>
            Donations support exhibitions, research, cultural programming, story curation, and
            community-led heritage work.
          </p>
        </div>
        <div className="donate-actions">
          <a className="button primary" href="https://ausnusantarahc.org.au/donate/">
            Donate now
            <HandHeart size={18} />
          </a>
          <span>ACNC registered charity · ABN 15 613 738 561</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">AN</span>
          <span>
            Australia Nusantara
            <strong>Heritage Centre</strong>
          </span>
        </a>
        <p>
          Honouring the cultural link between Nusantara and Australia through stories, research, and
          community celebration.
        </p>
      </div>
      <div className="footer-links">
        <a href="https://www.facebook.com/Australia-Nusantara-Heritage-Centre-103766052298902">
          <Facebook size={17} />
          Facebook
        </a>
        <a href="https://www.youtube.com/channel/UCygTP4xpifmzE3W-snF9UaA">
          <Play size={17} />
          YouTube
        </a>
        <a href="mailto:info@ausnusantarahc.org.au">
          <Mail size={17} />
          Email
        </a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Events />
        <Stories />
        <Footprints />
        <Research />
        <Donate />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
