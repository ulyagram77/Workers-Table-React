import { Component } from 'react';
import './app-info.css';

class AppInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { workers, increased } = this.props;
        return (
            <div className="app-info">
                <h1>Employee accounting in the company KHPI</h1>
                <h2>Total number of employees: {workers}</h2>
                <h2>Extra cash will go to: {increased}</h2>
            </div>
        );
    }
}

export default AppInfo;
