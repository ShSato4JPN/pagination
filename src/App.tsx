import { useState, useMemo, useEffect, useCallback } from "react";
import styles from "./style.module.css";
import { useLocation } from "react-router-dom";
import fetcher from "./libs/fetcher";
import Pagination from "./components/Pagination";
import ListViewer from "./components/PageList";
import useSWR from "swr";

function App() {
  const { search } = useLocation();
  const currentPage = useMemo(() => {
    const queryParams = new URLSearchParams(search);
    if (queryParams.has("page")) {
      const page = Number(queryParams.get("page"));
      return isNaN(page) ? 1 : page;
    } else {
      return 1;
    }
  }, [search]);

  // データフェッチ
  const { data } = useSWR(`http://localhost:3000/post/${currentPage}`, fetcher);

  return (
    <>
      <div>
        <ListViewer posts={data?.posts} />
        <Pagination currentPage={currentPage} />
      </div>
    </>
  );
}

export default App;
