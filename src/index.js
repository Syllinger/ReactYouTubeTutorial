import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/serach_bar';

const API_KEY = 'AIzaSyAHnHZSMAopkrkIAN0yuSWeNxb3ldsprQc';

YTSearch({key: API_KEY, term: 'surfboards'}, data => {console.log(data)});

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('.container'));