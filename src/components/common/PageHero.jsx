import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants/routes.js'
import { emphasize } from '@/utils/emphasis.jsx'
import './PageHero.css'

function PageHero({ title, subtitle, breadcrumbs = [], watermark }) {
  return (
    <section className="page-hero">
      {watermark && (
        <span className="page-hero__watermark" aria-hidden="true">{watermark}</span>
      )}
      <div className="container page-hero__inner">
        <nav className="page-hero__crumbs" aria-label="Breadcrumb">
          <Link to={ROUTES.HOME}>Home</Link>
          {breadcrumbs.map((crumb) => (
            <span key={crumb.label} className="page-hero__crumb">
              <span className="page-hero__sep">/</span>
              {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : <span className="is-current">{crumb.label}</span>}
            </span>
          ))}
        </nav>
        <div className="page-hero__body">
          <h1 className="page-hero__title">{emphasize(title)}</h1>
          {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
        </div>
      </div>
    </section>
  )
}

export default PageHero
