import { useCallback, useContext } from "react";
import { SavedEventsContext } from "../../contexts/saved-events.context";

import SavedCardsContainer from "../../components/cards-container/saved-cards.container.component";

export default function SavedEvents() {
	const { savedEvents } = useContext(SavedEventsContext);

	const eventsCheck = useCallback(() => {
		if (!Array.isArray(savedEvents)) return false;
		return savedEvents.length != 0;
	}, []);

	return (
		<>
			{eventsCheck() ? (
				<SavedCardsContainer cards={savedEvents} />
			) : (
				<h1 className="mt-5 mb-2 select-none text-center text-Medium_slate_blue text-3xl">
					No Saved Events
				</h1>
			)}
		</>
	);
}
