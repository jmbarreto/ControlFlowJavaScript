/*
Faça um programa em que permita a entrada de um número qualquer
 e exiba se este número é par ou ímpar. Se for par exiba também a raiz quadrada do mesmo;
  se for ímpar exiba o número elevado ao quadrado.
*/
const prompt = require('prompt-sync')();

const numeroTexto = prompt('Digite um número : ')
const numero =  Number(numeroTexto)

if (numero % 2 != 0) {
    console.log(`O numero inserido: ${numero} é impar e a raiz quadrada é de: ${Math.pow(numero, 2)}`)
} else {
    console.log(`O numero: ${numero} é par e a raiz quadrada é: ${Math.sqrt(numero)}`)
}
