import React, { useContext, useState } from 'react';
import tableContext from '../context/tableContext';

function NumericFilter() {
  const {
    dataFilteredByName,
    setDataFilteredByName,
    setFilterByNumericValues,
    // setFilters,
    setHasFilter,
  } = useContext(tableContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [columnsOptions, setColumnsOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const notSameFilter = () => {
    const filter = columnsOptions.filter((option) => (
      option !== column
    ));
    setColumnsOptions(filter);
  };

  const handleFilterNumber = () => {
    setFilterByNumericValues((prev) => [...prev, { column, comparison, value }]);
    const result = [];
    const planetFiltered = dataFilteredByName;
    if (comparison === 'maior que') {
      const filtered = planetFiltered.filter((planet) => (
        +planet[column] > +value
      ));
      result.push(...filtered);
    } if (comparison === 'menor que') {
      const filtered = planetFiltered.filter((planet) => (
        +planet[column] < +value
      ));
      result.push(...filtered);
    } if (comparison === 'igual a') {
      const filtered = planetFiltered.filter((planet) => (
        +planet[column] === +value
      ));
      result.push(...filtered);
    }
    setDataFilteredByName(result);
    setHasFilter(true);
    notSameFilter();
    return result;
  };

  // const setFilter = async () => {
  //   setFilterByNumericValues((prev) => [...prev, { column, comparison, value }]);
  //   setFilters(handleFilterNumber());
  // };

  // useEffect(() => {
  //   filterNumber();
  // });

  // useEffect(() => {
  //   handleFilterNumber();
  // }, [filterByNumericValues]);

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
        value={ value }
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button
        id="filterButton"
        name="filterButton"
        data-testid="button-filter"
        type="button"
        onClick={ () => handleFilterNumber() }
      >
        FILTRAR
      </button>
    </div>
  );
}

export default NumericFilter;
