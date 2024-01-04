import './app-filter.css';

const AppFilter = (props) => {
    const btnsData = [
        { name: 'all', label: 'All employees' },
        { name: 'rise', label: 'To increase' },
        { name: 'moreThan1000', label: 'Salary over $1,000' },
        { name: 'extra', label: 'Extra cash' },
    ];

    const buttons = btnsData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button
                type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onSelectFilter(name)}
            >
                {label}
            </button>
        );
    });

    return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
