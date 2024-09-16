/*
1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

function fiboSequency(value) {
  let seq = [0, 1];
  let nextNum = seq[0] + seq[1];

  while (nextNum <= value) {
    seq.push(nextNum)
    nextNum = seq[seq.length - 1] + seq[seq.length - 2]
  };

  return seq;
}

function isSequencyFibonacci(number) {
  const isSeq = fiboSequency(number);
  if (isSeq.includes(number)) {
    return `O número ${number} pertence a sequencia de Fibonacci`
  } else {
    return `O número ${number} não faz parte da sequencia de Fibonacci`
  };
};

const selectedNum = 10; // Poderá alterar aqui o número para teste do código :D
console.log(isSequencyFibonacci(selectedNum));

/*
2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
*/

function countA(text) {
  const everyTiny = text.toLowerCase();
  let counter = 0;

  for (let letter of everyTiny) {
    if (letter === 'a') {
      count++;
    };
  };

  if (count > 0) {
    return `A letra "a" aparece ${count} vez(ez) no texto.`;
  } else {
    return 'A letra "a" não foi enontrada não chegou a ser inserida no texto.';
  };
};

const typedText = "Aprender a programar é algo fascinante!"; // Poderá inserir aqui o texto para teste do código :D
console.log(countLetterA(typedText));

/*
3) Observe o trecho de código abaixo: 
int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?
*/

(() => {
  const ind = 12
  let soma = 0
  let K = 1

  while (K < ind) {
    K++
    soma = soma + K
  }
  console.log('Valor será de:', soma); // Resposta de 77, o trecho do enunciado não deixou claro se era pra mostrar código ou não, optei por deixar.
})();

/*
4) Descubra a lógica e complete o próximo elemento:
a) 1, 3, 5, 7, ___ 
b) 2, 4, 8, 16, 32, 64, ____ 
c) 0, 1, 4, 9, 16, 25, 36, ____  
d) 4, 16, 36, 64, ____  
e) 1, 1, 2, 3, 5, 8, ____  
f) 2,10, 12, 16, 17, 18, 19, ____  

R: 
a - 9
b - 128
c - 49
d - 100
e - 13 
f - 200

*/
/*
4) Descubra a lógica e complete o próximo elemento:
a) 1, 3, 5, 7, ___ 
b) 2, 4, 8, 16, 32, 64, ____ 
c) 0, 1, 4, 9, 16, 25, 36, ____  
d) 4, 16, 36, 64, ____  
e) 1, 1, 2, 3, 5, 8, ____  
f) 2,10, 12, 16, 17, 18, 19, ____  

R: 
a - 9
b - 128
c - 49
d - 100
e - 13 
f - 200

*/

/*
5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. 
Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. 
Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?  


R: Nesse caso podemos usar a temperatura como forma de auxiliar uma vez que temos apenas 2 idas as salas das lampadas e temos 3 salas

  Podemos ligar a primeira lampada e manter ligada por alguns minutos depois disso desligá-la e ligar o seundo interruptor, a partir dai podemos seguir com a visita as salas
  Caso nos deparemos com a lampada ligada, sabemos que é do interruptor 2, na segunda ida a outra sala notaremos a lampada apagada caso ela esteja fria, seria do terceiro interruptor e caso esteja quente seria do primeiro consequentimente.

*/