// var music1 = document.getElementById("mymusic");
const container = document.getElementById("container");
const backButton = document.getElementById("back-button");
const card = document.getElementById("card");
const blinkText = document.getElementById("blinkWishText");
const giftMessage = document.getElementById("gift-msg");

backButton.hidden = true;
card.hidden = true;
giftMessage.hidden = true;

window.onload = function () {
    setTimeout(function () {
        document.getElementById("mymusic").onplay();
    }, 1000)
    setTimeout(function () {
        backButton.hidden = false;
    }, 100000);
}


backButton.addEventListener("click", function () {
    window.location.replace("countdown.html");
})


// balloons
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");
const b10 = document.getElementById("b10");
function hideBalloons() {
    b1.hidden = true;
    b2.hidden = true;
    b3.hidden = true;
    b4.hidden = true;
    b5.hidden = true;
    b6.hidden = true;
    b7.hidden = true;
    b8.hidden = true;
    b9.hidden = true;
    b10.hidden = true;
}
hideBalloons();

// ballon-text 
const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");
const l3 = document.getElementById("l3");
const l4 = document.getElementById("l4");
const l5 = document.getElementById("l5");
const l6 = document.getElementById("l6");
const l7 = document.getElementById("l7");
const l8 = document.getElementById("l8");
const l9 = document.getElementById("l9");
const l10 = document.getElementById("l10");
function allBalloonTextHidden(){
    l1.hidden = true;
    l2.hidden = true;
    l3.hidden = true;
    l4.hidden = true;
    l5.hidden = true;
    l6.hidden = true;
    l7.hidden = true;
    l8.hidden = true;
    l9.hidden = true;
    l10.hidden = true;
}
function balloonTextVisible(l1){
    l1.hidden = false;
}

allBalloonTextHidden();

const alpha1 = document.getElementById("1");
const alpha2 = document.getElementById("2");
const alpha3 = document.getElementById("3");
const alpha4 = document.getElementById("4");
const alpha5 = document.getElementById("5");
const alpha6 = document.getElementById("6");
const alpha7 = document.getElementById("7");
const alpha8 = document.getElementById("8");
const alpha9 = document.getElementById("9");
const alpha10 = document.getElementById("10");
const alpha11 = document.getElementById("11");
const alpha12 = document.getElementById("12");
const alpha13 = document.getElementById("13");
const alpha14 = document.getElementById("14");
const alpha15 = document.getElementById("15");
const alpha16 = document.getElementById("16");
const alpha17 = document.getElementById("17");
const alpha18 = document.getElementById("18");
const alpha19 = document.getElementById("19");
const alpha20 = document.getElementById("20");
function allAlphaHidden() {
    alpha1.hidden = true;
    alpha2.hidden = true;
    alpha3.hidden = true;
    alpha4.hidden = true;
    alpha5.hidden = true;
    alpha5.hidden = true;
    alpha6.hidden = true;
    alpha7.hidden = true;
    alpha8.hidden = true;
    alpha9.hidden = true;
    alpha10.hidden = true;
    alpha11.hidden = true;
    alpha12.hidden = true;
    alpha13.hidden = true;
    alpha14.hidden = true;
    alpha15.hidden = true;
    alpha16.hidden = true;
    alpha17.hidden = true;
    alpha18.hidden = true;
    alpha19.hidden = true;
    alpha20.hidden = true;

    blinkText.hidden = true;
}
allAlphaHidden();
function wishVisible() {
    setTimeout(function () {
        alpha1.hidden = false;
    }, 1000);
    setTimeout(function () {
        alpha2.hidden = false;
    }, 1200);
    setTimeout(function () {
        alpha3.hidden = false;
    }, 1400);
    setTimeout(function () {
        alpha4.hidden = false;
    }, 1600);
    setTimeout(function () {
        alpha5.hidden = false;
    }, 1800);
    setTimeout(function () {
        alpha6.hidden = false;
    }, 2000);
    setTimeout(function () {
        alpha7.hidden = false;
    }, 2200);
    setTimeout(function () {
        alpha8.hidden = false;
    }, 2400);
    setTimeout(function () {
        alpha9.hidden = false;
    }, 2600);
    setTimeout(function () {
        alpha10.hidden = false;
    }, 2800);
    setTimeout(function () {
        alpha11.hidden = false;
    }, 3000);
    setTimeout(function () {
        alpha12.hidden = false;
    }, 3200);
    setTimeout(function () {
        alpha13.hidden = false;
    }, 3400);
    setTimeout(function () {
        alpha14.hidden = false;
    }, 3600);
    setTimeout(function () {
        alpha15.hidden = false;
    }, 3800);
    setTimeout(function () {
        alpha16.hidden = false;
    }, 4000);
    setTimeout(function () {
        alpha17.hidden = false;
    }, 4200);
    setTimeout(function () {
        alpha18.hidden = false;
    }, 4400);
    setTimeout(function () {
        alpha19.hidden = false;
    }, 4600);
    setTimeout(function () {
        alpha20.hidden = false;
    }, 4800);
    setTimeout(function () {
        allAlphaHidden();
    }, 5100);
    
    setTimeout(function () {
        balloonTextVisible(l1);
    }, 5400);
    setTimeout(function () {
        balloonTextVisible(l2);
    }, 5600);
    setTimeout(function () {
        balloonTextVisible(l3);
    }, 5800);

    setTimeout(function () {
        balloonTextVisible(l4);
    }, 6100);
    setTimeout(function () {
        balloonTextVisible(l5);
    }, 6300);
    setTimeout(function () {
        balloonTextVisible(l6);
    }, 6500);
    setTimeout(function () {
        balloonTextVisible(l7);
    }, 6700);
    setTimeout(function () {
        balloonTextVisible(l8);
    }, 6900);
    setTimeout(function () {
        balloonTextVisible(l9);
    }, 7100);
    setTimeout(function () {
        balloonTextVisible(l10);
    }, 7300);
}
wishVisible();

function animateBalloons(b1) {
    b1.hidden = false;
    b1.animate([
        { transform: 'translateY(150px)' },
        { transform: 'translate(0,0)' }, 
        { transform: 'translateY(-800px)' },
        { transform: 'translateY(0px)' },
    ], {
        duration: 4000,
        iterations: 1
    });
}

animateBalloons(b1);
animateBalloons(b2);
animateBalloons(b3);
animateBalloons(b4);
animateBalloons(b5);
animateBalloons(b6);
animateBalloons(b7);
animateBalloons(b8);
animateBalloons(b9);
animateBalloons(b10);

function blinkWish() {
    setTimeout(function () {
        blinkText.hidden = false;
    }, 5300);
}
blinkWish();

// closed & opened gift-box
const giftBoxClose = document.getElementById("gift-box-close");
const giftBoxOpen = document.getElementById("gift-box-open");
const giftButton = document.getElementById("giftButton");
giftBoxClose.hidden = true;
giftBoxOpen.hidden = true;
giftButton.hidden = true;

function sendGiftButton() {
    setTimeout(function () {
        giftButton.hidden = false;
    }, 12000);
}
sendGiftButton();

giftButton.addEventListener("click", function () {
    giftButton.hidden = true;
    blinkText.hidden = true;
    allBalloonTextHidden();
    hideBalloons();
    giftBoxClose.hidden = false;
    giftBoxClose.animate([
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-10px)' },
        { transform: 'translateY(0px)' },
    ], {
        duration: 1000,
        iterations: Infinity
    });
})
giftBoxClose.addEventListener("click", function () {
    giftBoxClose.hidden = true;
    giftBoxOpen.hidden = false;

    giftBoxOpen.animate([
        { transform: 'translateY(30px)' },
        { transform: 'translateY(-30px)' },
        { transform: 'translateY(0px)' },
    ], {
        duration: 100,
        iterations: 1
    });
    giftMessage.animate([
        { transform: 'translateY(0px)' },
        { transform: 'translateY(5px)' },
        { transform: 'translateY(0px)' },
    ], {
        duration: 1500,
        iterations: Infinity
    })
    setTimeout(() => {
        giftMessage.hidden = false;
    }, 2000);
})

giftMessage.addEventListener("click", function () {
    giftBoxOpen.hidden = true;
    giftMessage.hidden = true;
    card.hidden = false;
})