import React from 'react';
import Banner from '../../components/Banner/banner';
import banner_home from '../../assets/banner.png';

export default function Home() {
  return (
    <div className='home'>
      
      <Banner image={banner_home} text= "Chez vous, partout et ailleurs"/>
      
      
    </div>
  );
}

