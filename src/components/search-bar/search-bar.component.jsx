import { useState } from 'react';

function SearchBar({ searchEvents, searchTerm }) {
    const [inputValue, setInputValue] = useState(searchTerm);

    const onInputHandle = (event) => {
        setInputValue(event.target.value);
    };

    const onClickHandle = (event) => {
        if (searchTerm == inputValue) return;
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
                data-input-clear-icon-style="color: #ff4040; border-color: #ff8080; background-color: #fff0f0; border-radius: 50%; font-size: 9px;"
            />
            <button className="search-bar-button" onClick={onClickHandle}>
                Search
            </button>
        </div>
    );
}

export default SearchBar;
