// Sample placeholder content — replace with real RR Chambers details.
import { ROUTES } from '@/constants/routes.js'

export const NAV_LINKS = [
  { label: 'Home', to: ROUTES.HOME },
  { label: 'Practice Areas', to: ROUTES.PRACTICE_AREAS },
  { label: 'About', to: ROUTES.ABOUT },
  { label: 'Contact', to: ROUTES.CONTACT },
]

export const LEGAL_LINKS = [
  { label: 'Privacy Policy', to: ROUTES.PRIVACY },
  { label: 'Terms & Conditions', to: ROUTES.TERMS },
]

export const HERO = {
  eyebrow: 'Advocates & Legal Consultants — Est. 2010',
  title: 'Principled counsel.\n*Proven* results.',
  badge: 'RR CHAMBERS • ADVOCATES • SINCE 2010 • ',
  image:
    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
  subtitle:
    'RR Chambers provides strategic, client-focused legal representation across civil, criminal, corporate and family matters.',
  primaryCta: { label: 'Book a Consultation', to: ROUTES.CONTACT },
  secondaryCta: { label: 'Our Practice Areas', to: ROUTES.PRACTICE_AREAS },
}

export const STATS = [
  { value: '15+', label: 'Years of Practice' },
  { value: '1,200+', label: 'Cases Handled' },
  { value: '95%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Client Support' },
]

export const FIRM_INTRO = {
  eyebrow: 'About the Firm',
  statement:
    'We believe every client deserves *rigorous* advocacy, *honest* advice and a counsel who treats their matter as if it were their own.',
  title: 'A tradition of integrity and legal excellence',
  paragraphs: [
    'Founded on the belief that every client deserves thoughtful, rigorous advocacy, RR Chambers has built a reputation for clarity, discretion and results.',
    'Our team combines deep courtroom experience with practical, business-minded advice — guiding individuals and organisations through their most important legal matters.',
  ],
  pillars: [
    { title: 'Integrity', text: 'Honest advice, even when it is not what you want to hear.' },
    { title: 'Excellence', text: 'Meticulous preparation for every matter, big or small.' },
    { title: 'Commitment', text: 'Relentless advocacy for our clients’ best interests.' },
  ],
}

export const LAWYER = {
  eyebrow: 'About the Lawyer',
  name: 'Adv. R. R. Sample',
  title: 'Founder & Principal Advocate',
  quote: 'The law is not merely a profession — it is a promise to stand by people when it matters most.',
  image:
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
  bio: [
    'Adv. R. R. Sample is the founder of RR Chambers with over 15 years of experience practising before the High Court, District Courts and various tribunals.',
    'Known for a sharp strategic mind and calm courtroom presence, they have successfully represented individuals, families and businesses in complex civil, criminal and commercial matters.',
  ],
  credentials: [
    'LL.B., National Law University',
    'LL.M. in Corporate Law',
    'Enrolled with the State Bar Council',
    'Member, High Court Bar Association',
  ],
}

export const WHY_US = [
  { title: 'Experienced Advocacy', description: 'Years of courtroom experience across trial and appellate courts.' },
  { title: 'Client-First Approach', description: 'Clear communication, transparent fees and regular case updates.' },
  { title: 'Strategic Thinking', description: 'Every matter is approached with a tailored, outcome-driven strategy.' },
  { title: 'Absolute Confidentiality', description: 'Your information is handled with the utmost discretion and care.' },
]

export const TESTIMONIALS = [
  {
    quote:
      'RR Chambers handled my property dispute with remarkable professionalism. I was kept informed at every step and the outcome exceeded my expectations.',
    name: 'A. Sharma',
    role: 'Property Litigation Client',
  },
  {
    quote:
      'Sharp, dependable and genuinely invested in our business. Their contract advice has saved us from costly mistakes more than once.',
    name: 'K. Mehta',
    role: 'Managing Director',
  },
  {
    quote:
      'During a very difficult family matter, they were compassionate yet firm. I could not have asked for better representation.',
    name: 'S. Verma',
    role: 'Family Law Client',
  },
]

export const CONTACT = {
  address: '123 Sample Street, City Centre, Your City — 000000',
  phone: '+00 00000 00000',
  email: 'contact@rrchambers.example',
  hours: 'Mon – Sat: 10:00 AM – 7:00 PM',
  mapQuery: 'High Court',
}
