
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
    const button = event.target;
    const buttonId = button.id;

switch(buttonId){
    case 'zero': display += '0';
        if(operator != ''){
            num2 += '0'
        }
        break;

    case 'one' : display += '1';
        if(operator != ''){
            num2 += '1'
        }
        break;

    case 'two' : display += '2';
        if(operator != ''){
            num2 += '2'
        }
        break;

    case 'three' : display += '3';
        if(operator != ''){
            num2 += '3'
        }
        break;

    case 'four' : display += '4';
        if(operator != ''){
            num2 += '4'
        }
        break;

    case 'five' : display += '5';
        if(operator != ''){
            num2 += '5'
        }
        break;

    case 'six' : display += '6';
        if(operator != ''){
            num2 += '6'
        }
        break;

    case 'seven' : display += '7';
        if(operator != ''){
            num2 += '7'
        }
        break;

    case 'eight' : display += '8';
        if(operator != ''){
            num2 += '8'
        }
        break;

    case 'nine' : display += '9';
        if(operator != ''){
            num2 += '9'
        }
        break;

    case 'negative' :
        if(num2 != ''){
            num2 = -num2
        }else{
        num1 = -num1;
        console.log(num1);
        }

    case 'add' : 
        if(num2 != ''){
            num1 = operate(num1,num2,operator);
            num2='';
            operator = '+';
            display = num1+'+';
        }else{
        num1 = display;
        display += '+';
        operator = '+';
        }
        break;
    
    case 'substract': 
        if(num2 != ''){
            num1 = operate(num1,num2,operator);
            num2='';
            operator = '-';
            display = num1+'-';
        }else{
        num1 = display;
        display += '-';
        operator = '-';
        }
        break;

    case 'divide' :  
        if(num2 != ''){
            num1 = operate(num1,num2,operator);
            num2='';
            operator = '/';
            display = num1+'/';
        }else{
        num1 = display;
        display += '/';
        operator = '/';
        }
        break;

    case 'multiply': 
        if(num2 != ''){
            num1 = operate(num1,num2,operator);
            num2='';
            operator = '*';
            display = num1+'*';
        }else{
        num1 = display;
        display += '*';
        operator = '*';
        }
        break;

    case 'clear' :
       num1 =' ';
       num2 = '';
       display = '';
       operator = '';
        break;

    case 'equal' :
        display = operate(num1,num2,operator);
        num2 = '';
        operator = '';
        break;  
}

input.value = display;

}
