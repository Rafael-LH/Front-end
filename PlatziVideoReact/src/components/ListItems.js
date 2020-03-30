import React from 'react';

import PlayIcon from '../assets/images/play-icon.png';
import PlusIcon from '../assets/images/plus-icon.png';

const ListItems = () => (
  <div>
    <h3 className='categories__title'>Mi lista</h3>
    <section className='carousel'>
      <div className='carousel__container'>
        <div className='carousel-item'>
          <img className='carousel-item__img' src='https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='' />
          <div className='carousel-item__details'>
            <div>
              <img className='carousel-item__details--img' src={PlayIcon} alt='Play Icon' />
              <img className='carousel-item__details--img' src={PlusIcon} alt='Plus Icon' />
            </div>
            <p className='carousel-item__details--title'>Título descriptivo</p>
            <p className='carousel-item__details--subtitle'>2019 16+ 114 minutos</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);
export default ListItems;

