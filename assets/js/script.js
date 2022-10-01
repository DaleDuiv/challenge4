var questionBank= [
  {
      question : 'What does HTML stand for?',
      option : ['HyperTextMarkupLanguage','Hightextmakeuplanguage','How to make lasagne','None of the above'],
      answer : 'HyperTextMarkupLanguage'
  },
  {
      question : 'What does CSS Stand for?',
      option : ['CallingStyleSheet','CascadingStyleSheet','CallingStyleSource','Any of the above'],
      answer : 'CascadingStyleSheet'
  },
  {
      question : 'What year did Javascript come out?',
      option : ['1991','2004','1999','1995'],
      answer : '1995'
  },
  {
      question : 'What do you write to change background colour?',
      option : ['background-color:', 'background-colour:', 'background-rgb:', 'background-change:'],
      answer : 'background-color:'
  },
  {
      question : 'What is used to get an element in Javascript?',
      option : ["getElementById('')","collectElement('')","querySelector('')","displayElement('')"],
      answer : "getElementById('')"
  }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

function displayQuestion(){
  for(var a=0;a<span.length;a++){
      span[a].style.background='none';
  }
  question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
  option0.innerHTML= questionBank[i].option[0];
  option1.innerHTML= questionBank[i].option[1];
  option2.innerHTML= questionBank[i].option[2];
  option3.innerHTML= questionBank[i].option[3];
  stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

function calcScore(e){
  if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
  {
      score= score+1;
      document.getElementById(e.id).style.background= 'limegreen';
  }
  else{
      document.getElementById(e.id).style.background= 'tomato';
  }
  setTimeout(nextQuestion,300);
}

function nextQuestion(){
  if(i<questionBank.length-1)
  {
      i=i+1;
      displayQuestion();
  }
  else{
      points.innerHTML= score+ '/'+ questionBank.length;
      quizContainer.style.display= 'none';
      scoreboard.style.display= 'block'
  }
}

next.addEventListener('click',nextQuestion);

function backToQuiz(){
  location.reload();
}

function checkAnswer(){
  var answerBank= document.getElementById('answerBank');
  var answers= document.getElementById('answers');
  answerBank.style.display= 'block';
  scoreboard.style.display= 'none';
  for(var a=0;a<questionBank.length;a++)
  {
      var list= document.createElement('li');
      list.innerHTML= questionBank[a].answer;
      answers.appendChild(list);
  }
}


displayQuestion();