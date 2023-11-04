import styled from 'styled-components';
import { CssColors } from '../../constants/styles.constants';

export const SearchBarContainer = styled.form`
    display: flex;
    justify-content: center;
    margin: 1em 3em;
`;

export const SearchBarInput = styled.input`
    padding-left: 0.5em;
    border-top-left-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
    width: 30em;
    height: 2.5em;

    &::-webkit-search-cancel-button {
        margin-right: 0.75em;
    }
`;

export const SearchBarButton = styled.button`
    padding: 0.5em;
    font-size: 1em;
    background-color: ${CssColors['button-background-color']};
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
`;
