import React from 'react';
import './App.css';
import NameFilter from './components/NameFilter';
import NumericFilter from './components/NumericFilter';
import Table from './components/Table';
import TableProvider from './context/tableProvider';
import { Title } from './styles';
import GlobalStyles from './global';

function App() {
  return (
    <TableProvider>
      <GlobalStyles />
      <Title>
        <h1>STARWARS PLANETS</h1>
      </Title>
      <NameFilter />
      <NumericFilter />
      <Table />
    </TableProvider>
  );
}

export default App;
