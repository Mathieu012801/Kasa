import React, { useState } from 'react';
import dropUP from '../../assets/dropUP.png'; 

export default function Collapse({ title, content }) {
  const [collapse, setCollapse] = useState(true);

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <div className='collapse' onClick={toggleCollapse}>
      <h3>{title}</h3>
      <img src={dropUP} alt="Drop Up" />
      {collapse ? null : <p>{content}</p>}
    </div>
  );
}

