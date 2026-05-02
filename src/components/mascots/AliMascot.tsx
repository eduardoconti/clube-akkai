import aliImage from '../../assets/ali.png';

export default function AliMascot() {
  return (
    <img
      className="mascot-svg"
      src={aliImage}
      alt="Ali, o robô rosa e roxo"
      style={{ width: '200px', height: '260px' }}
    />
  );
}
