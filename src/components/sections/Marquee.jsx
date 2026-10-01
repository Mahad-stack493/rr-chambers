import { PRACTICE_AREAS } from '@/data/practiceAreas.js'
import './Marquee.css'

function Marquee() {
  const items = [...PRACTICE_AREAS, ...PRACTICE_AREAS]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((area, index) => (
          <span key={`${area.slug}-${index}`} className="marquee__item">
            {area.title}
            <span className="marquee__star">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
