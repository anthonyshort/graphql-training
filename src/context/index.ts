import { ILoggedInUser } from "../resolvers/user"

export type Context = {
  loggedInUser: ILoggedInUser
}

async function createContext(): Promise<Context> {
  return {
    loggedInUser: {
      id: '1'
    }
  }
}

export {
  createContext
}