import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Landing from './Pages/Landing/Landing'



function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path='/' component={Landing} />
        

      </Switch>
    </div>
  );
}

export default App;
