// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = Number(prompt("Olá, vamos calcular a área so seu retângulo?\nInsira a altura do seu retângulo:"))
  let largura = Number(prompt("Agora insira a largura:")) 

  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoatual = Number(prompt("Olá, vamos calcular a sua idade?\nInsira o ano atual:"))
  let anodenascimento = Number(prompt("Agora insira o ano de seu nascimento:"))

  console.log(anoatual - anodenascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Olá, qual é o seu nome?")
  let idade = Number(prompt("Qual a sua idade?"))
  const email = prompt("Qual o seu e-mail?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Insira a sua primeira cor favorita:")
  const cor2 = prompt("Insira a sua segunda cor favorita:")
  const cor3 = prompt("Insira a sua terceira cor favorita:")
  const cores = [cor1,cor2,cor3]

  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let quantIngresso = (custo/valorIngresso)
  let arredondamento = Number(quantIngresso.toFixed(0))
  
  return arredondamento
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let tamanho1 = string1.length
  let tamanho2 = string2.length

  return tamanho1 == tamanho2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}