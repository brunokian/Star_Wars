import React, { useContext } from 'react';
import tableContext from '../context/tableContext';

function Table() {
  const {
    // filter,
    // hasFilter,
    dataFilteredByName,
    filterByNumericValues,
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

  const deleteFunction = () => {
    console.log('apagado');
  };

  return (
    <div>
      {
        filterByNumericValues.map((planet, i) => (
          <div key={ i }>
            <div>{`${planet.column}${planet.comparison}${planet.value}`}</div>
            <button type="button" onClick={ deleteFunction }>delete</button>
          </div>
        ))
      }
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
                {
                  Object.values(item).map((dataBase, index2) => (
                    <td key={ index2 }>{dataBase}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
