import { useState } from 'react';

function SearchBar({ searchEvents }) {
    const [inputValue, setInputValue] = useState('');

    const onInputHandle = (event) => {
        setInputValue(event.target.value);
    };

    const onClickHandle = (event) => {
        event.preventDefault();

        searchEvents(inputValue);
    };
    return (
        <form className="search-bar-container">
            <input id="search-bar" type="search" onInput={onInputHandle} />
            <button onClick={onClickHandle}>Click</button>
        </form>
    );
}

export default SearchBar;
