import { createContext, useEffect, useState, useCallback } from "react";
import {
	getLocalStorage,
	setArrLocalStorage,
} from "../utils/LocalStorage.utils";

interface SavedEventsContextType {
	savedEvents: Array<EventCard>;
	addSavedEvent: (event: EventCard) => void;
	removeSavedEvent: (event: EventCard) => void;
	eventIsSaved: (event: EventCard) => boolean;
}

export const SavedEventsContext = createContext<SavedEventsContextType>({
	savedEvents: [],
	addSavedEvent: () => {},
	removeSavedEvent: () => {},
	eventIsSaved: () => false,
});

export const SavedEventsProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [savedEvents, setSavedEvents] = useState<Array<EventCard>>([]);
	const [shouldUpdate, setShouldUpdate] = useState(false);

	// Initialize saved events from local storage
	useEffect(() => {
		const initializeSavedEvents = async () => {
			const data = (await getLocalStorage("saved-events")) || [];
			setSavedEvents(data);
			setShouldUpdate(true);
		};
		initializeSavedEvents();
	}, []);

	// Persist saved events to local storage (debounced)
	useEffect(() => {
		if (shouldUpdate) {
			const timeout = setTimeout(() => {
				setArrLocalStorage("saved-events", savedEvents, true);
			}, 500);
			return () => clearTimeout(timeout);
		}
	}, [savedEvents, shouldUpdate]);

	const addSavedEvent = useCallback((eventToAdd: EventCard) => {
		setSavedEvents((prevEvents) => [...prevEvents, eventToAdd]);
	}, []);

	const removeSavedEvent = useCallback((eventToRemove: EventCard) => {
		setSavedEvents((prevEvents) =>
			prevEvents.filter((item) => item.id !== eventToRemove.id)
		);
	}, []);

	const eventIsSaved = useCallback(
		(event: EventCard) => savedEvents.some((item) => item.id === event.id),
		[savedEvents]
	);

	const value = {
		savedEvents,
		addSavedEvent,
		removeSavedEvent,
		eventIsSaved,
	};

	return (
		<SavedEventsContext.Provider value={value}>
			{children}
		</SavedEventsContext.Provider>
	);
};
