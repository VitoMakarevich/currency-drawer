import React from 'react';
import { withStyles } from 'material-ui/styles';
import Selection from './general/Selection';
import TextField from 'material-ui/TextField';
import DatePickerEx from './general/DatePicker2';
import Button from 'material-ui/RaisedButton';

const styles = theme => ({
    root: {
        
    },
    input: {
      
    },
    fromSelection:{
        width: '5rem'
    },
    toSelection:{
        width: '5rem'
    },
    textField: {
        width: '5rem'
    },
  });

class Calculator extends React.Component{

    constructor(props){
        super(props);
    }

    convert() {
        return 1;
    }

    render() {
        const currencies = [{id:1, text: "USD"}, {id:2, text: "EUR"}, {id:3, text: "BYN"}, {id:4, text: "RUB"}];
        return (
            <div > 
                <form>  
                    <TextField
                        required
                        id="fromText"
                        defaultValue="0"
                        margin="normal"
                    />
                    <Selection 
                        items = {currencies} 
                        name = {'from'}/>
                    <TextField
                        required
                        id="toText"
                        defaultValue="0"
                        className={classes.textField}
                        margin="normal"
                    />
                    <Selection 
                        items = {currencies} 
                        name = {'to'}/>
                    <DatePickerEx />
                    <RaisedButton class={classes.button} onClick={this.convert()}>
                        convert
                    </RaisedButton>
                </form>
            </div>
        )
    }
}

export default Calculator;