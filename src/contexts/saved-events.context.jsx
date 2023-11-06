import { createContext, useEffect, useState } from 'react';

import {
    getLocalStorage,
    setArrLocalStorage,
} from '../utils/LocalStorage.utils';

export const SavedEventsContext = createContext({
    savedEvents: [],
    eventIsSaved: () => {},
    addSavedEvent: () => {},
    removeSavedEvent: () => {},
});

export const SavedEventsProvider = ({ children }) => {
    const [savedEvents, setSavedEvents] = useState([]);
    // Stops LocalStorage from Being Overwritten on load in 2nd useEffect
    const [shouldUpdate, setShouldUpdate] = useState(false);

    useEffect(() => {
        const setData = async () => {
            const data = await getLocalStorage('saved-events');
            setSavedEvents(data);
        };
        setData();
        setShouldUpdate(true);
    }, []);

    useEffect(() => {
        if (shouldUpdate) {
            setArrLocalStorage('saved-events', savedEvents, true);
        }
    }, [savedEvents]);

    const addSavedEvent = (eventToAdd) => {
        Array.isArray(savedEvents)
            ? setSavedEvents([...savedEvents, eventToAdd])
            : setSavedEvents([eventToAdd]);
    };

    const removeSavedEvent = (eventToRemove) => {
        setSavedEvents(
            savedEvents.filter((item) => !item.id.includes(eventToRemove.id))
        );
    };

    const eventIsSaved = (event) => {
        return savedEvents
            ? savedEvents.find((item) => item.id == event.id)
            : false;
    };

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
