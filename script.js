let nome = [""];
let nivel = [""];
let classificacao = "";

if (nivel < 1000){
    classificacao = "ferro"
}else if (nivel >= 1001 && nivel <= 2000){
    classificacao = "bronze"
}else if (nivel >=2001 && nivel <= 5000){
    classificacao = "prata"
}else if (nivel >= 5001 && nivel <= 7000){
    classificacao = "ouro"
}else if (nivel >=7001 && nivel <= 8000){
    classificacao = "platina"
}else if (nivel >= 8001 && nivel <= 9000){
    classificacao = "ascendente"
}else if (nivel >= 9001 && nivel <= 10000){
    classificacao="imortal"
}else if (nivel >= 10001){
    classificacao="radiante"
}

console.log(`O Herói de nome ${nome} está no nível ${nivel}e na classificação ${classificacao}`);


//O VS Code sugeriu usar template literals (também chamados de template strings) com crase (`) em vez de usar concatenação com +. 
// Essa é uma boa prática moderna em JavaScript porque deixa o código mais limpo, legível e menos propenso a erros.

