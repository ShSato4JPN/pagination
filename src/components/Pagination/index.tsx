import PageList from "../PageList";

type PaginationProps = {
  currentPage: number;
  maxPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

function Pagination({ currentPage, maxPage, setPage }: PaginationProps) {
  const handlePrev = () => {
    let pageNo;
    if (0 < currentPage - 1) {
      pageNo = currentPage - 1;
    } else {
      pageNo = 1;
    }
    setPage(pageNo);
  };

  const handleNext = () => {
    let pageNo;
    if (currentPage + 1 < maxPage) {
      pageNo = currentPage + 1;
    } else {
      pageNo = maxPage;
    }
    setPage(pageNo);
  };

  return (
    <>
      <button onClick={handlePrev}>PREV</button>
      <button onClick={handleNext}>NEXT</button>
    </>
  );
}

export default Pagination;
