export const eventCardTemplate = (card, savedCards) => {
    const savedCard = savedCards.some((item) => {
        return item.id == card.id && item.isSaved == true;
    });
    const date = new Date(card.dates.start.dateTime);

    return `<div class="card" id='${card.id}' data-saved=false>
        <h2 class="card-name">${card.name}</h2>
        <img class="card-img" src=${card.images[1].url} />
        <a class="card-link" target=_blank" href=${card.url}>Visit Page</a>
        <p class="card-date">${date.toLocaleString('en-us', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        })}</p>
        ${
            !savedCard
                ? `<button class='card-save-button'>Save</button>`
                : `<button class='card-save-button'>Unsave</button>`
        }
    </div>`;
};

export const renderFail = () => {
    return `<h2 class="render-fail">That Event Does not Exist!</h2>`;
};
