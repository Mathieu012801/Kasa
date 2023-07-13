import React from 'react'
import { Link } from 'react-router-dom'
import "../../pages/Error/error.scss";

export default function Error() {
  return (
   <div className='error_container'>
    <h1 className='title_error'>404</h1>
    <p className='text_error'>Oups! La page que vous demandez n'existe pas.</p>
    <Link to="/" className='LinkError'>Retourner sur la page d’accueil</Link>

   </div>
  )
}
