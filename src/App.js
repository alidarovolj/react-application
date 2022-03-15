import React from 'react';
import { Routes, Route } from "react-router-dom";

import Layout from './components/layout'
import Forms from './components/forms';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Forms />}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
