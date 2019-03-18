import React, { Component } from 'react';
import './App.css';
class App extends Component {

  constructor(props) {
    super(props); 
    this.handleClick = this.handleClick.bind(this);
   // this.state = { lyrics: props.lyrics };
}

handleClick = () => {

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'https://api.lyrics.ovh/v1/"Metallica"/"FUEL"', false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;


 
  
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <label>
              Artista:
             <input type="text" name="artist" ref = {this.artis}/>
            </label>
            {this.state}
            <label>
              Cancion:
          <input type="text" name="song"  ref = { this.song}/>
      
            </label>
         
      
          </form>
     
          <button onClick={this.handleClick}>
       Buscar
      </button>
        </header>
      </div>
    );
  }
}

export default App;
