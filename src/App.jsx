import { createContext, useState } from 'react';
import './App.css';
import Child from './components/Child';

const data = createContext();
const data1 = createContext();

function App() {
  const name = 'Shukra';
  const country = 'Nepal';
  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={country}>
          <Child></Child>
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default App;
export { data, data1 };
