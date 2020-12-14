import React, {Component} from 'react';
import axios from 'axios';

export default class Adicionar extends Component {
  constructor(props){
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeImg = this.onChangeImg.bind(this);
    this.onChangeHp = this.onChangeHp.bind(this);
    this.onChangeDefense = this.onChangeDefense.bind(this);
    this.onChangeSpeed = this.onChangeSpeed.bind(this);
    this.onChangeActive = this.onChangeActive.bind(this);
    this.onChangeAttack = this.onChangeAttack.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      img: '',
      hp: '',
      attack: '',
      defense: '',
      speed: '',
      active: ''
    }
  }

  onChangeName(e){
    this.setState({
      name: e.target.value
    });
  }

  onChangeImg(e){
    this.setState({
      img: e.target.value
    });
  }

  onChangeHp(e){
    this.setState({
      hp: e.target.value
    });
  }

  onChangeAttack(e){
    this.setState({
      attack: e.target.value
    });
  }

  onChangeDefense(e){
    this.setState({
      defense: e.target.value
    });
  }

  onChangeSpeed(e){
    this.setState({
      speed: e.target.value
    });
  }

  onChangeActive(e){
    this.setState({
      active: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();

    const bicho = {
      name: this.state.name,
      img: this.state.img,
      hp: this.state.hp,
      attack: this.state.attack,
      defense: this.state.defense,
      speed: this.state.speed,
      active: this.state.active           
    }

    axios.post('http://localhost:5000/pokemons/add', bicho)
    .then(res => console.log(res.data));

    window.location = '/';
  }

  render(){
    return(
      <div>
        <h3>Adicionar Pokémon</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Nome: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
                />

            <label>Foto: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.img}
                onChange={this.onChangeImg}
                />
            <label>HP: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.hp}
                onChange={this.onChangeHp}
                />
            <label>Attack: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.attack}
                onChange={this.onChangeAttack}
                />
            <label>Defesa: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.defense}
                onChange={this.onChangeDefense}
                />
            <label>Speed: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.speed}
                onChange={this.onChangeSpeed}
                />
            <label>Active: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.active}
                onChange={this.onChangeActive}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Salvar Pokémon" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}