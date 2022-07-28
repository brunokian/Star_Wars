import React, { useContext } from 'react';
import tableContext from '../context/tableContext';

function NameFilter() {
  const {
    data,
    // setFilterName,
    setDataFilteredByName,
  } = useContext(tableContext);

  const handleFilter = ({ value }) => {
    // const { name } = filterByName;
    // setFilterName(target.value);
    const result = data.filter((planet) => (
      planet.name.toLowerCase().includes(value.toLowerCase())
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
        onChange={ ({ target }) => handleFilter(target) }
      />
    </div>
  );
}

export default NameFilter;
