import WorkersListItem from '../workers-list-item/workers-list-item';

import './workers-list.css';

const WorkersList = ({ data }) => {
    //вернет массив компонентов сформированых из приходящего обьекта данных
    const elements = data.map((item) => {
        //частичная деструктуризация
        const { id, ...itemProps } = item;
        return (
            <WorkersListItem
                key={id}
                {...itemProps}
            />
        );
    });

    return <ul className="app-list list-group">{elements}</ul>;
};

export default WorkersList;
