import React, { Component } from 'react';
import style from './index.module.scss'
import './test.scss'
import testImg from '../../assets/images/test.jpg';

class Index extends Component {
  state = {
    test: '!!!123123'
  };
  render() {
    const {test} = this.state;
    return (
      <div>
        <h3 className={style.red}>Index Page + { test }</h3>
        <h4 className="border test">test only class name</h4>
        <img src={testImg} alt=""/>
      </div>
    );
  }
}

export default Index;
