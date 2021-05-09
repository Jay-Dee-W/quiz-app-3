import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Quiz from './components/Quiz'
import Result from './components/Results'

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route exact path='/' >
        <Quiz />
      </Route>
      <Route path='/results'>
        <Result />
      </Route>
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);

