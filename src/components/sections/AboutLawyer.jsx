import { ArrowRight } from 'lucide-react'
import { LAWYER } from '@/data/siteContent.js'
import { ROUTES } from '@/constants/routes.js'
import Reveal from '@/components/common/Reveal.jsx'
import Button from '@/components/common/Button.jsx'
import './AboutLawyer.css'

function AboutLawyer() {
  return (
    <section className="section section--cream lawyer">
      <div className="container lawyer__grid">
        <Reveal className="lawyer__media">
          <div className="lawyer__arch">
            <img src={LAWYER.image} alt={LAWYER.name} />
          </div>
          <span className="lawyer__caption">{LAWYER.title}</span>
        </Reveal>

        <div className="lawyer__content">
          <Reveal as="span" className="eyebrow">{LAWYER.eyebrow}</Reveal>
          <Reveal as="h2" className="lawyer__name" delay={100}>
            {LAWYER.name.replace(/^Adv\.\s*/, '')}
            <em>Adv.</em>
          </Reveal>

          <Reveal as="blockquote" className="lawyer__quote" delay={150}>
            “{LAWYER.quote}”
          </Reveal>

          <Reveal delay={200}>
            {LAWYER.bio.map((text) => (
              <p key={text} className="lawyer__text">{text}</p>
            ))}
          </Reveal>

          <Reveal as="ul" className="lawyer__credentials" delay={250}>
            {LAWYER.credentials.map((item, index) => (
              <li key={item}>
                <span>0{index + 1}</span>
                {item}
              </li>
            ))}
          </Reveal>

          <Reveal delay={300}>
            <Button to={ROUTES.CONTACT} variant="dark">
              Schedule a meeting <ArrowRight size={16} />
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default AboutLawyer
