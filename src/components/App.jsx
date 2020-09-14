import React, { useState } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar/SearchBar';
import ImageList from './ImageList/ImageList';


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
            {
                images.length > 0 && <ImageList images={images} />
            }
        </div>
    );
};

export default App;