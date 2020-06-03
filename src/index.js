import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

import ACDC from './Components/ACDC/ACDC'
import GunsNRoses from './Components/GunsNRoses/GunsNRoses'
import MotleyCrue from './Components/MotleyCrue/MotleyCrue'
import NotFound from './Components/NotFound/NotFound'

class Routing extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/acdc">AC/DC</Link>
                        </li>
                        <li>
                            <Link to="/gnr">Guns 'N Roses</Link>
                        </li>
                        <li>
                            <Link to="/motleycrue">Motley Crue</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={ App } />
                        <Route path="/acdc" component={ ACDC } />
                        <Route path="/gnr" component={ GunsNRoses } />
                        <Route path="/motleycrue" component={ MotleyCrue } />
                        <Route component={ NotFound } />
                    </Switch>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(
    <Routing/>,
    document.getElementById('root')
);

serviceWorker.unregister();