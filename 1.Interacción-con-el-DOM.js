//1: Interacción con el DOM

//Dado el siguiente HTML:

//1.1 Basandote en el array siguiente, crea una lista ul > li 
//dinámicamente en el html que imprima cada uno de los paises.
//const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

let countryList = document.createElement("ul");

for (const country of countries) {
    let countryItem = document.createElement("li");
    countryItem.textContent = country;
    countryList.appendChild(countryItem);
}
document.body.appendChild(countryList);

console.log(countries);


//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let deleteElement = document.querySelector(".fn-remove-me");
deleteElement.remove();

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//en el div de html con el atributo data-function="printHere".
//const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

let selectDiv = document.querySelector('[data-function="printHere"]');

let createCarList = document.createElement("ul");

for (const car of cars) {
    let createCarItem = document.createElement("li");
    createCarItem.textContent = car;
    createCarList.appendChild(createCarItem);
}

selectDiv.appendChild(createCarList);

//1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
//h4 para el titulo y otro elemento img para la imagen.
//const countries = [
//	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
//	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
//	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
//	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
//	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
//];

const countriesOne = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (const country of countriesOne) {
    let createCountryItem = document.createElement("div");
    createCountryItem.innerHTML = `<h4>${country.title}</h4><img src=${country.imgUrl} />`;

    document.body.appendChild(createCountryItem);
}

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
//elemento de la lista.

const lastElementButton = document.querySelector("#delete-last-element");
lastElementButton.addEventListener("click", function () {
    const selectDivs = document.querySelectorAll("div");
    selectDivs[selectDivs.length - 1].remove();
});

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
//elementos de las listas que elimine ese mismo elemento del html.

const countriestwo = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];


for (const country of countriestwo) {
    let createCountryItem = document.createElement("div");
    createCountryItem.innerHTML = `<h4>${country.title}</h4><img src=${country.imgUrl} />`;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";

    createCountryItem.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
        createCountryItem.remove();
    });

    document.body.appendChild(createCountryItem);
}