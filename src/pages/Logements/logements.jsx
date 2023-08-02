import React from 'react';
import '../../pages/Logements/logement.scss';
import Carrousel from '../../components/Carrousel/carrousel';
import Collapse from '../../components/Collapse/collapse';
import Rating from '../../components/Rating/rating';
import data  from'../../data/logements.json';

import { useParams,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export default function Logements() {
  const{idLogements} = useParams();
  const logement =(e)=>e.id===idLogements;
  const recup = data.findIndex(logement);
  const dataLogement = data.filter(e=> e===data[recup]);
  const navigation= useNavigate();
  useEffect(()=>{
    if(!data.some(e=>e.id===idLogements)){
      navigation('/404');

    }
  })



  return (
    <main className='logement'>
      <section>

      {

        dataLogement.map((location)=>(
          <div key={location.id} className=''>
                <Carrousel images={location.pictures}/>
                <section className='renseignement__container'>
        <h1 className='renseignement__title'>{location.title}</h1>
        <p className='renseignement__p'>{location.location}</p>

      </section>
                <div className="logement__collapse__container">
                <Collapse title='déscription' content={location.description} />
                <Collapse title='Equipements' content={location.equipments}/>
                </div>
                <Rating rating={location.rating} />

          </div>
        
        ))

      }
      </section>
     
    </main>

  );

}

