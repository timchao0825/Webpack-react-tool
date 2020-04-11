import React, { Component } from 'react';

class Index extends Component {
  state = {
    test: '!!!'
  };
  render() {
    const {test} = this.state;
    return (
      <div>
        <h3>Index Page + { test }</h3>
      </div>
    );
  }
}

export default Index;
