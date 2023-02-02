// Desafio 1 - Crie a função compareTrue

// const frio = false;
// const calor = true;

function compareTrue(parametro1, parametro2) {
  if (parametro1 === true && parametro2 === true) {
    return true;
  }
  return false;
}

// console.log(compareTrue(frio, calor));

// Desafio 2 - Crie a função splitSentence

function splitSentence(frase) {
  return frase.split(' ');
}

// console.log(splitSentence('Go Trybe'));

// Desafio 3 - Crie a função concatName

function concatName(nomes){
  let primeiroNome = nomes[0];
  let ultimoNome = nomes[nomes.length - 1]; 
  
  return ultimoNome + ", " + primeiroNome;
}

// console.log(concatName(["Lucas", "Cassiano", "Ferraz", "Paolillo"]));

// Desafio 4 - Crie a função footballPoints

function footballPoints(wins, ties) {
  let valorWins = wins * 3;
  return valorWins + ties;
}

//  console.log(footballPoints(0, 0));

// Desafio 5 - Crie a função highestCount

function highestCount(numeros) {
  let maiorNum = numeros[0];
  let qtdeMaiorNum = 0;
  for (let index in numeros) {
    if (numeros[index] > maiorNum) {
      maiorNum = numeros[index];
    }
  }
  for (let index in numeros) {
    if (numeros[index] === maiorNum) {
      qtdeMaiorNum = qtdeMaiorNum + 1;
    }
  }
  return qtdeMaiorNum;
}
  
// console.log(highestCount([3, 3, 2, 1]));

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

function calcTriangleArea(base, height) {
  let triangulo = (base * height) / 2;
  return triangulo;
}

function calcRectangleArea(base, height) {
  let retangulo = base * height;
  return retangulo;
}

function calcAllAreas(base, height, form) {
  let triangulo = (base * height) / 2;
  let retangulo = base * height;
  if (form === "triângulo") {
    return "O valor da área do triângulo é de: " + triangulo;
  } else if (form === "retângulo") {
    return "O valor da área do retângulo é de: " + retangulo;
  } else {
    return "Não foi possível fazer o cálculo, insira uma forma geométrica válida";
  }
}

console.log(calcAllAreas(10, 50, "triângulo"));

// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzzca

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => { }),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => { }),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => { }),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => { }),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => { }),
  concatName: typeof concatName === 'function' ? concatName : (() => { }),
  decode: typeof decode === 'function' ? decode : (() => { }),
  encode: typeof encode === 'function' ? encode : (() => { }),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => { }),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => { }),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => { }),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => { }),
  techList: typeof techList === 'function' ? techList : (() => { }),
};
