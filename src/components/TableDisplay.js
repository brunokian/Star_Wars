import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import tableContext from '../context/tableContext';

function TableDisplay() {
  const {
    // filter,
    // hasFilter,
    dataFilteredByName,
  } = useContext(tableContext);

  const categories = [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'Url',
  ];

  return (
    <div>
      <Table responsive variant="dark">
        <thead>
          <tr>
            {
              categories.map((obj) => (
                <th key={ obj }>{obj}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            dataFilteredByName.map((item, index) => (
              <tr key={ index }>
                <td data-testid="planet-name">{item.name}</td>
                <td>{item.rotation_period}</td>
                <td>{item.orbital_period}</td>
                <td>{item.diameter}</td>
                <td>{item.climate}</td>
                <td>{item.gravity}</td>
                <td>{item.terrain}</td>
                <td>{item.surface_water}</td>
                <td>{item.population}</td>
                <td>{item.films}</td>
                <td>{item.created}</td>
                <td>{item.edited}</td>
                <td>{item.url}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
}

export default TableDisplay;
