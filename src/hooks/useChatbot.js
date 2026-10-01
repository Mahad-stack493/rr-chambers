import { useContext } from 'react'
import { ChatbotContext } from '@/context/ChatbotContext.js'

export function useChatbot() {
  return useContext(ChatbotContext)
}
