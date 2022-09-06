var readlineSync = require('readline-sync');
var userName = readlineSync.question("Enter your name: ")
console.log("Welcome " + userName + " to a Quiz on The Big Bang Theory")
console.log("-------------------")
function checkAns(ans) {
  var userAns = readlineSync.question('Enter your answer: ').toLowerCase()
  if (userAns === ans) {
    console.log("right!")
    score += 1

  }
  else {
    console.log('wrong answer')
  }
  console.log('Your score: ' + score)
  console.log('-------------------')
}
var questions = [
  { question: "What is the middle name of Sheldon?", answer: "Lee" }, { question: "What is the flat number of Sheldon and Leanard?", answer: "4A" }, { question: "Which character's cookie jar did Sheldon and Leonard have?", answer: "Batman" }, { question: "Who among the four guys doesn't have a PhD?", answer: "Howard" }]
var score = 0
for (i = 0; i < questions.length; i++) {
  console.log(questions[i].question)
  checkAns(questions[i].answer.toLowerCase())
}
console.log('Your final score is ' + score)
