import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.get("/post/:page", async (req, res) => {
  const page = req.params.page;
  const range = 10;
  const start = page * range + 1;

  const PromiseList = [];
  for (let i = 0; i < range; i++) {
    PromiseList.push(
      axios.get(`https://jsonplaceholder.typicode.com/posts/${start + i}`)
    );
  }

  const data = (await Promise.all(PromiseList)).map((res) => res.data);

  res.status(200).json(data);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
