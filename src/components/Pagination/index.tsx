import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

type PaginationProps = {
  currentPage: number;
};

function Pagination({ currentPage }: PaginationProps) {
  // 最大ページ数（仮）
  const totalCount = 10;
  const navigate = useNavigate();

  return (
    <>
      {/* <Link to={`/?page=${currentPage - 1}`}>
        <div>prev</div>
      </Link>
      <Link to={`/?page=${currentPage + 1}`}>
        <div>next</div>
      </Link> */}
      <ReactPaginate
        pageCount={totalCount}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        containerClassName={"pagination"}
        activeClassName={"active"}
        onPageChange={(page) => {
          navigate(`/?page=${page.selected + 1}`);
        }}
      />
    </>
  );
}

export default Pagination;
