import { createContext, useEffect, useState } from 'react';

// Value to access
export const SavedEventsContext = createContext({
    savedEvents: null,
    eventIsSaved: () => {},
    addSavedEvent: () => {},
    removeSavedEvent: () => {},
});

export const SavedEventsProvider = ({ children }) => {
    const [savedEvents, setSavedEvents] = useState([]);
    // Stops LocalStorage from Being Overwritten in 2nd useEffect
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
        setSavedEvents([...savedEvents, eventToAdd]);
    };

    const removeSavedEvent = (eventToRemove) => {
        setSavedEvents(
            savedEvents.filter((item) => !item.id.includes(eventToRemove.id))
        );
    };

    const eventIsSaved = (event) => {
        return savedEvents.find((item) => item.id == event.id);
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

export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function setArrLocalStorage(key, data, clear = false) {
    const localData = getLocalStorage(key);
    if (clear) {
        localStorage.setItem(key, JSON.stringify(data));
    } else {
        localStorage.setItem(
            key,
            JSON.stringify(
                Array.isArray(localData) ? [...localData, data] : [data]
            )
        );
    }
}
