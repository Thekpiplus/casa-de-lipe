import { Link, Navigate, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { weddings } from '../data/site'

export default function WeddingDetailPage() {
  const { slug } = useParams()
  const item = weddings.find((w) => w.slug === slug)
  if (!item) return <Navigate to="/events" replace />

  return (
    <>
      <PageHero title={item.name} image={item.image} kicker="Weddings" />
      <section className="section">
        <div className="wrap detail-grid">
          <div>
            <p className="lead">{item.capacity}</p>
            <h2>{item.name}</h2>
            <p className="lead">{item.summary}</p>
            <p className="lead">{item.description}</p>
            <p style={{ marginTop: 28 }}>
              <Link className="book-now" to={`/contact?intent=wedding&wedding=${item.slug}`}>
                Plan your wedding
              </Link>
            </p>
          </div>
          <aside className="side-card">
            <h3>Package highlights</h3>
            <ul>
              {item.highlights.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <h3 style={{ marginTop: 28 }}>Ceremony inclusions</h3>
            <ul>
              {item.ceremony.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  )
}
