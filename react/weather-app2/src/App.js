import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Daily from './MainComponents/Daily'
import Weekly from './MainComponents/Weekly'
import Home from './MainComponents/Home'
import manuallySet from './MainComponents/manuallySet'

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/daily' component={Daily} />
        <Route path='/weekly' component={Weekly} />
        <Route path='/changeLocation' component={Home} />
        <Route path='/setLocation' component={manuallySet} />
      </Switch>
    </div>
  );
}

export default App;
