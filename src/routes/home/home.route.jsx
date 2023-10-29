import CardsContainer from '../../components/cards-container/cards-container.component';
import SearchBar from '../../components/search-bar/search-bar.component';

function Home() {
    return (
        <>
            {/*
                Make searchBar change to SearchEvenbts page on click. (maybe have a default behavior?)
                ex: <SearchBar pageClick='/search-events/' />
            */}
            <SearchBar />
            <CardsContainer />
        </>
    );
}

export default Home;
