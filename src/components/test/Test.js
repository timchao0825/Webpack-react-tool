import React, { Component } from 'react';
import style from './Test.module.scss';

class Test extends Component {
  render() {
    return <div className={style['test-wrap']}>This is test component file area</div>;
  }
}

export default Test;
