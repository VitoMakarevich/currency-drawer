import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';;
import { Link } from 'react-router';
import Chart from '../images/chart.png';

const styles = theme => ({
    root: {
        display: '-webkit-flex', 
        display: 'flex',
        height: '100%',
        width: '100%',
        'justify-content': 'center',
        'align-items': 'center',
        'flex-direction': 'column'
    },
    button: {
      },
    imageContainer:{
        'flex-basis': '60%',
        'margin-top': '1rem',
        'margin-bottom': '2rem',
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
    },
    image: {
        height: '15rem',
        width: 'auto',
    },
    textContainer: {
        'margin-bottom': '1rem',
        'flex-basis': '30%',
    }
});
  

class StartPage extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render(){

        const classes = this.props.classes;

        return (
            <div className = {classes.root}>
                    <div className = {classes.imageContainer}>
                        <img src={Chart} className = {classes.image}/>
                    </div>
                    <div className = {classes.textContainer}>
                        <Button class={classes.button} raised component={Link} to="drawer">
                            Show currencies dynamics
                        </Button>
                    </div>   
            </div>
        );
    }

}

export default withStyles(styles)(StartPage);