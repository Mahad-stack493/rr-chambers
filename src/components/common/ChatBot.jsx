import { useEffect, useRef, useState } from 'react'
import { MessageCircle, X, Send, Scale } from 'lucide-react'
import { useChatbot } from '@/hooks/useChatbot.js'
import { CHATBOT_GREETING, QUICK_REPLIES, DISCLAIMER_NOTE, getBotReply } from '@/data/chatbot.js'
import './ChatBot.css'

let messageId = 0
const createMessage = (from, text) => ({ id: ++messageId, from, text })

function ChatBot() {
  const { isOpen, toggle, close } = useChatbot()
  const [messages, setMessages] = useState(() => [createMessage('bot', CHATBOT_GREETING)])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const bodyRef = useRef(null)

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, isTyping])

  const sendMessage = (text) => {
    const trimmed = text.trim()
    if (!trimmed || isTyping) return

    setMessages((prev) => [...prev, createMessage('user', trimmed)])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      setMessages((prev) => [...prev, createMessage('bot', getBotReply(trimmed))])
      setIsTyping(false)
    }, 700)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    sendMessage(input)
  }

  return (
    <div className="chatbot">
      {isOpen && (
        <div className="chatbot__panel" role="dialog" aria-label="Chat with RR Chambers">
          <div className="chatbot__header">
            <div className="chatbot__avatar">
              <Scale size={18} />
            </div>
            <div className="chatbot__heading">
              <span className="chatbot__name">RR Chambers Assistant</span>
              <span className="chatbot__status">Online</span>
            </div>
            <button className="chatbot__close" aria-label="Close chat" onClick={close}>
              <X size={20} />
            </button>
          </div>

          <div className="chatbot__body" ref={bodyRef}>
            {messages.map((message) => (
              <div key={message.id} className={`chatbot__msg chatbot__msg--${message.from}`}>
                {message.text}
              </div>
            ))}
            {isTyping && (
              <div className="chatbot__msg chatbot__msg--bot chatbot__typing">
                <span /><span /><span />
              </div>
            )}
          </div>

          <div className="chatbot__quick">
            {QUICK_REPLIES.map((reply) => (
              <button key={reply} className="chatbot__chip" onClick={() => sendMessage(reply)}>
                {reply}
              </button>
            ))}
          </div>

          <form className="chatbot__form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type your question..."
              aria-label="Your message"
            />
            <button type="submit" aria-label="Send message" disabled={!input.trim()}>
              <Send size={18} />
            </button>
          </form>
          <p className="chatbot__note">{DISCLAIMER_NOTE}</p>
        </div>
      )}

      <button className="chatbot__launcher" aria-label={isOpen ? 'Close chat' : 'Open chat'} onClick={toggle}>
        {isOpen ? <X size={26} /> : <MessageCircle size={26} />}
      </button>
    </div>
  )
}

export default ChatBot
