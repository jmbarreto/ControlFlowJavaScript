/*
Faça um programa que receba a idade de uma pessoa e mostre na saída em qual categoria ela se encontra:
10-14 infantil
15-17 juvenil
18-25 adulto
*/
const prompt = require ('prompt-sync')();
const idadeText = prompt ('Put your age: ');
const idade = Number(idadeText);

if (idade <= 14) {
    console.log ('Está no grupo Infantil');
}
else if (idade < 15 && idade >= 17){
    console.log ('Está no grupo juvenil');
}
else if  (idade => 18 && idade <= 25){
    console.log('Você está na categoria adulto');
}
 else {
    console.log('Você está fora dos grupos');
 }