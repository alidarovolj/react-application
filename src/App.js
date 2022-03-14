import React from 'react';
import Test from './components/test'
import HomePage from './components/home'
import { Routes, Route } from "react-router-dom";

import Layout from './components/layout'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path="/test" element={<Test/>}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
