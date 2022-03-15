function closeLogin() {

    document.getElementById("loginBox").style.display = "none";

}

function loginBox() {

    document.getElementById("loginBox").style.display = "block";

}

const direction = [10, 10, 10, 20];

function bouncy() {

    // check the bounds of the screen

    if ((direction[2] + direction[0]) < -20 ) {direction[0] = 10;};
    if ((direction[3] + direction[1]) < -20) {direction[1] = 10;};
    if ((direction[2] + direction[0]) > (window.innerWidth - 40)) {direction[0] = -10;};
    if ((direction[3] + direction[1]) > (window.innerHeight - 40)) {direction[1] = -10;};

    // set the transformation destination

    direction[2] += direction[0];
    direction[3] += direction[1];
    
    // transform the ball logo

    circle.style.transform = "translate(" + (direction[2]) + "px ," + (direction[3]) +"px )";

    setTimeout(bouncy, 100);

}






