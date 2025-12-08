import { questions } from "./question.js";
const answerbuttons = document.getElementById("answer-buttons");
const questionsele = document.getElementById("question");
const nextbut = document.getElementById("next-btn");
let currentquesindex = 0;
let score = 0;
function startquiz() {
  currentquesindex = 0;
  score = 0;
  nextbut.innerHTML = "Next";
  showquestion();
}
function showquestion() {
  const currentques = questions[currentquesindex];
  questionsele.innerHTML = `${currentquesindex + 1}. ${currentques.question}`;
  answerbuttons.innerHTML = "";
  currentques.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () =>
      selectAnswer(button, answer.correct)
    );
    answerbuttons.appendChild(button);
    nextbut.style.display = "none";
  });
}
// Step 3: Handle answer selection
function selectAnswer(button, isCorrect) {
  if (isCorrect) {
    button.classList.add("correct"); // highlight green
    score++;
    // update score
  } else {
    button.classList.add("incorrect"); // highlight red
  }

  // Show the correct answer
  Array.from(answerbuttons.children).forEach((btn) => {
    if (
      btn !== button &&
      questions[currentquesindex].answers.find(
        (a) => a.text === btn.textContent
      ).correct
    ) {
      btn.classList.add("correct");
    }
    btn.disabled = true; // disable all buttons
  });
  console.log(score);
  // Show Next button
  nextbut.style.display = "block";
}
startquiz();
// showquestion()
nextbut.addEventListener("click", () => {
  currentquesindex += 1;
  if (currentquesindex < questions.length) {
    showquestion();
  } else if (currentquesindex === questions.length) {
    showscore();
    // showquestion()
  }
});
function showscore() {
  questionsele.innerHTML = `You scored ${score} out of ${questions.length}!`;
  answerbuttons.textContent = "";
  nextbut.textContent = "Play Again";
  // const button=document.createElement('button')
  // button.textContent='Quit'
  // document.getElementById('quiz-container').appendChild(button)
  nextbut.addEventListener("click", startquiz, { once: true });
}
console.log(questions.length);
