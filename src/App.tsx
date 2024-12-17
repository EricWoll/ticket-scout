import { Route, Routes } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.route";
import SearchEvents from "./routes/search-events/search-events.route";
import SavedEvents from "./routes/saved-events/saved-events.route";
import EventPage from "./routes/event-page/event-page.route";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<SearchEvents />} />
				<Route path="saved-events" element={<SavedEvents />} />
				<Route path="event-page" element={<EventPage />} />
			</Route>
		</Routes>
	);
}

export default App;
