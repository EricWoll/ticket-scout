import {
    PageTurnerContainer,
    PageTurnerButton,
    PageNumber,
} from './page-turner.styles';

function PageTurner({ currentPage, nextPage, prevPage }) {
    return (
        <PageTurnerContainer>
            <PageTurnerButton onClick={prevPage}>Prev</PageTurnerButton>
            <PageNumber>{currentPage + 1}</PageNumber>
            <PageTurnerButton onClick={nextPage}>Next</PageTurnerButton>
        </PageTurnerContainer>
    );
}

export default PageTurner;
