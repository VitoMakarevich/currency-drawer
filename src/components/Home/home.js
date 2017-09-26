import React from 'react';
import Money from '../../images/fall.png';
import style from './home.css';

class Home extends React.Component{
    render() {
        return (
            <div><img className="money" src = {Money} /></div>
        )
    }
}

export default Home;