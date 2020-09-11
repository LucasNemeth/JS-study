const form = document.querySelector(".search-submit");
const input = document.getElementById("search");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
const apiKey = "0af10bdda89c7e7aa6ec2e54ba85bf2a";

form.addEventListener("submit", event =>{
    event.preventDefault();
    const inputVal = input.value;
    console.log(inputVal)

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&APPID=${apiKey}`;
    fetch(url)
        .then(response=>response.json())
        .then(data =>{
            console.log(data)
        })
        .catch(()=>{
            MSGesture.textContent="Please search for a valid city";
        });
});




