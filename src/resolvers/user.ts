import { Context } from "../context";
import { IPost } from "./posts";

export type ILoggedInUser = {
  id: string;
  firstName: string;
  lastName: string;
};

export type UpdateProfile = {
  input: {
    firstName: string;
    lastName: string;
  };
};

async function updateProfile(
  _: unknown,
  args: UpdateProfile,
  ctx: Context
): Promise<ILoggedInUser> {
  if (!ctx.loggedInUser) throw new Error("Not logged in");
  // Update the database & return updated user
  return {
    ...ctx.loggedInUser,
    ...args.input
  };
}

async function getLoggedInUser(
  _: unknown,
  _args: unknown,
  ctx: Context
): Promise<ILoggedInUser> {
  // if (!ctx.loggedInUser) return null;
  return ctx.loggedInUser;
}

async function getUserPosts(): Promise<IPost[]> {
  // if (!ctx.loggedInUser) return null;
  return [
    {
      id: "1",
      title: "My blog post"
    }
  ];
}

export { updateProfile, getLoggedInUser, getUserPosts };
