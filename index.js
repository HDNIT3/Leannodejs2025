const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const hello = [
  {
    id: 1,
    name: "Đá banh",
  },
  {
    id: 3,
    name: "Bóng rỗ",
  },
  {
    id: 2,
    name: "Cầu lông",
  },
  {
    id: 2,
    name: "Câu cá",
  },
];

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("Public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index1", { hello });
});

app.get("/:id", (req, res) => {
  const { id: id } = req.params;
  res.json(`This is ${id}`);
});

app.get("/d/IO", (req, res) => {
  const a = req.query;
  res.json(a);
});

app.post("/create", (req, res) => {
  res.json(req.body);
  res.json("Create");
});

app.listen(port, () => {
  console.log("chao");
});
