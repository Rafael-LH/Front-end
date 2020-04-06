import React, { useState, useEffect } from 'react';

// npm i json-server -g instalar de manera global en caso de no tenerlo
// json-server lo que hace este comando es hacernos una fake API le pasamos como valor un json para que pueda hacer una fake API
// json-server initialState.json

// Es muy importante setear el segundo valor que resive useEffect porque si no se lo mandamos hara un loop infinito
// Es segundo valor de useEffect es un arreglo que puede ir vacío pero le podemos pasar un valor, en caso de pasarle un valor
// lo que hara es que cada vez que ese valor que le estamos pasando en el arreglo se actualiza se llamara el useEffect nuevamente

// useEffect sustituye componentDidMount y comoponentDidUpdate y el desmontado de nuestro componente

// El Hook useEffect nos permite ejecutar código cuando se monta, desmonta o actualiza nuestro componente.

const useInitialState = (API) => {

  const [movie, setMovie] = useState([]);
  useEffect(() => {

    const fetchData = async () => {
      try {

        const result = await fetch(API);
        const response = await result.json();
        setMovie(response);

      } catch (error) {
        console.error(`Ha ocurrido un error ${error}`);
      }
    };
    fetchData();

  }, []);
  return movie;

};
export default useInitialState;
