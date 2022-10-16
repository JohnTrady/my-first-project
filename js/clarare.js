


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

const smallestDivisor = n => {
    if (n <= 1) {
    return "Our number shoud be  more than 1"
     }
        
     if (n%2 === 0 && n > 1) {
          return 2;
  }

    let divider = 2;


    while (n%divider !==0) {
        divider = divider  + 1;
    }

    return divider;
    
};

console.log(smallestDivisor(35));