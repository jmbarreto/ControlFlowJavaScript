/*
Faça um programa que receba três inteiros e diga qual deles é o maior.
*/
const prompt = require ('prompt-sync')()

const numero1Texto = prompt('digite aqui o primeiro número: ')
const numero2Texto = prompt ('digite aqui o segundo numero')
const numero3Texto = prompt ('digite aqui o terceiro numero')
n1 = Number (numero1Texto)
n2 = Number (numero2Texto)
n3 = Number (numero3Texto)

    if ( n1 > n2 && n1 > n3 ){
        console.log (`O maior número é o ${n1}`)
    }
    else if (n2 > n3 && n2 > n1){
        console.log (`O maior número é o ${n2}`)
    }
    else{
        console.log (`O maior número é o ${n3}`)
    }
