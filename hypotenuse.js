// inputs
const sideA = document.getElementById("side-a");
const sideB = document.getElementById("side-b");

// button
const calculateHypoBtn = document.querySelector(".btn--hypo");

// output
const output = document.getElementById("output");

const calculateHypotenuse = () => {
  if (sideA.value && sideB.value) {
    if (sideA.value <= 0 || sideB.value <= 0) {
      return (output.innerText = "Please enter positive values");
    }
    let hypotenuse =
      Math.round(
        Math.sqrt(sideA.value * sideA.value + sideB.value * sideB.value) * 100
      ) / 100;
    output.innerText = `The length of the hypotenuse is ${hypotenuse}`;
  } else {
    output.innerText = "Please enter length of both sides";
  }
};

calculateHypoBtn.addEventListener("click", calculateHypotenuse);
