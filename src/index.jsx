import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import { RetrivedEventsProvider } from './contexts/retrieved-events.context.jsx';
import { SavedEventsProvider } from './contexts/saved-events.context.jsx';

import './vis-reset.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
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
