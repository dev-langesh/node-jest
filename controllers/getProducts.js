function getProducts(req, res) {
  return res.json(["iphone", "mac"]);
}

module.exports = { getProducts };
