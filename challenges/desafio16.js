// Adicione o campo ultimaModificacao com a data corrente somente
// no sanduíche Big Mac
db.produtos.update(
  { nome: "Big Mac" },
  { $set: { ultimaModificacao: new ISODate() } },
);
db.produtos.find(
  { ultimaModificacao: { $exists: true } },
  { _id: false, nome: true },
);
