// comentario de uma linha
/*
comentario em bloco
*/

// váriaveis
// var -> não usa no dia a dia
let nome = "Vicente";
const idade = 20;

// nome = 'teste'
// idade =2$; não é possivel reatribuir uma constante

//Operadores aritmeticos
const soma = 2 + 2
const substracao = 2 - 2
const multiplicacao = 2 * 2
const divisao = 2 / 2
const resto = 3 % 2

// Operadores de Comparação
const igual = 2 == 2
const diferente = 3 != 2
const maior = 3 > 2
const menor = 2 < 3
const maiorOuigual = 2 >= 2
const menorOuigual = 3<= 2

//Estruturas condições
if (idade >= 18) {
    console.log("Maior de Idade")
}

if (idade >= 18) {
    console.log("Maior de Idade")
} else {
    console.log("Menor de Idade")
}

//Operador Ternário

const mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade"
console.log ("Mensagem ->", mensagem)