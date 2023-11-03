import { Route, Routes } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.route';
import Home from './routes/home/home.route';
import SearchEvents from './routes/search-events/search-events.route';
import SavedEvents from './routes/saved-events/saved-events.route';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="search-events" element={<SearchEvents />} />
                <Route path="saved-events" element={<SavedEvents />} />
            </Route>
        </Routes>
    );
}

export default App;
