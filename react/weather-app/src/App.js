import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Daily from './MainComponents/Daily'
import Weekly from './MainComponents/Weekly'
import ChangeLocation from './MainComponents/ChangeLocation'
import manuallySet from './MainComponents/manuallySet'

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path='/' component={Daily} />
        <Route path='/weekly' component={Weekly} />
        <Route path='/changeLocation' component={ChangeLocation} />
        <Route path='/manuallySet' component={manuallySet} />
      </Switch>
    </div>
  );
}

export default App;
