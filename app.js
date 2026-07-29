// ELEVATE Welcome Message
window.onload = function() {
    alert("Welcome to ELEVATE 🎀\n\nThis is Version 1!\nMore features coming soon ✨");
};


// Training Buttons
function startTraining(trainingName) {
    alert("Starting: " + trainingName + " 🎀");

    localStorage.setItem("currentTraining", trainingName);
}
