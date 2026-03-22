const startBtn = document.getElementById("startBtn");
const quizBox = document.getElementById("quizBox");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const timerEl = document.getElementById("timer");
const resultBox = document.getElementById("resultBox");
const questionNumber = document.getElementById("questionNumber");

const categorySelect = document.getElementById("category");
const difficultySelect = document.getElementById("difficulty");

let questions = [];
let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;
let userAnswers = [];

startBtn.addEventListener("click", startQuiz);

async function startQuiz() {
  quizBox.classList.remove("hidden");
  resultBox.classList.add("hidden");

  currentIndex = 0;
  score = 0;
  userAnswers = [];

  const category = categorySelect.value;
  const difficulty = difficultySelect.value;

  const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    questions = data.results;

    if (!questions.length) {
      alert("No questions found. Try different difficulty.");
      return;
    }

    loadQuestion();
  } catch (error) {
    alert("Failed to load questions. Check your internet.");
  }
}

function loadQuestion() {
  resetState();
  const q = questions[currentIndex];

  questionNumber.innerText = `Question ${currentIndex + 1} / ${questions.length}`;
  questionEl.innerHTML = decodeHTML(q.question);

  const answers = [...q.incorrect_answers, q.correct_answer];
  shuffleArray(answers);

  answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerHTML = decodeHTML(answer);
    btn.onclick = () => selectAnswer(btn, q.correct_answer);
    optionsEl.appendChild(btn);
  });

  startTimer();
}

function selectAnswer(button, correctAnswer) {
  clearInterval(timer);

  const buttons = optionsEl.querySelectorAll("button");
  const selectedAnswer = button.innerHTML;
  const correctDecoded = decodeHTML(correctAnswer);

  buttons.forEach(btn => {
    if (btn.innerHTML === correctDecoded) {
      btn.classList.add("correct");
    } else {
      btn.classList.add("wrong");
    }
    btn.disabled = true;
  });

  const isCorrect = selectedAnswer === correctDecoded;

  if (isCorrect) score++;

  userAnswers.push({
    question: questions[currentIndex].question,
    correct: correctAnswer,
    selected: selectedAnswer,
    isCorrect: isCorrect
  });

  nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  clearInterval(timer);

  quizBox.classList.add("hidden");   // question card hide
  resultBox.classList.remove("hidden"); // result card show

  const finalScore = document.getElementById("finalScore");
  const performanceText = document.getElementById("performanceText");
  const reviewSection = document.getElementById("reviewSection");

  finalScore.innerText = `${score}/${questions.length}`;

  const percent = (score / questions.length) * 100;

  if (percent >= 80) {
    performanceText.innerText = "🔥 Excellent Performance!";
    performanceText.style.color = "#16a34a";
  } 
  else if (percent >= 50) {
    performanceText.innerText = "👍 Good Job! Keep Improving";
    performanceText.style.color = "#ca8a04";
  } 
  else {
    performanceText.innerText = "📘 Keep Practicing!";
    performanceText.style.color = "#dc2626";
  }

  reviewSection.innerHTML = "";

  userAnswers.forEach((item, index) => {
    if (!item.isCorrect) {
      const div = document.createElement("div");
      div.classList.add("review-card");

      div.innerHTML = `
        <h4>Q${index + 1}: ${decodeHTML(item.question)}</h4>
        <p>Your Answer: <span class="wrong-answer">${item.selected}</span></p>
        <p>Correct Answer: <span class="correct-answer">${decodeHTML(item.correct)}</span></p>
      `;

      reviewSection.appendChild(div);
    }
  });

  if (score === questions.length) {
    reviewSection.innerHTML = "<p style='color:green;font-weight:bold;'>🎉 Perfect Score! No wrong answers.</p>";
  }
}

function resetState() {
  optionsEl.innerHTML = "";
  nextBtn.classList.add("hidden");
  timeLeft = 30;
  timerEl.innerText = timeLeft;
}

function startTimer() {
  clearInterval(timer);

  timer = setInterval(() => {
    timeLeft--;
    timerEl.innerText = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);

      userAnswers.push({
        question: questions[currentIndex].question,
        correct: questions[currentIndex].correct_answer,
        selected: "Not Answered",
        isCorrect: false
      });

      nextBtn.classList.remove("hidden");
    }
  }, 1000);
}

function decodeHTML(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function shuffleArray(array) {
  array.sort(() => Math.random() - 0.5);
}