import { useContext } from 'react';
import { RetrivedEventsContext } from '../../contexts/retrieved-events.context';

import CardsContainer from '../../components/cards-container/cards-container.component';
import PageTurner from '../../components/page-turner/page-turner.component';
import SearchBar from '../../components/search-bar/search-bar.component';

import { NoEvents } from './search-events.styles';

function SearchEvents() {
    const {
        currentEvents,
        searchEvents,
        currentPage,
        nextPage,
        prevPage,
        searchTerm,
    } = useContext(RetrivedEventsContext);

    if (currentEvents == null) return;

    const searchCheck = () => {
        if (currentEvents.hasOwnProperty('_embedded')) {
            return true;
        }
        return false;
    };

    const hasEvents = searchCheck();

    return (
        <>
            <SearchBar searchEvents={searchEvents} searchTerm={searchTerm} />
            {hasEvents ? (
                <CardsContainer cards={currentEvents} />
            ) : (
                <NoEvents>No event exists for '{searchTerm}'</NoEvents>
            )}
            {hasEvents ? (
                <PageTurner
                    currentPage={currentPage}
                    nextPage={nextPage}
                    prevPage={prevPage}
                />
            ) : null}
        </>
    );
}

export default SearchEvents;
