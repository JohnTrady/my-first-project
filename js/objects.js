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