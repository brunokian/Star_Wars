import React from 'react';
import './App.css';
import NameFilter from './components/NameFilter';
import NumericFilter from './components/NumericFilter';
import Table from './components/Table';
import TableProvider from './context/tableProvider';

function App() {
  return (
    <TableProvider>
      <h1>STARWARS PLANETS</h1>
      <NameFilter />
      <NumericFilter />
      <Table />
    </TableProvider>
  );
}

export default App;
