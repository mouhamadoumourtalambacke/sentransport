import './StatReseau.css';

function StatReseau({ lignes }) {
  const totalLignes = lignes.length;
  const totalArrets = lignes.reduce((acc, ligne) => acc + ligne.arrets, 0);
  const ligneMax = lignes.reduce((max, ligne) =>
    ligne.arrets > max.arrets ? ligne : max, lignes[0]
  );

  return (
    <div className="stat-reseau">
      <div className="stat-item">
        <span className="stat-chiffre">{totalLignes}</span>
        <span className="stat-label">lignes</span>
      </div>
      <div className="stat-item">
        <span className="stat-chiffre">{totalArrets}</span>
        <span className="stat-label">arrêts au total</span>
      </div>
      <div className="stat-item">
        <span className="stat-chiffre">{ligneMax.numero}</span>
        <span className="stat-label">ligne la plus longue ({ligneMax.arrets} arrêts)</span>
      </div>
    </div>
  );
}

export default StatReseau;