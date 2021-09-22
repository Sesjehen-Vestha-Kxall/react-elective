import React from 'react';

import {
  HashRouter,
  Switch,
  Route
} from 'react-router-dom';

import {Car}       from 'pages/Car';
import {CarDetail} from 'pages/Car/Detail';
import {Contact}   from 'pages/Contact';
import {Home}      from 'pages/Home';
import {NotFound}  from 'pages/NotFound';
import {Layout}    from 'Layout';

import './App.css';


function App() {
  return (
    <HashRouter>
      <Layout/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/car" component={Car}/>
        <Route exact path="/cars" component={CarDetail}/>
        <Route exact path="/car-detail/:id" component={CarDetail}/>
        <Route exact path="/contact" component={Contact}/>
        <Route component={NotFound}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
