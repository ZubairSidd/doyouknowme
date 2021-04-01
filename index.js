const readline = require('readline-sync')
const log = console.log

var score = 0
var userName = readline.question('What is your name? \n')
log('Welcome ' + userName + ' to DoYouKnowZubair')
log('------------------------')

function play(question, answer)
{
  var userAnswer = readline.question(question + '\n')
  if(userAnswer.toUpperCase() == answer.toUpperCase())
  {
    score++;
    log('That is Correct')
  }else
  {
    log('That is Wrong')
  }
  log('Your score is: ' + score)
  log('------------------------')
}

question = [
    {
    'question':'Who is my fav superhero?',
    'answer': 'thor'
    },
    {
      'question':'Which is fav sad song?',
      'answer': 'see you again'
    },
    {
      'question':'How old am I?',
      'answer': '20'
    },
    {
      'question':'Where do I live?',
      'answer': 'mumbai'
    },
    {
      'question':'fav movie',
      'answer': 'infinity wars'
    }
  ]