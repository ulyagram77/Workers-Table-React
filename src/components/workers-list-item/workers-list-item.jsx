import { Component } from 'react';
import './workers-list-item.css';

class WorkersListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            name,
            salary,
            onDelete,
            onToggleProp,
            onChangeSalary,
            onAddDollar,
            increase,
            rise,
        } = this.props;

        let salaryStr = salary + '$';
        //использование динамического класса который запишется в переменную
        let classNames = 'list-group-item d-flex justify-content-between';
        if (increase) {
            classNames += ' increase';
        }
        if (rise) {
            classNames += ' like';
        }

        return (
            <li className={classNames}>
                <span
                    onClick={onToggleProp}
                    className="list-group-item-label"
                    data-toggle="rise"
                >
                    {name}
                </span>
                <input
                    type="text"
                    className="list-group-item-input"
                    defaultValue={salaryStr}
                    onChange={(e) => onChangeSalary(e.target.value, name)}
                    onBlur={(e) => onAddDollar(e)}
                />
                <div className="d-flex justify-content-center align-items-center">
                    <button
                        type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp}
                        data-toggle="increase"
                    >
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button
                        type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}

export default WorkersListItem;
