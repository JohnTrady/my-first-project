"use strict"

// console.log("Hello!");)

// SyntaxError: Unexpected token ')'
//     at Object.compileFunction (node:vm:360:18)
//     at wrapSafe (node:internal/modules/cjs/loader:1055:15)
//     at Module._compile (node:internal/modules/cjs/loader:1090:27)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
//     at Module.load (node:internal/modules/cjs/loader:1004:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:839:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:17:47


// percentCalculator (23, 5);

// ReferenceError: percentCalculator is not defined
//     at Object.<anonymous> (C:\Users\John Trady\Documents\my-first-project\js\errors.js:6:1)
//     at Module._compile (node:internal/modules/cjs/loader:1126:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
//     at Module.load (node:internal/modules/cjs/loader:1004:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:839:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:17:47


// stuck trace - последовательность  вызовов функций , которая привела к ошибке.

// const length = 12;
// const num = length(54);

// TypeError (ошибка типизации): length is not a function
//     at Object.<anonymous> (C:\Users\John Trady\Documents\my-first-project\js\errors.js:31:13)
//     at Module._compile (node:internal/modules/cjs/loader:1126:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
//     at Module.load (node:internal/modules/cjs/loader:1004:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:839:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:17:47

// логическая ошибка 
//  напишем функцию которая конвертирует градусы по Фаренгейту в грудусы по Цельсию
const fahrenheitToCelSius = (fahr) => {
    return (fahr - 32) * 5 / 9;
 };

console.log(fahrenheitToCelSius(50));