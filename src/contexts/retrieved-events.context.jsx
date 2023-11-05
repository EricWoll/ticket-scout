import { createContext, useEffect, useState } from 'react';
import getData from '../utils/Discovery.utils';

// Value to access
export const RetrivedEventsContext = createContext({
    currentEvents: {},
    searchEvents: () => {},
});

export const RetrivedEventsProvider = ({ children }) => {
    const [currentEvents, setCurrentEvents] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const setData = async () => {
            const data = await getData('US', []);
            if (data) {
                setCurrentEvents(data);
            }
        };
        setData();
    }, []);

    const searchEvents = async (search) => {
        const data = await getData('US', [search], 0);
        setCurrentEvents(data);
        setSearchTerm(search);
        setCurrentPage(0);
    };

    const nextPage = async () => {
        const data = await getData('US', [searchTerm], currentPage + 1);
        setCurrentEvents(data);
        setCurrentPage(currentPage + 1);
        window.scrollTo({ top: 0 });
    };

    const prevPage = async () => {
        if (currentPage <= 0) {
            return;
        }
        const data = await getData('US', [searchTerm], currentPage + 1);
        setCurrentEvents(data);
        setCurrentPage(currentPage - 1);
        window.scrollTo({ top: 0 });
    };

    const value = {
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
