import { useContext } from 'react';
import { RetrivedEventsContext } from '../../contexts/retrieved-events.context';

import CardsContainer from '../../components/cards-container/cards-container.component';
import PageTurner from '../../components/page-turner/page-turner.component';
import SearchBar from '../../components/search-bar/search-bar.component';

function SearchEvents() {
    const { currentEvents, searchEvents, currentPage, nextPage, prevPage } =
        useContext(RetrivedEventsContext);

    const searchCheck = () => {
        if (currentEvents.hasOwnProperty('_embedded')) {
            return true;
        }
        return false;
    };

    return (
        <>
            <SearchBar searchEvents={searchEvents} />
            {searchCheck() ? (
                <CardsContainer cards={currentEvents} />
            ) : (
                <h2>No event exists</h2>
            )}

            <PageTurner
                currentPage={currentPage}
                nextPage={nextPage}
                prevPage={prevPage}
            />
        </>
    );
}

export default SearchEvents;
