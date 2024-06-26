import { questions, questionElement, answerButtons, nextButton } from './const.js';

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswers = [];
let correctAnswerCount = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next question";
    nextButton.removeEventListener("click", startQuiz);
    nextButton.addEventListener("click", handleNextButton);
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    correctAnswerCount = currentQuestion.answers.filter(answer => answer.correct).length;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    selectedAnswers = [];
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    const currentQuestion = questions[currentQuestionIndex];

    if (correctAnswerCount > 1) {
        if (selectedAnswers.length < correctAnswerCount) {
            if (isCorrect) {
                selectedBtn.classList.add("correct");
                selectedAnswers.push(selectedBtn);
                selectedBtn.disabled = true;

                if (selectedAnswers.length === correctAnswerCount) {
                    nextButton.style.display = "block";
                    Array.from(answerButtons.children).forEach(button => {
                        button.disabled = true;
                    });
                }
            } else {
                selectedBtn.classList.add("incorrect");
                Array.from(answerButtons.children).forEach(button => {
                    button.disabled = true;
                });
                nextButton.style.display = "block";
            }
        }
    } else {
        Array.from(answerButtons.children).forEach(button => {
            button.disabled = true;
        });

        if (isCorrect) {
            selectedBtn.classList.add("correct");
            score++;
        } else {
            selectedBtn.classList.add("incorrect");
        }

        nextButton.style.display = "block";
    }
}

function handleNextButton() {
    const currentQuestion = questions[currentQuestionIndex];

    const allCorrect = selectedAnswers.every(btn => btn.dataset.correct === "true");

    if (correctAnswerCount > 1) {
        if (allCorrect && selectedAnswers.length === correctAnswerCount) {
            score++;
        }
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Your score: ${score} of ${questions.length}`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
    nextButton.removeEventListener("click", handleNextButton);
    nextButton.addEventListener("click", startQuiz);
}

nextButton.addEventListener("click", handleNextButton);

startQuiz();
