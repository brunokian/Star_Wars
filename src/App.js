import React from 'react';
import './App.css';
import Table from './components/Table';
import TableProvider from './context/tableProvider';

function App() {
  return (
    <TableProvider>
      <h1>STARWARS PLANETS</h1>
      <Table />
    </TableProvider>
  );
}

export default App;
