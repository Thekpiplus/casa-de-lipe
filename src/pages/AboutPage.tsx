import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { IMG, site } from '../data/site'

export default function AboutPage() {
  return (
    <>
      <PageHero title="Our Story" image={site.hero} />
      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Welcome to our Casa</p>
            <h2>A tropical beach paradise with contemporary, cosy architecture</h2>
            <p className="lead">
              Casa De Lipe edges on the sunset side of Lipe Island, 80 kilometres west of Satun
              Province. The island is known as the Maldives of Thailand for its crystal-clear
              Andaman waters. Lipe sits under the provision of Tarutao National Park — Thailand’s
              first national marine park.
            </p>
            <p className="lead">
              The property offers an exclusive ten-villa experience only. Breathe in the fresh air
              and dive into tranquil Lipe water — one of the most beautiful coastlines of Thailand.
              Traverse the private beach of Casa De Lipe and take a plunge in the unending ocean,
              greeted by the sea life of Tarutao.
            </p>
          </div>
          <img src={IMG('2349')} alt="Casa De Lipe architecture" />
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <img src={site.story} alt="Pool villa at Casa De Lipe" />
          <div>
            <p className="eyebrow">Getting here</p>
            <h2>Hat Yai or Trang, then the sea</h2>
            <p className="lead">
              Guests travel to Hat Yai International Airport or Trang Airport, then take the
              resort’s limousine for a seamless drive to Pakbara Pier, followed by the ferry to Koh
              Lipe. Surrounding islands such as Tarutao and Kai can be visited on the way.
            </p>
            <p style={{ marginTop: 28 }}>
              <Link className="book-now" to="/location">
                View location
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
