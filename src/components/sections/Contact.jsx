import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { CONTACT } from '@/data/siteContent.js'
import { PRACTICE_AREAS } from '@/data/practiceAreas.js'
import SectionHeading from '@/components/common/SectionHeading.jsx'
import Reveal from '@/components/common/Reveal.jsx'
import Button from '@/components/common/Button.jsx'
import './Contact.css'

const CONTACT_ITEMS = [
  { label: 'Visit', value: CONTACT.address },
  { label: 'Call', value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, '')}` },
  { label: 'Write', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { label: 'Hours', value: CONTACT.hours },
]

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    event.target.reset()
  }

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Tell us about *your matter*"
          subtitle="Share a few details and we will get back to you within one business day. All enquiries are handled in strict confidence."
          split
        />

        <div className="contact">
          <Reveal as="dl" className="contact__info">
            {CONTACT_ITEMS.map(({ label, value, href }) => (
              <div key={label} className="contact__item">
                <dt>{label}</dt>
                <dd>{href ? <a href={href}>{value}</a> : value}</dd>
              </div>
            ))}
          </Reveal>

          <Reveal as="form" className="contact__form" onSubmit={handleSubmit} delay={150}>
            <div className="contact__row">
              <label className="contact__field">
                <input type="text" name="name" required placeholder=" " />
                <span>Full name</span>
              </label>
              <label className="contact__field">
                <input type="tel" name="phone" required placeholder=" " />
                <span>Phone</span>
              </label>
            </div>
            <div className="contact__row">
              <label className="contact__field">
                <input type="email" name="email" required placeholder=" " />
                <span>Email</span>
              </label>
              <label className="contact__field contact__field--select">
                <select name="area" defaultValue="" required>
                  <option value="" disabled>Select</option>
                  {PRACTICE_AREAS.map((area) => (
                    <option key={area.slug}>{area.title}</option>
                  ))}
                  <option>Other</option>
                </select>
                <span>Practice area</span>
              </label>
            </div>
            <label className="contact__field">
              <textarea name="message" rows={4} required placeholder=" " />
              <span>Briefly describe your matter</span>
            </label>
            <label className="contact__consent">
              <input type="checkbox" required />
              <span>I understand that submitting this form does not create a lawyer–client relationship.</span>
            </label>
            <div className="contact__submit">
              <Button type="submit" variant="dark">
                Send enquiry <ArrowRight size={16} />
              </Button>
              {submitted && (
                <p className="contact__success">Thank you — we will be in touch shortly.</p>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
