import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageList from './ImageList';
import Counter from './Counter';
import InputField from './InputField';

class App extends Component {
  renderList() {
    const fruit = ['apple', 'orange', 'cherries', 'banana'];
    const fruitItems = fruit.map((el, index) => <li key={index}>{el}</li>);
    return <ul>{fruitItems}</ul>;
  }

  render() {
    const renderFruit = true;

    return (
      <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {renderFruit && this.renderList()}
        {renderFruit ? this.renderList() : (<p>good bye world</p>)}
        <ImageList images={[
          'https://media.giphy.com/media/l1J3yimAa270hmUFi/giphy-downsized.gif',
          'https://media.giphy.com/media/xULW8N9VxIg430FF04/giphy-downsized.gif']
        }/>

        <Counter />

        <InputField id='testname' label='Name'/>
      </div>
    );
  }
}

export default App;
