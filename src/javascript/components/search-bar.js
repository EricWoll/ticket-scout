export default class SearchBar {
    constructor(getDataCallback, initialSearch, updateDataCallback) {
        this.getDataCallback = getDataCallback;
        this.searchReturn = initialSearch;
        this.updateDataCallback = updateDataCallback;
        this.setup();
    }

    init() {
        this.renderSearchBar();
    }

    setup() {
        this.positionElement = document.querySelector('h1');
        this.createElements();
    }

    createElements() {
        this.searchBarHolder = document.createElement('div');
        this.searchBarHolder.classList.add('search-bar');
        this.positionElement.after(this.searchBarHolder);

        this.textField = document.createElement('input');
        this.textField.placeholder = 'Search';
        this.textField.classList.add('search-bar-input');
        this.textField.type = 'search';

        this.searchButton = document.createElement('button');
        this.searchButton.textContent = 'Find';
        this.searchButton.classList.add('search-bar-button');

        this.addListeners();
    }

    renderSearchBar() {
        this.searchBarHolder.append(this.textField);
        this.searchBarHolder.append(this.searchButton);
    }

    addListeners() {
        this.searchButton.onclick = async () => {
            this.searchReturn = await this.getDataCallback(
                'US',
                this.textField.value
            );
            this.updateDataCallback(this.searchReturn);
        };
    }

    getSearchReturn() {
        return this.searchReturn;
    }
}
