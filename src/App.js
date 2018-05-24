import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './Components/HelloWorld';
import TextInput from './Components/TextInput'

class App extends Component {
  render() {
    return (
      <div> 
        <HelloWorld text="今天就開始學React!" />
        <TextInput />
      </div>
    );
  }
}

export default App
