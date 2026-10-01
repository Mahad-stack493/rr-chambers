import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { ROUTES } from '@/constants/routes.js'
import { CONTACT } from '@/data/siteContent.js'
import { emphasize } from '@/utils/emphasis.jsx'
import Reveal from './Reveal.jsx'
import './CtaBanner.css'

function CtaBanner({ title = 'Let’s discuss *your case.*' }) {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <Reveal className="cta__text">
          <span className="eyebrow">Confidential Consultation</span>
          <h2 className="cta__title">{emphasize(title)}</h2>
          <div className="cta__meta">
            <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a>
            <span />
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <Link to={ROUTES.CONTACT} className="cta__circle">
            <span>Book a<br />consultation</span>
            <ArrowUpRight size={28} strokeWidth={1.25} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

export default CtaBanner
