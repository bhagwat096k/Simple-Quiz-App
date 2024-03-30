const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: 0,
      selectedAnswer: -1
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Jupiter", "Mars", "Venus", "Saturn"],
      correctAnswer: 1,
      selectedAnswer: -1
    },
    // Add more questions as needed
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const choicesElement = document.getElementById('choices');
  const nextButton = document.getElementById('next-btn');
  const resultElement = document.getElementById('result');
  const scoreElement = document.getElementById('score');
  const clearButton = document.getElementById('clear-btn');
  const confirmButton = document.getElementById('confirm-btn');
  
  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = '';
    currentQuestion.choices.forEach((choice, index) => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => selectAnswer(index));
      if (currentQuestion.selectedAnswer === index) {
        li.classList.add('selected');
      }
      choicesElement.appendChild(li);
    });
  }
  
  function selectAnswer(index) {
    questions[currentQuestionIndex].selectedAnswer = index;
    displayQuestion();
  }
  
  function clearAnswer() {
    questions[currentQuestionIndex].selectedAnswer = -1;
    displayQuestion();
  }
  
  function confirmAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.selectedAnswer !== -1) {
      if (currentQuestion.selectedAnswer === currentQuestion.correctAnswer) {
        resultElement.textContent = 'Correct!';
        score++;
      } else {
        resultElement.textContent = 'Incorrect!';
      }
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        displayQuestion();
      } else {
        endQuiz();
      }
    } else {
      resultElement.textContent = 'Please select an option.';
    }
  }
  
  function endQuiz() {
    questionElement.textContent = '';
    choicesElement.innerHTML = '';
    resultElement.textContent = '';
    nextButton.style.display = 'inline-block';
    scoreElement.textContent = `Your Score: ${score}/${questions.length}`;
  }
  
  nextButton.addEventListener('click', () => {
    displayQuestion();
    nextButton.style.display = 'none';
  });
  
  clearButton.addEventListener('click', clearAnswer);
  confirmButton.addEventListener('click', confirmAnswer);
  
  // Initial display
  displayQuestion();
  