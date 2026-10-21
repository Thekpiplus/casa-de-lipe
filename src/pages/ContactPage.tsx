import { useMemo, useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { experiences, site, villas, weddings } from '../data/site'

export default function ContactPage() {
  const [params] = useSearchParams()
  const [sent, setSent] = useState(false)
  const defaults = useMemo(
    () => ({
      checkIn: params.get('checkIn') ?? '',
      checkOut: params.get('checkOut') ?? '',
      guests: params.get('guests') ?? '2',
      villa: params.get('villa') ?? '',
      experience: params.get('experience') ?? '',
      wedding: params.get('wedding') ?? '',
      intent: params.get('intent') ?? 'general',
    }),
    [params],
  )

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const body = [
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone')}`,
      `Guests: ${data.get('guests')}`,
      `Check-in: ${data.get('checkIn')}`,
      `Check-out: ${data.get('checkOut')}`,
      `Villa: ${data.get('villa')}`,
      `Interest: ${data.get('interest')}`,
      '',
      String(data.get('message') ?? ''),
    ].join('\n')
    window.location.href = `${site.emailHref}?subject=${encodeURIComponent('Casa De Lipe enquiry')}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <PageHero title="Contact" image={site.hero} />
      <section className="section">
        <div className="wrap detail-grid">
          <div>
            <p className="eyebrow">Write to the residence</p>
            <h2>We will hold your villa and arrange the rest</h2>
            <p className="lead">
              Tell us your dates, preferred villa, and any dinners, tours, or transfers. Our hosts
              reply directly from Casa De Lipe.
            </p>
            {sent ? (
              <p className="notice">Your mail app should open with the enquiry ready to send.</p>
            ) : null}
            <form className="form" onSubmit={onSubmit} style={{ marginTop: 28 }}>
              <div className="form-row">
                <input name="name" required placeholder="Full name" />
                <input name="email" type="email" required placeholder="Email" />
              </div>
              <div className="form-row">
                <input name="phone" placeholder="Telephone" />
                <select name="guests" defaultValue={defaults.guests}>
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'Adult' : 'Adults'}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-row">
                <input name="checkIn" type="date" defaultValue={defaults.checkIn} />
                <input name="checkOut" type="date" defaultValue={defaults.checkOut} />
              </div>
              <div className="form-row">
                <select name="villa" defaultValue={defaults.villa}>
                  <option value="">Any villa</option>
                  {villas.map((v) => (
                    <option key={v.slug} value={v.slug}>
                      {v.name}
                    </option>
                  ))}
                </select>
                <select
                  name="interest"
                  defaultValue={defaults.experience || defaults.wedding || defaults.intent}
                >
                  <option value="booking">Villa reservation</option>
                  {experiences.map((item) => (
                    <option key={item.slug} value={item.slug}>
                      {item.name}
                    </option>
                  ))}
                  {weddings.map((item) => (
                    <option key={item.slug} value={item.slug}>
                      {item.name}
                    </option>
                  ))}
                  <option value="offer">Special offer</option>
                  <option value="sale">Villa for sale</option>
                </select>
              </div>
              <textarea name="message" placeholder="Tell us about your stay" />
              <button className="book-now" type="submit">
                Send enquiry
              </button>
            </form>
          </div>
          <aside className="side-card">
            <h3>Casa De Lipe</h3>
            <p className="lead" style={{ marginTop: 0 }}>
              {site.address}
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
          </aside>
        </div>
      </section>
    </>
  )
}
