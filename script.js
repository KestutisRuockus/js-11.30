function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function categoryOneCalculation(skaicius) {
  let result = skaicius ** 2;
  return result;
}

function categoryTwoCalculation(skaicius) {
  let result = sk;
  return result;
}

function categoryThreeCalculation(skaicius) {
  let desimtys = +skaicius.toString()[0];
  let result = skaicius - desimtys;
  return result;
}

function categoryFourCalculation(skaicius) {
  let vienetai = skaicius % 10;
  let result = (skaicius + vienetai) / 2;
  return result;
}

function categoryFiveCalculation(skaicius) {
  return (result =
    String.fromCharCode(random(97, 122)) +
    String.fromCharCode(random(97, 122)) +
    String.fromCharCode(random(97, 122)) +
    String.fromCharCode(random(97, 122)));
}

let sk = random(0, 99);
let res = 0;
// Kategorija 1: 0 <= skaičius <= 10 - pakelti skaičių kvadratu ir atspausdinti
console.log(sk);
if (sk <= 10) {
  res = categoryOneCalculation(sk);
  console.log(`Skaičius - ${sk}, Kategorija 1, operacijos rezultatas: ${res}`);
}
// Kategorija 2: 10 < skaičius < 20 - atspausdinti ska;ičių tokį koks jis yra;
else if (sk > 10 && sk < 20) {
  res = categoryTwoCalculation(sk);
  console.log(`Skaičius - ${sk}, Kategorija 2, operacijos rezultatas: ${res}`);
}
// Kategorija 3: 20 <= skaičius < 50  ir Skaičius yra lyginis: Skaičiaus dešimtis atimti iš paties skaičiaus ir atspausdinti
else if (sk >= 20 && sk < 50 && sk % 2 === 0) {
  res = categoryThreeCalculation(sk);
  console.log(`Skaičius - ${sk}, Kategorija 3, operacijos rezultatas: ${res}`);
}
// Kategorija 4: 20 <= skaičius < 50  ir skaičius yra nelyginis: Skaičiaus vienetus pridėti prie paties skaičiaus ir padalinti iš 2. Galiausiai atspausdinti;
else if (sk >= 20 && sk < 50 && sk % 2 !== 0) {
  res = categoryFourCalculation(sk);
  console.log(`Skaičius - ${sk}, Kategorija 4, operacijos rezultatas: ${res}`);
}
// Kategorija 5: 50 <= skaičius ir skaičius dalinasi iš 3 be liekanos: Sudarykite atsitiktinį stringą iš 4 raidžių ir jį atspausdinkite
else if (sk >= 50 && sk % 3 === 0) {
  res = categoryFiveCalculation(sk);

  console.log(`Skaičius - ${sk}, Kategorija 5, operacijos rezultatas: ${res}`);
} else {
  res = "Skaičius netinkamas nei vienai kategorijai";
  console.log(`Skaičius - ${sk}, Kategorija 5, operacijos rezultatas: ${res}`);
}
