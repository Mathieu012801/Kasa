import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../pages/Logements/logement.scss';
import Carrousel from '../../components/Carrousel/carrousel';
import Collapse from '../../components/Collapse/collapse';
import Rating from '../../components/Rating/rating';
import Tags from '../../components/Tags/tags';
import Host from '../../components/Host/host';
import data from '../../data/logements.json';

export default function Logements() {
  const { idLogements } = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    const logementIndex = data.findIndex((e) => e.id === idLogements);
    if (logementIndex === -1) {
      navigation('/404');
    }
  }, [idLogements, navigation]);

  const dataLogement = data.filter((e) => e.id === idLogements);

  return (
    <main className='logement'>
      <section>
        {dataLogement.map((location) => (
          <div key={location.id}>
            <Carrousel images={location.pictures} />
            <section className='renseignement__container'>
              <div className='renseignement__left'>
                <div className='renseignement__info'>
                  <h1 className='renseignement__title'>{location.title}</h1>
                  <p className='renseignement__p'>{location.location}</p>
                </div>
                <div className='tags__container'>
                  {location.tags.map((loc) => (
                    <Tags key={`${loc.id}-${loc}`} location={loc} />
                  ))}
                </div>
              </div>

              <div className='rating__host'>
                <Rating rating={location.rating} />
                <Host name={location.host.name} picture={location.host.picture} />
              </div>
            </section>
            <div className='logement__collapse__container'>
              <Collapse title='Description' content={location.description} className="collapse__2" />
              <Collapse  title='Équipements' content={location.equipments} className="collapse__2"  />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
