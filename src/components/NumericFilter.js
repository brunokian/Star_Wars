import React, { useContext } from 'react';
import tableContext from '../context/tableContext';

function NumericFilter() {
  const {
    filterByNumericValues,
    setColumn,
    setComparison,
    setValue,
  } = useContext(tableContext);

  return (
    <div>
      <select
        name="column"
        id="column"
        data-testid="column-filter"
        value={ filterByNumericValues[0].column }
        onChange={ ({ target }) => setColumn(target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        id="compaarion"
        data-testid="comparison-filter"
        value={ filterByNumericValues[0].comparison }
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
        value={ filterByNumericValues[0].value }
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button
        id="filterButton"
        name="filterButton"
        data-testid="button-filter"
        type="button"
      >
        FILTRAR
      </button>
    </div>
  );
}

export default NumericFilter;
