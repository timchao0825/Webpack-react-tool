import '@babel/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import Index from './pages/index/Index'

import './assets/css/layout.scss';

ReactDOM.render(
  <Index />,
  document.getElementById('App')
)