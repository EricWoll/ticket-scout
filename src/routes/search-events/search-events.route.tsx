import { useCallback, useContext } from "react";
import { RetrivedEventsContext } from "../../contexts/retrieved-events.context";

import PageTurner from "../../components/page-turner/page-turner.component";
import SearchCardsContainer from "../../components/cards-container/search-cards-container.component";

export default function SearchEvents() {
	const {
		currentEvents,
		searchEvents,
		currentPage,
		nextPage,
		prevPage,
		searchTerm,
	} = useContext(RetrivedEventsContext);

	if (currentEvents == null) return;

	const searchCheck = () => {
		if (currentEvents.hasOwnProperty("_embedded")) {
			return true;
		}
		return false;
	};

	return (
		<>
			{searchCheck() ? (
				<SearchCardsContainer cards={currentEvents} />
			) : (
				<h1 className="mt-5 mb-2 select-none text-center text-Medium_slate_blue text-3xl">
					No Events Found For '{searchTerm}'
				</h1>
			)}
			{searchCheck() ? (
				<PageTurner
					currentPage={currentPage}
					nextPage={nextPage}
					prevPage={prevPage}
				/>
			) : (
				<></>
			)}
		</>
	);
}
