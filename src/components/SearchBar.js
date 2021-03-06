import React, { useState } from 'react';

// Pass through prop called onFormSubmit
const SearchBar = ({ onFormSubmit }) => {
    // Declares state
    const [term, setTerm] = useState('');

    // Updates state
    const onInputChange = (event) => {
        setTerm(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Search For a Video</label>
                    <input
                        type="text"
                        value={term}
                        onChange={onInputChange}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;