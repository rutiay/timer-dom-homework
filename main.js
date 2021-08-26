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