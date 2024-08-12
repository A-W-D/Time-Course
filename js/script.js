
if ($(".count_down").length) {
    $('.count_down').downCount({
        date: '6/30/2020 12:00:00',
        offset: +10
    });
}


// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

// Set the date we're counting down to (5 days from now)
var countDownDate = new Date().getTime() + (5 * 24 * 60 * 60 * 1000);

// Update the count down every 1 second
var countdownfunction = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the countdown date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in the respective elements
    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;

    // If the countdown is over, write some text 
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.querySelector(".count_down").innerHTML = "EXPIRED";
    }
}, 1000);