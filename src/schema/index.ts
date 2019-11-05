import path from 'path'
import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
import resolvers from '../resolvers'
import { Context } from '../context'

const typeDefs = importSchema(path.resolve(__dirname, './schema.graphql'))

const schema = makeExecutableSchema<Context>({
  typeDefs,
  resolvers
})

export default schema
