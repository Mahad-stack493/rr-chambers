// Sample placeholder content — replace with real RR Chambers practice areas.
import { Scale, Briefcase, Home, Users, Shield, FileText } from 'lucide-react'

export const PRACTICE_AREAS = [
  {
    slug: 'civil-litigation',
    icon: Scale,
    title: 'Civil Litigation',
    summary: 'Representation in property, contractual and recovery disputes before all civil forums.',
    description: [
      'Civil disputes can be long, costly and stressful. We provide clear-eyed assessment of your case from day one and pursue the most efficient route to resolution — whether through negotiation, mediation or trial.',
      'Our team appears before civil courts, the High Court and specialised tribunals, handling matters from pleadings and interim relief through to final arguments and appeals.',
    ],
    services: [
      'Suits for recovery of money',
      'Injunctions and interim relief',
      'Specific performance of contracts',
      'Partition and declaration suits',
      'Appeals and revisions',
      'Execution proceedings',
    ],
    faqs: [
      {
        question: 'How long does a civil case usually take?',
        answer:
          'Timelines vary with the court, complexity and the conduct of parties. Many matters settle within months, while contested trials may take longer. We give you a realistic estimate after reviewing your documents.',
      },
      {
        question: 'Can I get urgent interim relief?',
        answer:
          'Yes. Where there is an urgent risk — such as dispossession or disposal of property — courts can grant temporary injunctions, sometimes on the first hearing.',
      },
      {
        question: 'What documents should I bring to the first meeting?',
        answer:
          'Bring any agreements, correspondence, notices, receipts and identity proof relevant to the dispute. A short written timeline of events is also very helpful.',
      },
    ],
  },
  {
    slug: 'criminal-defence',
    icon: Shield,
    title: 'Criminal Defence',
    summary: 'Bail, trial and appellate defence with a focus on protecting your rights at every stage.',
    description: [
      'Facing a criminal allegation is one of the most difficult experiences a person can go through. We act swiftly to protect your liberty and reputation, from the moment of investigation onwards.',
      'We handle anticipatory and regular bail, quashing petitions, trial defence and appeals, with a meticulous approach to evidence and procedure.',
    ],
    services: [
      'Anticipatory and regular bail',
      'Quashing of FIRs',
      'Trial defence',
      'White-collar and economic offences',
      'Cheque bounce matters',
      'Criminal appeals and revisions',
    ],
    faqs: [
      {
        question: 'What is anticipatory bail?',
        answer:
          'Anticipatory bail is a direction that a person be released on bail in the event of arrest. It can be sought when you reasonably apprehend arrest in connection with an allegation.',
      },
      {
        question: 'Should I speak to the police without a lawyer?',
        answer:
          'You should cooperate lawfully with investigating agencies, but it is always advisable to consult a lawyer before giving any statement.',
      },
      {
        question: 'Can an FIR be quashed?',
        answer:
          'In appropriate cases, the High Court can quash an FIR — for example, where the allegations do not disclose an offence or where parties have genuinely settled certain disputes.',
      },
    ],
  },
  {
    slug: 'corporate-commercial',
    icon: Briefcase,
    title: 'Corporate & Commercial',
    summary: 'Company formation, contracts, compliance and commercial dispute resolution.',
    description: [
      'We advise start-ups, SMEs and established businesses on the legal foundations of growth — from incorporation and shareholder arrangements to day-to-day contracts and regulatory compliance.',
      'When disputes arise, we represent clients in commercial courts and arbitration with a practical focus on protecting business relationships and value.',
    ],
    services: [
      'Company and LLP incorporation',
      'Shareholder and partnership agreements',
      'Commercial contract drafting',
      'Regulatory compliance',
      'Arbitration and commercial disputes',
      'Employment and HR policies',
    ],
    faqs: [
      {
        question: 'Should I register a company or an LLP?',
        answer:
          'It depends on your funding plans, number of partners, compliance appetite and tax position. We walk you through the trade-offs before you decide.',
      },
      {
        question: 'Do you review contracts sent by the other party?',
        answer:
          'Yes. We review, flag risks and negotiate changes so that the final contract protects your interests.',
      },
      {
        question: 'What is arbitration?',
        answer:
          'Arbitration is a private dispute resolution process where an independent arbitrator decides the dispute. It is often faster and more confidential than court litigation.',
      },
    ],
  },
  {
    slug: 'family-law',
    icon: Users,
    title: 'Family Law',
    summary: 'Sensitive handling of divorce, custody, maintenance and succession matters.',
    description: [
      'Family matters demand both legal skill and empathy. We guide clients through separation, custody and maintenance with discretion, always keeping the wellbeing of children and families in view.',
      'Wherever possible, we encourage amicable settlement through negotiation and mediation, while remaining fully prepared to advocate firmly in court.',
    ],
    services: [
      'Mutual and contested divorce',
      'Child custody and visitation',
      'Maintenance and alimony',
      'Domestic violence protection',
      'Wills and succession',
      'Guardianship matters',
    ],
    faqs: [
      {
        question: 'How long does a mutual consent divorce take?',
        answer:
          'Mutual consent divorce is generally faster than a contested one. The exact timeline depends on the applicable law and the court, which we explain during consultation.',
      },
      {
        question: 'How is child custody decided?',
        answer:
          'Courts decide custody based on the welfare and best interests of the child, considering factors such as age, stability, education and the child’s own preference where appropriate.',
      },
      {
        question: 'Is my consultation confidential?',
        answer:
          'Absolutely. Everything you share with us is protected by lawyer–client privilege and handled with complete discretion.',
      },
    ],
  },
  {
    slug: 'property-real-estate',
    icon: Home,
    title: 'Property & Real Estate',
    summary: 'Title verification, documentation, registration and real-estate litigation.',
    description: [
      'Property is often the most significant investment a person makes. We help you buy, sell and hold property with confidence through thorough due diligence and airtight documentation.',
      'We also represent clients in property disputes, builder–buyer conflicts and tenancy matters.',
    ],
    services: [
      'Title search and due diligence',
      'Sale deeds and agreements',
      'Registration and mutation',
      'Builder–buyer disputes',
      'Landlord–tenant matters',
      'Property partition',
    ],
    faqs: [
      {
        question: 'Why is title verification important?',
        answer:
          'Title verification confirms that the seller has a clear, marketable right to the property and that it is free of disputes, mortgages or other encumbrances.',
      },
      {
        question: 'What can I do if a builder delays possession?',
        answer:
          'Depending on the facts, you may have remedies before consumer forums, real estate regulatory authorities or civil courts, including refund or compensation.',
      },
      {
        question: 'Do you help with property registration?',
        answer: 'Yes. We prepare documents and assist with the complete registration process.',
      },
    ],
  },
  {
    slug: 'legal-documentation',
    icon: FileText,
    title: 'Legal Documentation',
    summary: 'Drafting and vetting of agreements, wills, deeds, notices and legal opinions.',
    description: [
      'Well-drafted documents prevent disputes before they begin. We draft and review a wide range of legal documents in clear, precise language tailored to your situation.',
      'From legal notices to complex agreements, every document is prepared with care to protect your rights and reflect your intentions accurately.',
    ],
    services: [
      'Legal notices and replies',
      'Wills and codicils',
      'Power of attorney',
      'Lease and rental agreements',
      'Affidavits and declarations',
      'Legal opinions',
    ],
    faqs: [
      {
        question: 'Do I need a lawyer to draft a will?',
        answer:
          'It is not mandatory, but a professionally drafted will greatly reduces the chances of ambiguity and future disputes among heirs.',
      },
      {
        question: 'How quickly can you send a legal notice?',
        answer: 'In most cases, a legal notice can be drafted and dispatched within one to two working days.',
      },
      {
        question: 'Is a rental agreement required to be registered?',
        answer:
          'Registration requirements depend on the lease term and local law. We advise on whether registration is needed in your case.',
      },
    ],
  },
]

export const getPracticeArea = (slug) => PRACTICE_AREAS.find((area) => area.slug === slug)

export const GENERAL_FAQS = [
  {
    question: 'How do I book a consultation?',
    answer:
      'You can book a consultation through our contact form, by calling our office, or by visiting us during office hours. We usually respond within one business day.',
  },
  {
    question: 'Do you offer online consultations?',
    answer: 'Yes. We offer consultations over phone and video call for clients who cannot visit the office.',
  },
  {
    question: 'What are your fees?',
    answer:
      'Fees depend on the nature and complexity of the matter. We discuss fees transparently at the outset, before any work begins.',
  },
  {
    question: 'Will my information be kept confidential?',
    answer:
      'Yes. All communications are protected by lawyer–client privilege and handled with strict confidentiality.',
  },
]
