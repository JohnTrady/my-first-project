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

//         let result = 0;
    
//       for (let i = str.length - 1;i>=0; i--) {

//           result +=Number(str[i]);
        
//           }

//             n = result
     
//              }

//     return n;
                  
// }

// console.log(addNumber(1923));



// const length = 12 ;
// const num = length(48);  //  ошибка типизации  type error 

// типизация -  это класификация информации
// числа строки boolean (undefined) null - это итпы в JS 

// код при запуске  конвертируется в понятную для пу форму - компеляция

// две концепции типизации 
//  1) динамсическая и статическая 
//  а) некоторые языки  проверяют типы и ищут ошибки на стадии исполнения - динамическая типизация (php, ruby, JS)
//  б)  некоторые языки проверяют типы и ищут ошибки на стадии компеляции - статическая типизация (С++, С#, Java, Go)


//  2) слабая и сильная - насколько серьезно язык программирования проверяет типы 
//  n + '' = 'n';  5 + '5'= '55'
//  n * ''= n; //  слабая типизация (JS)
//  String(num);
//  Number(str);
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

                                   // МАССИВЫ - упорядоченные наюоры элементов 
// задача массива - представить такие элементы в виде единной структуры , которая позоляет работать с ними как с единным элементом

// определение массива 
//  const items = [];

//  создание массива с тремя элементами 

// const animals = ['cats', 'dogs', 'birds'];

//  получение данных 


//  console.log(animals[0]); // cats
//  console.log(animals[1]); // dogs
//  console.log(animals[2]); // birds
//  console.log(animals.length); // 3

//  обращенние к элементу при помощи массива 

// const animals = ['cats', 'dogs', 'birds'];

// let i = 1;
// let j = 1;
// console.log(animals[i]); // dogs
// console.log(animals[i + j]); // birds

//  в квадратные скобки  можно подставить вызов функции 

// const getIndexOFSecondElement = () => 1;
// const animals = ['cats', 'dogs', 'birds'];
// console.log(animals[getIndexOFSecondElement()]);

//  получение последнего элемента массива 

// const animals = ['cats', 'dogs', 'birds'];

// console.log(animals[animals.length - 1]);  // birds

// const getWeekends = str => {
   
//     const longFormat = ['saturday','sunday'];
//     const shortFormat = ['sat','sun'];
//     if ( str ==='long') {
//         return longFormat;
        
//     }
//     if ( str ==='short') {
//         return shortFormat;
//     } 
    
//         return 'error';
    

// };

// console.log(getWeekends('long'));


// const getWeekends = (str) => {
//     const longFormat = ['Saturday', 'Sunday'];
//     const shortFormat = ['sat', 'sun'];
//     switch (str) {
//         case'long':
//             return  longFormat;
            
//         case'short':
//             return  shortFormat;
           
//         default:
//              return 'Wrong Format';   
//     }
// };


// console.log(getWeekends('long'));

// модификация 
// изменение массива

// const animals = ['cats', 'dogs', 'birds'];
// animals[0] = 'horses'; // меняется первый элемент массива
// console.log(animals);

// константы хранят ссылку на данные , а не сами данные. это значит , что менять данные можно , но не ссылку 

// добавление элемент в массив  push();

// const animals = ['cats', 'dogs', 'birds'];
// animals.push('horses'); // добавление элемента в  конец вашего массива 
// console.log(animals);  // массив стал больше [ 'cats', 'dogs', 'birds', 'horses' ]

// добавление элемента в начало массива unshift()

// const animals = ['cats', 'dogs', 'birds'];

// // animals.unshift('horses');

// console.log(animals); // [ 'horses', 'cats', 'dogs', 'birds' ]

// удаление элемента массива 

// const animals = ['cats', 'dogs', 'birds'];
// delete animals[1];
// console.log(animals); // [ 'cats', <1 empty item>, 'birds' ]  //  длина массива не изменяется  // уменьшение размера массива неэедательная операция 

// const reverseArray = arr => {
//     if ( arr.length >=2 ) {
//        return arr.reverse();
//     } 
//     return arr;
// }


// console.log(reverseArray([2,3]));


// const changeElementsOfArray = arr => {
//     if ( arr.length >=2) {
//         const lastIndex = arr.length - 1;
//         const last = arr[lastIndex];
//         arr[lastIndex] =  arr[0];
//         arr[0] = last;
//     }
//     return  arr;
// };

// console.log(changeElementsOfArray([2,3,4,5,6,]));

// const changeElementsOfArray = array => {
//     const firstElement = array[0];
//     const secondElement = array[array.length -1];
   
//     if ( array.length >= 2 ) {
//         array[0] = secondElement;
//         array[array.length -1] = firstElement;
                        
//     }
//     return array;
// };

// console.log(changeElementsOfArray(['John','David','Steve','Brain','Kurt']));
 

//  проверка существование значения в массиве (выход за границу массива)

// const animals = ['cats', 'dogs', 'birds'];

// console.log(animals[5]); // undefind 
// console.log(animals[4]); // undefind 
// console.log(animals[3]); // undefind 
// console.log(animals[2]); // 'birds'

// способ проверить  выхход за границу массива - убедится  в том, что индекс не превышает  длину массива 

// if ( index < array.length) {
//     array[index]; // ok 
// }

// цикл for  а массиве   (обход массива)

// const animals = ['cats', 'dogs', 'birds'];

// for (let i = 0; i < animals.length; i++) {   // вывож значение по порядку
//     console.log(animals[i]);
// };
  
// const animals = ['cats', 'dogs', 'birds', 'horses','fish','elephants'];
  
// for (let i = 0; i < animals.length; i++) {    //  вывод значений в обратном порядке (1 способ)
//     const index = (animals.length - 1) - i;
//     console.log(animals[index]);
// };


// const animals = ['cats', 'dogs', 'birds', 'horses','fish','elephants'];

// for (let i = animals.length - 1; i >= 0; i--) {  //  вывод значений в обратном порядке (2 способ)
//     console.log(animals[i]);
// };


// модификация массива с помощью цикла for  

//  const emails = ['VASYa@gmail.Com','PeTr@yandeX.RU', 'IGOr@mail.Ru'];

//  for (let i = 0; i < emails.length; i++) {
//     console.log(emails[i].toLowerCase());
//  };


// const emails = ['VASYa@gmail.Com','PeTr@yandeX.RU', 'IGOr@mail.Ru']
// console.log(emails)
// for (let i = 0; i < emails.length; i++) {
// //  const email = emails[i];
// //  const normalizeEmail = email.toLowerCase(); // преобразование в нижний регистр 
// //  emails[i] = normalizeEmail; // заменяем значение
//                                               // emails[i] = emails[i].toLowerCase();        
    
// };

// console.log(emails)



// const addPrefix = (arr, prefix) => {
//     const result = [];
//     const space = ' ';
//     for (let i = 0; i < arr.length; i++) {
//         result[i] =prefix + space + arr[i];
//     }
//     return result;
// };

// console.log(addPrefix(['John','David','Steve','Brain','Kurt'], 'Mr'))

// const addPrefix = (arr, prefix) => {
//     const result = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         result[i] =`${prefix} ${arr[i]}`;
//     }
//     return result;
// };

// console.log(addPrefix(['John','David','Steve','Brain','Kurt'], 'Mr'))

  // Cсылки

//   [1, 2,3] === [1, 2, 3] // false

  // ссылаемся на один и тот же массив 
//   const items = [1, 2,];
//   const items2 = items;
//   items2.push(3);

//   console.log(items) // [1, 2, 3]
//   console.log(items2) // [1, 2, 3]
//   console.log(items === items2); // true

  // если  передать в массив какую-нибудь функцию , которая его именяет , то строка тоже изменится 

//   const f = (coll) => coll.push('wow');
//   const items = ['one'];
//   f(items);
//   console.log(items);// [ 'one', 'wow' ]
//   f(items);
//   console.log(items); // [ 'one', 'wow', 'wow' ]
  

//   агрегация - дюбые вычисления , которые строятся на основе  всего набора данных (наприме: min , max , среднего)
//  напишем функцию поиска максимального значения 
 
// const calculateMax = (coll) => {
//     if ( coll.length === 0) {
//         return null;
//     }
//     let max = coll[0]; // принимаем за большее значение первый элемент
//     for (let i = 1; i < coll.length; i++) {
//         const currentElement = coll[i];
//         if(currentElement > max) {
//             max = currentElement;
//         }
        
//     }
//     return max;
// };

// console.log(calculateMax([])); // null 
// console.log(calculateMax([3, 2, -10, 38 ,0])); // 38

//    поиск суммы элементов в массиве


// const calculateSum = coll => {
  
    
//     let result = 0
//     for (let i = 0; i < coll.length; i++) {
//        result += coll[i];
       
        
//     }
//     return result;
// };
// console.log(calculateSum([]));   // 0
// console.log(calculateSum([5,5,-6])); // 4
// console.log(calculateSum([5,5,6])); // 16



// const sumOfElements = (coll) => {
//      let result = 0;
  
//     for(let i = 0; i < coll.length; i++) {
//       if (coll[i] % 3 === 0) {
//         result +=coll[i];
//       }
//     }
//     return result;
// };
// console.log(sumOfElements([])); 
// console.log(sumOfElements([3,6,2,4,21,27,25,62,55,]));
// console.log(sumOfElements([2,3,5,6,7,8,9,12]));


// цикл for ...of  данный цикл не требует счетчика , он знает о том , как перебирать элементы , и когда они закончатся 

// const listOfNames = ['Brain','John','Vasya'];

// for(const name of listOfNames){
//   console.log(name);
// };

// данный цикл отлично подходит для задач  агрегации


// const calculateSum = coll => {
//     let result = 0
//     for (const element of coll ) {
//        result +=element;
               
//     }
//     return result;
// };

// console.log(calculateSum([2,3,5,2]))

// const greetings = 'Hello';
// for(const symbol of greetings){
//   console.log(symbol);
// }

// цикла for of будет недостаточно , если вам потребуется ручное управление обходом :
// for(let i = 0; i < items.length; i +=2) { //  обход элментов массива через один
//    // какой то код
// };

// for(let i = items.length -1; i >= 0; i--){ // обход массива в обратном порядке 
//   // какой то код 
// };

// for(let i = 5; i < 10;i++) { //   обход массива в определленом диапозоне
//    // какой то код 
// };

// for(let i = 0; i < items.length; i +=2) {
//   // items[i] = что то делаем   // когда во время обходо  необходитио менять исходный массив
// } ;

// const caculateAverage = tempreatures => {
//   if (tempreatures.length ===0) {
//     return null;
//   }
//   let result =0;
//     for(let i = 0; i < tempreatures.length; i++) {
//       result += tempreatures[i] / tempreatures.length;
//     }
//     return result;
// };

// const caculateAverage = tempreatures => {
//   if (tempreatures.length ===0) {
//     return null;
//   }
//   let result =0;
//     for(const value of tempreatures) {
//       result += value / tempreatures.length;
//     }
//     return result;
// };


// console.log(caculateAverage([37.5, 34, 39.3, 40, 38.7, 41.5])); // 38.5
// console.log(caculateAverage([])); // null
// console.log(caculateAverage([37.5, 34, -39.3, 40, 38.7, -41.5]));  // 11.5666666

//метод splice 

// const animals = ['cats', 'dogs', 'birds'];
// // animals.splice(1, 0, 'horses'); //  добавляем элемент по индксу (1 - с какого индекса, 0 - количесвто элементов удалено);
// // animals.splice(1, 1, 'horses'); // замеянем элемент ((1 - с какого индекса, 1 - количесвто элементов удалено);
// animals.splice(1, 1,);  // удвляем элемент  ((1 - с какого индекса, 1 - количесвто элементов удалено);
//  animals.splice(1);
//  console.log(animals);


// удаление null из массива
// const compact = coll => {
//   // создание результирующего массива 
//   const result =[];
//   for(let i = 0; i < coll.length; i++) {
//     if(coll[i] !== null){
//       result.push(coll[i]);
     
//     }
//   }
//   return result;
// }

// const compact = coll => {
//     // создание результирующего массива , в который  добавляются только подходящие под условия значения
//     const result =[];
//     for(const item of coll) {
//       if(item !== null){
//         result.push(item);
       
//       }
//     }
//     return result;
// }

// console.log(compact(([0, 1, false, null, 'wow', null]))); // [0, 1, false,'wow']
// console.log(compact(([]))); // []


// управляющие инструкции 
// break - производит выход из цикла

// const coll = ['one', 'two', 'three', 'four', 'stop', 'five'];
// for(const item of coll) {
//   if (item === 'stop') {
//     break;
//   }
//   console.log(item);
// }

// continue - позоляет пропустить итерацию цикла 

// const coll = ['one', 'two', 'three', null, 'four', null, 'five'];
// const myCompact = coll => {
//      const result = [];
//     for ( const item of coll) {
//       if (item === null) {
//            continue;
//       }
//       result.push(item);

//     }
//    return result
// }

// console.log(myCompact(coll));


// сортировка массивов

//  const numbers = [4, 20, 3, 56, 10,8];

//  numbers.sort((a, b) => a - b); // сортировка по возрастанию
//  console.log(numbers); 
 
//  numbers.reverse(); //  сортировка в обратном порядке 
//  console.log(numbers); 
 
// пузырковая сортировка

// const bubbleSort = coll => {
//      let stepsCount = coll.length;
//      let swapped; // показывает был ли совершен обмен  элементов во время перебора массива 
//      // цикл do ... while, разница от цикла while только в проверке (здесь она делается не до выполнения тела , а  после )
//      do {
//          swapped = false;
//          for(let i = 0; i <  stepsCount; i++ ) {
//             if (coll[i] > coll[i + 1]) {
//                 const temp = coll[i]; // это константа для хранение текущего элемента
//                 coll[i] = coll[i + 1];
//                 coll[i +1] = temp;
//                 swapped = true;
//             }
//          }
//          stepsCount -= 1;
//      }  while (swapped); //  продолжаем наши перестановки пока swapped === true
//      return coll

// };
// console.log(bubbleSort([4, 20, 3, 56, 10,8])); 

// сортировка выбором 

// const selectionSort = coll => {
//    for(let i = 0; i < coll.length -1; i++) {
//       let min = i;
//        for(let j = i + 1; j < coll.length; j ++ ) {
//           if(coll[j] < coll[min]) {
//              min = j;
//           }
//        }
//        const temp = coll[i];
//        coll[i] = coll[min];
//        coll[min] = temp;

//    }
//    return coll;
// };
// console.log(selectionSort([4, 20, 3, 56, 10,8])); 



// Стек - это упорядочное коллекция элементов , в которой добавление новых и удаление старых элементов всегда происходит в конце коллекции. Обычно это называют вершиной стека 
// структура данных - это кокретный способ хранение и ораганизации данных
// структуры данных:    списки, хеш-таблицы, деревья, графы, стек, очередь

// работа со стеком включает в себя следующие операции 
// push - добавить в стек 
// pop - взять из стека 
// peekBack - вернуть элемент с вершины стека
// isEmpty - проверка на пустоту 
// size - вернуть размер 


// const checkIsBalanced = expression => {
//     // создаем стэк
//     const stack = [];
//     // проходим по каждому символу в строке 
//     for (const symbol of expression) {
//         if ( symbol ==='(') {
//             stack.push(symbol);
//         } else if (symbol === ')') {
//              if(!stack.pop()) {
//                 return false;
//              }
//         }

// }
//   return stack.length === 0;f
// };


// console.log(checkIsBalanced("(()"))

// деструктуризация - синтактическая возможность раскладавать элементы массива (и не только) в отдельные константы и переменные

// const points = [3,5];
// const [x, y] = points;//[x,y] = [3,5] ult x = 3 , y = 5;
// console.log(`${x}:${y}`);

// const [, secondElement, , fourthElement, fifthElement] = [1,2,3,4,5];
// console.log(secondElement); // 2 
// console.log(fourthElement); // 4
// console.log(fifthElement); // 5

// const [firstElement, secondElement , thirdElement] = [1 ,2];
// console.log(thirdElement); // undefined 

// const [firstElement, secondElement , thirdElement = 3] = [1 ,2];
// console.log(thirdElement); // 3

// деструктуризация в циклах 

// const points = [
//    [2,3],
//    [4,5],
// ];

// for (const [x,y] of points) {
//   console.log([x,y]);
// };

// деструктуризация строк 

// const [first, second, third] = 'one';
// console.log(first);
// console.log(second);
// console.log(third);

// rest опереатор и деструктуризация 

// rest оператор позволяет свернуть часть элементов  во время деструктуризации

// const fruits = ['apple', ' orange', ' banana', 'pineapple'];

// const [firstElement, ...rest] = fruits;
// console.log(firstElement);
// console.log(rest);

// в ситуациях когда вас интересует только часть массива  , но не важны первые элементы , лучше воспользоваться методом slice()

// const fruits = ['apple', ' orange', ' banana', 'pineapple'];
// const rest = fruits.slice(1); // метод slice возвращает новый массив , а не изменяет старый 
// console.log(rest);

// const [first, second, ...rest] = 'some string';
// console.log(first);
// console.log(second);
// console.log(rest); // rest выводит массив данных

 // spread опертор и создание новых масивов 
 // spread - растягивает элементы 

//  const russianCities = ['Moscow', 'Kazan'];
//  const cities = ['Milan', 'Rome', ... russianCities]; // spread появляется справа от равенста
//const cities = ['Milan', ... russianCities, 'Rome' ]; //[ 'Milan', 'Moscow', 'Kazan', 'Rome' ]spread может появлятся в любой части массива
//  console.log(cities); // [ 'Milan', 'Rome', 'Moscow', 'Kazan' ]

// копирование массива 

// const russianCities = ['Moscow', 'Kazan'];
// const copy = [...russianCities]; 
// copy.push('Samara')
// console.log(russianCities); // [ 'Moscow', 'Kazan' ]
// console.log(copy); // [ 'Moscow', 'Kazan', 'Samara' ]

// тоже самое юез spread

// const russianCities = ['Moscow', 'Kazan'];
// const copy = russianCities.slice();
// copy.push('Samara');
//  console.log(russianCities); // [ 'Moscow', 'Kazan' ]
//  console.log(copy); // [ 'Moscow', 'Kazan', 'Samara' ]


// const x = 'moscow';
// console.log(x.slice(3));


// const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5'];
// const money2 = ['eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200']
// const money3 = ['eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200']

// getTotalAmount = (money, currency) => {
//   let result = 0;
    
//   for(const temp of money){
//      if (temp.slice(0,3) === currency) {
//       result += Number(temp.slice(4));
//     }
//   }

//   return result; 
// };
// console.log(getTotalAmount(money1, 'usd'));
// console.log(getTotalAmount(money2, 'eur'));
// console.log(getTotalAmount(money3, 'rub'));


// getTotalAmount = (money, currency) => {
//   let result = 0;
//   for(const temp of money) {
//       const parts = temp.split(' ') ;
//       if (parts[0] === currency) {
//          result += Number(parts[1]);
//       }
//   }
//   return result
// }


// getTotalAmount = (money, currency) => {
//   let result = 0;
//   for(const part of money) {
//       const [cur, value] = part.split(' ');
//       if (cur === currency) {
//          result += Number(value);
//       }
//   }
//   return result
// }

// console.log(getTotalAmount(money1, 'usd'));
// console.log(getTotalAmount(money2, 'eur'));
// console.log(getTotalAmount(money3, 'rub'));

//                                           Объекты
 
//  объукты - это тип данных в js  c помощью которого представляют связанный набор данных ю это позвоялет оперировать данными ка единым целым 

// const user = {
//      name: 'John',
//      married: true,
//      age: 25
// };

// доступ к свойствам объекта 
  // точеная натация 
// console.log(user.name);
// console.log(user.married);
// console.log(user.age);

   // c  помощью квадратных скобок

// console.log(user['name']);
// console.log(user['married']);
// console.log(user['age']);

// const rectange = {width: 10, height: 5};


// user.married = false;
// console.log(user.married);
// user.name = 'Marina';
// console.log(user.name);

 // в константе хранится не сам объект , а ссылка на него , это значит что менять  содержимое  оюъекта можно , но заменить сам объект на другой нельзя 

// наполнение объекта


// const course = {};

// course.name = 'JS: Объекты'
// course.description = 'Знакомство с объектами'
// console.log(course);


// удаление объекта 

// const user = {
//     name: 'John',
//     age: 15
// };
// delete user.age;  // удаление объекта - это плохая практика 
// console.log(user);

// объекты как и массивы - ссылочный тип данных 

// const company = {};

// поменять содержимое объекта можно 

// company.name = 'Apple';
// console.log(company);

// но заменить ссылку(заменить сам объект) нельзя 

//  с пмощью переменноых замеить объект (заменить ссылку) можно б это делать нерекомендуется 

//  let company = {}; 


// ссылочная природа влияет и на сравнение . объекты  равны не тогда, когда у них одинаковая структура , а когда это один и тот же объект (как имассивы )

// const company ={name: 'apple'};
// console.log(company === {name: 'apple'}); // false

// const copyOfcompany = company;         // передается ссылка 

// console.log(copyOfcompany === company); // true  
// меняя одно мы меняем и другое 

// company.create = 1994;
// console.log(company);
// console.log(copyOfcompany);

// const user = {
//      name: 'John',
//      lastName: 'Doe',
//      married: true,
//      age: 25
// };


// let propertyName = 'name';
// console.log(user[propertyName]);

// обход свойств объекта 
// for ...in

// const course = {name:'JS React', slug:'js-react'};
// for (const prop in course) {
//      console.log(`course.${prop} = ${course[prop]}`);
//     // console.log(course[prop]);
// }

// оъекты связанные друг с другом , и обращение к св-ву в одном объекте  может приводить  к обращению (неявному) к св-ву  в друом объекте (прототипе)


// более распространенный  способ - обходить ключи Object.keys


// const course = {name:'JS React', slug:'js-react'};
//  let keys = Object.keys(course); // Object.keys позволяет получить массив всех ключей объекта 
//  console.log(keys);
//  for (const key of keys) {
//     console.log(course[key]);
//  }

// Object.entries  - метод, который возвращает сразу  ключи  и значение объекта  т.е  каждый элемент сам будет массивом , содержащий ключ  и соответствующее значение  [key , value]

// const course = {name:'JS React', slug:'js-react'};
// let entries = Object.entries(course);
// console.log(entries); // [ [ 'name', 'JS React' ], [ 'slug', 'js-react' ] ]
// // обходим полученный массив циклом for ...of
// for ( const [key, value] of entries) {
//    console.log(key);
//    console.log(value);
// }


// слияние - операция над объектами , выполняющая их объединение , нужна она там , где необходимо данные одного объекта перенести в другой объект 

 // user в системе 
//    const user ={name:'John', email:'john@mail.com', age:44}
// из формы пригли новые данные 
//    const date ={name:'James', age:45};
//    в результате должно получится  {name:'James', email:'john@mail.com',  age:45}; 
// способ 1 - подойдет когда данных в объекте мало 
// user.name = data.name;
// user.age = data.age;
// способ 2  с помощью слияние (merge)
// Object.assign(user, date);
// console.log(user)
//   если какое=то св-во было  тольок в первом объекте , то оно останется без изменений  // если св-во присутсвует  во втором (и далее) объекте , то оно записывается в первый независимо от того  , было оно там или нет 
 
// клонирование объектов 
// данные из user копируются во вновь созданный объект 

// const user ={name:'John', email:'john@mail.com', age:44}

// const copyOfUser = Object.assign({}, user);
// console.log(copyOfUser); // {name:'John', email:'john@mail.com', age:44}
// console.log(copyOfUser === user); // false изменение в одном не затрагивают изменение в другом 

// spread и создание новых объектов 

// const user ={name:'John', email:'john@mail.com', age:44};
// const data ={name:'James', age:45};
// const copyOfUser = Object.assign({}, user, data);
// console.log(copyOfUser);

// const user = {name:'John',age: 11};

// const newUser= {...user, married: true,  age:25}; //  { name: 'John', age: 25, married: true }
 // оператор spread раскладывает соответствующий объект внутри нового объекта , с его помощью можно получить только копию , он не может менять существующие объекты 
 
// console.log(newUser);

// const newUser= { married: true,  age:25, ...user,}; // { married: true, age: 11, name: 'John' }
// console.log(newUser);


// Задачи 

// Task 1 - функция которая взращает объект с нужными свойствами 

// const getProductDetails = () => {
//    const product = {
//       id:33,
//       title:'Twix',
//       inStock: true,
//    }
//    return product;
// };

// console.log(getProductDetails());

// Task 2


// const getWeather = city => {
//    return `It's currently ${city.value} degrees in ${city.name} `;
// };

// console.log(getWeather({name:'Amsterdam', value: 3}));// It's currently 3 degrees in Amsterdam 
// console.log(getWeather({name:'Brazilia', value: 24}));//  It's currently 24 degrees in Brazilia
// console.log(getWeather({name:'Moscow', value: -5}));//  It's currently -5 degrees in Moscow

// Task 3

// const person = {
//   firtsName: 'John',
//   secondName: 'Doe',
//   age: 30
// };

// const incrementAge = person => {
   

    
//     const result = {...person, age:person.age + 1};

//     return result;
// }

// console.log(incrementAge(person)); // { firtsName: 'John', secondName: 'Doe', age: 31 }

// const incrementAge = person => {
//    person.age = person.age +1;
//    return person
     
 
// }
// console.log(incrementAge(person));
// console.log(person);




 // Task 4

//  import {renderTableRow}  from "./application.js"

//  const carbs = {title:'Carbs', value: 17};
//  const protein = {title:'Protein', value: 19};
//  const fat = {title:'Fat', value: 5};
//  let html = '';
//  html += renderTableRow(carbs);
//  html += renderTableRow(protein);
//  html += renderTableRow(fat);

//  const tbody =document.querySelector('#nutrition-table tbody');
//  tbody.insertAdjacentHTML('beforeend', html);

// export const renderTableRow = details => {
//      return `
//       <tr>
//         <td>${details.title}</td>
//         <td>${details.value}g</td>
//       </tr>
//      `
// };


// Task 5 

// import {getIcon, getTemperature, getCountry} from   "./application.js"

// const icon = document.querySelector('#icon');
// const tempreature = document.querySelector('#temperature');
// const country = document.querySelector('#country');

// fetch('https://learn-javascript-demo-default-rtdb.firebaseio.com/weather/amsterdam.json')
// .then(response => response.json())
// .then(data =>{
//   icon.src =getIcon(data);
//   tempreature.textContent = getTemperature(data);
//   country.textContent = getCountry(data);
// })

// .catch(error => console.error(error));

// export const getCountry = data => {
//    console.log(data);
//    return data.location.country;
// };
// export const getIcon = data => {
//     console.log(data);
//     return data.current.weather_icons[0];


//  Task 6

// import {getNextAge}  from './application.js';
// const age = document.querySelector('#your-age')
// const nextAge = document.querySelector('#next-age');

// age.addEventListener('keyup', () => {
//   nextAge.textContent  = getNextAge(age.value)
// })

// export const getNextAge = age => {
//     if (age === '') {
//         return 0;
//     }

   
   
//      return  Number.parseInt(age, 10) + 1
   
// }


// Tesk 7


// import {getDiscription}  from './application.js'

// const input = document.querySelector('#input');
// const output = document.querySelector('#output');

// input.addEventListener('input', (event) =>{
//   output.textContent = getDiscription(event.currentTarget.value);
// });

// export const getDiscription = text => {
//     if (text.length <= 10) {
//         return text
//     }
    
//     else
//         // return  `${text}...`;
//         return  text.substring(0,10) + '...'
    

// }



//  Task 8 Get Email

// import { getEmail } from './application.js';

// const inputEmail = document.querySelector('#input-email');
// const output = document.querySelector('#output');

// inputEmail.addEventListener('input', event =>{
//   let result = getEmail(inputEmail.value);
//   output.textContent = result + ' is your email';
//   console.log(result);

// })

// ==================

// const settings =  {
//   theme: 'Dark',
//   version: '2.4.1',
//   beta:false

// };

// const keys = Object.keys(settings);
// console.log(keys);
// keys.forEach(key => {
//   console.log(settings[key]);
// });





//==========================


// Task - 9 Course Detail 


//  const course = {
//   id: 1,
//   name: 'Learn JavaScript',
//   year: 2022
//  };

// const getCourseDeatail = (course, detail)  => {
  

//    const keys = Object.keys(course);
   
//    for (const key of keys) {
//     if (detail === key) {
//       return `The course ${key} is ${course[key]}`;
//     }
//    }
 

// };


// const getCourseDeatail = (course, detail)  =>  {
//   if(course[detail] === undefined) {
//     return 'Wrong detail'
//   }
//   return `The course ${detail} is   ${course[detail]}`
// };



// console.log(getCourseDeatail({id: 1,name: 'Learn JavaScript',year: 2022},'name' )); // The course name is Learn JavaScript
// console.log(getCourseDeatail({id: 1,name: 'Learn JavaScript',year: 2022},'year' )); // The course year is 2022
// console.log(getCourseDeatail({id: 1,name: 'Learn JavaScript',year: 2022},'id' ));  // The course id is 1
// console.log(getCourseDeatail(course,'name' ));  // The course name is Learn JavaScript



// Task - 10 Count Properties

// const getCountProperties = course  => {
//   const props = Object.keys(course);
//   return props.length
// }

// console.log(getCountProperties({id: 1,name: 'Learn JavaScript',year: 2022}));// 3
// console.log(getCountProperties({})); // 0



// Task - 11 Upper Case Properties

// const getUpperCaseProps =  course =>  {
//     let result = [];
//     const props = Object.keys(course);
//     for(const prop of props) {
//         result.push(prop.toUpperCase());
//     };

//     return result;

    
// };


// const getUpperCaseProps =  course =>  {
    
//   return Object.keys(course).map(prop => prop.toUpperCase()); 
  
    
// };



// console.log(getUpperCaseProps({id: 1,name: 'Learn JavaScript',year: 2022}));  // [ 'ID', 'NAME', 'YEAR' ]

 // Task - 12 Log Values

//  const logValues = course => {
//   const props = Object.keys(course);
//   return console.log(props.join(', '));

//  };

//  logValues({id: 1,name: 'Learn JavaScript',year: 2022})

//  Task - 12  Simple Translation

// const translations = {
//     welcome: {
//         dutch: 'Welkom',
//         french: 'Bienvenue',
//         english: 'Welcome'
//     }
// };

// export default translations;


// import  translations from "./translations.js";


// export const getTranslation = (language) => {
//     console.log(translations);
//     console.log(language);
//      return translations.welcome[language];
// };

// import {getTranslation} from './application.js';

// const dropdown = document.querySelector('#countries');
// const output = document.querySelector('#output');

// dropdown.addEventListener("change", () =>{
//   output.textContent = getTranslation(dropdown.value);
// });



// поиск по id всегда возращает 1 элемент
// const el = document.getElementById('content');
// console.log(el);

// если нам нужна обработка нескольких элементов , подойдет поиск по классу 
// const collection = document.getElementsByClassName('content');
// console.log(collection);

// поиск элемента по тегу 
// const paragraph  = document.getElementsByTagName('paragraph');
// console.log(paragraph);

//поиск всех элемнтов
// const all = document.getElementsByTagName('*')

// поиск по селектору 
// найти элемент с id ul 
// const ul = document.querySelector('#menu');
// console.log(ul);

// const spans = ul.querySelectorAll('.odd > span');
// console.log(spans);

// matches - прежикато  проверяетб удовлетворяет ли el селектору css


// const el = document.querySelector('p');
// el.matches('unknown-closs'); // false
// el.matches('font-weigt');  // true

// closest - тщет ближайший элемент по иерархии , удовлетворя.щий селектору 

// const el = document.querySelector('span');
// const item = el.closest('.row');
// console.log(item.id); // three

//  атрибуиты. когда браузер загрузил HTML код , на его основе строится DOM, во время обработки, каждый тег  становится узлов , атрибуты свойствами этого узла 

// const el =document.querySelector('#aboutPage');
// el.id; // aboutPage
// el.href; // /pages/about

// добавление/удвление класса 

// const el =document.querySelector('#aboutPage');
// el.classList.add('dimple');// добавили класс
// el.classList.remove('simple'); // удвлили класс
// console.log(el);
// el.classList.remove('class'); // добавляет класс если его нет , и удаялет класс если он  есть 

// события 

// const getBoom = () => alert('BooM');

//   обращение через свойства элемента в DOM

// const button = document.getElementById('button');
// button.onclick = () => alert('BooM');

// несколько обработчиков на один элемент 

// const button = document.getElementById('button');

// button.addEventListener('click', ()=>{
//     alert('BooM');
 
    
// });
// добавляем еще один обработчик
// button.addEventListener('click', () =>{alert('Boom2')})

// удаление обработчика 
// button.removeEventListener('click', handler);

// Объект событий

// const button = document.getElementById('button');

// button.addEventListener('click', (e) => {
// // координаты точки , в которой произошел клик 
//   console.log(e.clientX);

//   console.log(e.clientY);
// });

// действия по-умолчанию 

// const el = document.getElementById('myElement');

// el.addEventListener('click', (e)=>{
//     e.preventDefault(); // если этого не сделать , браузер авполнит загрузку новой 
//     alert(e.target.textContent);
// })



//                                           Объекты
 
//  объукты - это тип данных в js  c помощью которого представляют связанный набор данных ю это позвоялет оперировать данными ка единым целым 

// const user = {
//      name: 'John',
//      married: true,
//      age: 25
// };

// доступ к свойствам объекта 
  // точеная натация 
// console.log(user.name);
// console.log(user.married);
// console.log(user.age);

   // c  помощью квадратных скобок

// console.log(user['name']);
// console.log(user['married']);
// console.log(user['age']);

// const rectange = {width: 10, height: 5};


// user.married = false;
// console.log(user.married);
// user.name = 'Marina';
// console.log(user.name);

 // в константе хранится не сам объект , а ссылка на него , это значит что менять  содержимое  оюъекта можно , но заменить сам объект на другой нельзя 

// наполнение объекта


// const course = {};

// course.name = 'JS: Объекты'
// course.description = 'Знакомство с объектами'
// console.log(course);


// удаление объекта 

// const user = {
//     name: 'John',
//     age: 15
// };
// delete user.age;  // удаление объекта - это плохая практика 
// console.log(user);

// объекты как и массивы - ссылочный тип данных 

// const company = {};

// поменять содержимое объекта можно 

// company.name = 'Apple';
// console.log(company);

// но заменить ссылку(заменить сам объект) нельзя 

//  с пмощью переменноых замеить объект (заменить ссылку) можно б это делать нерекомендуется 

//  let company = {}; 


// ссылочная природа влияет и на сравнение . объекты  равны не тогда, когда у них одинаковая структура , а когда это один и тот же объект (как имассивы )

// const company ={name: 'apple'};
// console.log(company === {name: 'apple'}); // false

// const copyOfcompany = company;         // передается ссылка 

// console.log(copyOfcompany === company); // true  
// меняя одно мы меняем и другое 

// company.create = 1994;
// console.log(company);
// console.log(copyOfcompany);

// const user = {
//      name: 'John',
//      lastName: 'Doe',
//      married: true,
//      age: 25
// };


// let propertyName = 'name';
// console.log(user[propertyName]);

// обход свойств объекта 
// for ...in

// const course = {name:'JS React', slug:'js-react'};
// for (const prop in course) {
//      console.log(`course.${prop} = ${course[prop]}`);
//     // console.log(course[prop]);
// }

// оъекты связанные друг с другом , и обращение к св-ву в одном объекте  может приводить  к обращению (неявному) к св-ву  в друом объекте (прототипе)


// более распространенный  способ - обходить ключи Object.keys


// const course = {name:'JS React', slug:'js-react'};
//  let keys = Object.keys(course); // Object.keys позволяет получить массив всех ключей объекта 
//  console.log(keys);
//  for (const key of keys) {
//     console.log(course[key]);
//  }

// Object.entries  - метод, который возвращает сразу  ключи  и значение объекта  т.е  каждый элемент сам будет массивом , содержащий ключ  и соответствующее значение  [key , value]

// const course = {name:'JS React', slug:'js-react'};
// let entries = Object.entries(course);
// console.log(entries); // [ [ 'name', 'JS React' ], [ 'slug', 'js-react' ] ]
// // обходим полученный массив циклом for ...of
// for ( const [key, value] of entries) {
//    console.log(key);
//    console.log(value);
// }


// слияние - операция над объектами , выполняющая их объединение , нужна она там , где необходимо данные одного объекта перенести в другой объект 

 // user в системе 
//    const user ={name:'John', email:'john@mail.com', age:44}
// из формы пригли новые данные 
//    const date ={name:'James', age:45};
//    в результате должно получится  {name:'James', email:'john@mail.com',  age:45}; 
// способ 1 - подойдет когда данных в объекте мало 
// user.name = data.name;
// user.age = data.age;
// способ 2  с помощью слияние (merge)
// Object.assign(user, date);
// console.log(user)
//   если какое=то св-во было  тольок в первом объекте , то оно останется без изменений  // если св-во присутсвует  во втором (и далее) объекте , то оно записывается в первый независимо от того  , было оно там или нет 
 
// клонирование объектов 
// данные из user копируются во вновь созданный объект 

// const user ={name:'John', email:'john@mail.com', age:44}

// const copyOfUser = Object.assign({}, user);
// console.log(copyOfUser); // {name:'John', email:'john@mail.com', age:44}
// console.log(copyOfUser === user); // false изменение в одном не затрагивают изменение в другом 

// spread и создание новых объектов 

// const user ={name:'John', email:'john@mail.com', age:44};
// const data ={name:'James', age:45};
// const copyOfUser = Object.assign({}, user, data);
// console.log(copyOfUser);

// const user = {name:'John',age: 11};

// const newUser= {...user, married: true,  age:25}; //  { name: 'John', age: 25, married: true }
 // оператор spread раскладывает соответствующий объект внутри нового объекта , с его помощью можно получить только копию , он не может менять существующие объекты 
 
// console.log(newUser);

// const newUser= { married: true,  age:25, ...user,}; // { married: true, age: 11, name: 'John' }
// console.log(newUser);


// Задачи 

// Task 1 - функция которая взращает объект с нужными свойствами 

// const getProductDetails = () => {
//    const product = {
//       id:33,
//       title:'Twix',
//       inStock: true,
//    }
//    return product;
// };

// console.log(getProductDetails());

// Task 2


// const getWeather = city => {
//    return `It's currently ${city.value} degrees in ${city.name} `;
// };

// console.log(getWeather({name:'Amsterdam', value: 3}));// It's currently 3 degrees in Amsterdam 
// console.log(getWeather({name:'Brazilia', value: 24}));//  It's currently 24 degrees in Brazilia
// console.log(getWeather({name:'Moscow', value: -5}));//  It's currently -5 degrees in Moscow

// Task 3

// const person = {
//   firtsName: 'John',
//   secondName: 'Doe',
//   age: 30
// };

// const incrementAge = person => {
   

    
//     const result = {...person, age:person.age + 1};

//     return result;
// }

// console.log(incrementAge(person)); // { firtsName: 'John', secondName: 'Doe', age: 31 }

// const incrementAge = person => {
//    person.age = person.age +1;
//    return person
     
 
// }
// console.log(incrementAge(person));
// console.log(person);




 // Task 4

//  import {renderTableRow}  from "./application.js"

//  const carbs = {title:'Carbs', value: 17};
//  const protein = {title:'Protein', value: 19};
//  const fat = {title:'Fat', value: 5};
//  let html = '';
//  html += renderTableRow(carbs);
//  html += renderTableRow(protein);
//  html += renderTableRow(fat);

//  const tbody =document.querySelector('#nutrition-table tbody');
//  tbody.insertAdjacentHTML('beforeend', html);

// export const renderTableRow = details => {
//      return `
//       <tr>
//         <td>${details.title}</td>
//         <td>${details.value}g</td>
//       </tr>
//      `
// };


// Task 5 

// import {getIcon, getTemperature, getCountry} from   "./application.js"

// const icon = document.querySelector('#icon');
// const tempreature = document.querySelector('#temperature');
// const country = document.querySelector('#country');

// fetch('https://learn-javascript-demo-default-rtdb.firebaseio.com/weather/amsterdam.json')
// .then(response => response.json())
// .then(data =>{
//   icon.src =getIcon(data);
//   tempreature.textContent = getTemperature(data);
//   country.textContent = getCountry(data);
// })

// .catch(error => console.error(error));

// export const getCountry = data => {
//    console.log(data);
//    return data.location.country;
// };
// export const getIcon = data => {
//     console.log(data);
//     return data.current.weather_icons[0];


//  Task 6

// import {getNextAge}  from './application.js';
// const age = document.querySelector('#your-age')
// const nextAge = document.querySelector('#next-age');

// age.addEventListener('keyup', () => {
//   nextAge.textContent  = getNextAge(age.value)
// })

// export const getNextAge = age => {
//     if (age === '') {
//         return 0;
//     }

   
   
//      return  Number.parseInt(age, 10) + 1
   
// }


// Tesk 7


// import {getDiscription}  from './application.js'

// const input = document.querySelector('#input');
// const output = document.querySelector('#output');

// input.addEventListener('input', (event) =>{
//   output.textContent = getDiscription(event.currentTarget.value);
// });

// export const getDiscription = text => {
//     if (text.length <= 10) {
//         return text
//     }
    
//     else
//         // return  `${text}...`;
//         return  text.substring(0,10) + '...'
    

// }


//  Task 8 Get Email

// import { getEmail } from './application.js';

// const inputEmail = document.querySelector('#input-email');
// const output = document.querySelector('#output');

// inputEmail.addEventListener('input', event =>{
//   let result = getEmail(inputEmail.value);
//   output.textContent = result + ' is your email';
//   console.log(result);

// })

// ==================

// const settings =  {
//   theme: 'Dark',
//   version: '2.4.1',
//   beta:false

// };

// const keys = Object.keys(settings);
// console.log(keys);
// keys.forEach(key => {
//   console.log(settings[key]);
// });





//==========================


// Task - 9 Course Detail 


//  const course = {
//   id: 1,
//   name: 'Learn JavaScript',
//   year: 2022
//  };

// const getCourseDeatail = (course, detail)  => {
  

//    const keys = Object.keys(course);
   
//    for (const key of keys) {
//     if (detail === key) {
//       return `The course ${key} is ${course[key]}`;
//     }
//    }
 

// };


// const getCourseDeatail = (course, detail)  =>  {
//   if(course[detail] === undefined) {
//     return 'Wrong detail'
//   }
//   return `The course ${detail} is   ${course[detail]}`
// };



// console.log(getCourseDeatail({id: 1,name: 'Learn JavaScript',year: 2022},'name' )); // The course name is Learn JavaScript
// console.log(getCourseDeatail({id: 1,name: 'Learn JavaScript',year: 2022},'year' )); // The course year is 2022
// console.log(getCourseDeatail({id: 1,name: 'Learn JavaScript',year: 2022},'id' ));  // The course id is 1
// console.log(getCourseDeatail(course,'name' ));  // The course name is Learn JavaScript



// Task - 10 Count Properties

// const getCountProperties = course  => {
//   const props = Object.keys(course);
//   return props.length
// }

// console.log(getCountProperties({id: 1,name: 'Learn JavaScript',year: 2022}));// 3
// console.log(getCountProperties({})); // 0



// Task - 11 Upper Case Properties

// const getUpperCaseProps =  course =>  {
//     let result = [];
//     const props = Object.keys(course);
//     for(const prop of props) {
//         result.push(prop.toUpperCase());
//     };

//     return result;

    
// };


// const getUpperCaseProps =  course =>  {
    
//   return Object.keys(course).map(prop => prop.toUpperCase()); 
  
    
// };



// console.log(getUpperCaseProps({id: 1,name: 'Learn JavaScript',year: 2022}));  // [ 'ID', 'NAME', 'YEAR' ]

 // Task - 12 Log Values

//  const logValues = course => {
//   const props = Object.keys(course);
//   return console.log(props.join(', '));

//  };

//  logValues({id: 1,name: 'Learn JavaScript',year: 2022})

//  Task - 12  Simple Translation

// const translations = {
//     welcome: {
//         dutch: 'Welkom',
//         french: 'Bienvenue',
//         english: 'Welcome'
//     }
// };

// export default translations;


// import  translations from "./translations.js";


// export const getTranslation = (language) => {
//     console.log(translations);
//     console.log(language);
//      return translations.welcome[language];
// };

// import {getTranslation} from './application.js';

// const dropdown = document.querySelector('#countries');
// const output = document.querySelector('#output');

// dropdown.addEventListener("change", () =>{
//   output.textContent = getTranslation(dropdown.value);
// });












