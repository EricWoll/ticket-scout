import CardsContainer from '../../components/cards-container/cards-container.component';
import PageTurner from '../../components/page-turner/page-turner.component';
import SearchBar from '../../components/search-bar/search-bar.component';

function SearchEvents() {
    return (
        <>
            <SearchBar />
            <CardsContainer />
            <PageTurner />
        </>
    );
}

export default SearchEvents;
