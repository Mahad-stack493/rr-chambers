import { ArrowUpRight } from 'lucide-react'
import { NEWS } from '@/data/about.js'
import SectionHeading from '@/components/common/SectionHeading.jsx'
import Reveal from '@/components/common/Reveal.jsx'
import './News.css'

function News() {
  return (
    <section className="section section--cream">
      <div className="container">
        <SectionHeading
          eyebrow="News & Updates"
          title="From the *chambers*"
          subtitle="Firm announcements, legal updates and community initiatives."
          split
        />
        <ul className="news">
          {NEWS.map((item, index) => (
            <Reveal as="li" key={item.title} className="news-row" delay={index * 80}>
              <time className="news-row__date">{item.date}</time>
              <span className="news-row__category">{item.category}</span>
              <div className="news-row__body">
                <h3 className="news-row__title">{item.title}</h3>
                <p className="news-row__excerpt">{item.excerpt}</p>
              </div>
              <ArrowUpRight size={26} strokeWidth={1.25} className="news-row__arrow" />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default News
