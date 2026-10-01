import { PRIVACY_POLICY } from '@/data/legal.js'
import LegalPage from './LegalPage.jsx'

function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="How we collect, use and protect your personal information."
      sections={PRIVACY_POLICY}
    />
  )
}

export default PrivacyPolicy
