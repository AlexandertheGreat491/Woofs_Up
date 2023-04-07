const express = required("express");
const {ApolloServer} = require("apollo-server-express");
const path = require("path");
// make sure lines 5-7 match file paths
const {typeDefs, resolvers} = require("./schemas");
const {authMiddleware} = require("./utils/auth");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});

app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Serve up static assets
app.use("/images", express.static(path.join(__dirname, "../client/images")));

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));

}
app.get("/")