import { useEffect, useState } from "react";
import styles from "./style.module.css";
import fetcher from "./libs/fetcher";
import { Posts } from "./types";

function App() {
  const [posts, setPosts] = useState<Posts>([]);

  useEffect(() => {
    fetcher({ start: 1 }).then((data) => {
      setPosts(data);
    });
  }, []);

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <h1>{post.id}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
