import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Card_div = styled.div`
    background-color: #f1f1f1;
    transition: background-color cubic-bezier(0.075, 0.82, 0.165, 1) 3s;
    margin: 0.5em auto;
    max-width: 20em;
    padding: 0.5em;
    border-radius: 1em;
    overflow: hidden;

    &:hover {
        background-color: #c7c7c7;
    }
`;

export const CardImage_img = styled.img`
    width: 20em;
    aspect-ratio: 16/9;
    border-radius: 0.5em;
    user-select: none;
`;

export const CardTitle_h2 = styled.h2`
    margin-top: 0.2em;
`;

export const CardDateTime_sec = styled.section`
    margin-top: 0.2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-style: italic;
    font-weight: 100;
    user-select: none;
`;

export const CardDate_p = styled.p`
    margin-top: 0.2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-style: italic;
    font-weight: 100;
    user-select: none;
`;

export const CardTime_p = styled.p`
    font-style: italic;
    font-weight: 100;
    user-select: none;
`;

export const CardLinks_sec = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 0.5em;
`;

export const CardLink_link = styled(Link)`
    background-color: #e0e0e0;
    padding: 0.35em;
    border-radius: 0.5em;
    user-select: none;
    border: none;
    text-decoration: none;
    color: black;

    &:active {
        background-color: #b9b9b9;
    }
`;

export const CardLink_button = styled.button`
    background-color: #e0e0e0;
    padding: 0.35em;
    border-radius: 0.5em;
    user-select: none;
    border: none;

    &:active {
        background-color: #b9b9b9;
    }
`;
