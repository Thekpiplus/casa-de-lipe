import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { distances, site } from '../data/site'

export default function LocationPage() {
  return (
    <>
      <PageHero title="Location" image={site.hero} />
      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Koh Lipe, Satun</p>
            <h2>On the sunset side of the island</h2>
            <p className="lead">{site.address}</p>
            <p className="lead">
              Perched on the west shore of Lipe Island — queen of the Andaman Sea, north of the Malay
              Peninsula — Casa De Lipe is known for a unique, warm, homey beachfront living and an
              unparalleled escape. All villas sit on a lush hillside fronting the private beach,
              where tranquillity is abundant.
            </p>
            <p className="lead">
              Fly to Hat Yai or Trang, continue by resort limousine to Pakbara Pier, then take the
              ferry across Tarutao National Park to Koh Lipe.
            </p>
            <p style={{ marginTop: 20 }}>
              <a className="text-link" href={site.maps} target="_blank" rel="noreferrer">
                Open in Google Maps
              </a>
            </p>
          </div>
          <iframe
            className="map-embed"
            title="Casa De Lipe map"
            src="https://maps.google.com/maps?q=Casa%20De%20Lipe%20Koh%20Lipe&t=&z=14&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          />
        </div>
        <div className="wrap" style={{ marginTop: 56 }}>
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
      <section className="cta-dark">
        <h2>Let us arrange your transfer</h2>
        <p>Limousine, ferry, and villa arrival can be planned in one message.</p>
        <Link className="ghost" to="/contact">
          Contact the team
        </Link>
      </section>
    </>
  )
}
