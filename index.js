// Detecting Button Press
var numberOfDumButtons = document.querySelectorAll(".drum").length

for (var i = 0; i < numberOfDumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function ()
  {
    var buttonInnerHTML = this.innerHTML; // the button of the html that got pressed
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

}
);}

//Detecting keyboard press
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w": //if click on w
        var tom1 = new Audio('sounds/tom-1.mp3'); // it will play this sound
        tom1.play();
      break; //code ends after

      case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
      break;

      case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
      break;

      case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
      break;

      case "j":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
      break;

      case "k":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
      break;

      case "l":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
      break;

    default: console.log(buttonInnerHTML); //something like the else statement. if click on places that are not specified, do this instead;

  }
}

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
// remove the classlist after 1 second to create an animated effect:
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
