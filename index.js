const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');

async function startServer() {
  const app = express();
  app.use(cors());

  app.use('/docs', express.json(), swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`🚀 GraphQL running at http://localhost:${PORT}/graphql`);
    console.log(`📄 Swagger running at http://localhost:${PORT}/docs`);
  });
}
 
startServer();
