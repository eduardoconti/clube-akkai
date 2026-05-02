import { useState } from 'react';
import PuzzleGame from './PuzzleGame';

export default function GamesPage() {
  const [selectedGame] = useState<'puzzle' | null>('puzzle');

  return (
    <section className="games-section">
      <div className="section-inner">
        <div className="text-center">
          <span className="section-tag">🎮 Diversão</span>
          <h1 className="section-title">Jogos do Clube Akkai</h1>
          <p className="section-sub">Teste sua lógica e raciocínio com nossos jogos interativos!</p>
        </div>

        <div className="games-container">
          {selectedGame === 'puzzle' && <PuzzleGame size={3} />}
        </div>
      </div>
    </section>
  );
}
