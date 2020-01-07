import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      string: "Deep",
      monsters: [
        {
          name: "Frankenstein",
          id: 1
        },
        {
          name: "Dracula",
          id: 3
        },
        {
          name: "Zombie",
          id: 3
        }

      ]
    }
  }

  componentDidMount() { 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json()).then(users=> {this.setState({monsters: users})})
  }

  render() {
    return (
      <div className="App">
      {this.state.monsters.map(monster => (
        <h1 key={monster.id}>{monster.name}</h1>
      ))}
    </div>
    )
  }
}
