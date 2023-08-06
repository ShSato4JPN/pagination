import { Fetcher } from "swr";
import axios, { AxiosResponse } from "axios";
import { ApiResponse } from "../types";

const fetcher: Fetcher<ApiResponse, string> = (url: string) => {
  console.log(url);
  return fetch(url).then((res) => res.json());
};

export default fetcher;
