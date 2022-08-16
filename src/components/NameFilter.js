import React, { useContext } from 'react';
import { Container, InputGroup, Form } from 'react-bootstrap';
import tableContext from '../context/tableContext';

import 'bootstrap/dist/css/bootstrap.min.css';

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
    <Container fluid>
      <h4>Name-Filter</h4>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
        <Form.Control
          aria-describedby="basic-addon1"
          id="nameFilter"
          name="nameFilter"
          data-testid="name-filter"
          type="text"
          placeholder="Type the name of the planet here"
          onChange={ ({ target }) => handleFilter(target) }
        />
      </InputGroup>
    </Container>
  );
}

export default NameFilter;
