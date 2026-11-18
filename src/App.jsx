import React from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Menu, Pause, Play, Search, X } from 'lucide-react';
import { events, heroSlides, livingTradition, navItems, research, stories, timeline } from './data/siteContent.js';

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

function HeroSlideshow() {
  const [slideIndex, setSlideIndex] = React.useState(0);
  const [playing, setPlaying] = React.useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [hovered, setHovered] = React.useState(false);
  const slide = heroSlides[slideIndex];
  const rotating = playing && !hovered;

  React.useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    function pauseForReducedMotion(event) {
      if (event.matches) setPlaying(false);
    }
    preference.addEventListener('change', pauseForReducedMotion);
    return () => preference.removeEventListener('change', pauseForReducedMotion);
  }, []);

  React.useEffect(() => {
    if (!rotating) return;
    const timer = window.setInterval(() => {
      setSlideIndex((index) => (index + 1) % heroSlides.length);
    }, 7500);
    return () => window.clearInterval(timer);
  }, [rotating]);

  function moveSlide(direction) {
    setPlaying(false);
    setSlideIndex((index) => (index + direction + heroSlides.length) % heroSlides.length);
  }

  return (
    <div
      className="hero-gallery"
      role="group"
      aria-label="Nusantara illustrations"
      aria-roledescription="carousel"
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
    >
      <figure className="hero-image" aria-labelledby="hero-image-caption">
        <img
          src={`/images/${slide.image}.webp`}
          srcSet={slide.srcSet}
          sizes="(max-width: 45rem) 100vw, (max-width: 84rem) 80vw, 1040px"
          width={slide.width}
          height={slide.height}
          alt={slide.alt}
          fetchPriority={slideIndex === 0 ? 'high' : 'auto'}
        />
        <figcaption>
          <span id="hero-image-caption" aria-live={playing ? 'off' : 'polite'} aria-atomic="true">
            Illustration · {slide.caption}
            <span className="sr-only">. Slide {slideIndex + 1} of {heroSlides.length}.</span>
          </span>
          <span className="hero-gallery-controls">
            <button type="button" aria-label={playing ? 'Pause slideshow' : 'Play slideshow'} onClick={() => setPlaying(!playing)}>
              {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
            </button>
            <button type="button" aria-label="Previous illustration" onFocus={() => setPlaying(false)} onClick={() => moveSlide(-1)}>
              <ArrowLeft aria-hidden="true" />
            </button>
            <span aria-hidden="true">{slideIndex + 1} / {heroSlides.length}</span>
            <button type="button" aria-label="Next illustration" onFocus={() => setPlaying(false)} onClick={() => moveSlide(1)}>
              <ArrowRight aria-hidden="true" />
            </button>
          </span>
        </figcaption>
      </figure>
    </div>
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
            <a className="button button-light" href="#stories">Explore stories <ArrowRight aria-hidden="true" /></a>
            <a className="text-link" href="#footprints">Trace the footprints <ArrowDown aria-hidden="true" /></a>
          </div>
        </div>
        <HeroSlideshow />
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section section" id="about" tabIndex={-1} aria-labelledby="about-title">
      <div className="wrap about-inner">
        <div>
          <p className="eyebrow">About the Centre</p>
          <h2 id="about-title">Heritage we carry with us</h2>
        </div>
        <div className="about-copy">
          <p>The Australia Nusantara Heritage Centre celebrates the heritage of Nusantara communities in Australia, from artefacts and architecture to languages, customs and knowledge of the natural world.</p>
          <p>We bring people together through art and craft, Bahasa Melayu and Bahasa Indonesia, festivals and community research.</p>
        </div>
      </div>
    </section>
  );
}

function StoryCard({ story }) {
  return (
    <article className="story-card">
      <img src={story.image} width={story.width} height={story.height} alt={story.alt} loading="lazy" />
      <div className="story-copy">
        <p className="eyebrow">{story.tag}</p>
        <h3><a href={story.href}>{story.title} <ArrowUpRight aria-hidden="true" /></a></h3>
        <p>{story.description}</p>
        {story.credit && <a className="image-credit" href={story.credit.href}>{story.credit.label}</a>}
      </div>
    </article>
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
  const [leadStory, ...otherStories] = visibleStories;

  function clearFilters() {
    setActiveTag('All');
    setQuery('');
    searchRef.current.focus();
  }

  return (
    <section className="stories-section section" id="stories" tabIndex={-1} aria-labelledby="stories-title">
      <div className="wrap">
        <div className="section-heading stories-heading">
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
        {leadStory ? (
          <div className="story-grid">
            <StoryCard story={leadStory} />
            {otherStories.length > 0 && (
              <div className="story-rail">
                {otherStories.map((story) => <StoryCard key={story.title} story={story} />)}
              </div>
            )}
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
      <div className="wrap">
        <div className="traditions-feature">
          <div className="traditions-copy">
            <p className="eyebrow">Living traditions</p>
            <h2 id="traditions-title">{livingTradition.title}</h2>
            <p className="section-description">{livingTradition.description}</p>
            <a className="text-link" href={livingTradition.source}>Read about Lebaran <ArrowUpRight aria-hidden="true" /></a>
          </div>
          <figure className="traditions-image">
            <img
              src="/images/nusantara-batik.webp"
              srcSet="/images/nusantara-batik-small.webp 640w, /images/nusantara-batik.webp 1280w"
              sizes="(max-width: 48rem) 100vw, 50vw"
              width="1280"
              height="853"
              alt="A batik maker traces a floral design on cloth with a canting tool"
              loading="lazy"
            />
            <figcaption>Illustration of batik-making in Java</figcaption>
          </figure>
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
          <div className="timeline-content" aria-live="polite" aria-atomic="true">
            <div>
              <p className="eyebrow">{activeItem.year}</p>
              <h3>{activeItem.title}</h3>
            </div>
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
    <section className="events-section" id="events" tabIndex={-1} aria-labelledby="events-title">
      <h2 id="events-title">Events and programs</h2>
      <div className="event-options" role="group" aria-label="Select an event or program idea">
        {events.map((event) => (
          <button key={event.title} type="button" aria-pressed={event === activeEvent} aria-controls="event-detail" onClick={() => setActiveEvent(event)}>
            <strong>{event.title}</strong>
            <span>{event.status}</span>
          </button>
        ))}
      </div>
      <div className="event-detail" id="event-detail">
        <div aria-live="polite" aria-atomic="true">
          <p className="eyebrow">{activeEvent.date}</p>
          <h3>{activeEvent.title}</h3>
          <p>{activeEvent.description}</p>
        </div>
        <a className="text-link" href={activeEvent.href}>{activeEvent.linkText} <ArrowUpRight aria-hidden="true" /></a>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section className="research-section" id="research" tabIndex={-1} aria-labelledby="research-title">
      <h2 id="research-title">Research papers</h2>
      <p className="section-description">Read studies on Nusantara plant life, ethnobotany and cultural practice.</p>
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
      <a className="text-link" href="https://ausnusantarahc.org.au/research-papers/">Browse all papers <ArrowUpRight aria-hidden="true" /></a>
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
        <Stories />
        <LivingTraditions />
        <Footprints />
        <div className="reading-desk wrap section">
          <Events />
          <Research />
        </div>
        <About />
        <Donate />
      </main>
      <Footer />
    </>
  );
}
