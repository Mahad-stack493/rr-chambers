import { Helmet } from 'react-helmet-async'
import { SITE } from '@/constants/site.js'
import Hero from '@/components/sections/Hero.jsx'
import Marquee from '@/components/sections/Marquee.jsx'
import FirmIntro from '@/components/sections/FirmIntro.jsx'
import AboutLawyer from '@/components/sections/AboutLawyer.jsx'
import PracticeAreas from '@/components/sections/PracticeAreas.jsx'
import WhyUs from '@/components/sections/WhyUs.jsx'
import Testimonials from '@/components/sections/Testimonials.jsx'
import CtaBanner from '@/components/common/CtaBanner.jsx'

function Home() {
  return (
    <>
      <Helmet>
        <title>{`${SITE.name} | Advocates & Legal Consultants`}</title>
      </Helmet>
      <Hero />
      <Marquee />
      <FirmIntro />
      <AboutLawyer />
      <PracticeAreas />
      <WhyUs />
      <Testimonials />
      <CtaBanner />
    </>
  )
}

export default Home
