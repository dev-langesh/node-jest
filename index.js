const express = require("express");
const { getProducts } = require("./controllers/getProducts");
const { postProduct } = require("./controllers/postProduct");
const app = express();

app.use(express.json());

app.get("/", getProducts);
app.post("/", postProduct);

const server = app.listen(8000);

module.exports = { app, server };
