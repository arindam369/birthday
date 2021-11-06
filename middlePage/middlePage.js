const bg = document.getElementById("bg");
const messageCard = document.getElementById("messageCard");
const button = document.getElementById("btn");
const okayButton = document.getElementById("okayButton");

function vanishButton(){
    button.hidden="true";    
}
function visibleMessageCard(){
    messageCard.hidden = false;
}
function hiddenMessageCard(){
    messageCard.hidden = true;
}
function openBombingPage(){
    location.replace("./../fireworks/bombing.html");
}

hiddenMessageCard();

button.addEventListener("click",function(){
    setTimeout(vanishButton,2000);
    setTimeout(visibleMessageCard,2000);
})
okayButton.addEventListener("click",function(){
    setTimeout(hiddenMessageCard,1000);
    setTimeout(openBombingPage,1000);
})
