const form = document.querySelector(".search-submit");
const input = document.getElementById("search");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
const apiKey = "0af10bdda89c7e7aa6ec2e54ba85bf2a";

form.addEventListener("submit", event =>{
    event.preventDefault();
    const inputVal = input.value;
    const listItems = list.querySelectorAll(".ajax-section .city");
    const listItemsArray = Array.from(listItems);
    function showInfo(){
        const showElement = document.getElementById("city");
        showElement.classList.remove(".hidden")   
    };
    showInfo();
    if(listItemsArray.length > 0 ){
        const filteredArray = listItemsArray.filter(el => {
            let content = "";

            if (inputVal.includes(",")){
                if( inputVal.split(",")
                [1].length > 2){
                    inputVal=inputVal.split(",")[0];
                    content=el.querySelector(".city-name span")
                    .textContent.toLowerCase();
                } else {
                    content = el.querySelector(".city-name").dataset.name.toLowerCase();
                }
            } else {
                content = el.querySelector(".city-name span").textContent.toLowerCase();
            }
            return content == inputVal.toLowerCase();
        });
        if (filteredArray.length > 0) {
            msg.textContent = `You already know the weather for ${
                filteredArray[0].querySelector(".city-name span").textContent
                } ...please be specific by providing the country code as well 😉`;

            form.reset();
            input.focus();
            return;
            }
    }
    
    console.log(inputVal)
    // const celsius = (Math.round(parseFloat(w.main.temp) - 273.15));
    // const fahrenheit = (Math.round(((parseFloat(w.main.temp) - 273.15) * 1.8) + 32));
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&APPID=${apiKey}`;
    fetch(url)
        .then(response=>response.json())
        .then(data =>{
            const { main, name, sys, weather} = data;
            const icon = `https://openweathermap.org/img/wn/${
                weather[0]["icon"]
        }.png`;
            const celsius = (Math.round(parseFloat(main.temp) - 273.15));
            console.log(celsius)
            const fahrenheit = (Math.round(((parseFloat(main.temp) - 273.15) * 1.8) + 32));
            const li = document.createElement('li');
                li.classList.add("city");
                const markup = `
                <h2 class="city-name" data-name="${name},${sys.country} ">
                <span>${name}</span>
                <sup>${sys.country}</sup>
                
                </h2>
                <button href="#" class="remove-button" onclick="remove(this)"><i class="fas fa-times"></i></button>
                <div class="city-temp">${celsius}
                <sup>°C /</sup>${fahrenheit}<sup>°F</sup></div> 
                <figure>
                    <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
                    <figcaption>${weather[0]["description"]}</figcaption>
                </figure>`;

                li.innerHTML = markup;
                list.appendChild(li);
            console.log(data)
        }
        )
        
        .catch(()=>{
            msg.textContent="Please search for a valid city";
        });

        msg.textContent="";
        form.reset();
        input.focus();


});

function remove(link) { 
    link.parentNode.parentNode.removeChild(link.parentNode);
}



