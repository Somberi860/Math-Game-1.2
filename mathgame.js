const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const resetButton = document.getElementById('reset')


score = 0;
question = 0;


let shuffledQuestions, currentQuestionIndex

resetButton.addEventListener('click', reset)
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .10)
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
  resetButton.classList.add('hide')
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  
  question = question + 1;
  //console.log(question);
    var element = document.getElementById('answer-buttons');
    var children = element.children;
   for(var i=0; i<children.length; i++){
               var child = children[i];
               if(correct && (child.getAttribute('data-correct') == true || child.getAttribute('data-correct') == 'true' )) {
               score = score+1;
               //console.log(score);
               child.classList.add('correct')
               document.getElementById('score').innerHTML = 'PUNTOS:' + score + '/' + question;
               } else if (child.getAttribute('data-correct') == true || child.getAttribute('data-correct') == 'true' ) {
                 child.classList.add('correct')
                 document.getElementById('score').innerHTML = 'PUNTOS:' + score + '/' + question;
               } else {
                 child.classList.add('wrong')
                 document.getElementById('score').innerHTML = 'PUNTOS:' + score + '/' + question;
                }
                if (shuffledQuestions.length > currentQuestionIndex + 1) {
                  nextButton.classList.remove('hide');
                } else {
                  resetButton.classList.remove('hide')
                }
              }
            }
            
            function reset (){
              resetButton.classList.remove('hide');
              score = 0;
              question =0; 
              document.getElementById('score').innerHTML = 'PUNTOS:' + score + '/' + question;
              startGame();
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
    question: '??Verdadero o falso? Una divisi??n entera es aquella en la que el resto es cero?',
    answers: [
      { text: 'Verdadero', correct: false },
      { text: 'Falso', correct: true }
    ]
  },
  {
    question: 'Un perro pesa 20 kilos y un cachorro pesa 10 kilos menos que ??l, ??cu??nto pesa la cr??a?',
    answers: [
      { text: '30 Kilos', correct: false },
      { text: '10 Kilos', correct: true },
      
    ]
  },
  {
    question: '??C??mo se llama el pol??gono de siete lados?',
    answers: [
      { text: 'Hept??gono', correct: true },
      { text: 'Hex??gono', correct: false },
      { text: 'Sept??gono', correct: false },
      
    ]
  },
  {
    question: '??Cu??l es el nombre del tri??ngulo que tiene dos lados iguales y uno desigual?',
    answers: [
      { text: 'is??sceles', correct: true },
      { text: 'escaleno', correct: false },
      { text: 'equil??tero', correct: false }
    ]
  },
  {
    question: '??Cu??ntos metros es un hect??metro.?',
    answers: [
      { text: '10 metros', correct: false },
      { text: '1 metro', correct: false },
      { text: '100 metros', correct: true }
    ]
  },
  {
    question: 'Hoy han tra??do a la librer??a una caja con 125 libros y otra con 50 libros. Ya se han colocado 45 libros, ??para saber cu??ntos faltan por colocar, qu?? operaciones hay que realizar?',
    answers: [
      { text: 'Sumar los libros que han llegado (125 + 50) y restarle los 45 que se han colocado.', correct: true },
      { text: 'Restar 125 a los 45 que se han colocado', correct: false },
      
      
    ]
  },
  {
    question: '??C??mo puedes comprobar si has hecho bien una divisi??n?',
    answers: [
      { text: 'Volvi??ndola a hacer.', correct: false },
      { text: 'Multiplicando el cociente por el divisor y sumando el resto si lo hay.', correct: true },
      { text: 'Sumando el cociente por el divisor y el resto.', correct: false },
      
    ]
  },
  {
    question: '??Qu?? n??mero es mayor 37.4 o 37.09?',
    answers: [
      { text: '37.4', correct: true },
      { text: '37.09', correct: false },
      { text: 'Ni idea', correct: false }
    ]
  },
  {
    question: 'Si tienes un billete de 100???, dos billetes de 20??? y cuatro monedas de 1 ???, ??cu??nto dinero tienes en total?',
    answers: [
      { text: '140 euros', correct: false },
      { text: '144 euros', correct: true },
      { text: '154 euros', correct: false },
      
    ]
  },
  {
    question: '??Cu??nto es un lustro?',
    answers: [
      { text: '1 a??o', correct: false },
      { text: '10 a??os', correct: false },
      { text: '5 a??os', correct: true }
    ]
  }
]

