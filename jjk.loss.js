window.addEventListener("load", () => {
    const finalScore = localStorage.getItem('quizScore');
    const totalQuestions = 5;
    const scoreElement = document.getElementById("final-score");
    if (scoreElement && finalScore !== null) {
        scoreElement.innerHTML = `<p>Your Score: ${finalScore} / ${totalQuestions}<P>`;
        scoreElement.ClassList.add("dramatic-text");
    }
});

function restartQuiz() {
    window.location.href = "jjk.html";

}

function MainMenu() {
    window.location.href = "index.html";
}