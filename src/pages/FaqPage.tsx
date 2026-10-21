import PageHero from '../components/PageHero'
import { faqs, site } from '../data/site'

export default function FaqPage() {
  return (
    <>
      <PageHero title="FAQ" image={site.story} />
      <section className="section">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <p className="eyebrow">Good to know</p>
          <h2>Questions before you arrive</h2>
          <div className="faq" style={{ marginTop: 36 }}>
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>
                  {item.q}
                  <span>+</span>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
