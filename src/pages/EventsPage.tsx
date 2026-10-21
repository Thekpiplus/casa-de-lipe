import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { IMG, weddings } from '../data/site'

export default function EventsPage() {
  return (
    <>
      <PageHero title="Events & Weddings" image={IMG('2469')} />
      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Special Events</p>
            <h2>Celebrate on the white sand shore</h2>
            <p className="lead">
              Celebrate your union at paradise on the white sand shore — the ideal wedding scene.
              Enhance the day with an unforgettable dining experience tailored by our chefs, as our
              event team takes care of every last detail.
            </p>
            <p className="lead">
              From intimate beachfront vows to traditional Thai ceremonies for up to thirty guests,
              Casa De Lipe is reserved for gatherings that prefer privacy over scale.
            </p>
          </div>
          <img src={IMG('2470')} alt="Wedding on Koh Lipe" />
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap grid-2">
          {weddings.map((w) => (
            <Link className="room-card" key={w.slug} to={`/events/${w.slug}`}>
              <img src={w.image} alt={w.name} style={{ height: 340 }} />
              <h3>{w.name}</h3>
              <p>{w.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
