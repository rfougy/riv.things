import { useEffect, useState } from "react";

import ArrowIcon from "../../icons/ArrowIcon";

import { Button, Box, PageNav, PageNumber } from "./Pagination.styled";
import { scrollToTop } from "../../../utils/common/scrollToTop";

const Pagination: React.FC<{
  contentToPaginate: any[];
  paginationResetDeps: any[]; // dependencies for useEffect hook to reset pagination to 1.
  setRenderedPostCards: (arg: any) => void;
  totalPostCards: number;
  initialPostCardsPerPage?: number;
}> = ({
  contentToPaginate,
  paginationResetDeps,
  setRenderedPostCards,
  totalPostCards,
  initialPostCardsPerPage = 18,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postCardsPerPage, setPostCardsPerPage] = useState<number>(
    initialPostCardsPerPage
  );

  // deducting the current PostCards for pagination
  const indexOfLastPostCard: number = currentPage * postCardsPerPage;
  const indexOfFirstPostCard: number = indexOfLastPostCard - postCardsPerPage;
  const renderedPostCards: any[] = contentToPaginate.slice(
    indexOfFirstPostCard,
    indexOfLastPostCard
  );

  const lastPage: number | undefined = Math.ceil(
    totalPostCards / postCardsPerPage
  );
  const onFirstPage: boolean = currentPage === 1;
  const onLastPage: boolean = currentPage === lastPage;

  function handlePrevButtonClick(): void {
    if (currentPage > 1) {
      const prevPage: number = currentPage - 1;
      setCurrentPage(prevPage);
    }
  }

  function handleNextButtonClick(): void {
    if (lastPage && currentPage < lastPage) {
      const nextPage: number = currentPage + 1;
      setCurrentPage(nextPage);
    }
  }

  useEffect((): void => {
    setCurrentPage(1);
  }, [...paginationResetDeps, postCardsPerPage]);

  useEffect(
    (): void => setRenderedPostCards(renderedPostCards),
    [...paginationResetDeps, currentPage]
  );

  return (
    <Box>
      <PageNav>
        <Button
          aria-label="Navigate to First Results Page"
          disabled={onFirstPage}
          onClick={(): void => {
            scrollToTop();
            setCurrentPage(1);
          }}
        >
          <ArrowIcon left />
          <ArrowIcon left />
        </Button>
        <Button
          aria-label="Navigate to Previous Results Page"
          disabled={onFirstPage}
          onClick={(): void => {
            scrollToTop();
            handlePrevButtonClick();
          }}
        >
          <ArrowIcon left />
        </Button>
        <PageNumber>
          Page {currentPage} of {lastPage}
        </PageNumber>
        <Button
          aria-label="Navigate to Next Results Page"
          disabled={onLastPage}
          onClick={(): void => {
            scrollToTop();
            handleNextButtonClick();
          }}
        >
          <ArrowIcon right />
        </Button>
        <Button
          aria-label="Navigate to Last Results Page"
          disabled={onLastPage}
          onClick={(): void => {
            scrollToTop();
            setCurrentPage(lastPage);
          }}
        >
          <ArrowIcon right />
          <ArrowIcon right />
        </Button>
      </PageNav>
      {/* <div>
        <Button onClick={() => setPostCardsPerPage(1)}>1 item per page</Button>
        <Button onClick={() => setPostCardsPerPage(2)}>2 items per page</Button>
      </div> */}
    </Box>
  );
};

export default Pagination;
