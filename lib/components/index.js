import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  state = {
    answer: 42
  }
  // babel-polyfill required for the async await usages
  asyncFunc = () => {
    return Promise.resolve(37);
  }
  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  }
  render() {
    return (
      <h2>Using class components -- {this.state.answer}</h2>
    );
  }
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
