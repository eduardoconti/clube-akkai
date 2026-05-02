import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function MainNav() {
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
        <li><Link to="/jogos">Jogos</Link></li>
        <li><a href="/#faq">FAQ</a></li>
      </ul>
      <Link to="/quero-assinar" className="nav-cta">Assinar agora 🚀</Link>
    </nav>
  );
}
