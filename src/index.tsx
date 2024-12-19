import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { RetrivedEventsProvider } from "./contexts/retrieved-events.context";
import { SavedEventsProvider } from "./contexts/saved-events.context";

import "./index.css";

createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<RetrivedEventsProvider>
				<SavedEventsProvider>
					<App />
				</SavedEventsProvider>
			</RetrivedEventsProvider>
		</BrowserRouter>
	</React.StrictMode>
);
