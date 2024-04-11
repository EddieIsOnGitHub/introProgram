document.getElementById("MyName").innerHTML += "ed";


let Item1;
let Item2;
let Item3;

document.getElementById("changelist").onclick = newList;

function newList() {
    Item1 = prompt("enter your first thing:");
    Item2 = prompt("enter your second thing:");
    Item3 = prompt("enter your third thing:");
    updatelist();
}

function updatelist() {
    document.getElementById("firstThing").innerHTML = Item1;
    document.getElementById("secondthing").innerHTML = Item2;
    document.getElementById("thirdThing").innerHTML = Item3;

}

