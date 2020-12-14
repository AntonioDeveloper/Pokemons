import React, {Component} from 'react';
import axios from 'axios';

const Pokemon = props => (
  <tr>
    <td>{props.pokemon.name}</td>
    <td><img src={props.pokemon.img} alt="Pokemons" width="300px"></img></td>
    <td>{props.pokemon.hp}</td>
    <td>{props.pokemon.attack}</td>
    <td>{props.pokemon.defense}</td>
    <td>{props.pokemon.speed}</td>
    <td>{props.pokemon.active}</td>
  </tr>
)

export default class Lista extends Component {
  constructor(props){
    super(props);

    this.state = {pokemons: []};
  }

  componentDidMount(){
    axios.get('http://localhost:5000/pokemons/')
      .then(response => {
        this.setState({ pokemons: response.data})
      })
      .catch((error) => {
        console.log(error);
      })
  }

  pokemonList(){
    return this.state.pokemons.map(pokemon => {
      return <Pokemon pokemon={pokemon} key={pokemon._id} />
    })
  }

  render(){
    return(
      <div>
      <h3>Pokémons Conhecidos</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Nome</th>
            <th>Foto</th>
            <th>HP</th>
            <th>Ataque</th>
            <th>Defesa</th>
            <th>Velocidade</th>
            <th>Ativo</th>
          </tr>
        </thead>
        <tbody>
          { this.pokemonList() }
        </tbody>
      </table>
    </div>
    )
  }
}