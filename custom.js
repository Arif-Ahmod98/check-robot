"use strict";



document.getElementById("submit").addEventListener("click", function () {
    let heading2 = document.querySelector("h2");
    let input = document.querySelector("input").value;
    if ( input == 10) {
        heading2.innerHTML = "Welcome user !";
        heading2.classList.remove("red");
    
    } else if (input == "") {
        heading2.innerHTML = "Enter number";
        heading2.classList.remove("red");
    

    }
    else {
    heading2.innerHTML = "Warning Robot!";
    heading2.classList.add("red");
    }
});