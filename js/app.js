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
