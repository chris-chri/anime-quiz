const quizData = [{

    question: "Who is the captain of the Straw Hat Pirates ?",
    answers: ["Gol D. Roger","Nami","Monkey D.Luffy","Black Beard","White beard"],
    correct:2,
},

{
    question:"Who was the first member to join Luffy`s crew after Zoro ?",
    answers: ["Zoro","Nami","Usopp","Sanji","Franky"],
    correct:1,
},

{
    question: "What is the ultimate treasure that luffy is searching for?",
    answers:["1 million dollars","A Golden Watch","A Massive diamond"," The Two Piece","The One Piece"],
    correct:4,
},

{
    question:"What is the name of Luffy`s signature attack ?",
    answers:["Gum-Gum Pistol"," Black Flash","Rasengan","Kamehameha","Bankai"],
    correct:0,
},

{
    question:"What is  Luffy`s main goal?",
    answers: ["To be come the Hokage","To Be the Riches","To become the Pirate King","To get a girlfriend","To find his Dad"],
    correct:2,

}
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
    current.answers.forEach((answer,index) =>
    {
        const button = document.createElement("button")
        button.className = "answer-btn"
        button.textContent = answer
        button.onclick = () => selectAnswer (button , index)
        answersElement.appendChild(button)
    })

    questionCounter.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`
    const progress = ((currentQuestion + 1) / quizData.length) * 100
    progressFill.style.width = progress + "%"
    scoreDisplay.textContent = `Score: ${score}`

    selectedAnswer = null
    nextBtn.classList.remove("active")
} 


function selectAnswer(button, answerIndex) {
    document.querySelectorAll(".answer-btn").forEach((btn) => {
        btn.classList.remove("selected")
    })


    button.classList.add("selected")
    selectedAnswer = answerIndex
    nextBtn.classList.add("active")
    }

    function nextQuestion() {
        if (selectedAnswer === null ) return

        if (selectedAnswer === quizData[currentQuestion].correct){
            score++
        }

        currentQuestion++

        if (currentQuestion < quizData.length) {
            loadQuestion()
        } else {
            localStorage.setItem('quizScore',score);
            if (score >= 4) {
                  window.location.href = "one-win.html"
            } else {
                window.location.href = "one-loss.html"
            }
        }
           

    }
    nextBtn.addEventListener("click", nextQuestion)
    loadQuestion()