import { Outlet } from 'react-router-dom';

import {
    NavigationContainer_div,
    Logo_link,
    NavLinks_div,
    NavLink_link,
    Footer_footer,
    FooterContents_p,
} from './navigation.styles';

function Navigation() {
    return (
        <>
            <NavigationContainer_div>
                <Logo_link to="/">Ticket Scout</Logo_link>
                <NavLinks_div>
                    <NavLink_link to="/">Home</NavLink_link>
                    <NavLink_link to="/search-events">
                        Search Events
                    </NavLink_link>
                    <NavLink_link to="/saved-events">Saved Events</NavLink_link>
                </NavLinks_div>
            </NavigationContainer_div>
            <Outlet />
            <Footer_footer>
                <FooterContents_p>©Eric Woll 2023</FooterContents_p>
                <FooterContents_p>Made with TicketMaster API</FooterContents_p>
            </Footer_footer>
        </>
    );
}

export default Navigation;
