import React from 'react';
import {LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line} from 'recharts';
import styles from './charts.css';

class Charts extends React.Component{
    render() {
        const data = [{name: '26 sep', usd: 19.1}, {name: '27 sep', usd: 19.2},{name: '28 sep', usd: 19.3}];
        return (
            <div className="container">
                <LineChart width={730} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Line type="monotone" dataKey="usd" stroke="#8884d8" />
                </LineChart>
            </div>
        )
    }
}

export default Charts;