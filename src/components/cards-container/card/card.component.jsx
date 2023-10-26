import {
    Card_div,
    CardImage_img,
    CardDateTime_sec,
    CardDate_p,
    CardTime_p,
    CardLinks_sec,
    CardLink_a,
    CardLink_button,
} from './card.styles';

function Card({ cardItem, savedCards }) {
    const newSavedCards = savedCards.filter((item) => {
        return item.id == cardItem.id && item.isSaved == true;
    });

    const date = new Date(cardItem.dates.start.dateTime);

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return (
        <Card_div>
            <CardImage_img src={cardItem.images[1].url} />
            <CardDateTime_sec>
                <CardDate_p>
                    {date.toLocaleString('en-us', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                    })}
                </CardDate_p>
                <CardTime_p>
                    {date.toLocaleString('en-us', {
                        timeZone: timeZone,
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </CardTime_p>
            </CardDateTime_sec>
            <CardLinks_sec>
                <CardLink_a target="_blank" href={cardItem.url}>
                    Visit Page
                </CardLink_a>
                {!newSavedCards.length > 0 ? (
                    <CardLink_button>Save</CardLink_button>
                ) : (
                    <CardLink_button>Unsave</CardLink_button>
                )}
            </CardLinks_sec>
        </Card_div>
    );
}

export default Card;
