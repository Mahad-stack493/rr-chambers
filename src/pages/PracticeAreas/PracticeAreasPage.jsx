import { Helmet } from 'react-helmet-async'
import { SITE } from '@/constants/site.js'
import { GENERAL_FAQS } from '@/data/practiceAreas.js'
import PageHero from '@/components/common/PageHero.jsx'
import SectionHeading from '@/components/common/SectionHeading.jsx'
import Accordion from '@/components/common/Accordion.jsx'
import CtaBanner from '@/components/common/CtaBanner.jsx'
import Services from '@/components/sections/Services.jsx'
import PracticeAreas from '@/components/sections/PracticeAreas.jsx'

function PracticeAreasPage() {
  return (
    <>
      <Helmet>
        <title>{`Practice Areas & Services | ${SITE.name}`}</title>
      </Helmet>
      <PageHero
        title="Practice areas & *services*"
        subtitle="Comprehensive legal services tailored to individuals, families and businesses."
        watermark="Expertise"
        breadcrumbs={[{ label: 'Practice Areas' }]}
      />
      <Services />
      <PracticeAreas
        className="section section--cream"
        eyebrow="Areas of Expertise"
        title="Explore our *practice*"
        subtitle="Select a practice area to learn how we can help, along with answers to common questions."
      />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="FAQs" title="Frequently asked *questions*" split />
          <Accordion items={GENERAL_FAQS} />
        </div>
      </section>
      <CtaBanner />
    </>
  )
}

export default PracticeAreasPage
