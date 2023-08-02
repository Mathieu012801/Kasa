import React, { useState } from 'react';
import '../../components/Carrousel/carrousel.scss';
import arrowLeft from '../../assets/arrow_left.png';
import arrowRight from '../../assets/arrow_right.png';


// Premier composant du carrousel pour l'afficher

function Carrousel({ images }) {
  const length = images.length
  // État de l'image actuelle
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à l'image suivante
  function imageSuivante() {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  // Fonction pour passer à l'image précédente
  function imagePrecedente() {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <section className='caroussel__section'>
      <article className='caroussel_container'>
        {`${length}` > 1 &&
          <>
           <img src={arrowLeft} alt="fleche de gauche "  onClick={imagePrecedente} className='caroussel__arrowright' />
        

        {/* Bouton pour naviguer vers l'image suivante */}
       
          <img src={arrowRight} alt="fleche de droite " className='caroussel__arrowleft' onClick={imageSuivante}/>
       
            {/*  le compteur */}
            <p className='caroussel__compt'>{currentIndex + 1} / {images.length}</p>
          </>
        }
        {/* Afficher l'image actuelle */}
        <img src={images[currentIndex]} className='caroussel__img' alt="caroussel" />

        {/* Bouton pour naviguer vers l'image précédente */}
        
         
      </article>
    </section>
  );
}

export default Carrousel;
