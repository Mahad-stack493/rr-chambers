import { Scale } from 'lucide-react'
import './RotatingBadge.css'

function RotatingBadge({ text, className = '' }) {
  return (
    <div className={`rotating-badge ${className}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 200 200" className="rotating-badge__ring">
        <defs>
          <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text>
          <textPath href="#badge-circle" textLength="486" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <Scale className="rotating-badge__icon" size={34} strokeWidth={1.25} />
    </div>
  )
}

export default RotatingBadge
