import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import WorkersList from '../workers-list/workers-list';
import WorkersAddForm from '../workers-add-form/workers-add-form';

import './app.css';

function App() {
    //массив с данными которые как бы приходят из сервера
    const data = [
        { name: 'Danny', salary: 800, increase: true, id: 1 },
        { name: 'Vladik', salary: 900, increase: false, id: 2 },
        { name: 'Andrew', salary: 1000, increase: true, id: 3 },
        { name: 'Jack', salary: 200, increase: false, id: 4 },
    ];

    return (
        <div className="app">
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <WorkersList data={data} />
            <WorkersAddForm />
        </div>
    );
}

export default App;
