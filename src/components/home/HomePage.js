import React from 'react';
import {Link} from 'react-router';
import PermanentDrawer from '../general/PermanentDrawer';

class HomePage extends React.Component {
    render() {
        return (
          <div className="homePageClass"> 
              <PermanentDrawer />
          </div>  
        );
    }
}

export default HomePage;