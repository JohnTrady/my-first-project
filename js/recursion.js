// const pi = 3.14;

// const surfaceAreaCalculator = (raduis) => {
//      return 4 * pi * square(raduis);   
//  };



//     const square = num =>  {
//        return  num * num;
//     }

//   const surfaceOfMars = surfaceAreaCalculator(3390);
//   console.log(surfaceOfMars);
  
//  const surfaceOFMercury  = surfaceAreaCalculator(2440);

const factorial = n => {
    if (n === 0) {
       return 1;
    }

    else  {
       return  n * factorial(n - 1);
    }
};


console.log(factorial(3));


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

// требование к рекурсии 

// 1) базовый случай или терминальный сценарий - это точка в которой нужно остановиться , в нашем примере это ноль .
// 2) правило передвижение по рекурсии ,  углубление . в нашем случае  это n * factorial(n - 1).


