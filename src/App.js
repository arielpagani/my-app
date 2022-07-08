import React from 'react';

import Parrafo from './components/Parrafo';
import Variables from './components/Variables';
import Eventos from './components/Eventos';

function App() {
  return (
    <div>
      <h1>Hola mundo React</h1>
      <Parrafo/>
      <Parrafo/>
      <Eventos/>
      <Variables/>
      <Parrafo/>
    </div>
  );
}

export default App;
