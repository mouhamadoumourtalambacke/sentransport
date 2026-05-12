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
        placeholder="Rechercher une ligne (depart, arrivee...)"
        value={valeur}
        onChange={handleChange}
      />
      {valeur && (
        <button
          className="recherche-effacer"
          onClick={() => onChange("")}
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default Recherche;