// 🎀 ELEVATE APP.JS


// Welcome

if (!localStorage.getItem("visited")) {

alert(
"Welcome to ELEVATE 🎀\n\n" +
"This is Version 1!\n" +
"More features coming soon ✨"
);

localStorage.setItem("visited","true");

}





// 💪 Workout Selection

function startWorkout(workoutName){

localStorage.setItem(
"currentWorkout",
workoutName
);

window.location.href =
"workout.html";

}





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





// 🏆 Achievement Display

window.addEventListener("DOMContentLoaded",function(){


let achievement =
localStorage.getItem("firstWorkout");


let badge =
document.getElementById("firstWorkout");


if(achievement && badge){

badge.innerHTML =
"Unlocked! 🎀✨";

}



});
// 🏠 Home Dashboard


function goToWorkout(){

localStorage.setItem(
"currentWorkout",
"Ballet Warm-Up"
);


window.location.href =
"workout.html";

}




window.addEventListener("DOMContentLoaded", function(){


let homeProgress =
document.getElementById("homeProgress");


let sessions =
localStorage.getItem("sessions") || 0;


if(homeProgress){

homeProgress.innerHTML =
sessions + " Sessions Completed 🎀";

}


});
