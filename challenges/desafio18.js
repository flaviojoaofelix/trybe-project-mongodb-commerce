// Inclua bacon no final da lista de ingredientes dos sanduíches Big Mac e
// Quarteirão com Queijo
db.produtos.updateMany(
  {
    nome: {
      $in: ["Big Mac", "Quarteirão com Queijo"],
    },
  },
  {
    $push: { ingredientes: "bacon" },
  },
);
db.produtos.find(
  {},
  {
    _id: false,
    nome: true,
    ingredientes: true,
  },
);
