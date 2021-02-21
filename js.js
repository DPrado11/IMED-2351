// JavaScript Document
document.write("Pizza Time")

// Hello Title
var myGreeting = document.getElementById("greeting");
myGreeting.setAttribute("align", "center");
myGreeting.setAttribute("style", "color: blue");

//Why the party list
document.getElementsByTagName('ol')[0].style.color = 'orange';

//New Text
var myReasons = document.getElementById("list");
var newItem = document.createElement("li");

var newText = document.createTextNode("AND Everyone Loves Pizza!");

myReasons.appendChild(newItem);
newItem.appendChild(newText);

var greeting = ('This is for the pizza party.');

alert(greeting);

var age = window.prompt("What is your age?")
var name = window.prompt("What is your name?")

if (age > 18) {
  window.alert(name  +  ", you are cool enough for the party");
  window.alert("Dont forget to bring something!");
}
else if (age < 18  && age <30 ) {
  window.alert("Sorry " +  name  + " you cannot come over.")
  window.alert("Maybe next time.")
}
function differentAge(a, b) {
var difference= a- b;
alert ("You have " + difference + " years to go.");
if (age > 18)
alert ("Have fun geezer!");
}
differentAge (18, age);


if (age > 18){
var snacks= prompt ("What are you bringing?");
}
switch(snacks) {
  case "chips":
  alert("We can never have too many chips");
  break;

  case "drinks":
  alert("Bring whatever kind!")
  break;

  case "soda":
  alert("Always gotta be stocked on soda.")
  break;

  case "plates":
  alert("The most important of all.");
  break;

  case "napkins":
  alert("Gotta be prepared.");
  break;

  default: 
  alert("Call or text Sam to check what to bring.");
  break;
} 
  if (age < 18) {
  window.alert("Bye whipper snapper.");
}