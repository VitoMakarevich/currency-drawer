import React from 'react';
import { withStyles } from 'material-ui/styles';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import Chart from '../images/chart.png';

const styles = {
    root: {
        display: '-webkit-flex', 
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    button: {
      },
    imageContainer:{
        flexBasis: '60%',
        marginTop: '1rem',
        marginBottom: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: '15rem',
        width: 'auto',
    },
    textContainer: {
        marginBottom: '1rem',
        flexBasis: '30%',
    }
};
  

class StartPage extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render(){

        return (
            <div style= {styles.root}>
                    <div style = {styles.imageContainer}>
                        <img src={Chart} style = {styles.image}/>
                    </div>
                    <div style = {styles.textContainer}>
                        <RaisedButton style={styles.button} onTouchTap={<Link to="drawer" />}>
                            Show currencies dynamics
                        </RaisedButton>
                    </div>   
            </div>
        );
    }

}

export default StartPage;