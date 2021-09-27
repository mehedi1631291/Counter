//document.getElementById("count-el").innerText = 5
/*
var myAge = 25;
console.log(myAge);

let ageMy = 25;
console.log(ageMy);
*/

// let firstBatch = 5;
// let secondBatch = 7;

// let count = firstBatch + secondBatch;

// console.log(count)

// let myAge = 35;
// let myDogAgeRatio = 7;

// let myDogAge = myAge * myDogAgeRatio;

// console.log(myDogAge);



// let count = 5;

// count = count + 1;

// console.log(count);

// let bonousPoint = 50;
// console.log(bonousPoint)

// bonousPoint = bonousPoint + 50;
// console.log(bonousPoint);

// bonousPoint = bonousPoint - 75;
// console.log(bonousPoint);

// bonousPoint = bonousPoint + 45;
// console.log(bonousPoint)









/*
function increment(){
    console.log("The button was clicked")
}
*/





/*

function yoyo() {
    console.log(45)
}

yoyo()




function sum() {
    let lap1 = 34;
    let lap2 = 33;
    let lap3 = 36;
    
    console.log(lap1 + lap2 + lap3);
}
sum();

*/


/*
let lapsCompleted = 30;

function inc() {
    let onePlus = lapsCompleted + 1;
    console.log(onePlus);
}


inc();

*/

/*
let lappsCompleted = 0;

function incrementLap() {
    lappsCompleted = lappsCompleted + 1;

}

incrementLap()
incrementLap()
incrementLap()

console.log(lappsCompleted)


*/




/*
let countEl = document.getElementById("count-el")
console.log(countEl);


let count = 0;

function increment() {
    count = count + 1
    countEl.innerText = count;

    console.log(count)
}
*/

/*
 //count and save people
let = countEl = document.getElementById("count-el");


let count = 0;




function increment() {
    count = count + 1
    countEl.innerText = count;
    console.log(count)

}

function save() {
    console.log(count);
}

*/

/*

let username = "per"
let message = "You have three new notofocation"

let messageToUser = message + ", " + username + "!"
console.log(messageToUser)

*/


/*
let name = "Ted";
let greeting = "Hi, my name is "

let myGreeting = greeting + name;

console.log(myGreeting);



let point = 4;
let bonousPoint = "10"

let totalPoint = point + bonousPoint
console.log(totalPoint);

*/



let welcomeEl = document.getElementById("welcome-el")

let na = "Ted"
let greeting = "welcome back "

welcomeEl.innerText = greeting + na


welcomeEl.innerText += " emoji"







let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    //just delete below 2 line for not reset count element
    countEl.textContent = 0
    count = 0

}

















