import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  incrementCounter () {
    this.setState({counter: this.state.counter + 1})
  }  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1>{this.state.counter}</h1>
        <p className="App-intro">
          Click the Button Below!
        </p>
        <ClickMeButton action={this.incrementCounter.bind(this)} doubleValue={this.state.counter}></ClickMeButton>
      </div>
    );
  }
}

class ClickMeButton extends Component {
  componentWillUpdate(nextProps, nextState) {
    console.log('updating double to', nextProps.doubleValue);
  }
  render () {
    return (
      <div>
      <h2>Double! {this.props.doubleValue * 2}</h2>
      <button onClick={this.props.action}>Click Me!</button>
      </div>
    )
  }
}

export default App;
