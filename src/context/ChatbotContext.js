import { createContext } from 'react'

export const ChatbotContext = createContext({
  isOpen: false,
  open: () => {},
  close: () => {},
  toggle: () => {},
})
