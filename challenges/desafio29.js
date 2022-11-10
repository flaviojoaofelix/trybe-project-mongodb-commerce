// Renomeie o campo descricao para descricaoSite em todos os documentos
db.produtos.updateMany(
  {},
  { $rename: { descricao: "descricaoSite" } },
);
db.produtos.find({}, { _id: false, nome: true, descricaoSite: true });
