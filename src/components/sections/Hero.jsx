import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { HERO, STATS } from '@/data/siteContent.js'
import { emphasize } from '@/utils/emphasis.jsx'
import Button from '@/components/common/Button.jsx'
import RotatingBadge from '@/components/common/RotatingBadge.jsx'
import './Hero.css'

function Hero() {
  const [firstLine, secondLine] = HERO.title.split('\n')

  const scrollPastHero = (event) => {
    const hero = event.currentTarget.closest('.hero')
    window.scrollTo({ top: hero.offsetTop + hero.offsetHeight, behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="eyebrow hero__eyebrow">{HERO.eyebrow}</span>
          <h1 className="hero__title">
            <span className="hero__line">{emphasize(firstLine)}</span>
            <span className="hero__line hero__line--indent">{emphasize(secondLine)}</span>
          </h1>
          <p className="hero__subtitle">{HERO.subtitle}</p>
          <div className="hero__actions">
            <Button to={HERO.primaryCta.to}>
              {HERO.primaryCta.label} <ArrowRight size={16} />
            </Button>
            <Link to={HERO.secondaryCta.to} className="link-arrow hero__link">
              {HERO.secondaryCta.label} <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__arch">
            <img src={HERO.image} alt="" />
          </div>
          <RotatingBadge text={HERO.badge} className="hero__badge" />
          <span className="hero__vertical">Justice · Integrity · Counsel</span>
        </div>
      </div>

      <div className="container hero__bottom">
        <dl className="hero__stats">
          {STATS.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <button type="button" className="hero__scroll" onClick={scrollPastHero} aria-label="Scroll to content">
        <span className="hero__scroll-label">Scroll</span>
        <span className="hero__scroll-track">
          <span className="hero__scroll-thumb" />
        </span>
      </button>
    </section>
  )
}

export default Hero
