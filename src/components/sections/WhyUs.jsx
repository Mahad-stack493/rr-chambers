import { ArrowRight } from 'lucide-react'
import { WHY_US } from '@/data/siteContent.js'
import { ROUTES } from '@/constants/routes.js'
import SectionHeading from '@/components/common/SectionHeading.jsx'
import Reveal from '@/components/common/Reveal.jsx'
import Button from '@/components/common/Button.jsx'
import './WhyUs.css'

function WhyUs() {
  return (
    <section className="section section--dark why-us">
      <div className="container why-us__grid">
        <div className="why-us__intro">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Counsel you can *rely on* when it matters most"
            subtitle="We combine rigorous legal analysis with genuine care for every client we represent."
          />
          <Button to={ROUTES.CONTACT}>
            Speak with us <ArrowRight size={16} />
          </Button>
        </div>

        <ol className="why-us__list">
          {WHY_US.map((item, index) => (
            <Reveal as="li" key={item.title} className="why-us__item" delay={index * 100}>
              <span className="why-us__number">0{index + 1}</span>
              <div>
                <h3 className="why-us__title">{item.title}</h3>
                <p className="why-us__text">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default WhyUs
