import { useContext } from 'react';
import { SavedEventsContext } from '../../contexts/saved-events.context';

import CardsContainer from '../../components/cards-container/cards-container.component';

function SavedEvents() {
    const { savedEvents } = useContext(SavedEventsContext);
    return (
        <>
            <CardsContainer cards={savedEvents} />
        </>
    );
}

export default SavedEvents;
