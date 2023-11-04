import styled from 'styled-components';

export const PageTurnerContainer = styled.div`
    display: flex;
    margin: 0 auto 1em auto;
    gap: 1em;
    align-items: center;
    justify-content: center;
`;

export const PageTurnerButton = styled.button`
    padding: 0.5em;
    background-color: #e0e0e0;
    border-radius: 0.5em;
    border: none;

    &:active {
        background-color: #b9b9b9;
    }
`;

export const PageNumber = styled.p`
    font-size: 1.5em;
`;
