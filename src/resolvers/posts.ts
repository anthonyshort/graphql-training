type GetPostArguments = {
  id: string
}

export type IPost = {
  id: string
  title: string
}

async function getPost(_: any, args: GetPostArguments): Promise<IPost> {
  return {
    id: args.id,
    title: "Hello world"
  };
}

export {
  getPost
}