const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./Graphql/TypeDef');
const { resolvers } = require('./Graphql/index');
const { con } = require('./db_connection/index');


require('dotenv').config()

const startServer = async () => {


  
  
  const corsOptions = {
    origin:'*',
    credentials: 'include',
    introspection: true
  };
 
  const server = new ApolloServer({
     typeDefs, 
     resolvers,

    context: async ({ req, res }) => { 
      return { req , res };
    },
    introspection: true,
    cors: corsOptions
  });
  const port = process.env.PORT || 4000;
  server.listen(port).then(({ url }) => {
    console.log(`server running on port ${url}`);
  });
};
// call the root Function
startServer();
