// Retorne o nome e vendidos dos lanches que tenham sido vendidos com uma quantidade
// diferente de 50 e em que o campo tags não exista
db.produtos.find(
  { $and: [{ vendidos: { $ne: 50 } }, { tags: null }] },
  { _id: false, nome: true, vendidos: true }
);
