"strict";

let divBg = document.getElementsByClassName("my-div")[0];

divBg.style.background = "red";
divBg.style.color = "white";
divBg.style.padding = "20px 30px";


let heading1 = document.createElement("h1");

let text = document.createTextNode("This is the highest persont in the world!");

heading1.appendChild(text);

divBg.appendChild(heading1);

let heading_2nd = document.getElementsByTagName("h1")[1];




let addElement = document.createElement("h1");
let text2 = document.createTextNode("This is the most important part in my life");

addElement.appendChild(text2);
divBg.appendChild(addElement);