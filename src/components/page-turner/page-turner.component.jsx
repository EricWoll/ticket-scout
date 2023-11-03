function PageTurner({ currentPage, nextPage, prevPage }) {
    return (
        <div className="page-turner-container">
            <button onClick={prevPage}>Prev</button>
            <p>{currentPage + 1}</p>
            <button onClick={nextPage}>Next</button>
        </div>
    );
}

export default PageTurner;
