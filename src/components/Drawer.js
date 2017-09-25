import React from 'react';
import { withStyles } from 'material-ui/styles';

import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
const data = [
      {name: '2017-09-15', USD: 1.920398, EUR: 0.836904},
      {name: '2017-09-16', USD: 1.920398, EUR: 0.836904},
      {name: '2017-09-17', USD: 1.929662, EUR: 0.837503},
      {name: '2017-09-18', USD: 1.930025, EUR: 0.836696}
];

const styles = theme => ({
  root: {
    height: '100%',
    width: '100%', 
    display: '-webkit-flex', 
    display: 'flex',
  },
  chart: {
    display:'flex',
  }
});
class Drawer extends React.Component{

  constructor (props){
    super(props);
  }

	render () {
  	return (
      <div  >
        <div >
          <LineChart width={600} height={300} data={data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="USD" stroke="#8884d8" activeDot={{r: 8}}/>
          </LineChart>
        </div>
      </div>
    );
  }
}

export default Drawer;