import { useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import { SavedEventsContext } from "../../../contexts/saved-events.context";

import SavedHeart from "../../../svg/icon-filled-heart.svg?react";
import UnSavedHeart from "../../../svg/icon-unfilled-heart.svg?react";

function Card({ cardItem }: { cardItem: EventCard }) {
	const { addSavedEvent, removeSavedEvent, eventIsSaved } =
		useContext(SavedEventsContext);

	const date = new Date(cardItem.dates.start.dateTime);
	const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

	const isSaved = eventIsSaved(cardItem);
	const addEventHandler = useCallback(
		() => addSavedEvent(cardItem),
		[cardItem]
	);
	const removeEventHandler = useCallback(
		() => removeSavedEvent(cardItem),
		[cardItem]
	);

	const handleCardClick = () => {};

	return (
		<div className="event-card">
			<section className="event-card-content">
				<section className="event-card-header">
					<section className="event-title-container">
						<h2 className="event-card-title">{cardItem.name}</h2>
					</section>
					{isSaved ? (
						<SavedHeart
							className="event-card-save-icon"
							onClick={removeEventHandler}
						/>
					) : (
						<UnSavedHeart
							className="event-card-save-icon"
							onClick={addEventHandler}
						/>
					)}
				</section>
				<img className="event-card-img" src={cardItem.images[1].url} />

				<section className="event-card-info">
					<p className="event-card-date">
						{date.toLocaleString("en-us", {
							month: "short",
							day: "numeric",
							year: "numeric",
						})}
					</p>
					<p className="event-card-time">
						{date.toLocaleString("en-us", {
							timeZone: timeZone,
							hour: "2-digit",
							minute: "2-digit",
						})}
					</p>
				</section>
			</section>
			<button className="event-card-link" onClick={handleCardClick}>
				More Info
			</button>
			<Link className="event-card-link" to={cardItem.url} target="_blank">
				Visit Page
			</Link>
		</div>
	);
}

export default Card;
