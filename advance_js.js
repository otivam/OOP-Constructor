//Constructor
var Question = function(title,options,correct) {
  this.title = title;
  this.options = options;
  this.correct = correct;
}

//Questions
var q1 = new Question('What is my name?',['Ivan','Gincho','John'],1);
var q2 = new Question('How old am I?',[24,25,26],1);
var q3 = new Question('What I work?',['retired','drummer','police officer'],0);

var questions = [q1,q2,q3];

//Display random question in the  console
Question.prototype.displayQuestion = function() {
    console.log(this.title + '\n' + this.options.indexOf(this.options[0]) + ' ' + this.options[0] + '\n' + this.options.indexOf(this.options[1]) + ' ' +
    this.options[1] + '\n' + this.options.indexOf(this.options[2]) + ' ' + this.options[2]);
};

var score = 0;

while (true) {
  if (userInput === 'exit') {
    break
  } else {
    //Generating a random number from 0 to 2
    var randomNumber = Math.floor(Math.random() * 3);

    //Displaying a random question based on the random generated number
    questions[randomNumber].displayQuestion();

    //Asking the user for an answer
    var userInput = prompt('What is your answer?');


    //Checking the answer
    Question.prototype.isThisCorrect = function() {
      if (this.correct === parseInt(userInput)) {
        score = score + 1;
        console.log('Correct answer! Your result is ' + score);
      } else {
        console.log('Try again! Your result is ' + score);
      }
    };

    questions[randomNumber].isThisCorrect();
  };
};
