// 🎀 ELEVATE APP.JS


// Welcome Message
window.onload = function() {

    if (!localStorage.getItem("visited")) {

        alert(
            "Welcome to ELEVATE 🎀\n\n" +
            "This is Version 1!\n" +
            "More features coming soon ✨"
        );

        localStorage.setItem("visited", "true");
    }

};



// 🩰 Training Selection

function startTraining(trainingName) {

    localStorage.setItem(
        "currentTraining",
        trainingName
    );

    alert(
        "Starting: " + trainingName + " 🎀"
    );

}




// 📈 Progress Tracker

let sessions = localStorage.getItem("sessions");

if (sessions === null) {
    sessions = 0;
}


function completeTraining() {

    sessions++;

    localStorage.setItem(
        "sessions",
        sessions
    );


    let counter = document.getElementById("trainingCount");

    if(counter){
        counter.innerHTML =
        sessions + " Sessions Completed 🎀";
    }

}




// 📅 Planner Saving

window.addEventListener("DOMContentLoaded", function() {


    let plannerInputs =
    document.querySelectorAll(".planner-card input");


    plannerInputs.forEach(function(input,index){


        let saved =
        localStorage.getItem("planner-" + index);


        if(saved){
            input.value = saved;
        }


        input.addEventListener("input",function(){

            localStorage.setItem(
                "planner-" + index,
                input.value
            );

        });


    });



    let goalInput =
    document.querySelector(".goal-box input");


    if(goalInput){


        let savedGoal =
        localStorage.getItem("weeklyGoal");


        if(savedGoal){
            goalInput.value = savedGoal;
        }


        goalInput.addEventListener("input",function(){

            localStorage.setItem(
                "weeklyGoal",
                goalInput.value
            );

        });

    }


});





// 💪 Workout Library

function startWorkout(workoutName){


    localStorage.setItem(
        "currentWorkout",
        workoutName
    );


    window.location.href =
    "workout.html";

}






// 🩰 Individual Workout Page


window.addEventListener("DOMContentLoaded", function(){


let workout =
localStorage.getItem("currentWorkout");


let title =
document.getElementById("workoutTitle");


if(workout && title){


    title.innerHTML = workout;



    let exercises = {


        "Ballet Warm-Up":[
            "Posture and balance practice",
            "Pliés and controlled movement",
            "Stretch and mobility work"
        ],


        "Flexibility Flow":[
            "Hamstring stretches",
            "Hip mobility",
            "Full body stretching"
        ],


        "Strength Training":[
            "Core stability",
            "Balance exercises",
            "Leg strength"
        ],


        "Rider Training":[
            "Core control",
            "Balance practice",
            "Rider stability"
        ],


        "Show Prep":[
            "Presentation practice",
            "Goal visualization",
            "Confidence training"
        ],


        "Recovery":[
            "Gentle stretching",
            "Mobility work",
            "Relaxation"
        ]


    };



    let selected =
    exercises[workout];



    if(selected){


        document.getElementById("exerciseOne").innerHTML =
        selected[0];


        document.getElementById("exerciseTwo").innerHTML =
        selected[1];


        document.getElementById("exerciseThree").innerHTML =
        selected[2];


    }


}



});



function completeExercise(){

    alert(
        "Exercise completed! 🎀"
    );

}
