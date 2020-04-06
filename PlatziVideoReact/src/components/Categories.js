import React from 'react';
import CarouselItem from './CarouselItem';

const Categories = ({ title, data }) => (
  <>
    <h3 className='categories__title'>{title}</h3>
    <section className='carousel'>
      <div className='carousel__container'>
        {
          data.map((item) => <CarouselItem key={item.id} {...item} />)
        }
      </div>
    </section>
  </>
);
export default Categories;

