// class counter {
//     setValue = () => {
//         this.valueField.textContent = this.value;
//     }

//     increment = () => {
//         this.value += this.step;
//         this.setValue();
//     }
    
//     decrement = () => {
//         this.value -= this.step;
//         this.setValue();
//     }

//     constructor(divPointer, step, initialValue) {
//         this.incremetButton = document.querySelector(divPointer).querySelector('[data-increment]');
//         this.decrementButton = document.querySelector(divPointer).querySelector('[data-decrement]');
//         this.valueField = document.querySelector(divPointer).querySelector('[data-field]');
//         this.step = step;
//         this.value = initialValue;
//         this.setValue();
//         this.incremetButton.onclick = this.increment;
//         this.decrementButton.onclick = this.decrement;
//     }
// }


// new counter('.counter', 2, 2);
// new counter('.counter1', 10, 0);


// let arr = ["Valik", "Maxim", "Oleg", "Maxim", "Maxim"];

// function foo(arr, chageName) {
//     const result = [];
//     arr.forEach(item => {
//         if (item === chageName) {
//             result.push(result[result.length - 1]);
//         }
//         else {
//             result.push(item);
//         }
//     })
//     return result;
// }

// arr = foo(arr, "Maxim");
// console.log(arr);

// Стоврити функцію яка буде перебирати масив обєктів (films),з кожного обєкта потрібно взяти IDs жанрів фільмів та знайти
// їх в іншому єбєкті який буде містити в собі ID та назву жанру відповідну до цего ID.
// Функція повертає стрінгу з назвами фільмів та жанрами до яких цей фільм входить, якщо кількість жанрів більше двох потрібно
//  вивести назву перших двох жанрів і додати надпис 'Others'.
// В результаті маємо отримати:
//
// Films list:
// 1. 'Interceptor: Action, Thriller, Others.'
// 2. 'Fantastic Beasts: The Secrets of Dumbledore: Fantasy, Adventure, Others.'
// 3. 'Last Seen Alive: Action, Thriller.'
// 4. 'Jurassic World Dominion: Science Fiction, Action, Others.'
//
// Все повино бути так як написано в прикладі зверху(заголовок Films list: та кожний рядок повинен бути прономерований)!!!
// Все має бути одною стрінгою!!!

// const films = [{
//         "title": "Interceptor",
//         "genre_ids": [
//             28,
//             53,
//             12,
//             18
//         ],
//     },
//     {
//         "title": "Fantastic Beasts: The Secrets of Dumbledore",
//         "genre_ids": [
//             14,
//             12,
//             28
//         ],
//     },
//     {
//         "title": "Last Seen Alive",
//         "genre_ids": [
//             28,
//             53
//         ],
//     },
//     {
//         "title": "Jurassic World Dominion",
//         "genre_ids": [
//             878,
//             28,
//             12,
//             53
//         ],
//     },
// ];

// const obj = {
//     genres: [{
//         id: 28,
//         name: "Action"
//     }, {
//         id: 12,
//         name: "Adventure"
//     }, {
//         id: 14,
//         name: "Fantasy"
//     }, {
//         id: 878,
//         name: "Science Fiction"
//     }, {
//         id: 53,
//         name: "Thriller"
//     }, {
//         id: 10752,
//         name: "War"
//     }, {
//         id: 37,
//         name: "Western"
//     }]
// }


// function getGanres(films = [], callback) {
//     let string = films.reduce(function (acc, item, index) {
//         return acc + (index + 1) + ". " + "'" + item.title + ': ' + item.genre_ids.reduce((acc2, janre, index) => {
//             if (index <= 1) {
//                 return acc2 + callback(janre) + " ";
//             }
//             else if (index === 2) {
//                 return acc2 + "other";
//             }
//             else {
//                 return acc2;
//             }
//         }, "") + "'/" + "\n";
//     }, "Films list: \n");
//     string = string.split('/').join(" ");
//     return string;
// }

// function findJanre(janre) {
//     const res = obj.genres.find(item => item.id === janre)
//     if (res) {
//         return res.name;
//     }
// }

// console.log(getGanres(films, findJanre));

        

// function myReplace(str, before, after) {
//     const b = before.split('')[0];
//     const a = after.split('')[0];
//     if (b === b.toUpperCase()) {
//         if (a === a.toLowerCase()) {
//             after = after.split('');
//             after[0] = after[0].toUpperCase();
//             after = after.join("");
//         }
//     }
//     else {
//         if (a === a.toUpperCase()) {
//             after = after.split('');
//             after[0] = after[0].toLowerCase();
//             after = after.join("");
//         }
//     }
//     let arr = str.split(" ");
//     arr = arr.map(item => {
//         if (item === before) {
//             return after;
//         }
//         return item;
//     })
//     str = arr.join(" ");
//     return str;
// }
// myReplace("I think we should look up there", "up", "Down")


// function pairElement(str) {
//     const arr = str.split("");
//     str = [];
//     arr.forEach(item => {
//         switch (item){
//             case "A":
//                 str.push([item, "T"]);
//                 break;
//             case "T":
//                 str.push([item, "A"]);
//                 break;
//             case "C":
//                 str.push([item, "G"]);
//                 break;
//             case "G":
//                 str.push([item, "C"]);
//                 break;
//         }
//     });
//     return str;
// }


// console.log(pairElement("GCG"));

// function fearNotLetter(str) {
//     let alfabet = "abcdefghijklmnopqrstuvwxyz";
//     alfabet = alfabet.split("");
//     const arr = str.split('');
//     const start = alfabet.findIndex(item => item === arr[0]);
//     str = undefined;
//     for (let i = start; i < start + arr.length; i++){
//         if (alfabet[i] !== arr[i - start]) {
//             str = alfabet[i];
//             break;
//         }
//     }
//   return str;
// }

// console.log(fearNotLetter("abce"));