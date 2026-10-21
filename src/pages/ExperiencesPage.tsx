import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { experiences, IMG } from '../data/site'

export default function ExperiencesPage() {
  return (
    <>
      <PageHero title="Experiences" image={IMG('2423x1190x600', '')} />
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">A Curation of Senses</p>
          <h2>Dining, wellness, and the Andaman</h2>
          <p className="lead">
            From The Deck and The Red Bar to clear kayaks, island days, and sunset catamarans —
            every experience at Casa De Lipe is arranged at an unhurried island pace.
          </p>
          <div className="grid-2" style={{ marginTop: 48 }}>
            {experiences.map((item) => (
              <Link className="room-card" key={item.slug} to={`/experiences/${item.slug}`}>
                <img src={item.image} alt={item.name} style={{ height: 320 }} />
                <p className="eyebrow" style={{ marginTop: 16 }}>
                  {item.kicker}
                </p>
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
