export default function Images({
	images,
	ratio,
	width,
	height,
	className,
}: {
	images: EventCard["images"];
	ratio: string;
	width: number;
	height?: number | undefined;
	className?: string | undefined;
}) {
	let foundImages = [];

	if (height) {
		foundImages = images.filter(
			(image) =>
				image.ratio === ratio &&
				image.width === width &&
				image.height == height
		);
	} else {
		foundImages = images.filter(
			(image) => image.ratio === ratio && image.width === width
		);
	}

	return <img src={foundImages[0].url} className={className} />;
}
