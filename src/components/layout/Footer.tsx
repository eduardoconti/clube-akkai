import { Link } from 'react-router-dom';

export default function Footer() {
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
        <Link to="/jogos">Jogos</Link>
        <a href="#">Sobre nós</a>
        <a href="#">Contato</a>
        <a href="#">Instagram</a>
      </div>
      <p className="footer-copy">© 2025 Clube Akkai. Todos os direitos reservados. Feito com ❤️ para crianças aventureiras.</p>
    </footer>
  );
}
