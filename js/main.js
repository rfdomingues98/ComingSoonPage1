var endPoint = new Date("Mar 28 2019 15:30:00");

var countDownFunction = setInterval(function () {
    var now = new Date().getTime();
    var timeLeft = endPoint - now;

    var d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var h = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("time").innerHTML = d + "d " + h + "h " + m + "m " + s + "s ";
});