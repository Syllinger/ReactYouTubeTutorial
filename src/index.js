import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/serach_bar';

const API_KEY = '';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));