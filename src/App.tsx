import { useState, useMemo, useEffect, useCallback } from "react";
import styles from "./style.module.css";
import { useLocation } from "react-router-dom";
import fetcher from "./libs/fetcher";
import Pagination from "./components/Pagination";
import ListViewer from "./components/PageList";
import useSWR from "swr";

function App() {
  const range = 10;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [currentPage, setCurrentPage] = useState<number>(
    Number(queryParams.get("page"))
  );
  // データフェッチ
  const { data } = useSWR(`http://localhost:3000/post/${currentPage}`, fetcher);

  const maxPage = useMemo(() => {
    if (!data) return 1;
    return Math.ceil(data.totalCount / range);
  }, [data]);

  const handlePrev = useCallback(() => {
    let pageNo: number = currentPage;
    if (0 < currentPage - 1) {
      pageNo = currentPage - 1;
    } else {
      pageNo = 1;
    }
    setCurrentPage(() => pageNo);
  }, [currentPage]);

  const handleNext = useCallback(() => {
    let pageNo: number = currentPage;
    if (currentPage + 1 < maxPage) {
      pageNo = currentPage + 1;
    } else {
      pageNo = maxPage;
    }
    setCurrentPage(() => pageNo);
  }, [currentPage, maxPage]);

  return (
    <>
      <div>
        <ListViewer posts={data?.posts} />
        <Pagination handlePrev={handlePrev} handleNext={handleNext} />
      </div>
    </>
  );
}

export default App;
