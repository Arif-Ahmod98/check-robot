"strict";

let images = ["images/bike.jpg", "images/car.jpg", "images/laptop.jpeg", "images/vactor.png", "images/jeep.jpg", "images/flower.jfif", "images/sunset.jfif", "images/cow.jfif"];

let imgSource = document.querySelector("img");

let count = 0;

function next() {
    count++;
    if (count >= images.length) {
        count = 0;
        imgSource.src = images[count];

    } else {
        imgSource.src = images[count];
    }



}

function prev() {
    count--;
    if (count < 0) {
        count = images.length - 1;
        imgSource.src = images[count];

    } else {
        imgSource.src = images[count];
    }

    
}