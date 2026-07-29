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



// 🩰 Training

function startTraining(trainingName){

    localStorage.setItem(
        "currentTraining",
        trainingName
    );

}




// 📈 Progress

let sessions = Number(localStorage.getItem("sessions")) || 0;


function completeTraining(){

    sessions++;

    localStorage.setItem(
        "sessions",
        sessions
    );


    let count =
    document.getElementById("trainingCount");


    if(count){

        count.innerHTML =
        sessions + " Sessions Completed 🎀";

    }

}





// 📅 Planner Saving

window.addEventListener("DOMContentLoaded", function(){


let inputs =
document.querySelectorAll(".planner-card input");


inputs.forEach(function(input,index){


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





let goal =
document.querySelector(".goal-box input");


if(goal){


let savedGoal =
localStorage.getItem("weeklyGoal");


if(savedGoal){

goal.value = savedGoal;

}



goal.addEventListener("input",function(){


localStorage.setItem(
"weeklyGoal",
goal.value
);


});


}



});







// 💪 Workout Selection

function startWorkout(workoutName){


localStorage.setItem(
"currentWorkout",
workoutName
);


window.location.href =
"workout.html";


}






// 🩰 Load Workout


window.addEventListener("DOMContentLoaded", function(){


let workout =
localStorage.getItem("currentWorkout");



let title =
document.getElementById("workoutTitle");



if(workout && title){



title.innerHTML =
workout;



let workouts = {



"Ballet Warm-Up":[

"5 minutes posture and balance work",

"Practice pliés and controlled movement",

"Stretch for flexibility and mobility"

],



"Flexibility Flow":[

"Hamstring stretching",

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

"Practice presentation",

"Visualize your goals",

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







function finishWorkout(){


alert(
"Workout Complete! 🎀🏆"
);


}
