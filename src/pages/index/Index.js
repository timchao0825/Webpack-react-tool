import React, { Component } from 'react';

import style from './index.module.scss';
import './indextest.scss';
// import testImg from '../../assets/images/test.jpg';
// import testImg1 from '../../assets/images/test1.png';
// import Test from '../../components/test/Test';

class Index extends Component {
  state = {
    test: 'test state',
  };

  render() {
    const { test } = this.state;
    return (
      <div className="d-flex flex-wrap full">
        <h3 className={style.red}>Index Page | {test}</h3>
        {/* <h4 className="border noe-regular-lg">test only class name</h4> */}
        {/* <img src={testImg} alt=""/> */}
        {/* <img src={testImg1} alt=""/> */}
        {/* <Test /> */}
      </div>
    );
  }
}

export default Index;
