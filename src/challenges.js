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

// const frase = "Go Trybe";

function splitSentence(frase) {
  return frase.split(' ');
}

// console.log(splitSentence('Go Trybe'));

// Desafio 3 - Crie a função concatName

// function concatName ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

// Desafio 4 - Crie a função footballPoints

// const wins = pontos * 3;
// const ties = pontos * 1;

function footballPoints(wins, ties) {
  let valorWins = wins * 3;
  return valorWins + ties;
}

//  console.log(footballPoints(0, 0));

// Desafio 5 - Crie a função highestCount

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz

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
