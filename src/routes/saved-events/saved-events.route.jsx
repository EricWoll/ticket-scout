import { useContext } from 'react';
import { SavedEventsContext } from '../../contexts/saved-events.context';

import CardsContainer from '../../components/cards-container/cards-container.component';

import { NoSavedEvents } from './saved-events.styles';

function SavedEvents() {
    const { savedEvents } = useContext(SavedEventsContext);
    const eventsCheck = () => {
        if (!Array.isArray(savedEvents)) return false;
        return savedEvents.length == 0;
    };
    return (
        <>
            {eventsCheck() ? (
                <NoSavedEvents>No Saved Events</NoSavedEvents>
            ) : (
                <CardsContainer cards={savedEvents} />
            )}
        </>
    );
}

export default SavedEvents;
