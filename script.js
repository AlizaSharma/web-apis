var startButton = document.querySelector("#startBtn")

var introPage = document.querySelector(".intro-page")

var questionsPage = document.querySelector(".questions-page")

startButton.addEventListener("click",function () {
    introPage.classList.add("hide") 
    questionsPage.classList.remove("hide") 
})


var questions = [
    {
        question: "Commonly used data types DO Not Include:",
        choices: ["strings","booleans","alerts","numbers"],
        answer: "alerts"
    },
    {
        title: "",
        choices: ["Me", "Us", "We", "Them"],
        answer: "Them"
    },
    {
        title: "Time"
    },
    {
        title: "Ok"
    }
]

questionsPage.textContent = questions[1].title