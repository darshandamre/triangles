const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector(".btn--submit");
const output = document.querySelector("#output");

const answers = ["90", "right angled", "3"];

const calculateScore = () => {
  let score = 0;
  let index = 0;
  let data = new FormData(quizForm);
  for (let value of data.values()) {
    console.log(value);
    if (value === answers[index]) {
      score += 1;
    }
    index += 1;
  }
  output.innerText = `Your score is ${score}`;
};

submitBtn.addEventListener("click", calculateScore);
