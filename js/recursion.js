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

const factorial = n => {
    if (n === 0) {
       return 1;
    }
   
 const iter = (counter , accumulator) => {
     if (counter === 1) {
       return accumulator;
     }

      return iter(counter -1, counter * accumulator);
 };
  
      return iter(n,1);
  
};

 console.log(factorial(6));


// counter - остлеживает изменение от n до 1
//  accumulator - текущий результат умножения  чисел от n до 1

// iter(3, 1) // iter(3 -1, 3 * 1)
// iter(2,3)  // iter(2 - 1, 2 *3)
//  iter(1, 6)  // iter(counter === 1,  retuern 6)


// интеративный процесс может быть описан так :
//   1) определить ничальное состояние , в нашем случае мы делаем вызов iter(n,1);
//   2) проверить терминальный сценарий , мы проверяем ,  counter === 1 , останавливаем рекурсию когда  он  принимает значение 1 ;
//   3) определяем новое состояние (это то , как процесс двигается вперед). в нашем случае это return iter(counter -1, counter * accumulator);
//   4) повторяем шаг 3;


 