'use strict'

//  Task 4

// export const renderTableRow = details => {
//      return `
//       <tr>
//         <td>${details.title}</td>
//         <td>${details.value}g</td>
//       </tr>
//      `
// };


//  Task 5

// export const getCountry = data => {
//    console.log(data);
//    return data.location.country;
// };
// export const getIcon = data => {
//     console.log(data);
//     return data.current.weather_icons[0];

    

// };

// export const getTemperature = data => {
//     console.log(data);
//     return data.current.temperature;
    
// };

// Task 6  


// export const getNextAge = age => {
//     if (age === '') {
//         return 0;
//     }

   
   
//      return  Number.parseInt(age, 10) + 1
   
// }



// Tesk 7 

// export const getDiscription = text => {
//     if (text.length <= 10) {
//         return text
//     }
    
//     else
//         // return  `${text}...`;
//         return  text.substring(0,10) + '...'
    

// }



//  Task 8 Get Email


import  translations from "./translations.js";


export const getTranslation = (language) => {
    console.log(translations);
    console.log(language);
     return translations.welcome[language];
};


