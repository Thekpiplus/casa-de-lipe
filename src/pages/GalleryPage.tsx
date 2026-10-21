import { useMemo, useState } from 'react'
import PageHero from '../components/PageHero'
import { gallery, IMG } from '../data/site'

const tabs = ['All', 'The Resort', 'Accommodation', 'Dining', 'Guest Experiences']

export default function GalleryPage() {
  const [tab, setTab] = useState('All')
  const [active, setActive] = useState<string | null>(null)
  const items = useMemo(
    () => (tab === 'All' ? gallery : gallery.filter((g) => g.category === tab)),
    [tab],
  )

  return (
    <>
      <PageHero title="The Casa De Lipe Gallery" image={IMG('2350')} />
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">A glimpse into life at Casa De Lipe</p>
          <h2>Spaces, sunsets, and the Andaman</h2>
          <p className="lead">
            Explore the villas, private beach, dining rooms, and island hours that define a stay on
            the sunset shore of Koh Lipe.
          </p>
          <div className="tabs" style={{ marginTop: 36 }}>
            {tabs.map((t) => (
              <button key={t} className={tab === t ? 'active' : ''} type="button" onClick={() => setTab(t)}>
                {t}
              </button>
            ))}
          </div>
          <div className="masonry">
            {items.map((item) => (
              <img
                key={item.src}
                src={item.src}
                alt={item.alt}
                onClick={() => setActive(item.src)}
              />
            ))}
          </div>
        </div>
      </section>
      {active ? (
        <div className="lightbox" onClick={() => setActive(null)} role="presentation">
          <button type="button" aria-label="Close" onClick={() => setActive(null)}>
            ×
          </button>
          <img src={active} alt="" />
        </div>
      ) : null}
    </>
  )
}
