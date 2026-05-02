import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { formatCurrency, slugify, createWhatsAppUrl, buildInterestMessage } from '../utils/helpers';
import { WHATSAPP_LABEL } from '../constants/content';
import type { ClubPlan } from '../types';

interface SubscribePageProps {
  planos: ClubPlan[];
  isLoading: boolean;
  error: string | null;
}

export default function SubscribePage({
  planos,
  isLoading,
  error,
}: SubscribePageProps) {
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

  const message = buildInterestMessage({
    planName: selectedPlan?.nome ?? 'Ainda decidindo',
    name,
    email,
    phone,
    notes,
  });
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
