

//1. on click of number keys. show that number in the display
// const display = document.querySelector('.calc-display');


//Let's try another script, cuz this above one ain't really working
let input = document.querySelector('.calc-display'),
    number = document.querySelectorAll(".num"),
    operator = document.querySelectorAll(".operator"),
    result = document.querySelector(".equal"),
    clear = document.querySelector(".is-clear"),
    // display = document.querySelector('.calc-display'),
    resultDisplayed = false;

for (let i = 0; i < number.length ; i++){
    number[i].addEventListener("click", function(e){
        // e.preventDefault();
        //stores current input string and last character in variables
        let currentString = input.innerHTML;
        let lastChar = currentString[currentString.length - 1];

        //if result isn't displaying, just keep adding
        if(resultDisplayed === false){
            console.log("1")
            input.innerHTML += e.target.innerHTML;
        } else if (resultDisplayed === true && lastChar === "+"  || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
        //if result is currently displayed and pressed a number
        //clear the input string and add the new input to start new operation
            console.log("2")
            resultDisplayed = false;
            input.innerHTML += e.target.innerHTML;
        } else {
        //if result is currently displayed and user pressed a number
        //we need to clear the input string and add the new input to start the new operation
            console.log("3")
            resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += e.target.innerHTML;
        }
    });
}

//click handlers to number buttons
for(let i = 0; i < operator.length; i++){
    operator[i].addEventListener("click", function(e){

        //storing current input string and last char in var
        let currentString = input.innerHTML;
        let lastChar = currentString[currentString.length - 1];

        //if last character entered is operator, replace with currently pressed one
        if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
            let newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML; 
            input.innerHTML = newString;
        } else if (currentString.length == 0){
            // if first key pressed is an operator don't do anything
            console.log("do something else dawg")
        } else {
            input.innerHTML += e.target.innerHTML
        }
    });
}

//clicking 'equal' button
result.addEventListener("click", function(){

    let inputString = input.innerHTML;

    //forming an array of numbers
    //  /g is a global modifier. targets all instances .
    let numbers = inputString.split(/\+|\-|\×|\÷/g);

    //forming an array of operators
    let operators = inputString.replace(/[0-9]|\./g, "").split("");

    console.log(inputString);
    console.log(operators);
    console.log(numbers);
    console.log("lololololololo");

    let divide = operators.indexOf("÷");
    while(divide != -1){
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf("÷");
    }

    let multiply = operators.indexOf("×");
    while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("×");
    }

    let subtract = operators.indexOf("-");
    while (subtract != -1){
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf("-");
    }

    let add = operators.indexOf("+");
    while (add != -1) {
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operators.splice(add, 1);
        add = operators.indexOf("+");
    }

    input.innerHTML = numbers[0];

    resultDisplayed = true;

    clear.addEventListener("click", function(){
        input.innerHTML = "";
    })
})