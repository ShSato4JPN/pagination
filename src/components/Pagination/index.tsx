import styles from "./style.module.css";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

type PaginationProps = {
  currentPage: number;
};

type FilterParams = {
  showNumbers: number[];
  leftBreak: boolean;
  rightBreak: boolean;
};

function Pagination({ currentPage }: PaginationProps) {
  // 最大ページ数（仮）
  //const navigate = useNavigate();

  const totalCount: number = 10;
  const pageNumbers = useMemo<FilterParams>(() => {
    const numbers = Array.from({ length: totalCount }).map((_, i) => i + 1);

    let leftBreak = true;
    const min = Math.min(...numbers);
    if (numbers.includes(min + 1)) {
      leftBreak = false;
    }

    let rightBreak = true;
    const max = Math.max(...numbers);
    if (numbers.includes(max + 1)) {
      rightBreak = false;
    }

    const showNumbers = numbers
      .filter(
        (n) =>
          n == 1 ||
          n === totalCount ||
          n === currentPage ||
          n === currentPage - 1 ||
          n === currentPage + 1 ||
          (currentPage === totalCount && n === currentPage - 2) ||
          (currentPage === 1 && n === currentPage + 2)
      )
      .sort((a, b) => a - b);

    return {
      showNumbers,
      leftBreak,
      rightBreak,
    };
  }, [currentPage]);

  return (
    <>
      <ul>
        {pageNumbers.showNumbers.map((n) => (
          <li key={n}>
            <Link to={`/?page=${n}`}>
              {n === currentPage ? (
                <div className={`${styles.box} ${styles.isCurrent}`}>{n}</div>
              ) : (
                <div className={styles.box}>{n}</div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Pagination;
