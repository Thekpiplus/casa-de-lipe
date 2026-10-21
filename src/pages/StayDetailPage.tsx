import { Link, Navigate, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { villas } from '../data/site'

export default function StayDetailPage() {
  const { slug } = useParams()
  const villa = villas.find((v) => v.slug === slug)
  if (!villa) return <Navigate to="/stays" replace />

  return (
    <>
      <PageHero title={villa.name} image={villa.image} kicker="Stays" />
      <section className="section">
        <div className="wrap detail-grid">
          <div>
            <p className="eyebrow">
              {villa.size} • {villa.type}
            </p>
            <h2>{villa.name}</h2>
            <p className="lead">{villa.summary}</p>
            <p className="lead">{villa.description}</p>
            <div className="thumb-row">
              {villa.gallery.map((src) => (
                <img key={src} src={src} alt={villa.name} />
              ))}
            </div>
            <p style={{ marginTop: 28 }}>
              <Link className="book-now" to={`/contact?intent=booking&villa=${villa.slug}`}>
                Reserve this villa
              </Link>
            </p>
          </div>
          <aside className="side-card">
            <h3>Room amenities</h3>
            <ul>
              {villa.amenities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3 style={{ marginTop: 28 }}>Room features</h3>
            <ul>
              {villa.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  )
}
