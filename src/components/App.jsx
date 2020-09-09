import React from 'react';
import SearchBar from './SearchBar/SearchBar';


const App = () => {

    const onSearchSubmit = term => {
        console.log(term);
    }
    return (
        <div className="ui container" style={{marginTop: '20px'}} >
            <SearchBar onSearchSubmit={onSearchSubmit} />
        </div>
    );
};

export default App;