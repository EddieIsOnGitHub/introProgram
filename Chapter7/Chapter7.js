
// document.getElementById("lefteye").style.backgroundColor = "purple";
// document.getElementById("righteye").style.backgroundColor = "purple";

// document.getElementById("body").style.border = "2px solid black";

// document.getElementById("mouth").style.borderRadius = "4px";

// document.getElementById("righteye").style.border = "4px yellow dotted";
// document.getElementById("lefteye").style.border = "4px yellow dotted";

// document.getElementById("leftarm").style.backgroundColor = "##FF00F";

// document.getElementById("body").style.backgroundColor = "#FF0000";

// document.getElementById("head").style.borderTop = "5px black solid";

// document.getElementById("head").style.transform =
// "rotate(15deg)";

// document.getElementById("head").style.transform =
// "rotate(-15deg)";

// document.getElementById("nose").style.borderRadius = "50%";
// document.getElementById("rightarm").style.backgroundColor ="green";
// document.getElementById("mouth").style.backgroundColor = "pink";

//Animating the robot

let rightEye = document.getElementById("righteye");//targets the right eye
rightEye.addEventListener("click", moveUpDown);

let lefteye = document.getElementById("lefteye")//targets the left eye
lefteye.addEventListener("click", moveUpDown);

let nose = document.getElementById("nose");
nose.addEventListener("click", moveInOut)

let leftarm = document.getElementById("leftarm")//targets the left arm
leftarm.addEventListener("click", moveleftarm);

let rightarm = document.getElementById("rightarm")//targets the left arm
rightarm.addEventListener("click", moverightarm);


let mouth = document.getElementById("mouth")//targets the left arm
mouth.addEventListener("click", movemouth);


function movemouth(event) {
    let robopart = event.target;
    let c = 0;
    let Animation = setInterval(frame, 10);
    function frame() {
        robopart.style.down = c++ + "%";
        if (c === 40) {
            clearInterval(Animation);
        }
    }
}


function moveUpDown(event) {
    let robopart = event.target;
    let t = 0;
    let Animation = setInterval(frame, 10);
    function frame() {
        robopart.style.top = t + "%";
        t++
        if (t === 21) {
            clearInterval(Animation);
        }
    }
}

function moveInOut(event) {
    let robopart = event.target;
    let l = 0;
    let Animation = setInterval(frame, 10);
    function frame() {
        robopart.style.top = l + "%";
        l++
        if (l === 50) {
            clearInterval(Animation);
        }
    }
}

function moveleftarm(event) { //left arm
    let robopart = event.target;
    let w = 0;
    let Animation = setInterval(frame, 10);
    function frame() {
        robopart.style.right = w + "%";
        w++
        if (w === 71) {
            clearInterval(Animation);
        }
    }
}


function moverightarm(event) { //right arm
    let robopart = event.target;
    let q = 0;
    let Animation = setInterval(frame, 10);
    function frame() {
        robopart.style.left = q++ + "%";
        if (q === 21) {
            clearInterval(Animation);
        }
    }
}







