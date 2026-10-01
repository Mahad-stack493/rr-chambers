import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout.jsx'
import Home from '@/pages/Home/Home.jsx'
import PracticeAreasPage from '@/pages/PracticeAreas/PracticeAreasPage.jsx'
import PracticeAreaDetail from '@/pages/PracticeAreaDetail/PracticeAreaDetail.jsx'
import AboutPage from '@/pages/About/AboutPage.jsx'
import ContactPage from '@/pages/Contact/ContactPage.jsx'
import PrivacyPolicy from '@/pages/Legal/PrivacyPolicy.jsx'
import Terms from '@/pages/Legal/Terms.jsx'
import NotFound from '@/pages/NotFound/NotFound.jsx'
import { ROUTES } from '@/constants/routes.js'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.PRACTICE_AREAS} element={<PracticeAreasPage />} />
        <Route path={ROUTES.PRACTICE_AREA} element={<PracticeAreaDetail />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route path={ROUTES.PRIVACY} element={<PrivacyPolicy />} />
        <Route path={ROUTES.TERMS} element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
