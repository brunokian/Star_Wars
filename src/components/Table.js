import React, { useContext } from 'react';
import tableContext from '../context/tableContext';

function Table() {
  const { data, filterByName } = useContext(tableContext);

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

  // const handleFilterName = () => {
  //   const planetsName = data.map((obj) => obj.name);
  //   const negative = -1;
  //   const filter = planetsName.filter(
  //     (planet) => planet.indexOf(filterByName) === negative,
  //   );
  // };

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
          data.filter((value) => {
            if (filterByName.name === '') {
              return value;
            } if (value.name.toLowerCase().includes((filterByName.name).toLowerCase())) {
              return value;
            }
          }).map((planet, index) => (
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
