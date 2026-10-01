import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { PRACTICE_AREAS } from '@/data/practiceAreas.js'
import { practiceAreaPath } from '@/constants/routes.js'
import SectionHeading from '@/components/common/SectionHeading.jsx'
import Reveal from '@/components/common/Reveal.jsx'
import './PracticeAreas.css'

function PracticeAreas({
  eyebrow = 'Practice Areas',
  title = 'Where we *practise*',
  subtitle = 'We advise and represent clients across a broad spectrum of legal matters, with the depth to handle complex disputes.',
  className = 'section',
}) {
  return (
    <section className={className}>
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} split />
        <ul className="practice-list">
          {PRACTICE_AREAS.map(({ slug, icon: Icon, title: areaTitle, summary }, index) => (
            <Reveal as="li" key={slug} delay={index * 60}>
              <Link to={practiceAreaPath(slug)} className="practice-row">
                <span className="practice-row__index">0{index + 1}</span>
                <h3 className="practice-row__title">{areaTitle}</h3>
                <p className="practice-row__summary">{summary}</p>
                <span className="practice-row__icon">
                  <Icon size={22} strokeWidth={1.25} />
                </span>
                <span className="practice-row__arrow">
                  <ArrowUpRight size={22} strokeWidth={1.5} />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default PracticeAreas
