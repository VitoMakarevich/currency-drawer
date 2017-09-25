import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
  });

  class Selection extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value: 1,
          };
    }

    handleChange = (event, index, value) => this.setState({value});
    

    render() {
    const menuItems = this.props.items.map((item) => 
        <MenuItem value={item.id} primaryText = {item.text} />
        );

    return (
        <SelectField
        floatingLabelText="Frequency"
        value={this.state.value}
        onChange={this.handleChange}
        > 
            {menuItems}
            </SelectField>
        );
    }
}


  
  export default Selection;