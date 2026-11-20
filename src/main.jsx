
import React from 'react';
import { createRoot } from 'react-dom/client';

import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Handshake,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  X
} from 'lucide-react';

import './styles.css';


const companies = [
  'Amazon',
  'Flipkart',
  'Neva Health Insurance',
  'Startek',
  'IndiGo',
  'Air India',
  'Hero',
  'Myntra',
  'BigBasket',
  'Blinkit',
  'One.One',
  'Lexes',
  'Siddhi Group',
  'Subrose',
  'Pragati Manufacturing',
  'Concentrix',
  'Secreto'
];


const placementPhotos = Array.from(
  { length: 20 },
  (_, index) => ({
    id: index + 1,

    src: `/images/placements/placement-${String(
      index + 1
    ).padStart(2, '0')}.webp`
  })
);


function App() {

  const [menuOpen, setMenuOpen] = React.useState(false);

  const [activePhoto, setActivePhoto] = React.useState(null);


  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (

    <div className="site-shell">

      {/* TOP BAR */}

      <div className="topline">

        <span>CAREERS BUILT ON TRUST</span>

        <span className="topline-right">
          <ShieldCheck size={14} />
          Supporting General & PwD Candidates
        </span>

      </div>


      {/* HEADER */}

      <header className="header">

        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Shiva Consultancy home"
        >

          <span className="brand-mark">
            S<span>✦</span>
          </span>

          <span className="brand-copy">
            <strong>SHIVA</strong>
            <small>CONSULTANCY</small>
          </span>

        </a>


        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >

          {menuOpen ? <X /> : <Menu />}

        </button>


        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#achievements" onClick={closeMenu}>
            Our impact
          </a>

          <a href="#placements" onClick={closeMenu}>
            Placements
          </a>

          <a href="#companies" onClick={closeMenu}>
            Companies
          </a>

          <a href="#about" onClick={closeMenu}>
            About us
          </a>

          <a
            className="nav-cta"
            href="#contact"
            onClick={closeMenu}
          >
            Get in touch
            <ArrowUpRight size={16} />
          </a>

        </nav>

      </header>


      <main>

        {/* HERO SECTION */}

        <section className="hero" id="home">

          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />


          <div className="hero-content">

            <div className="eyebrow light">

              <span className="eyebrow-dot" />

              YOUR NEXT CHAPTER STARTS HERE

            </div>


            <h1>
              Good people.
              <br />
              <em>Great opportunities.</em>
              <br />
              Real success.
            </h1>


            <p className="hero-description">

              We help people move forward with confidence —
              connecting talent with opportunities and turning
              career goals into achievements.

            </p>


            <div className="hero-actions">

              <a
                className="button button-gold"
                href="#placements"
              >

                See placement success

                <ArrowRight size={18} />

              </a>


              <a
                className="text-link light-link"
                href="#about"
              >

                Discover our approach

                <ArrowUpRight size={17} />

              </a>

            </div>


            <div className="hero-proof">

              <div className="proof-avatars">

                <span>SC</span>
                <span>✓</span>
                <span>★</span>

              </div>


              <p>

                <strong>1,100+ career journeys</strong>

                <br />

                and counting

              </p>

            </div>

          </div>


          {/* HERO ART */}

          <div
            className="hero-art"
            aria-label="Decorative career success illustration"
          >

            <div className="art-orbit orbit-a" />
            <div className="art-orbit orbit-b" />


            <div className="art-card art-card-main">

              <div className="art-card-top">

                <span className="mini-logo">S</span>

                <span className="art-status">
                  <i />
                  SUCCESS STORY
                </span>

              </div>


              <div className="art-person">

                <div className="person-head" />

                <div className="person-body" />

              </div>


              <div className="art-card-lines">

                <b />
                <i />
                <i />

              </div>


              <div className="art-card-bottom">

                <span>NEW BEGINNING</span>

                <CheckCircle2 size={19} />

              </div>

            </div>


            <div className="floating-note note-top">

              <Sparkles size={17} />

              <span>
                Potential
                <br />
                <b>Recognised.</b>
              </span>

            </div>


            <div className="floating-note note-bottom">

              <span className="note-icon">
                <BriefcaseBusiness size={18} />
              </span>

              <span>
                Opportunity
                <br />
                <b>Unlocked.</b>
              </span>

            </div>


            <div className="art-spark spark-a">✳</div>
            <div className="art-spark spark-b">✦</div>

          </div>


          <a
            href="#achievements"
            className="scroll-cue"
          >

            <span />

            SCROLL TO EXPLORE

          </a>

        </section>


        {/* ACHIEVEMENTS */}

        <section
          className="stats-section"
          id="achievements"
        >

          <div className="section-kicker">
            THE DIFFERENCE WE MAKE
          </div>


          <div className="stats-grid">

            <div className="stat">

              <strong>
                1,100<span>+</span>
              </strong>

              <p>Candidates placed</p>

              <small>Careers moved forward</small>

            </div>


            <div className="stat-divider" />


            <div className="stat">

              <strong>
                100<span>+</span>
              </strong>

              <p>Companies</p>

              <small>Across hiring sectors</small>

            </div>


            <div className="stat-divider" />


            <div className="stat">

              <strong>2</strong>

              <p>Candidate pathways</p>

              <small>
                General & PwD opportunities
              </small>

            </div>

          </div>


          <p className="stats-note">

            Placement figures and company references
            are based on the records provided to us.

          </p>

        </section>


        {/* PLACEMENT GALLERY */}

        <section
          className="placements-section section-pad"
          id="placements"
        >

          <div className="section-heading">

            <div>

              <div className="eyebrow">

                <span className="eyebrow-dot" />

                PEOPLE. PROGRESS. PLACEMENTS.

              </div>


              <h2>
                Success looks good
                <br />
                <em>on everyone.</em>
              </h2>

            </div>


            <p>

              Every placement is more than a result.
              It is a new opportunity, a proud moment
              and a step towards a brighter future.

            </p>

          </div>


          <div className="gallery-intro">

            <div>

              <span className="gallery-count">
                01 — 20
              </span>

              <h3>Our placement wall</h3>

            </div>


            <span className="gallery-hint">

              Candidate success stories

              <ArrowDownIcon />

            </span>

          </div>


          <div className="placement-grid">

            {placementPhotos.map((photo, index) => (

              <button
                className={`placement-tile tile-${(index % 6) + 1}`}
                key={photo.id}
                onClick={() => setActivePhoto(photo)}
                aria-label={`View placement photo ${photo.id}`}
              >

                <img
                  src={photo.src}
                  alt={`Shiva Consultancy placement success ${photo.id}`}
                  loading={index < 5 ? 'eager' : 'lazy'}
                  decoding="async"
                />

                <span className="tile-caption">
                  Placement success
                </span>

              </button>

            ))}

          </div>

        </section>


        {/* COMPANIES */}

        <section
          className="companies-section"
          id="companies"
        >

          <div className="companies-copy">

            <div className="eyebrow light">

              <span className="eyebrow-dot" />

              A NETWORK OF OPPORTUNITY

            </div>


            <h2>
              Connecting talent
              <br />
              with <em>leading names.</em>
            </h2>


            <p>

              Our placement records span multiple
              industries — from retail and aviation
              to manufacturing, services and more.

            </p>


            <a
              className="text-link light-link"
              href="#contact"
            >

              Talk to our team

              <ArrowUpRight size={17} />

            </a>

          </div>


          <div className="company-panel">

            <div className="company-panel-head">

              <span>COMPANY NAMES FROM OUR RECORDS</span>

              <span className="company-total">
                100+ NETWORK
              </span>

            </div>


            <div className="company-cloud">

              {companies.map((company, index) => (

                <span
                  className={`company-chip chip-${index % 4}`}
                  key={company}
                >
                  {company}
                </span>

              ))}

            </div>


            <p className="company-disclaimer">

              Selected company names supplied by the
              consultancy. Logos and formal affiliations
              can be added after verification.

            </p>

          </div>

        </section>


        {/* INCLUSION */}

        <section className="inclusion-section section-pad">

          <div className="inclusion-icon">
            <HeartHandshake size={30} />
          </div>


          <div className="inclusion-copy">

            <div className="eyebrow">

              <span className="eyebrow-dot" />

              OPPORTUNITY FOR EVERYONE

            </div>


            <h2>
              Talent has no
              <br />
              <em>one-size-fits-all.</em>
            </h2>


            <p>

              We recognise that every candidate has
              a different journey. Our records include
              placements for both General and Persons
              with Disabilities (PwD) candidates.

            </p>

          </div>


          <div className="pathway-cards">

            <div className="pathway-card">

              <span className="pathway-no">01</span>

              <Users size={23} />

              <h3>General candidates</h3>

              <p>
                Connecting skills, ambition and the
                right career opportunities.
              </p>

            </div>


            <div className="pathway-card pathway-highlight">

              <span className="pathway-no">02</span>

              <HeartHandshake size={23} />

              <h3>PwD candidates</h3>

              <p>
                Supporting inclusive employment
                and meaningful opportunities.
              </p>

            </div>

          </div>

        </section>


        {/* ABOUT */}

        <section
          className="about-section"
          id="about"
        >

          <div className="about-mark">
            S<span>✦</span>
          </div>


          <div className="about-content">

            <div className="eyebrow light">

              <span className="eyebrow-dot" />

              ABOUT SHIVA CONSULTANCY

            </div>


            <h2>
              We believe every
              <br />
              career deserves a <em>chance.</em>
            </h2>


            <p>

              Shiva Consultancy is focused on helping
              candidates find meaningful employment
              opportunities. We believe in people,
              potential and the impact that the right
              opportunity can make.

            </p>


            <div className="about-values">

              <span>
                <CheckCircle2 size={17} />
                Candidate-focused
              </span>

              <span>
                <CheckCircle2 size={17} />
                Opportunity-led
              </span>

              <span>
                <CheckCircle2 size={17} />
                Inclusive approach
              </span>

            </div>

          </div>

        </section>


        {/* CONTACT */}

        <section
          className="contact-section section-pad"
          id="contact"
        >

          <div>

            <div className="eyebrow">

              <span className="eyebrow-dot" />

              LET'S TAKE THE NEXT STEP

            </div>


            <h2>
              Your next opportunity
              <br />
              could start <em>today.</em>
            </h2>


            <p>

              Looking for a job or hiring the right
              people? Get in touch with Shiva Consultancy.

            </p>

          </div>


          <div className="contact-card">

            <div className="contact-card-top">

              <span>CONNECT WITH US</span>

              <ArrowUpRight size={20} />

            </div>


            {/* PHONE */}

            <div className="contact-detail">

              <span className="contact-icon">
                <Phone size={18} />
              </span>


              <div>

                <small>CALL US</small>

                <a href="tel:+919817067647">
                  +91 98170 67647
                </a>

                <a href="tel:+919315876589">
                  +91 93158 76589
                </a>

              </div>

            </div>


            {/* WHATSAPP */}

            <div className="contact-detail">

              <span className="contact-icon">
                <MessageCircle size={18} />
              </span>


              <div>

                <small>WHATSAPP</small>

                <a
                  href="https://wa.me/919817067647"
                  target="_blank"
                  rel="noreferrer"
                >
                  +91 98170 67647
                </a>

                <a
                  href="https://wa.me/919315876589"
                  target="_blank"
                  rel="noreferrer"
                >
                  +91 93158 76589
                </a>

              </div>

            </div>


            {/* EMAIL */}

            <div className="contact-detail">

              <span className="contact-icon">
                <Mail size={18} />
              </span>


              <div>

                <small>EMAIL US</small>

                <a href="mailto:shivaconsultinggrop07@gmail.com">
                  shivaconsultinggrop07@gmail.com
                </a>

                <a href="mailto:ombirsingh7789@gmail.com">
                  ombirsingh7789@gmail.com
                </a>

              </div>

            </div>


            <p className="contact-note">

              Tap a phone number to call, a WhatsApp
              number to message, or an email address
              to write to us.

            </p>

          </div>

        </section>

      </main>


      {/* FOOTER */}

      <footer className="footer">

        <a
          className="brand footer-brand"
          href="#home"
        >

          <span className="brand-mark">
            S<span>✦</span>
          </span>

          <span className="brand-copy">
            <strong>SHIVA</strong>
            <small>CONSULTANCY</small>
          </span>

        </a>


        <p>Your career. Our commitment.</p>


        <span className="copyright">

          © {new Date().getFullYear()}
          {' '}
          Shiva Consultancy. All rights reserved.

        </span>

      </footer>


      {/* PHOTO LIGHTBOX */}

      {activePhoto && (

        <div
          className="lightbox"
          onClick={() => setActivePhoto(null)}
        >

          <button
            className="lightbox-close"
            onClick={() => setActivePhoto(null)}
            aria-label="Close"
          >
            <X />
          </button>


          <img
            src={activePhoto.src}
            alt="Placement success"
            onClick={event => event.stopPropagation()}
          />

        </div>

      )}

    </div>

  );

}


function ArrowDownIcon() {

  return <ChevronDown size={16} />;

}


createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <App />
  </React.StrictMode>

);
