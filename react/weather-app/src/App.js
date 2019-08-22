import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Daily from './MainComponents/Daily'
import Weekly from './MainComponents/Weekly'
import ChangeLocation from './MainComponents/ChangeLocation'

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path='/' component={Daily} />
        <Route path='/weekly' component={Weekly} />
        <Route path='/changeLocation' component={ChangeLocation} />
      </Switch>
    </div>
  );
}

export default App;
