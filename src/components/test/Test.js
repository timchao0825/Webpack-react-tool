import React, { Component } from 'react';
import style from './Test.module.scss';
import Test2 from './Test2';
import Test3 from './Test3';
class Test extends Component {
  render() {
    return (
      <div className={style['test-wrap']}>
        This is test component file area
        <Test2 />
        
      </div>
    );
  }
}

export default Test;
