import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-section">
          <div className="footer-logo">Clube <span>Akkai</span></div>
          <p className="footer-text">
            Clube de assinatura com kits temáticos e colecionáveis exclusivos impressos em 3D.
            Diversão, criatividade e aventura todo mês!
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com/clube.akkai" target="_blank" rel="noreferrer" title="Instagram" className="social-link">📷</a>
            <a href="https://www.tiktok.com/@clubeakkai" target="_blank" rel="noreferrer" title="TikTok" className="social-link">🎵</a>
            <a href="https://www.youtube.com/@clubeakkai" target="_blank" rel="noreferrer" title="YouTube" className="social-link">▶️</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Navegação</h4>
          <div className="footer-links">
            <Link to="/">Início</Link>
            <Link to="/planos">Planos</Link>
            <Link to="/jogos">Jogos</Link>
            <a href="/#como-funciona">Como funciona</a>
            <a href="/#faq">FAQ</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Contato</h4>
          <div className="footer-links">
            <a href="mailto:contato@clubeakkai.com">📧 Email</a>
            <a href="tel:+5511999999999">📱 WhatsApp</a>
            <a href="https://clubeakkai.com">🌐 Website</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2025 Clube Akkai. Todos os direitos reservados. Feito com ❤️ para crianças aventureiras.</p>
      </div>
    </footer>
  );
}
