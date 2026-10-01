import { Helmet } from 'react-helmet-async'
import { SITE } from '@/constants/site.js'
import { CONTACT } from '@/data/siteContent.js'
import PageHero from '@/components/common/PageHero.jsx'
import Contact from '@/components/sections/Contact.jsx'

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>{`Contact Us | ${SITE.name}`}</title>
      </Helmet>
      <PageHero
        title="Let’s *talk.*"
        subtitle="Reach out for a confidential consultation. We are here to help."
        watermark="Contact"
        breadcrumbs={[{ label: 'Contact' }]}
      />
      <Contact />
      <iframe
        title={`${SITE.name} location`}
        src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&output=embed`}
        width="100%"
        height="460"
        style={{ border: 0, display: 'block', filter: 'grayscale(1) contrast(1.05)' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </>
  )
}

export default ContactPage
