const produto = null;

// if (produto) {
//     console.log("diferente de undefined, null ou vazio");
// }else{
//     console.log("produto é undefined");
// }

//console.log(produto?.descricao ?? "Descrição inexistente");

const produto2 = {
  descricao: "Celular",
  valor: 2000,
};

//produto2.descricao = "TV 42";

//console.log(produto2?.descricao ?? "Descrição inexistente");

const idade = undefined;

//Null Coalescing Operator
console.log(`Sua idade é: ${idade || "Não Informada"}`);
