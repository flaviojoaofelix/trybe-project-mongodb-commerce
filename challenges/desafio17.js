// Retorne a quantidade total de produtos em uma nova coleção chamada
// resumoProdutos
const totalProdutosMc = db.produtos.countDocuments({});
db.resumoProdutos.insertOne({
  franquia: "McDonalds",
  totalProdutos: totalProdutosMc,
});
db.resumoProdutos.findOne(
  {},
  { _id: false, franquia: true, totalProdutos: true },
);
