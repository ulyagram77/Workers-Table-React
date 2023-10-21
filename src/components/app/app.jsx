import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import WorkersList from '../workers-list/workers-list';
import WorkersAddForm from '../workers-add-form/workers-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        //массив с данными которые как бы приходят из сервера записанные в состояние
        this.state = {
            data: [
                { name: 'Danny', salary: 800, increase: true, id: 1 },
                { name: 'Vladik', salary: 900, increase: false, id: 2 },
                { name: 'Andrew', salary: 1000, increase: true, id: 3 },
                { name: 'Jack', salary: 200, increase: false, id: 4 },
            ],
        };
    }

    //этот метод из компонента App будет передан через пропсы в компонент WorkersListItem
    deleteItem = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex((dataElem) => dataElem.id === id);
            //скопирует все елементы массива в переменную от начального елемента до елемента на котором кликнули удаление
            const before = data.slice(0, index);
            //скопирует все елементы массива в переменную которые идут после найденого елемента по индексу
            const after = data.slice(index + 1);
            //создаем новый массив без удаленного елемента
            const newArr = [...before, ...after];
            //возвращаем состояние
            return {
                data: newArr,
            };
        });
    };

    render() {
        return (
            <div className="app">
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <WorkersList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                />
                <WorkersAddForm />
            </div>
        );
    }
}

export default App;
