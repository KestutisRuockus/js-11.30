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

// ------------------------
//      ANTRAS VARIANTAS
// ------------------------
console.log(`\n`);
console.log(`\n`);
console.log(`------------------------`);
console.log(`ANTRAS VARIANTAS`);
console.log(`------------------------`);

let randomNumber = random(0, 99);
// let randomNumber = 56;   checked manually
let answer = 0;
let lastIndex = randomNumber.toString().slice(-1);

function category1(num) {
  let result = num * 3;
  return result;
}

function category2(num) {
  let result = (num - 4) ** 2;
  return result;
}

function category3(num) {
  let result = num + 10;
  return result;
}

function category4(num) {
  let result = 100 - num;
  return result;
}

function category5(num) {
  let result = num / 4;
  return result;
}

// Kategorija 1: 0 – 5. skaičius dauginamas iš 3

if (randomNumber >= 0 && randomNumber <= 5) {
  answer = category1(randomNumber);
  console.log(
    `Skaičius - ${randomNumber}, Kategorija 1, operacijos rezultatas: ${answer}`
  );
}
// Kategorija 2: 6 – 15. iš skaičiaus atsiima 4 ir rezultatas pakeliamas kvadratu
else if (randomNumber > 5 && randomNumber <= 15) {
  answer = category2(randomNumber);
  console.log(
    `Skaičius - ${randomNumber}, Kategorija 2, operacijos rezultatas: ${answer}`
  );
}
// Kategorija 3: 16 - 30 ir dalijasi iš 5. Prie skaičiaus pridedame 10
else if (randomNumber >= 16 && randomNumber < 31 && randomNumber % 5 === 0) {
  answer = category3(randomNumber);
  console.log(
    `Skaičius - ${randomNumber}, Kategorija 3, operacijos rezultatas: ${answer}`
  );
}
// Kategorija 4: 31 - 45 ir skaičius nelyginis. Skaičių atimame iš 100
else if (randomNumber > 30 && randomNumber <= 45 && randomNumber % 2 !== 0) {
  answer = category4(randomNumber);
  console.log(
    `Skaičius - ${randomNumber}, Kategorija 4, operacijos rezultatas: ${answer}`
  );
}
// Kategorija 5: 46 – 99 ir skaičiai pasibaigiantys 6 arba 7. Skaičių daliname iš 4
else if (
  (randomNumber > 45 && randomNumber.toString().slice(-1) === "6") ||
  (randomNumber > 45 && randomNumber.toString().slice(-1) === "7")
) {
  answer = category5(randomNumber);
  console.log(
    `Skaičius - ${randomNumber}, Kategorija 5, operacijos rezultatas: ${answer}`
  );
} else {
  console.log(
    `Skaičius - ${randomNumber} skaičius netinkamas nei vienai kategorijai.`
  );
}
