import React, { useState } from 'react';
import '../../assets/arrow_left.png';
import '../../assets/arrow_right.png';

// Premier composant du carrousel pour l'afficher
function Carrousel({ images }) {
  // État de l'image actuelle
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à l'image suivante
  function imageSuivante() {
    if (currentIndex === (images.length) - 1 ){
        setCurrentIndex(0)

    }
    else{
        setCurrentIndex(currentIndex +1)
    }

  }

  return (
    <div>
      {/* Afficher l'image actuelle */}
      <img src={images[currentIndex]} alt="" />

      {/* Bouton pour naviguer vers l'image suivante */}
      <button onClick={imageSuivante}>Image suivante</button>
    </div>
  );
}

export default Carrousel;
