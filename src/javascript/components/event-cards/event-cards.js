import { renderWithLiteral } from '../../utils/templates';

const eventCardTemplate = (card) => {
    const date = new Date(card.dates.start.dateTime);
    return `<div class="card" data-saved=false>
        <h2 class="card-name">${card.name}</h2>
        <img class="card-img" src=${card.images[1].url} />
        <a class="card-link" target=_blank" href=${card.url}>Visit Page</a>
        <p class="card-date">${date.toLocaleString('en-us', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        })}</p>
    </div>`;
};

const renderFail = () => {
    return `<h2 class="render-fail">That Event Does not Exist!</h2>`;
};

export default class EventCardList {
    constructor(dataSource, positionElement) {
        this.dataSource = dataSource;
        this.positionElement = positionElement;
    }

    init() {
        this.cardContainer = document.createElement('div');
        this.cardContainer.classList.add('card-container');
        this.positionElement.before(this.cardContainer);
        this.staticRender(this.dataSource);
    }

    staticRender(dataSource) {
        const cardContainer = document.querySelector('.card-container');
        try {
            cardContainer.innerHTML = '';

            // Checks for empty object
            Object.keys(dataSource).length != 0
                ? dataSource._embedded.events.forEach((item) => {
                      renderWithLiteral(eventCardTemplate(item), cardContainer);
                  })
                : (cardContainer.innerHTML = `<h2 class="no-search-start">Start your Search!</h2>`);
        } catch (e) {
            cardContainer.innerHTML = renderFail();
        }
    }
}
