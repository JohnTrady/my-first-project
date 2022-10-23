//  нахождение факториала (цикл while)
// const factorial = n => {
//      let counter = 1; // переменная счетчик , чтобы считать от 1 до верхнего предела  
//      let result = 1; // текущий результат 

//      while (counter <= n) {
//          result = result * counter; // result *= counter
//          counter = counter + 1; // counter++
//      }

//      return result;
// };

// console.log(factorial(3));

//  упращеная форма записи 

// result = result * counter; // result *= counter

// result = result + counter; // result += counter

// result = result - counter; // result -= counter

// result = result % counter; // result %= counter

//  упращеная форма записи (инкремент , декремент)  

// postfix - сложение произойдет после того как , значение вернется 

//  let a = 3;
//  let b = a++;

//  console.log(a,b);


//  prefix - сложение произойдет перед тем , как значение вернется 

//  let a = 3;
//  let b = ++a;


//  console.log(a,b);




//  нахождение факториала (цикл for)

// const factorial = n => {
//     let result = 1;
//     for(let counter = 1; counter <= n; counter++) {
//         result *= counter;
//     }
//     return result;
// };

// console.log(factorial(3));




// const sum = n => {
//     let result = 0;
//     for(counter = 1; counter <= n; counter++) {
//         result += counter;
//     }

//     return result;
// };



// console.log(sum(5));


// const smallestDivisor = n => {
//       if (n === 1) {
//          return 1;
//       }
      
//       let divider = 2

//     for (; divider !== 1 && n%divider !== 0;divider++) {

        

        
               
//     }

//     return divider;
// };

// console.log(smallestDivisor(49));



// const factorial = n => {
//     let result = 1;
//     for(let counter = 1; ; counter++) {
//           if (counter > n) break

//         result *= counter;
//     }
//     return result;
// };

// console.log(factorial(5));



// const smallestDivisor = n => {
//     if (n === 1) {
//        return 1;
//     }

    
   
//     let divider = 2
    

//   for (; divider !== 1 && n%divider !== 0;   ) {

//     divider++ 
    
      
             
//   }
//   return divider;
  
// };

// console.log(smallestDivisor(49));


// let x = 45;

// let h = x++;

// x = --h;

// console.log(x);

// let a = 4;

// a -= 8 - a; // 3 - 5  // a = a - (8 - a);

// console.log(a); 

//  let b = 10;
//  b += b ** 2 > 20 ? 1 : 10; // b =  10 + (10 ** 2 > 20 ? 1 : 10) = 10 + 1;
 
//  console.log(b);



//  switch/case 

// let answer;

// if(num === 1)  {
//     answer = 'one';
// } else if( num === 2) {
//     answer = 'two';
// }  else {
//     answer = 'nothing';
// };


// c  использованием switch

// const  switchCase = num => {

// let answer;

// switch(num)  {
//     case 1:
//     answer = 'one';
//     break;

//     case 2:
       
//     answer ='two';
    
//     break;   
    
//     default:
//         answer = 'nothing';

// }
// return answer
// }
// console.log(switchCase(2));
