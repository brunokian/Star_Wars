import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, InputGroup, Form, Row, Col } from 'react-bootstrap';
import tableContext from '../context/tableContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function NumericFilter() {
  const {
    setDataFilteredByName,
    setFilterByNumericValues,
    filterByNumericValues,
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
    <Container fluid>
      <h4>Others-Filters</h4>
      <Row className="g-2">
        <Col>
          <Form.Select
            aria-label="Default select example"
            className="mb-3"
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
          </Form.Select>
        </Col>
        <Col>
          <Form.Select
            aria-label="Default select example"
            className="mb-3"
            name="comparison"
            id="compaarion"
            data-testid="comparison-filter"
            value={ comparison }
            onChange={ ({ target }) => setComparison(target.value) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </Form.Select>
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2">Value</InputGroup.Text>
            <Form.Control
              aria-describedby="basic-addon2"
              id="value"
              name="value"
              data-testid="value-filter"
              type="text"
              value={ numericValue }
              onChange={ ({ target }) => setNumericValue(target.value) }
            />
          </InputGroup>
        </Col>
        <Col sm="auto">
          <Button
            variant="outline-warning"
            id="filterButton"
            name="filterButton"
            data-testid="button-filter"
            type="button"
            onClick={ () => handleClick() }
          >
            FILTER
          </Button>
          <Button
            variant="outline-warning"
            id="deleteButton"
            name="deleteButton"
            data-testid="button-remove-filters"
            type="button"
            onClick={ () => deleteAll() }
          >
            DELETE
          </Button>
        </Col>
      </Row>
      {
        filterByNumericValues.map((o, i) => (
          <div data-testid="filter" key={ i }>
            <span>{`${o.column} | ${o.comparison} | ${o.numericValue} `}</span>
            <button
              type="button"
              onClick={ deleteFunction }
              value={ o.column }
              className="delete-button"
            >
              delete
            </button>
          </div>
        ))
      }
      <Row>
        <h4>Ordering the Planets</h4>
        <Col>
          <Form.Select
            aria-label="Default select example"
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
          </Form.Select>
        </Col>
        <Col sm="auto">
          <div key="inline-checkbox" className="mb-3">
            <Form.Check
              inline
              className="radio-order"
              label="Ascendent"
              type="radio"
              name="radioOrder"
              id="asc-order"
              value="ASC"
              onChange={ ({ target }) => setOrderValue(target.value) }
              data-testid="column-sort-input-asc"
            />
            <Form.Check
              inline
              className="radio-order"
              label="Descendent"
              type="radio"
              name="radioOrder"
              id="desc-order"
              value="DESC"
              onChange={ ({ target }) => setOrderValue(target.value) }
              data-testid="column-sort-input-desc"
            />
          </div>
        </Col>
        <Col>
          <Button
            variant="outline-warning"
            type="button"
            name="buttonOrder"
            id="buttonOrder"
            data-testid="column-sort-button"
            onClick={ ordering }
          >
            ORDER
          </Button>
        </Col>
      </Row>

    </Container>
  );
}
export default NumericFilter;
