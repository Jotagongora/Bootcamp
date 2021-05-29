//Configuramos la varible entorno "PORT"
//para que se coja una ya existente o le asigne 3000 si no existe

process.env.PORT = process.env.PORT || 3000;

process.env.SEED = process.env.SEED || "SUPER SECRET KEY";

// require("crypto").randomBytes(64).toString("hex");
// '118e73751e262b6cff1684ec95a36d5587115443c742c96c5ad4af252f77f0464dea4587cefb7a588cf5112c48913bccd09b217c9b21bab9614cbf1612f7ef7f'