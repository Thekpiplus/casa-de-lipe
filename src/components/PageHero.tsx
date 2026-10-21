type Props = {
  title: string
  image: string
  kicker?: string
}

export default function PageHero({ title, image, kicker }: Props) {
  return (
    <section className="page-hero">
      <img src={image} alt={title} />
      <h1>
        {kicker ? <span className="eyebrow" style={{ display: 'block', color: '#e8d7b3' }}>{kicker}</span> : null}
        {title}
      </h1>
    </section>
  )
}
