import React, { Component } from 'react';
import style from './index.module.scss'
import './test.scss'

class Index extends Component {
  state = {
    test: '!!!111'
  };
  render() {
    const {test} = this.state;
    return (
      <div>
        <h3 className={style.red}>Index Page + { test }</h3>
        <h4 className="border">test only class name</h4>
      </div>
    );
  }
}

export default Index;
