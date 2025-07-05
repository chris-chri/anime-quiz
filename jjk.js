const quizData = [{
    question: "Why is Toji so Powerfull?",
    answers:["He has Six eyes","He has the Ten Shadows","Massive cursed energy reserves","A Powerful Domain","Has  Heavenly Restriction"],
    correct: 4,

},

{
    question : "Who is considered the most strongest?",
    answers:["Satoru Gojo","Megumi Fushiguro","Maki Zenin","Toji","Geto"],
    correct:0,
},

{
    question: "Why is Yuji such an effective opponent to Mahito",
    answers: ["Yuji can leave Mahito`s Domain","Yuji can harm Mahito`s soul","Yuji has infinity and can't be touched","Yuji can control curses and control Mahito","Yuji has Ten shadows and can Summon Mahoraga"],
    correct:1,
},

{
    question:"What are the applications of Gojo`s infinity? ",
    answers:["Red, Blue,Purple","Red,Yellow,Green","Black,White,Grey","Red,Green,Orange","Brown,White,Black"],
    correct:0,
},


{
    question: "What is Megumi`s inate technique?",
    answers: ["Black flash","Curse Manipulation","Ten Shadows","Gambling","Fatherlessness"],
    correct:2,
}  

]


let currentQuestion = 0
let selectedAnswer = null
let score = 0

const questionElement = document.getElementById("question")
const answersElement = document.getElementById("answers")
const nextBtn = document.getElementById("nextBtn")
const progressCounter = document.getElementById("questionCounter")
const progressFill = document.getElementById("progressFill")
const scoreDisplay = document.getElementById("scoreDisplay")


function loadQuestion() {
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
    const progress = ((currentQuestion + 1) / quizData.length) * 100
    progressFill.style.width = progress + "%"
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
    if(selectedAnswer === null) return

    if(selectedAnswer === quizData[currentQuestion].correct){
       score++ 
    }

    currentQuestion++

    if (currentQuestion < quizData.length){
        loadQuestion()
    } else{
        localStorage.setItem('quizStore',score);
        if (score >= 4){
            window.location.href = "jjk-win.html"
        } else {
            window.location.href = "jjk-loss.html"
        }
    }
}
nextBtn.addEventListener("click", nextQuestion)
loadQuestion()