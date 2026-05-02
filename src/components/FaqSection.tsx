import { useState } from 'react';
import { FAQ_ITEMS } from '../constants/content';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq-section" id="faq">
      <div className="section-inner">
        <div className="text-center">
          <span className="section-tag">❓ Dúvidas</span>
          <h2 className="section-title">Perguntas frequentes</h2>
        </div>
        <div className="faq-list">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {item.q}
                <span className="faq-arrow">▼</span>
              </button>
              <div className="faq-answer">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
