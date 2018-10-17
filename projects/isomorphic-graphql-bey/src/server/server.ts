import Koa from "koa";
import { ApolloServer, gql } from "apollo-server-koa";

const app = new Koa();

const typeDefs = gql`
  type Query {
      hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => `Hello world!`,
  }
}

const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app });

app.use((ctx) => {
  ctx.body = "yayy";
  ctx.type = "text/plain";
  ctx.status = 200;
});

const port: string = process.env.KOA_APP_PORT || "3000";

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
  console.log(`GraphQL Listening on http://localhost:${port}${apolloServer.graphqlPath}`);
});
