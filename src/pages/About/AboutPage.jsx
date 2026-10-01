import { Helmet } from 'react-helmet-async'
import { SITE } from '@/constants/site.js'
import { FIRM_STORY } from '@/data/about.js'
import { STATS } from '@/data/siteContent.js'
import PageHero from '@/components/common/PageHero.jsx'
import Reveal from '@/components/common/Reveal.jsx'
import CtaBanner from '@/components/common/CtaBanner.jsx'
import AboutLawyer from '@/components/sections/AboutLawyer.jsx'
import Awards from '@/components/sections/Awards.jsx'
import Team from '@/components/sections/Team.jsx'
import News from '@/components/sections/News.jsx'
import './AboutPage.css'

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>{`About Us | ${SITE.name}`}</title>
      </Helmet>
      <PageHero
        title="About *the chambers*"
        subtitle="Our story, our people and the recognition we have earned along the way."
        watermark="Since 2010"
        breadcrumbs={[{ label: 'About' }]}
      />

      <section className="section">
        <div className="container story">
          <Reveal as="span" className="eyebrow">{FIRM_STORY.eyebrow}</Reveal>
          <div className="story__body">
            <Reveal as="h2" className="story__title" delay={100}>
              Built on <em>trust,</em> driven by <em>results.</em>
            </Reveal>
            <div className="story__cols">
              {FIRM_STORY.paragraphs.map((text, index) => (
                <Reveal as="p" key={text} delay={150 + index * 100}>{text}</Reveal>
              ))}
            </div>
            <dl className="story__stats">
              {STATS.map((stat, index) => (
                <Reveal key={stat.label} className="story__stat" delay={index * 100}>
                  <dd>{stat.value}</dd>
                  <dt>{stat.label}</dt>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <AboutLawyer />
      <Awards />
      <Team />
      <News />
      <CtaBanner />
    </>
  )
}

export default AboutPage
