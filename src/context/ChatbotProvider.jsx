import { useMemo, useState } from 'react'
import { ChatbotContext } from './ChatbotContext.js'

function ChatbotProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const value = useMemo(
    () => ({
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen((prev) => !prev),
    }),
    [isOpen],
  )

  return <ChatbotContext.Provider value={value}>{children}</ChatbotContext.Provider>
}

export default ChatbotProvider
