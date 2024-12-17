import { useContext, useState } from "react";
import { RetrivedEventsContext } from "../../contexts/retrieved-events.context";
import { useLocation, useNavigate } from "react-router-dom";

export default function SearchBar() {
	const { searchEvents, searchTerm } = useContext(RetrivedEventsContext);

	const [inputValue, setInputValue] = useState<string>(searchTerm);

	const navigate = useNavigate();
	const location = useLocation();

	const onInputHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
		});
	};

	const onClickHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (searchTerm == inputValue && location.pathname === "/") return;
		event.preventDefault();
		searchEvents(inputValue);
		navigate("/");
		scrollToTop();
	};

	return (
		<div className="flex flex-nowrap gap-1 bg-white shadow-main w-4/5 px-5 py-2 mt-2 mx-auto rounded-md">
			<input
				className="
				shadow-main_inset py-1 px-2 text-2xl rounded-md w-full text-Medium_slate_blue 
				placeholder:text-Pale_purple outline-Medium_slate_blue
				"
				name="search"
				type="search"
				placeholder="Search"
				value={inputValue}
				onInput={onInputHandle}
			/>
			<button
				className="bg-Medium_slate_blue text-white active:text-Dark_purple px-3 rounded-md"
				onClick={onClickHandle}
			>
				Search
			</button>
		</div>
	);
}
