import PageList from "../PageList";
import { Link } from "react-router-dom";

type PaginationProps = {
  currentPage: number;
};

function Pagination({ currentPage }: PaginationProps) {
  return (
    <>
      <Link to={`/?page=${currentPage - 1}`}>
        <div>prev</div>
      </Link>
      <Link to={`/?page=${currentPage + 1}`}>
        <div>next</div>
      </Link>
    </>
  );
}

export default Pagination;
