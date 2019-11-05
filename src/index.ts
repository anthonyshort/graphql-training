import { graphql } from "graphql";
import { NowRequest, NowResponse } from "@now/node";
import createCors from "micro-cors";
import schema from "./schema";

const cors = createCors({ allowHeaders: ["*"] });

async function handler(req: NowRequest, res: NowResponse) {
  const body = req.body || {};
  const { query, variables, operationName } = body;

  try {
    const result = await graphql(
      schema,
      query,
      null,
      null,
      variables,
      operationName
    );
    res.status(200).send(result);
  } catch (e) {
    res.status(500).send({ error: true });
  }
}

export default cors(handler);
