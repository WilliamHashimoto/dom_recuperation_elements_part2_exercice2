//1
let exo1 = document.getElementsByTagName('div')[0].children[0];
console.log(exo1);

//2
let exo2 = document.getElementsByTagName('h3')[1];
console.log(exo2);

//3
let exo3 = exo2.previousElementSibling;
console.log(exo3);

//4
let exo4 = exo2.nextElementSibling;
console.log(exo4);

//5
let exo5 = document.getElementsByTagName('li')[0].parentElement;
console.log(exo5);

//6
let exo6 = document.getElementsByTagName('ul')[0].parentElement.firstElementChild;
console.log(exo6);

//7
let exo7 = document.getElementsByTagName('li')[3].nextElementSibling;
console.log(exo7);

//8
let exo8 = document.getElementsByTagName('div')[0].getElementsByTagName('p')[3].nextElementSibling.nextElementSibling;
console.log(exo8);

//9
let exo9 = document.getElementsByTagName('span')[1].parentElement.nextElementSibling.firstElementChild;
console.log(exo9);

//10
let exo10 = exo9.children;
let exo10bis = exo10[0].parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild;
console.log(exo10bis);

// 11
let exo11 = document.querySelector(".grandParagraphe");
console.log(exo11);

//12
let exo12 = document.querySelectorAll("li");
Array.from(exo12).forEach(e => {
    console.log(e);
})