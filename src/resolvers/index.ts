import { updateProfile, getUserPosts, getLoggedInUser } from "./user";
import { getPost } from "./posts";

export default {
  LoggedInUser: {
    posts: getUserPosts
  },
  Mutation: {
    updateProfile
  },
  Query: {
    getPost,
    getLoggedInUser
  }
};
