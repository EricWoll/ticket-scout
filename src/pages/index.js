import smallCss from '../css/small.style.css' assert { type: 'css' };
import largeCss from '../css/large.style.css' assert { type: 'css' };

import { loadHeaderFooter } from '../javascript/utils/templates';
import SearchBar from '../javascript/components/search-bar';

import ExternalServices from '../javascript/utils/externalServices';

loadHeaderFooter();

const searchbar = new SearchBar();
searchbar.init();

const api = new ExternalServices();

api.getData('US', 'events', ['some']);
