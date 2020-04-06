import React, { useEffect, useState } from 'react';
import Categories from './Categories';
import useInitialState from '../hooks/useInitialState';
// npm i json-server -g instalar de manera global en caso de no tenerlo
// json-server lo que hace este comando es hacernos una fake API le pasamos como valor un json para que pueda hacer una fake API
// json-server initialState.json

const Carousel = () => {

  const API = 'http://localhost:3000/initalState';
  const { mylist, trends, originals } = useInitialState(API);

  return (
    <>
      {/* lo que hago es ver si existe movie.mylist y si si existe le concateno el .length para ver si es mayo a 0  */}
      {
        mylist ?.length > 0 && <Categories title='Mi lista' data={mylist} />
      }
      {
        trends ?.length > 0 && <Categories title='Tendencias' data={trends} />
      }
      {
        originals ?.length > 0 && <Categories title='Originales' data={originals} />
      }
    </>
  );
};
export default Carousel;

