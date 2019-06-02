import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';

//@types/react-router-dom を追加

const Navbar=()=>{
  <Router>
    <div>
      <Route exact path="/" />
      
    </div>
  </Router>
}


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
