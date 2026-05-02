import PlanCard from '../components/PlanCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { ClubPlan } from '../types';

interface PlansPageProps {
  planos: ClubPlan[];
  isLoading: boolean;
  error: string | null;
}

export default function PlansPage({
  planos,
  isLoading,
  error,
}: PlansPageProps) {
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
