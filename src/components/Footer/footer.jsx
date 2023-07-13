import React from 'react';
import { Link } from 'react-router-dom';
import '../../components/Footer/footer.scss';
import LogoFooter from '../../assets/LOGO_footer.png';

export default function Footer() {
  return (
    <footer className='footer_container'>
      <Link to="/">
        <img src={LogoFooter} alt='Logo de Kasa' />
      </Link>

      <p className='FooterText'>© 2023 Kasa. All rights reserved</p>
    </footer>
  );
}
