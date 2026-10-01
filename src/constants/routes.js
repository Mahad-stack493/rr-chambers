export const ROUTES = {
  HOME: '/',
  PRACTICE_AREAS: '/practice-areas',
  PRACTICE_AREA: '/practice-areas/:slug',
  ABOUT: '/about',
  CONTACT: '/contact',
  PRIVACY: '/privacy-policy',
  TERMS: '/terms-and-conditions',
}

export const practiceAreaPath = (slug) => `${ROUTES.PRACTICE_AREAS}/${slug}`
