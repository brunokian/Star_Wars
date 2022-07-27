import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import TableContext from './tableContext';

function TableProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataFilteredByName, setDataFilteredByName] = useState([]);

  const [filterName, setFilterName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const [filter, setFilter] = useState([]);
  const [hasFilter, setHasFilter] = useState(false);

  const contextValue = {
    data,
    filterByName: {
      name: filterName,
    },
    setFilterName,
    filterByNumericValues,
    setFilterByNumericValues,
    filter,
    setFilter,
    hasFilter,
    setHasFilter,
    dataFilteredByName,
    setDataFilteredByName,
  };

  const fetchPlanets = async () => {
    const planets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const response = await planets.json();
    setData(response.results.map((planet) => {
      delete planet.residents;
      return planet;
    }));
    setDataFilteredByName(response.results.map((planet) => {
      delete planet.residents;
      return planet;
    }));
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <TableContext.Provider value={ contextValue }>
      { children }
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default TableProvider;
