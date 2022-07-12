import React, { useContext } from 'react';
import tableContext from '../context/tableContext';

function Table() {
  const { data, filterByName, filterByNumericValues } = useContext(tableContext);

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

  const handleFilterName = () => {
    const result = [];
    const planetFiltered = data.filter((planet) => (
      planet.name.toLowerCase().includes(filterByName.name.toLowerCase())
    ));
    if (filterByNumericValues[0].comparison === 'maior que') {
      const filtered = planetFiltered.filter((planet) => (
        +planet[filterByNumericValues[0].column] > filterByNumericValues[0].value
      ));
      result.push(...filtered);
    } if (filterByNumericValues[0].comparison === 'menor que') {
      const filtered = planetFiltered.filter((planet) => (
        +planet[filterByNumericValues[0].column] < filterByNumericValues[0].value
      ));
      result.push(...filtered);
    } if (filterByNumericValues[0].comparison === 'igual a') {
      const filtered = planetFiltered.filter((planet) => (
        +planet[filterByNumericValues[0].column] === filterByNumericValues[0].value
      ));
      result.push(...filtered);
    }
    return result;
  };

  // function teste() {
  //   console.log('oi', data.map((obj) => obj.name));
  // }

  // teste();
  // handleFilterName();

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
          handleFilterName().map((planet, index) => (
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
