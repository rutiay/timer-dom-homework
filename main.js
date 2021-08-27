//! ex. 8

var intervalId;
var positionTop = 0;
var positionLeft = 0;
function moving() {
    intervalId = setInterval(() => {
        positionTop = Math.floor(Math.random() * 301);
        positionLeft = Math.floor(Math.random() * 1041);
        movingDiv.style.left = `${positionLeft}px`;
        movingDiv.style.top = `${positionTop}px`;
    }, 2000)
}

stopMovingBtn.onclick = function () {
    clearInterval(intervalId);
}

moving();

//! ---------------------------------------------------------------

//! ex. 9

var flagsArray = [
    {
        country: "Israel",
        flag: "https://cdn.pixabay.com/photo/2012/04/10/16/22/israel-26171__340.png"
    },
    {
        country: "United Kingdom",
        flag: "https://cdn.pixabay.com/photo/2017/10/31/23/52/england-2906827__340.png"
    },
    {
        country: "USA",
        flag: "https://cdn.pixabay.com/photo/2017/10/25/05/47/usa-2887014__340.png"
    },
    {
        country: "Argentina",
        flag: "https://cdn.pixabay.com/photo/2013/07/13/14/14/argentina-162229__340.png"
    },
    {
        country: "Canada",
        flag: "https://cdn.pixabay.com/photo/2017/10/31/23/52/canada-2906822__340.png"
    },
    {
        country: "Germany",
        flag: "https://cdn.pixabay.com/photo/2012/04/12/23/52/germany-31017__340.png"
    },
    {
        country: "Macedonia",
        flag: "https://cdn.pixabay.com/photo/2013/07/13/14/16/macedonia-162347__340.png"
    }
];

var counter = 0;
var positionTopFlag = 0;
var positionLeftFlag = 0;
var flagsImgArray = [];

function printFlags() {
    window.setInterval(() => {
        box.innerHTML = '';
        for (var i = 0; i < flagsArray.length; i++) {
            box.innerHTML += `<img class="flags" src=${flagsArray[i].flag}></img>`;
        }
        flagsImgArray = document.getElementsByClassName("flags");
        for (var j = 0; j < flagsImgArray.length; j++) {
            // positionLeftFlag = Math.floor(Math.random() * 1041);
            // positionTopFlag = Math.floor(Math.random() * 351);
            // flagsImgArray[j].style.left = `${positionLeftFlag}px`;
            // flagsImgArray[j].style.top = `${positionTopFlag}px`;
            flagsImgArray[j].onclick = (event) => {
                event.target.style.display = "none";
                console.log(`X: ${event.clientX}, Y: ${event.clientY}`);
                showCounter.innerText = ++counter;
            }
        }
    }, 3000)
}

printFlags();

//! ---------------------------------------------------------------

//! ex. 10

var count = 1;

myBtn.onclick = () => {
    userMessage.innerText = `${userInput.value} ${Math.floor(Math.random() * 101)}`;
    if (count == 1){
        myBtn.style.background = "red";
    }
    else if (count == 2){
        myBtn.style.background = "blue";
    }
    else{
        myBtn.style.background = "yellow";
    }
    count++;
}