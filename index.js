const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const productRouter = require("./modules/product/product.router.js")


app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("Public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',productRouter)

app.listen(port, () => {
  console.log("chao");
});
