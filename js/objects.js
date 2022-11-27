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

