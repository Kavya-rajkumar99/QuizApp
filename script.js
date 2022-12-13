const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainer = document.querySelector("#question-container");
const questionEl = document.getElementById("question");
const answersList = document.getElementById("answersList");

let shuffledQuestions, currentQuestionIndex;
const startGame = () => {
  startButton.classList.add("hide");
  questionContainer.classList.remove("hide");
  currentQuestionIndex = 0;
  setNextQuestion();
};

const setNextQuestion = () => {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
};
const showQuestion = (question) => {
  questionEl.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", selectAnswer);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    answersList.appendChild(button);
  });
};

const resetState = () => {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answersList.firstChild) {
    answersList.removeChild(answersList.firstChild);
  }
};

const selectAnswer = (e) => {
  const selectedButton = e.target;
  setStatusClass(document.body, selectedButton.dataset.correct);
  Array.from(answersList.children).forEach((answerBtn) => {
    setStatusClass(answerBtn, answerBtn.dataset.correct);
  });
  if (currentQuestionIndex < shuffledQuestions.length - 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
};

const setStatusClass = (element, correct) => {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
};
const clearStatusClass = (element) => {
  element.classList.remove("correct");
  element.classList.remove("wrong");
};
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

const questions = [
  {
    question: "What is 2+2?",
    answers: [
      {
        text: "4",
        correct: true,
      },
      {
        text: "8",
        correct: false,
      },
      {
        text: "12",
        correct: false,
      },
      {
        text: "24",
        correct: false,
      },
    ],
  },
  {
    question: "What of the following is used in pencils?",
    answers: [
      {
        text: "Silicon",
        correct: false,
      },
      {
        text: "Charcoal",
        correct: false,
      },
      {
        text: "Graphite",
        correct: true,
      },
      {
        text: "Phosphorous",
        correct: false,
      },
    ],
  },
  {
    question: "What is the capital of India?",
    answers: [
      {
        text: "Ahmedabad",
        correct: false,
      },
      {
        text: "Delhi",
        correct: true,
      },
      {
        text: "Jaipur",
        correct: false,
      },
      {
        text: "Mumbai",
        correct: false,
      },
    ],
  },
  {
    question: "How many elements are there in the periodic table?",
    answers: [
      {
        text: "220",
        correct: false,
      },
      {
        text: "165",
        correct: false,
      },
      {
        text: "110",
        correct: false,
      },
      {
        text: "118",
        correct: true,
      },
    ],
  },
  {
    question: "How many bones are there in the human body?",
    answers: [
      {
        text: "206",
        correct: true,
      },
      {
        text: "103",
        correct: false,
      },
      {
        text: "100",
        correct: false,
      },
      {
        text: "203",
        correct: false,
      },
    ],
  },
];
