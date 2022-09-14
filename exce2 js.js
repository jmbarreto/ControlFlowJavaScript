/*
Faça um programa que entre com três números e 
coloque em ordem crescente. */
const prompt = require ('prompt-sync')()

const n1Text = prompt ('coloque um número')
const n2Text = prompt ('coloque um número')
const n3Text = prompt ('coloque um número')
n1 = Number(n1Text)
n2 = Number(n2Text)
n3 = Number(n3Text)

if (n1 < n2 && n2 < n3){
    console.log(`Ordem crescente é a  ${n1}, ${n2}, ${n3}.`);
}else if (n3 < n2 && n2 < n1){
    console.log(`Ordem crescente é a  ${n3}, ${n2}. ${n1}.`);
}else if (n2 < n1 && n1 < n3){
    console.log(`Ordem crescente é a  ${n2}, ${n1}, ${n3}.`);
}else if (n1 < n3 && n3 < n2){
    console.log (`Ordem Crescente é a  ${n1}, ${n3}, ${n2}.`);
}else {
    console.log(`Ordem crescente é a ${n3}, ${n1}, ${n2}.`)
}