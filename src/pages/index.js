import smallCss from '../css/small.style.css' assert { type: 'css' };
import largeCss from '../css/large.style.css' assert { type: 'css' };

import { loadHeaderFooter } from '../javascript/utils/templates';
import EventCardList from '../javascript/components/event-cards';

import ExternalServices from '../javascript/utils/externalServices';

async function load() {
    await loadHeaderFooter();

    const api = new ExternalServices();
    const initialSearch = await api.getData('US', []);

    const footerPositionElement = document.querySelector('footer');
    const events = new EventCardList(initialSearch, footerPositionElement);

    events.init();
}

load();
