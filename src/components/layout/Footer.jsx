import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import { NAV_LINKS, LEGAL_LINKS, CONTACT } from '@/data/siteContent.js'
import { PRACTICE_AREAS } from '@/data/practiceAreas.js'
import { SITE } from '@/constants/site.js'
import { practiceAreaPath } from '@/constants/routes.js'
import { OPEN_DISCLAIMER_EVENT } from '@/components/common/DisclaimerModal.jsx'
import Logo from '@/components/common/Logo.jsx'
import './Footer.css'

const year = new Date().getFullYear()

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__intro">
            <Logo size={56} className="footer__logo" />
            <p className="footer__tagline">
              Trusted counsel for <em>life’s</em> most important matters.
            </p>
          </div>

          <div>
            <h4 className="footer__heading">Explore</h4>
            <ul className="footer__list">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__heading">Practice</h4>
            <ul className="footer__list">
              {PRACTICE_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link to={practiceAreaPath(area.slug)}>{area.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__heading">Contact</h4>
            <address className="footer__contact">
              <span>{CONTACT.address}</span>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </address>
          </div>
        </div>

        <div className="footer__wordmark" aria-hidden="true">
          RR <em>Chambers</em>
        </div>

        <div className="footer__bottom">
          <span>© {year} {SITE.name}. All rights reserved.</span>
          <span className="footer__legal">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.to} to={link.to}>{link.label}</Link>
            ))}
            <button type="button" onClick={() => window.dispatchEvent(new Event(OPEN_DISCLAIMER_EVENT))}>
              Disclaimer
            </button>
          </span>
          <button type="button" className="footer__top" onClick={scrollToTop}>
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
