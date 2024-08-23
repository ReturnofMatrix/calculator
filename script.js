
function add(a, b){
    a= parseInt(a)
    b= parseInt(b)
    return a+b;
}

function substract(a, b){
    a= parseInt(a)
    b= parseInt(b)
    return a-b;
}

function divide(a, b){
    a= parseInt(a)
    b= parseInt(b)
    return a/b;
}

function multiply(a, b){
    a= parseInt(a)
    b= parseInt(b)
    return a*b;
}


function operate(a,b,operator){

    switch(operator){
        case '+' :
            return add(a , b);
            break;

        case '-' : 
        return substract(a , b);
            break;

        case '*' :
            return multiply(a , b);
            break;

        case '/' :
            return divide(a , b);
            break;
    }
}

let num1="", num2="", operator="" , display='';

const buttons = document.querySelectorAll("button");

buttons.forEach( button => {
button.addEventListener("click", handleClick );
})

function handleClick (event) {

    const input = document.querySelector("input");
    const operatorb = event.target;
    const operatorClass = operatorb.className;

if(operatorClass == 'clearc'){
    num1="";
    num2="";
    display = "";
    input.value = display;
    return;
} 

if(operatorClass == 'equalc'){
   
    num2 = display.slice(num1.length + 1);
    console.log(num1,num2 , operator);

   switch(operator){

        case '+' : num1 = operate(num1,num2,'+');
        num2 = '';
        operator='';
        input.value = num1;
        return ;
        break;

        case '-' : input.value =  operate(num1,num2,'-');
        return ;
        break;

        case '*' : input.value =   operate(num1,num2,'*');
        return;
        break;

        case '/' : input.value =   operate(num1,num2,'/');
        return;
        break;

   }
}   

if(operatorClass == 'addc'){
        operator='+';
        num1 = display;
}else if(operatorClass == 'substractc'){
        operator='-';
        num1 = display;
}else if(operatorClass == 'multiplyc'){
        operator='*';
        num1 = display;
}else if(operatorClass == 'dividec'){
        operator='/';
        num1 = display;
}else{
  
}

display += operatorb.textContent;
input.value = display; 

}
