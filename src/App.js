import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Adicionar from './components/Adicionar';
import Navbar from './components/Navbar';
import Lista from './components/Lista';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={Lista} />
        <Route path="/create" component={Adicionar} />   
      </div>   
    </Router>
  );
}

export default App;
