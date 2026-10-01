import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/data/services.js'
import { useChatbot } from '@/hooks/useChatbot.js'
import SectionHeading from '@/components/common/SectionHeading.jsx'
import Reveal from '@/components/common/Reveal.jsx'
import './Services.css'

function Services() {
  const { open } = useChatbot()

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Our Services"
          title="Four ways we can *help you*"
          subtitle="Choose what suits you best — from instant answers to a detailed, in-person consultation."
          split
        />
        <div className="services">
          {SERVICES.map(({ id, icon: Icon, title, description, cta, to, action }, index) => (
            <Reveal key={id} className="service" delay={index * 100}>
              <div className="service__top">
                <span className="service__index">0{index + 1}</span>
                <Icon size={30} strokeWidth={1.1} className="service__icon" />
              </div>
              <h3 className="service__title">{title}</h3>
              <p className="service__text">{description}</p>
              {action === 'chatbot' ? (
                <button type="button" className="link-arrow service__link" onClick={open}>
                  {cta} <ArrowRight size={14} />
                </button>
              ) : (
                <Link to={to} className="link-arrow service__link">
                  {cta} <ArrowRight size={14} />
                </Link>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
