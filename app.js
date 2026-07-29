
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
// 📈 Progress Tracker

let sessions = localStorage.getItem("sessions");

if (sessions === null) {
    sessions = 0;
}


function completeTraining() {

    sessions++;

    localStorage.setItem("sessions", sessions);

    document.getElementById("trainingCount").innerHTML =
        sessions + " Sessions Completed 🎀";

}
// 📅 Weekly Planner Saving

window.addEventListener("DOMContentLoaded", function() {

    let plannerInputs = document.querySelectorAll(".planner-card input");


    plannerInputs.forEach((input, index) => {

        let savedPlan = localStorage.getItem("planner-" + index);

        if (savedPlan) {
            input.value = savedPlan;
        }


        input.addEventListener("input", function() {

            localStorage.setItem(
                "planner-" + index,
                input.value
            );

        });

    });


    let goalInput = document.querySelector(".goal-box input");


    if (goalInput) {

        let savedGoal = localStorage.getItem("weeklyGoal");

        if (savedGoal) {
            goalInput.value = savedGoal;
        }


        goalInput.addEventListener("input", function() {

            localStorage.setItem(
                "weeklyGoal",
                goalInput.value
            );

        });

    }

});
