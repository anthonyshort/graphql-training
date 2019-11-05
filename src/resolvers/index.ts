import { updateProfile, LoggedInUser, getLoggedInUser } from "./user";
import { getPost } from "./posts";

export default {
  LoggedInUser,
  Mutation: {
    updateProfile
  },
  Query: {
    getPost,
    getLoggedInUser
  }
};
