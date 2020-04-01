import React from 'react';
import Grudges from './Grudges';
import NewGrudge from './NewGrudge';

const Application = () => {
  return (
    <div className="Application">
      <NewGrudge />
      <hr></hr>
      <Grudges />
    </div>
  );
};

export default Application;
