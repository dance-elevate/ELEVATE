// 🎀 ELEVATE APP.JS


// Welcome Message

if (!localStorage.getItem("visited")) {

    alert(
        "Welcome to ELEVATE 🎀\n\n" +
        "This is Version 1!\n" +
        "More features coming soon ✨"
    );

    localStorage.setItem("visited", "true");

}




// 🏠 Home Workout Button

function goToWorkout(){

    localStorage.setItem(
        "currentWorkout",
        "Ballet Warm-Up"
    );

    window.location.href = "workout.html";

}





// 💪 Workout Selection

function startWorkout(workoutName){

    localStorage.setItem(
        "currentWorkout",
        workoutName
    );

    window.location.href = "workout.html";

}





// 📈 Progress Tracker

let sessions = Number(localStorage.getItem("sessions")) || 0;


function completeTraining(){

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

window.addEventListener("DOMContentLoaded", function(){


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



    // Home progress number

    let homeProgress =
    document.getElementById("homeProgress");


    if(homeProgress){

        homeProgress.innerHTML =
        sessions + " Sessions Completed 🎀";

    }



});






// 🩰 Load Workout Details

window.addEventListener("DOMContentLoaded", function(){


    let workout =
    localStorage.getItem("currentWorkout");


    let title =
    document.getElementById("workoutTitle");


    if(workout && title){


        title.innerHTML = workout;


        let workouts = {


            "Ballet Warm-Up":[
                "5 minutes posture and balance work",
                "Practice pliés and controlled movement",
                "Stretch for flexibility and mobility"
            ],


            "Flexibility Flow":[
                "Hamstring stretches",
                "Hip mobility exercises",
                "Full body flexibility routine"
            ],


            "Strength Training":[
                "Core stability exercises",
                "Balance training",
                "Leg strength exercises"
            ],


            "Rider Training":[
                "Core control",
                "Balance exercises",
                "Rider stability work"
            ],


            "Show Prep":[
                "Presentation practice",
                "Goal visualization",
                "Build confidence"
            ],


            "Recovery":[
                "Gentle stretching",
                "Mobility exercises",
                "Relaxation routine"
            ]

        };



        let selected =
        workouts[workout];


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





// 🏆 Finish Workout

function finishWorkout(){

    alert(
        "Workout Complete! 🎀🏆"
    );


    localStorage.setItem(
        "firstWorkout",
        "completed"
    );

}
