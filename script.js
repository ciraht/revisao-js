//1
function um() {
    var nome = 'Tharic'
    console.log(nome)
}
//2
function dois() {
    let a = 1
    let b = 2
    console.log(a+b)
}
//3
function tres() {
    let idade = parseInt(prompt('Inserir idade: '))
    if (idade >= 18){
        console.log('Você é maior de idade')
    }
}
//4
function quatro() {
    let num = 2
    console.log(num*num)
}
//5
function cinco() {
    let celsius = parseFloat(prompt('Inserir valor em celsius: '))
    console.log(celsius*1.8+32)
}
//6
function seis() {
    let num = parseInt(prompt('Inserir número inteiro para verificar se é par ou ímpar: '))
    if (num % 2 == 0){
        console.log('O número '+num+' é par.')
    } else {
        console.log('O número '+num+' é ímpar.')
    }
}
//7
function sete(num) {
    function num_abs(num) {
        return Math.abs(num)
    }
    return num_abs(num)
}
//8
function oito() {
    let num = parseFloat(prompt('Insira um número: '))
    if (num > 0){
        console.log('Número positivo digitado')
    } else if (num < 0){
        console.log('Número negativo digitado')
    } else {
        console.log('Número zero digitado')
    }
}
//9
function nove() {
    var nome = prompt('Insira seu nome: ')
    if (nome === null || nome.trim() == ''){
        console.log('Inserir nome')
    } else {
        console.log('Olá, '+nome)
    }
}
//10
function dez() {
    let num1 = parseFloat(prompt('Inserir número 1: '))
    let num2 = parseFloat(prompt('Inserir número 2: '))
    let num3 = parseFloat(prompt('Inserir número 3: '))
    console.log('Média = '+((num1 + num2 + num3)/3))
}
//11
function onze() {
    let ano = parseInt(prompt('Insira ano para verificar se é bissexto: '))
    if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
        console.log('O ano inserido é bissexto')
    } else{
        console.log('O ano não é bissexto')
    }
}
//12
function doze() {
    let idade = parseInt(prompt('Inserir idade: '))
    if (idade > 0 && idade <= 12){
        console.log('Criança')
    } else if (idade > 12 && idade <= 17){
        console.log('Adolescente')
    } else if (idade > 17 && idade <= 59){
        console.log('Adulto')
    } else{
        console.log('Idoso')
    }
}
//13
function treze() {
    let letra = prompt('Inserir letra: ')
    if (letra.length === 1) {
        letra = letra.toLowerCase()
        if ('aeiou'.includes(letra)) {
            console.log('A letra é uma vogal.')
        } else if (letra >= 'a' && letra <= 'z') {
            console.log('A letra é uma consoante.')
        } else {
            console.log('Por favor, insira uma letra válida.')
        }
    } else {
        console.log('Por favor, insira apenas um caractere.')
    }
}
//14
function quatorze() {
        function maior(um, dois, tres) {
            return Math.max(um, dois, tres)
        }
        let num1 = parseFloat(prompt('Digite o primeiro número:'))
        let num2 = parseFloat(prompt('Digite o segundo número:'))
        let num3 = parseFloat(prompt('Digite o terceiro número:'))
        const resultado = maior(num1, num2, num3)
        console.log('O maior número é:', resultado)
    }
//15
function quinze() {
    let str = prompt('Escreva algo: ')
    str = str.toLowerCase()
    if (str.includes('javascript')) {
        console.log('Contém JavScript')
    }else{
        console.log('Não contém JavaScript')
    }
}
//16
function dezesseis() {
    let nota = parseFloat(prompt('Insira a nota: '))
    if (nota >= 0 && nota <3){
        console.log('E')
    } else if (nota >= 3 && nota <5){
        console.log('D')
    } else if (nota >= 5 && nota <7){
        console.log('C')
    } else if (nota >= 7 && nota <9){
        console.log('B')
    } else if (nota >= 9 && nota <=10){
        console.log('A')
    } else{
        console.log('Nota inválida inserida')
    }
}
//17
function dezessete() {
    let num = parseInt(prompt('Insira um número inteiro: '))
    let porTres = ' não é divisível por 3'
    let porCinco = ' não é divisível por 5'
    if (num % 3 == 0){
        porTres = ' é divisível por 3'
    } 
    if (num % 5 == 0){
        porCinco = ' é divisível por 5'
    }
    console.log('O número '+num+porTres+' e'+porCinco)
}
//18
function dezoito() {
    function menor(um, dois, tres) {
        return Math.min(um, dois, tres)
    }
    let num1 = parseFloat(prompt('Digite o primeiro número:'))
    let num2 = parseFloat(prompt('Digite o segundo número:'))
    let num3 = parseFloat(prompt('Digite o terceiro número:'))
    const resultado = menor(num1, num2, num3)
    console.log('O menor número é:', resultado)
}
//19
function dezenove() {
    let senha = prompt('Insira uma senha: ')
    if (senha.length >= 8) {
        console.log('A senha tem pelo menos 8 dígitos')
    } else{
        console.log('A senha não tem pelo menos 8 dígitos')
    }
}
//20
function vinte() {
    let num = parseFloat(prompt('Insira um número: '))
    if (num >= 10 && num <= 20){
        console.log('O número está entre 10 e 20')
    } else{
        console.log('O número não está entre 10 e 20')
    }
}
//21
function vinteEUm() {
    let num = 1
    while (num != 11){
        console.log(num)
        num += 1
    }
}
//22
function vinteEDois() {
    let num = 1
    while (num != 11){
        console.log(num*5)
        num += 1
    }
}
//23
function vinteETres() {
    let num = 1
    let sum = 0
    while (num != 101){
        sum += num
        num += 1
    }
    console.log(sum)
}
//24
function vinteEQuatro() {
    let count = 1
    while (count != 51) {
        if (count % 2 == 0){
            console.log(count)
        }
        count += 1
    }
}
//25
function vinteECinco() {
    var num1 = 1
    var num2 = 1
    var resto = num1 + num2
    var count = 0
    let tamanho = parseInt(prompt('Insira a quantidade de termos que deseja ver na sequência de Fibonacci: '))
    if (tamanho <= 0){
        console.log('Favor inserir número válido')
    } else if (tamanho == 1){
        console.log(num1)
    } else if (tamanho == 2){
        console.log(num1)
        console.log(num2)
    } else {
        console.log(num1)
        console.log(num2)
        while (count != tamanho) {
            num1 = resto
            resto = num1 + num2
            console.log(resto)
            num2 = num1
            count += 1
        }
    }
}
//26
function vinteESeis() {
    let palavra = prompt('Escreva uma palavra: ')
    let letras = palavra.split('')
    letras.reverse()
    let resultado = letras.join('')
    console.log(resultado)
}
//27
function vinteESete() {
    let array = [1,2,3,4,5,6,7,8,9,10]
    for (i in array){
        if (array[i] % 2 == 0){
            console.log(array[i])
        }
    }
}
//28
function vinteEOito() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var maior = array[0]
    for (i in array){
        if (array[i] > maior){
            maior = array[i]
        }
    }
    console.log(maior)
}
//29
function vinteENove() {
    let num = parseInt(prompt('Insira número: '))
    var consta = 0
    if (num <= 1){
        console.log('Não é primo')
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0){
                console.log('Não é primo')
                consta = 1
                break
            }
        }
        if (consta != 1){
            console.log('É primo')
        }
    }
}
//30
function trinta() {
    let count = 0
    while (count != 10){
        console.log('JavaScript')
        count += 1
    } 
}
//31
function trintaEUm() {
    let array = [1, 2, 3, 4, 5]
    var sum = 0
    for (i in array){
        sum += array[i]
    }
    console.log(sum)
}
//32
function trintaEDois() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var verificar = 0
    for (i in array){
        if (array[i] == 1){
            console.log('Tem 1 no array')
            verificar = 1
            break
        }
    }
    if (verificar == 0){
        console.log('Não tem 1 no array')
    }
}
//33
function trintaETres() {
    let array = [1, 2, 3, 4, 5]
    array.reverse()
    console.log(array)
}
//34
function trintaEQuatro() {
    let array = [1, 2, 3, 4, 4, 4, 5, 1]
    let e_array = []
    for (i in array){
        if (!e_array.includes(array[i])){
            e_array.push(array[i])
        }
    }
    console.log(e_array)
}
//35
function trintaECinco() {
    let array1 = [1, 2, 3, 4, 5]
    let array2 = [6, 7, 8, 9, 10]
    let array3 = []
    for (i in array1){
        array3.push(array1[i])
    }
    for (i in array2){
        array3.push(array2[i])
    }
    console.log(array3)
}
//36
function trintaESeis() {
    let indice = 0
    let array = [32, 432, 542, 1, 2, 634, 65, 13]
    var num = parseInt(prompt('Insira um número pra ver se tá no array: '))
    if (!array.includes(num)){
        console.log('Não tem esse número no array não')
    } else{
        for (i in array){
            if(array[i] == num){
                indice = i
            }
        }
        console.log('O índice desse número é '+indice)
    }
}
//37
function trintaESete() {
    let array = [1, 2, 3, 4, 423, 23, 5, 6, 7, 8]
    maior = 0
    s_maior = 0
    for (i in array){
        if (array[i] > maior){
            s_maior = maior
            maior = array[i]
        }else if (array[i] > s_maior && array[i] !== maior) {
            s_maior = array[i]
        }
    }
    console.log(s_maior)
}
//38
function trintaEOito() {
    
}