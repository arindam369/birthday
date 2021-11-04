const button = document.getElementById("btn");
const bg = document.getElementById("bg");

function changeButtonContent(){
    button.textContent = "Let Us Enjoy the View of Fireworks together 🥰 ...";
}
function vanishButton(){
    button.hidden="true";    
}
function openBombingPage(){
    location.replace("./../fireworks/bombing.html");
}

button.addEventListener("click",function(){
    setTimeout(changeButtonContent,2000);
    setTimeout(vanishButton,6000);
    setTimeout(openBombingPage,7000);
})
