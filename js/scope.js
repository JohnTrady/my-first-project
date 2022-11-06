'use strict';

//   окружение
//  область видимоти - это то , как интерпретатор  в разных местах кода видит наши индентфикаторы (постояные, переменые, и т.д)
// область видимоти - это  то где компоненты доступны 
// лексическая область видимости - механизм поиска значений (смотрим в текущей области ,если нет, то идем на уровень выше, и так далее)


// const age = 29;   // глобальная константа 
// const multiplier = num => {
//     const x = 10;  // локальная константа 
//     return num * x;
    
    
// };

// let result = true;

// let a = 0 ;
//  const changer = ()  => {
//      a++;
//  };

//  console.log(a); // a = 0
//  changer();
//  console.log(a); // a = 1

// локальное недоступно снаружи , но глобальное доступно везде 
// храним константы переменные только там где им место 


// let a = 7;
// let b = 10;

// const multiplier = () => {
//     let a = 5; // локальная переменая 
//     let b = 20;

//     return a * b;  // 50
// }

// console.log(multiplier());


// замыкания - функция замыкает в себе некоторую информацию из облоасти видимости (функция , котороя запоминает внешние идентификаторы, используемые внутри)

// const createPrinter = () => {
//     const name ='King';

//     const printName = () => {
//         console.log(name);
//     };
//     return printName;
// };

// const myPrinter = createPrinter();
// myPrinter();   // King запомненное значение , при том область функции где оно было задано больше не суцщестует 

// у функции PrintName ект локальных компонетнов ,но у нее есть доступ  к области видимости , где они сама находится , где задана константа name.

// function getCounter() {
//     let count = 0;
//     return function() {
//         return count++;
//     }
// };

// const counter = getCounter();
// const counter2 = getCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter2()); //   функция counter2 не делать переменную count с функцией


// const x = 7;
// const f = (x) => () => () => x;
// console.log(f(10)()());  // 10

// const isRightNumber = (num) => {
//     const res = (num > 3) && (num**2 < 26) && (num !== 5);
//     return res
// };

// console.log(isRightNumber(4));

// const value = 777;
// const func = value => value + 1;
// console.log(func(5));


// const isPerfectNumber = n => {
//     // const rightDivider = (n % divider === 0) && (divider < n);
//     // let divider = 1;
//     let result = 0;
    
//     for(let divider = 1; divider <=n/2; divider++) {
//         n / divider;
        
//       if (n % divider === 0) {
//         result += divider;
//       }

   
      
//     }

    
//     const rightDividerSum = (result === n);
//     return rightDividerSum;
    
// }

// console.log(isPerfectNumber(496));

// const letterUpper = str => {
  
//     let result = '';
//   //  str.split(' ');

//   for(let i = 0;  i < str.length - 1; ) {
//     if ( str[i] ===' ') {
//       result += str[i+1].toUpperCase();
//       i++
//      }
//      if(i === 0) {
//        result += str[i].toUpperCase();
       
//      }
     
    

//       i++;

//      result += str[i];
//   }
//   return result;
// };

// console.log(letterUpper('hello, world'))



// const letterUpper = str =>  {
//   let result = '';
//   for(let i = 0; i < str.length; i++) {
//     const beBig = (i === 0 || str[i - 1] === ' ');
//     result +=  beBig ? str[i].toUpperCase() : str[i];
//   }
//   return result

// }

// console.log(letterUpper('hello, world'));

