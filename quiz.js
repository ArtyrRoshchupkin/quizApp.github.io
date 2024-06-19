const questions = [
    {
        question: "How many planets are in the solar system?",
        answers: [
            { text: "8", correct: true },
            { text: "9", correct: false },
            { text: "10", correct: false },
            { text: "13", correct: false },
        ]
    },

    {
        question: "What is the freezing point of water?",
        answers: [
            { text: "-1", correct: false },
            { text: "0", correct: true },
            { text: "10", correct: false },
            { text: "13", correct: false },
        ]
    },

    {
        question: "What is the longest river in the world?",
        answers: [
            { text: "Nile", correct: false },
            { text: "Amazon", correct: true },
            { text: "Yandtze", correct: false },
            { text: "Lena", correct: false },
        ]
    },

    {
        question: "How many chromosomes are in the human genome?",
        answers: [
            { text: "41", correct: false },
            { text: "36", correct: false },
            { text: "47", correct: false },
            { text: "46", correct: true },
        ]
    },

    {
        question: "Which of these characters are friends with Harry Potter?, !!!more than one answer option",
        answers: [
            { text: "Ron", correct: true },
            { text: "Draco", correct: false },
            { text: "Walendemort", correct: false },
            { text: "Germiona", correct: true },
        ]
    },

    {
        question: "What is the capital of Canada?",
        answers: [
            { text: "Minsk", correct: false },
            { text: "Ottawa", correct: true },
            { text: "Toronto", correct: false },
            { text: "Piter", correct: false },
        ]
    },

    {
        question: "Which iphone is the brand new?",
        answers: [
            { text: "8", correct: false },
            { text: "11", correct: false },
            { text: "10", correct: false },
            { text: "15", correct: true },
        ]
    },

    {
        question: "what is the capital of GB",
        answers: [
            { text: "Liverpool", correct: false },
            { text: "Edinburgh", correct: false },
            { text: "Manchester", correct: false },
            { text: "London", correct: true },
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next question";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Your score: ${score} of ${questions.length}`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();

