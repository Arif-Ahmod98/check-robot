"use strict";

let heading = document.getElementById("heading_style");

function toRight() {

    heading.classList.add("toRight");
    heading.classList.remove("toLeft");
}

function toBottom() {

    heading.classList.add("toBottom");
    heading.classList.remove("toTop");
}

function toLeft() {

    heading.classList.add("toLeft");
    heading.classList.remove("toRight");
}

function toTop() {

    heading.classList.add("toTop");
    heading.classList.remove("toBottom");
 
}