import React, { useContext } from 'react';
import tableContext from '../context/tableContext';
import { Categories, PlanetsData } from '../styles';

function Table() {
  const {
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
      <table>
        <thead>
          <Categories>
            {
              categories.map((obj) => (
                <th key={ obj }>{obj}</th>
              ))
            }
          </Categories>
        </thead>
        <tbody>
          {
            dataFilteredByName.map((item, index) => (
              <PlanetsData key={ index }>
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
              </PlanetsData>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
