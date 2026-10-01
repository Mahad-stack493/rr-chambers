import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { FIRM_INTRO } from '@/data/siteContent.js'
import { ROUTES } from '@/constants/routes.js'
import { emphasize } from '@/utils/emphasis.jsx'
import Reveal from '@/components/common/Reveal.jsx'
import './FirmIntro.css'

function FirmIntro() {
  return (
    <section className="section firm-intro">
      <div className="container">
        <div className="firm-intro__top">
          <Reveal as="span" className="eyebrow">{FIRM_INTRO.eyebrow}</Reveal>
          <Reveal as="p" className="firm-intro__statement" delay={100}>
            {emphasize(FIRM_INTRO.statement)}
          </Reveal>
        </div>

        <div className="firm-intro__bottom">
          <Reveal className="firm-intro__copy" delay={150}>
            {FIRM_INTRO.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
            <Link to={ROUTES.ABOUT} className="link-arrow">
              More about the chambers <ArrowRight size={14} />
            </Link>
          </Reveal>

          <ol className="firm-intro__pillars">
            {FIRM_INTRO.pillars.map((pillar, index) => (
              <Reveal as="li" key={pillar.title} className="firm-intro__pillar" delay={200 + index * 120}>
                <span className="firm-intro__index">0{index + 1}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default FirmIntro
