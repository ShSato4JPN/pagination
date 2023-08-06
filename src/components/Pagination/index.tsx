import PageList from "../PageList";

type PaginationProps = {
  handlePrev: () => void;
  handleNext: () => void;
};

function Pagination({ handlePrev, handleNext }: PaginationProps) {
  return (
    <>
      <button onClick={handlePrev}>PREV</button>
      <button onClick={handleNext}>NEXT</button>
    </>
  );
}

export default Pagination;
