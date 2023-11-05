import { Outlet } from 'react-router-dom';

import {
    PageContentContainer,
    Header,
    Logo,
    NavLinksContainer,
    NavigationHamburger,
    NavLink,
    Footer,
    FooterContents,
} from './navigation.styles';
import { useState } from 'react';

function Navigation() {
    const [navIsOpen, setNavIsOpen] = useState(false);

    const menuOnClickHandler = () => {
        setNavIsOpen(!navIsOpen);
    };

    const linkOnClickHandler = () => {
        setNavIsOpen(false);
    };

    return (
        <PageContentContainer>
            <Header>
                <Logo to="/">Ticket Scout</Logo>
                <NavigationHamburger
                    onClick={menuOnClickHandler}
                    src="./assets/hamburger-menu.png"
                />
            </Header>
            {navIsOpen ? (
                <NavLinksContainer>
                    <NavLink onClick={linkOnClickHandler} to="/">
                        Search Events
                    </NavLink>
                    <NavLink onClick={linkOnClickHandler} to="/saved-events">
                        Saved Events
                    </NavLink>
                </NavLinksContainer>
            ) : null}

            <Outlet />
            <Footer>
                <FooterContents>©Eric Woll 2023</FooterContents>
                <FooterContents>Made with TicketMaster API</FooterContents>
            </Footer>
        </PageContentContainer>
    );
}

export default Navigation;
