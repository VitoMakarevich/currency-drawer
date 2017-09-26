import React from 'react';
import {FormControl, FormGroup, ControlLabel, Form, Button, input} from 'react-bootstrap';
import styles from './calculator.css';

class Calculator extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            date: this.getDateNow()
        }
    }

    getDateNow() {
        let date = new Date();
        let month = date.getMonth()+1;
        if(month < 10) month = `0${month}`;
        let day = date.getDate();
        if(day <10) day = `0${day}`;
        return `${date.getFullYear()}-${month}-${day}`;
    }    

    handleDateChange (event){
        let value = event.target.value;
        if(compareDates(getDateNow, value))
    }

    render() {
        return (
            <div className="calculator">
                <Form>
                <FormGroup>
                    <ControlLabel> From </ControlLabel>
                    <FormControl componentClass="select" placeholder = "USD">
                        <option value = "USD"> USD - US dollar</option>
                        <option value = "EUR"> EUR - Euro</option>
                        <option value = "BYN"> BYN - Belorussian rubles</option>
                        <option value = "RUB"> RUB - Russian rubles</option>
                        <option value = "GBP"> GBP - British pound </option>
                        <option value = "CAD"> CAD - Canadian dollar </option>
                    </FormControl>
                    <ControlLabel> To </ControlLabel>
                    <FormControl componentClass="select" placeholder = "USD">
                        <option value = "USD"> USD - US dollar</option>
                        <option value = "EUR"> EUR - Euro</option>
                        <option value = "BYN"> BYN - Belorussian rubles</option>
                        <option value = "RUB"> RUB - Russian rubles</option>
                        <option value = "GBP"> GBP - British pound </option>
                        <option value = "CAD"> CAD - Canadian dollar </option>
                    </FormControl>
                    <FormControl type="text" placeholder = "Value">
                    </FormControl>
                    <FormControl type="date" required defaultValue = {this.state.date} onChange = {this.handleDateChange.bind(this)}>
                    </FormControl>
                <Button type = "submit"> Convert </Button>
                </FormGroup>
                
                
                 </Form>
            </div>
        )
    }
}

export default Calculator;