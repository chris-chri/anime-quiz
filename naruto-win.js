window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("dramaticText").classList.add("")
    })

const finalScore = localStorage.getItem('quizScore');
const totalQuestions = 5;
const scoreElement = document.getElementById("final-score");
if (scoreElement && finalScore !== null) {
    scoreElement.innerHTML = `<p> Your Score: ${finalScore} / ${totalQuestions}<p>`;

}
})

function restartQuiz() {
    window.location.href = "naruto.html";
}

function MainMenu(){
    window.location.href="index.html";
}