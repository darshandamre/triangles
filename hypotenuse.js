// inputs
const sideA = document.getElementById("side-a");
const sideB = document.getElementById("side-b");

// button
const calculateHypoBtn = document.querySelector(".btn--hypo");

// output
const output = document.getElementById("output");

const calculateHypotenuse = () => {
  let hypotenuse =
    Math.round(
      Math.sqrt(sideA.value * sideA.value + sideB.value * sideB.value) * 100
    ) / 100;
  output.innerText = `The length of the hypotenuse is ${hypotenuse}`;
};

calculateHypoBtn.addEventListener("click", calculateHypotenuse);
