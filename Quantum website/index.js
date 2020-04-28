function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;

  var correct = 0;

  if (question1 == "Superposition and Quantum entanglement") {
    correct++;
  }
  if (question2 == "Both option A and B") {
    correct++;
  }
  if (question3 == "over 1,000,000,000 values") {
    correct++;
  }
  if (question4 == "Input as a Superposition and output as a Superposition") {
    correct++;
  }
  if (question5 == "False") {
    correct++;
  }

  var messages = ["Great Job!", "That's okay", "Try again"];
  var pictures = ["https://media0.giphy.com/media/l49JCSwMXyxHnYJws/giphy.gif?cid=e1bb72ff5b9954d659684457510cade7", "https://media1.tenor.com/images/7f90edb1f23388f0684239b52f4366fb/tenor.gif?itemid=5548885", "https://media.giphy.com/media/W1f2ZkNPv3m8P60xvd/giphy.gif"];

  var range;

  if (correct < 1) {
    score = 2;
  }
  if (correct > 0 && correct < 4) {
    score = 1;
  }
  if (correct > 3) {
    score = 0;
  }

  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("message").innerHTML = messages[score];
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct";
  document.getElementById("picture").src = pictures[score];
}
