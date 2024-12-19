export default function PageTurner({
	currentPage,
	nextPage,
	prevPage,
}: {
	currentPage: number;
	nextPage: () => Promise<void>;
	prevPage: () => Promise<void>;
}) {
	return (
		<div className="w-full flex justify-center">
			<section className="shadow-main bg-white flex px-5 py-2 gap-4 rounded-md items-center">
				<button
					className="rounded-md px-2 hover:bg-Medium_slate_blue hover:text-white py-1"
					onClick={prevPage}
				>
					Prev
				</button>
				<p className="px-5 select-none bg-white shadow-main_inset rounded-md text-Medium_slate_blue font-bold">
					{currentPage + 1}
				</p>
				<button
					className="rounded-md px-2 hover:bg-Medium_slate_blue hover:text-white py-1"
					onClick={nextPage}
				>
					Next
				</button>
			</section>
		</div>
	);
}
