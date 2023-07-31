import React from 'react';
import Banner from '../../components/Banner/banner';
import banner_home from '../../assets/banner.png';
import Cards from '../../components/Cards/cards';
import data from '../../data/logements.json';


export default function Home() {
  return (
    <main className='home'>
      <Banner image={banner_home} text="Chez vous, partout et ailleurs" />
      <div className='cards_home'>
        {data.map((card) => (
          <Cards
            key={card.id} 
            id={card.id}
            cover={card.cover}
            title={card.title}
          />
        ))}
      </div>
    </main>
  );
}
