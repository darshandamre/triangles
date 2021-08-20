const base = document.querySelector("#base");
const height = document.querySelector("#height");

const calcAreaBtn = document.querySelector(".btn--area");

const output = document.querySelector("#output");

const calculateArea = () => {
  let area = 0.5 * base.value * height.value;
  output.innerText = `Area of the Triangle is ${area}`;
};

calcAreaBtn.addEventListener("click", calculateArea);
