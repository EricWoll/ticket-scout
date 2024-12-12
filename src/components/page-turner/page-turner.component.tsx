export default function PageTurner({ currentPage, nextPage, prevPage }: {
    currentPage: number;
    nextPage: () => Promise<void>;
    prevPage: () => Promise<void>;
}) {
    return (
        <div className="page-turner-container">
            <button className="page-turner-button" onClick={prevPage}>
                Prev
            </button>
            <p className="page-turner-number">{currentPage + 1}</p>
            <button className="page-turner-button" onClick={nextPage}>
                Next
            </button>
        </div>
    );
}
