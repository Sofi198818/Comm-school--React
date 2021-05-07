// hide and show image
const toggleImage = document.getElementById('toggleImage');
const img = document.getElementById('vader');

toggleImage.addEventListener('click',()=> {img.classList.toggle('hide')});

// Math operation.
const Equal = document.getElementById('equal');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');

Equal.addEventListener('click',()=>{
    const answer = Number(num1.value) + Number(num2.value);
    result.innerText = answer;
})


