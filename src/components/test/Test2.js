import React, { Component } from 'react';
import style from './Test2.module.scss';
import Test3 from './Test3';
class Test2 extends Component {
  render() {
    return (
      <div className={style['test2-wrap']}>
        Test 2 Content wrap
        <Test3 />
      </div>
    );
  }
}

export default Test2;
