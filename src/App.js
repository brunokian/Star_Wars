import React from 'react';
import './App.css';
import NameFilter from './components/NameFilter';
import NumericFilter from './components/NumericFilter';
import TableDisplay from './components/TableDisplay';
import Title from './components/Title';
import TableProvider from './context/tableProvider';

function App() {
  return (
    <TableProvider>
      <Title />
      <NameFilter />
      <NumericFilter />
      <TableDisplay />
    </TableProvider>
  );
}

export default App;
