import { Link, Navigate, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { experiences } from '../data/site'

export default function ExperienceDetailPage() {
  const { slug } = useParams()
  const item = experiences.find((e) => e.slug === slug)
  if (!item) return <Navigate to="/experiences" replace />

  return (
    <>
      <PageHero title={item.name} image={item.image} kicker={item.kicker} />
      <section className="section">
        <div className="wrap detail-grid">
          <div>
            <h2>{item.name}</h2>
            <p className="lead">{item.summary}</p>
            <p className="lead">{item.description}</p>
            {item.details ? (
              <ul className="lead" style={{ paddingLeft: 18 }}>
                {item.details.map((line) => (
                  <li key={line} style={{ marginBottom: 8 }}>
                    {line}
                  </li>
                ))}
              </ul>
            ) : null}
            <p style={{ marginTop: 28 }}>
              <Link className="book-now" to={`/contact?intent=experience&experience=${item.slug}`}>
                Enquire
              </Link>
            </p>
          </div>
          <aside className="side-card">
            {item.hours ? (
              <>
                <h3>Opening hours</h3>
                <div className="hours">
                  {item.hours.map((h) => (
                    <div key={h.label}>
                      <span>{h.label}</span>
                      <strong>{h.time}</strong>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <h3>Good to know</h3>
                <p className="lead" style={{ marginTop: 0 }}>
                  Please reserve at least one day in advance. Sea trips depend on tides and weather.
                  Our hosts can arrange the details during your stay.
                </p>
              </>
            )}
          </aside>
        </div>
      </section>
    </>
  )
}
