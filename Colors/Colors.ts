type Color = {
  color?: number;
};

function Colors(color: Color): any {
  return color.color;
}

const color: any = [];
color.push("red");
color.push("green");
color.push("blue");

const random = Math.floor(Math.random() * color.length);
let randomColor = color[random];

const input: any = document.getElementById("guess");
const value = input.value;

let a: any = null;

function GetCorrectColor() {
  if (value == "red" && randomColor == "red") {
    const correctColor: any = document.getElementById("color1");
    correctColor.style.backgroundColor = "red";
    correctColor.textContent = "Correct Color is Red: ";
  } else if (value == "green" && randomColor == "green") {
    const correctColor: any = document.getElementById("color2");
    correctColor.style.backgroundColor = "green";
    correctColor.textContent = "Correct Color Green";
  } else if (value == "blue" && randomColor == "blue") {
    const correctColor: any = document.getElementById("color3");
    correctColor.style.backgroundColor = "blue";
    correctColor.textContent = "Correct Color is: Blue";
  } else if (
    value != randomColor &&
    randomColor != "blue" &&
    randomColor != "green"
  ) {
    const correctColor: any = document.getElementById("color1");
    correctColor.style.backgroundColor = "red";
    correctColor.textContent = "Correct Color Red";
  } else if (
    value != randomColor &&
    randomColor != "green" &&
    randomColor != "blue"
  ) {
    const correctColor: any = document.getElementById("color1");
    correctColor.style.backgroundColor = "red";
    correctColor.textContent = "Correct Color was: Red";
  } else if (
    value != randomColor &&
    randomColor != "red" &&
    randomColor != "blue"
  ) {
    const correctColor: any = document.getElementById("color2");
    correctColor.style.backgroundColor = "green";
    correctColor.textContent = "Correct Color is: Green";
  }
}

const button: any = document.getElementById("button");

button.addEventListener("click", GetCorrectColor);
