import React from 'react';
import {
  ArrowUpRight,
  BookOpenText,
  CalendarDays,
  ChevronRight,
  Compass,
  Facebook,
  HandHeart,
  Mail,
  Menu,
  Microscope,
  Play,
  Search,
  ScrollText,
  Sparkles,
  X,
} from 'lucide-react';
import {
  events,
  livingTradition,
  navItems,
  partners,
  research,
  stats,
  stories,
  timeline,
} from './data/siteContent';

function SectionIntro({ eyebrow, title, text, align = 'left' }) {
  return (
    <div className={`section-intro ${align === 'center' ? 'center' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

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
      <div className="hero-copy reveal">
        <p className="eyebrow">Cultural memory, research, and community</p>
        <h1>Nusantara heritage in Australia, alive in stories and place.</h1>
        <p className="hero-lede">
          ANHC celebrates the knowledge systems, ecological memory, art forms, and historical
          connections that link Nusantara communities with Australia.
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

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="content-grid">
        <SectionIntro
          eyebrow="About ANHC"
          title="A living centre for tangible and intangible heritage."
          text="ANHC recognises and celebrates the multicultural heritage of Nusantara people who have made Australia home, from artefacts and architecture to artistic expression, customs, language, and natural ecosystems."
        />

        <div className="about-card interactive-card">
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
  const [activeEvent, setActiveEvent] = React.useState(events[0]);

  return (
    <section className="event-section" id="events">
      <div className="event-shell">
        <div className="feature-event">
          <p className="eyebrow">Events and programs</p>
          <h2>{activeEvent.title}</h2>
          <p>{activeEvent.description}</p>
          <a className="button light" href={activeEvent.href}>
            View details
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="event-list" aria-label="Event selector">
          {events.map((event) => (
            <button
              className={event.title === activeEvent.title ? 'event-row active' : 'event-row'}
              type="button"
              key={event.title}
              onClick={() => setActiveEvent(event)}
            >
              <span>
                <CalendarDays size={18} />
                {event.status}
              </span>
              <strong>{event.title}</strong>
              <small>{event.date}</small>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stories() {
  const tags = ['All', ...new Set(stories.map((story) => story.tag))];
  const [activeTag, setActiveTag] = React.useState('All');
  const [query, setQuery] = React.useState('');
  const normalizedQuery = query.trim().toLowerCase();

  const visibleStories = stories.filter((story) => {
    const matchesTag = activeTag === 'All' || story.tag === activeTag;
    const matchesQuery =
      !normalizedQuery ||
      `${story.title} ${story.description} ${story.tag}`.toLowerCase().includes(normalizedQuery);
    return matchesTag && matchesQuery;
  });

  return (
    <section className="section stories-section" id="stories">
      <SectionIntro
        eyebrow="Stories of Nusantara"
        title="Essays that make heritage visible."
        text="Browse ecology, ritual, craft, migration, identity, and practices that continue to travel with communities."
        align="center"
      />

      <div className="story-controls">
        <label className="search-field">
          <Search size={18} />
          <input
            type="search"
            placeholder="Search stories"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <div className="tag-tabs" aria-label="Story filters">
          {tags.map((tag) => (
            <button
              className={tag === activeTag ? 'active' : ''}
              type="button"
              key={tag}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="story-grid">
        {visibleStories.map((story) => (
          <article className="story-card interactive-card" key={story.title}>
            <img src={story.image} alt="" loading="lazy" />
            <div>
              <span className="story-tag">{story.tag}</span>
              <small>{story.readTime}</small>
            </div>
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

function LivingTraditions() {
  return (
    <section className="traditions-section" id="traditions">
      <div className="traditions-shell">
        <div className="traditions-copy">
          <p className="eyebrow">{livingTradition.eyebrow}</p>
          <h2>{livingTradition.title}</h2>
          <p>{livingTradition.description}</p>
          <p>{livingTradition.context}</p>
          <a className="button primary" href={livingTradition.source}>
            Read source
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="practice-grid">
          {livingTradition.practices.map((practice) => (
            <article className="practice-card interactive-card" key={practice.label}>
              <span>{practice.label}</span>
              <p>{practice.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footprints() {
  const [activeItem, setActiveItem] = React.useState(timeline[2]);

  return (
    <section className="footprints-section" id="footprints">
      <div className="content-grid reverse">
        <SectionIntro
          eyebrow="Nusantara Footprints"
          title="Connecting the past to the present."
          text="A timeline of routes, labour, trade, memory, and settlement that has helped form Australia's diverse narrative."
        />

        <div className="timeline-panel">
          <div className="timeline-detail">
            <span>{activeItem.theme}</span>
            <h3>{activeItem.title}</h3>
            <p>{activeItem.detail}</p>
          </div>
          <div className="timeline" aria-label="Historical timeline">
            {timeline.map((item) => (
              <button
                className={item.title === activeItem.title ? 'timeline-item active' : 'timeline-item'}
                type="button"
                key={`${item.year}-${item.title}`}
                onClick={() => setActiveItem(item)}
              >
                <time>{item.year}</time>
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.text}</small>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section className="research-section" id="research">
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
            <article className="interactive-card" key={paper.title}>
              <Microscope size={18} />
              <span>{paper.title}</span>
              <small>{paper.field}</small>
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
          <span>ACNC registered charity | ABN 15 613 738 561</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="contact">
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

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Events />
        <Stories />
        <LivingTraditions />
        <Footprints />
        <Research />
        <Donate />
      </main>
      <a className="floating-action" href="#stories" aria-label="Jump to stories">
        <Sparkles size={18} />
      </a>
      <Footer />
    </>
  );
}
