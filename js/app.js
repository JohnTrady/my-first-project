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

// function sumOFSquares(a, b) {

//   return (a ** 2) + (2 * a * b) + (b ** 2);

// }

// console.log(sumOFSquares(77, 48));


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

// function sumOFSquares(a, b) {

//   return (a ** 2) + (2 * a * b) + (b ** 2);

// }

// console.log(sumOFSquares(77, 48));

// const factorial = n => {
//     if (n === 0) {
//        return 1;
//     }

//     else  {
//        return  n * factorial(n - 1);
//     }
// };


// console.log(factorial(1000));


// const factorial = 3 => {
//   if (3 === 0) {
//      return 1;
//   }

//   else  {
//      return  3 * factorial(3 - 1);
//   }
// };


// console.log(factorial(3));


// const factorial = 2 => {
//   if (2 === 0) {
//      return 1;
//   }

//   else  {
//      return 3 * 2 * factorial(2 - 1);
//   }
// };


// console.log(factorial(2));

// const factorial = 1 => {
//   if (1 === 0) {
//      return 1;
//   }

//   else  {
//      return 3 * 2 *  1 * factorial(1 - 1);
//   }
// };


// console.log(factorial(1));

// 3 * 2 * 1 * 1

//  РЕКУРСИЯ - что то описыввется через свмого себя,  содержит себя  в своем описании

// требование к рекурсии 

// 1) базовый случай или терминальный сценарий - это точка в которой нужно остановиться , в нашем примере это ноль .
// 2) правило передвижение по рекурсии ,  углубление . в нашем случае  это n * factorial(n - 1).


// const product = n => {
//    if (n===5) {
//       return n;
//    }
//    else {
//        return n * product(n + 1);
//    }
// };

// console.log(product(2));

// const sum = n => {
//    if (n === 1) {
//       return 1;
//    }
//     else {
//        return n + sum(n - 1);
//    }
// };

// console.log(sum(5)); //  5 + (4 + (3 + (2 + 1)));

// 5 + sum(5 - 1 = 4);

// 5 + 4 + sum(4 - 1 = 3);
// 5 + 4 + 3 + sum(3 - 1 = 2);
// 5 + 4 + 3 + 2 + sum(2 - 1 = 1);
// 5 + 4 + 3 + 2 + 1;
//  5 + (4 + (3 + (2 + 1)));


//   const sequencesOfSum = (begin, end) => {
//      if (begin === end) {
//       return end;
//      }

//       else if (begin > end) {
//           return end;
//       }

     
     
//      return begin + sequencesOfSum(begin + 1, end);
//   };

//   console.log(sequencesOfSum(2,6));


// 2 + (2 + 1 = 3);
// 2 +  3 + (3 + 1 = 4);
// 2 + 3 + 4 + (4 + 1 = 5);
// 2 + (3 + (4 + (5 +(5 + 1 = 6))));
// 2 + 3 + 4 + 5 + 6;



     
// интеративный процесс 
//   вся информвция о вычислении называется состоянием

// const factorial = n => {
//     if (n === 0) {
//        return 1; 
//     }
   
//  const iter = (counter , accumulator) => {
//      if (counter === 1) {
//        return accumulator;
//      }

//       return iter(counter -1, counter * accumulator);
//  };
  
//       return iter(n,1);
  
// };

//  console.log(factorial(3));


// counter - остлеживает изменение от n до 1
//  accumulator - текущий результат умножения  чисел от n до 1

// iter(3, 1) // iter(3 -1, 3 * 1)
// iter(2,3)  // iter(2 - 1, 2 *3)
//  iter(1, 6)  // iter(counter === 1,  retuern 6)


// интеративный процесс может быть описан так :
//   1) определить начальное состояние , в нашем случае мы делаем вызов iter(n,1);
//   2) проверить терминальный сценарий , мы проверяем ,  counter === 1 , останавливаем рекурсию когда  он  принимает значение 1 ;
//   3) определяем новое состояние (это то , как процесс двигается вперед). в нашем случае это return iter(counter -1, counter * accumulator);
//   4) повторяем шаг 3;

// const smallestDivisor = n => {
//      if (n <= 1) {
//        return "Our devider shoud be > 1"
//      }

//      if (n%2 === 0 && n >= 1) {
//       return 2;
//   }
    
//    const iter = (divider) => {
      

//      if (n%divider === 0) {
//           return divider;
//       }

     
//        return iter(divider + 1);
//    };

//     return iter(2);

   
    


// };



// let factorial = 1;  //   объявление переменной 
// factorial = factorial * 2 ; //  1
// factorial = factorial * 3 ; // 6


//  цикл while
// while (условие) { 
//     // делает что то
//     //  и еще что то
// }
//   n * factorial(n - 1);
// (counter -1, counter * accumulator);
// наисать функцию факториала с переменной и циклом 

// const factorial = n => {
//      let counter = 1; // переменная счетчик , чтобы считать от 1 до верхнего предела  
//      let result = 1; // текущий результат 

//      while (counter <= n) {
//          result = result * counter;
//          counter = counter + 1;
//      }

//      return result;
// };

// console.log(factorial(3));

// const smallestDivisor = n => {
//     if (n <= 0) {
//     return "Our number shoud be  more than 0"
//      }

//      if (n === 1) {
//         return 1;
//      }
        
//      if (n%2 === 0) {
//           return 2;
//   }



//     let divider = 2;

     
  


//     while (n%divider !==0 && divider !== 1) {
//         divider = divider  + 1;
//     }

//     return divider + "-это наш наименьший делитель";
    
// };

// console.log(smallestDivisor(49));


//   Строки 
//   строки с которыми ведется работа  в js  объявляются с помощью одинарных ковычек '';
//   const str = 'Hello';
//   const newStr = str + ' World';

//   console.log(newStr);

//   функция принимает строку и возвращает ту же строку , но без каждой второй буквы ;

//   const skipString = str => {
//       let i = 0;
//       let result = '';

//       while (i < str.length) {   // length = означает количество символов в строке ;
//         result = result + str[i];  // [] - извлекаем соответствующий символ строки; индексакция  в прошраммировании начинается с 0 ;
//         i = i + 2;
//       }

//       return result;
//   }

// console.log(skipString('California'));

//   const str = 'qwertyuiop';
//   const result =  `${str[2]}${str[4]}${str[0]}`;
//   console.log(result);

 

//    const name ='Alex';  //   интерполяция
//    const a = 10;
//    const b = 12;

//    console.log(`His name is ${name} and his age ${a + b}`);
  


  
// const name = "John" + " Trady";  // конкатенация 
// console.log(name);
