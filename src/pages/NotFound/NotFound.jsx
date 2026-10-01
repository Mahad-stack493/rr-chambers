import { Helmet } from 'react-helmet-async'
import { SITE } from '@/constants/site.js'
import { ROUTES } from '@/constants/routes.js'
import Button from '@/components/common/Button.jsx'

function NotFound() {
  return (
    <>
      <Helmet>
        <title>{`Page Not Found | ${SITE.name}`}</title>
      </Helmet>
      <section className="section section--dark" style={{ minHeight: '80vh', paddingTop: 'calc(var(--header-height) + 4rem)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '6rem', color: 'var(--color-gold)' }}>404</h1>
          <p>The page you are looking for does not exist.</p>
          <Button to={ROUTES.HOME}>Back to Home</Button>
        </div>
      </section>
    </>
  )
}

export default NotFound
