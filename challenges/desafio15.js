// Adicione o campo avaliacao em todos os documentos da coleção e efetue
//  alterações nesse campo
db.produtos.updateMany(
  {},
  { $set: { avaliacao: 0 } },
);
db.produtos.updateMany(
  { tags: { $in: ["bovino"] } },
  { $set: { avaliacao: 5 } },
);
db.produtos.updateMany(
  { tags: { $in: ["ave"] } },
  { $set: { avaliacao: 3 } },
);
db.produtos.find(
  {},
  { _id: false, nome: true, avaliacao: true },
); // Questao 15
