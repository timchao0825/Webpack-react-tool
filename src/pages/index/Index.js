import React, { Component } from 'react';

import style from './index.module.scss'
import './test.scss'
import testImg from '../../assets/images/test.jpg';
import testImg1 from '../../assets/images/test1.png';


class Index extends Component {
  state = {
    test: '123123'
  };
  render() {
    const {test} = this.state;
    return (
      <div className="d-flex">
        <h3 className={style.red}>Index Page + { test }</h3>
        <h4 className="border noe-regular-lg p-4">test only class name</h4>
        <img src={testImg} alt=""/>
        <img src={testImg1} alt=""/>
      </div>
    );
  }
}

export default Index;
