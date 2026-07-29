
// 🎀 ELEVATE App JavaScript


// Welcome message
window.onload = function() {
    alert(
        "Welcome to ELEVATE 🎀\n\n" +
        "This is Version 1!\n" +
        "More features are coming soon ✨\n\n" +
        "Keep training. Keep growing."
    );
};


// Training button function
function startTraining(trainingName) {

    alert(
        "Starting: " + trainingName + " 🎀\n\n" +
        "Your training session has been selected!"
    );

    // Save current training
    localStorage.setItem("currentTraining", trainingName);

}


// Get saved training (for future pages)
function getCurrentTraining() {

    let training = localStorage.getItem("currentTraining");

    return training;

}


// Clear training (future use)
function clearTraining() {

    localStorage.removeItem("currentTraining");

}
