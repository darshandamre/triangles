// inputs
const anglesInput = document.querySelectorAll(".angles");

// output
const output = document.querySelector(".output");

// button
const checkBtn = document.querySelector(".btn--check");

const sumOfAngles = (angle1, angle2, angle3) => {
  return Number(angle1) + Number(angle2) + Number(angle3);
};

const isTriangle = (sum) => {
  return sum === 180;
};

checkBtn.addEventListener("click", () => {
  let angles = Array.from(anglesInput).map((angle) => angle.value);
  let sum = sumOfAngles(...angles);
  let valuesEmpty = false;
  angles.forEach((angle) => {
    if (angle === "") {
      valuesEmpty = true;
    }
  });

  if (valuesEmpty) {
    output.innerText = "Please enter value of all three angles.";
  } else if (isTriangle(sum)) {
    output.innerText = "Yayy! The angles form a triangle.";
  } else {
    output.innerText = "Oh! The angles do not form a triangle.";
  }
});
