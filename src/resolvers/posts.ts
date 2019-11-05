export type IPost = {
  id: string;
  title: string;
};

type GetPostArgs = {
  id: string;
};

const POSTS = [
  {
    id: "1",
    title: "Hello world"
  },
  {
    id: "2",
    title: "John Wick"
  }
];

async function getPosts() {
  return POSTS;
}

async function getPost(_: unknown, args: GetPostArgs) {
  return POSTS.find(post => post.id === args.id);
}

export { getPosts, getPost };
