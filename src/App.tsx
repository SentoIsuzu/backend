import React from 'react';
import './App.css';

const App: React.FC = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
}

export default App;
