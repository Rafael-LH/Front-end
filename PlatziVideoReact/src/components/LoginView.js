import React from 'react';
import { Link } from 'react-router-dom';

import GoogleIcon from '../assets/images/google-icon.png';
import TwitterIcon from '../assets/images/twitter-icon.png';

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Inicia sesión</h2>
      <form className='login__container--form'>
        <input className='input--login' type='text' placeholder='Correo' />
        <input className='input--login' type='password' placeholder='Contraseña' />
        <input type='button' className='button--login' value='Iniciar sesión' />
        <div className='login__container--remember-me'>
          <label htmlFor='cbox1'>
            <input type='checkbox' id='cbox1' value='first_checkbox' />
            Recuérdame
          </label>
          <a href='/'>Olvidé mi contraseña</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div>
          <img src={GoogleIcon} alt='Google' />
          Inicia sesión con Google
        </div>
        <div>
          <img src={TwitterIcon} alt='Twitter' />
          Inicia sesión con Twitter
        </div>
      </section>
      <p className='login__container--register'>
        No tienes ninguna cuenta
        <Link to='/register'>
          Regístrate
        </Link>
      </p>
    </section>
  </section>
);
export default Login;
