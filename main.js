var arafat = 32;

console.log(++arafat);


function add() {
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    let sum = parseInt(num1) + parseInt(num2);
    document.getElementById('demo').innerHTML = sum;
}


let counter = document.getElementById('counterNumber');
let btnDecrise = document.getElementById('button__decrise');
let btnIncrise = document.getElementById('button__incrise');

let counterValue = Number(counter.innerText);

let num1 = 0;

function decriseFunction(){
    num1--;
    counter.innerHTML= num1;
}
btnDecrise.onclick = decriseFunction;

function incriseFunction(){
    num1++;
    counter.innerHTML = num1;
}
btnIncrise.onclick = incriseFunction;



let atlast = document.getElementById('atlast');
function atlastFunction(){
    let autoCount = 9 * 4;
    
    atlast.innerHTML = autoCount;
}
atlastFunction();







function myFunction() {
    var sds = parseInt(document.getElementById('sd').value) * 400;

    document.getElementById("p").innerHTML = "Your Total Price is: " + sds;
}

document.getElementById("ps").onclick = function () { myFunction() };

let addNumberInput = document.getElementById('sd');
function addNumber() {
 
    addNumberInput.value = parseInt(addNumberInput.value) + 1;

}
document.getElementById("add").onclick = function () { addNumber() };


function subNumber() {
    let subNumberInput = document.getElementById('sd');
    subNumberInput.value = parseInt(subNumberInput.value) - 1;

}
document.getElementById("sub").onclick = function () { subNumber() };



$(document).keydown(function(e){ 
    if(e.which === 123){ 
 
       return false; 
 
    } 
 
}); 
