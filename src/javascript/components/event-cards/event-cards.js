import { renderWithLiteral } from '../../utils/templates';

const eventCardTemplate = (card) => {
    const date = new Date(card.dates.start.dateTime);
    return `<div class="card">
        <h1 class="card-name">${card.name}</h1>
        <img class="card-img" src=${card.images[1].url} />
        <a class="card-link" target=_blank" href=${card.url}>Visit Page</a>
        <p class="card-date">${date.getFullYear()}</p>
    </div>`;
};

const renderFail = () => {
    return `<h2 class="render-fail">No Search Results</h2>`;
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
            dataSource._embedded.events.forEach((item) => {
                renderWithLiteral(eventCardTemplate(item), cardContainer);
            });
        } catch (e) {
            cardContainer.innerHTML = renderFail();
        }
    }
}
