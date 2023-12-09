import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SavedEventsContext } from '../../../contexts/saved-events.context';

function Card({ cardItem }) {
    const { addSavedEvent, removeSavedEvent, eventIsSaved } =
        useContext(SavedEventsContext);

    const date = new Date(cardItem.dates.start.dateTime);
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const isSaved = eventIsSaved(cardItem);
    const addEventHandler = () => addSavedEvent(cardItem);
    const removeEventHandler = () => removeSavedEvent(cardItem);

    return (
        <div className="event-card">
            <img className="event-card-img" src={cardItem.images[1].url} />
            <h2 className="card-card-title">{cardItem.name}</h2>
            <section className="event-card-info">
                <p className="event-card-date">
                    {date.toLocaleString('en-us', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                    })}
                </p>
                <p className="event-card-time">
                    {date.toLocaleString('en-us', {
                        timeZone: timeZone,
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </p>
            </section>
            <section className="event-card-links">
                <Link
                    className="event-card-link"
                    to={cardItem.url}
                    target="_blank"
                >
                    Visit Page
                </Link>
                {isSaved ? (
                    <button
                        className="event-card-unsave"
                        onClick={removeEventHandler}
                    >
                        Unsave
                    </button>
                ) : (
                    <button
                        className="event-card-save"
                        onClick={addEventHandler}
                    >
                        Save
                    </button>
                )}
            </section>
        </div>
    );
}

export default Card;
