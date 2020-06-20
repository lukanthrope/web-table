import React from 'react';
import FormulaInput from './components/Header/FormulaInput';
import Instruments from './components/Header/Instrumens';
import Header from './components/Header';
import Table from './components/tables/Table';

function App() {
  return (
    <div className="App">
      <Header>
        <Instruments />
        <FormulaInput />
      </Header>
      <Table />
    </div>
  );
}

export default App;
