import styled from 'styled-components';
import { CssColors, CssSizes } from '../../constants/styles.constants';

import { Link } from 'react-router-dom';

export const PageContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8em;
    background-color: ${CssColors['header-footer-color']};
`;

export const Logo = styled(Link)`
    display: inline-block;
    text-decoration: none;
    font-size: ${CssSizes['logo-desktop-font-size']};
    font-style: italic;
    font-weight: bolder;
`;

export const NavigationHamburger = styled.img`
    width: 2em;
    margin-right: 1em;
    user-select: none;
    cursor: pointer;
`;

export const NavLinksContainer = styled.div`
    position: absolute;
    width: 15em;
    height: 90vh;
    top: 9vh;
    right: 1vw;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    background-color: ${CssColors['header-footer-color']};
    border-radius: 1em;
`;

export const NavLink = styled(Link)`
    display: inline-block;
    width: 100%;
    text-decoration: none;
    font-size: ${CssSizes['nav-desktop-font-size']};
    border-radius: 0.2em;
    transition: background-color cubic-bezier(0.075, 0.82, 0.165, 1) 3s;
    color: black;
    text-align: center;

    &:hover {
        background-color: ${CssColors['button-click-color']};
    }
`;

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em 1em;
    user-select: none;
    margin-top: auto;
    background-color: ${CssColors['header-footer-color']};
`;

export const FooterContents = styled.p`
    font-size: ${CssSizes['desktop-font-size']};
`;
