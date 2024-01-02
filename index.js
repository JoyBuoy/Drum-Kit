for(var i=0;i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    }
//for detecting click 
function handleClick() {
    var buttoninnerHTML=this.innerHTML;
    makesound(buttoninnerHTML);
    flashbtn(buttoninnerHTML);

}

//for detecting keyboard press
document.addEventListener("keydown", function(event){
    makesound(event.key);
    flashbtn(event.key);
});

//function for sound
function makesound(key) {
    switch (key) {
        case "w":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
        case "a":
                var kick = new Audio("sounds/kick-bass.mp3");
                    kick.play();
                    break;                
        case "s":
                var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                        break;
        case "d":
                var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                                break;
        case "j":
                var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                                break;
        case "k":
                var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                                    break;
        case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                                        break;
        default:(console.log(buttoninnerHTML));
            break;
    }

}

function flashbtn(btn) {
    var active_button=document.querySelector("."+btn);
    active_button.classList.add("pressed");
    setTimeout(function() {active_button.classList.remove("pressed");}, 100);
}









//another method:
// var num_drums=document.querySelectorAll(".drum").length;
// for(var i=0;i<num_drums;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function (){ 
//     alert("I have been clicked");
//     }
//     );
//     }

