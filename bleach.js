const quizData = [
    
    {
    question: "Who is the main antagonist in Bleach: Thousand-Year Bldood War?",
    answers: ["Aizen","Ichigo Kurosaki","Yhwach","Uryu Ishida","Byakuya Kuchiki"],
    correct: 2,
    },

{ 
    question:"What Race is Yhwach ?",
    answers: ["Quincy","Human","Shinigami","Soul","Dragon"],
    correct: 0,

},

{
    question: "What is the special ability of Yhwach`s 'The Almighty' power?",
    answers: ["Time Manipulation","Reality alteration","Immense strength","Future sight and alteration","Healing regeneration"],
    correct: 3,
},

{
    question : "What is the name of Ichigo's Zanpakuto, revealed in the newest season?",
    answers:["Zangetsu","Mugestu","Getsuga Tensho","Tensa Zangestu","True Zangetsu"],
    correct: 4,
},

{
    question:" What does The 'Auswählen' ability used by Yhwatch?",
    answers: ["Steal Bankai powers","Steal Shinigami powers","Steal Quincy powers","Steal Hollow powers","Steal Arrancar powers"],
    correct: 2,
}

]

let currentQuestion = 0
let selectedAnswer = null
let score = 0

const questionElement =document.getElementById("question1")
const answersElement = document.getElementById("answers1")
const nextBtn = document.getElementById("nextBtn1")
const questionCounter = document.getElementById("questionCounter1")
const progressFill = document.getElementById("progressFill")
const scoreDisplay = document.getElementById("scoreDisplay")
function loadQuestion(){
    const current = quizData[currentQuestion]
    questionElement.textContent = current.question
    answersElement.innerHTML = ""
    current.answers.forEach((answer,index) =>{
        const button = document.createElement("button")
        button.className = "answer-btn"
        button.textContent = answer
        button.onclick = () => selectAnswer(button, index)
        answersElement.appendChild(button)
    })


    questionCounter.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`
    const progress = ((currentQuestion + 1) / quizData.length) * 100
    progressFill.style.width = progress + "%"
    scoreDisplay.textContent = `Score: ${score}`


    selectedAnswer = null
    nextBtn.classList.remove("active")
}

function selectAnswer(button,answerIndex){
    document.querySelectorAll(".answer-btn").forEach((btn) =>{
        btn.classList.remove("selected")

    })

    button.classList.add("selected")
    selectedAnswer = answerIndex
    nextBtn.classList.add("active")
}

function nextQuestion(){
    if (selectedAnswer === null) return

    if (selectedAnswer === quizData[currentQuestion].correct){
        score++
    }

    currentQuestion++

    if (currentQuestion < quizData.length) {
        loadQuestion()
    }  else {
        localStorage.setItem('quizScore',score);
        if  (score >= 4) {
            window.location.href = "bleach-win.html"
        } else {

            window.location.href = "bleach-loss.html"

        }
    }
}

nextBtn.addEventListener("click", nextQuestion)

loadQuestion()