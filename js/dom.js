'use strict';

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
//     e.preventDefault(); // если этого не сделать , браузер авполнит загрузку новой страницы
//     alert(e.target.textContent);
// })








