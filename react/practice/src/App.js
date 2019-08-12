import React from 'react';
import {Link, Switch, Route} from "react-router-dom";

import './index.css';
import Dice from './Practice/Dice/';
import NameEntry from './Practice/NameEntry/';
import Friends from './Practice/Friends/App';
import Home from './Practice/Home';
import Travel from './Practice/Travel/index.js';
import NameBadge from './Practice/NameBadge/index.js';


function App() {
    return (

        <div>
            <nav style={{
                margin: 20
            }}>
                <Link to="/">Home</Link>
                <span>
                    |
                </span>
                <Link to="/friends">Friends with Pets</Link>
                <span>
                    |
                </span>
                <Link to="/dice">Dice Roll</Link>
                <span>
                    |
                </span>
                <Link to="/travel">Travel Form</Link> 
                <span>
                    |
                </span>
                <Link to="/nameEntry">Name Entry</Link>
                <span>
                    |
                </span>
                <Link to="/nameBadge">Name Badge</Link>

            </nav>
            <div class='center'>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/friends" component={Friends}/>
                    <Route path="/dice" component={Dice}/>
                    <Route path="/nameEntry" component={NameEntry}/>
                    <Route path="/travel" component={Travel}/>
                    <Route path="/nameBadge" component={NameBadge}/>

                </Switch>
            </div>
        </div>

    )

}

export default App