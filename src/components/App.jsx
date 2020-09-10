import React, { useState } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar/SearchBar';


const App = () => {

    const [images, setImages] = useState([]);

    const onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });
        setImages(response.data.results);
    }
    return (
        <div className="ui container" style={{marginTop: '20px'}} >
            <SearchBar onSearchSubmit={onSearchSubmit} />
            Total Images: { images.length }
        </div>
    );
};

export default App;