import { useEffect, useState } from 'react'
import { DISCLAIMER } from '@/data/legal.js'
import Button from './Button.jsx'
import LogoMark from './LogoMark.jsx'
import './DisclaimerModal.css'

const STORAGE_KEY = 'rr-disclaimer-accepted'
export const OPEN_DISCLAIMER_EVENT = 'rr:open-disclaimer'

// Session-scoped so the notice is shown again on every new visit.
function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(() => sessionStorage.getItem(STORAGE_KEY) !== 'true')

  useEffect(() => {
    const open = () => setIsOpen(true)
    window.addEventListener(OPEN_DISCLAIMER_EVENT, open)
    return () => window.removeEventListener(OPEN_DISCLAIMER_EVENT, open)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleAgree = () => {
    sessionStorage.setItem(STORAGE_KEY, 'true')
    setIsOpen(false)
  }

  const handleDecline = () => {
    window.location.href = 'https://www.google.com'
  }

  return (
    <div className="disclaimer" role="dialog" aria-modal="true" aria-labelledby="disclaimer-title">
      <div className="disclaimer__box">
        <LogoMark size={64} className="disclaimer__mark" />
        <h2 id="disclaimer-title" className="disclaimer__title">{DISCLAIMER.title}</h2>
        {DISCLAIMER.paragraphs.map((text) => (
          <p key={text} className="disclaimer__text">{text}</p>
        ))}
        <ol className="disclaimer__list">
          {DISCLAIMER.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ol>
        <div className="disclaimer__actions">
          <Button onClick={handleAgree}>I Agree</Button>
          <Button onClick={handleDecline} variant="ghost">Decline</Button>
        </div>
      </div>
    </div>
  )
}

export default DisclaimerModal
