import { MessageCircle, FileSearch, Building2, Gavel } from 'lucide-react'
import { ROUTES } from '@/constants/routes.js'

export const SERVICES = [
  {
    id: 'chatbot',
    icon: MessageCircle,
    title: 'Chat Bot',
    description: 'Get instant answers to common legal questions from our virtual assistant, any time of day.',
    cta: 'Start Chat',
    action: 'chatbot',
  },
  {
    id: 'legal-opinion',
    icon: FileSearch,
    title: 'Legal Opinion',
    description: 'Receive a detailed written opinion on your legal position after a careful review of your documents.',
    cta: 'Request Opinion',
    to: ROUTES.CONTACT,
  },
  {
    id: 'visit-office',
    icon: Building2,
    title: 'Visit Office',
    description: 'Meet our advocates in person at our chambers for a confidential, in-depth discussion.',
    cta: 'Get Directions',
    to: ROUTES.CONTACT,
  },
  {
    id: 'legal-advice',
    icon: Gavel,
    title: 'Legal Advice',
    description: 'Speak with an advocate over phone or video call for practical guidance on your matter.',
    cta: 'Book a Call',
    to: ROUTES.CONTACT,
  },
]
