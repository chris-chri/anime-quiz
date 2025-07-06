const quizData = [
    {
    question : "What are the Powers of All For One?", 
    answers: ["Mind Control","Take other People`s Quirks and Store them.","Punches Very Hard","Has the Abilty to Titan Shift","The same as One For All"],
    correct: 1,
    },

    {
        question:"Who is The Final Holder Of One For All?",  
        answers:["All Almight", "Bakugo","Yoichi","Deku","All For One"],
        correct:3,
    },
    {
        question:"What was the first quirk?",
        answers:["One For All","All For All","The abilty to control fire","The abilty to control blood","The abilty Emanate light"],
        correct:4,
    },
    
    {
        question:"What does the Theory Quick Singulairy as known, (also know The Doomsday Theory) intail about quirks ?",
        answers:["Quirks become stronger each genration and quirks become super dangerous and destructive","Quirks Become Weak each generation","At a certain point Quirks wont exist","Quirks become canerous at some point","Everyone Gets the same Quirks at some point"],
        correct:0,
    },

    {
        question:"What is Deku`s Moms Quirk",
        answers:["The abilty To Fly","Mind control"," Fire control","Can pull small objects forwards herself","One For all"],
        correct:3,
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


function loadQuestion() {
    const current = quizData[currentQuestion]
    questionElement.textContent = current.question
    answersElement.innerHTML=""
    current.answers.forEach((answer, index) => {
        const button = document.createElement("button")
        button.className = "answer-btn"
        button.textContent = answer
        button.onclick = () => selectAnswer(button, index)
        answersElement.appendChild(button)
    })

    questionCounter.textContent = `Question ${currentQuestion + 1} of ${quizData.length} `
    const progress = ((currentQuestion + 1) / quizData.length) * 100
    progressFill.style.width = progress + "%"
    scoreDisplay.textContent = `Score ${score}`


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
    if(selectedAnswer === null) return
    if(selectedAnswer === quizData[currentQuestion].correct){
        score++
    }
    currentQuestion++


    if (currentQuestion < quizData.length) {
        loadQuestion()
    } else {
        localStorage.setItem('quizScore',score);
        if (score >= 4) {
            window.location.href = "hero-win.html"

        } else {
            window.location.href = "hero-loss.html"
        }
    }
}
nextBtn.addEventListener("click",nextQuestion)

loadQuestion()