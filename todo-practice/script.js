// Create a "close" button and append it to each list item
$(function() {
  closeBtn()
});

const myNodeList = document.getElementsByTagName("LI");
let i;

closeBtn = () =>{
    //target all nodes with a class of close
    // $('.close').remove();

    for (i = 0; i < myNodeList.length; i++){
        let span = document.createElement("span");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        // console.log(myNodeList[i])
        span.appendChild(txt);
        // myNodeList[i].appendChild(span);
        if (myNodeList[i].childNodes.length <= 1){
            myNodeList[i].appendChild(span);
        }
    }
    
    for(i = 0; i < $(".close").length; i++){
        $('.close')[i].onclick = function(){
            let div = this.parentElement;
            $(div).remove();
        }
    }
}

// Add a "checked" symbol when clicking on a list item
function completeToDoItem(){
    $(this).toggleClass("checked");
}

let list = document.querySelector('ul');
// list.on('click', function(){
//     $(this).children('li').toggleClass("checked");
// });
// list.on('click', $('li'), completeToDoItem());
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
newElement= () => {
    let li = document.createElement('li');
    const inputValue = $('#my-input').val();
    let inputText = document.createTextNode(inputValue);
    li.appendChild(inputText);
    if (inputValue === ''){
        alert ("you must write something");
    }else{
        document.getElementById("my-ul").appendChild(li);
    }

    closeBtn(); 
    $("#my-input").val("");
}
