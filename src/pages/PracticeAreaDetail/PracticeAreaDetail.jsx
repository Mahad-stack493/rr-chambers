import { Link, Navigate, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { SITE } from '@/constants/site.js'
import { ROUTES, practiceAreaPath } from '@/constants/routes.js'
import { PRACTICE_AREAS, getPracticeArea } from '@/data/practiceAreas.js'
import { CONTACT } from '@/data/siteContent.js'
import PageHero from '@/components/common/PageHero.jsx'
import SectionHeading from '@/components/common/SectionHeading.jsx'
import Accordion from '@/components/common/Accordion.jsx'
import Reveal from '@/components/common/Reveal.jsx'
import CtaBanner from '@/components/common/CtaBanner.jsx'
import './PracticeAreaDetail.css'

function PracticeAreaDetail() {
  const { slug } = useParams()
  const area = getPracticeArea(slug)

  if (!area) return <Navigate to={ROUTES.PRACTICE_AREAS} replace />

  const index = PRACTICE_AREAS.indexOf(area)
  const next = PRACTICE_AREAS[(index + 1) % PRACTICE_AREAS.length]

  return (
    <>
      <Helmet>
        <title>{`${area.title} | ${SITE.name}`}</title>
        <meta name="description" content={area.summary} />
      </Helmet>
      <PageHero
        title={area.title}
        subtitle={area.summary}
        watermark={`0${index + 1}`}
        breadcrumbs={[{ label: 'Practice Areas', to: ROUTES.PRACTICE_AREAS }, { label: area.title }]}
      />

      <section className="section">
        <div className="container area-detail">
          <aside className="area-detail__sidebar">
            <span className="eyebrow">All Practice Areas</span>
            <ul className="area-detail__nav">
              {PRACTICE_AREAS.map((item, i) => (
                <li key={item.slug}>
                  <Link to={practiceAreaPath(item.slug)} className={item.slug === area.slug ? 'is-active' : ''}>
                    <span>0{i + 1}</span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="area-detail__help">
              <p>Need help with {area.title.toLowerCase()}?</p>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a>
              <Link to={ROUTES.CONTACT} className="link-arrow">
                Book a consultation <ArrowRight size={14} />
              </Link>
            </div>
          </aside>

          <article className="area-detail__main">
            <Reveal as="p" className="area-detail__lead">{area.description[0]}</Reveal>
            {area.description.slice(1).map((text) => (
              <Reveal as="p" key={text} className="area-detail__text" delay={100}>{text}</Reveal>
            ))}

            <Reveal as="h2" className="area-detail__subtitle">
              What we <em>handle</em>
            </Reveal>
            <ol className="area-detail__services">
              {area.services.map((service, i) => (
                <Reveal as="li" key={service} delay={i * 60}>
                  <span>0{i + 1}</span>
                  {service}
                </Reveal>
              ))}
            </ol>

            <p className="area-detail__disclaimer">
              <strong>Disclaimer —</strong> The information on this page is for general informational purposes only
              and does not constitute legal advice. Please consult an advocate for advice specific to your situation.
            </p>

            <Link to={practiceAreaPath(next.slug)} className="area-detail__next">
              <span className="eyebrow">Next practice area</span>
              <span className="area-detail__next-title">
                {next.title} <ArrowUpRight size={36} strokeWidth={1} />
              </span>
            </Link>
          </article>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <SectionHeading eyebrow="Related FAQs" title="Common *questions*" split />
          <Accordion key={area.slug} items={area.faqs} />
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

export default PracticeAreaDetail
