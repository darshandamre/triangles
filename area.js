const base = document.querySelector("#base");
const height = document.querySelector("#height");

const calcAreaBtn = document.querySelector(".btn--area");

const output = document.querySelector("#output");

const calculateArea = () => {
  if (base.value && height.value) {
    let area = 0.5 * base.value * height.value;
    output.innerText = `Area of the Triangle is ${area}`;
  } else {
    output.innerText = "Please enter values of both, base and height.";
  }
};

calcAreaBtn.addEventListener("click", calculateArea);
