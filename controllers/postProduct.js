function postProduct(req, res) {
  const data = ["mac", "iphone", req.body.item];
  console.log(data);
  return res.json(data);
}

module.exports = { postProduct };
