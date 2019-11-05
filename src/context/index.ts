import { ILoggedInUser } from "../resolvers/user";
import { NowRequest } from "@now/node";

export type Context = {
  loggedInUser?: ILoggedInUser;
};

async function createContext(_req: NowRequest): Promise<Context> {
  // Use the request to create "services" and state that will be
  // available to all of your resolvers
  return {
    loggedInUser: {
      id: "1",
      firstName: "Foo",
      lastName: "Bar"
    }
  };
}

export { createContext };
