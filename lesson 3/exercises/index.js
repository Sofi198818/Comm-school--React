const add = document.querySelector("#add");
const convert = document.querySelector("#convert");
const container = document.querySelector("#input-container");
const sectionTwo = document.querySelector('.section-2');

// Create Element.
add.addEventListener('click', addInput);
convert.addEventListener('click', convertItem);

function addInput(){
   const input = document.createElement('input');
   input.classList.add('input-item');
   container.append(input);
}

// convert item in Json.

function convertItem(){
   const inputs = document.querySelectorAll('.input-item');
   const results = [];
   inputs.forEach((input) => results.push(input.value));
   sectionTwo.append(JSON.stringify(results)); 
}
