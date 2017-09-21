import React, {PropTypes} from 'react';
import MiniDrawer from './general/MiniDrawer';


class App extends React.Component {
    
    render () {
        console.log("app childrens" , this.props.children);
        return (
            <div className="container">
                    <MiniDrawer />
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;