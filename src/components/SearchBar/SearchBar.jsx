import React, { useState } from 'react';

const SearchBar = ({ onSearchSubmit }) => {
    const [term, setTerm] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit(term);
    }

    return (
        <div className="ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" value={term} onChange={(e) => setTerm(e.target.value)}/>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;