const quizData = [{

    question :"Which Eldian Family does Levi belong in ?",
    answers: ["Yeager","Friz","Ackerman","Reiss","Azumabito"],
    correct: 2,
    
},

{
    question: "What is the number of  the Main titans in Attack In Titan?",
    answers: ["9","3","5","2","1"],
    correct: 0,
},

{
    question:"Which Titan does Annie Leonhart have ?",
    answers: ["Attack Titan","Warhammer Titan","Beast Titan","Female Titan","Founder Titan"],
    correct: 3,

},
{
    question:"What is the name of the first king of the walls who eased humanity's memories using Founding Titan`s powers ?",
    answers: ["Zeke Yeager","Rod Reiss","Karl Friz","Frieda Reiss","Uri Reiss"],
    correct: 2,
},
{
    question: "What is the name of the Titan that possesses the ability to harden its skin and create crystal-like structures ?",
    answers : ["Female Titan", "Beast Titan", "Armored Titan","Attack Titan","War Hammer Titan"],
    correct: 4,
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


function loadQuestion() {
    const current = quizData[currentQuestion]
    questionElement.textContent = current.question
    answersElement.innerHTML = ""
    current.answers.forEach((answer,index) => {
        const button = document.createElement("button")
        button.className = "answer-btn"
        button.textContent = answer
        button.onclick = () => selectAnswer(button , index)
        answersElement.appendChild(button)
    })
    
    questionCounter.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`
    const progress = ((currentQuestion + 1) /   quizData.length) * 100
    progressFill.style.width = progress + "%"


    selectedAnswer = null
    nextBtn.classList.remove("active")


}


function selectAnswer(button,answerIndex){
    document.querySelectorAll(".answer-btn").forEach((btn) => {
        btn.classList.remove("selected")
    }) 

    button.classList.add("selected")
    selectedAnswer = answerIndex
    nextBtn.classList.add("active")
    
}
function nextQuestion() {
    if (selectedAnswer === null) return

    if (selectedAnswer === quizData[currentQuestion].correct){
        score++
    }

    currentQuestion++

    if (currentQuestion < quizData.length){
        loadQuestion()
    } else {
        if (score >= 4) {
            window.location.href = "victory.html"
        } else {
            window.location.href = "attack-loss.html"
        }

    }

}
nextBtn.addEventListener("click", nextQuestion)

loadQuestion()