function asyncFunction(){
    setTimeout(()=> {
        console.log("Async Function");
    }, 3000);
}
console.log("Início do programa");
asyncFunction();
console.log("Fim do programa");