
var button = document.querySelector('.btn')
button.addEventListener('click',crush)




function crush() {
    

var randomb1 = Math.floor(Math.random() *6) + 1;
var randomimage1 = "img/f" + randomb1 + ".gif"
document.querySelectorAll("img")[0].setAttribute("src", randomimage1)



var randomb2 = Math.floor(Math.random() * 6) + 1;
var randomimage2 = "img/f" + randomb2 + ".gif"
document.querySelectorAll("img")[1].setAttribute("src", randomimage2)

if (randomb1 === randomb2) {
    document.querySelector("h1").innerHTML = "You win"
    var u = new Audio("sounds/win.wav");
    u.play();
   var foo = document.getElementById("thisone").innerHTML
   foo++
   document.getElementById("thisone").innerHTML = foo;


}else{
    document.querySelector("h1").innerHTML = "Try again"
    var p = new Audio("sounds/next.wav");
    p.play();
}

}



window.onload = function () {

    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval;

    buttonStart.onclick = function () {

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(Interval);
    }


    buttonReset.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }



    function startTimer() {
        tens++;

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;

        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

    }


}