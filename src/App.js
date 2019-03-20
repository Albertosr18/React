import React, { Component } from 'react';
import './App.css';
class App extends Component {

  constructor() {
    super(); 
    this.state = { 
      lyrics : "" 
    };

}

handleClick = () => {
  fetch('https://api.lyrics.ovh/v1/"Metallica"/"FUEL"')
  .then(response=> response.json())
  .then(data=> this.setState({lyrics: data.lyrics}))

}
render() {
    return (
      <div className="App">
     
          <button onClick={this.handleClick}>
       Buscar
      </button>
      <h4>State Array: {this.state.lyrics}</h4>

      </div>
        );
       
  
  }
}

export default App;
