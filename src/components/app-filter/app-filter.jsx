import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {
    render() {
        return (
            <div className="btn-group">
                <button
                    type="button"
                    className="btn btn-light"
                >
                    All employees
                </button>
                <button
                    type="button"
                    className="btn btn-outline-light"
                >
                    To increase
                </button>
                <button
                    type="button"
                    className="btn btn-outline-light"
                >
                    Salary over $1,000
                </button>
            </div>
        );
    }
}

export default AppFilter;
