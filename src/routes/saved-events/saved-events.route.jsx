import { useContext } from 'react';
import { SavedEventsContext } from '../../contexts/saved-events.context';

import CardsContainer from '../../components/cards-container/cards-container.component';

function SavedEvents() {
    const { savedEvents } = useContext(SavedEventsContext);
    const eventsCheck = () => {
        if (!Array.isArray(savedEvents)) return false;
        return savedEvents.length != 0;
    };
    return (
        <>
            {eventsCheck() ? (
                <CardsContainer cards={savedEvents} />
            ) : (
                <h1 className="no-events-flag">No Saved Events</h1>
            )}
        </>
    );
}

export default SavedEvents;
