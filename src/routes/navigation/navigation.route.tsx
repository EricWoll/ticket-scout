import { useState, useCallback } from "react";
import { Link, Outlet } from "react-router-dom";

import MenuIcon from "../../svg/icon-menu.svg?react";
import SearchIcon from "../../svg/icon-search.svg?react";
import SearchBar from "../../components/search-bar/search-bar.component";

export default function Navigation() {
	const [isNavOpen, setIsNapOpen] = useState<boolean>(false);
	const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

	const menuOnClickHandler = useCallback(() => {
		setIsNapOpen((prev) => !prev);
	}, []);

	const linkOnClickHandler = useCallback(() => {
		setIsNapOpen(false);
	}, []);

	const searchOnClickHandler = useCallback(() => {
		setIsSearchOpen((prev) => !prev);
	}, []);

	return (
		<main className="flex flex-col min-h-screen">
			<header className="sticky top-0">
				<section className="px-2 py-3 relative bg-white flex flex-row flex-nowrap justify-between items-center w-full shadow-main">
					<MenuIcon
						className={`select-none cursor-pointer rounded-md ${
							isNavOpen ? "shadow-main_inset" : ""
						}`}
						onClick={menuOnClickHandler}
					/>
					<SearchIcon
						className={`select-none cursor-pointer rounded-md ${
							isSearchOpen ? "shadow-main_inset" : ""
						}`}
						onClick={searchOnClickHandler}
					/>
					<nav
						className={`absolute top-20 left-2 px-5 py-2 bg-white shadow-main rounded-md flex flex-col gap-1 border-Rebecca_purple border-2 ${
							isNavOpen ? "visivble" : "collapse"
						}`}
					>
						<Link
							className="p-2 rounded-md text-2xl select-none text-Rebecca_purple hover:bg-Medium_slate_blue hover:text-white active:text-Dark_purple active:bg-Rebecca_purple"
							onClick={linkOnClickHandler}
							to="/"
						>
							Search Events
						</Link>
						<Link
							className="p-2 rounded-md text-2xl select-none text-Rebecca_purple hover:bg-Medium_slate_blue hover:text-white active:text-Dark_purple active:bg-Rebecca_purple"
							onClick={linkOnClickHandler}
							to="/saved-events"
						>
							Saved Events
						</Link>
					</nav>
				</section>

				{isSearchOpen ? <SearchBar /> : <></>}
			</header>
			<Outlet />
			<footer className="mt-auto mb-1 select-none flex justify-between text-Medium_slate_blue px-5">
				<p className="">©Eric Woll {new Date().getFullYear()}</p>
				<p className="">Made with Discovery API</p>
			</footer>
		</main>
	);
}
