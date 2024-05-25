import React, { useContext } from 'react';
import { data, data1 } from '../App';

const Child = () => {
  const name = useContext(data);
  const country = useContext(data1);

  return (
    <>
      <h1>
        Hi my name is {name} and I am from {country}
      </h1>
    </>
  );
};

export default Child;
