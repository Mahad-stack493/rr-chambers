import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { TESTIMONIALS } from '@/data/siteContent.js'
import Reveal from '@/components/common/Reveal.jsx'
import './Testimonials.css'

const AUTOPLAY_MS = 7000

function Testimonials() {
  const [active, setActive] = useState(0)
  const total = TESTIMONIALS.length
  const current = TESTIMONIALS[active]

  useEffect(() => {
    const timer = setTimeout(() => setActive((i) => (i + 1) % total), AUTOPLAY_MS)
    return () => clearTimeout(timer)
  }, [active, total])

  const go = (step) => setActive((i) => (i + step + total) % total)

  return (
    <section className="section testimonials">
      <div className="container">
        <Reveal className="testimonials__head">
          <span className="eyebrow">Client Voices</span>
          <span className="testimonials__count">
            <strong>0{active + 1}</strong> / 0{total}
          </span>
        </Reveal>

        <Reveal className="testimonials__stage" delay={100}>
          <span className="testimonials__mark" aria-hidden="true">“</span>
          <figure key={active} className="testimonials__slide">
            <blockquote className="testimonials__quote">{current.quote}</blockquote>
            <figcaption className="testimonials__author">
              <span className="testimonials__name">{current.name}</span>
              <span className="testimonials__role">{current.role}</span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="testimonials__controls">
          <div className="testimonials__progress">
            {TESTIMONIALS.map((item, index) => (
              <button
                key={item.name}
                aria-label={`Show testimonial ${index + 1}`}
                className={`testimonials__bar ${index === active ? 'is-active' : ''}`}
                onClick={() => setActive(index)}
              >
                <span style={{ animationDuration: `${AUTOPLAY_MS}ms` }} />
              </button>
            ))}
          </div>
          <div className="testimonials__arrows">
            <button aria-label="Previous testimonial" onClick={() => go(-1)}>
              <ArrowLeft size={20} strokeWidth={1.5} />
            </button>
            <button aria-label="Next testimonial" onClick={() => go(1)}>
              <ArrowRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
