import { Link, Outlet } from 'react-router-dom';
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
        <main className="content-container">
            <header>
                <Link className="logo" to="/">
                    Ticket Scout
                </Link>
                <img
                    className="nav-menu-icon"
                    onClick={menuOnClickHandler}
                    src="./assets/hamburger-menu.png"
                />
                {navIsOpen ? (
                    <nav className="nav-container">
                        <Link
                            className="nav-link"
                            onClick={linkOnClickHandler}
                            to="/"
                        >
                            Search Events
                        </Link>
                        <Link
                            className="nav-link"
                            onClick={linkOnClickHandler}
                            to="/saved-events"
                        >
                            Saved Events
                        </Link>
                    </nav>
                ) : null}
            </header>
            <Outlet />
            <footer>
                <p className="footer-contents">©Eric Woll 2023</p>
                <p className="footer-contents">Made with TicketMaster API</p>
            </footer>
        </main>
    );
}

export default Navigation;
