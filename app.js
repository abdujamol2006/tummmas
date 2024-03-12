alert("73-masala");
(function () {
  console.log("73-masala");
})();

let balandlik = +prompt("Qutining balandlik o'lchamini kiriting");
let eni = +prompt("Qutining eni o'lchamini kiriting");
let uzunlik = +prompt("Qutining uzunlik o'lchamini kiriting");
function hajm(b, e, u) {
  let result = b * e * u;
  return result;
}
console.log(hajm(balandlik, eni, uzunlik));
//74
alert("74-masala");
(function () {
  console.log("74-masala");
})();

function sonlar(son1, son2, arr) {
  let kattaSon = son1 > son2 ? son1 : son2;
  let kichikSon = son1 < son2 ? son1 : son2;

  let yangiMassive = arr.filter(
    (element) => element > kichikSon && element < kattaSon
  );

  return yangiMassive;
}
let testArray = [2, 1, 7, 9, 14, 3, 27];
let son1 = 3;
let son2 = 17;

let natija = sonlar(son1, son2, testArray);
console.log(natija);
//83
alert("83-masala");
(function () {
  console.log("83-masala");
})();
function birxilmi(soz1, soz2) {
  let birxilSoz1 = soz1.toLowerCase();
  let birxilSoz2 = soz2.toLowerCase();

  if (birxilSoz1 === birxilSoz2) {
    return true;
  } else {
    return false;
  }
} //true result
let soz1 = "hello";
let soz2 = "HELLO";

let natijalar = birxilmi(soz1, soz2);
console.log(natijalar);
//false result
let soz3 = "Dunyo";
let soz4 = "dunya";

let natijalar2 = birxilmi(soz3, soz4);
console.log(natijalar2);
//84
alert("84-masala");
(function () {
  console.log("84-masala");
})();
function belgilarson(word) {
  let belgilarson = 0;
  for (let i = 0; i < word.length; i++) {
    belgilarson++;
  }

  return belgilarson;
}
let soz = "JavaScript";

let belgi = belgilarson(soz);
console.log(belgi);
//86
alert("86-masala");
(function () {
  console.log("86-masala");
})();
function namuna(arr) {
  let yangiMassiv = arr.map((item) => item * 2);
  let birinchiQiymat = arr[0] * 2;
  let ikkinchiQiymat = arr[1] * 2;
  let uchinchiQiymat = arr[2] * 2;

  return [birinchiQiymat, ikkinchiQiymat, uchinchiQiymat];
}
let natija1 = namuna([2, 5, 3]);
console.log(natija1);

//87
alert("87-masala");
(function () {
  console.log("87-masala");
})();
function uzunliklar(sozlar) {
  let uzunliklarMassivi = sozlar.map((soz) => soz.length);

  return uzunliklarMassivi;
}
let sozlar = ["JavaScript", "Python", "Java", "C++"];
let uzunliklarMassivi = uzunliklar(sozlar);
console.log(uzunliklarMassivi);
//94
alert("94-masala");
(function () {
  console.log("94-masala");
})();
function yigindi(sonlari) {
  let yigindi = sonlari.reduce((accumulator, currentValue) => {
    if (currentValue > 5) {
      return accumulator + currentValue;
    } else {
      return accumulator;
    }
  }, 0);

  return yigindi;
}
let sonlari = [3, 8, 1, 10, 6];
let yig = yigindi(sonlari);
console.log(yig);
//95
alert("94-masala");
(function () {
  console.log("94-masala");
})();
function yigindisi(massiv) {
  let yigindi = massiv.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return yigindi;
}
let massiv1 = [3, 5, 2, 7];

console.log(yigindisi(massiv1));
