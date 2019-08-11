import React from 'react';
import ReactDOM from 'react-dom';
import {Link, BrowserRouter, Switch, Route} from "react-router-dom";
import './index.css';
import Dice from './Practice/Dice/';
import NameEntry from './Practice/NameEntry/';
import Friends from './Practice/Friends/App';
import Home from './Practice/Home';

const App = () => (
    <div>
      <nav style={{
          margin: 20
      }}>
        <Link to="/">Home</Link> 
        <span> | </span>
        <Link to="/friends">Friends with Pets</Link> 
        <span> | </span>
        <Link to="/dice">Dice Roll</Link>
        <span> | </span>
        <Link to="/nameEntry">Name Entry</Link>


      </nav>
      <div>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/friends" component={Friends} />
        <Route path="/dice" component={Dice} />
        <Route path="/nameEntry" component={NameEntry} />



        </Switch>
      </div>
    </div>
  );

ReactDOM.render(
    <BrowserRouter>
    <App/>
</BrowserRouter>, document.getElementById("root"));
