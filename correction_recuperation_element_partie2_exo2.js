//1
let exo1 = document.getElementsByTagName('h3');
console.log(exo1[0]);

//2
console.log(exo1[1]);

//3
console.log(exo1[1].previousElementSibling);

//4
let exo4 = document.getElementsByTagName('p')[1].nextElementSibling;
console.log(exo4);

//5
let exo5 = document.getElementsByTagName('ul');
console.log(exo5[0]);

//6
let exo6 = document.getElementsByTagName('ul')[0].parentElement.firstElementChild;
console.log(exo6);

//7
let exo7 = document.getElementsByTagName('li')[4];
console.log(exo7);

//8
let exo8 = document.getElementsByTagName('p')[4];
console.log(exo8);

//9
let exo9 = document.getElementsByTagName('span')[1].parentElement.nextElementSibling;
console.log(exo9);

//10
let exo10 = document.getElementsByTagName('b')[2].parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild;
console.log(exo10);

//11
let exo11 = document.querySelector('p.grandParagraphe');
console.log(exo11);

//12
let exo12 = document.querySelectorAll('li');
exo12.forEach(element => {
    console.log(element);
});

// getElement => HTMLcollection => Array.from(HTMLcollection) => foreach

// querySelectorAll => NodeList => foreach