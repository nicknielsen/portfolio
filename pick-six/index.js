// alert("Working");

// function rollDice(){
//   var diceArray = [1,2,3,4,5,6];
//   var movieArray = document.querySelectorAll(".movie-input");
//   var randomNumber1 = diceArray[Math.floor(Math.random()*6)];
//   var randomNumber2 = diceArray[Math.floor(Math.random()*6)];
//   document.querySelector(".die1").src = "images/dice"+randomNumber1+".png";
//   document.querySelector(".die2").src = "images/dice"+randomNumber2+".png";
//   for (var i = 0; i < document.querySelectorAll(".movie-input").length; i++) {
//     if (randomNumber1===randomNumber2){
//         document.querySelector(".roll-message").innerText = "Watch " + movieArray[randomNumber1-1].value;
//         console.log(document.querySelectorAll(".movie")[i].value);
//       }
//       else {
//         document.querySelector(".roll-message").innerHTML = "Roll again!"
//       }
//   }
// console.log(randomNumber1);
// console.log(randomNumber2);
// };

let placeholders = ["Monty Python and the Holy Grail","Dr. Strangelove","The Thing","Schindler's List","Parasite","Shrek","Wayne's World","Dumb and Dumber","Get Out","Silence of the Lambs","Pulp Fiction","Inglorious Bastards","Wind River", "There Will Be Blood","The Grand Budapest Hotel", "The Godfather", "Goodfellas", "The Big Lebowski","American Psycho","Interstellar"]

$(".roll-btn").click(function(){
  var diceArray = [1,2,3,4,5,6];
  var movieArray = document.querySelectorAll(".movie-input");
  var randomNumber1 = diceArray[Math.floor(Math.random()*6)];
  var randomNumber2 = diceArray[Math.floor(Math.random()*6)];
  document.querySelector(".die1").src = "images/dice"+randomNumber1+".png";
  document.querySelector(".die2").src = "images/dice"+randomNumber2+".png";
  for (var i = 0; i < document.querySelectorAll(".movie-input").length; i++) {
    if (randomNumber1===randomNumber2){
        document.querySelector(".roll-message").innerHTML = "Watch " + movieArray[randomNumber1-1].value;
        console.log(document.querySelectorAll(".movie")[i].value);
      }
      else {
        document.querySelector(".roll-message").innerHTML = "Roll again!"
      }
  }
console.log(randomNumber1);
console.log(randomNumber2);
});
