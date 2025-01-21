const hello = [
  {
    id: 1,
    name: "Đá banh",
  },
  {
    id: 2,
    name: "Bóng rỗ",
  },
  {
    id: 3,
    name: "Cầu lông",
  },
  {
    id: 4,
    name: "Câu cá",
  },
];

exports.getAllproduct = (req, res) => {
  res.render("index1", { hello });
};

exports.getProductId = (req, res) => {
  const { id: id } = req.params;
  const he = hello.filter((x) => (x.id === parseInt(id)))
  res.render("index1", { hello:he });
};

exports.getProductS = (req, res) => {
  const a = req.query;
  res.json(a);
};

exports.CreateProduct = (req, res) => {
  res.json(req.body);
  res.json("Create");
};
