import { Outlet } from 'react-router-dom'
import ChatbotProvider from '@/context/ChatbotProvider.jsx'
import ScrollToTop from '@/components/common/ScrollToTop.jsx'
import DisclaimerModal from '@/components/common/DisclaimerModal.jsx'
import ChatBot from '@/components/common/ChatBot.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function Layout() {
  return (
    <ChatbotProvider>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main className="app-main">
          <Outlet />
        </main>
        <Footer />
      </div>
      <ChatBot />
      <DisclaimerModal />
    </ChatbotProvider>
  )
}

export default Layout
