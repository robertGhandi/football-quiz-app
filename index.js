const imageEl = document.getElementById("footballer-image");
const userAnswerEl = document.getElementById("user-answer");
const submitBtn = document.getElementById("submit-btn");
const scoreEl = document.getElementById("score");
const quizSection = document.getElementById("quiz");
const resultSection = document.getElementById("result");
const restartBtn = document.getElementById("restart-btn");
const feedbackEl = document.getElementById("feedback");

const questions = [
	{
		image: "images/saka_46.webp",
		answer: "Bukayo Saka",
	},
	{
		image: "images/Benzema-1.jpg",
		answer: "Karim Benzema",
	},
	{
		image: "images/kane.jpg",
		answer: "Harry Kane",
	},
	{
		image: "images/Cole Palmer England 2024 (4).jpg",
		answer: "Cole Palmer",
	},
	{
		image: "images/Cristiano Ronaldo Portugal 2024 (4).jpg",
		answer: "Cristiano Ronaldo",
	},
	{
		image: "images/mo salah.webp",
		answer: "Mo Salah",
	},
	{
		image: "images/mbappe.webp",
		answer: "Kylian Mbappe",
	},
    {
		image: "images/Vinicius-Junior.webp",
		answer: "Vinicius Junior",
	},
	{
		image: "images/ademola lookman.jpg",
		answer: "Ademola Lookman",
	},
    {
		image: "images/victor osimhen.jpg",
		answer: "Victor Osimhen",
	},
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
	const currentQuestion = questions[currentQuestionIndex];
	imageEl.src = currentQuestion.image;
	userAnswerEl.value = "";
	feedbackEl.innerHTML = "";
}

function handleAnswerSubmission() {
	const userAnswer = userAnswerEl.value.trim();
	const correctAnswer = questions[currentQuestionIndex].answer;
	const correctAnswerParts = correctAnswer.toLowerCase().split(" ");
	const isCorrect = correctAnswerParts.some((part) =>
		userAnswer.includes(part)
	);

	if (isCorrect) {
		score++;
		feedbackEl.innerHTML = `<span style="color: green;">Correct!</span>`;
	} else {
		feedbackEl.innerHTML = `<span style="color: red;">Wrong!</span`;
	}

	currentQuestionIndex++;
	setTimeout(() => {
		if (currentQuestionIndex < questions.length) {
			loadQuestion();
		} else {
			showResults();
		}
	}, 1000);
}

function showResults() {
	quizSection.classList.add("hidden");
	resultSection.classList.remove("hidden");
	scoreEl.textContent = `${score} / ${questions.length}`;
}

function restartQuiz() {
	currentQuestionIndex = 0;
	score = 0;
	quizSection.classList.remove("hidden");
	resultSection.classList.add("hidden");
	loadQuestion();
}

submitBtn.addEventListener("click", handleAnswerSubmission);

restartBtn.addEventListener("click", restartQuiz);

loadQuestion();
