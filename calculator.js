
let MS = '';     //variable to store valid input value
let expression = '';    //variable to store input string
// Function that display value of the button being pressed in the input field 
function display(val) {
    document.getElementById("input").value += val
}

// Function that returns true if input is a valid number and not an expression
function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

// Function that returns true if input is not empty
function checkEmpty() {
    if (document.getElementById('input').value != ''){
        return true;
    }
    document.getElementById("input").value = 'Enter a valid value first!';
    setTimeout(function () {
        document.getElementById("input").value = '';
    }, 1000);
}

function checkInput(val) {
    if (isNumeric(val)) {
        return true;
    }
    expression = val
    document.getElementById("input").value = 'Enter a numerical value!';
    setTimeout(function () {
        document.getElementById("input").value = expression;
    }, 1000);
}

// Function that stores the valid input
function storeResult(val) {
    if (checkInput(val)) {
        MS = Number(val);
        expression = val
        document.getElementById("input").value = 'Value Stored!';
        setTimeout(function () {
            document.getElementById("input").value = expression;
        }, 1000);
    }
}

// Function that adds the current result into previously stored result
function addInResult(val) {
    if (checkInput(val)) {
        MS += Number(val);
        expression = val
        document.getElementById("input").value = 'Value added to stored result!';
        setTimeout(function () {
            document.getElementById("input").value = expression;
        }, 1000);
    }

}

// Function that clears the stored value and set it to '0'
function clearStored() {
    expression = document.getElementById("input").value;
    MS = '';
    document.getElementById("input").value = 'Stored value cleared!';
    setTimeout(function () {
        document.getElementById("input").value = expression;
    }, 800);
}

// Function that evaluates the equation and display result
function solve() {
    expression = document.getElementById("input").value
    try {
        let result = eval(expression)
        document.getElementById("input").value = result
    }
    catch {
        document.getElementById("input").value = 'Invalid Expression to evaluate!';
        setTimeout(function () {
            document.getElementById("input").value = expression;
        }, 1000);
    }
}

function plusminus() {
    expression = document.getElementById('input').value;
    let firstTwoChars = expression.slice(0, 2);
    let newVal = expression.slice(2);
    if (checkEmpty()){
        if (firstTwoChars === '-(') {
            document.getElementById('input').value = '+(' + newVal;
        } else if (firstTwoChars === '+(') {
            document.getElementById('input').value = '-(' + newVal;
        } else {
            document.getElementById('input').value = '-(' + expression + ')';
        }
    }
}

function inverse() {
    if (checkEmpty()){
        document.getElementById('input').value = '1/(' + document.getElementById('input').value + ')';
    }
}

function dot(){
    expression = document.getElementById('input').value;
    let lastchar = expression.slice(-1);
    if (isNumeric(lastchar) || lastchar != ''){
        display('.0');
    }
    else {
        display('0.0');
    }
}

