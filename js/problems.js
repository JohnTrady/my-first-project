 'use strict'

//  посчитайте в цикле сумму квадратов от 1 до 10 


// const sumOFSquares = () => {
   
// //    let result = 0;
// //    for (let a = 1; a <= 10; a++) {
// //     result += a**2;
// //    }
// //    return result;
//  let result = 0;
//  let a = 1;
//  while (a <= 10) {
    
//     result += a**2;
//     a++;
//  }

//  return result;



// };

// console.log(sumOFSquares());

// написать функцию  которая переварачивает строку

//   const backwardsString = str => {
//       let i =  str.length - 1;
//       let result = '';

//       while (i >= 0 ) {   
//         result = result + str[i];  
//         i--;
//       }

//       return result;
//   }

// console.log(backwardsString('California'));

// цикл for 

//   const backwardsString = str => {
//      let result = '';
//      for(let i = str.length - 1; i >= 0; i--) {
//         result += str[i];
//      }
//      return result
//   };

// console.log(backwardsString('California'));
  

//  split()  reverse()  join()

// const reverseString = str => {
//     return  str.split('').reverse().join('');
    
// };

// console.log(reverseString('California'));



// написать функцию которая переварачивает переданное число 

// const reversNumber = n => {

//     if ( n < 0 ) {
//         let num =n * -1;
//         let str = String(num);
//      let i =  str.length - 1;
//      let result = '';
    
//      while (i >= 0) {

//         result += str[i];
//         i--;

//      }

//      return  (-result);
//     }

//     if (n >= 0) {
//      let num = n; 
//      let str = String(num);
//      let i =  str.length - 1;
//      let result = '';
    
//      while (i >= 0) {

//         result += str[i];
//         i--;

//      }

//      return  Number(result);
//     }
    
// };


// console.log(reversNumber(-8841));

//  написать функцию которая переварачивает переданное число for()

//  const reversNumber = n => {
     
//      let num = n; 
//      let str = String(num);
    
//      let result = '';
    
//      for(let i = str.length - 1;i >= 0; i--) {

//         result += str[i];
        

//      }

   
//      return  Number(result);
    
// };
// console.log(reversNumber(321));


 // написать функцию которая переварачивает переданное число 
 //  join(), split(),revere()

// const reversNumber = n => {
//     let num = n;
//     let str = String(num);

    

//     return Number(str.split('').reverse().join(''));
// };

// console.log(reversNumber(8841));
 

// const reversNumber = n => {
//     if ( n >= 0 ) {
//     let a = n + '';
    
//     a = a.split('').reverse().join('');
//     return a = a * 1;
//     }
//     //  return Number(a);
//     if ( n < 0 ) {
//         let a = -n
//         let b = a + '';
        
//         b = b.split('').reverse().join('');
//         return b = b * -1;
//         }
    
// }

// console.log(reversNumber(-8841));




// const addNumber = n => {
//     if ( n < 0) {
//         return 'Number shoud be > 0'
//     }
  
    
//     while (n >= 10) {
//     let str = String(n);
//     let i = str.length - 1;
//     let a = 0;
//     let b = 1;
    
//     n = Number(str[a]) + Number(str[b]);
    
//     }
//     return n;
    
// }

// console.log(addNumber(12));


// const addNumber = n => {
//     if ( n < 0) {
//         return 'Number shoud be > 0'
//     }
   
//     while (n >= 10) {
//         let str = String(n);
//         let i = str.length - 1;
//         let result = 0;
    
//       for (let i = str.length - 1;i>=0; i--) {

//           result +=Number(str[i]);
        
//           }

//             n = result
     
//              }

//     return n;
                  
// }

// console.log(addNumber(19236244444444444666));