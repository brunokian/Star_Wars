import React, { useContext } from 'react';
import tableContext from '../context/tableContext';

function NameFilter() {
  const { filterByName, setFilterName } = useContext(tableContext);

  const handleFilter = (target) => {
    setFilterName(target.value);
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
