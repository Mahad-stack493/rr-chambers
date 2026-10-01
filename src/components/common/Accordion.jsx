import { useState } from 'react'
import { Plus } from 'lucide-react'
import './Accordion.css'

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.question} className={`accordion__item ${isOpen ? 'accordion__item--open' : ''}`}>
            <button
              className="accordion__trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className="accordion__index">0{index + 1}</span>
              <span className="accordion__question">{item.question}</span>
              <span className="accordion__icon">
                <Plus size={18} strokeWidth={1.5} />
              </span>
            </button>
            <div className="accordion__panel">
              <div className="accordion__content">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
