import React from 'react';

const Registers = () => (
  <section className='register'>
    <section className='register__container'>
      <h2>Regístrate</h2>
      <form className='register__container--form'>
        <input className='input--register' type='text' placeholder='Nombre' />
        <input className='input--register' type='text' placeholder='Correo' />
        <input className='input--register' type='password' placeholder='Contraseña' />
        <button className='button--register'>Registrarme</button>
      </form>
      <a href='/'>Iniciar sesión</a>
    </section>
  </section>
);
export default Registers;

