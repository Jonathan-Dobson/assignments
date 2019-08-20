import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Daily from './Daily'
import Weekly from './Weekly'
import ChangeLocation from './ChangeLocation'

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
