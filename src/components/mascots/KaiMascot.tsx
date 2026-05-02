import kaiImage from '../../assets/kai.png';

export default function KaiMascot() {
  return (
    <img
      className="mascot-svg"
      src={kaiImage}
      alt="Kai, o robô amarelo e azul"
      style={{ width: '200px', height: '260px' }}
    />
  );
}
