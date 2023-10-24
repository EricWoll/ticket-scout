import { getLocalStorage, toggleLocalStorage } from '../utils/localStorage';
import { renderWithLiteral } from '../utils/templates';

import { eventCardTemplate, renderFail } from './event-card-info';

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

            const savedEvents = getLocalStorage('saved-events');

            // Checks for empty object
            Object.keys(dataSource).length != 0
                ? dataSource._embedded.events.forEach((item) => {
                      renderWithLiteral(
                          eventCardTemplate(
                              item,
                              savedEvents.length >= 0 ? savedEvents : []
                          ),
                          cardContainer
                      );

                      const htmlItemButton = document
                          .getElementById(item.id)
                          .querySelector('.card-save-button');

                      htmlItemButton.addEventListener('click', () => {
                          toggleLocalStorage('saved-events', item);
                      });
                  })
                : (cardContainer.innerHTML = `<h2 class="no-search-start">Start your Search!</h2>`);
        } catch (e) {
            console.log(e);
            cardContainer.innerHTML = renderFail();
        }
    }
}
