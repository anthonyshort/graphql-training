import { graphql } from "graphql";
import { NowRequest, NowResponse } from "@now/node";
import schema from "./schema";
import { Context } from "./context";

async function handler(req: NowRequest, res: NowResponse) {
  const { query, variables, operationName } = req.body;

  const context: Context = {
    loggedInUser: {
      id: "1",
      firstName: "Foo",
      lastName: "Bar"
    }
  };

  try {
    const result = await graphql(
      schema,
      query,
      null,
      context,
      variables,
      operationName
    );
    res.status(200).send(result);
  } catch (e) {
    res.status(500).send({ error: true });
  }
}

export default handler;
