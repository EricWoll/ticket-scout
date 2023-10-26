import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const NavigationContainer_div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
`;

export const Logo_link = styled(Link)`
    display: inline-block;
    text-decoration: none;
    font-size: 2em;
    font-style: italic;
    font-weight: bolder;
`;

export const NavLinks_div = styled.div`
    display: flex;
    gap: 1em;
`;

export const NavLink_link = styled(Link)`
    display: inline-block;
    text-decoration: none;
    font-size: 1.5em;
`;

export const Footer_footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em 1em;
    user-select: none;
`;

export const FooterContents_p = styled.p`
    font-size: 1em;
`;
