import React from 'react';
import { Link } from 'react-router-dom';

const Registers = () => (
  <section className='register'>
    <section className='register__container'>
      <h2>Regístrate</h2>
      <form className='register__container--form'>
        <input className='input--register' type='text' placeholder='Nombre' />
        <input className='input--register' type='text' placeholder='Correo' />
        <input className='input--register' type='password' placeholder='Contraseña' />
        <input type='button' className='button--register' value='Registrarme' />
      </form>
      <Link to='/login'>
        Iniciar sesión
      </Link>
    </section>
  </section>
);
export default Registers;

