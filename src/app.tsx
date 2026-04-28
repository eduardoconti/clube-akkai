import { useEffect, useState } from 'react';
import {
  Link,
  Navigate,
  Route,
  Routes,
  useSearchParams,
} from 'react-router-dom';

type ClubPlan = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  resumo: string;
  valor: number;
  ativo: boolean;
  destaque?: boolean;
  faixaEtaria: string;
  itensInclusos: string[];
  beneficios: string[];
};

type MonthlyKit = {
  id: number;
  referencia: string;
  titulo: string;
  descricao: string;
  chamada: string;
  itens: string[];
};

type ClubLandingContent = {
  planos: ClubPlan[];
  kitMensal: MonthlyKit | null;
};

const API_BASE_URL = import.meta.env.VITE_API_URL ?? '/api';
const WHATSAPP_NUMBER = import.meta.env.VITE_CLUBE_AKKAI_WHATSAPP ?? '';
const WHATSAPP_LABEL = import.meta.env.VITE_CLUBE_AKKAI_WHATSAPP_LABEL ?? '';

const MOCK_LANDING_CONTENT: ClubLandingContent = {
  planos: [
    {
      id: 1,
      slug: 'basico',
      nome: 'Plano Básico',
      descricao: 'Uma assinatura mensal para quem quer entrar no Clube Akkai com uma seleção enxuta e divertida.',
      resumo: 'Perfeito para começar a aventura',
      valor: 5990,
      ativo: true,
      faixaEtaria: 'Crianças a partir de 4 anos',
      itensInclusos: [
        '1 articulado grande 3D',
        '1 mini colecionável 3D',
        '1 fidget toy temático',
        'Embalagem temática surpresa',
      ],
      beneficios: ['Entrada ideal no clube', 'Kit com variedade de brincadeiras'],
    },
    {
      id: 2,
      slug: 'pro',
      nome: 'Plano PRO',
      descricao: 'Para famílias que querem um kit mais completo, com mais conteúdo para brincar junto.',
      resumo: 'A experiência completa para os heróis',
      valor: 8990,
      ativo: true,
      destaque: true,
      faixaEtaria: 'Crianças a partir de 4 anos',
      itensInclusos: [
        '2 minis colecionáveis 3D',
        '1 articulado grande 3D',
        '1 fidget toy temático',
        '1 jogo / atividade do tema',
        'Embalagem premium surpresa',
      ],
      beneficios: ['Mais tempo de brincadeira', 'Kit mais completo para presentear'],
    },
  ],
  kitMensal: {
    id: 1,
    referencia: 'Maio 2026',
    titulo: 'Kit Exploradores do Oceano',
    descricao: 'Mergulhe fundo neste mundo aquático! Este mês o kit Clube Akkai traz as criaturas mais incríveis dos oceanos em impressão 3D de alta qualidade.',
    chamada: 'Um kit temático especial com peças articuladas, colecionáveis e muito mais!',
    itens: [
      '🦈 Tubarão Articulado',
      '🐢 Mini Colecionáveis Marinhos',
      '🎮 Jogo de Memória Marinha',
      '🌊 Diorama do Oceano',
    ],
  },
};

const HOW_IT_WORKS = [
  { step: '1', icon: '📋', title: 'Escolha seu plano', copy: 'Plano Básico ou PRO — escolha o que combina mais com a sua família e o que a criança vai adorar.' },
  { step: '2', icon: '📬', title: 'Receba em casa', copy: 'Todo mês, um kit temático surpresa cheio de colecionáveis 3D exclusivos chega na porta da sua casa.' },
  { step: '3', icon: '🎮', title: 'Monte e brinque', copy: 'Hora da diversão! Monte, explore e mergulhe no tema do mês junto com as crianças.' },
  { step: '4', icon: '🏆', title: 'Colecione!', copy: 'Cada kit traz itens exclusivos para colecionar. Sua coleção cresce a cada mês!' },
];

const KIT_ITEMS = [
  { icon: '🦕', title: 'Articulado Grande', desc: 'Figura articulada impressa em 3D com detalhes incríveis do tema do mês.' },
  { icon: '⭐', title: 'Mini Colecionáveis', desc: 'Miniaturas exclusivas para colecionar e completar a série mês a mês.' },
  { icon: '🎯', title: 'Fidget Toy', desc: 'Brinquedo sensorial temático para desenvolver coordenação e criatividade.' },
  { icon: '🃏', title: 'Jogo do Tema', desc: 'Jogo de cartas ou atividade divertida para toda a família curtir juntos. (PRO)' },
  { icon: '📖', title: 'Cartão Temático', desc: 'Curiosidades e histórias sobre o tema do mês para aprender brincando.' },
  { icon: '🎀', title: 'Embalagem Surpresa', desc: 'Cada caixa é uma experiência! Abertura especial que deixa as crianças empolgadas.' },
];

const BENEFITS = [
  { icon: '🎨', title: 'Estimula a criatividade', desc: 'Cada kit é uma oportunidade de imaginar, criar e explorar novos mundos e histórias.' },
  { icon: '⭐', title: 'Colecionáveis exclusivos', desc: 'Itens únicos, impressos sob demanda — sem encontrar nas lojas. Uma coleção realmente especial.' },
  { icon: '📚', title: 'Diversão educativa', desc: 'Cada tema traz conteúdo educativo embutido na brincadeira. Aprender nunca foi tão divertido!' },
  { icon: '🎁', title: 'Surpresa todo mês', desc: 'A expectativa de receber o kit é uma alegria por si só. A espera também faz parte da magia!' },
];

const TESTIMONIALS = [
  { stars: '★★★★★', text: '"Meu filho fica ansioso semanas antes de chegar o kit! Ele adora montar e organizar os colecionáveis. Virou uma tradição na nossa casa!"', name: 'Ana Lima', role: 'Mãe do Lucas, 7 anos', avatar: '👩', avatarClass: 'a1' },
  { stars: '★★★★★', text: '"As figuras são de qualidade incrível! Minha filha ficou impressionada com a textura e os detalhes. Vale cada centavo do plano PRO."', name: 'Roberto Alves', role: 'Pai da Sofia, 9 anos', avatar: '👨', avatarClass: 'a2' },
  { stars: '★★★★★', text: '"Assino há 6 meses e não me arrependo. Os temas são criativos, a entrega é rápida e o atendimento é excelente. Super recomendo!"', name: 'Carla Santos', role: 'Mãe do Miguel, 8 anos', avatar: '👩', avatarClass: 'a3' },
];

const FAQ_ITEMS = [
  { q: 'Como funciona a entrega? 📬', a: 'Os kits são enviados todo mês, com envio para todo o Brasil. O prazo de entrega varia de 3 a 7 dias úteis após o envio. Você recebe um código de rastreamento por e-mail.' },
  { q: 'Posso cancelar quando quiser? ❌', a: 'Sim! Não temos fidelidade. Você pode cancelar sua assinatura a qualquer momento direto pelo painel do cliente, sem burocracia.' },
  { q: 'Qual a idade recomendada? 👶', a: 'Os kits são desenvolvidos para crianças de 4 a 12 anos. Algumas peças pequenas exigem supervisão para crianças menores de 5 anos.' },
  { q: 'As figuras são seguras para crianças? ✅', a: 'Sim! Todos os nossos produtos são impressos com filamento atóxico, certificado e seguro. Seguimos todas as normas de segurança infantil.' },
  { q: 'Posso escolher o tema do kit? 🎨', a: 'O tema é definido mensalmente pela equipe Clube Akkai para garantir a surpresa! Mas você pode ver previamente o tema do próximo mês no painel do assinante.' },
];

async function fetchClubLanding(): Promise<ClubLandingContent> {
  const response = await fetch(`${API_BASE_URL}/publico/clube-akkai/vitrine`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) throw new Error('Não foi possível carregar a vitrine do clube.');
  return (await response.json()) as ClubLandingContent;
}

function formatCurrency(valueInCents: number): string {
  return (valueInCents / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function slugify(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function createWhatsAppUrl(message: string): string | null {
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, '');
  if (!cleanNumber) return null;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

function buildInterestMessage(input: { planName: string; name: string; email: string; phone: string; notes: string }): string {
  return [
    'Olá, Akkai! Quero conhecer melhor o Clube Akkai.',
    `Plano de interesse: ${input.planName}`,
    `Nome: ${input.name || '-'}`,
    `Email: ${input.email || '-'}`,
    `Telefone: ${input.phone || '-'}`,
    `Observações: ${input.notes || '-'}`,
  ].join('\n');
}

function useScrollReveal(deps: unknown[] = []) {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    reveals.forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, deps);
}

function MainNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`site-nav${scrolled ? ' scrolled' : ''}`}>
      <Link to="/" className="nav-logo">
        Clube <span>Akkai</span>
      </Link>
      <ul className="nav-links">
        <li><a href="/#como-funciona">Como funciona</a></li>
        <li><Link to="/planos">Planos</Link></li>
        <li><a href="/#faq">FAQ</a></li>
      </ul>
      <Link to="/quero-assinar" className="nav-cta">Assinar agora 🚀</Link>
    </nav>
  );
}

function PlanCard({ plan }: { plan: ClubPlan }) {
  const isPro = Boolean(plan.destaque);
  const planSlug = slugify(plan.slug || plan.nome);

  return (
    <div className={`plan-card reveal${isPro ? ' pro' : ''}`}>
      {isPro && <div className="plan-popular-badge">🔥 MAIS POPULAR</div>}
      <span className="plan-icon">{isPro ? '🚀' : '📦'}</span>
      <div className="plan-name">{plan.nome}</div>
      <div className="plan-tagline">{plan.resumo}</div>
      <div className="plan-price-row">
        {formatCurrency(plan.valor)} <span>/ mês</span>
      </div>
      <ul className="plan-items">
        {plan.itensInclusos.map((item) => (
          <li key={item}><span className="check">✔</span> {item}</li>
        ))}
      </ul>
      <Link
        to={`/quero-assinar?plano=${planSlug}`}
        className={`btn-plan ${isPro ? 'pro-btn' : 'basic'}`}
      >
        {`Quero o ${plan.nome}!${isPro ? ' 🚀' : ''}`}
      </Link>
    </div>
  );
}

function FaqSection() {
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

function HomePage({
  planos,
  kitMensal,
  isLoading,
  error,
}: {
  planos: ClubPlan[];
  kitMensal: MonthlyKit | null;
  isLoading: boolean;
  error: string | null;
}) {
  useScrollReveal([planos, kitMensal]);

  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-tag">
              <span className="dot" />
              Clube de assinatura infantil
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
          </div>
          <div className="hero-visual">
            <div className="hero-box-main">
              <span className="hero-box-emoji">📦</span>
            </div>
            <div className="hero-badge top-right"><span className="icon">🦕</span> Kit Dinossauros</div>
            <div className="hero-badge bottom-left"><span className="icon">🚚</span> Frete incluso</div>
            <div className="hero-badge mid-left"><span className="icon">🎁</span> Surpresa todo mês</div>
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

      {/* DEPOIMENTOS */}
      <section className="testimonials-section">
        <div className="section-inner">
          <div className="text-center">
            <span className="section-tag">💬 Depoimentos</span>
            <h2 className="section-title">O que as famílias dizem</h2>
          </div>
          <div className="testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className={`testi-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
                <div className="testi-stars">{t.stars}</div>
                <p className="testi-text">{t.text}</p>
                <div className="testi-author">
                  <div className={`testi-avatar ${t.avatarClass}`}>{t.avatar}</div>
                  <div className="testi-info">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* CTA BANNER */}
      <section className="cta-banner">
        <h2>Pronto para a aventura? 🦖🚀</h2>
        <p>Junte-se a mais de 2.400 famílias e garanta o kit da sua criança hoje!</p>
        <Link to="/planos" className="btn-white">Começar agora!</Link>
      </section>
    </>
  );
}

function PlansPage({
  planos,
  isLoading,
  error,
}: {
  planos: ClubPlan[];
  isLoading: boolean;
  error: string | null;
}) {
  useScrollReveal([planos]);

  return (
    <section className="plans-page-section">
      <div className="section-inner">
        <div className="text-center">
          <span className="section-tag">💳 Escolha o seu</span>
          <h1 className="section-title">Planos de assinatura</h1>
          <p className="section-sub">Escolha o plano ideal para a criançada e garanta meses de aventura!</p>
        </div>
        {isLoading ? (
          <div className="feedback-card">Carregando planos disponíveis...</div>
        ) : error ? (
          <div className="feedback-card error">{error}</div>
        ) : planos.length > 0 ? (
          <>
            <div className="plans-page-grid">
              {planos.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>
            <p style={{ textAlign: 'center', marginTop: '24px', color: 'var(--text-light)', fontSize: '0.85rem', fontWeight: 600 }}>
              ⚡ Cancele quando quiser · 🚚 Frete incluso · 🔒 Pagamento seguro
            </p>
          </>
        ) : (
          <div className="feedback-card">Nenhum plano disponível no momento. Volte em breve!</div>
        )}
      </div>
    </section>
  );
}

function SubscribePage({ planos, isLoading, error }: { planos: ClubPlan[]; isLoading: boolean; error: string | null }) {
  const [searchParams] = useSearchParams();
  const selectedPlanFromUrl = searchParams.get('plano') ?? '';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [planSlug, setPlanSlug] = useState(selectedPlanFromUrl);

  useEffect(() => { setPlanSlug(selectedPlanFromUrl); }, [selectedPlanFromUrl]);

  const selectedPlan =
    planos.find((plan) => slugify(plan.slug || plan.nome) === planSlug) ?? planos[0] ?? null;

  useEffect(() => {
    if (!planSlug && planos[0]) setPlanSlug(slugify(planos[0].slug || planos[0].nome));
  }, [planSlug, planos]);

  const message = buildInterestMessage({ planName: selectedPlan?.nome ?? 'Ainda decidindo', name, email, phone, notes });
  const whatsappUrl = createWhatsAppUrl(message);

  return (
    <section className="subscribe-section">
      <div className="subscribe-grid">
        <div className="subscribe-copy">
          <span className="section-tag" style={{ marginBottom: '16px' }}>📝 Quero assinar</span>
          <h1>Escolha o plano e entre em contato com a Akkai.</h1>
          <p>Preencha seus dados abaixo e continue a conversa pelo WhatsApp para finalizar sua assinatura.</p>
          {selectedPlan && (
            <>
              <div style={{ marginTop: '20px', background: 'var(--white)', borderRadius: 'var(--card-radius)', padding: '20px 24px', boxShadow: 'var(--shadow)' }}>
                <div className="plan-name">{selectedPlan.nome}</div>
                <div className="plan-tagline">{selectedPlan.resumo}</div>
                <div className="plan-price-row" style={{ marginBottom: '12px' }}>
                  {formatCurrency(selectedPlan.valor)} <span>/ mês</span>
                </div>
                <ul className="plan-items" style={{ marginBottom: 0 }}>
                  {selectedPlan.itensInclusos.map((item) => (
                    <li key={item}><span className="check">✔</span> {item}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
          <div className="subscribe-highlights">
            <span>Atendimento humano</span>
            <span>Sem fidelidade</span>
            <span>Frete incluso</span>
          </div>
          {WHATSAPP_LABEL && (
            <p className="helper-text">Atendimento pelo WhatsApp: {WHATSAPP_LABEL}</p>
          )}
        </div>

        <div className="form-card">
          {isLoading && <div className="feedback-card" style={{ marginTop: 0, marginBottom: '16px' }}>Carregando planos...</div>}
          {error && <div className="feedback-card error" style={{ marginTop: 0, marginBottom: '16px' }}>{error}</div>}

          <label className="field">
            <span>Plano de interesse</span>
            <select value={planSlug} onChange={(e) => setPlanSlug(e.target.value)} disabled={planos.length === 0}>
              {planos.length === 0 ? (
                <option value="">Nenhum plano ativo</option>
              ) : (
                planos.map((plan) => (
                  <option key={plan.id} value={slugify(plan.slug || plan.nome)}>
                    {plan.nome} — {formatCurrency(plan.valor)}
                  </option>
                ))
              )}
            </select>
          </label>

          <label className="field">
            <span>Seu nome</span>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Como devemos te chamar?" />
          </label>

          <label className="field">
            <span>Email</span>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="voce@exemplo.com" type="email" />
          </label>

          <label className="field">
            <span>WhatsApp</span>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(11) 99999-9999" />
          </label>

          <label className="field">
            <span>Observações</span>
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Alguma dúvida ou informação extra?" rows={4} />
          </label>

          <div className="form-actions">
            {whatsappUrl ? (
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary" style={{ textAlign: 'center' }}>
                Continuar pelo WhatsApp 💬
              </a>
            ) : (
              <button type="button" className="btn-primary" disabled style={{ opacity: 0.55, cursor: 'not-allowed' }}>
                Configure o WhatsApp nas variáveis de ambiente
              </button>
            )}
            <Link to="/planos" className="btn-secondary" style={{ textAlign: 'center' }}>
              Voltar para os planos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-logo">Clube <span>Akkai</span></div>
      <p className="footer-text">
        Clube de assinatura com kits temáticos e colecionáveis exclusivos impressos em 3D.
        Diversão, criatividade e aventura todo mês!
      </p>
      <div className="footer-links">
        <Link to="/">Início</Link>
        <Link to="/planos">Planos</Link>
        <Link to="/quero-assinar">Assinar</Link>
        <a href="#">Sobre nós</a>
        <a href="#">Contato</a>
        <a href="#">Instagram</a>
      </div>
      <p className="footer-copy">© 2025 Clube Akkai. Todos os direitos reservados. Feito com ❤️ para crianças aventureiras.</p>
    </footer>
  );
}

export default function App() {
  const [landingContent, setLandingContent] = useState<ClubLandingContent>(MOCK_LANDING_CONTENT);
  const [isLoadingLanding, setIsLoadingLanding] = useState(true);
  const [landingError, setLandingError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    const loadLanding = async () => {
      setIsLoadingLanding(true);
      setLandingError(null);
      try {
        const response = await fetchClubLanding();
        if (!active) return;
        setLandingContent({ planos: response.planos.filter((p) => p.ativo), kitMensal: response.kitMensal });
      } catch (error) {
        if (!active) return;
        setLandingContent(MOCK_LANDING_CONTENT);
        setLandingError(
          error instanceof Error
            ? `${error.message} Exibindo conteúdo de exemplo.`
            : 'Não foi possível carregar a vitrine. Exibindo conteúdo de exemplo.',
        );
      } finally {
        if (active) setIsLoadingLanding(false);
      }
    };
    void loadLanding();
    return () => { active = false; };
  }, []);

  return (
    <>
      <MainNav />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                planos={landingContent.planos}
                kitMensal={landingContent.kitMensal}
                isLoading={isLoadingLanding}
                error={landingError}
              />
            }
          />
          <Route
            path="/planos"
            element={
              <PlansPage
                planos={landingContent.planos}
                isLoading={isLoadingLanding}
                error={landingError}
              />
            }
          />
          <Route
            path="/quero-assinar"
            element={
              <SubscribePage
                planos={landingContent.planos}
                isLoading={isLoadingLanding}
                error={landingError}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
