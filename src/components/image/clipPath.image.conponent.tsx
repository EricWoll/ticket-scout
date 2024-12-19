export default function ImagesClipPath({
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

	return (
		<svg viewBox="0 0 325 325" fill="none" className={className}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M20 0C8.95431 0 0 8.9543 0 20V305C0 316.046 8.9543 325 20 325H305C316.046 325 325 316.046 325 305V92C325 80.9543 316.046 72 305 72H273C261.954 72 253 63.0457 253 52V20C253 8.95431 244.046 0 233 0H20Z"
				fill={`url(#${foundImages[0].url})`}
			/>
			<defs>
				<pattern
					id={foundImages[0].url}
					patternContentUnits="objectBoundingBox"
					width="1"
					height="1"
				>
					<image
						href={foundImages[0].url}
						width="1"
						height="1"
						preserveAspectRatio="xMidYMid slice"
					/>
				</pattern>
			</defs>
		</svg>
	);
}
