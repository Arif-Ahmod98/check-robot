"strict";

let photos = ["images/bike.jpg", "images/car.jpg", "images/laptop.jpeg"];
let imgTag = document.querySelector("img");
let count = 0;

let background1 = document.querySelector("body");

function next() {

   background1.style.background = "black";
   background1.style.color = "white";
   alert("you have clicked on black button");

   }

function prev() {

    background1.style.background = "red";
   background1.style.color = "white";

   alert("You have clicked on white button");
  
    
}