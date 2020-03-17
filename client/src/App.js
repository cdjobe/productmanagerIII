import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import './bootstrap.css';
import Main from './views/Main'
import Detail from './views/Detail';
import Edit from './views/Edit';
import DeleteProduct from './components/DeleteProduct';

function App() {

  return (
    <div className="App container">

      <Router>
        <Main path="/" />
        <Detail path="product/:id" />
        <Edit path=":id/edit" />
      </Router>

    </div>
  );
}

export default App;