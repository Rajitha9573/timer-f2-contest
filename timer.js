const button = document.getElementById("start-timer");
const timerContainer = document.getElementById("timers-container");

button.addEventListener("click", () => {
    const hours = document.getElementById("hours").value || 0;
    const minutes = document.getElementById("minutes").value || 0;
    const seconds = document.getElementById("seconds").value || 0;
    if(!hours&& !minutes&& !seconds){
        alert("please enter valid number");
        return;
    }
   const totalMilliseconds = (hours*3600+minutes*60+seconds)*1000;
   if(totalMilliseconds>=0){
       timerStars(totalMilliseconds)
   }
// console.log(totalMilliseconds)

})

function timerStars(duration){
    const timerBox = document.createElement("div");
    timerBox.classList.add("active-timer");
    timerBox.style.backgroundColor="grey";
    
    // console.log(timerBox)
    const timerDisplay = document.createElement("div");
    timerDisplay.classList.add("timer-disply");
   
    console.log(timerDisplay)
    timerBox.appendChild(timerDisplay);

    const btnStop = document.createElement("button");
    btnStop.innerText="Stop Timer";
    btnStop.addEventListener("click", () => {
         clearInterval(interval);
        timerBox.remove();
    })
    timerBox.appendChild(btnStop);
    timerContainer.appendChild(timerBox);

    let remainingTime = duration;

    const interval = setInterval(()=>{
         remainingTime -= 1000;
        if(remainingTime<=0){
            clearInterval(interval);
            timerDisplay.textContent= "time is up!";
            
            timerDisplay.style.color= "red";

        }
        else{
            updateTimerDisplay();
        }
    }, 1000)

    function updateTimerDisplay() {
        const hours = Math.floor(remainingTime / 3600000);
        const minutes = Math.floor((remainingTime % 3600000) / 60000);
        const seconds = Math.floor((remainingTime % 60000) / 1000);
        timerDisplay.textContent = `Time Left: ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }


}

