import React from 'react';

import {
  HashRouter,
  Switch,
  Route
} from 'react-router-dom';

import {Car}        from 'pages/Car';
import {CarDetail}  from 'pages/Car/Detail';
import {Contact}    from 'pages/Contact';
import {Home}       from 'pages/Home';
import {NotFound}   from 'pages/NotFound';
import {Footer}     from 'components/Structure';
import {Layout}     from 'Layout';
import {Service}    from 'pages/WebService';
import {RickDetail} from 'pages/RickDetail';

import 'App.css';


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
        <Route exact path="/rick-service" component={Service}/>
        <Route exact path="/rick-service/:id" component={RickDetail}/>
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </HashRouter>
  );
}

export default App;
