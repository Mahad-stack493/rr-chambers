import LogoMark from './LogoMark.jsx'
import './Logo.css'

function Logo({ size = 44, showTagline = true, className = '' }) {
  return (
    <span className={`logo ${className}`.trim()}>
      <LogoMark size={size} className="logo__mark" />
      <span className="logo__text">
        <span className="logo__name">
          RR <em>Chambers</em>
        </span>
        {showTagline && <span className="logo__tagline">Advocates &amp; Legal Consultants</span>}
      </span>
    </span>
  )
}

export default Logo
