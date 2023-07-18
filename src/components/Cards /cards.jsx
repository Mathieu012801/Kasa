import React from 'react'
import { Link } from 'react-router-dom'

export default function cards({id,cover,title}) {
  return (
    <Link to= {`/logement/${id}`} className='cards'>
        <figure className='cards__cont'>
            <img className='cards__img' src={cover} alt="" />
            <figcaption className='cards__title'>{title}</figcaption>
        </figure>
    </Link>
 
  )
}
