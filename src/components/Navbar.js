import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component{

  render(){
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Pokemón List</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Todos os Pokémon</Link>
            </li>
            <li>
              <Link to="/create" className="nav-link">Adicionar Pokémon</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
