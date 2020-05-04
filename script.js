const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Who is the favourite player of the developer of this quiz?',
    answers: [
      { text: 'Damian Lillard', correct: true },
      { text: 'Stephen Curry', correct: false },
      { text: 'LeBron James', correct: false },
      { text: 'Paul George', correct: false },
    //   { text: '82 points', correct: false }
    ]
  },
    {
      question: 'What team did Kobe Bryant retire with?',
      answers: [
        { text: 'Chicago Bulls', correct: false },
        { text: 'Charlotte Hornets', correct: false },
        { text: 'Los Angeles Clippers', correct: false },
        { text: 'Los Angeles Lakers', correct: true }
      ]
    },
    {
      question: 'Which legend is on the NBA official logo',
      answers: [
      //   { text: 'John Stockton', correct: false },
        { text: "Shaq O'Neil", correct: false},
        { text: 'Jerry West', correct: true },
        { text: 'Bill Russell', correct: false },
        {text: 'Derrick Jones Jr.', correct: false}
      ]
    },
    {
        question: 'Which movie did Michael Jordan appear in?',
        answers: [
        //   { text: 'John Stockton', correct: false },
          { text: "Thunderstruck", correct: false},
          { text: 'Like Mike', correct: false},
          { text: 'Space Jam', correct: true },
          {text: 'Train Wreck', correct: false}
        ]
      },
      {
        question: 'Which player scored 8 points in 9 seconds to defeat the Knicks in a playoff game?',
        answers: [
        //   { text: 'John Stockton', correct: false },
          { text: "Clyde Drexler", correct: false},
          { text: 'Reggie Miller', correct: true },
          { text: 'Scottie Pippen', correct: false },
          {text: 'Jalen Rose', correct: false}
        ]
      },
      {
        question: 'Which of these players played for the Warriors',
        answers: [
        //   { text: 'John Stockton', correct: false },
          { text: "DeMarcus Cousins", correct: false},
          { text: 'Anthony Davis', correct: true },
          { text: 'Julius Randle', correct: false },
          {text: 'Myles Turner', correct: false}
        ]
      },
    {
      question: 'How many points did Wilt Chamberlain score in an NBA all-time record?',
      answers: [
        { text: '70 points', correct: false },
        { text: '85', correct: false },
        { text: '102', correct: false },
        { text: '100', correct: true },
      //   { text: '82 points', correct: false }
      ]
    },
    {
      question: 'Which player has won multiple sixth man of the year awards?',
      answers: [
        { text: 'Montrezl Harrell', correct: false },
        { text: 'Eric Gordon', correct: false },
        { text: 'Spencer Dinwiddie', correct: false },
        { text: 'Lou Williams', correct: true },
      //   { text: '82 points', correct: false }
      ]
    },
    {
      question: 'Which team drafted Karl-Anthony Towns',
      answers: [
        { text: 'Chicago Bulls', correct: false },
        { text: 'Minnesota Tiberwolves', correct: true },
        { text: 'New Orleans Pelicans', correct: false },
        { text: 'Cleveland Cavaliers', correct: true },
      //   { text: '82 points', correct: false }
      ]
    },
    {
      question: 'What team did Kevin Garnet retire with?',
      answers: [
        { text: 'Brooklyn Nets', correct: false },
        { text: 'Boston Celtics', correct: false },
        { text: 'Los Angeles Clippers', correct: false },
        { text: 'Minnesota Timberwolves', correct: true },
      //   { text: '82 points', correct: false }
      ]
    },
    {
      question: 'What college did Anthony Davis play for?',
      answers: [
        { text: 'Kentucky', correct: true },
        { text: 'North Carolina', correct: false },
        { text: 'Duke', correct: false },
        { text: 'Michigan St.', correct: false },
      //   { text: '82 points', correct: false }
      ]
    },
    {
      question: 'What is the nickname of Dwyane Wade?',
      answers: [
        { text: 'Flash', correct: true },
        { text: 'The Mailman', correct: false },
        { text: 'The Answer', correct: false },
        { text: 'Superman', correct: false },
      //   { text: 'The Monster', correct: false }
      ]
    }
  ]