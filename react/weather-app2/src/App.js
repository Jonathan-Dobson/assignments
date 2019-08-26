import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Landing from './Pages/Landing/Landing'
import SetLocation from './Pages/SetLocation'
import Daily from './Pages/Daily/Daily'
import Weekly from './Pages/Weekly/Weekly'



function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/setLocation' component={SetLocation} />
        <Route path='/daily' component={Daily} />
        <Route path='/weekly' component={Weekly} />
        

      </Switch>
    </div>
  );
}

export default App;
