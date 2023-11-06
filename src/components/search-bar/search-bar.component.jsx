import { useState } from 'react';

import {
    SearchBarContainer,
    SearchBarInput,
    SearchBarButton,
} from './search-bar.styles';

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
        <SearchBarContainer>
            <SearchBarInput
                name="search"
                type="search"
                placeholder="Search"
                value={inputValue}
                onInput={onInputHandle}
            />
            <SearchBarButton onClick={onClickHandle}>Search</SearchBarButton>
        </SearchBarContainer>
    );
}

export default SearchBar;
