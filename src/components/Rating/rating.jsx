import React from 'react';
import starActive from '../../assets/star_active.png'; // Importer l'image pour l'étoile active
import starInactive from '../../assets/star_inactive.png'; // Importer l'image pour l'étoile inactive

export default function Rating({ rating }) {
  const stars = [starInactive, starInactive,starInactive,starInactive,starInactive];
  const int = parseInt(rating);
  const endIdx =  (int -1) ;
  const fill = stars.fill(starActive,0,endIdx);

  return (
    <div className="rating">
      {fill.map((constante,index)=>(
        <img key={`${constante}-${index}`} src={constante} alt="starActive" />
      ))}
     
    </div>
  );
}
