//Stuff we need:
// a number key(0–9)
// an operator key(+, -, ×, ÷)
// the decimal key
// the equals key
// the clear key

//we must listen for a key press and determine what kind of key was pressed

// const calculator = document.querySelector('.calculator');
// const keys = document.querySelector('.calc-keys');
// const display = document.querySelector('.calc-display');

// keys.addEventListener('click', e =>{
//     if (e.target.matches('button')){
//         const key = e.target;
//         const action = key.dataset.action;
//         const keyContent =key.textContent;
//         const displayedNum = display.textContent;
//         const previousKeyType = calculator.dataset.previousKeyType;
        

//         if (!action) {
//             if (displayedNum === '0' || previousKeyType ==="operator") {
//                 display.textContent = keyContent;
//             } else {
//                 display.textContent = displayedNum + keyContent;
//             }
//             // console.log("hey are ya working?")
//         } if(
//             action === "add" ||
//             action === "subtract" ||
//             action === "divide" ||
//             action === "multiply"
//         )
        
//         {
//             key.classList.add('is-depressed');
//             calculator.dataset.previousKeyType = 'operator';
//         //if user clicks the decimal
//         }
//         {
//             calculator.dataset.firstValue = displayedNum;
//             calculator.dataset.operator = action
//         }
//         if(action === "decimal"){
//             display.textContent = displayedNum + ".";
//         }  if (action === "calculate"){
//             const firstValue= calculator.dataset.firstValue;
//             const operator = calculator.dataset.operator;
//             const secondValue = displayedNum

            

//             const calculate = (n1, operator, n2) => {
//                 let result = '';

//                 if (operator === 'add') {
//                     result = parseFloat(n1) + parseFloat(n2);
//                     console.log("hi", result)
//                 } else if (operator === 'subtract') {
//                     result = parseFloat(n1) - parseFloat(n2);
//                 } else if (operator === 'multiply') {
//                     result = parseFloat(n1) * parseFloat(n2);
//                 } else if (operator === 'divide') {
//                     result = parseFloat(n1) / parseFloat(n2)
//                 }
//                 console.log(result)
//                 return result
//             }
//             display.textContent = calculate(firstValue, operator, secondValue)
//         } if (action ==="clear"){
//             display.textContent = "0"
//             // console.log("byebye")
//         }
//         Array.from(key.parentNode.children)
//             .forEach(k => k.classList.remove(".is-depressed"));
        
//         // calculate()

//         //having it so we replace the placeholder display number with the number keys we hit
//         // if(!action){
//         //     if (displayedNum === '0'){
//         //         display.textContent = keyContent;
//         //     } else {
//         //         display.textContent = displayedNum + keyContent;
//         //     }
//         // }
//     }
// });

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
        } else if (resultDisplayed === true && lastChar === "+"  || lastChar === "-" || lastChar === "&times" || lastChar === "÷") {
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
        if (lastChar === "+" || lastChar === "-" || lastChar === "&times" || lastChar === "÷") {
            let newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML; 
            input.innerHTML = newString;
        } else if (currentString.length == 0){
            // if first key pressed is an operator don't do anything
            console.log("do something else dawg")
        } else {
            input.innerHTML += e.target.innerHTML
        }
    })
}