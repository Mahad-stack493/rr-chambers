import { CONTACT } from './siteContent.js'
import { PRACTICE_AREAS } from './practiceAreas.js'

export const CHATBOT_GREETING =
  'Hello! I am the RR Chambers virtual assistant. How can I help you today? You can pick a topic below or type your question.'

export const QUICK_REPLIES = ['Book a consultation', 'Practice areas', 'Office address', 'Fees', 'Talk to a lawyer']

const RESPONSES = [
  {
    keywords: ['book', 'consult', 'appointment', 'meeting', 'schedule'],
    reply: `You can book a consultation through our Contact page, or call us on ${CONTACT.phone}. We usually respond within one business day.`,
  },
  {
    keywords: ['practice', 'area', 'service', 'handle', 'expertise'],
    reply: `We handle: ${PRACTICE_AREAS.map((a) => a.title).join(', ')}. Visit the Practice Areas page for details on each.`,
  },
  {
    keywords: ['address', 'office', 'location', 'where', 'visit', 'direction'],
    reply: `Our office is at ${CONTACT.address}. Office hours: ${CONTACT.hours}.`,
  },
  {
    keywords: ['fee', 'cost', 'charge', 'price', 'pay'],
    reply: 'Fees depend on the nature and complexity of your matter. We discuss fees transparently before any work begins.',
  },
  {
    keywords: ['lawyer', 'advocate', 'talk', 'speak', 'call', 'human', 'phone'],
    reply: `You can speak with an advocate by calling ${CONTACT.phone} or emailing ${CONTACT.email}.`,
  },
  {
    keywords: ['divorce', 'custody', 'family', 'maintenance'],
    reply: 'Our Family Law team handles divorce, custody, maintenance and succession matters with complete discretion.',
  },
  {
    keywords: ['bail', 'fir', 'criminal', 'police', 'arrest'],
    reply: 'For urgent criminal matters such as bail or an FIR, please call us immediately so an advocate can assist you.',
  },
  {
    keywords: ['property', 'land', 'builder', 'tenant', 'rent'],
    reply: 'Our Property & Real Estate practice covers title checks, documentation, builder disputes and tenancy matters.',
  },
  {
    keywords: ['opinion'],
    reply: 'We provide detailed written legal opinions after reviewing your documents. Use the Contact page to request one.',
  },
  {
    keywords: ['hello', 'hi', 'hey'],
    reply: 'Hello! How can I assist you today?',
  },
  {
    keywords: ['thank'],
    reply: 'You are welcome! Is there anything else I can help you with?',
  },
]

const FALLBACK =
  'I am not sure I understood that. For specific legal questions, please contact our office directly — an advocate will be happy to help.'

export const DISCLAIMER_NOTE = 'Automated responses are for general information only and are not legal advice.'

export function getBotReply(message) {
  const text = message.toLowerCase()
  const match = RESPONSES.find(({ keywords }) => keywords.some((k) => text.includes(k)))
  return match ? match.reply : FALLBACK
}
