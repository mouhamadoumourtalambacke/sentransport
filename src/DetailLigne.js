import './DetailLigne.css';

function DetailLigne({ ligne }) {
  return (
    <div className="detail-ligne">
      <h2>Ligne {ligne.numero} : {ligne.depart} → {ligne.arrivee}</h2>
      <p>{ligne.arrets} arrêts sur ce trajet</p>

      <h3>Arrêts principaux :</h3>
      <ul>
        {ligne.listeArrets.map((arret, index) => (
          <li key={index}>
            <span>{index + 1}</span> {arret}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetailLigne;