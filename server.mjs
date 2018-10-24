import express from 'express';
import Apollo from 'apollo-server-express';
import typeDefs from './graphql/types';
import resolvers from './graphql/resolvers';

const port = process.env.PORT || 5000;
const app = express();
const server = new Apollo.ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.use(express.static(`./user_app`));

app.get('/', (req, res) => {
  res.sendFile(`./user_app/index.html`);
});

app.listen(port, () => {
  console.log(`app start - OK on port ${port}`);
});
