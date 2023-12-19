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
            <section className="event-card-content">
                <section className="event-card-header">
                    <section className="event-title-container">
                        <h2 className="event-card-title">{cardItem.name}</h2>
                    </section>
                    {isSaved ? (
                        <img
                            className="event-card-save-icon"
                            onClick={removeEventHandler}
                            src="../../../public/assets/Saved-Icon.png"
                        />
                    ) : (
                        <img
                            className="event-card-save-icon"
                            onClick={addEventHandler}
                            src="../../../public/assets/Not-Saved-Icon.png"
                        />
                    )}
                </section>
                <img className="event-card-img" src={cardItem.images[1].url} />

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
            </section>
            <Link className="event-card-link" to={cardItem.url} target="_blank">
                Visit Page
            </Link>
        </div>
    );
}

export default Card;
