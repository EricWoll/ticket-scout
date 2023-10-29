import { createContext, useEffect, useState } from 'react';
import getData from '../utils/Discovery.utils';

// Value to access
export const RetrivedEventsContext = createContext({
    currentEvents: {},
    searchEvents: () => {},
});

export const RetrivedEventsProvider = ({ children }) => {
    const [currentEvents, setCurrentEvents] = useState(null);

    useEffect(() => {
        const setData = async () => {
            const data = await getData('US', []);
            if (data) {
                setCurrentEvents(data);
            }
        };
        setData();
    }, []);

    const searchEvents = async (search, page = 0) => {
        const data = await getData('US', [search], page);
        setCurrentEvents(data);
    };

    const value = { currentEvents, searchEvents };

    return (
        <RetrivedEventsContext.Provider value={value}>
            {children}
        </RetrivedEventsContext.Provider>
    );
};
