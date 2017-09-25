import React, {PropTypes} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';
import TrendingUp from 'material-ui-icons/TrendingUp';
import FunctionsIcon from 'material-ui-icons/Functions';
import {List, ListItem} from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';


class App extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            open:false
        }
    }

    render () {
        return (
            <MuiThemeProvider>
                <div className="root">
                    <AppBar title = "Currency"
                    iconClassNameRight="muidocs-icon-navigation-expand-more" />
                        <Drawer open={true} containerStyle = {{marginTop: '64px'}}>
                        <List>
                            <ListItem leftIcon={<TrendingUp />} primaryText = "Charts" containerElement={<Link to="drawer" />}/> 
                            <ListItem leftIcon={<FunctionsIcon />} primaryText = "Calculator" containerElement={<Link to="calculator" />}/>
                        </List>
                        </Drawer>
                    <main>
                        {this.props.children}
                    </main>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;