


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
  


  
 const name = "John" + " Trady";  // конкатенация 
 console.log(name);
