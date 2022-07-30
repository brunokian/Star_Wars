import React, { useContext, useEffect, useState } from 'react';
import tableContext from '../context/tableContext';

function NumericFilter() {
  const {
    setDataFilteredByName,
    setFilterByNumericValues,
    filterByNumericValues,
    // setFilters,
    data,
  } = useContext(tableContext);

  const [columnsOptions, setColumnsOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [numericValue, setNumericValue] = useState(0);

  const notSameFilter = () => {
    const filter = columnsOptions.filter((option) => (
      option !== column
    ));
    setColumnsOptions(filter);
    setColumn(columnsOptions[0]);
  };

  const deleteFunction = ({ target: { value } }) => {
    setColumnsOptions([...columnsOptions, value]);
    const result = filterByNumericValues.filter((filter) => (
      filter.column !== value
    ));
    setFilterByNumericValues(result);
  };

  const handleClick = () => {
    setFilterByNumericValues((prev) => [...prev, { column, comparison, numericValue }]);
  };

  function handleFilterNumber() {
    let planetFiltered = data;
    if (filterByNumericValues !== 0) {
      filterByNumericValues.forEach((item) => {
        if (item.comparison === 'maior que') {
          planetFiltered = planetFiltered.filter((planet) => (
            +planet[item.column] > +item.numericValue
          ));
        }
        if (item.comparison === 'menor que') {
          planetFiltered = planetFiltered.filter((planet) => (
            +planet[item.column] < +item.numericValue
          ));
        }
        if (item.comparison === 'igual a') {
          planetFiltered = planetFiltered.filter((planet) => (
            +planet[item.column] === +item.numericValue
          ));
        }
      });
    }
    setDataFilteredByName(planetFiltered);
    notSameFilter();
  }

  const deleteAll = () => {
    setFilterByNumericValues([]);
    setDataFilteredByName(data);
  };

  useEffect(() => {
    if (filterByNumericValues.length === 0) {
      setDataFilteredByName(data);
    }
    filterByNumericValues.forEach(() => {
      handleFilterNumber();
    });
  }, [filterByNumericValues]);

  return (
    <div>
      <select
        name="column"
        id="column"
        data-testid="column-filter"
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
      >
        {
          columnsOptions.map((option) => (
            <option key={ option } value={ option }>{option}</option>
          ))
        }
      </select>
      <select
        name="comparison"
        id="compaarion"
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        id="value"
        name="value"
        data-testid="value-filter"
        type="text"
        value={ numericValue }
        onChange={ ({ target }) => setNumericValue(target.value) }
      />
      <button
        id="filterButton"
        name="filterButton"
        data-testid="button-filter"
        type="button"
        onClick={ () => handleClick() }
      >
        FILTRAR
      </button>
      <button
        id="deleteButton"
        name="deleteButton"
        data-testid="button-remove-filters"
        type="button"
        onClick={ () => deleteAll() }
      >
        DELETE
      </button>
      {
        filterByNumericValues.map((o, i) => (
          <div data-testid="filter" key={ i }>
            <span>{`${o.column} | ${o.comparison} | ${o.numericValue} `}</span>
            <button
              type="button"
              onClick={ deleteFunction }
              value={ o.column }
            >
              delete
            </button>
          </div>
        ))
      }
    </div>
  );
}

export default NumericFilter;
