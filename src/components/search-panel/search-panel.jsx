import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        };
    }

    handleInputChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSearchField(term);
    };

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Find worker"
                value={this.state.term}
                onChange={this.handleInputChange}
            />
        );
    }
}

export default SearchPanel;
