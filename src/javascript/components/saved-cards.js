import {
    getLocalStorage,
    setArrLocalStorage,
    toggleLocalStorage,
} from '../utils/localStorage';
import { renderWithLiteral } from '../utils/templates';

import { eventCardTemplate } from './event-card-info';

export default class SavedCards {
    constructor(positionElement) {
        this.positionElement = positionElement;
    }

    init() {
        this.cardContainer = document.createElement('div');
        this.cardContainer.classList.add('card-container');
        this.positionElement.before(this.cardContainer);
        this.render(this.dataList);
    }

    removeExpired() {
        const savedEvents = getLocalStorage('saved-events');
        const currDate = new Date();

        const newEvents = savedEvents.filter((event) => {
            const eventDate = new Date(event.dates.start.dateTime);
            return eventDate >= currDate;
        });
        setArrLocalStorage('saved-events', newEvents, true);
    }

    render() {
        const cardContainer = document.querySelector('.card-container');
        cardContainer.innerHTML = '';

        this.removeExpired();

        const savedEvents = getLocalStorage('saved-events');

        if (savedEvents.length == 0) {
            cardContainer.innerHTML = `<h2 class="no-saved-events">You Have No Saved Events!</h2>`;
            return;
        }

        savedEvents.forEach((item) => {
            renderWithLiteral(
                eventCardTemplate(item, savedEvents),
                cardContainer
            );

            const htmlItemButton = document
                .getElementById(item.id)
                .querySelector('.card-save-button');

            htmlItemButton.addEventListener('click', () => {
                toggleLocalStorage('saved-events', item);
            });
        });
    }
}
