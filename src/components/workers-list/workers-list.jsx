import WorkersListItem from '../workers-list-item/workers-list-item';

import './workers-list.css';

const WorkersList = ({
    data,
    onDelete,
    onToggleProp,
    onChangeSalary,
    onAddDollar,
}) => {
    //вернет массив компонентов сформированых из приходящего обьекта данных
    const elements = data.map((item) => {
        //частичная деструктуризация
        const { id, ...itemProps } = item;
        return (
            <WorkersListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onChangeSalary={onChangeSalary}
                onAddDollar={onAddDollar}
                onToggleProp={(e) =>
                    onToggleProp(
                        id,
                        e.currentTarget.getAttribute('data-toggle'),
                    )
                }
            />
        );
    });

    return <ul className="app-list list-group">{elements}</ul>;
};

export default WorkersList;
