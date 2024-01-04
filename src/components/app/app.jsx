import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
                {
                    name: 'Danny',
                    salary: 800,
                    rise: true,
                    increase: true,
                    id: 1,
                },
                {
                    name: 'Vladik',
                    salary: 900,
                    rise: false,
                    increase: false,
                    id: 2,
                },
                {
                    name: 'Andrew',
                    salary: 1000,
                    rise: false,
                    increase: true,
                    id: 3,
                },
                {
                    name: 'Jack',
                    salary: 200,
                    rise: false,
                    increase: false,
                    id: 4,
                },
                // Дополнительные объекты
                {
                    name: 'Alice',
                    salary: 1200,
                    rise: true,
                    increase: false,
                    id: 5,
                },
                {
                    name: 'Bob',
                    salary: 950,
                    rise: true,
                    increase: true,
                    id: 6,
                },
                {
                    name: 'Eva',
                    salary: 850,
                    rise: false,
                    increase: false,
                    id: 7,
                },
                {
                    name: 'Max',
                    salary: 1100,
                    rise: true,
                    increase: true,
                    id: 8,
                },
                {
                    name: 'Olivia',
                    salary: 300,
                    rise: false,
                    increase: true,
                    id: 9,
                },
                {
                    name: 'Lucas',
                    salary: 700,
                    rise: true,
                    increase: false,
                    id: 10,
                },
            ],
            term: '',
            filter: 'all',
        };
    }

    /**
     * Метод **deleteItem**
     *
     * Удаляет елемент из обьекта данных на котором была нажата кнопка удаления.
     * Этот метод из компонента App будет передан через пропсы в компонент WorkersListItem
     * @param {number} id идентификатор елемента.
     * @returns {Array<Object>} Новый массив елементов без удаленного елемента.
     */
    deleteItem = (id) => {
        this.setState(({ data }) => {
            //возвращаем состояние
            return {
                //метод фильтра вернет новый массив
                data: data.filter((item) => item.id !== id),
            };
        });
    };

    /**
     * Метод **addItem**
     *
     * Добавляет новый елемент созданный пользователем в обьект данных.
     *
     * @param {string} name Имя работника.
     * @param {string} salary Зарплата работника.
     * @returns {Array<Object>} Новый массив с добавленными елементами(каждый елемент с уникальным id).
     */
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: uuidv4(),
        };
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            };
        });
    };

    /**
     * Метод **addDollar**
     *
     * Добавляет знак доллара в конец значения инпута, если его там еще нет.
     *
     * @param {Object} e - Обьект события
     */
    addDollar = (e) => {
        if (e.target.value.slice(-1) !== '$') {
            e.target.value += '$';
        }
    };

    /**
     * Метод **changeSalary**
     *
     * Сохраняет введенную из интерфейса новую зарплату сотруднику в структуру данных.
     *
     * @param {number} newSalary
     * @param {string} name
     * @returns {Array<Object>} Массив обьектов с новой зарплатой или старый массив елементов если зарплата не изменилась.
     */
    changeSalary = (newSalary, name) => {
        this.setState(({ data }) => ({
            data: data.map((person) => {
                if (person.name === name) {
                    return { ...person, salary: newSalary };
                }
                return person;
            }),
        }));
    };

    /**
     * Метод **searchWorker**
     *
     * Ищет в массиве объектов элементы, соответствующие заданному поисковому запросу.
     *
     * @param {Array<Object>} items Массив объектов, в котором нужно искать элементы.
     * @param {string} term Поисковой запрос.
     * @returns {Array<Object>} Массив элементов, которые соответствуют поисковому запросу.
     */
    searchWorker = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.name.indexOf(term) > -1;
        });
    };

    /**
     * Метод **filterByMethod**
     *
     * Проводит фильтрацию данных по заданному методу фильтрации.
     * @param {Array<Object>} items
     * @param {string} filter
     * @returns {Array<Object>} Массив отфильтрованных данных.
     */
    filterByMethod = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter((item) => item.rise);
            case 'moreThan1000':
                return items.filter((item) => item.salary > 1000);
            case 'extra':
                return items.filter((item) => item.increase);
            default:
                return items;
        }
    };

    /**
     * Метод **onToggleProp**
     *
     * Переключает значение свойства `prop` для элемента из приходящего обьекта даных с указанным идентификатором.
     *
     * @param {number} id Идентификатор элемента.
     * @param {string} prop Имя свойства.
     * @returns {Object} Новое состояние компонента.
     */
    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        [prop]: !item[prop],
                    };
                }
                return item;
            }),
        }));
    };

    onUpdateSearchField = (term) => {
        this.setState({ term });
    };

    onSelectFilter = (filter) => {
        this.setState({ filter });
    };

    render() {
        const { data, term, filter } = this.state;
        const allWorkersSum = this.state.data.length;
        const increasedWorkersSum = this.state.data.filter(
            (item) => item.increase,
        ).length;
        //массив отфильтрованных данных по строке которая вводится в инпут
        const visibleData = this.filterByMethod(
            this.searchWorker(data, term),
            filter,
        );
        return (
            <div className="app">
                <AppInfo
                    workers={allWorkersSum}
                    increased={increasedWorkersSum}
                />
                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearchField={this.onUpdateSearchField}
                    />
                    <AppFilter
                        filter={filter}
                        onSelectFilter={this.onSelectFilter}
                    />
                </div>
                <WorkersList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onChangeSalary={this.changeSalary}
                    onAddDollar={this.addDollar}
                />
                <WorkersAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
