import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import TableContext from './tableContext';

function TableProvider({ children }) {
  const [data, setData] = useState([]);

  // const fetchPlanets = async () => {
  //   const planets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  //   const response = await planets.json();
  //   setData(response.results.map((planet) => {
  //     delete planet.residents;
  //     return planet;
  //   }));
  // };

  useEffect(() => {
    const fetchPlanets = async () => {
      const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const planets = await fetch(endPoint).then((response) => response.json());
      setData(planets.results.map((planet) => {
        delete planet.residents;
        return planet;
      }));
    };
    fetchPlanets();
  }, []);

  // useEffect(() => {
  //   fetchPlanets();
  // }, []);

  return (
    <TableContext.Provider value={ { data } }>
      { children }
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default TableProvider;
