import { TERMS } from '@/data/legal.js'
import LegalPage from './LegalPage.jsx'

function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      subtitle="The terms governing your use of the RR Chambers website."
      sections={TERMS}
    />
  )
}

export default Terms
