let display = document.getElementById("input");
let output = document.querySelector('#run');
let buttons = document.querySelectorAll('.button');
let clear = document.getElementById('clear');
let removeNum = document.querySelector('#remove');

/*FUNCTIONS*/
//It displays the numbers in the input tag
function displayNum(num){
    display.value +=num;
}

//it clears the number in the input tag
function clearNum(){
    display.value='';
}
// it calculate the value and show the result in the input tag
function calculate(){
    try{display.value = eval(display.value)
    }
    catch(error){
        display.value ="Error!! Try again";
    }
}

//it removes the last number in the input tag
function removeLastNum(){
    let str = display.value;
    let newStr;
    if(str!== ""){
        newStr = str.slice(0,-1);
        display.value = newStr;
    }
}

//EVENT LISTENERS
output.addEventListener('click',calculate);
clear.addEventListener('click',clearNum);
removeNum.addEventListener('click',removeLastNum);