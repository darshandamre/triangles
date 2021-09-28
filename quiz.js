const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector(".btn--submit");
const output = document.querySelector("#output");

const answers = ["90", "right angled", "3"];

const check = () => {
  let radios = document.getElementsByName(
    "question1" || "question2" || "question3"
  );

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return true;
    }
  }
  return false;
};

const calculateScore = () => {
  let score = 0;
  let index = 0;
  let data = new FormData(quizForm);

  if (!check()) {
    return (output.innerText = "Please select options");
  }

  for (let value of data.values()) {
    console.log(`-->${value}<--`);
    if (answers.includes(value)) {
      score += 1;
    }
    index += 1;
  }
  output.innerText = `Your score is ${score}`;
};

submitBtn.addEventListener("click", calculateScore);
