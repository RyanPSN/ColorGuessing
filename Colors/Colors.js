var color = [];
color.push("red");
color.push("green");
color.push("blue");
var randomColors = Math.floor(Math.random() * color.length);
var randomColor = color[randomColors];
var isEmpty = function (a) {
    return a == "";
};
var randomColorGuess = function () {
    var guess = document.getElementById("guess");
    var value = guess.value;
    if (isEmpty(value)) {
        alert("Empty..");
    }
    if (value == "red" && randomColor == "red") {
        var color1 = document.getElementById("color1");
        color1.style.backgroundColor = "red";
        color1.textContent = "Your Correct Color is Red ";
    }
    if (value == "green" && randomColor == "green") {
        var color1 = document.getElementById("color2");
        color1.style.backgroundColor = "Green";
        color1.textContent = "Your Correct Color is Green ";
    }
    if (value == "blue" && randomColor == "blue") {
        var color1 = document.getElementById("color3");
        color1.style.backgroundColor = "blue";
        color1.textContent = "Your Correct Color is Blue";
    }
    if (value == "red" && randomColor == "red") {
        var color1 = document.getElementById("color1");
        color1.style.backgroundColor = "red";
        color1.textContent = "Your Correct Color is Red";
    }
    if (value == "green" && randomColor == "blue") {
        var color1 = document.getElementById("color1");
        color1.style.backgroundColor = "blue";
        color1.textContent = "Your Correct Color is Blue ";
    }
    if (value == "green" && randomColor != "blue") {
        var color1 = document.getElementById("color1");
        color1.style.backgroundColor = "blue";
        color1.textContent = "Your Correct Color is Blue ";
    }
};
var button = document.getElementById("button");
button.addEventListener("click", randomColorGuess);
