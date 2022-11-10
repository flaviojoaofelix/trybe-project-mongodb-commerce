// Insira os valores combo e tasty no array tags de todos os sanduíches e
// aproveite para deixar os valores em ordem alfabética ascendente (A a Z)
db.produtos.updateMany(
  {},
  { $push:
    {
      tags:
        {
          $each: ["combo", "tasty"],
          $sort: 1,
        },
    },
  },
);
db.produtos.find({}, { _id: false, nome: true, tags: true });
