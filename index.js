const express = require("express");
const { getProducts } = require("./controllers/getProducts");
const { postProduct } = require("./controllers/postProduct");
const app = express();

module.exports = { app };

app.use(express.json());

app.get("/", getProducts);
app.post("/", postProduct);

app.listen(8000);
