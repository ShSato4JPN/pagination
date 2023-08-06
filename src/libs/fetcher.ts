import axios, { AxiosResponse } from "axios";
import { Posts, Post } from "../types";

type FetcherProps = {
  start: number;
};

async function fetcher({ start }: FetcherProps) {
  const range = 10;

  const PromiseList = [];
  for (let i = 0; i < range; i++) {
    PromiseList.push(
      axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${start + i}`)
    );
  }

  return (await Promise.all(PromiseList)).map((res) => res.data) as Posts;
}

export default fetcher;
