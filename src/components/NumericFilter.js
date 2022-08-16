import React, { useContext, useEffect, useState } from 'react';
import tableContext from '../context/tableContext';
import { NumericFilterGroup } from '../styles';

function NumericFilter() {
  const {
    setDataFilteredByName,
    setFilterByNumericValues,
    filterByNumericValues,
    // setFilters,
    data,
    orderValue,
    setOrderValue,
    teste,
    setTeste,
    dataFilteredByName,
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

  const ordering = () => {
    let newPlanets = dataFilteredByName.filter((item) => item[teste] !== 'unknown');
    if (orderValue === 'ASC') {
      newPlanets = newPlanets
        .sort((a, b) => parseInt(a[teste], 10) - parseInt(b[teste], 10));
    }
    if (orderValue === 'DESC') {
      newPlanets = newPlanets
        .sort((a, b) => parseInt(b[teste], 10) - parseInt(a[teste], 10));
    }
    setDataFilteredByName(newPlanets);
  };

  return (
    <div>
      <NumericFilterGroup>
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
          DELETEALL
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
      </NumericFilterGroup>

      <select
        name="orderColumn"
        id="orderColumn"
        data-testid="column-sort"
        onChange={ ({ target }) => setTeste(target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <label htmlFor="asc-order">
        <input
          type="radio"
          name="radioOrder"
          id="asc-order"
          value="ASC"
          onChange={ ({ target }) => setOrderValue(target.value) }
          data-testid="column-sort-input-asc"
        />
        Ascendente
      </label>
      <label htmlFor="desc-order">
        <input
          type="radio"
          name="radioOrder"
          id="desc-order"
          value="DESC"
          onChange={ ({ target }) => setOrderValue(target.value) }
          data-testid="column-sort-input-desc"
        />
        Descendente
      </label>
      <button
        type="button"
        name="buttonOrder"
        id="buttonOrder"
        data-testid="column-sort-button"
        onClick={ ordering }
      >
        ORDENAR
      </button>
    </div>
  );
}

// function disabledButton() {return true/false}
export default NumericFilter;
