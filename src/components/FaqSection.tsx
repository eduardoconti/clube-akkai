import { useState } from 'react';
import { FAQ_ITEMS } from '../constants/content';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(FAQ_ITEMS.map(item => (item as any).category)));
  const filteredItems = selectedCategory
    ? FAQ_ITEMS.filter(item => (item as any).category === selectedCategory)
    : FAQ_ITEMS;

  return (
    <section className="faq-section" id="faq">
      <div className="section-inner">
        <div className="text-center">
          <span className="section-tag">❓ Dúvidas</span>
          <h2 className="section-title">Perguntas frequentes</h2>
        </div>

        <div className="faq-categories">
          <button
            className={`category-btn ${selectedCategory === null ? 'active' : ''}`}
            onClick={() => setSelectedCategory(null)}
          >
            Todas
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="faq-list">
          {filteredItems.map((item: any, i) => {
            const actualIndex = FAQ_ITEMS.indexOf(item);
            return (
              <div key={actualIndex} className={`faq-item${openIndex === actualIndex ? ' open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)}
                >
                  {item.q}
                  <span className="faq-arrow">▼</span>
                </button>
                <div className="faq-answer">{item.a}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
