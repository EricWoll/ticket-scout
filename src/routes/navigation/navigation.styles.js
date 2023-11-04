import styled from 'styled-components';
import { CssColors, CssSizes } from '../../constants/styles.constants';

import { Link } from 'react-router-dom';

export const PageContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const NavigationContainer_div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    padding: 0.5em;
    background-color: ${CssColors['header-footer-color']};
`;

export const Logo_link = styled(Link)`
    display: inline-block;
    text-decoration: none;
    font-size: ${CssSizes['logo-desktop-font-size']};
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
    font-size: ${CssSizes['nav-desktop-font-size']};
`;

export const Footer_footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em 1em;
    user-select: none;
    margin-top: auto;
    background-color: ${CssColors['header-footer-color']};
`;

export const FooterContents_p = styled.p`
    font-size: ${CssSizes['desktop-font-size']};
`;
