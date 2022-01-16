"strict";

let photos = ["images/bike.jpg", "images/car.jpg", "images/laptop.jpeg", "images/flower.jfif", "images/cow.jfif"];

let imgSource = document.querySelector("img");
let count = 0;



function next() {
    count++;
if  ( count >= photos.length ) {
    count = 0;
    imgSource.src = photos[count];

} else {
    imgSource.src = photos[count];

}
}

function prev() {
    count --;
    if  ( count < 0 ) {
        count = photos.length - 1;
        imgSource.src = photos[count];
    
    } else {
        imgSource.src = photos[count];
    
}
}