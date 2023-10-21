import { Component } from 'react';
import './app-info.css';

class AppInfo extends Component {
    render() {
        return (
            <div className="app-info">
                <h1>Employee accounting in the company KHPI</h1>
                <h2>Total number of employees:</h2>
                <h2>Extra cash will go to: </h2>
            </div>
        );
    }
}

export default AppInfo;
