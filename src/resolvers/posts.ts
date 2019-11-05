type GetPostArguments = {
  id: string;
};

export type IPost = {
  id: string;
  title: string;
};

async function getPost(_: any, args: GetPostArguments): Promise<IPost | null> {
  if (args.id === "1") {
    return {
      id: "1",
      title: "Hello world"
    };
  }
  return null;
}

export { getPost };
