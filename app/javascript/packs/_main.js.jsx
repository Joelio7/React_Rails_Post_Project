import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/_header.js.jsx';
import Body from './components/_body.js.jsx';

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
         <Body />
      </div>
    )
  }
}
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Main />,
    document.body.appendChild(document.createElement('div')),
  )
})
