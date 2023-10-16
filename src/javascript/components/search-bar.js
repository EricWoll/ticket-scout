export default class SearchBar {

    constructor() {
        this.setup();
    }

    init() {
        this.renderSearchBar();
    }

    setup() {
        this.positionElement = document.querySelector("h1");
        this.createElements();
    }

    createElements() {
        this.searchBarHolder = document.createElement('div');
        this.searchBarHolder.classList.add('search-bar');
        this.positionElement.after(this.searchBarHolder);

        this.textCategory = document.createElement("div");
        this.textCategory.classList.add("search-bar-categories");
        // add different categories (function to find categories?)

        this.textField = document.createElement('input');
        this.textField.placeholder = 'Search';
        this.textField.classList.add('search-bar-input');
        this.textField.type = 'search';

        this.searchButton = document.createElement("button");
        this.searchButton.classList.add("search-bar-button");

        this.addListeners();
    }

    renderSearchBar() {
        this.searchBarHolder.append(this.textCategory);
        this.searchBarHolder.append(this.textField);
        this.searchBarHolder.append(this.searchButton);
    }

    addListeners() {
        this.textField.oninput = () => {
            // update search variable holder
        }

        this.searchButton.onclick = () => {
            this.dataListFilter();
        }
    }

    dataListFilter() {
       // send search to api
    }


}