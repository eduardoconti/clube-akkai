import { useEffect, useState } from 'react';

export default function PuzzleGame({ size = 3 }: { size?: number }) {
  const [tiles, setTiles] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isWon, setIsWon] = useState(false);
  const [currentSize, setCurrentSize] = useState(size);

  useEffect(() => {
    initializeGame(currentSize);
  }, [currentSize]);

  const initializeGame = (n: number) => {
    const nums = Array.from({ length: n * n - 1 }, (_, i) => i + 1);
    nums.push(0);
    shuffleTiles(nums, n);
    setMoves(0);
    setIsWon(false);
  };

  const shuffleTiles = (arr: number[], n: number) => {
    let shuffled = [...arr];
    for (let i = 0; i < n * n * 50; i++) {
      const emptyIdx = shuffled.indexOf(0);
      const neighbors = getNeighbors(emptyIdx, n);
      const randomNeighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
      [shuffled[emptyIdx], shuffled[randomNeighbor]] = [shuffled[randomNeighbor], shuffled[emptyIdx]];
    }
    setTiles(shuffled);
  };

  const getNeighbors = (idx: number, n: number): number[] => {
    const neighbors: number[] = [];
    const row = Math.floor(idx / n);
    const col = idx % n;
    if (row > 0) neighbors.push(idx - n);
    if (row < n - 1) neighbors.push(idx + n);
    if (col > 0) neighbors.push(idx - 1);
    if (col < n - 1) neighbors.push(idx + 1);
    return neighbors;
  };

  const handleTileClick = (idx: number) => {
    if (isWon) return;
    const emptyIdx = tiles.indexOf(0);
    const neighbors = getNeighbors(emptyIdx, currentSize);
    if (neighbors.includes(idx)) {
      const newTiles = [...tiles];
      [newTiles[emptyIdx], newTiles[idx]] = [newTiles[idx], newTiles[emptyIdx]];
      setTiles(newTiles);
      setMoves(moves + 1);
      checkWin(newTiles, currentSize);
    }
  };

  const checkWin = (arr: number[], n: number) => {
    let isComplete = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] !== i + 1) {
        isComplete = false;
        break;
      }
    }
    if (isComplete && arr[arr.length - 1] === 0) {
      setIsWon(true);
    }
  };

  const gridSize = currentSize;
  const tileSize = Math.max(60, 300 / gridSize);

  return (
    <div className="puzzle-container">
      <div className="puzzle-header">
        <h2>Puzzle Numérico 🎮</h2>
        <p>Organize os números em sequência! Clique nos números próximos ao espaço vazio para movê-los.</p>
      </div>

      <div className="puzzle-controls">
        <div className="size-selector">
          <label>Escolha o tamanho:</label>
          <div className="size-buttons">
            {[3, 4, 5, 6].map((n) => (
              <button
                key={n}
                className={`size-btn ${currentSize === n ? 'active' : ''}`}
                onClick={() => setCurrentSize(n)}
              >
                {n}x{n}
              </button>
            ))}
          </div>
        </div>
        <button className="btn-reset" onClick={() => initializeGame(currentSize)}>
          🔄 Embaralhar
        </button>
      </div>

      <div className="puzzle-stats">
        <div>Movimentos: <strong>{moves}</strong></div>
        {isWon && <div className="win-message">🎉 Você venceu!</div>}
      </div>

      <div
        className="puzzle-board"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, ${tileSize}px)`,
          gap: '8px',
          width: 'fit-content',
          margin: '0 auto',
        }}
      >
        {tiles.map((tile, idx) => (
          <div
            key={idx}
            className={`puzzle-tile ${tile === 0 ? 'empty' : ''}`}
            onClick={() => handleTileClick(idx)}
            style={{
              width: `${tileSize}px`,
              height: `${tileSize}px`,
              fontSize: Math.max(14, tileSize / 2.5),
            }}
          >
            {tile !== 0 && tile}
          </div>
        ))}
      </div>
    </div>
  );
}
