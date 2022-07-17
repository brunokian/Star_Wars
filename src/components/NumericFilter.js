import React, { useContext } from 'react';
import tableContext from '../context/tableContext';

function NumericFilter() {
  const {
    // filterByNumericValues,
    handleFilterName,
    setFilterByNumericValues,
    column,
    comparison,
    value,
    setColumn,
    setComparison,
    setValue,
    setFilters,
    setTeste,
  } = useContext(tableContext);

  const handleFilterNumber = () => {
    const result = [];
    const planetFiltered = handleFilterName();
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
    console.log(result);
    setTeste(true);
    return result;
  };

  const setFilter = async () => {
    setFilterByNumericValues((prev) => [...prev, { column, comparison, value }]);
    // handleFilterNumber();
    setFilters(handleFilterNumber());
  };

  // const filterNumber = () => {
  //   const result = [];
  //   if (filterByNumericValues[0].comparison === 'maior que') {
  //     const filtered = data.filter((planet) => (
  //       +planet[filterByNumericValues[0].column] > +filterByNumericValues[0].value
  //     ));
  //     result.push(...filtered);
  //   } if (filterByNumericValues[0].comparison === 'menor que') {
  //     const filtered = data.filter((planet) => (
  //       +planet[filterByNumericValues[0].column] < +filterByNumericValues[0].value
  //     ));
  //     result.push(...filtered);
  //   } if (filterByNumericValues[0].comparison === 'igual a') {
  //     const filtered = data.filter((planet) => (
  //       +planet[filterByNumericValues[0].column] === +filterByNumericValues[0].value
  //     ));
  //     result.push(...filtered);
  //   }
  //   return result;
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
        onClick={ () => setFilter() }
      >
        FILTRAR
      </button>
    </div>
  );
}

export default NumericFilter;
