import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Drawer from './components/Drawer';
import MiniDrawer from './components/general/MiniDrawer'
import Calculator from './components/Calculator';
import StartPage from './components/StartPage';

export default (
    <Route path = "/" component = {MiniDrawer}>
        <IndexRoute component = {StartPage}/>
        <Route path = "calculator" component = {Calculator} />
        <Route path = "drawer" component = {Drawer} />
     </Route>
);