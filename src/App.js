import React, { Component } from 'react';
import './App.css';
//import Routes from './Routes';
import CharacterList from './components/CharacterList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CharacterList />
        </header>
      </div>
    );
  }
}

export default App;
