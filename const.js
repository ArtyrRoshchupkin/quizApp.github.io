export const questions = [
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
export const questionElement = document.getElementById("question");
export const answerButtons = document.getElementById("answer-buttons");
export const nextButton = document.getElementById("next-btn");