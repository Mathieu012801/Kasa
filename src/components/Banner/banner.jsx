import React from 'react';

import '../../components/Banner/banner.scss';

export default function Banner({ text, image }) {
  return (
    <div className='banner'>
      <h2 className='banner_text'>{text}</h2>
      <img className='banner_img' src={image} alt="banner" />
    </div>
  );
}
