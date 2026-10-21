import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { IMG, site } from '../data/site'

export default function SalesPage() {
  return (
    <>
      <PageHero title="Villas For Sale" image={IMG('2349')} />
      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Residence</p>
            <h2>A hillside of ten villas on the sunset shore</h2>
            <p className="lead">
              Perched on the sunset side of Lipe Island — queen of the Andaman Sea, north of the
              Malay Peninsula — Casa De Lipe is known for offering unique, warm, homey beachfront
              living and an unparalleled escape.
            </p>
            <p className="lead">
              This ten-villa property sits on the west side of Lipe, where the picturesque sunset
              keeps you dreaming. All villas are set on a lush landscape fronting the private beach,
              where tranquillity is abundantly identified.
            </p>
            <p className="lead">
              For current availability and private viewings, please write to {site.email} or call{' '}
              {site.phone}.
            </p>
            <p style={{ marginTop: 28 }}>
              <Link className="book-now" to="/contact?intent=sale">
                Enquire to purchase
              </Link>
            </p>
          </div>
          <img src={site.hero} alt="Casa De Lipe villas for sale" />
        </div>
      </section>
    </>
  )
}
