// 2 - Ordene a coleção produtos pela quantidade de lanches vendidos em ordem crescente,
// mostrando apenas o nome e a quantidade de lanches vendidos
db.produtos
  .find(
    {},
    {
      _id: false,
      nome: true,
      vendidos: true,
    },
  )
  .sort({ vendidos: 1 });
