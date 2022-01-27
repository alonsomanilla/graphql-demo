const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`type Query { hello: String }`);
const rootValue = { hello: () => 'Hello from Express GraphQL!!' };

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: {
      headerEditorEnabled: true,
    },
  })
);

app.listen(8080, '0.0.0.0');

console.log('Running Express GraphQL server at http://localhost:8080/graphql');
