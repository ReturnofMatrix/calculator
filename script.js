
function add(a, b){
    a= parseFloat(a)
    b= parseFloat(b)
    return (a+b)  ;
}

function substract(a, b){
    a= parseFloat(a)
    b= parseFloat(b)
    return (a-b)  ;
}

function divide(a, b){
    if(b == '0'){
        return "Can't divide by Zero !"
    }
    a= parseFloat(a)
    b= parseFloat(b)
    return (a/b).toFixed(2)  ;
}

function multiply(a, b){
    a= parseFloat(a)
    b= parseFloat(b)
    return (a*b);
}


function operate(a,b,operator){

    if(b == ''){
        return a;
    }

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
    case 'zero':
        if(operator != ''){
            num2 += '0'
        }else{
            num1 = '0'
        }
        break;

    case 'one' : 
        if(operator != ''){
            num2 += '1'
        }else{
            num1 += '1'
        }
        break;

    case 'two' : 
        if(operator != ''){
            num2 += '2'
        }else{
            num1 += '2';
        }
        break;

    case 'three' : 
        if(operator != ''){
            num2 += '3'
        }else{
            num1 += '3';
        }
        break;

    case 'four' : 
        if(operator != ''){
            num2 += '4'
        }else{
            num1 += '4';
        }
        break;

    case 'five' :
        if(operator != ''){
            num2 += '5'
        }else{
            num1 += '5';
        }
        break;

    case 'six' : 
        if(operator != ''){
            num2 += '6'
        }else{
            num1 += '6';
        }
        break;

    case 'seven' : 
        if(operator != ''){
            num2 += '7'
        }else{
            num1 += '7';
        }
        break;

    case 'eight' : 
        if(operator != ''){
            num2 += '8'
        }else{
            num1 += '8';
        }
        break;

    case 'nine' :
        if(operator != ''){
            num2 += '9'
        }else{
            num1 += '9';
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
        if(operator != ''){
            num1 = operate(num1,num2,operator);
            num2='';
            operator = '+';
        }else{
        operator = '+';
        }
        break;
    
    case 'substract': 
        if(num2 != ''){
            num1 = operate(num1,num2,operator);
            num2='';
            operator = '-';
        }else{
        operator = '-';
        }
        break;

    case 'divide' :  
        if(num2 != ''){
            num1 = operate(num1,num2,operator);
            num2='';
            operator = '/';
        }else{
        operator = '/';
        }
        break;

    case 'multiply': 
        if(num2 != ''){
            num1 = operate(num1,num2,operator);
            num2='';
            operator = '*';
        }else{
        operator = '*';
        }
        break;

    case 'clear' :
       num1 = '';
       num2 = '';
       display = '';
       operator = '';
        break;

    case 'equal' :
        if(num1 == ''){
            return ;
        }else{
        num1 = operate(num1,num2,operator);
        num2 = '';
        operator = '';
        }
        break;  
}

display = num1 + operator + num2 ;
input.value = display;

}
