// Código para executar o projeto

// Importando as funções do módulo Calculadora
import { soma, subtracao, multiplicacao, divisao } from './calculadora.js';

// Exemplos de uso
const num1 = 5;
const num2 = 5;

// Realizando cálculos
console.log(`Soma: ${num1} + ${num2} = ${soma(num1, num2)}`);
console.log(`Subtração: ${num1} - ${num2} = ${subtracao(num1, num2)}`);
console.log(`Multiplicação: ${num1} * ${num2} = ${multiplicacao(num1, num2)}`);
console.log(`Divisão: ${num1} / ${num2} = ${divisao(num1, num2)}`);

// Exemplo de tratamento de erro na divisão por zero
try {
    console.log(`Divisão por zero: ${divisao(num1, 0)}`);
} catch (error) {
    console.log(error.message); // Exibe a mensagem de erro
}