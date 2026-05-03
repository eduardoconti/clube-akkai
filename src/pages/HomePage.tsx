import { Link } from 'react-router-dom';
import KaiMascot from '../components/mascots/KaiMascot';
import AliMascot from '../components/mascots/AliMascot';
import PlanCard from '../components/PlanCard';
import FaqSection from '../components/FaqSection';
import HowArrivesSection from '../components/HowArrivesSection';
import {
  HOW_IT_WORKS,
  KIT_ITEMS,
  BENEFITS,
} from '../constants/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { ClubPlan, MonthlyKit } from '../types';

interface HomePageProps {
  planos: ClubPlan[];
  kitMensal: MonthlyKit | null;
  isLoading: boolean;
  error: string | null;
}

export default function HomePage({
  planos,
  kitMensal,
  isLoading,
  error,
}: HomePageProps) {
  useScrollReveal([planos, kitMensal]);

  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-inner">
          {/* Mascote Kai — esquerda */}
          <div className="hero-mascot kai">
            <div className="mascot-bubble">Oi! Bora brincar?</div>
            <KaiMascot />
            <span className="mascot-name">Kai</span>
          </div>

          {/* Conteúdo central */}
          <div className="hero-content">
            <div className="hero-tag">
              <span className="dot" />
              Clube de assinatura de peças e jogos feitos em impressora 3D
            </div>
            <h1>
              Todo mês uma nova <span className="highlight">aventura</span> em 3D!
            </h1>
            <p className="hero-sub">
              Kits temáticos com colecionáveis exclusivos impressos em 3D, direto na porta da sua
              casa. Diversão, criatividade e surpresas todo mês! 🎉
            </p>
            <div className="hero-btns">
              <Link to="/planos" className="btn-primary">Assinar agora 🚀</Link>
              <a href="#como-funciona" className="btn-secondary">Como funciona</a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <strong>100%</strong><span>Impressão 3D</span>
              </div>
              <div className="hero-stat">
                <strong>Mensal</strong><span>Kit surpresa</span>
              </div>
            </div>
          </div>

          {/* Mascote Ali — direita */}
          <div className="hero-mascot ali">
            <div className="mascot-bubble">Cada kit é incrível!</div>
            <AliMascot />
            <span className="mascot-name">Ali</span>
          </div>
        </div>

        {/* Layout Mobile: Kai com descrição, Ali com botões */}
        <div className="hero-mobile-layout">
          <div className="hero-mobile-header">
            <div className="hero-tag">
              <span className="dot" />
              Clube de assinatura de peças e jogos feitos em impressora 3D
            </div>
            <h1>
              Todo mês uma nova <span className="highlight">aventura</span> em 3D!
            </h1>
          </div>

          <div className="hero-mobile-grid">
            {/* Kai com descrição */}
            <div className="hero-mobile-col kai-col">
              <div className="hero-mascot kai">
                <div className="mascot-bubble">Oi! Bora brincar?</div>
                <KaiMascot />
                <span className="mascot-name">Kai</span>
              </div>
              <p className="hero-sub">
                Kits temáticos com colecionáveis exclusivos impressos em 3D, direto na porta da sua
                casa. Diversão, criatividade e surpresas todo mês! 🎉
              </p>
            </div>

            {/* Ali com botões */}
            <div className="hero-mobile-col ali-col">
              <div className="hero-mascot ali">
                <div className="mascot-bubble">Cada kit é incrível!</div>
                <AliMascot />
                <span className="mascot-name">Ali</span>
              </div>
              <div className="hero-btns">
                <Link to="/planos" className="btn-primary">Assinar agora 🚀</Link>
                <a href="#como-funciona" className="btn-secondary">Como funciona</a>
              </div>
            </div>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>100%</strong><span>Impressão 3D</span>
            </div>
            <div className="hero-stat">
              <strong>Mensal</strong><span>Kit surpresa</span>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="how-bg" id="como-funciona">
        <div className="section-inner">
          <div className="text-center">
            <span className="section-tag">🗺️ Passo a passo</span>
            <h2 className="section-title">Como funciona?</h2>
            <p className="section-sub">Simples assim! Em poucos passos, a aventura chega na casa das crianças.</p>
          </div>
          <div className="steps-grid">
            {HOW_IT_WORKS.map((item, i) => (
              <div key={item.step} className={`step-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
                <div className="step-num">{item.step}</div>
                <span className="step-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTAQUE DO MÊS */}
      {kitMensal && (
        <section className="featured-section">
          <div className="featured-inner">
            <div className="reveal">
              <span className="section-tag" style={{ background: 'var(--yellow)' }}>🌟 Tema do mês</span>
              <h2 className="section-title">{kitMensal.titulo}</h2>
              <p className="featured-desc">{kitMensal.descricao}</p>
              <div className="featured-items">
                {kitMensal.itens.map((item) => (
                  <span key={item} className="featured-item-chip">{item}</span>
                ))}
              </div>
              <Link to="/planos" className="btn-teal">Ver planos 🦖</Link>
            </div>
            <div className="featured-visual reveal reveal-delay-2">
              <div className="kit-box">
                <span className="kit-box-emoji">📦</span>
                <div className="kit-box-label">{kitMensal.referencia}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* COMO CHEGA */}
      <HowArrivesSection />

      {/* PLANOS */}
      <section className="plans-section" id="planos">
        <div className="section-inner">
          <div className="text-center">
            <span className="section-tag">💳 Escolha o seu</span>
            <h2 className="section-title">Planos de assinatura</h2>
            <p className="section-sub">Escolha o plano ideal para a criançada e garanta meses de aventura!</p>
          </div>
          {isLoading ? (
            <div className="feedback-card">Carregando planos do clube...</div>
          ) : error ? (
            <div className="feedback-card error">{error}</div>
          ) : planos.length > 0 ? (
            <>
              <div className="plans-grid">
                {planos.slice(0, 2).map((plan) => (
                  <PlanCard key={plan.id} plan={plan} />
                ))}
              </div>
              <p style={{ textAlign: 'center', marginTop: '24px', color: 'var(--text-light)', fontSize: '0.85rem', fontWeight: 600 }}>
                ⚡ Cancele quando quiser · 🚚 Frete incluso · 🔒 Pagamento seguro
              </p>
            </>
          ) : (
            <div className="feedback-card">Nenhum plano ativo foi encontrado no momento.</div>
          )}
        </div>
      </section>

      {/* O QUE VEM NO KIT */}
      <section className="kit-section">
        <div className="section-inner">
          <div className="text-center">
            <span className="section-tag">🎁 Conteúdo</span>
            <h2 className="section-title">O que vem no kit?</h2>
            <p className="section-sub">Cada kit é cheio de surpresas! Veja o que esperar todo mês.</p>
          </div>
          <div className="kit-grid">
            {KIT_ITEMS.map((item, i) => (
              <div key={item.title} className={`kit-card reveal${i > 0 ? ` reveal-delay-${Math.min(i, 4)}` : ''}`}>
                <span className="kit-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="benefits-section">
        <div className="section-inner">
          <div className="text-center">
            <span className="section-tag">💡 Por que Clube Akkai?</span>
            <h2 className="section-title">Os benefícios do clube</h2>
          </div>
          <div className="benefits-grid">
            {BENEFITS.map((item, i) => (
              <div key={item.title} className={`benefit-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
                <span className="benefit-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* SELLING STRIP */}
      <section className="selling-strip">
        <div className="section-inner">
          <div className="selling-strip-grid">
            {[
              { icon: '👦', text: 'Para crianças de diversas idades' },
              { icon: '🎨', text: 'Temas variados a cada mês' },
              { icon: '📦', text: 'Embalagem exclusiva' },
              { icon: '🎯', text: 'Diversão com propósito' },
            ].map((item) => (
              <div key={item.text} className="selling-point">
                <span className="selling-point-icon">{item.icon}</span>
                <span className="selling-point-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <h2>Assine e transforme cada mês em algo incrível! ✨</h2>
        <p>Assine, descubra e transforme cada mês em algo incrível!</p>
        <Link to="/planos" className="btn-white">Quero assinar agora!</Link>
      </section>
    </>
  );
}
