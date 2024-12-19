import { createContext, useEffect, useState, useCallback } from "react";
import getData from "../utils/Discovery.utils";

interface RetrievedEventsContextType {
	currentEvents: EventSearch | null;
	searchEvents: (search: string) => Promise<void>;
	searchTerm: string;
	currentPage: number;
	nextPage: () => Promise<void>;
	prevPage: () => Promise<void>;
}

export const RetrivedEventsContext = createContext<RetrievedEventsContextType>({
	currentEvents: null,
	searchEvents: async () => {},
	searchTerm: "",
	currentPage: 0,
	nextPage: async () => {},
	prevPage: async () => {},
});

export const RetrivedEventsProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [currentEvents, setCurrentEvents] = useState<EventSearch | null>(
		null
	);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [currentPage, setCurrentPage] = useState<number>(0);

	useEffect(() => {
		const initializeData = async () => {
			const data = await getData("US", []);
			if (data) {
				setCurrentEvents(data);
			}
		};
		initializeData();
	}, []);

	const searchEvents = useCallback(
		async (search: string) => {
			const data = await getData("US", [search], 0);
			if (data) {
				setCurrentEvents(data);
				if (search !== searchTerm) setSearchTerm(search);
				if (currentPage !== 0) setCurrentPage(0);
			}
		},
		[searchTerm, currentPage]
	);

	const nextPage = useCallback(async () => {
		const data = await getData("US", [searchTerm], currentPage + 1);
		if (data) {
			setCurrentEvents(data);
			setCurrentPage((prev) => prev + 1);
			window.scrollTo({ top: 0 });
		}
	}, [searchTerm, currentPage]);

	const prevPage = useCallback(async () => {
		if (currentPage <= 0) return;
		const data = await getData("US", [searchTerm], currentPage - 1);
		if (data) {
			setCurrentEvents(data);
			setCurrentPage((prev) => prev - 1);
			window.scrollTo({ top: 0 });
		}
	}, [searchTerm, currentPage]);

	const value: RetrievedEventsContextType = {
		currentEvents,
		searchEvents,
		searchTerm,
		currentPage,
		nextPage,
		prevPage,
	};

	return (
		<RetrivedEventsContext.Provider value={value}>
			{children}
		</RetrivedEventsContext.Provider>
	);
};
