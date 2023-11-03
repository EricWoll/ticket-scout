import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SavedEventsContext } from '../../../contexts/saved-events.context';

import {
    Card_div,
    CardImage_img,
    CardTitle_h2,
    CardDateTime_sec,
    CardDate_p,
    CardTime_p,
    CardLinks_sec,
    CardLink_link,
    CardLink_button,
} from './card.styles';

function Card({ cardItem }) {
    const { addSavedEvent, removeSavedEvent, eventIsSaved } =
        useContext(SavedEventsContext);

    const date = new Date(cardItem.dates.start.dateTime);
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const isSaved = eventIsSaved(cardItem);
    const addEventHandler = () => addSavedEvent(cardItem);
    const removeEventHandler = () => removeSavedEvent(cardItem);

    return (
        <Card_div>
            <CardImage_img src={cardItem.images[1].url} />
            <CardTitle_h2>{cardItem.name}</CardTitle_h2>
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
                <CardLink_link to={cardItem.url} target="_blank">
                    Visit Page
                </CardLink_link>
                {isSaved ? (
                    <CardLink_button onClick={removeEventHandler}>
                        Unsave
                    </CardLink_button>
                ) : (
                    <CardLink_button onClick={addEventHandler}>
                        Save
                    </CardLink_button>
                )}
            </CardLinks_sec>
        </Card_div>
    );
}

export default Card;
