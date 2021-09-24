const base = document.querySelector("#base");
const height = document.querySelector("#height");

const calcAreaBtn = document.querySelector(".btn--area");

const output = document.querySelector("#output");

const calculateArea = () => {
  if (base.value && height.value) {
    if (base.value < 0 || height.value < 0) {
      return (output.innerText = "Please enter positive values");
    }

    let area = 0.5 * base.value * height.value;
    output.innerHTML = `Area of the Triangle is ${area} cm${"2".sup()}`;
  } else {
    output.innerText = "Please enter values of both, base and height.";
  }
};

calcAreaBtn.addEventListener("click", calculateArea);
