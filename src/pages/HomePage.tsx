import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { distances, experiences, site, testimonials, villas } from '../data/site'

export default function HomePage() {
  const scroller = useRef<HTMLDivElement>(null)
  const featured = experiences.filter((e) =>
    ['the-deck', 'the-red-bar', 'massage', 'sunset-catamaran'].includes(e.slug),
  )

  function slide(dir: number) {
    scroller.current?.scrollBy({ left: dir * 380, behavior: 'smooth' })
  }

  return (
    <>
      <section className="hero">
        <img className="hero-bg" src={site.hero} alt="Casa De Lipe hillside villas on Koh Lipe" />
        <div className="hero-copy">
          <h1>The Ultimate Sunset Pool Villa Residence on Koh Lipe</h1>
          <p>
            An exclusive ten-villa retreat on the sunset side of Lipe Island. Casa De Lipe combines
            private plunge pools, a private beach, and contemporary rooms looking across the Andaman
            to Adang Island — with Koh Lipe’s most beautiful sunset at the close of every day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">The Casa De Lipe Advantage</p>
            <h2>
              PRIVATE BEACH.
              <br />
              SUNSET VILLAS.
              <br />
              ANDAMAN CALM.
            </h2>
            <div className="points">
              <div className="point">
                <svg className="point-icon" viewBox="0 0 48 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M2 16c8-10 14-10 22 0S38 26 46 16" />
                </svg>
                <h3>Private Beach Access</h3>
                <p>
                  Step from the residence onto Casa De Lipe’s private west-coast beach. No roads to
                  cross — just sand, sea, and the island’s most celebrated sunset outside your door.
                </p>
              </div>
              <div className="point">
                <svg className="point-icon" viewBox="0 0 48 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <rect x="8" y="6" width="32" height="14" />
                  <path d="M8 12h32" />
                </svg>
                <h3>Ten Pool Villas Only</h3>
                <p>
                  Choose from a collection of oceanfront, deluxe, superior, and family pool villas
                  designed for couples and families seeking comfort, privacy, and style.
                </p>
              </div>
              <div className="point">
                <svg className="point-icon" viewBox="0 0 48 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="24" cy="12" r="8" />
                </svg>
                <h3>Heart of Tarutao</h3>
                <p>
                  Koh Lipe, the Maldives of Thailand, sits inside Tarutao National Park. Crystal
                  Andaman water, island tours, and Walking Street are all within easy reach.
                </p>
              </div>
            </div>
          </div>
          <img src={site.story} alt="Casa De Lipe pool villa terrace" />
        </div>
      </section>

      <section className="section tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="rooms-head">
            <div>
              <p className="eyebrow">Accommodation</p>
              <h2>Ocean Pool Villas</h2>
              <p className="lead">
                Choose from ten thoughtfully designed pool villas, ranging from secluded oceanfront
                suites to spacious family residences. Every stay combines modern comfort with one of
                Koh Lipe’s most desirable sunset locations.
              </p>
            </div>
            <Link className="text-link" to="/stays">
              View all Rooms
            </Link>
          </div>
          <div className="carousel" ref={scroller}>
            {villas.map((villa) => (
              <Link className="room-card" key={villa.slug} to={`/stays/${villa.slug}`}>
                <img src={villa.image} alt={villa.name} />
                <h3>{villa.name}</h3>
                <p>
                  {villa.size} • {villa.type}
                </p>
              </Link>
            ))}
          </div>
          <div className="carousel-nav">
            <button type="button" aria-label="Previous slide" onClick={() => slide(-1)}>
              ‹
            </button>
            <button type="button" aria-label="Next slide" onClick={() => slide(1)}>
              ›
            </button>
          </div>
        </div>
      </section>

      <section className="dark section">
        <div className="wrap">
          <p className="eyebrow">The Casa De Lipe Experience</p>
          <h2>A Curation of Senses</h2>
          <div className="exp-grid">
            {featured.map((item) => (
              <Link className="exp-card" key={item.slug} to={`/experiences/${item.slug}`}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.slug === 'sunset-catamaran' ? 'Sunset Catamaran' : item.name}</h3>
                  <p>{item.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap quotes">
          {testimonials.map((t) => (
            <blockquote className="quote" key={t.name}>
              “{t.quote}”
              <cite>
                {t.name} • {t.source}
              </cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap benefits">
          <div>
            <p className="eyebrow">Stay With Us</p>
            <h2>Book Direct For The Best Experience</h2>
            <p className="lead">
              Enjoy exclusive benefits and added peace of mind when booking directly through Casa De
              Lipe. Speak with our team, request villas by name, and arrange dinners, tours, and
              transfers in a single conversation.
            </p>
          </div>
          <div className="benefit-list">
            <div>
              <h3>Best Rate Guarantee</h3>
              <p>The most considered rates when you reserve your villa directly with the residence.</p>
            </div>
            <div>
              <h3>Exclusive Offers</h3>
              <p>Website-only seasonal packages, romantic dinners, and island experiences.</p>
            </div>
            <div>
              <h3>Priority Assistance</h3>
              <p>Airport limousines, ferry seats, kayaks, and spa hours arranged by our hosts.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section tight" style={{ background: '#fff' }}>
        <div className="wrap">
          <p className="eyebrow">At the Edge of Everything</p>
          <h2>Experience the best of Koh Lipe from the sunset shore.</h2>
          <p className="lead">
            A hillside of white villas above a private beach, with Adang Island on the horizon and
            the island’s walking street a short stroll away.
          </p>
          <div className="distance-row">
            {distances.map((d) => (
              <div className="distance" key={d.label}>
                {d.label}
                <strong>{d.value}</strong>
                <span>{d.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
