import { useContext } from 'react';
import { RetrivedEventsContext } from '../../contexts/retrieved-events.context';

import CardsContainer from '../../components/cards-container/cards-container.component';

function Home() {
    const { currentEvents } = useContext(RetrivedEventsContext);

    return (
        <>
            <CardsContainer cards={currentEvents} />
        </>
    );
}

export default Home;
