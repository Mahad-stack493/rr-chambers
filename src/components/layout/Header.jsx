import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/data/siteContent.js'
import { SITE } from '@/constants/site.js'
import { ROUTES } from '@/constants/routes.js'
import Button from '@/components/common/Button.jsx'
import Logo from '@/components/common/Logo.jsx'
import './Header.css'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const [prevPath, setPrevPath] = useState(pathname)
  if (prevPath !== pathname) {
    setPrevPath(pathname)
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled || isMenuOpen ? 'header--solid' : ''}`}>
      <div className="container header__inner">
        <Link to={ROUTES.HOME} className="header__logo" aria-label={`${SITE.name} — Home`}>
          <Logo size={isScrolled ? 40 : 46} />
        </Link>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === ROUTES.HOME}
              className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
          <Button to={ROUTES.CONTACT}>Consult Now</Button>
        </nav>

        <button
          className="header__toggle"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  )
}

export default Header
