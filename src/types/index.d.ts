export type Post = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type Posts = Post[] | [];

export type ApiResponse = {
  totalCount: number;
  posts: Posts;
};
