console.log("Birthday Countdown console");
const countdown2 = document.getElementById("countdown-progress");
const cdays = document.getElementById("days");
const chours = document.getElementById("hours");
const cmins = document.getElementById("mins");
const csecs = document.getElementById("secs");

var birthDate, birthDay,datechange,timeDifference;
birthDate = "2021-11-10";   // Set your Shizuka's birthday date here

function updateDOM() {

    function dateUpdate() {

        var date = new Date();
        var today = date.getTime(); // we will get time in millisecond since January 1, 1970

        // birthDay = new Date(birthDate).getTime();
        birthDay = 1636292908000;

        timeDifference = birthDay - today;    // we will get the difference in milliseconds

        // India GMT/UTC +5:30h 
        timeDifference -= ((5 * 60) + 30) * 60 * 1000;  // so we are subtracting 5hr 30mins

        if (timeDifference < 1000) {
            completeCountdown();
        }

        var temp = timeDifference;
        var days = Math.floor(temp / (24 * 60 * 60 * 1000)); temp = temp % (24 * 60 * 60 * 1000);
        var hours = Math.floor(temp / (60 * 60 * 1000)); temp = temp % (60 * 60 * 1000);
        var minutes = Math.floor(temp / (60 * 1000)); temp = temp % (60 * 1000);
        var seconds = Math.floor(temp / 1000);

        cdays.textContent = days;
        chours.textContent = hours;
        cmins.textContent = minutes;
        csecs.textContent = seconds;

    }
    datechange = setInterval(dateUpdate, 1000);
}
updateDOM();

function completeCountdown() {
    console.log("countdown complete");
    clearInterval(datechange);
    location.replace("./middlePage/middlePage.html");
}