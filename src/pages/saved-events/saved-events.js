import smallCss from '../../css/small.style.css' assert { type: 'css' };
import largeCss from '../../css/large.style.css' assert { type: 'css' };

import { loadHeaderFooter } from '../../javascript/utils/templates';

import SavedCards from '../../javascript/components/saved-cards';

async function load() {
    await loadHeaderFooter();

    const footerPositionElement = document.querySelector('footer');
    const savedCards = new SavedCards(footerPositionElement);

    savedCards.init();
}

load();
