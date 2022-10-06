// const pi = 3.14;
// const surfaceOfMars = 4 * pi * 3397 * 3397;
// const surfaceOFMercury = 4 * pi * 2440 * 2440;


// console.log(surfaceOFMercury);
// console.log(surfaceOfMars);


// const pi = 3.14;

// const surfaceAreaCalculator = (raduis) => {
//     return 4 * pi * raduis * raduis;   // опредление функции 
// }

// const surfaceOfMars = surfaceAreaCalculator(3390);  // вызов функции
// const surfaceOFMercury  = surfaceAreaCalculator(2440);

// console.log (surfaceOfMars);
// console.log(surfaceOFMercury);

/*---------- */

// const percentageCalculator = (number, total) => {
//     return number * 100 / total;
// }

// console.log (percentageCalculator(80, 160));

// a ** 2 + 2 * a * b + b ** 2

// get clone src

// const sumOFSquares = (a, b) => (a**2) + (2* a * b) + (b**2);

// console.log(sumOFSquares(2, 3));

/*------------------------------*/


// функция нахождения абсолютного значения в js //



// другие выражения которые дают true или false  ===, !==, <, >, <=, >=, 
  

//  AND (&&) исппользуются, когда вам нужно , чтобы два условия были истиной

// OR (||)  используется ,когда вам нкжно, чтобы хотя бы одно условие было истиной


//  NOT (!)  - это просто противоположное , not true - false , not false - true 


// const absoluteNumber = num => {
//    if (num > 0) {
//     return num;
//    } else if (num < 0) {
//     return -num;
//    } else {
//     return 0;
//    }

   
// };

// console.log (absoluteNumber(25 - 60));
//   условная конструкция if выражением не является . Это инсруцкия - выполняет действие ничего не вычесляя и возвращая 
// const absoluteNumber = num => {
//    if (num > 0 || num===0) {
//       return num;
//    } else   {
//       return -num;
//    }
     
//    };
//    console.log (absoluteNumber(-60));
   
// тернарный оператор  - сокращенная версия if.

//  condition ? expression : expression 

// const absValue = num => (num === 0 || num > 0) ? num : -num;

// console.log (absValue(50 - 60));

// тернарная или условная операция  вычисляет и возвращает значение т.е является выражением 

// const isEven = num => num % 2 === 0;

// const increaseNum = num => num + 10;

// const num = 6 ;

// const result = isEven(increaseNum(num) + 1) ? num + 1 : 1 - num ;

// console.log(result);

// const getColor =  color => (color === "white") ? "white" : "black";

// console.log(getColor("red"));

const finalGrade = (exam , projects) => {
   if (exam > 90 || projects > 10) {
      return 100;
   } else if (exam > 75 && projects >= 5) {
      return 90;
   } else if (exam > 50 && projects >= 2) {
      return 75;
   } else {
      return 0;
   }
};

console.log(finalGrade(75, 2));