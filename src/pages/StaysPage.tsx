import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { site, villas } from '../data/site'

export default function StaysPage() {
  return (
    <>
      <PageHero title="Ocean Pool Villas" image={site.hero} />
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Accommodation</p>
          <h2>Rooms, Suites & Private Pool Villas</h2>
          <p className="lead">
            Soak up the picturesque view of Adang Island from a stylish modern pool villa. Unwind in
            comfort with the most beautiful sunset spot of Koh Lipe at the end of a day spent
            exploring local sites. Casa De Lipe offers an exclusive ten-villa experience only.
          </p>
          <div className="grid-3" style={{ marginTop: 48 }}>
            {villas.map((villa) => (
              <Link className="room-card" key={villa.slug} to={`/stays/${villa.slug}`}>
                <img src={villa.image} alt={villa.name} />
                <h3>{villa.name}</h3>
                <p>
                  {villa.size} • {villa.guests} • {villa.bed}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
