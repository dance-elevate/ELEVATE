const startBtn = document.getElementById("startBtn");

if (startBtn) {
  startBtn.addEventListener("click", () => {
    startBtn.textContent = "Let's Dance! 🩰";
    startBtn.style.backgroundColor = "#d98aa5";

    setTimeout(() => {
      alert("🎀 Welcome to ELEVATE!\n\nThis is Version 1.0 of your dance training website. More features are coming soon!");
    }, 300);
  });
}
function startTraining(trainingName) {
    alert("Starting: " + trainingName + " 🎀");

    localStorage.setItem("currentTraining", trainingName);
}
