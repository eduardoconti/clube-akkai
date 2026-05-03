import { HOW_ARRIVES } from '../constants/content';

export default function HowArrivesSection() {
  return (
    <section className="how-arrives-section">
      <div className="section-inner">
        <div className="text-center">
          <span className="section-tag">🎁 Segurança</span>
          <h2 className="section-title">Como seu kit chega até você</h2>
          <p className="section-sub">Temos cuidado em cada detalhe para que sua experiência seja perfeita</p>
        </div>
        <div className="arrives-grid">
          {HOW_ARRIVES.map((item, i) => (
            <div key={item.title} className={`arrives-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
              <span className="arrives-icon">{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
