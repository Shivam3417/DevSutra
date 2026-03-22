const startBtn = document.getElementById("startQuizBtn");
const quizSection = document.getElementById("quizSection");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const leaderboardEl = document.getElementById("leaderboard");

let current = 0;
let score = 0;

const questions = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: 1
  },
  {
    question: "HTML stands for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Multi Language",
      "None"
    ],
    answer: 0
  }
];

startBtn.onclick = () => {
  quizSection.classList.remove("hidden");
  loadQuestion();
};

function loadQuestion() {
  nextBtn.classList.add("hidden");
  const q = questions[current];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.innerText = opt;

    btn.onclick = () => checkAnswer(index);

    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const buttons = optionsEl.querySelectorAll("button");

  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === questions[current].answer) btn.classList.add("correct");
    if (index === selected && selected !== questions[current].answer)
      btn.classList.add("wrong");
  });

  if (selected === questions[current].answer) score++;

  nextBtn.classList.remove("hidden");
}

nextBtn.onclick = () => {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    alert("Quiz Finished! Score: " + score);
    saveScore();
    current = 0;
    score = 0;
    loadQuestion();
  }
};

function saveScore() {
  let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  leaderboard.push({ name: "Player", score: score });
  leaderboard.sort((a, b) => b.score - a.score);
  leaderboard = leaderboard.slice(0, 5);
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
  loadLeaderboard();
}

function loadLeaderboard() {
  let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  leaderboardEl.innerHTML = "";
  leaderboard.forEach(player => {
    const li = document.createElement("li");
    li.innerText = player.name + " - " + player.score;
    leaderboardEl.appendChild(li);
  });
}

loadLeaderboard();