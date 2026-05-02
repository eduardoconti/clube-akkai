import { Link } from 'react-router-dom';
import { ClubPlan } from '../types';
import { formatCurrency, slugify } from '../utils/helpers';

export default function PlanCard({ plan }: { plan: ClubPlan }) {
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
