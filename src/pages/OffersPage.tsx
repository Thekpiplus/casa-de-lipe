import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { IMG } from '../data/site'

export default function OffersPage() {
  return (
    <>
      <PageHero title="Special Offers" image={IMG('2645', '')} />
      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Promotion</p>
            <h2>Book direct for seasonal offers</h2>
            <p className="lead">
              Website-only packages are released throughout the year — from long-stay villa rates to
              romantic dinners on the Oceanfront Deck. Contact our hosts for the latest availability
              and to tailor a stay around island tours, spa hours, and sunset catamarans.
            </p>
            <p className="lead">
              Current published promotions will appear here as they open. Until then, write to us
              with your dates and we will hold the best available villa.
            </p>
            <p style={{ marginTop: 28 }}>
              <Link className="book-now" to="/contact?intent=offer">
                Request an offer
              </Link>
            </p>
          </div>
          <img src={IMG('2351')} alt="Casa De Lipe offer" />
        </div>
      </section>
    </>
  )
}
