import React from 'react';
import { Link } from 'react-router-dom';

import userIcon from 'Images/user-icon.png';
import logoPlatzi from 'Images/logo-platzi-video-BW2.png';

const Header = (props) => (
  <header className='header'>
    <Link to='/'>
      <img className='header__img' src={logoPlatzi} alt='Platzi Video' />
    </Link>
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userIcon} alt='Icon User' />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <Link to='/register'>
            Cuenta
          </Link>
        </li>
        <li><a href='/'>Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
);
export default Header;

