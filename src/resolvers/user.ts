import { Context } from "../context";
import { IPost } from './posts'

export type ILoggedInUser = {
  id: string
}

export type UpdateProfile = {
  input: {
    firstName: string;
    lastName: string;
    picture: string;
    displayName: string;
  }
}

async function updateProfile(_: unknown, _args: UpdateProfile, ctx: Context): Promise<ILoggedInUser> {
  if (!ctx.loggedInUser) throw new Error("Not logged in");
  return {
    id: '1'
  };
}

async function getLoggedInUser(_: unknown, _args: unknown, ctx: Context): Promise<ILoggedInUser> {
  if (!ctx.loggedInUser) return null;
  return ctx.loggedInUser
}

const LoggedInUser = {
  posts: (_: unknown, _args: unknown, ctx: Context): IPost[] => {
    if (!ctx.loggedInUser) return null;
    return [
      {
        id: '1',
        title: "My blog post"
      }
    ];
  }
}

export {
  updateProfile,
  getLoggedInUser,
  LoggedInUser
}