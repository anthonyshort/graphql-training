import { graphql } from "graphql";
import { NowRequest, NowResponse } from "@now/node";
import createCors from "micro-cors";
import schema from "./schema";
import { Context } from "./context";

const cors = createCors({ allowHeaders: ["*"] });

async function handler(req: NowRequest, res: NowResponse) {
  const body = req.body || {};
  const { query, variables, operationName } = body;

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

export default cors(handler);
