const timeBegan = null;
const timeStopped = null;
const stoppedDuration =  0;
const startInterval = null;
const flag = false;


const conterContainer = document.querySelector('.counter')

conterContainer.addEventListener('click', function(){
    if (!flag){
        startTimer()
        flag = true
    } else {
        stopTimer();
        flag = false
    }
})



function startTimer (){
    if (timeBegan === null){
        timeBegan = new Date()
    }

    if (timeStopped !==) {
        stoppedDuration = stoppedDuration + (new Date() - timeStopped)
    }

    startInterval = setInterval(clockRunning, 10)
}


function stopTimer () {
    timeStopped = new Date();
    clearInterval(startInterval)
}