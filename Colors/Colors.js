function Colors(color) {
    return color.color;
}
var color = [];
color.push("red");
color.push("green");
color.push("blue");
var random = Math.floor(Math.random() * color.length);
var randomColor = color[random];
var input = document.getElementById("guess");
var value = input.value;
var a = null;
function GetCorrectColor() {
    if (value == "red" && randomColor == "red") {
        var correctColor = document.getElementById("color1");
        correctColor.style.backgroundColor = "red";
        correctColor.textContent = "Correct Color is Red: ";
    }
    else if (value == "green" && randomColor == "green") {
        var correctColor = document.getElementById("color2");
        correctColor.style.backgroundColor = "green";
        correctColor.textContent = "Correct Color Green";
    }
    else if (value == "blue" && randomColor == "blue") {
        var correctColor = document.getElementById("color3");
        correctColor.style.backgroundColor = "blue";
        correctColor.textContent = "Correct Color is: Blue";
    }
    else if (value != randomColor &&
        randomColor != "blue" &&
        randomColor != "green") {
        var correctColor = document.getElementById("color1");
        correctColor.style.backgroundColor = "red";
        correctColor.textContent = "Correct Color Red";
    }
    else if (value != randomColor &&
        randomColor != "green" &&
        randomColor != "blue") {
        var correctColor = document.getElementById("color1");
        correctColor.style.backgroundColor = "red";
        correctColor.textContent = "Correct Color was: Red";
    }
    else if (value != randomColor &&
        randomColor != "red" &&
        randomColor != "blue") {
        var correctColor = document.getElementById("color2");
        correctColor.style.backgroundColor = "green";
        correctColor.textContent = "Correct Color is: Green";
    }
}
var button = document.getElementById("button");
button.addEventListener("click", GetCorrectColor);
