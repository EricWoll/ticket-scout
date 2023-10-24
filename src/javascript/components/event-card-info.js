export const eventCardTemplate = (card, savedCards) => {
    const newSavedCards = savedCards.filter((item) => {
        return item.id == card.id && item.isSaved == true;
    });

    const date = new Date(card.dates.start.dateTime);

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return `<div class="card" id='${card.id}' data-saved=false>
        <img class="card-img" src=${card.images[1].url} />
        <section class="card-info">
            <h2 class="card-name">${card.name}</h2>
            <section class="card-date-time">
                <p class="card-date">${date.toLocaleString('en-us', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                })}</p>
                <p class="card-time">${date.toLocaleString('en-us', {
                    timeZone: timeZone,
                    hour: '2-digit',
                    minute: '2-digit',
                })}</p>
            </section>
            <section class="card-links">
                <a class="card-link" target="_blank" href=${
                    card.url
                }>Visit Page</a>
                ${
                    !newSavedCards.length > 0
                        ? `<button class='card-save-button'>Save</button>`
                        : `<button class='card-save-button'>Unsave</button>`
                }
            </section>
        </section>
    </div>`;
};

export const renderFail = () => {
    return `<h2 class="render-fail">That Event Does not Exist!</h2>`;
};
