//  HTML elemento priskyrimas kintamajam

// function pakeistiElementoTeksta() {
//   let paragrafas = document.querySelector(".isskirtinis-paragrafas");
//   let vardas = document.querySelector("#vardas");

//   // elementas.value - paimama informacija is 'input'
//   let dataFromInput = vardas.value;

//   paragrafas.innerText = `Labas, ${dataFromInput}`;
// }

//  Prisijungimas

// data
let loginName = "Petras";
let password = "123321";

function login() {
  // HTML elemento priskyrimas kintamajam
  let prisijungimoVardoIvestis = document.querySelector("#prisijungimoVardas");
  let prisijungimoSlaptazodzioIvestis = document.querySelector(
    "#prisijungimoSlaptazodis"
  );

  // Reiksmes istraukimas is input elementu
  let = prisijungimoVardas = prisijungimoVardoIvestis.value;
  let = prisijungimoSlaptazodis = prisijungimoSlaptazodzioIvestis.value;

  // Patrikrinti ar ivesti duomenys yra teisingi
  if (
    loginName === prisijungimoVardas &&
    password === prisijungimoSlaptazodis
  ) {
    console.log(`Prisijungete sekmingai`);
  } else {
    console.log(`Prisijungimo duomenys yra netinkami`);
  }
}

let text = "Kazis9";

if (/[0-9]/.test(text)) {
  console.log(`Tekste yra skaiciu`);
} else {
  console.log(`Tekste nera skaiciu`);
}
