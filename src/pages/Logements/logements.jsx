import React from 'react';
import '../../pages/Logements/logement.scss';
import Carrousel from '../../components/Carrousel/carrousel';
import Collapse from '../../components/Collapse/collapse';
import Rating from '../../components/Rating/rating';
import Tags from '../../components/Tags/tags'; // Importez le composant Tags
import data from '../../data/logements.json';

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Logements() {
  const { idLogements } = useParams();
  const logement = (e) => e.id === idLogements;
  const recup = data.findIndex(logement);
  const dataLogement = data.filter((e) => e === data[recup]);
  const navigation = useNavigate();
  useEffect(() => {
    if (!data.some((e) => e.id === idLogements)) {
      navigation('/404');
    }
  });

  return (
    <main className='logement'>
      <section>
        {dataLogement.map((location) => (
          <div key={location.id}>
            <Carrousel images={location.pictures} />
            <section className='renseignement__container'>
              <div className='renseignement__info'>
                <h1 className='renseignement__title'>{location.title}</h1>
                <p className='renseignement__p'>{location.location}</p>
              </div>
              <div className="tags__container">
                {location.tags.map((loc) =>(
                  <Tags key={`${loc.id}-${loc}`}location={loc}/>
                ))}
            
              </div>
            </section>
            <div className='logement__collapse__container'>
              <Collapse title='Description' content={location.description} />
              <Collapse title='Équipements' content={location.equipments} />
            </div>
            <Rating rating={location.rating} />
            
          </div>
        ))}
      </section>
    </main>
  );
}
