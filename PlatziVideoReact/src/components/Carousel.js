import React from 'react';
import CarouselItem from './CarouselItem';
import Categories from './Categories';

const Carousel = () => (
  <>
    <Categories title='Mi lista'>
      <section className='carousel'>
        <div className='carousel__container'>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </div>
      </section>
    </Categories>

    <Categories title='Lo más visto'>
      <section className='carousel'>
        <div className='carousel__container'>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </div>
      </section>
    </Categories>

    <Categories title='Lo más popular'>
      <section className='carousel'>
        <div className='carousel__container'>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </div>
      </section>
    </Categories>
  </>
);
export default Carousel;

