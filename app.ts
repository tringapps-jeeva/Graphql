import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
const app: express.Application = express();
import {typeDefs} from "./graphql/schema"
import {resolvers} from "./graphql/resolover" 


let server:any = null;
async function Serverstart() {
    server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app });

}
Serverstart();


app.listen(5000, () => {
    console.log("server is running");
})