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
  let numeroElementos = array.length
  let ultimoElemento = Number(numeroElementos - 1)

  return array[ultimoElemento]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let primeiro = array.pop()
  let ultimo = array.shift()
  array.push(ultimo)
  array.unshift(primeiro)

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let texto1 = string1.toUpperCase()
  let texto2 = string2.toUpperCase()

  return texto1 == texto2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = Number(prompt("Vamos verificar se seu RG precisa ser renovado?\nInsira o ano atual:"))
  let anoNascimento = Number(prompt("Agora insira o ano do seu nascimento:"))
  let anoEmissao = Number(prompt("E por fim, o ano de emissão de sua carteira de identidade:"))
  let idade = Number(anoAtual - anoNascimento)
  let vencimento = Number(anoAtual - anoEmissao)

  const menoresde21 = String(idade <= 20)
  const entre21e51 = String((idade <= 50) && (idade > 20))
  const maioresde50 = String(idade > 50)

  const renova1 = String((menoresde21 == "true") && (vencimento >= 5))
  const renova2 = String((entre21e51 == "true") && (vencimento >= 10))
  const renova3 = String((maioresde50 == "true") && (vencimento >= 15))

  const resposta = ((renova1 == "true") || (renova2 == "true") || (renova3 == "true"))

  console.log(resposta)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const multiplo400 = String((ano%400) == 0)
  const multiplo4 = String((ano%4) == 0)
  const multiplo100 = String((ano%100) == 0)

  const testedo100 = String((multiplo100 == "true") && (multiplo400 == "false"))
  const testedo4 = String((multiplo4 == "true") && (testedo100 == "false"))

  const resposta = (multiplo400 == "true") || (testedo4 == "true")

  return resposta
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}