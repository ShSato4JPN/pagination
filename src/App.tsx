import { useState, useMemo, useEffect } from "react";
import styles from "./style.module.css";
import fetcher from "./libs/fetcher";
import Pagination from "./components/Pagination";
import ListViewer from "./components/PageList";
import useSWR from "swr";

function App() {
  const range = 10;
  const { data } = useSWR(`http://localhost:3000/post/${page}`, fetcher);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [page, setPage] = useState(1);

  const maxPage = useMemo(() => {
    if (!data) return 1;
    return Math.ceil(data.totalCount / range);
  }, [data]);

  return (
    <>
      <div>
        <ListViewer posts={data?.posts} />
        <Pagination
          currentPage={currentPage}
          maxPage={maxPage}
          setPage={setPage}
        />
      </div>
    </>
  );
}

export default App;
