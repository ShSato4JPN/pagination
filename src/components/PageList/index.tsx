import { Posts } from "../../types";
import { useMemo } from "react";

type ListVieweProps = {
  posts: Posts | undefined;
};

function ListViewer({ posts }: ListVieweProps) {
  const postList = useMemo(() => {
    return posts?.map((post) => (
      <div key={post.id}>
        <p>{post.id}</p>
        <p>{post.title}</p>
      </div>
    ));
  }, [posts]);

  const loading = <div>loading...</div>;

  return <>{posts ? postList : loading}</>;
}

export default ListViewer;
