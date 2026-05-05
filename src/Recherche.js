import './Recherche.css';

function Recherche({ valeur, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="recherche">
      <input
        type="text"
        className="recherche-input"
        placeholder="Rechercher une ligne (départ, arrivée...)"
        value={valeur}
        onChange={handleChange}
      />
    </div>
  );
}

export default Recherche;