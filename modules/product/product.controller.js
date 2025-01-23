const bodyParser = require("body-parser");

const hello = [
  {
    id: 1,
    name: "Đá banh",
    pass: "123"
  },
  {
    id: 2,
    name: "Bóng rỗ",
    pass: "1233"
  },
  {
    id: 3,
    name: "Cầu lông",
    pass: "1123"
  },
  {
    id: 4,
    name: "Câu cá",
    pass: "223"
  },
];

exports.getAllproduct = (req, res) => {
  res.render("index1", { hello });
};

exports.getProductId = (req, res) => {
  const { id } = req.params;
  const he = hello.filter((x) => (x.id === parseInt(id)))
  res.render("product/detail", { hello:he });
};

exports.getProductS = (req, res) => {
  const a = req.query;
  res.json(a);
};

exports.CreateProduct = (req, res) => {
  res.render('product/cret')
};

exports.PostProduct = (req,res) => {
  try {
    console.log(req.body)
    const { body } = req;
    hello.push({
      id: Number(body.id),
      name: body.name,
      pass: body.pass
    })
    res.json(200)
  } catch (error) {
    res.json("error")
  }
};

exports.deleteproduct = (req,res) =>{
  try {
    const {id} = req.params; 
    const index = hello.findIndex(x => x.id == id)
    hello.splice(index,1)
    res.json(200)
  } catch (error) {
    res.json("error")
  }
}
