//***********************************
//DOM Node Selectors
//***********************************
var displayTime = document.querySelector('#display-time')   // grab the p tag inside the #clock-box div
var containerNode = document.querySelector('.container')    // grab the container class
var timerBarNode = document.querySelector('#timer-bar')     // grab the #timer-bar div

//***********************************
//Set Interval Function
//***********************************
//interval function recalls the all functions every 1/2 second
setInterval(function() {
    showTime()
    changeHexBG()
}, 500)

//***********************************
//Counting Clock Function
//*********************************** 
function showTime() {
    //varibles to grab the current time
    var newTime = new Date()
    var hours = newTime.getHours()
    var mins = newTime.getMinutes()
    var sec = newTime.getSeconds()
    //conditionals to add '0' to numbers < 10
    if (hours<10) {
        hours = "0" + hours
    }
    if (mins<10) {
        mins = "0" + mins
    }
    if (sec<10) {
        sec = "0" + sec
    }
    //setting variable that stores the currentTime in a string
    var currentTime = hours + ':' + mins + ':' + sec
    //pushing the 'currentTime' into the displayTime node
    displayTime.innerHTML = currentTime
}

//***********************************
//BG Hex Color Function
//***********************************
function changeHexBG() {
    //varibles to grab the current time
    var newTime = new Date()
    var hours = newTime.getHours()
    var mins = newTime.getMinutes()
    var sec = newTime.getSeconds()
    //multiplying time variable so that they reach 255 at their max value
    hours = parseInt(hours * 10.625)
    mins = parseInt(mins * 4.25)
    sec = parseInt(sec * 4.25)
    //converting time variable to hexidecimal values
    var hexHrs = hours.toString(16)
    var hexMins = mins.toString(16)
    var hexSec = sec.toString(16)
    //setting variable that stores hexidecimal values in a hex string
    var hexColor = '#' + hexHrs + hexMins + hexSec
    //pushing new 'hexColor' bg color into the container node
    containerNode.style.backgroundColor = hexColor
    //returning hexColor so that I can use it again later
    return hexColor
}

//***********************************
//Hover Event
//***********************************
function hexHover() {
    displayTime.innerHTML = changeHexBG()
}

displayTime.addEventListener('mouseenter', hexHover)
// displayTime.addEventListener('mouseleave', hexHover)

//***********************************
//Timer Bar Function
//***********************************
//interval function that makes timer bar grow every second for 60sec to a max width of 600px
setInterval(function () {
    var seconds = new Date()
    timerBarNode.style.width = ((seconds.getSeconds() / 60) * 600) + 'px'
}, 1000)
