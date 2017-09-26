import React from 'react';
import {PageHeader, Navbar, NavItem, MenuItem, NavDropdown, Nav} from 'react-bootstrap';
import style from './app.css';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import {Switch, Route} from 'react-router-dom';
import Calculator from '../Calculator/calculator';
import Charts from '../Charts/charts';
import Home from '../Home/home'

class App extends React.Component{
    


    render() {
        return (
            <div className ="main">
            <PageHeader>
                Currency
            </PageHeader>   
                <Navbar inverse >
                <Navbar.Header>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav >
                    <NavItem href = "/charts">Charts</NavItem>
                    <NavItem href = "/calculator">Calculator</NavItem>
                </Nav>  
                </Navbar.Collapse>
            </Navbar>
            
            <main>

            <Switch>
                <Route exact path = '/' component={Home}/>
                <Route path='/charts' component={Charts}/>
                <Route path='/calculator' component={Calculator}/>
            </Switch>
            </main>
            </div>
        )
    }
}

export default App;