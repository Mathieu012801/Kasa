import React, { useState } from 'react';
import dropUP from "../../assets/dropUP.png"
import'../Collapse/collapse.scss';

export default function Collapse({ title, content }) {
  const [collapse, setCollapse] = useState(true);

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <div className='collapse' onClick={toggleCollapse}>
      <div className='collapse__title__img'>
      <h3>{title}</h3>
      <img src={dropUP} alt="Drop Up" className='drop__up' />
      </div>
      {collapse ? null : <p>{content}</p>}
    </div>
  );
}

