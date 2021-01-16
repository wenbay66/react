import React from 'react';
import {BrowserRouter, Switch ,Route} from 'react-router-dom';

import App from './page/App';
import Login from './components/Login';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={App}/>
            <Route path='/Login' component={Login}/>
        </Switch>
    </BrowserRouter>
)
    
export default Router