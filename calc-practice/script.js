//Stuff we need:
// a number key(0–9)
// an operator key(+, -, ×, ÷)
// the decimal key
// the equals key
// the clear key

//we must listen for a key press and determine what kind of key was pressed

const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calc-keys');
const display = document.querySelector('.calc-display');

keys.addEventListener('click', e =>{
    if (e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent =key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;
        

        if (!action) {
            if (displayedNum === '0' || previousKeyType ==="operator") {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
            // console.log("hey are ya working?")
        } if(
            action === "add" ||
            action === "subtract" ||
            action === "divide" ||
            action === "multiply"
        )
        
        {
            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator';
        //if user clicks the decimal
        }
        {
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action
        }
        if(action === "decimal"){
            display.textContent = displayedNum + ".";
        }  if (action === "calculate"){
            const firstValue= calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum

            

            const calculate = (n1, operator, n2) => {
                let result = '';

                if (operator === 'add') {
                    result = parseFloat(n1) + parseFloat(n2);
                    console.log("hi", result)
                } else if (operator === 'subtract') {
                    result = parseFloat(n1) - parseFloat(n2);
                } else if (operator === 'multiply') {
                    result = parseFloat(n1) * parseFloat(n2);
                } else if (operator === 'divide') {
                    result = parseFloat(n1) / parseFloat(n2)
                }
                console.log(result)
                return result
            }
            display.textContent = calculate(firstValue, operator, secondValue)
        } if (action ==="clear"){
            display.textContent = "0"
            // console.log("byebye")
        }
        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove(".is-depressed"));
        
        // calculate()

        //having it so we replace the placeholder display number with the number keys we hit
        // if(!action){
        //     if (displayedNum === '0'){
        //         display.textContent = keyContent;
        //     } else {
        //         display.textContent = displayedNum + keyContent;
        //     }
        // }
    }
});

//1. on click of number keys. show that number in the display
// const display = document.querySelector('.calc-display');


//Let's try another script, cuz this above one ain't really working
// (function() {
//     console.log("can you hear me?")
//     "use strict";

//     //a way for us to get us elements quick
//     let el = function(element) {
//         if (element.charAt(0) === "#")
//         { 
//             //if it passed an ID
//             return document.querySelector(element);
//             //returns a single element
//         } 

//         return document.querySelectorAll(element);
//         //otherwise,  returns the nodelist
//     };

//     const display = el(".display"),
//     equals = el(".equal"),
//     nums = el(".num"),
//     ops= el(".operator"),
//     theNum = "",
//     oldNum = "",
//     resultNum = "",
//     operator = "";

//     //when number is clicked, get the current number selected.
//     const setNum = function(){
//         if (resultNum){
//             theNum = this.getAttribute("data-num");
//             resultNum = "";
//         } else {
//             theNum += this.getAttribute("data-num");
//         }
//         display.innerHTML = theNum;
//     };
//     // when the operator is clicked, pass the number to oldNum  and save the operator
//     const moveNum = function(){
//         oldNum = theNum;
//         theNum = "";
//         operator = this.getAttribute("data-ops");
//         equals.setAttribute("data-result", "");  // reset the result in attr
//     };

//     const displayNum = function(){
//         oldNum = parseFloat(oldNum);
//         theNum = parseFloat(theNum);

//         switch(operator) {
//             case "plus": resultNum = oldNum + theNum;
//             break;
            
//             case "minus": 
//             resultNum = oldNum - theNum;
//             break;

//             case "times":
//             resultNum = oldNum * theNum;
//             break; 

//             case "divided by":
//             resultNum = oldNum / theNum;
//             break;

//             //if equal is pressed w/o an op, keep number and continue
//             default:
//                 resultNum = theNum;
//         }
//         //if NaN or infinity is returned
//         if(!isFinite(resultNum)){
//             if(isNaN(resultNum)){
//                 resultNum = "you broke it, y'dangus!";
//             } else {
//                 //if result is infinity
//                 resultNum="OH NOOOO";

//                 // el('#calculator').classList.add("broken"); //break calculator

//                 // el("#reset").classList.add("show");
//             }
//         }

//         //now to display the results
//         display.innerHTML = resultNum;
//         equals.setAttribute('data-result', resultNum);

//         oldNum = 0;
//         theNum = resultNum;
//     };
//     const clearAll = function(){
//         oldNum = "";
//         theNum = "";
//         display.innerHTML = "0";
//         equals.setAttribute("data-result",resultNum);
//     };

//     //click evento!
//     for(let i = 0, l = nums.length; i < l; i++){
//         nums[i].onclick = setNum;
//     }

//     for (let i = 0, l = ops.length; i < l; i++){
//         ops[i].onclick = moveNum;
//     }
// }());