import { useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import { SavedEventsContext } from "../../../contexts/saved-events.context";

import SavedHeart from "../../../svg/icon-filled-heart.svg?react";
import UnSavedHeart from "../../../svg/icon-unfilled-heart.svg?react";
import ImagesClipPath from "../../image/clipPath.image.conponent";

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

	return (
		<div className="w-72 shadow-main p-2 rounded-md flex flex-col">
			<section className="relative p-2 shadow-main_inset rounded-md">
				<ImagesClipPath
					images={cardItem.images}
					ratio="3_2"
					width={640}
				/>
				{isSaved ? (
					<SavedHeart
						className="absolute top-2 right-2 select-none cursor-pointer"
						onClick={removeEventHandler}
					/>
				) : (
					<UnSavedHeart
						className="absolute top-2 right-2 select-none cursor-pointer"
						onClick={addEventHandler}
					/>
				)}
			</section>

			<section className="h-full flex flex-col">
				<h2 className="text-center overflow-clip font-bold">
					{cardItem.name}
				</h2>
				<section className="flex flex-none justify-between mb-1 mt-auto">
					<p className="text-sm text-gray-600 mt-auto mb-0">
						{date.toLocaleString("en-us", {
							month: "short",
							day: "numeric",
							year: "numeric",
						})}
					</p>
					<p className="text-sm text-gray-600 mt-auto mb-0">
						{date.toLocaleString("en-us", {
							timeZone: timeZone,
							hour: "2-digit",
							minute: "2-digit",
						})}
					</p>
				</section>
			</section>

			<Link
				className="flex py-2 px-3 justify-center rounded-md bg-Medium_slate_blue w-full"
				to={`/event-page?card_id=${cardItem.id}`}
			>
				See More
			</Link>
		</div>
	);
}

export default Card;
