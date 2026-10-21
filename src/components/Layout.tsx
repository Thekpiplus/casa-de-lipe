import { useEffect, useState, type FormEvent } from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { experiences, site, villas, weddings } from '../data/site'

const nav = [
  { to: '/', label: 'Home' },
  {
    to: '/stays',
    label: 'Stays',
    children: villas.map((v) => ({ to: `/stays/${v.slug}`, label: v.name })),
  },
  {
    to: '/experiences',
    label: 'Experiences',
    children: experiences.map((e) => ({ to: `/experiences/${e.slug}`, label: e.name })),
  },
  {
    to: '/events',
    label: 'Events',
    children: [
      { to: '/events', label: 'Special Events' },
      ...weddings.map((w) => ({ to: `/events/${w.slug}`, label: w.name })),
    ],
  },
  { to: '/offers', label: 'Offers' },
  { to: '/gallery', label: 'Gallery' },
  {
    to: '/about',
    label: 'About Us',
    children: [
      { to: '/about', label: 'Our Story' },
      { to: '/location', label: 'Location' },
      { to: '/faq', label: 'FAQ' },
      { to: '/villas-for-sale', label: 'Villas For Sale' },
    ],
  },
  { to: '/contact', label: 'Contact' },
]

function todayISO(offset = 0) {
  const d = new Date()
  d.setDate(d.getDate() + offset)
  return d.toISOString().slice(0, 10)
}

export default function Layout() {
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [checkIn, setCheckIn] = useState(todayISO(0))
  const [checkOut, setCheckOut] = useState(todayISO(1))
  const [guests, setGuests] = useState('2')

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  function goBook(e?: FormEvent) {
    e?.preventDefault()
    const params = new URLSearchParams({ checkIn, checkOut, guests, intent: 'booking' })
    navigate(`/contact?${params.toString()}`)
  }

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="header">
        <Link to="/" className="logo" aria-label="Casa De Lipe home">
          <img src={site.logo} alt="" />
          <span className="wordmark">
            Casa De Lipe
            <small>Koh Lipe</small>
          </span>
        </Link>
        <nav className="nav" aria-label="Main Menu">
          {nav.map((item) => (
            <div className="nav-item" key={item.label}>
              <NavLink
                to={item.to}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                end={item.to === '/'}
              >
                {item.label}
                {item.children ? <span className="caret" /> : null}
              </NavLink>
              {item.children ? (
                <div className="dropdown">
                  {item.children.map((child) => (
                    <Link key={child.to + child.label} to={child.to}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <Link className="book-now" to="/contact?intent=booking">
          Book Now
        </Link>
        <button
          className="menu-toggle"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </header>

      <nav className={`mobile-nav${open ? ' open' : ''}`}>
        {nav.map((item) => (
          <div key={item.label}>
            <Link to={item.to} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
            {item.children?.map((child) => (
              <Link
                className="sub"
                key={child.to + child.label}
                to={child.to}
                onClick={() => setOpen(false)}
              >
                {child.label}
              </Link>
            ))}
          </div>
        ))}
        <Link to="/contact?intent=booking" onClick={() => setOpen(false)}>
          Book Now
        </Link>
      </nav>

      <div className="booking-bar">
        <form onSubmit={goBook}>
          <div className="book-field">
            <svg className="icon-cal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="5" width="18" height="16" rx="1" />
              <path d="M3 9h18M8 3v4M16 3v4" />
            </svg>
            <div>
              <label htmlFor="checkin">Check in</label>
              <input
                id="checkin"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
          </div>
          <div className="book-field">
            <svg className="icon-cal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="5" width="18" height="16" rx="1" />
              <path d="M3 9h18M8 3v4M16 3v4" />
            </svg>
            <div>
              <label htmlFor="checkout">Check out</label>
              <input
                id="checkout"
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
          </div>
          <div className="book-field">
            <svg className="icon-guest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="8" r="3.2" />
              <path d="M5 19c.8-3.2 3.4-5 7-5s6.2 1.8 7 5" />
            </svg>
            <div>
              <label htmlFor="guests">Guests</label>
              <select id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}>
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'Adult' : 'Adults'}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button className="book-check" type="submit">
            Check Availability
          </button>
        </form>
      </div>

      <main id="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <p className="eyebrow">Casa De Lipe</p>
            <h3>The only sunset-side pool villa residence on Koh Lipe.</h3>
            <p>
              An exclusive ten-villa retreat on the west shore of Lipe Island, where private luxury,
              a private beach, and the spirit of the Andaman come together.
            </p>
          </div>
          <div>
            <p className="col-title">Explore</p>
            <ul>
              <li>
                <Link to="/stays">Stays</Link>
              </li>
              <li>
                <Link to="/experiences">Experiences</Link>
              </li>
              <li>
                <Link to="/events">Weddings</Link>
              </li>
              <li>
                <Link to="/offers">Offers</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/location">Location</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/villas-for-sale">Villas For Sale</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="col-title">Contact</p>
            <p>
              <a href={site.maps} target="_blank" rel="noreferrer">
                {site.address}
              </a>
            </p>
            <p>
              <a href={site.phoneHref}>{site.phone}</a>
            </p>
            <p>
              <a href={site.emailHref}>{site.email}</a>
            </p>
            <div className="socials">
              <a href={site.social.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={site.social.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
              <a href={site.social.line} target="_blank" rel="noreferrer">
                Line
              </a>
            </div>
          </div>
        </div>
        <div className="wrap legal">
          <span>© {new Date().getFullYear()} Casa De Lipe Pool Villa. All Rights Reserved.</span>
          <span>Koh Lipe, Satun, Thailand</span>
        </div>
      </footer>
    </>
  )
}
