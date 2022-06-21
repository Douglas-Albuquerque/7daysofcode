let nome = prompt("Qual seu nome?");
let idade = prompt("Qual sua idade?");
let linguagem = prompt("Qual linguagem de programação você esta estudando?");
const msg = `Olá ${nome}, você tem ${idade} anos e já esta aprendendo ${linguagem}!`;

alert(msg);

const gosta = prompt(`Você gosta de estudar ${linguagem}? Resposta com o numero 1 - SIM ou 2 - NÃo`);
if(gosta == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso!");
}
if(gosta == 2){
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}
//${linguagem} >> lembrete isto é uma placeholder de uma template string que são os acentos agudos >> ``.