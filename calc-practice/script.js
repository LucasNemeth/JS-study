//Stuff we need:
// a number key(0–9)
// an operator key(+, -, ×, ÷)
// the decimal key
// the equals key
// the clear key

//we must listen for a key press and determine what kind of key was pressed

const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calc-keys');

keys.addEventListener('click', e =>{
    if (e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        if (!action) {
            console.log("hey are ya working?")
        } else if(
            action === "add" ||
            action === "subtract" ||
            action === "divide" ||
            action === "multiply"
        ){
            console.log("I can do math")
        } else if(action === "decimal"){
            console.log("dot dot dot")
        } else if (action === "calculate"){
            console.log("the great equalizer")
        } else if (action ==="clear"){
            console.log("byebye")
        }
    }
});


