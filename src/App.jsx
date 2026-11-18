import React from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Menu, Search, X } from 'lucide-react';
import { events, livingTradition, navItems, research, stories, timeline } from './data/siteContent.js';

const storyTags = ['All', ...new Set(stories.map((story) => story.tag))];

function Brand({ onClick }) {
  return (
    <a className="brand" href="#home" onClick={onClick}>
      <span className="brand-mark" aria-hidden="true">AN</span>
      <span>Australia Nusantara <strong>Heritage Centre</strong></span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = React.useState(false);
  const toggleRef = React.useRef(null);

  function handleEscape(event) {
    if (event.key === 'Escape' && open) {
      setOpen(false);
      toggleRef.current.focus();
    }
  }

  function followSection(event) {
    if (!open) return;

    if (toggleRef.current.getClientRects().length > 0) {
      const section = document.getElementById(event.currentTarget.hash.slice(1));
      section?.focus({ preventScroll: true });
    }
    setOpen(false);
  }

  return (
    <header
      className="site-header"
      onKeyDown={handleEscape}
      onBlur={(event) => {
        if (open && !event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="header-inner wrap">
        <Brand onClick={followSection} />
        <button
          className="nav-toggle"
          type="button"
          ref={toggleRef}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav id="primary-nav" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Primary">
          {navItems.map(({ label, href }) => (
            <a href={href} key={href} onClick={followSection}>{label}</a>
          ))}
          <a className="button button-outline" href="#donate" onClick={followSection}>Donate</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home" tabIndex={-1} aria-labelledby="hero-title">
      <div className="hero-inner wrap">
        <div className="hero-copy">
          <h1 id="hero-title">Nusantara heritage in <em>Australia.</em></h1>
          <p>Explore the stories, traditions and histories of Nusantara communities who have made Australia home.</p>
          <div className="hero-actions">
            <a className="button button-clay" href="#stories">Explore stories <ArrowRight aria-hidden="true" /></a>
            <a className="text-link" href="#footprints">Trace the footprints <ArrowDown aria-hidden="true" /></a>
          </div>
        </div>
        <figure className="hero-image">
          <img
            src="/images/nusantara-australia-hero.webp"
            srcSet="/images/nusantara-australia-hero-compact.webp 560w, /images/nusantara-australia-hero-small.webp 960w, /images/nusantara-australia-hero.webp 1600w"
            sizes="(max-width: 45rem) calc(100vw - 3.25rem), (max-width: 78rem) 50vw, 620px"
            width="1600"
            height="900"
            alt="A painted seascape framed by textiles and coastal vegetation"
            fetchPriority="high"
          />
          <figcaption>Illustration of Nusantara and Australia</figcaption>
        </figure>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section wrap section" id="about" tabIndex={-1} aria-labelledby="about-title">
      <div>
        <p className="eyebrow">About the Centre</p>
        <h2 id="about-title">Heritage we carry with us</h2>
      </div>
      <div className="about-copy">
        <p>The Australia Nusantara Heritage Centre celebrates the heritage of Nusantara communities in Australia, from artefacts and architecture to languages, customs and knowledge of the natural world.</p>
        <p>We bring people together through art and craft, Bahasa Melayu and Bahasa Indonesia, festivals and community research.</p>
      </div>
    </section>
  );
}

function Stories() {
  const [activeTag, setActiveTag] = React.useState('All');
  const [query, setQuery] = React.useState('');
  const searchRef = React.useRef(null);
  const term = query.trim().toLowerCase();
  const visibleStories = stories.filter(({ tag, title, description }) =>
    (activeTag === 'All' || tag === activeTag) &&
    `${title} ${description} ${tag}`.toLowerCase().includes(term),
  );

  function clearFilters() {
    setActiveTag('All');
    setQuery('');
    searchRef.current.focus();
  }

  return (
    <section className="stories-section section" id="stories" tabIndex={-1} aria-labelledby="stories-title">
      <div className="wrap">
        <div className="section-heading">
          <h2 id="stories-title">Stories of Nusantara</h2>
          <p>Explore the natural world, textile traditions and the identities shaped by migration.</p>
        </div>
        <div className="story-controls">
          <div className="tag-tabs" role="group" aria-label="Filter stories by topic">
            {storyTags.map((tag) => (
              <button key={tag} type="button" aria-pressed={tag === activeTag} onClick={() => setActiveTag(tag)}>{tag}</button>
            ))}
          </div>
          <label className="search-field">
            <span className="sr-only">Search stories</span>
            <Search aria-hidden="true" />
            <input ref={searchRef} type="search" placeholder="Search stories" value={query} onChange={(event) => setQuery(event.target.value)} />
          </label>
        </div>

        <p className="sr-only" role="status">
          {visibleStories.length === 0 ? 'No stories found.' : `${visibleStories.length} ${visibleStories.length === 1 ? 'story' : 'stories'} found.`}
        </p>
        {visibleStories.length > 0 ? (
          <div className="story-grid">
            {visibleStories.map((story) => (
              <article className="story-card" key={story.title}>
                <img src={story.image} width={story.width} height={story.height} alt={story.alt} loading="lazy" />
                <div className="story-copy">
                  <p className="eyebrow">{story.tag}</p>
                  <h3><a href={story.href}>{story.title} <ArrowUpRight aria-hidden="true" /></a></h3>
                  <p>{story.description}</p>
                  {story.credit && <a className="image-credit" href={story.credit.href}>{story.credit.label}</a>}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No stories match your search and topic.</p>
            <button className="button button-outline" type="button" onClick={clearFilters}>Clear filters</button>
          </div>
        )}
      </div>
    </section>
  );
}

function LivingTraditions() {
  return (
    <section className="traditions-section section" id="traditions" tabIndex={-1} aria-labelledby="traditions-title">
      <div className="wrap two-column">
        <div>
          <p className="eyebrow">Living traditions</p>
          <h2 id="traditions-title">{livingTradition.title}</h2>
          <p className="section-description">{livingTradition.description}</p>
          <a className="text-link" href={livingTradition.source}>Read about Lebaran <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <dl className="practice-grid">
          {livingTradition.practices.map(({ label, text }) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Footprints() {
  const [activeItem, setActiveItem] = React.useState(timeline[0]);

  return (
    <section className="section wrap" id="footprints" tabIndex={-1} aria-labelledby="footprints-title">
      <div className="section-heading">
        <h2 id="footprints-title">Nusantara Footprints</h2>
        <p>Follow the connections between Nusantara and Australia through trade, labour and migration.</p>
      </div>
      <div className="timeline-panel">
        <div className="timeline-options" role="group" aria-label="Timeline entries">
          {timeline.map((item) => (
            <button key={item.title} type="button" aria-pressed={item === activeItem} aria-controls="timeline-detail" onClick={() => setActiveItem(item)}>
              <span>{item.year}</span>
              <strong>{item.title}</strong>
              <ArrowRight aria-hidden="true" />
            </button>
          ))}
        </div>
        <div className="timeline-detail" id="timeline-detail">
          <div aria-live="polite" aria-atomic="true">
            <p className="eyebrow">{activeItem.year}</p>
            <h3>{activeItem.title}</h3>
            <p>{activeItem.detail}</p>
          </div>
          <a className="text-link" href={activeItem.source}>{activeItem.sourceLabel} <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
      <p className="timeline-note"><em>Bhumi Puger</em> features in the Centre’s interpretation of Australia’s place in Nusantara maritime memory. <a href="https://ausnusantarahc.org.au/footprints/">Read the Centre’s account</a>.</p>
    </section>
  );
}

function Events() {
  const [activeEvent, setActiveEvent] = React.useState(events[0]);

  return (
    <section className="events-section section" id="events" tabIndex={-1} aria-labelledby="events-title">
      <div className="wrap two-column">
        <div>
          <h2 id="events-title">Events and programs</h2>
          <div className="event-options" role="group" aria-label="Select an event or program idea">
            {events.map((event) => (
              <button key={event.title} type="button" aria-pressed={event === activeEvent} aria-controls="event-detail" onClick={() => setActiveEvent(event)}>
                <strong>{event.title}</strong>
                <span>{event.status}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="event-detail" id="event-detail">
          <div aria-live="polite" aria-atomic="true">
            <p className="eyebrow">{activeEvent.date}</p>
            <h3>{activeEvent.title}</h3>
            <p>{activeEvent.description}</p>
          </div>
          <a className="text-link" href={activeEvent.href}>{activeEvent.linkText} <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section className="wrap section two-column" id="research" tabIndex={-1} aria-labelledby="research-title">
      <div>
        <h2 id="research-title">Research papers</h2>
        <p className="section-description">Read studies on Nusantara plant life, ethnobotany and cultural practice.</p>
        <a className="text-link" href="https://ausnusantarahc.org.au/research-papers/">Browse all papers <ArrowUpRight aria-hidden="true" /></a>
      </div>
      <ul className="paper-list">
        {research.map((paper) => (
          <li key={paper.title}>
            <a href={paper.href}>
              <BookOpen aria-hidden="true" />
              <span>{paper.title}<small>{paper.field} · PDF</small></span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Donate() {
  return (
    <section className="donate-section" id="donate" tabIndex={-1} aria-labelledby="donate-title">
      <div className="wrap donate-inner">
        <div>
          <h2 id="donate-title">Support the Centre</h2>
          <p>Help bring Nusantara exhibitions, research and community programs to more people.</p>
        </div>
        <a className="button button-light" href="https://ausnusantarahc.org.au/donate/">Donate through ANHC <ArrowUpRight aria-hidden="true" /></a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="wrap footer-inner">
        <div>
          <Brand />
          <p><a href="https://abr.business.gov.au/ABN/View?abn=15613738561">Registered charity · ABN 15 613 738 561</a></p>
        </div>
        <nav className="footer-links" aria-label="Contact and social media">
          <a href="mailto:info@ausnusantarahc.org.au">Email</a>
          <a href="https://www.facebook.com/Australia-Nusantara-Heritage-Centre-103766052298902">Facebook</a>
          <a href="https://www.youtube.com/channel/UCygTP4xpifmzE3W-snF9UaA">YouTube</a>
        </nav>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Stories />
        <LivingTraditions />
        <Footprints />
        <Events />
        <Research />
        <Donate />
      </main>
      <Footer />
    </>
  );
}
