export type IPost = {
  id: string;
  title: string;
};

async function getPosts() {
  return [
    {
      id: "1",
      title: "Hello world"
    }
  ];
}

export { getPosts };
