function createButtons(SearchObject, parentElement) {
    const searchTerm = SearchObject.textField.value;
    let page = SearchObject.searchReturn.page.number;
    let prevPage = page - 1 < 0 ? 0 : page - 1;

    const updatePageNum = (newPage) => {
        page = newPage;
        prevPage = newPage - 1;
    };

    const getDataCallback = SearchObject.getDataCallback;
    const updatePageCallback = SearchObject.updateDataCallback;

    const firstButton = document.createElement('button');
    firstButton.classList.add('page-turner-link');
    firstButton.textContent = '<';
    firstButton.onclick = async () => {
        if (page <= 0) {
            return;
        }

        const data = await getDataCallback('US', searchTerm, prevPage);
        SearchObject.updateSearchReturn(data);
        updatePageCallback(data);
        updatePageNum(data.page.number);
        pageNum.textContent = `${page + 1}`;
    };

    const pageNum = document.createElement('p');
    pageNum.classList.add('page-turner-current-page');
    pageNum.textContent = `${page + 1}`;

    const secondButton = document.createElement('button');
    secondButton.classList.add('page-turner-link');
    secondButton.textContent = '>';
    secondButton.onclick = async () => {
        const data = await getDataCallback('US', searchTerm, page + 1);
        SearchObject.updateSearchReturn(data);
        updatePageCallback(data);
        updatePageNum(data.page.number);
        pageNum.textContent = `${page + 1}`;
    };

    parentElement.append(firstButton, pageNum, secondButton);
}

export default class PageTurner {
    constructor() {
        this.dataSource = {};
        this.startUp();
    }

    startUp() {
        this.turnerContainer = document.createElement('div');
        this.turnerContainer.classList.add('page-turner-container');
        this.searchTerm = '';
    }

    init() {
        this.positionElement = document.querySelector('.card-container');
        this.positionElement.after(this.turnerContainer);
    }

    updateTurner(SearchObject) {
        const turnerContainer = document.querySelector(
            '.page-turner-container'
        );
        turnerContainer.innerHTML = '';
        createButtons(SearchObject, turnerContainer, this);
    }
}
