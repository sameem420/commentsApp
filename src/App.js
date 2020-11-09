import './App.css';
import React from 'react';
import {connect} from 'react-redux';

class App extends React.Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT"});
  }
  decrement = () => {
    this.props.dispatch({ type: "DECREMENT"})
  }

  render(){
  return (
    <div className="App">
      <button onClick={this.increment}>+</button>
      <h1>{this.props.count}</h1>
      <button onClick={this.decrement}>-</button>
    </div>
  );}
}

const mapStateToProps = (state) => ({
  count: state.count
});

export default connect(mapStateToProps)(App);
