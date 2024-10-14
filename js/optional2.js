const pessoa = {
  nome: "Ana",
  sobrenome: "Silva",
  idade: 23,
  endereco: {
    rua: "Rua Henrique Noel",
    numero: 108,
    bairro: "Bingen",
  },
  //   exibirPessoa() {
  //     return "Ok";
  //   },
};

console.log(pessoa.exibirPessoa?.() ?? "Função inexistente");
console.log("nome" in pessoa);
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));
