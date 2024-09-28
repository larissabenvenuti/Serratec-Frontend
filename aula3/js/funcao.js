//funcao declarativa
function mensagem() {
    console.log("Aula de JS");
}
//Função anônima
let texto = function () {
    console.log("Aula de JS");
    return "Oi";
};

console.log(texto());

//mensagem();

function soma(num1, num2) {
    return num1 + num2;
}

console.log(`Resultado:${soma(10, 20)} texto`);
//console.log("Resultado:" + soma(10,20) + "texto");
