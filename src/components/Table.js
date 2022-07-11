import React, { useContext } from 'react';
import tableContext from '../context/tableContext';

function Table() {
  const { data } = useContext(tableContext);
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
        {
          data.map((planet, index) => (
            <tr key={ index }>
              {
                Object.values(planet).map((dataBase, index2) => (
                  <td key={ index2 }>{dataBase}</td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
