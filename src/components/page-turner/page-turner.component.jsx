function PageTurner({ currentPage, nextPage, prevPage }) {
    return (
        <div className="page-turner-container">
            <button className="page-turner-prev" onClick={prevPage}>
                Prev
            </button>
            <p className="page-turner-number">{currentPage + 1}</p>
            <button className="page-turner-next" onClick={nextPage}>
                Next
            </button>
        </div>
    );
}

export default PageTurner;
