import React, { useContext } from 'react';
import tableContext from '../context/tableContext';

function NameFilter() {
  const {
    data,
    filterByName,
    setFilterName,
    setDataFilteredByName,
  } = useContext(tableContext);

  const handleFilter = (target) => {
    const { name } = filterByName;
    setFilterName(target.value);
    const result = data.filter((planet) => (
      planet.name.toLowerCase().includes(name.toLowerCase())
    ));
    setDataFilteredByName(result);
  };

  return (
    <div>
      <input
        id="nameFilter"
        name="nameFilter"
        data-testid="name-filter"
        type="text"
        placeholder="Search..."
        value={ filterByName.name }
        onChange={ ({ target }) => handleFilter(target) }
      />
    </div>
  );
}

export default NameFilter;
