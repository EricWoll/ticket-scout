import smallCss from '../../css/small.style.css' assert { type: 'css' };
import largeCss from '../../css/large.style.css' assert { type: 'css' };

import { loadHeaderFooter } from '../../javascript/utils/templates';

import SearchBar from '../../javascript/components/search-bar';
import EventCardList from '../../javascript/components/event-cards/event-cards';

import ExternalServices from '../../javascript/utils/externalServices';

async function load() {
    await loadHeaderFooter();

    const api = new ExternalServices();
    const initialSearch = await api.getData('US', []);

    const footerPositionElement = document.querySelector('footer');
    const events = new EventCardList(initialSearch, footerPositionElement);

    const searchbar = new SearchBar(
        api.getData,
        initialSearch,
        events.staticRender
    );

    events.init();
    searchbar.init();
}

load();
