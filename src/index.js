const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let intervalId = null; // Variable to store the interval
let timeoutId = null;
const startButton = document.getElementById("start-btn");
const timeElement = document.getElementById("time");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");
const closeToastElement = document.getElementById("close-toast");

// ITERATION 1: Add event listener to the start button
//const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startCountdown);
toast.classList.remove("show");
clearTimeout(timeoutId);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  startButton.hidden = true;
  intervalId = setInterval(() => {
    timeElement.textContent = remainingTime;
    if (remainingTime === 10) {
      showToast("Final countdown");
    }
    if (remainingTime === 5) {
      showToast("rev up those engines");
    }
    if (remainingTime === 0) {
      showToast("lift off");
      return;
    }
    remainingTime--;
  }, 1000);
}

// ITERATION 3: Show Toast

function showToast(message) {
  console.log("showToast called!");
  toast.classList.add("show");
  toastMessage.textContent = message;
  timeOutId = setTimeout(() => {
    toast.classeList.remove();
    //const toast = document.createElement("div");
    //document.body.appendChild(toast);
  }, 3000);
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON
function showToastWithCloseButton(message) {
  console.log("showToastWithCloseButton called!");

  toast = document.createElement("div");
  toast.id = "toast";
  toast.textContent = message;
  toast.classList.add("toast");

  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.classList.add("close-toast");

  closeButton.addEventListener("click", () => {
    toast.remove();
  });

  toast.appendChild(closeButton);
}
