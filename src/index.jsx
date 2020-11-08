import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';


import '@babel/polyfill';

function App() {
  return (
    <Fragment>
      <div className="red-text">Hello Ann</div>
    </Fragment>
  );
}

// const AppWithHot = hot(module)(App);

const mountNode = document.getElementById('app');
ReactDOM.render(<App name="Jane" />, mountNode);