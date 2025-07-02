const quizData = [{

    question : "Who is the First Hokage ?",
    answers: ["Madara Uchiha","Naruto  Uzumaki","Baruto Uzumaki","Hashirama Senju","Kakashi Hatake"],
    correct:3,

    },


  {
    question: " Who were the two people that Murdered the whole  Uchiha Clan in one night ?",
    answers : ["Sasuke Uchiha and Naurto","Madara Uchiha and Obito Uchiha ", "Obito Uchiha and Itachi Uchiha ","Danzo and Tobirama"],
    correct:2,
  },

  {
    question : "What was the reason Itachi Uchiha Murdered the whole Uchiha Clan ? ",
    answers: ["For the Jokes", "To stop the war with the uchiha and the villige","To avenge Sasuke","The hidden leaf brain washed Itachi to do it"," The Second Hokage Told Itachi to do so"],
    correct:1,

  },  

  {
    question : "Who was the first Otsutsuki to vist Earth?",
    answers : ["Kaguya","Momoshiki","Indra","Isshiki","Shibai"],
    correct:0,
  },

{
    question: "What is Naruto`s biggest dream ?",
    answers : ["To dye his hair red", "To write a romantic book","To explore the outside world","To be the pirate king","To become the Hokage"],
    correct:4,
},

]

let currentQuestion = 0
let selectedAnswer = null
let score = 0


const questionElement = document.getElementById("question")
const answersElement = document.getElementById("answers")
const nextBtn = document.getElementById("nextBtn")
const questionCounter = document.getElementById("questionCounter")
const progressFill = document.getElementById("progressFill")
const scoreDisplay = document.getElementById("scoreDisplay")

function loadQuestion(){
    const current = quizData[currentQuestion]
    questionElement.textContent = current.question
    answersElement.innerHTML = ""
    current.answers.forEach((answer,index) => {
        const button = document.createElement("button")
        button.className = "answer-btn"
        button.textContent = answer
        button.onclick = () => selectAnswer(button, index)
        answersElement.appendChild(button)

    })

    questionCounter.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`
    const progress = ((currentQuestion + 1 ) / quizData.length) * 100
    progressFill.style.width =progress + "%"
    scoreDisplay.textContent = `Score: ${score}`


    selectedAnswer = null
    nextBtn.classList.remove("active")
}

function selectAnswer(button,answerIndex) {
    document.querySelectorAll(".answer-btn").forEach((btn) => {
        btn.classList.remove("selected")
    })
    button.classList.add("selected")
    selectedAnswer = answerIndex
    nextBtn.classList.add("active")

}

function nextQuestion() {
    if (selectedAnswer === null ) return

    if(selectedAnswer === quizData[currentQuestion].correct) {
        score++
    }

    currentQuestion++

    if(currentQuestion < quizData.length) {
        loadQuestion()
    } else{
        localStorage.setItem('quizScore' , score);
        if (score>= 4){
            window.location.href = "naruto-win.html"
        } else {
            window.location.href = "naruto-loss.html"
        }
    }
}

nextBtn.addEventListener("click",nextQuestion)
loadQuestion()