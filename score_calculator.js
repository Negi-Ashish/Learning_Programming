let correctAnswers = ["a", "b", "c","e"];
let studentAnswers = ["a", "b", "d","d"];
let score = 0
for(let i = 0; i < correctAnswers.length; i++){
    if(correctAnswers[i] == studentAnswers[i]){
        score = score + 1
    }
}
console.log("The students score is:", score, " /", correctAnswers.length);