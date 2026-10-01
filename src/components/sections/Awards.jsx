import { AWARDS } from '@/data/about.js'
import SectionHeading from '@/components/common/SectionHeading.jsx'
import Reveal from '@/components/common/Reveal.jsx'
import './Awards.css'

function Awards() {
  return (
    <section className="section section--dark">
      <div className="container">
        <SectionHeading
          eyebrow="Awards & Recognition"
          title="Recognised for *excellence*"
          subtitle="Our work has been acknowledged by peers, clients and the legal community."
          split
        />
        <ul className="awards">
          {AWARDS.map((award, index) => (
            <Reveal as="li" key={award.title} className="award-row" delay={index * 80}>
              <span className="award-row__year">{award.year}</span>
              <h3 className="award-row__title">{award.title}</h3>
              <span className="award-row__issuer">{award.issuer}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Awards
