import React from 'react';
import './App.css';
import Routes from './Routes/index'

function App({store}) {
  return (
    <div className="App">
      <Routes store={store} />
    </div>
  );
}

export default App;
