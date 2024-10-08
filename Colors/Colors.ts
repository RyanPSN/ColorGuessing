const color: Array<any> = [];
color.push("red");
color.push("green");
color.push("blue");

const randomColors = Math.floor(Math.random() * color.length);
const randomColor = color[randomColors];

type EmptyMessage = null | undefined;

const isEmpty = <EmptyMessage>(a: any) => {
  return a == "";
};

const randomColorGuess = () => {
  const guess: any = document.getElementById("guess");
  const value = guess.value;
  if (isEmpty(value)) {
    alert("Empty..");
  }

  if (value == "red" && randomColor == "red") {
    const color1: any = document.getElementById("color1");
    color1.style.backgroundColor = "red";

    color1.textContent = "Your Correct Color is Red ";
  } else if (value == "green" && randomColor == "green") {
    const color1: any = document.getElementById("color2");
    color1.style.backgroundColor = "Green";
    color1.textContent = "Your Correct Color is Green ";
  } else if (value == "blue" && randomColor == "blue") {
    const color1: any = document.getElementById("color3");
    color1.style.backgroundColor = "blue";
    color1.textContent = "Your Correct Color is Blue";
  } else if (value == "red" && randomColor == "red") {
    const color1: any = document.getElementById("color1");
    color1.style.backgroundColor = "red";
    color1.textContent = "Your Correct Color is Red";
  } else if (value == "green" && randomColor == "blue") {
    const color1: any = document.getElementById("color1");
    color1.style.backgroundColor = "blue";
    color1.textContent = "Your Correct Color is Blue ";
  } else if (value == "green" && randomColor != "blue") {
    const color1: any = document.getElementById("color1");
    color1.style.backgroundColor = "blue";
    color1.textContent = "Your Correct Color is Blue ";
  }
};

const button: any = document.getElementById("button");
button.addEventListener("click", randomColorGuess);
