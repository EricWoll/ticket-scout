import { useState } from 'react';

function SearchBar({ searchEvents, searchTerm }) {
    const [inputValue, setInputValue] = useState(searchTerm);

    const onInputHandle = (event) => {
        setInputValue(event.target.value);
    };

    const onClickHandle = (event) => {
        event.preventDefault();

        searchEvents(inputValue);
    };
    return (
        <div className="search-bar-container">
            <input
                className="search-bar-input"
                name="search"
                type="search"
                placeholder="Search"
                value={inputValue}
                onInput={onInputHandle}
            />
            <button className="search-bar-button" onClick={onClickHandle}>
                Search
            </button>
        </div>
    );
}

export default SearchBar;
