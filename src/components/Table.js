import React, { useContext } from 'react';
import tableContext from '../context/tableContext';

function Table() {
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
      <table>
        {/* <thead>
        <tr>
          {
            Object.keys(data[0]).map((obj) => (
              <th key={ obj }>{obj}</th>
            ))
          }
        </tr>
      </thead> */}
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
          {/* {
          !hasFilter && dataFilteredByName.map((item, index) => (
            <tr key={ index }>
              {
                Object.values(item).map((dataBase, index2) => (
                  <td key={ index2 }>{dataBase}</td>
                ))
              }
            </tr>
          ))
        }
        {
          hasFilter && filter.map((planet, index) => (
            <tr key={ index }>
              {
                Object.values(planet).map((dataBase, index2) => (
                  <td key={ index2 }>{dataBase}</td>
                ))
              }
            </tr>
          ))
        } */}
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
      </table>
    </div>
  );
}

export default Table;
