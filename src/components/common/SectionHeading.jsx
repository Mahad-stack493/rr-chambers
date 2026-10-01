import { emphasize } from '@/utils/emphasis.jsx'
import Reveal from './Reveal.jsx'
import './SectionHeading.css'

function SectionHeading({ eyebrow, title, subtitle, align = 'left', split = false }) {
  return (
    <Reveal className={`section-heading section-heading--${align} ${split ? 'section-heading--split' : ''}`}>
      <div>
        {eyebrow && <span className="eyebrow section-heading__eyebrow">{eyebrow}</span>}
        <h2 className="section-heading__title">{emphasize(title)}</h2>
      </div>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </Reveal>
  )
}

export default SectionHeading
