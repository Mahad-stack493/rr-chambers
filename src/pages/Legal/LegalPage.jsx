import { Helmet } from 'react-helmet-async'
import { SITE } from '@/constants/site.js'
import { LAST_UPDATED } from '@/data/legal.js'
import PageHero from '@/components/common/PageHero.jsx'
import './LegalPage.css'

function LegalPage({ title, subtitle, sections }) {
  return (
    <>
      <Helmet>
        <title>{`${title} | ${SITE.name}`}</title>
      </Helmet>
      <PageHero title={title} subtitle={subtitle} watermark="Legal" breadcrumbs={[{ label: title }]} />
      <section className="section">
        <div className="container legal">
          <aside className="legal__toc">
            <h3 className="legal__toc-title">Contents</h3>
            <ol>
              {sections.map((section, index) => (
                <li key={section.heading}>
                  <a href={`#section-${index + 1}`}>{section.heading}</a>
                </li>
              ))}
            </ol>
          </aside>

          <article className="legal__content">
            <p className="legal__updated">Last updated: {LAST_UPDATED}</p>
            {sections.map((section, index) => (
              <div key={section.heading} id={`section-${index + 1}`} className="legal__section">
                <h2>
                  <em>{String(index + 1).padStart(2, '0')}.</em> {section.heading}
                </h2>
                {section.body.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
            ))}
          </article>
        </div>
      </section>
    </>
  )
}

export default LegalPage
