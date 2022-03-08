import React from 'react';
import Test from './components/test'
function App() {
  const someProd = [
    {
      id: 1,
      product: "Bread"
    },
    {
      id: 2,
      product: "Milk"
    },
    {
      id: 3,
      product: "Egg"
    }
  ]
  return (
    <div className="App">
      <h1 className="text-center">Hello World</h1>
      <Test someProd={someProd}/>
    </div>
  );
}

export default App;
