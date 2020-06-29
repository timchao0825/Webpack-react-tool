import React, { Component } from 'react';
import style from './Test3.module.scss';
class Test3 extends Component {
  render() {
    return (
      <div className={style['test3-wrap']}>
        Test 3 Content wrap
      </div>
    );
  }
}

export default Test3;
