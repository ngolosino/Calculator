function addNumbers(num1, num2){
    return num1 + num2;
}

function subtractNumbers(num1, num2){
    return num1 - num2;
}

function multiplyNumbers(num1, num2){
    return num1 * num2;
}

function divideNumbers(num1, num2){
    return num1 / num2;
}

function operate(operation, num1, num2){
    if(operation == "+")
        return addNumbers(num1, num2);
    else if(operation == "-")
        return subtractNumbers(num1, num2);
    else if(operation == "*")
        return multiplyNumbers(num1, num2);
    else if(operation == "/")
        return divideNumbers(num1, num2);
}